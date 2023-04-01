(() => {

  let addbutton, addbuttoninterior;


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






  /*chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.message === 'new') {
         videosLoaded();
        
      }
      if (request.message === 'no') {
        scriptStop();
      }
    });*/
  // my brain hurts
  const videosLoaded = async () => {
    console.log("thisisworking");
    const oldestBtnExists = document.getElementById("oldest-btn")
    
        
    if (!oldestBtnExists) {
      setTimeout(function() {
      console.log("creating button");
      const oldestBtn = document.createElement("yt-chip-cloud-chip-renderer");

      oldestBtn.className = "style-scope " + "yt-chip-cloud-chip-renderer " + "oldest-btn";
      oldestBtn.setAttribute("chip-style", "STYLE_DEFAULT");
      oldestBtn.id = "oldest-btn";
      addbutton = document.querySelectorAll("#chips")[1];
      addbutton.appendChild(oldestBtn);


      oldestBtn.addEventListener("click", buttonPressed);
      }, 1000)
    }
  };

  const scriptStop = async () => {
    console.log("script stop");
    var styleSheet = document.createElement("style")
    styleSheet.innerText = stylesrestore
    document.head.appendChild(styleSheet)
    //const removeBtn = document.getElementById("oldest-btn");
    //removeBtn.remove();
  };

  const buttonPressed = async () => {
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet)
  };

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;

    if (type === "NEW") {
      videosLoaded();
    } else {
      scriptStop();
    }
  });
//videosLoaded();
})();