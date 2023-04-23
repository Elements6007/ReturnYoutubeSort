[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://github.com/mkenney/software-guides/blob/master/STABILITY-BADGES.md#experimental)  ![version](https://img.shields.io/badge/version-1.2.0-blue) [![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)

[![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)](https://chrome.google.com/webstore/detail/sort-by-oldest/miglaibdlgminlepgeifekifakochlka) [![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)](https://addons.mozilla.org/addon/sort-by-oldest/)
# Return Youtube Sort By Oldest
 Return Youtube Sort By Oldest
 
 


https://user-images.githubusercontent.com/88860704/230260376-9384e536-cb85-45e6-9364-c26626bfd414.mp4

# [Add to Chrome](https://chrome.google.com/webstore/detail/sort-by-oldest/miglaibdlgminlepgeifekifakochlka)  
# [Add to Firefox](https://addons.mozilla.org/addon/sort-by-oldest/) 

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

## Support the project!
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/elements6007)
