//this checks for the youtube url with /videos at the end ex. "youtube.com/@DonutOperator/videos"
chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("/videos")) {

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
    });
  }
});