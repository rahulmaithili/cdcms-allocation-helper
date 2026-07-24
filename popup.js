// Popup script for CDCMS Helper

const TOTAL_DEFAULT_AREAS = 101; // total count of areas we initialized

document.addEventListener("DOMContentLoaded", () => {
  const mappedCountEl = document.getElementById("mapped-count");
  const vendorCountEl = document.getElementById("vendor-count");
  const btnOpenSettings = document.getElementById("btn-open-settings");

  // Load stats from storage
  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(["mappings", "vendors"], (result) => {
      const mappings = result.mappings || {};
      const vendors = result.vendors || [];
      
      const mappedKeys = Object.keys(mappings);
      
      mappedCountEl.innerText = `${mappedKeys.length} / ${TOTAL_DEFAULT_AREAS}`;
      vendorCountEl.innerText = vendors.length;
    });
  } else {
    // Fallback for standalone/mock testing
    const localMappings = localStorage.getItem("cdcms_mappings");
    const localVendors = localStorage.getItem("cdcms_vendors");
    
    const mappings = localMappings ? JSON.parse(localMappings) : {};
    const vendors = localVendors ? JSON.parse(localVendors) : [];
    
    mappedCountEl.innerText = `${Object.keys(mappings).length} / ${TOTAL_DEFAULT_AREAS}`;
    vendorCountEl.innerText = vendors.length;
  }

  // Open settings dashboard
  btnOpenSettings.addEventListener("click", () => {
    if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open("options.html", "_blank");
    }
  });
});
