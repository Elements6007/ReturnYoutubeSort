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
  
  //reverses contents using CSS
  // width and padding forces yt to load all videos
  document.getElementById("#contents").style.width = "100%"; // should be #contents.ytd-rich-grid-renderer
  document.getElementById("#contents.ytd-rich-grid-renderer").style.paddingTop = "100%";
  document.getElementById("#contents.ytd-rich-grid-renderer").style.display = "flex";
  document.getElementById("#contents.ytd-rich-grid-renderer").style.flexWrap = "wrap";
  document.getElementById("#contents.ytd-rich-grid-renderer").style.justifyContent = "flex-start";
  document.getElementById("#contents.ytd-rich-grid-renderer").style.flexDirection = "column-reverse";

  document.getElementById("#contents").style.flexDirection = "row-reverse";
};


videosLoaded();
})();