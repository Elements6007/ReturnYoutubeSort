(() => {

  let addbutton, addbuttoninterior;
  let i = 0;
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
    const oldestBtnExists = document.getElementsByClassName("oldest-btn")[0];

    if (!oldestBtnExists && i < 1) {
      const oldestBtn = document.createElement("yt-chip-cloud-chip-renderer");
      // no longer needs image
      //oldestBtn.src = chrome.runtime.getURL("assets/button.jpg");
      oldestBtn.className = "style-scope yt-chip-cloud-chip-renderer";
      oldestBtn.setAttribute("chip-style", "STYLE_DEFAULT")
      oldestBtn.id = "oldest-btn";
      addbutton = document.getElementById("chips");
      addbutton.appendChild(oldestBtn);

      //commented out for now
    /*const oldestBtninterior = document.createElement("yt-chip-cloud-chip-renderer");
      addbuttoninterior = document.getElementById("oldest-btn");
      oldestBtninterior.className = "ytp-button " + "oldest-btn-int";
      oldestBtninterior.innerHTML = "Oldest";

      addbuttoninterior.appendChild(oldestBtninterior);*/
      oldestBtn.addEventListener("click", buttonPressed);
      //increments i so if statement parameters fail if ran more than once.
      i++;
    }
  };

  const scriptStop = async () => {
    console.log("script stop");
    var styleSheet = document.createElement("style")
    styleSheet.innerText = stylesrestore
    document.head.appendChild(styleSheet)
    const removeBtn = document.getElementsByClassName("oldest-btn");

  
  };

  const buttonPressed = async () => {
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
  };
videosLoaded();
})();