(() => {

let youtubeLeftControls, youtubePlayer;

window.addEventListener ("load", waitTillLoaded, false);

function waitTillLoaded () {
  loaded = "true";
}

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, value, videoId } = obj;
//this recieves the message sent from background.js telling that it is at the correct url
  if (type === "NEW" && loaded === "true") {
    currentVideo = videoId;
    videosLoaded();
  }
})

// my brain hurts
const videosLoaded = async () => {
  console.log("thisisworkingbtw");

  const oldestButtonExists = document.createElement("oldest-btn")[0];

  if (!oldestButtonExists){   
  const oldestButton = document.createElement("img");
  oldestButton.src = chrome.runtime.getURL("assets/button.png");
  oldestButton.className = "ytp-button " + " oldest-btn";
  oldestButton.title = "Click to scroll to bottom of page";

  youtubeLeftControls = document.getElementsByClassName("style-scope ytd-feed-filter-chip-bar-renderer")[1];
  youtubePlayer = document.getElementsByClassName("yt-chip-cloud-chip-renderer")[0];

  youtubeLeftControls.appendChild(oldestButton);

 }
}


videosLoaded();
})();