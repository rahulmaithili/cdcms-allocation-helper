// background.js - CDCMS Allocation Helper Service Worker

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "open_options") {
    chrome.runtime.openOptionsPage();
  }
});
