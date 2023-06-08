(() => {

  let addbutton, oldestBtn, urlString, selected, latestHandler, popularHandler, checkNum, numdiv, Astatus, colorTheme, colorText, location;

  selected = false;

  var styles = `
 #contents.ytd-rich-grid-renderer {
     flex-direction: column-reverse;
 }

 #contents.ytd-rich-grid-row {
  flex-direction: row-reverse;
  justify-content: left;
 }
 }`

  var stylesrestore = `
 #contents.ytd-rich-grid-renderer {
   flex-direction: column;
 }
   #contents {
    flex-direction: row;
  }
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
    loadAnimation();
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
  
  const urlRefresh = async (url) => {
    if (url.includes("?")){
      videosLoaded();
    } else if (url.includes("shorts") && !url.includes("@")){
      // this does nothing so that when watching a shorts video you can go back. Basically prevents it from hashing.
    } else {
      window.location.hash = '?';
    }
  }

  const checkUrl = async () => {
    urlString = document.URL;
    if ((urlString.includes("videos") || urlString.includes("shorts") || urlString.includes("streams")) == true) {
      urlRefresh(urlString);
      console.log("string includes videos or shorts")
      if (urlString.includes("videos")) {
        location = "videos";
      } else if (urlString.includes("shorts")) {
        location = "shorts";
      } else if (urlString.includes("streams")) {
        location = "live";
      } else {
        errorHandler("urlString.includes nothing", "checkUrl()");
      }
    } else {
      scriptStop();
    }
  }
  
  const loadAnimation = async () => {
    chrome.storage.local.get(["Asave"], (items) => {
      Astatus = items.Asave;
      console.log(Astatus);
      if (items.Asave == "true" && location == "videos") { //if animation enabled
        const videosDiv = document.getElementById("contents");
        const primary = document.getElementById("primary");
        const renderer = document.getElementsByClassName("style-scope ytd-two-column-browse-results-renderer")[1];
       
        const videoNum = document.getElementById("videos-count").getElementsByClassName("style-scope yt-formatted-string")[0].innerHTML;
        numdiv = document.querySelectorAll("#content .style-scope ytd-rich-item-renderer").length;

        videosDiv.style.position = "relative";
        videosDiv.style.zIndex = "-1";

        renderer.style.position = "relative";
        document.body.style.overflowX = "hidden";
        ac = document.createElement('div');
        ac.id = "ac";
        ac.style.position = "absolute";
        ac.style.top = "600px";
        ac.style.height = "900px";
        ac.style.width = "70%";
        ac.style.backgroundColor = colorTheme;
        ac.style.color = colorText;
        ac.style.fontSize = "large";
        ac.innerHTML = "0/" + videoNum;
        ac.style.padding = "top: 5%"
        ac.style.zIndex = "10";
        ac.style.textAlign = "center"
        primary.append(ac);

        var refreshInterval = setInterval(function () {
          numdiv = document.querySelectorAll("#content .style-scope ytd-rich-item-renderer").length;
          console.log("Loading...")
          ac.innerHTML = numdiv + "/" + videoNum;

          if (checkNum == numdiv) {
            console.log(videoNum, numdiv);
            videosDiv.style.zIndex = "0";
            ac.style.display = "none";
            clearInterval(refreshInterval);
          }

          checkNum = numdiv;
        }, 1000);
      }
    });

  }

  chrome.storage.local.get(["Asave"], (items) => { // init storage to prevent undefined values when first installing. needs work.
    Astatus = items.Asave;
    if (Astatus == 0){
        chrome.storage.local.set({ "Asave": "true", "Csave": "default" }); //init and set default animation and appearance if undefined.
    } else {
      console.log(Astatus)
    }
    
  });

  if (document.documentElement.getAttribute("dark") == '') { 
    colorTheme = "#0f0f0f"; // dark mode
    colorText = "#FFFFFF"
  } else if (document.documentElement.getAttribute("dark") == null)  {
    colorTheme = "#FFFFFF"; // light mode
    colorText = "0f0f0f"
  }

  function errorHandler(error, failLocation) {
    console.log(error, failLocation);
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