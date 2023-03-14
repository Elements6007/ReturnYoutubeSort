chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/@") {
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId:urlParameters.get("v"),
        })
    }
})

/*{
    "name": "rysbo",
    "description": "return youtube sort by oldest",
    "default_locale": "en",
    "version": "0.1.0",
    "manifest_version": 3,
    "background": {
      "service_worker": "background.js"
    },
    "icons": {
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    },
    "host_permissions": ["*://*.youtube.com/*"],
    "permissions": ["storage"],
    "action": {
      "default_popup": "popup.html"
    },
    "content_scripts": [
      {
        "matches": [
          "*://youtube.com/@*",
          "*://www.youtube.com/@*",
          "*://m.youtube.com/@*"
        ],
        "js": ["ryd.content-script.js"],
        "css": ["content-style.css"]
      }
    ],
    "web_accessible_resources": [
      {
        "resources": ["ryd.script.js"],
        "matches": ["*://*.youtube.com/*"]
      }
    ]
  }*/