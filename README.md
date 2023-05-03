[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://github.com/mkenney/software-guides/blob/master/STABILITY-BADGES.md#experimental)  ![version](https://img.shields.io/badge/version-1.2.1-blue) [![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)

[![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)](https://chrome.google.com/webstore/detail/sort-by-oldest/miglaibdlgminlepgeifekifakochlka) [![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)](https://addons.mozilla.org/addon/sort-by-oldest/) 	[![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)](https://microsoftedge.microsoft.com/addons/detail/sort-by-oldest/goommoejopdlpinofbhmkahjdciaepbi)
# Return Youtube Sort By Oldest
 This browser extension returns the Youtube Sort By: Oldest feature. It basically inverts the videos with a animation overlay(which can be disabled in settings).
 
https://user-images.githubusercontent.com/88860704/235992554-7e5f1537-e5d0-41a9-a993-f6db8482434f.mp4

# [Add to Chrome](https://chrome.google.com/webstore/detail/sort-by-oldest/miglaibdlgminlepgeifekifakochlka)  
# [Add to Firefox](https://addons.mozilla.org/addon/sort-by-oldest/) 
# [Add to Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/sort-by-oldest/goommoejopdlpinofbhmkahjdciaepbi)

### Known current issues
- Microsoft Edge support pending
- If channel has many videos loading time will be long.

### How it works
Basically when `/videos` is found in the url it activates `contentScript.js`. It then creates the button on a 1s delay which allows the DOM to fully load. Once the button is pressed, it injects `styles` which is css that includes `flex-direction: column-reverse` and `flex-direction: row-reverse` which reverse the contents.

### How manually install
1. Download latest release .zip file
2. Go to extension manager in browser and enable Developer mode
3. Click `Load unpacked` and give the path to the extracted files.

### HELP WANTED
- reverse engineer api or use animations to cover loading time, if possible.
- Website needs alot of work, help with that would be great :)
- `contentScripts.js` needs to be refactored.

## Support the project!
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/elements6007)
