//this checks for the youtube url with /videos at the end.
chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    // read changeInfo data
    if (tab.url && tab.url.includes("/videos")) {
      // url has changed; do something here
      // like send message to content script
      chrome.tabs.sendMessage( tabId, {
        message: 'new',
        url: changeInfo.url
      })
    }
  }
);