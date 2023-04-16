[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://github.com/mkenney/software-guides/blob/master/STABILITY-BADGES.md#experimental)  ![version](https://img.shields.io/badge/version-1.2.0-blue) [![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
# Return Youtube Sort By Oldest
 Return Youtube Sort By Oldest
 
 


https://user-images.githubusercontent.com/88860704/230260376-9384e536-cb85-45e6-9364-c26626bfd414.mp4


### Known current issues
- Currently only supports Chrome Browsers.
- If channel has many videos loading time will be long.

### How it works
Basically when `/videos` is found in the url it activates `contentScript.js`. It then creates the button on a 1s delay which allows the DOM to fully load. Once the button is pressed, it injects `styles` which is css that includes `flex-direction: column-reverse` and `flex-direction: row-reverse` which reverse the contents.

### How to use
1. Download latest release .zip file
2. Go to extension manager in browser and enable Developer mode
3. Click `Load unpacked` and give the path to the extracted files.

- Hopefully this extension will become available in the WebStore but its obviously not good enough to 'ship', therefore you must add it manually 

### HELP WANTED
- reverse engineer api or use animations to cover loading time, if possible.
- i obviously dont know javascript

help is appreciated :)
