[![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)](https://github.com/mkenney/software-guides/blob/master/STABILITY-BADGES.md#experimental)  ![version](https://img.shields.io/badge/version-1.0.0-blue) [![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
# Return Youtube Sort By Oldest
 Return Youtube Sort By Oldest
 
 
https://user-images.githubusercontent.com/88860704/229323031-c7f71a07-1460-4b9b-8d73-92af220fa650.mov


### Known current issues
- Once selected Latest and Popular selectors will not work without a page refresh.
- If channel has many videos loading time will be long.

### How it works
Basically when `/videos` is found in the url it activates `contentScript.js`. It then creates the button on a 1s delay which allows the DOM to fully load. Once the button is pressed, it injects `styles` which is css that includes `flex-direction: column-reverse` and `flex-direction: row-reverse` which reverse the contents.

### HELP WANTED
- add text to button
- reverse engineer api or use animations to cover loading time, if possible.
- i obviously dont know javascript

help is appreciated :)
