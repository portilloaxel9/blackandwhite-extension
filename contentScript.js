chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "toggleFilter") {
      if (request.isActive) {
        // Activate the extension's functionality here
        document.documentElement.style.filter = "grayscale(100%)";
      } else {
        // Deactivate the extension's functionality here
        document.documentElement.style.filter = "none";
      }
    }
  });