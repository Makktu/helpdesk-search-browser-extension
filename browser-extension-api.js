// Provide browser extension API compatibility
if (typeof browser === 'undefined') {
    var browser = chrome;
}

// Ensure runtime.getURL works in both environments
if (!browser.runtime.getURL && chrome && chrome.runtime && chrome.runtime.getURL) {
    browser.runtime.getURL = chrome.runtime.getURL;
}
