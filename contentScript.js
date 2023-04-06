(() => {

  let addbutton;


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

      const text = document.querySelectorAll("#oldest-btn #text")[0];
      
      text.removeAttribute("is-empty");
      text.innerHTML = "Sort by: Oldest";
      
      if (!text) {
        console.log("text missing!");
      }
      }, 1000)

    }
  };

  const scriptStop = async () => {
    console.log("script stop");
    var styleSheet = document.createElement("style")
    styleSheet.innerText = stylesrestore
    document.head.appendChild(styleSheet)
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

})();