// Default Area list provided by user
const DEFAULT_AREAS = [
  { code: "1", name: "PANDAUL BAZAR" },
  { code: "2", name: "SAGARPUR" },
  { code: "3", name: "BRAHMOTRA" },
  { code: "4", name: "KAMALPUR" },
  { code: "5", name: "YAMSAM" },
  { code: "6", name: "PACHADI" },
  { code: "7", name: "MOMINPUR" },
  { code: "8", name: "DIHTOLA" },
  { code: "9", name: "BHAUARA" },
  { code: "10", name: "MAKSUDA" },
  { code: "11", name: "BISFI" },
  { code: "12", name: "BENIPATTI" },
  { code: "13", name: "JHANJHARPUR" },
  { code: "14", name: "RAHIKA" },
  { code: "15", name: "OTHERS" },
  { code: "16", name: "SAKRI" },
  { code: "17", name: "BHAWANIPUR" },
  { code: "18", name: "SOHRAY" },
  { code: "19", name: "LOHAT" },
  { code: "20", name: "BELAHI" },
  { code: "21", name: "BARAGAON" },
  { code: "22", name: "GANDHWARI" },
  { code: "23", name: "BHAGIRATHPUR" },
  { code: "24", name: "MOKRAMPUR" },
  { code: "25", name: "MEGHAUL" },
  { code: "26", name: "KAKNA" },
  { code: "27", name: "NARPATINAGAR" },
  { code: "28", name: "SAMBHUAR" },
  { code: "29", name: "MOHAN BADHIYAM" },
  { code: "30", name: "SARISABPAHI" },
  { code: "31", name: "AMIRGANJ" },
  { code: "32", name: "MOHIUDDINPUR" },
  { code: "33", name: "LAKHANPATTI" },
  { code: "34", name: "KANAKPUR" },
  { code: "35", name: "DHEPURA" },
  { code: "36", name: "DHIBAT MADHOPUR" },
  { code: "37", name: "BIRSAIR" },
  { code: "38", name: "BHOUR" },
  { code: "39", name: "SALEMPUR" },
  { code: "40", name: "NIMA" },
  { code: "41", name: "MADHUBANI" },
  { code: "42", name: "FATEHPUR" },
  { code: "43", name: "KHAJURI" },
  { code: "44", name: "BHAGWATIPUR" },
  { code: "45", name: "UDAYPUR BITHUAR" },
  { code: "46", name: "JHAGARUA" },
  { code: "47", name: "KHARRA" },
  { code: "48", name: "BIKRAMPUR BALIYA" },
  { code: "49", name: "KAJIYANA" },
  { code: "50", name: "BATHNE" },
  { code: "51", name: "RAMPATTI" },
  { code: "52", name: "SHEKHPUR" },
  { code: "53", name: "SHRIPURHATTI" },
  { code: "54", name: "KAMLABARI" },
  { code: "55", name: "GURMAHA" },
  { code: "56", name: "BIHNGNAR-BIROUL" },
  { code: "57", name: "BHITTI" },
  { code: "58", name: "RAJNAGAR" },
  { code: "59", name: "RAIYAM" },
  { code: "60", name: "SHAHPUR" },
  { code: "61", name: "TARSARAI" },
  { code: "62", name: "MADHEPURA" },
  { code: "63", name: "BALHA" },
  { code: "65", name: "BITHUAR" },
  { code: "66", name: "SISAUNA" },
  { code: "68", name: "ANDAH" },
  { code: "69", name: "BASHUARA" },
  { code: "70", name: "SIMARI" },
  { code: "71", name: "LAKSHMIPUR KANUAHI" },
  { code: "72", name: "MALANGIYA" },
  { code: "73", name: "IJARA" },
  { code: "74", name: "KHARAUA" },
  { code: "75", name: "BALANT" },
  { code: "76", name: "DUMRI" },
  { code: "77", name: "SATGHARA" },
  { code: "78", name: "GANGAPUR" },
  { code: "79", name: "MADHOPUR" },
  { code: "80", name: "NAWADA DHANUKI" },
  { code: "81", name: "MANGRAUNI" },
  { code: "82", name: "BHACHCHHI" },
  { code: "83", name: "SANOUR" },
  { code: "84", name: "GANGAULI" },
  { code: "85", name: "BHOJ PANDAUL" },
  { code: "86", name: "JARHATIYA" },
  { code: "87", name: "SANKORTH" },
  { code: "88", name: "DHAHUARA" },
  { code: "89", name: "KHAJAULI" },
  { code: "100", name: "DARBHANGA" },
  { code: "999", name: "Auto SV Area" },
  { code: "1000", name: "13746700-SHIV KRIPA HP GAS AGENCY-RFL-PORT" },
  { code: "1001", name: "13654200-JAI MATA RANI HP GAS GRAMIN VITARAK-RFL-PORT" },
  { code: "1002", name: "13863500-SHAKILA HP GAS GRAMIN VITRAK-RFL-PORT" },
  { code: "1003", name: "41047057-JAI MATA RANI HP GAS GRAMIN VITARAK-RFL-PORT" },
  { code: "1004", name: "41039305-SHIV KRIPA HP GAS AGENCY-RFL-PORT" },
  { code: "1005", name: "41030136-SHAKILA HP GAS GRAMIN VITRAK-RFL-PORT" },
  { code: "1006", name: "4103930541016078PANDAUL BAZAR" },
  { code: "1007", name: "4103930541016078SAKRI" },
  { code: "1008", name: "4103930541016078YAMSAM" },
  { code: "1009", name: "4103930541016078BHAWANIPUR" },
  { code: "1010", name: "4103930541016078SAGARPUR" },
  { code: "1011", name: "4103930541016078BIRSAIR" },
  { code: "1012", name: "4103930541016078DIHTOLA" },
  { code: "1013", name: "4103930541016078GANDHWARI" },
  { code: "1014", name: "4103930541016078KAMALPUR" },
  { code: "1015", name: "4103930541016078MAKSUDA" },
  { code: "1016", name: "4103930541016078MOHAN BADHIYAM" },
  { code: "1017", name: "4103930541016078-SHIVSHAKTI HP GAS AGENCY-RFL-PORT" }
];

// --- LICENSE SYSTEM CONFIGURATION ---
// LicenseWala portal: keys are issued here, and verification goes directly
// to the portal's Supabase license RPC — no intermediate backend.
const LICENSEWALA_RPC_URL = "https://wyeejbncddpxhwtijkjt.supabase.co/rest/v1/rpc/verify_license";
const LICENSEWALA_ANON_KEY = "sb_publishable_VfUVN_NPMbe9OudO5ZonPw_kMKaub_u";
const NETLIFY_PORTAL_URL = "https://licensescript.netlify.app/"; // <-- Replace with your Netlify portal URL

// App State
let state = {
  mappings: {},   // areaCode -> vendorName
  vendors: [],    // list of vendorNames
  areas: []       // list of Area objects {code, name}
};

let licenseState = {
  key: "",
  status: "checking", // active, pending, expired, invalid, checking
  expiry: "",
  company: ""
};

// DOM Elements
const mappingTbody = document.getElementById("mapping-tbody");
const searchBox = document.getElementById("search-box");
const filterSelect = document.getElementById("filter-select");
const newVendorNameInput = document.getElementById("new-vendor-name");
const btnAddVendor = document.getElementById("btn-add-vendor");
const vendorPasteArea = document.getElementById("vendor-paste-area");
const btnAddVendorsBulk = document.getElementById("btn-add-vendors-bulk");
const btnClearAllVendors = document.getElementById("btn-clear-all-vendors");
const vendorTagsContainer = document.getElementById("vendor-tags-container");
const btnSaveAll = document.getElementById("btn-save-all");
const btnExport = document.getElementById("btn-export");
const btnImport = document.getElementById("btn-import");
const importFileInput = document.getElementById("import-file");
const toastContainer = document.getElementById("toast-container");

// Excel Bulk Import Elements
const excelPasteArea = document.getElementById("excel-paste-area");
const btnImportAppend = document.getElementById("btn-import-append");
const btnImportReplace = document.getElementById("btn-import-replace");
const btnClearAllAreas = document.getElementById("btn-clear-all-areas");

// Stats elements
const statTotalAreas = document.getElementById("stat-total-areas");
const statMappedAreas = document.getElementById("stat-mapped-areas");
const statUnmappedAreas = document.getElementById("stat-unmapped-areas");
const statTotalVendors = document.getElementById("stat-total-vendors");

// License Specific DOM Elements
const licenseBadge = document.getElementById("license-badge");
const btnLicenseSettings = document.getElementById("btn-license-settings");
const mainDashboardContent = document.getElementById("main-dashboard-content");
const licenseActivationScreen = document.getElementById("license-activation-screen");
const inputLicenseKey = document.getElementById("input-license-key");
const btnActivateLicense = document.getElementById("btn-activate-license");
const btnBuyLicense = document.getElementById("btn-buy-license");
const activationErrorMsg = document.getElementById("activation-error-msg");

// License Modal DOM Elements
const licenseModal = document.getElementById("license-modal");
const btnCloseLicenseModal = document.getElementById("btn-close-license-modal");
const modalLicenseKeyDisplay = document.getElementById("modal-license-key-display");
const modalCompanyDisplay = document.getElementById("modal-company-display");
const modalExpiryDisplay = document.getElementById("modal-expiry-display");
const inputNewLicenseKey = document.getElementById("input-new-license-key");
const btnUpdateLicenseKey = document.getElementById("btn-update-license-key");
const modalErrorMsg = document.getElementById("modal-error-msg");

// Get or Create Unique Device ID (Fingerprint)
function getOrCreateDeviceId() {
  return new Promise((resolve) => {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(["deviceId"], (result) => {
        if (result.deviceId) {
          resolve(result.deviceId);
        } else {
          const newId = "dev-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          chrome.storage.local.set({ deviceId: newId }, () => resolve(newId));
        }
      });
    } else {
      let localId = localStorage.getItem("cdcms_device_id");
      if (!localId) {
        localId = "mock-dev-" + Math.random().toString(36).substring(2, 15);
        localStorage.setItem("cdcms_device_id", localId);
      }
      resolve(localId);
    }
  });
}

// Verify a license key against the LicenseWala portal (Supabase RPC).
// Keeps the same {status, expiry, company, message} response shape the
// existing callers (checkLicense, syncLicenseOnline, activation handlers)
// already expect, so their status handling and UI messages stay untouched.
// A non-2xx response throws so callers fall back to the cached license,
// exactly like the old network-failure path.
async function apiPost(data) {
  if (!data || data.action !== "verify_license") {
    return { status: "invalid", message: "Unsupported license action." };
  }
  const key = String(data.licenseKey || "").trim().toUpperCase();
  if (!key) {
    return { status: "invalid", message: "Please enter a valid License Key." };
  }

  const response = await fetch(LICENSEWALA_RPC_URL, {
    method: "POST",
    headers: {
      "apikey": LICENSEWALA_ANON_KEY,
      "Authorization": `Bearer ${LICENSEWALA_ANON_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      p_license_key: key,
      p_device_id: data.deviceId || ""
    })
  });
  if (!response.ok) {
    throw new Error(`License server returned ${response.status}`);
  }
  return await response.json();
}

// Check License status
async function checkLicense(forceOnline = false) {
  licenseBadge.textContent = "Verifying...";
  licenseBadge.className = "status-badge status-unmapped";

  let savedKey = "";
  let cachedStatus = "";
  let cachedExpiry = "";
  let cachedCompany = "";
  let cachedLastVerified = 0;

  // Retrieve from storage
  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
    const res = await new Promise(r => chrome.storage.local.get(["licenseKey", "licenseStatus", "licenseExpiry", "licenseCompany", "licenseLastVerified"], r));
    savedKey = res.licenseKey || "";
    cachedStatus = res.licenseStatus || "";
    cachedExpiry = res.licenseExpiry || "";
    cachedCompany = res.licenseCompany || "";
    cachedLastVerified = res.licenseLastVerified || 0;
  } else {
    savedKey = localStorage.getItem("cdcms_license_key") || "";
    cachedStatus = localStorage.getItem("cdcms_license_status") || "";
    cachedExpiry = localStorage.getItem("cdcms_license_expiry") || "";
    cachedCompany = localStorage.getItem("cdcms_license_company") || "";
    cachedLastVerified = Number(localStorage.getItem("cdcms_license_last_verified") || 0);
  }

  if (!savedKey) {
    updateLicenseUI("unregistered", "", "", "");
    return false;
  }

  // If we have cached active status, and not forcing online, check if expiry is still valid offline
  if (cachedStatus === "active" && cachedExpiry && !forceOnline) {
    const today = new Date().toISOString().split('T')[0];
    if (cachedExpiry >= today) {
      updateLicenseUI("active", savedKey, cachedExpiry, cachedCompany);
      // Run an async online sync check in background without blocking user
      syncLicenseOnline(savedKey);
      return true;
    }
  }

  // Online verification
  try {
    const deviceId = await getOrCreateDeviceId();
    const result = await apiPost({
      action: "verify_license",
      licenseKey: savedKey,
      deviceId: deviceId
    });

    if (result && result.status === "active") {
      updateLicenseUI("active", savedKey, result.expiry, result.company);
      // Cache response
      saveLicenseCache(savedKey, "active", result.expiry, result.company);
      return true;
    } else {
      const status = result ? result.status : "invalid";
      const msg = result ? (result.message || "License is invalid") : "License check failed";
      updateLicenseUI(status, savedKey, "", "", msg);
      saveLicenseCache(savedKey, status, "", "");
      return false;
    }
  } catch (err) {
    console.error("License check failed, using cache: ", err);
    // Network failed: offline usage is allowed ONLY within 24h of the last
    // successful server verification. Beyond that the tool locks until the
    // server can be reached again, so a revoked license cannot run offline
    // indefinitely on a stale cache.
    const OFFLINE_GRACE_MS = 24 * 60 * 60 * 1000;
    if (cachedStatus === "active" && cachedLastVerified && (Date.now() - cachedLastVerified) <= OFFLINE_GRACE_MS) {
      updateLicenseUI("active", savedKey, cachedExpiry, cachedCompany);
      return true;
    } else {
      updateLicenseUI("invalid", savedKey, "", "", "Offline: Server connection failed and offline grace has expired. Connect to the internet to re-verify.");
      return false;
    }
  }
}

// Background sync
async function syncLicenseOnline(key) {
  try {
    const deviceId = await getOrCreateDeviceId();
    const result = await apiPost({ action: "verify_license", licenseKey: key, deviceId: deviceId });
    if (result && result.status) {
      saveLicenseCache(key, result.status, result.expiry || "", result.company || "");
      if (result.status !== "active") {
        checkLicense(true); // Trigger UI lock
      }
    }
  } catch(e) {}
}

function saveLicenseCache(key, status, expiry, company) {
  // High-security: only a fresh server "active" verdict refreshes the offline
  // grace clock. Non-active verdicts clear it, so a revoked license cannot
  // ride an old timestamp through a network-error fallback.
  const lastVerified = status === "active" ? Date.now() : 0;
  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({
      licenseKey: key,
      licenseStatus: status,
      licenseExpiry: expiry,
      licenseCompany: company,
      licenseLastVerified: lastVerified
    });
  } else {
    localStorage.setItem("cdcms_license_key", key);
    localStorage.setItem("cdcms_license_status", status);
    localStorage.setItem("cdcms_license_expiry", expiry);
    localStorage.setItem("cdcms_license_company", company);
    localStorage.setItem("cdcms_license_last_verified", String(lastVerified));
  }
}

// Update UI based on license verification state
function updateLicenseUI(status, key, expiry, company, errorMsg = "") {
  licenseState.key = key;
  licenseState.status = status;
  licenseState.expiry = expiry;
  licenseState.company = company;

  if (btnBuyLicense) {
    btnBuyLicense.href = NETLIFY_PORTAL_URL;
  }

  // Update Badge
  if (status === "active") {
    licenseBadge.textContent = "Active";
    licenseBadge.style.background = "var(--accent-success-glow)";
    licenseBadge.style.color = "var(--accent-success)";
    licenseBadge.style.borderColor = "hsla(145, 80%, 45%, 0.2)";
    
    // Unlock Dashboard
    mainDashboardContent.style.display = "flex";
    licenseActivationScreen.style.display = "none";
  } else {
    mainDashboardContent.style.display = "none";
    licenseActivationScreen.style.display = "flex";
    
    if (status === "pending") {
      licenseBadge.textContent = "Pending Verification";
      licenseBadge.style.background = "var(--accent-warning-glow)";
      licenseBadge.style.color = "var(--accent-warning)";
      licenseBadge.style.borderColor = "hsla(35, 90%, 55%, 0.2)";
      
      activationErrorMsg.textContent = "Your payment is pending verification by the admin (usually verified within 12-24 hours).";
      activationErrorMsg.style.color = "var(--accent-warning)";
      activationErrorMsg.style.display = "block";
    } else if (status === "expired") {
      licenseBadge.textContent = "Expired";
      licenseBadge.style.background = "rgba(239, 68, 68, 0.1)";
      licenseBadge.style.color = "var(--accent-danger)";
      licenseBadge.style.borderColor = "rgba(239, 68, 68, 0.2)";
      
      activationErrorMsg.textContent = "This license key has expired! Please buy a new subscription key.";
      activationErrorMsg.style.color = "var(--accent-danger)";
      activationErrorMsg.style.display = "block";
    } else if (status === "device_mismatch") {
      licenseBadge.textContent = "Device Lock";
      licenseBadge.style.background = "rgba(239, 68, 68, 0.1)";
      licenseBadge.style.color = "var(--accent-danger)";
      licenseBadge.style.borderColor = "rgba(239, 68, 68, 0.2)";
      
      activationErrorMsg.textContent = errorMsg || "This key is registered to another device.";
      activationErrorMsg.style.color = "var(--accent-danger)";
      activationErrorMsg.style.display = "block";
    } else {
      licenseBadge.textContent = "Unregistered";
      licenseBadge.style.background = "rgba(255, 255, 255, 0.05)";
      licenseBadge.style.color = "var(--text-secondary)";
      licenseBadge.style.borderColor = "var(--border-light)";
      
      if (errorMsg) {
        activationErrorMsg.textContent = errorMsg;
        activationErrorMsg.style.color = "var(--accent-danger)";
        activationErrorMsg.style.display = "block";
      } else {
        activationErrorMsg.style.display = "none";
      }
    }
  }
}

// Initialize Data
async function init() {
  // 1. Run License Check first
  const isLicensed = await checkLicense();
  if (!isLicensed) {
    // If not licensed, stop here. Main dashboard content is hidden
    return;
  }

  // 2. Load mappings if licensed
  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(["mappings", "vendors", "areas"], (result) => {
      state.mappings = result.mappings || {};
      state.vendors = result.vendors || [];
      state.areas = result.areas !== undefined ? result.areas : DEFAULT_AREAS;
      
      // If no vendors are loaded, initialize with a couple of defaults
      if (state.vendors.length === 0) {
        state.vendors = [
          "DINESH", "Genalal Yadav", "Saroj kumar Ray", "SUVASH KUMAR", 
          "Bajrangi Panjiyar", "BECHAN", "BHOGENDRA", "delevery boy", 
          "DELEVRY BOY", "DELIVERY BOY", "Faiyaz", "MANTUN", "Md Razza", 
          "SANJAY", "Sujeet Kumar"
        ];
        chrome.storage.local.set({ vendors: state.vendors });
      }

      const recovered = recoverOrphanMappings();
      if (recovered) {
        chrome.storage.local.set({ areas: state.areas });
        showToast(`${recovered} mappings ke liye area rows wapas bana di gayi hain (naam abhi code jaisa hai — Excel se asli naam update kar sakte ho).`, "info");
      }

      renderAll();
    });
  } else {
    // Web mock storage for local dev testing
    const localMappings = localStorage.getItem("cdcms_mappings");
    const localVendors = localStorage.getItem("cdcms_vendors");
    const localAreas = localStorage.getItem("cdcms_areas");
    
    state.mappings = localMappings ? JSON.parse(localMappings) : {};
    state.vendors = localVendors ? JSON.parse(localVendors) : [
      "DINESH", "Genalal Yadav", "Saroj kumar Ray", "SUVASH KUMAR", 
      "Bajrangi Panjiyar", "BECHAN", "BHOGENDRA", "delevery boy", 
      "DELEVRY BOY", "DELIVERY BOY", "Faiyaz", "MANTUN", "Md Razza", 
      "SANJAY", "Sujeet Kumar"
    ];
    state.areas = localAreas ? JSON.parse(localAreas) : DEFAULT_AREAS;

    const recovered = recoverOrphanMappings();
    if (recovered) {
      localStorage.setItem("cdcms_areas", JSON.stringify(state.areas));
      showToast(`${recovered} mappings ke liye area rows wapas bana di gayi hain (naam abhi code jaisa hai — Excel se asli naam update kar sakte ho).`, "info");
    }

    renderAll();
  }
}

// Show custom Toast notification
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerText = message;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = "none";
    toast.offsetHeight; // trigger reflow
    toast.style.animation = "slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Save to Storage
function saveToStorage() {
  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({
      mappings: state.mappings,
      vendors: state.vendors,
      areas: state.areas
    }, () => {
      showToast("All changes saved successfully!");
      updateStats();
    });
  } else {
    localStorage.setItem("cdcms_mappings", JSON.stringify(state.mappings));
    localStorage.setItem("cdcms_vendors", JSON.stringify(state.vendors));
    localStorage.setItem("cdcms_areas", JSON.stringify(state.areas));
    showToast("Local changes saved successfully! (Standalone Mock Mode)");
    updateStats();
  }
}


// Update Dashboard Statistics
function updateStats() {
  const total = state.areas.length;
  let mappedCount = 0;
  
  state.areas.forEach(area => {
    if (state.mappings[area.code]) {
      mappedCount++;
    }
  });
  
  statTotalAreas.innerText = total;
  statMappedAreas.innerText = mappedCount;
  statUnmappedAreas.innerText = total - mappedCount;
  statTotalVendors.innerText = state.vendors.length;
}

// Recover area rows for mappings whose area entry is missing. Mappings
// live independently of the area list: an import without a mappings
// section leaves old mappings untouched, and an import with fewer areas
// replaces the list — either way a mapping can end up without a matching
// area row, and such a mapping is invisible in the dashboard table even
// though it still drives the portal automation. Recreate the row from
// the mapping code itself; the name is a placeholder (the code) until
// the real name arrives via Excel Append, which updates names by code
// and keeps mappings. Returns how many rows were recovered.
function recoverOrphanMappings() {
  const known = new Set(state.areas.map(a => String(a.code)));
  let recovered = 0;
  Object.keys(state.mappings).forEach(code => {
    if (!known.has(String(code))) {
      state.areas.push({ code: String(code), name: String(code) });
      known.add(String(code));
      recovered++;
    }
  });
  return recovered;
}

// Reset the list filters so an imported (or cleared) list always renders
// in full. Without this, a live search/filter from before the import keeps
// filtering the new list and it looks like the import lost rows.
function resetListFilters() {
  if (searchBox) searchBox.value = "";
  if (filterSelect) filterSelect.value = "all";
}

// Render the entire layout
function renderAll() {
  updateStats();
  renderVendorTags();
  renderMappingTable();
}

// Render Vendor list tags
function renderVendorTags() {
  vendorTagsContainer.innerHTML = "";
  
  if (state.vendors.length === 0) {
    vendorTagsContainer.innerHTML = `<span style="color: var(--text-muted); font-size: 13px;">No delivery men configured. Add one above or sync from HP Gas.</span>`;
    return;
  }
  
  state.vendors.forEach((vendor, index) => {
    const tag = document.createElement("div");
    tag.className = "delivery-tag";
    tag.innerHTML = `
      <span>${vendor}</span>
      <button data-index="${index}">&times;</button>
    `;
    vendorTagsContainer.appendChild(tag);
  });
}

// Render Mappings Table Rows
function renderMappingTable() {
  mappingTbody.innerHTML = "";
  
  const query = searchBox.value.toLowerCase().trim();
  const filter = filterSelect.value;
  
  const filteredAreas = state.areas.filter(area => {
    if (!area) return false;
    // Imported data may carry numeric codes/names — coerce before the
    // string calls, otherwise one odd row throws and the table renders blank.
    const code = String(area.code ?? "");
    const name = String(area.name ?? "");
    const matchesSearch = code.includes(query) || name.toLowerCase().includes(query);
    
    const isMapped = !!state.mappings[area.code];
    let matchesFilter = true;
    if (filter === "mapped") matchesFilter = isMapped;
    else if (filter === "unmapped") matchesFilter = !isMapped;
    
    return matchesSearch && matchesFilter;
  });
  
  if (filteredAreas.length === 0) {
    mappingTbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 30px;">
          No areas match your filters.
        </td>
      </tr>
    `;
    return;
  }
  
  filteredAreas.forEach(area => {
    const tr = document.createElement("tr");
    const isMapped = !!state.mappings[area.code];
    const assignedVendor = state.mappings[area.code] || "";
    
    tr.innerHTML = `
      <td style="font-weight: 600; color: var(--accent-cyan);">${area.code}</td>
      <td style="font-weight: 500;">${area.name}</td>
      <td>
        <span class="status-badge ${isMapped ? 'status-mapped' : 'status-unmapped'}">
          ${isMapped ? 'Mapped' : 'Unmapped'}
        </span>
      </td>
      <td>
        <select class="vendor-select" data-code="${area.code}">
          <option value="">-- Select Delivery Man --</option>
          ${state.vendors.map(v => `<option value="${v}" ${v === assignedVendor ? 'selected' : ''}>${v}</option>`).join('')}
        </select>
      </td>
    `;
    
    mappingTbody.appendChild(tr);
  });
}

// Event Listeners
searchBox.addEventListener("input", renderMappingTable);
filterSelect.addEventListener("change", renderMappingTable);

// --- Vendor bulk-paste helpers (pure functions) ---
// One vendor name per line, as copied from a single Excel column. If a
// line carries extra columns (tab/comma/semicolon separated), the first
// field is the name. Blank lines are skipped.
function parseVendorList(text) {
  const names = [];
  text.split(/\r?\n/).forEach(line => {
    const first = line.split(/[\t,;]/)[0].trim();
    if (first) names.push(first);
  });
  return names;
}
// --- end vendor bulk-paste helpers ---

// Add Vendor Name
btnAddVendor.addEventListener("click", () => {
  const name = newVendorNameInput.value.trim();
  if (!name) return;
  
  if (state.vendors.includes(name)) {
    showToast("This delivery man already exists!", "info");
    return;
  }
  
  state.vendors.push(name);
  newVendorNameInput.value = "";
  
  // Re-save and re-render
  saveToStorage();
  renderAll();
});

// Add Vendors from Excel column paste
btnAddVendorsBulk.addEventListener("click", () => {
  const text = vendorPasteArea.value;
  if (!text.trim()) {
    showToast("Pasted data khali hai. Excel se Delivery Man ka column copy karke yahan paste karein.", "danger");
    return;
  }

  const pasted = parseVendorList(text);
  let addedCount = 0;
  let skippedCount = 0;
  pasted.forEach(name => {
    if (state.vendors.includes(name)) skippedCount++;
    else { state.vendors.push(name); addedCount++; }
  });

  vendorPasteArea.value = "";
  saveToStorage();
  renderAll();
  showToast(`${addedCount} delivery men jode gaye${skippedCount ? `, ${skippedCount} pehle se the (skip kiye gaye)` : ""}!`, "success");
});

// Delete All Delivery Men
btnClearAllVendors.addEventListener("click", () => {
  if (state.vendors.length === 0) {
    showToast("Pehle se hi koi delivery man nahi hai.", "info");
    return;
  }

  // Same rule as single-vendor delete: a mapping that used a deleted
  // vendor goes too — otherwise it would point at a name that no longer
  // exists. Since every vendor is being deleted, this clears mappings.
  const affected = Object.keys(state.mappings).filter(code => state.mappings[code] && state.vendors.includes(state.mappings[code])).length;
  const confirmMsg = `WARNING: Kya aap sach mein sabhi ${state.vendors.length} delivery men ko DELETE karna chahte hain?${affected ? ` Unki ${affected} mappings bhi hat jayengi aur wo areas Unmapped ho jayenge.` : ""} Ye action undo nahi ho sakta.`;
  if (!confirm(confirmMsg)) return;

  for (const code in state.mappings) {
    if (state.vendors.includes(state.mappings[code])) delete state.mappings[code];
  }
  state.vendors = [];

  saveToStorage();
  renderAll();
  showToast("Sabhi delivery men delete kar diye gaye hain!", "success");
});

// Remove Vendor Name
vendorTagsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = parseInt(e.target.getAttribute("data-index"));
    const vendorName = state.vendors[index];
    
    // Remove vendor
    state.vendors.splice(index, 1);
    
    // Clean up mappings that used this vendor
    for (const code in state.mappings) {
      if (state.mappings[code] === vendorName) {
        delete state.mappings[code];
      }
    }
    
    saveToStorage();
    renderAll();
  }
});

// Table Select Vendor Mappings Change
mappingTbody.addEventListener("change", (e) => {
  if (e.target.classList.contains("vendor-select")) {
    const code = e.target.getAttribute("data-code");
    const val = e.target.value;
    
    if (val === "") {
      delete state.mappings[code];
    } else {
      state.mappings[code] = val;
    }
    
    // Visually update the status badge in the same row
    const row = e.target.closest("tr");
    const statusBadge = row.querySelector(".status-badge");
    if (val === "") {
      statusBadge.className = "status-badge status-unmapped";
      statusBadge.innerText = "Unmapped";
    } else {
      statusBadge.className = "status-badge status-mapped";
      statusBadge.innerText = "Mapped";
    }
    
    // Auto-save changes immediately for frictionless user experience
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ mappings: state.mappings }, () => {
        updateStats();
      });
    } else {
      localStorage.setItem("cdcms_mappings", JSON.stringify(state.mappings));
      updateStats();
    }
  }
});

// Save All changes Button
btnSaveAll.addEventListener("click", () => {
  saveToStorage();
});

// Export Mappings to File
btnExport.addEventListener("click", () => {
  // Export must always be self-consistent: every mapping needs its area
  // row in the file, otherwise a later import restores mappings without
  // areas. Recover orphans first (persisted silently, no extra toast).
  const recovered = recoverOrphanMappings();
  if (recovered) {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ areas: state.areas });
    } else {
      localStorage.setItem("cdcms_areas", JSON.stringify(state.areas));
    }
  }
  const dataStr = JSON.stringify(state, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.href = url;
  a.download = `cdcms_allocation_backup_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showToast("Exported backup file successfully!", "info");
});

// Trigger file input click for Import
btnImport.addEventListener("click", () => {
  importFileInput.click();
});

// --- JSON import helpers (pure functions: no DOM, no chrome APIs) ---
// One area entry in any shape a user might have: an object with code/name
// under any common key spelling, or a [code, name] pair. Returns
// {code, name} with both coerced to strings, or null when unusable.
function normalizeAreaEntry(a) {
  if (!a) return null;
  if (Array.isArray(a)) {
    const code = a[0];
    const name = a[1];
    if (code === undefined || code === null || code === "" || name === undefined || name === null || name === "") return null;
    return { code: String(code), name: String(name) };
  }
  if (typeof a === "object") {
    const code = a.code ?? a.Code ?? a.areaCode ?? a.AreaCode ?? a.area_code ?? a.AREA_CODE;
    const name = a.name ?? a.Name ?? a.areaName ?? a.AreaName ?? a.area_name ?? a.AREA_NAME;
    if (code === undefined || code === null || code === "" || name === undefined || name === null || name === "") return null;
    return { code: String(code), name: String(name) };
  }
  return null;
}

// Find an area list anywhere in a parsed JSON value. Accepts:
//  - this helper's own backup: {areas: [...], vendors: [...], mappings: {...}}
//  - a bare array of area entries
//  - a wrapper: {data: {areas: [...]}} / {result: {areas: [...]}}
//  - a code->name map: {"4": "KAMALPUR", "5": "YAMSAM"}
// Returns the normalized area list, or null when nothing usable is found.
function extractAreas(data) {
  if (!data) return null;
  if (Array.isArray(data)) {
    const areas = data.map(normalizeAreaEntry).filter(Boolean);
    return areas.length ? areas : null;
  }
  if (typeof data === "object") {
    const containers = [data.areas, data.Areas, data.data && data.data.areas, data.result && data.result.areas];
    for (const c of containers) {
      if (Array.isArray(c)) {
        const areas = c.map(normalizeAreaEntry).filter(Boolean);
        if (areas.length) return areas;
      }
    }
    // Code -> name map: every value must be a non-empty string, otherwise
    // this is not a map (e.g. it is a backup object) and we return null.
    const keys = Object.keys(data);
    if (keys.length) {
      const areas = [];
      let mapLike = true;
      for (const k of keys) {
        const v = data[k];
        if (typeof v === "string" && v) areas.push({ code: String(k), name: v });
        else { mapLike = false; break; }
      }
      if (mapLike && areas.length) return areas;
    }
  }
  return null;
}

// A vendor entry: a plain string, or an object carrying a name.
function normalizeVendorEntry(v) {
  if (typeof v === "string" && v) return v;
  if (v && typeof v === "object") {
    const name = v.name ?? v.Name ?? v.vendor ?? v.Vendor;
    if (typeof name === "string" && name) return name;
  }
  return null;
}
// --- end JSON import helpers ---

// File Import change
importFileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);

      // Areas first, in any accepted shape (backup, bare list, wrapper,
      // or code->name map). A section is replaced ONLY when it actually
      // yields entries — a file that parses to zero usable areas must
      // never wipe the list the user already has, and a file whose shape
      // is not recognized must say so instead of silently leaving the
      // old list on screen. That silent no-op is exactly why an upload
      // used to leave just the old 2 areas showing.
      const areas = extractAreas(data);
      const vendors = data && Array.isArray(data.vendors)
        ? data.vendors.map(normalizeVendorEntry).filter(Boolean)
        : null;
      let mappings = null;
      if (data && typeof data.mappings === "object" && data.mappings !== null) {
        // Accept the object form {code: vendor} AND the array forms
        // [{code, vendor}] and [[code, vendor]], normalized to objects.
        const normalized = {};
        if (Array.isArray(data.mappings)) {
          data.mappings.forEach(m => {
            if (Array.isArray(m)) {
              if (m[0] !== undefined && m[0] !== null && m[0] !== "" && m[1]) {
                normalized[String(m[0])] = String(m[1]);
              }
            } else if (m && m.code !== undefined && m.code !== null && m.code !== "" && m.vendor) {
              normalized[String(m.code)] = String(m.vendor);
            }
          });
        } else {
          Object.keys(data.mappings).forEach(code => {
            const vendor = data.mappings[code];
            if (vendor !== undefined && vendor !== null && vendor !== "") {
              normalized[String(code)] = String(vendor);
            }
          });
        }
        if (Object.keys(normalized).length) mappings = normalized;
      }

      if (!areas && !(vendors && vendors.length) && !mappings) {
        showToast("Is file me koi area/vendor/mapping nahi mila! Backup file ya area list (code + name) wali JSON honi chahiye.", "danger");
        return;
      }

      if (areas) state.areas = areas;
      if (vendors && vendors.length) state.vendors = vendors;
      if (mappings) state.mappings = mappings;

      // A file with fewer areas than the stored mappings (or no mappings
      // section at all) leaves orphan mappings behind — recover them as
      // rows so imported mappings never stay invisible.
      const recovered = recoverOrphanMappings();

      resetListFilters();
      saveToStorage();
      renderAll();
      showToast(`${state.areas.length} areas, ${state.vendors.length} vendors, ${Object.keys(state.mappings).length} mappings imported${recovered ? ` (${recovered} orphan mappings se area rows banayi gayi)` : ""}`, "success");
    } catch (err) {
      showToast("Error parsing backup file!", "danger");
    }
  };
  reader.readAsText(file);
  // Clear file input value to allow importing same file again
  importFileInput.value = "";
});

// Parse pasted data from Excel (tab-separated) or CSV (comma-separated)
function parseExcelData(text) {
  const lines = text.split(/\r?\n/);
  const areas = [];
  const headersToSkip = ["area code", "areacode", "code", "area name", "areaname", "name"];
  
  lines.forEach(line => {
    const parts = line.split("\t");
    if (parts.length >= 2) {
      const code = parts[0].trim();
      const name = parts[1].trim();
      
      if (code && name) {
        const lowerCode = code.toLowerCase();
        const lowerName = name.toLowerCase();
        const isHeader = headersToSkip.includes(lowerCode) || headersToSkip.includes(lowerName);
        if (!isHeader) {
          areas.push({ code, name });
        }
      }
    }
  });
  
  // Fallback: If no areas parsed via tabs, try comma/semicolon separators
  if (areas.length === 0) {
    lines.forEach(line => {
      const parts = line.split(/[,;]/);
      if (parts.length >= 2) {
        const code = parts[0].trim();
        const name = parts[1].trim();
        if (code && name) {
          const lowerCode = code.toLowerCase();
          const lowerName = name.toLowerCase();
          const isHeader = headersToSkip.includes(lowerCode) || headersToSkip.includes(lowerName);
          if (!isHeader) {
            areas.push({ code, name });
          }
        }
      }
    });
  }
  
  return areas;
}

// Append Excel areas to current list
btnImportAppend.addEventListener("click", () => {
  const text = excelPasteArea.value;
  if (!text.trim()) {
    showToast("Pasted data khali hai. Excel se columns copy karke yahan paste karein.", "danger");
    return;
  }
  
  const parsed = parseExcelData(text);
  if (parsed.length === 0) {
    showToast("Koi Area details parse nahi ho paaye. Format check karein (Code [Tab] Name).", "danger");
    return;
  }
  
  let addedCount = 0;
  let updatedCount = 0;
  
  parsed.forEach(p => {
    // Compare codes as strings: areas stored from older backups may carry
    // numeric codes, which would otherwise never match and duplicate rows.
    const existingIdx = state.areas.findIndex(a => String(a.code) === p.code);
    if (existingIdx !== -1) {
      if (String(state.areas[existingIdx].name) !== p.name) {
        state.areas[existingIdx].name = p.name;
        updatedCount++;
      }
    } else {
      state.areas.push(p);
      addedCount++;
    }
  });
  
  excelPasteArea.value = "";
  resetListFilters();
  saveToStorage();
  renderAll();
  showToast(`${addedCount} areas jode gaye aur ${updatedCount} update kiye gaye!`, "success");
});

// Replace all current areas with Excel areas
btnImportReplace.addEventListener("click", () => {
  const text = excelPasteArea.value;
  if (!text.trim()) {
    showToast("Pasted data khali hai. Excel se columns copy karke yahan paste karein.", "danger");
    return;
  }
  
  const parsed = parseExcelData(text);
  if (parsed.length === 0) {
    showToast("Koi Area details parse nahi ho paaye. Format check karein (Code [Tab] Name).", "danger");
    return;
  }
  
  const confirmMsg = `Kya aap sach mein sabhi purane ${state.areas.length} areas ko DELETE karke ye naye ${parsed.length} areas rakhna chahte hain? Purani sabhi mappings delete ho jayengi.`;
  if (!confirm(confirmMsg)) return;
  
  state.areas = parsed;
  state.mappings = {};
  
  excelPasteArea.value = "";
  resetListFilters();
  saveToStorage();
  renderAll();
  showToast(`Purane areas clear kiye gaye aur ${parsed.length} naye areas replace kiye gaye!`, "success");
});

// Delete all current areas and mappings
btnClearAllAreas.addEventListener("click", () => {
  if (state.areas.length === 0) {
    showToast("Pehle se hi koi area nahi hai.", "info");
    return;
  }
  
  const confirmMsg = `WARNING: Kya aap sach mein sabhi ${state.areas.length} areas aur unki mappings ko DELETE karna chahte hain? Ye action undo nahi ho sakta.`;
  if (!confirm(confirmMsg)) return;
  
  state.areas = [];
  state.mappings = {};
  
  excelPasteArea.value = "";
  resetListFilters();
  saveToStorage();
  renderAll();
  showToast("Sabhi areas aur mappings successfully delete kar diye gaye hain!", "success");
});

// Theme Toggle Logic
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;
  
  const sunIcon = themeToggle.querySelector(".sun-icon");
  const moonIcon = themeToggle.querySelector(".moon-icon");
  const themeText = document.getElementById("theme-text");
  
  // Load saved theme
  let savedTheme = localStorage.getItem("cdcms_theme") || "dark";
  
  function setTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light-theme");
      sunIcon.style.display = "inline";
      moonIcon.style.display = "none";
      themeText.innerText = "Night Mode";
    } else {
      document.body.classList.remove("light-theme");
      sunIcon.style.display = "none";
      moonIcon.style.display = "inline";
      themeText.innerText = "Day Mode";
    }
    localStorage.setItem("cdcms_theme", theme);
  }
  
  // Apply current theme
  setTheme(savedTheme);
  
  // Toggle on click
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-theme");
    setTheme(isLight ? "dark" : "light");
    showToast(isLight ? "Switched to Night Mode (Dark)" : "Switched to Day Mode (Light)", "info");
  });
}

// --- LICENSE SYSTEM EVENT LISTENERS ---

// 1. Activate License Button
if (btnActivateLicense) {
  btnActivateLicense.addEventListener("click", async () => {
    const key = inputLicenseKey.value.trim();
    if (!key) {
      activationErrorMsg.textContent = "Please enter a license key!";
      activationErrorMsg.style.display = "block";
      return;
    }

    btnActivateLicense.disabled = true;
    const originalText = btnActivateLicense.textContent;
    btnActivateLicense.textContent = "Activating...";
    activationErrorMsg.style.display = "none";

    try {
      const deviceId = await getOrCreateDeviceId();
      const result = await apiPost({
        action: "verify_license",
        licenseKey: key,
        deviceId: deviceId
      });

      if (result && (result.status === "active" || result.status === "pending")) {
        // Save to cache
        saveLicenseCache(key, result.status, result.expiry || "", result.company || "");
        
        // Update UI
        updateLicenseUI(result.status, key, result.expiry || "", result.company || "");
        
        showToast("License key saved!", "success");
        
        if (result.status === "active") {
          showToast("Extension activated successfully!", "success");
          // Initialize mappings
          init();
        }
      } else {
        const msg = result ? (result.message || "Invalid license key!") : "Activation failed. Try again.";
        activationErrorMsg.textContent = msg;
        activationErrorMsg.style.display = "block";
      }
    } catch (err) {
      console.error(err);
      activationErrorMsg.textContent = "Connection error. Make sure you are online.";
      activationErrorMsg.style.display = "block";
    } finally {
      btnActivateLicense.disabled = false;
      btnActivateLicense.textContent = originalText;
    }
  });
}

// 2. Open License Settings Modal
if (btnLicenseSettings) {
  btnLicenseSettings.addEventListener("click", () => {
    modalLicenseKeyDisplay.value = licenseState.key || "No key active";
    modalCompanyDisplay.textContent = licenseState.company || "N/A";
    modalExpiryDisplay.textContent = licenseState.expiry || "N/A";
    inputNewLicenseKey.value = "";
    modalErrorMsg.style.display = "none";
    licenseModal.style.display = "flex";
  });
}

// 3. Close License Modal
if (btnCloseLicenseModal) {
  btnCloseLicenseModal.addEventListener("click", () => {
    licenseModal.style.display = "none";
  });
}

// Click outside modal to close
window.addEventListener("click", (e) => {
  if (e.target === licenseModal) {
    licenseModal.style.display = "none";
  }
});

// 4. Update/Change License Key inside Modal
if (btnUpdateLicenseKey) {
  btnUpdateLicenseKey.addEventListener("click", async () => {
    const newKey = inputNewLicenseKey.value.trim();
    if (!newKey) {
      modalErrorMsg.textContent = "Please enter a license key!";
      modalErrorMsg.style.display = "block";
      return;
    }

    btnUpdateLicenseKey.disabled = true;
    const originalText = btnUpdateLicenseKey.textContent;
    btnUpdateLicenseKey.textContent = "Checking...";
    modalErrorMsg.style.display = "none";

    try {
      const deviceId = await getOrCreateDeviceId();
      const result = await apiPost({
        action: "verify_license",
        licenseKey: newKey,
        deviceId: deviceId
      });

      if (result && (result.status === "active" || result.status === "pending")) {
        // Save cache
        saveLicenseCache(newKey, result.status, result.expiry || "", result.company || "");
        
        // Update UI
        updateLicenseUI(result.status, newKey, result.expiry || "", result.company || "");
        
        licenseModal.style.display = "none";
        showToast("License key updated successfully!", "success");
        
        if (result.status === "active") {
          init(); // Reload mapping data
        }
      } else {
        const msg = result ? (result.message || "Invalid license key!") : "Validation failed.";
        modalErrorMsg.textContent = msg;
        modalErrorMsg.style.display = "block";
      }
    } catch (err) {
      console.error(err);
      modalErrorMsg.textContent = "Network error. Try again.";
      modalErrorMsg.style.display = "block";
    } finally {
      btnUpdateLicenseKey.disabled = false;
      btnUpdateLicenseKey.textContent = originalText;
    }
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  init();
  initTheme();
});
