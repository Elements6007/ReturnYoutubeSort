(() => {

  let addbutton, oldestBtn, urlString, selected, latestHandler, popularHandler, url;

  selected = false;
  url = 0;

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
      setTimeout(function () {
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

        if (selected === true) {
        oldestBtn.setAttribute("selected", "true");
        }
        statusHandler();
      }, 500)
    }
  };

  const statusHandler = async () => {
    //watches for "Latest" or "Popular" buttons to be pressed to reinstate the oldest button

    if (addbutton) {
      console.log("[1][1]in use")
      latestHandler = document.querySelectorAll("#chips")[1].getElementsByClassName("style-scope ytd-feed-filter-chip-bar-renderer")[0];
      latestHandler.addEventListener("click", waitHandler);
      popularHandler = document.querySelectorAll("#chips")[1].getElementsByClassName("style-scope ytd-feed-filter-chip-bar-renderer")[1];
      popularHandler.addEventListener("click", waitHandler);
    } else {
      console.log("[0][0]in use")
      latestHandler = document.querySelectorAll("#chips")[0].getElementsByClassName("style-scope ytd-feed-filter-chip-bar-renderer")[0];
      latestHandler.addEventListener("click", waitHandler);
      popularHandler = document.querySelectorAll("#chips")[0].getElementsByClassName("style-scope ytd-feed-filter-chip-bar-renderer")[1];
      popularHandler.addEventListener("click", waitHandler);
    }
  };

  const waitHandler = async () => {
    console.log("timeout set")
    setTimeout(function () {
      videosLoaded();
    }, 500)
  }

  const scriptStop = async () => {
    console.log("script stop");
    var styleSheet = document.createElement("style")
    styleSheet.innerText = stylesrestore
    document.head.appendChild(styleSheet)
  };

  const returnState = async (stateRequest) => {
   if (stateRequest === "latest"){
    console.log("state => latest")
    location.reload();
  } else {
    location.reload();
    setTimeout(function () {
    popularHandler.click();
    console.log("state => popular")
    }, 500)
  }
  };

  const buttonPressed = async () => {
    if (addbutton) {
    latest = document.querySelectorAll("#chips")[1].getElementsByClassName("style-scope ytd-feed-filter-chip-bar-renderer")[0];
    } else {
    latest = document.querySelectorAll("#chips")[0].getElementsByClassName("style-scope ytd-feed-filter-chip-bar-renderer")[0];
    }
    latest.click();
    setTimeout(function () {
      latest.removeAttribute("selected");
      var styleSheet = document.createElement("style")
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet)
      selected = true;
      oldestBtn.setAttribute("selected", "true");
      latestHandler.addEventListener("click", returnState, "latest")
      popularHandler.addEventListener("click", returnState, "popular")
    }, 500)
  };
  
  const urlRefresh = async () => {
    if (urlString.includes("?")){
       videosLoaded();
    }
    else {
      window.location.hash = '?';
    }
  }

  const checkUrl = async () => {
    urlString = document.URL;
    if (urlString.includes("videos") === true) {
      urlRefresh();
      console.log("string includes videos")
    } else {
      scriptStop();
    }
  }

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type } = obj;

    if (type === "NEW") {
      checkUrl();
    } else if (type === "no") {
      scriptStop();
    }

  });
  checkUrl();
})();