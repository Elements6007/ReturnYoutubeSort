(() => {

  let addbutton, oldestBtn, latest, popular;


var styles = `
 #contents.ytd-rich-grid-renderer {
     flex-direction: column-reverse;
 }

 #contents {
     flex-direction: row-reverse;
 }`

var stylesrestore = `
 #contents.ytd-rich-grid-renderer {
   flex-direction: column;
  
 #contents {
   flex-direction: row;
 }`

  const videosLoaded = async () => {
    console.log("thisisworking");
    const oldestBtnExists = document.getElementById("oldest-btn");
    
        
    if (!oldestBtnExists) {
      setTimeout(function() {
      console.log("creating button");
      oldestBtn = document.createElement("yt-chip-cloud-chip-renderer");

      oldestBtn.className = "style-scope " + "yt-chip-cloud-chip-renderer " + "oldest-btn";
      oldestBtn.setAttribute("chip-style", "STYLE_DEFAULT");
      oldestBtn.id = "oldest-btn";
      addbutton = document.querySelectorAll("#chips")[1];
      addbutton.appendChild(oldestBtn);

      oldestBtn.addEventListener("click", buttonPressed);

      const text = document.querySelectorAll("#oldest-btn #text")[0];
      text.removeAttribute("is-empty");
      text.innerHTML = "Sort by: Oldest";
      
      if (!text) {
        console.log("text missing!");
      }
      
      latest = document.querySelectorAll("#chips")[1].getElementsByClassName("style-scope ytd-feed-filter-chip-bar-renderer")[0];
      popular = document.querySelectorAll("#chips")[1].getElementsByClassName("style-scope ytd-feed-filter-chip-bar-renderer")[1];
      
      latest.addEventListener("click", changeState);
      popular.addEventListener("click", changeState);
      
      }, 1000)

    }
  };

  const scriptStop = async () => {
    console.log("script stop");
    var styleSheet = document.createElement("style")
    styleSheet.innerText = stylesrestore
    document.head.appendChild(styleSheet)
  };

  const changeState = async () => {
    console.log("change state");
    location.reload();
  };

  const buttonPressed = async () => {
    latest.removeAttribute("selected");
    oldestBtn.setAttribute("selected", "true");
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

})();