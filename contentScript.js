(() => {
//reverses content order
var styles = `
#contents.ytd-rich-grid-renderer {
    flex-direction: column-reverse;
}

#contents {
    flex-direction: row-reverse;
}
`
//restores content order after leaving /videos
var stylesrestore = `
#contents.ytd-rich-grid-renderer {
  flex-direction: column;
  
  #contents {
    flex-direction: row;
 }`



  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      // listen for messages sent from background.js
      if (request.message === 'new') {
        videosLoaded();
      }
      if (request.message === 'FORBIDDEN') {
        scriptStop();
      }
    });
  // my brain hurts
  const videosLoaded = async () => {
    console.log("thisisworking");
    buttonPressed();
  };

  const scriptStop = async () => {
    console.log("script needs to stop");
    var styleSheet = document.createElement("style")
    styleSheet.innerText = stylesrestore
    document.head.appendChild(styleSheet)
  };

  const buttonPressed = async () => {
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
  };

})();