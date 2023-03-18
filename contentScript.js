(() => {

let youtubeLeftControls, youtubePlayer;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // listen for messages sent from background.js
    if (request.message === 'new') {
      videosLoaded();
    }
});

// my brain hurts
const videosLoaded = async () => {
  console.log("thisisworking");

  /*const oldestButtonExists = document.createElement("oldest-btn")[0];

  if (!oldestButtonExists){   
  const oldestButton = document.createElement("img");
  oldestButton.src = chrome.runtime.getURL("assets/button.png");
  oldestButton.className = "ytp-button " + " oldest-btn";
  oldestButton.title = "Click to scroll to bottom of page";

  youtubeLeftControls = document.getElementsByClassName("style-scope ytd-feed-filter-chip-bar-renderer")[1];
  youtubePlayer = document.getElementsByClassName("yt-chip-cloud-chip-renderer")[0];

  youtubeLeftControls.appendChild(oldestButton);
  //I honestly have no freaking idea what this does tbh.
 }*/
};


videosLoaded();
})();