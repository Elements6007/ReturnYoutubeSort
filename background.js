chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("/videos") || tab.url && tab.url.includes("/shorts") || tab.url && tab.url.includes("/streams") ) {

    chrome.tabs.sendMessage(tabId, {
      type: "NEW"
    });
  } else {
    chrome.tabs.sendMessage(tabId, {
      type: "no"
    });
  }
});
