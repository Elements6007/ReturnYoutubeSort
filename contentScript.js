(() => {

  let addbutton, oldestBtn, urlString;


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

      if (addbutton) {
        addbutton.appendChild(oldestBtn);
      } else {
        addbuttonReload = document.querySelectorAll("#chips")[0];
        addbuttonReload.appendChild(oldestBtn);
      }
      oldestBtn.addEventListener("click", buttonPressed);

      const text = document.querySelectorAll("#oldest-btn #text")[0];
      text.removeAttribute("is-empty");
      text.innerHTML = "Sort by: Oldest";
      
      if (!text) {
        console.log("text missing!");
      }
      }, 500)

    }
  };

  const scriptStop = async () => {
    console.log("script stop");
    var styleSheet = document.createElement("style")
    styleSheet.innerText = stylesrestore
    document.head.appendChild(styleSheet)
  };

  const buttonPressed = async () => {
    const latest = document.querySelectorAll("#chips")[1].getElementsByClassName("style-scope ytd-feed-filter-chip-bar-renderer iron-selected")[0];
    latest.click();
    latest.removeAttribute("selected");
    oldestBtn.setAttribute("selected", "true");
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet)
  };
  
  const checkurl = async () => {
      urlString = document.URL;
      if (urlString.includes("videos") === true){
        videosLoaded();
        console.log("string includes videos")
      } else {
        scriptStop();
      }
  }

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type }= obj;

    if (type === "NEW") {
      videosLoaded();
    } 

  });
checkurl();
})();