// content.js - CDCMS Allocation Helper Content Script

let localState = {
  mappings: {},
  vendors: []
};

// High-security license re-verification (same LicenseWala RPC + public key
// the options page already uses; host permission already in manifest).
// The content script previously trusted the cached status forever, so an
// admin-revoked license kept working on portal pages until the options
// page was opened. Now the portal page itself re-verifies every 30 minutes
// and locks immediately on a server non-active verdict. Network errors keep
// the cached state (bounded by the expiry check at init and the options
// page's 24h offline grace).
const LICENSEWALA_RPC_URL = "https://wyeejbncddpxhwtijkjt.supabase.co/rest/v1/rpc/verify_license";
const LICENSEWALA_ANON_KEY = "sb_publishable_VfUVN_NPMbe9OudO5ZonPw_kMKaub_u";
const LICENSE_RECHECK_MS = 30 * 60 * 1000;

async function reverifyContentLicense() {
  try {
    if (typeof chrome === "undefined" || !chrome.storage || !chrome.storage.local) return;
    const res = await new Promise(r => chrome.storage.local.get(["licenseKey", "deviceId"], r));
    const key = res.licenseKey || "";
    if (!key) return;
    const response = await fetch(LICENSEWALA_RPC_URL, {
      method: "POST",
      headers: {
        "apikey": LICENSEWALA_ANON_KEY,
        "Authorization": `Bearer ${LICENSEWALA_ANON_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        p_license_key: String(key).trim().toUpperCase(),
        p_device_id: res.deviceId || ""
      })
    });
    if (!response.ok) return;
    const result = await response.json();
    if (!result || !result.status) return;
    if (result.status !== "active") {
      chrome.storage.local.set({ licenseStatus: result.status, licenseExpiry: "" });
      const panel = document.getElementById("cdcms-helper-panel");
      if (panel) panel.remove();
      injectLicenseWarningBanner(result.status);
    } else {
      chrome.storage.local.set({
        licenseStatus: "active",
        licenseExpiry: result.expiry || "",
        licenseCompany: result.company || "",
        licenseLastVerified: Date.now()
      });
    }
  } catch (e) { /* network failure: keep cached state */ }
}

// Log helper
function log(msg) {
  console.log(`[CDCMS Helper] ${msg}`);
}

// Show page toast
function showPageToast(message) {
  const toast = document.createElement("div");
  toast.className = "cdcms-toast";
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "cdcmsSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}

// Show premium custom alert modal dialog
function showCustomAlert(title, message, type = 'warning') {
  // If overlay already exists, remove it first
  const existing = document.getElementById("cdcms-alert-overlay");
  if (existing) existing.remove();
  
  const overlay = document.createElement("div");
  overlay.id = "cdcms-alert-overlay";
  overlay.className = "cdcms-modal-overlay";
  
  let iconSvg = '';
  let borderStyle = '';
  
  if (type === 'warning') {
    borderStyle = 'border-color: rgba(245, 158, 11, 0.25) !important; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(245, 158, 11, 0.15) !important;';
    iconSvg = `
      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="color: #f59e0b;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
    `;
  } else {
    borderStyle = 'border-color: rgba(16, 185, 129, 0.25) !important; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(16, 185, 129, 0.15) !important;';
    iconSvg = `
      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="color: #10b981;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    `;
  }
  
  overlay.innerHTML = `
    <div class="cdcms-modal-box" style="${borderStyle}">
      <div class="cdcms-modal-header">
        <div class="cdcms-modal-icon">
          ${iconSvg}
        </div>
        <div class="cdcms-modal-title">${title}</div>
      </div>
      <div class="cdcms-modal-body">
        ${message}
      </div>
      <div class="cdcms-modal-footer">
        <button class="cdcms-modal-btn" id="cdcms-modal-close-btn" style="background: ${type === 'warning' ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'linear-gradient(135deg, #10b981, #059669)'}; box-shadow: 0 4px 12px ${type === 'warning' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)'};">OK</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(overlay);
  
  // Trigger transition active
  setTimeout(() => {
    overlay.classList.add("active");
  }, 20);
  
  // Focus OK button for keyboard enter accessibility
  const closeBtn = overlay.querySelector("#cdcms-modal-close-btn");
  closeBtn.focus();
  
  // Close handler
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    setTimeout(() => {
      overlay.remove();
    }, 250);
  });
}

// Find the Refill Details Allocation Table on the page
function findRefillTable() {
  // Scrape tables
  const tables = document.querySelectorAll("table");
  for (const table of tables) {
    const text = table.innerText || "";
    // Table should contain AREA NAME, TOTAL PENDING BOOKINGS, ALLOCATE CYLINDER
    if (
      text.includes("AREA NAME") && 
      text.includes("TOTAL PENDING BOOKINGS") && 
      text.includes("ALLOCATE CYLINDER")
    ) {
      return table;
    }
  }
  return null;
}

// Scrape and parse rows in the table
function getTableRows() {
  const table = findRefillTable();
  if (!table) return [];
  
  // Find all trs
  const rows = table.querySelectorAll("tr");
  const dataRows = [];
  
  rows.forEach(row => {
    // A valid data row has a checkbox, a text input, and a select dropdown
    const checkbox = row.querySelector("input[type='checkbox']");
    const textInput = row.querySelector("input[type='text']");
    const select = row.querySelector("select");
    
    if (checkbox && textInput && select) {
      dataRows.push({
        element: row,
        checkbox,
        textInput,
        select
      });
    }
  });
  
  return dataRows;
}

// Extract Area Code from Area Name text
// Example: "PANDAUL BAZAR (1)" -> "1"
function extractAreaCode(rowElement) {
  // Area Name is typically in the second column (td)
  const tds = rowElement.querySelectorAll("td");
  if (tds.length < 2) return null;
  
  const areaNameText = tds[1].innerText.trim();
  const match = areaNameText.match(/\((.+?)\)$/); // Match content inside the last parenthesis
  if (match && match[1]) {
    return match[1].trim();
  }
  
  // Alternative fallback check in text content
  const text = rowElement.innerText || "";
  const matchFallback = text.match(/.*\((.+?)\)/);
  if (matchFallback && matchFallback[1]) {
    return matchFallback[1].trim();
  }
  
  return null;
}

// Get Total Pending Bookings value from row
function getPendingBookingsCount(rowElement) {
  const tds = rowElement.querySelectorAll("td");
  if (tds.length < 3) return 0;
  
  // Third column is usually Total Pending Bookings
  const val = parseInt(tds[2].innerText.trim());
  return isNaN(val) ? 0 : val;
}

// Scrape both Areas and Delivery Men options from the current page
function syncPortalData() {
  const rows = getTableRows();
  if (rows.length === 0) {
    showPageToast("No Refill table or data rows found on this page.");
    return;
  }
  
  const scrapedVendors = new Set();
  const scrapedAreas = [];
  const areaCodesSeen = new Set();
  
  rows.forEach(row => {
    // 1. Scrape Area Name & Code
    const code = extractAreaCode(row.element);
    const tds = row.element.querySelectorAll("td");
    if (code && tds.length >= 2 && !areaCodesSeen.has(code)) {
      areaCodesSeen.add(code);
      let areaNameText = tds[1].innerText.trim();
      // Remove bracket code at the end (e.g. "PANDAUL BAZAR (1)" -> "PANDAUL BAZAR")
      areaNameText = areaNameText.replace(/\s*\(\d+\)$/, "").trim();
      scrapedAreas.push({ code: code, name: areaNameText });
    }
    
    // 2. Scrape Vendors
    const select = row.select;
    if (select) {
      Array.from(select.options).forEach(opt => {
        const text = opt.text.trim();
        const value = opt.value.trim();
        if (
          text && 
          value && 
          !text.toLowerCase().includes("select") && 
          !text.includes("--")
        ) {
          scrapedVendors.add(text);
        }
      });
    }
  });
  
  const vendorList = Array.from(scrapedVendors);
  if (scrapedAreas.length > 0 || vendorList.length > 0) {
    // Load existing database and update
    chrome.storage.local.get(["areas", "vendors"], (result) => {
      // Overwrite areas with latest from active portal, fallback to stored
      const updatedAreas = scrapedAreas.length > 0 ? scrapedAreas : (result.areas || []);
      
      // Merge unique vendors
      const existingVendors = result.vendors || [];
      const mergedVendors = Array.from(new Set([...existingVendors, ...vendorList]));
      
      chrome.storage.local.set({
        areas: updatedAreas,
        vendors: mergedVendors
      }, () => {
        localState.vendors = mergedVendors;
        showPageToast(`Synced ${updatedAreas.length} Areas & ${vendorList.length} Delivery Men!`);
        updatePanelStats();
      });
    });
  } else {
    showPageToast("Could not extract any data from this page.");
  }
}

// Find page submit / allocate button
function findSubmitButton() {
  // Search for buttons containing typical texts
  const buttons = document.querySelectorAll("input[type='submit'], input[type='button'], button");
  for (const btn of buttons) {
    const val = (btn.value || btn.innerText || "").toLowerCase();
    const id = (btn.id || "").toLowerCase();
    
    if (
      val.includes("allocate booking") || 
      val.includes("allocatebooking") || 
      val.includes("allocate") ||
      id.includes("allocate") || 
      id.includes("btnallocate")
    ) {
      return btn;
    }
  }
  
  // Fallback: look for "Apply" button near the table
  for (const btn of buttons) {
    const val = (btn.value || btn.innerText || "").toLowerCase();
    if (val === "apply") {
      return btn;
    }
  }
  
  return null;
}

// Auto-fill form values using mapped configurations
async function autoFillAllocation() {
  const rows = getTableRows();
  if (rows.length === 0) {
    showPageToast("Refill Table not found on page.");
    return;
  }
  
  let filledCount = 0;
  let warnCount = 0;
  
  for (const row of rows) {
    const code = extractAreaCode(row.element);
    if (!code) {
      log("Could not extract area code for row: " + row.element.innerText);
      continue;
    }
    
    const mappedVendorName = localState.mappings[code];
    if (mappedVendorName) {
      // 1. Fill Allocate Cylinder count
      const pendingCount = getPendingBookingsCount(row.element);
      row.textInput.value = pendingCount;
      
      // Dispatch events for state engines
      row.textInput.dispatchEvent(new Event("input", { bubbles: true }));
      row.textInput.dispatchEvent(new Event("change", { bubbles: true }));
      row.textInput.dispatchEvent(new Event("blur", { bubbles: true }));
      
      // 2. Tick Select Checkbox FIRST
      if (!row.checkbox.checked) {
        row.checkbox.checked = true;
        row.checkbox.dispatchEvent(new Event("click", { bubbles: true }));
        row.checkbox.dispatchEvent(new Event("change", { bubbles: true }));
        
        // Wait 100ms to allow page script to enable/render/populate the dropdown options
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Get fresh reference of the select element in case page script replaced it in DOM
      const activeSelect = row.element.querySelector("select") || row.select;
      
      // 3. Select Vendor in select dropdown
      let matchedOption = null;
      Array.from(activeSelect.options).forEach(opt => {
        if (opt.text.trim() === mappedVendorName.trim()) {
          matchedOption = opt.value;
        }
      });
      
      if (matchedOption) {
        activeSelect.value = matchedOption;
        activeSelect.dispatchEvent(new Event("change", { bubbles: true }));
        
        // Style row success
        row.element.classList.add("cdcms-highlight-row");
        row.element.classList.remove("cdcms-warn-row");
        filledCount++;
      } else {
        // Vendor name exists in mapping but not in this dropdown!
        log(`Vendor '${mappedVendorName}' mapped to area ${code} is not an option in dropdown.`);
        row.element.classList.add("cdcms-warn-row");
        warnCount++;
      }
    }
  }
  
  if (filledCount > 0) {
    showPageToast(`Auto-filled ${filledCount} areas successfully!`);
  } else {
    showPageToast("No mapped areas found in current list.");
  }
  
  if (warnCount > 0) {
    showCustomAlert('Allocation Warning', `Warning: <b>${warnCount} mapped delivery men</b> names were not found in the page dropdowns. Please double-check their spelling in the Dashboard.`, 'warning');
  }
}

// Page detection helper
function isPrintPage() {
  return window.location.href.includes("AllocationWiseCashMemoPrint.aspx") || window.location.href.includes("mock_print.html");
}

// Find Print page table
function findPrintTable() {
  const tables = document.querySelectorAll("table");
  for (const table of tables) {
    const text = table.innerText || "";
    if (text.includes("ALLOCATION ID") && text.includes("TOTAL ALLOCATED QTY")) {
      return table;
    }
  }
  return null;
}

// Get print checkboxes in table body
function getPrintCheckboxes() {
  const table = findPrintTable();
  if (!table) return [];
  
  // Find checkboxes specifically in the tbody data rows (ignoring header)
  const rows = table.querySelectorAll("tbody tr, tr");
  const checkboxes = [];
  
  rows.forEach(row => {
    // Ignore header row (usually contains th elements)
    if (row.querySelector("th")) return;
    const cb = row.querySelector("input[type='checkbox']");
    if (cb) checkboxes.push(cb);
  });
  
  return checkboxes;
}

// Find Prepare Cash Memo Print button
function findPreparePrintButton() {
  const buttons = document.querySelectorAll("input[type='submit'], input[type='button'], button");
  for (const btn of buttons) {
    const val = (btn.value || btn.innerText || "").toLowerCase();
    const id = (btn.id || "").toLowerCase();
    if (
      val.includes("prepare cash") || 
      val.includes("preparecash") || 
      id.includes("prepare") || 
      id.includes("btnprepare")
    ) {
      return btn;
    }
  }
  return null;
}

// Find Print button (excluding prepare button)
function findPrintButton() {
  const buttons = document.querySelectorAll("input[type='submit'], input[type='button'], button");
  for (const btn of buttons) {
    const val = (btn.value || btn.innerText || "").toLowerCase();
    const id = (btn.id || "").toLowerCase();
    if (
      (val.includes("print") && !val.includes("prepare")) || 
      (id.includes("print") && !id.includes("prepare"))
    ) {
      return btn;
    }
  }
  return null;
}

// Select all print transactions and trigger prepare memo print
async function selectAllAndPrepare() {
  const checkboxes = getPrintCheckboxes();
  if (checkboxes.length === 0) {
    showPageToast("No transaction rows found on the page.");
    return;
  }
  
  let tickedCount = 0;
  checkboxes.forEach(cb => {
    if (!cb.checked) {
      cb.checked = true;
      cb.dispatchEvent(new Event("click", { bubbles: true }));
      cb.dispatchEvent(new Event("change", { bubbles: true }));
    }
    tickedCount++;
  });
  
  showPageToast(`Selected all ${tickedCount} rows!`);
  
  // Wait 200ms for page scripts to register checked states and enable the button
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const prepareBtn = findPreparePrintButton();
  if (prepareBtn) {
    showPageToast("Submitting Prepare Cash Memo Print...");
    prepareBtn.click();
  } else {
    showCustomAlert('Print Helper Error', "Could not find the <b>Prepare Cash Memo Print</b> button on this page. Please click it manually at the bottom of the page.", 'warning');
  }
}

// Injects floating UI panel (Page Aware)
function injectControlPanel() {
  // If panel already exists, don't duplicate
  if (document.getElementById("cdcms-helper-panel")) return;
  
  const panel = document.createElement("div");
  panel.id = "cdcms-helper-panel";
  panel.className = "collapsed"; // starts collapsed to not obstruct user
  
  const onPrintPage = isPrintPage();
  
  if (onPrintPage) {
    // Print Page UI
    panel.innerHTML = `
      <div class="cdcms-panel-header" id="cdcms-header">
        <div class="cdcms-panel-title" style="display: flex; flex-direction: column; align-items: flex-start; gap: 2px;">
          <div style="font-size: 9px; opacity: 0.8; font-weight: 700; letter-spacing: 1px; color: #818cf8; text-transform: uppercase;">MR.RAHUL SCRIPTS</div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
            </svg>
            <span style="font-size: 13px; font-weight: 600;">CDCMS Print Helper</span>
          </div>
        </div>
        <button class="cdcms-collapse-btn" id="cdcms-collapse">
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
          </svg>
        </button>
      </div>
      
      <div class="cdcms-panel-body">
        <div class="cdcms-stat-row">
          <span>Transactions Available:</span>
          <span class="cdcms-stat-val" id="cdcms-print-rows-count">0 Rows</span>
        </div>
        
        <button id="cdcms-btn-select-prepare" class="cdcms-btn-success">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.235.235 0 0 0-.02-.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
          </svg>
          Select All &amp; Prepare Print
        </button>
        
        <button id="cdcms-btn-print-trigger" class="cdcms-btn-primary">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3z"/>
          </svg>
          Print Cash Memos
        </button>
        
        <div class="cdcms-divider"></div>
        <div class="cdcms-footer">
          MR.RAHUL SCRIPTS &bull; Print Automation
        </div>
      </div>
    `;
  } else {
    // Allocation Page UI (Default)
    panel.innerHTML = `
      <div class="cdcms-panel-header" id="cdcms-header">
        <div class="cdcms-panel-title" style="display: flex; flex-direction: column; align-items: flex-start; gap: 2px;">
          <div style="font-size: 9px; opacity: 0.8; font-weight: 700; letter-spacing: 1px; color: #818cf8; text-transform: uppercase;">MR.RAHUL SCRIPTS</div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.5 .5a.5.5 0 0 0-.75-.43L.5 8.2a.5.5 0 0 0-.05.88l4.1 2.33 2.3 4.14A.5.5 0 0 0 7.7 16h.05a.5.5 0 0 0 .44-.33l7.46-14.7a.5.5 0 0 0-.15-.47z"/>
            </svg>
            <span style="font-size: 13px; font-weight: 600;">CDCMS Allocator Helper</span>
          </div>
        </div>
        <button class="cdcms-collapse-btn" id="cdcms-collapse">
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
          </svg>
        </button>
      </div>
      
      <div class="cdcms-panel-body">
        <div class="cdcms-stat-row">
          <span>Mapped Areas Configured:</span>
          <span class="cdcms-stat-val" id="cdcms-stat-mappings">0</span>
        </div>
        
        <button id="cdcms-btn-autofill" class="cdcms-btn-success">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02-.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>
          Auto-Fill Allocation
        </button>
        
        <button id="cdcms-btn-sync" class="cdcms-btn-secondary">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-7.1 2h3.932a.25.25 0 0 0 .192-.41L6.592 6.23a.25.25 0 0 0-.384 0L4.242 8.59a.25.25 0 0 0 .192.41z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg>
          Save Dropdown Delivery Men
        </button>
        
        <button id="cdcms-btn-submit" class="cdcms-btn-primary">
          Submit Allocation
        </button>
        
        <div class="cdcms-divider"></div>
        
        <div class="cdcms-footer">
          Configure mappings in the 
          <a href="#" id="cdcms-link-dashboard" class="cdcms-link">Dashboard Settings</a>
        </div>
      </div>
    `;
  }
  
  document.body.appendChild(panel);
  
  // Header toggle collapse listener
  const header = document.getElementById("cdcms-header");
  header.addEventListener("click", () => {
    panel.classList.toggle("collapsed");
  });
  
  // Set up page-specific button listeners
  if (onPrintPage) {
    const btnSelectPrepare = document.getElementById("cdcms-btn-select-prepare");
    btnSelectPrepare.addEventListener("click", selectAllAndPrepare);
    
    const btnPrintTrigger = document.getElementById("cdcms-btn-print-trigger");
    btnPrintTrigger.addEventListener("click", () => {
      const printBtn = findPrintButton();
      if (printBtn) {
        showPageToast("Opening print dialogue...");
        printBtn.click();
      } else {
        showCustomAlert('Print Helper Error', "Could not find the <b>Print</b> button on the page. Ensure you have run 'Prepare Cash Memo' first.", 'warning');
      }
    });
    
    // Update count of rows
    const countSpan = document.getElementById("cdcms-print-rows-count");
    if (countSpan) {
      const count = getPrintCheckboxes().length;
      countSpan.innerText = `${count} Transactions Found`;
    }
  } else {
    // Allocation page listeners
    const btnAutofill = document.getElementById("cdcms-btn-autofill");
    btnAutofill.addEventListener("click", autoFillAllocation);
    
    const btnSync = document.getElementById("cdcms-btn-sync");
    btnSync.addEventListener("click", syncPortalData);
    
    const btnSubmit = document.getElementById("cdcms-btn-submit");
    btnSubmit.addEventListener("click", () => {
      const pageBtn = findSubmitButton();
      if (pageBtn) {
        showPageToast("Submitting cylinder allocation...");
        pageBtn.click();
      } else {
        showCustomAlert('Allocation Helper Error', "Could not find the <b>Allocate Booking</b> button on the page. Please click it manually at the bottom of the page.", 'warning');
      }
    });
    
    const linkDashboard = document.getElementById("cdcms-link-dashboard");
    linkDashboard.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({ action: "open_options" });
      } else {
        window.open("options.html", "_blank");
      }
    });
    
    updatePanelStats();
  }
}

// Sync counts to Panel (For Allocation Page)
function updatePanelStats() {
  if (isPrintPage()) return;
  const countSpan = document.getElementById("cdcms-stat-mappings");
  if (countSpan) {
    const size = Object.keys(localState.mappings).length;
    countSpan.innerText = `${size} Areas Mapped`;
  }
}

// Sync from Storage
function syncWithStorage() {
  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(["mappings", "vendors"], (result) => {
      localState.mappings = result.mappings || {};
      localState.vendors = result.vendors || [];
      updatePanelStats();
    });
    
    // Listen for storage changes in real-time
    chrome.storage.onChanged.addListener((changes) => {
      if (changes.mappings) {
        localState.mappings = changes.mappings.newValue || {};
      }
      if (changes.vendors) {
        localState.vendors = changes.vendors.newValue || [];
      }
      updatePanelStats();
    });
  } else {
    // Local standalone testing
    const localMappings = localStorage.getItem("cdcms_mappings");
    const localVendors = localStorage.getItem("cdcms_vendors");
    localState.mappings = localMappings ? JSON.parse(localMappings) : {};
    localState.vendors = localVendors ? JSON.parse(localVendors) : [];
  }
}

// Inject warning banner when license is inactive or expired
function injectLicenseWarningBanner(status) {
  // Check if banner already exists
  if (document.getElementById("cdcms-license-warning-banner")) return;

  const banner = document.createElement("div");
  banner.id = "cdcms-license-warning-banner";
  banner.style.cssText = `
    background: linear-gradient(135deg, #ef4444, #b91c1c) !important;
    color: white !important;
    font-family: Arial, sans-serif !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    padding: 12px 20px !important;
    text-align: center !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    z-index: 10000000 !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4) !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 15px !important;
    box-sizing: border-box !important;
  `;
  
  let statusText = "License Key Required";
  let btnText = "Activate License";
  if (status === "expired") {
    statusText = "License Key Expired";
    btnText = "Renew License";
  } else if (status === "pending") {
    statusText = "Payment Verification Pending";
    btnText = "Check Status";
  } else if (status === "device_mismatch") {
    statusText = "Device Lock Active (Already in use on another computer)";
    btnText = "View License Settings";
  }

  banner.innerHTML = `
    <span style="color: white !important; font-size: 14px !important;">⚠️ CDCMS Allocation Helper: [${statusText}]. Auto allocation is disabled.</span>
    <button id="cdcms-btn-open-dashboard" style="background: white !important; color: #b91c1c !important; border: none !important; padding: 6px 14px !important; border-radius: 4px !important; font-weight: 700 !important; cursor: pointer !important; font-size: 12px !important; box-shadow: 0 2px 5px rgba(0,0,0,0.2) !important;">${btnText}</button>
  `;
  
  document.body.appendChild(banner);
  document.body.style.marginTop = "45px"; // Push page content down

  document.getElementById("cdcms-btn-open-dashboard").addEventListener("click", () => {
    if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
      chrome.runtime.sendMessage({ action: "open_options" });
    }
  });
}

// Initialize content script
function initContentScript() {
  log("Initializing content script...");

  // Retrieve license information from storage first
  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(["licenseStatus", "licenseExpiry"], (res) => {
      const status = res.licenseStatus || "unregistered";
      const expiry = res.licenseExpiry || "";
      const today = new Date().toISOString().split('T')[0];

      if (status === "active" && expiry >= today) {
        log("License valid. Activating helper.");
        proceedWithInitialization();
        reverifyContentLicense();
        setInterval(reverifyContentLicense, LICENSE_RECHECK_MS);
      } else {
        log(`License invalid or expired (Status: ${status}, Expiry: ${expiry}). Locking helper.`);
        injectLicenseWarningBanner(status);
      }
    });
  } else {
    // Standalone HTML testing mode
    const status = localStorage.getItem("cdcms_license_status") || "unregistered";
    const expiry = localStorage.getItem("cdcms_license_expiry") || "";
    const today = new Date().toISOString().split('T')[0];

    if (status === "active" && expiry >= today) {
      proceedWithInitialization();
    } else {
      injectLicenseWarningBanner(status);
    }
  }
}

// Proceed with loading storage mappings and UI panels
function proceedWithInitialization() {
  syncWithStorage();
  
  // Wait for document to load completely
  if (document.readyState === "complete" || document.readyState === "interactive") {
    injectControlPanel();
  } else {
    window.addEventListener("DOMContentLoaded", injectControlPanel);
  }
}

// Start execution
initContentScript();

