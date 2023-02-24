let isActive = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  isActive = !isActive;
  chrome.tabs.sendMessage(tab.id, {action: "toggleFilter", isActive: isActive});
  if (isActive) {
    // Activate the extension's functionality here
    chrome.browserAction.setIcon({path: "./icons/open64.png"});
  } else {
    // Deactivate the extension's functionality here
    chrome.browserAction.setIcon({path: "./icons/close64.png"});
  }
});