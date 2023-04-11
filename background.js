chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("/videos")) {

    chrome.tabs.sendMessage(tabId, {
      type: "NEW"
    });
  } 
});
