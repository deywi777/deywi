/*!
devtools-detect
Detect if DevTools is open
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/
!function(){"use strict";const i={isOpen:!1,orientation:void 0},e=(i,e)=>{window.dispatchEvent(new CustomEvent("devtoolschange",{detail:{isOpen:i,orientation:e}}))};setInterval((()=>{const n=window.outerWidth-window.innerWidth>160,o=window.outerHeight-window.innerHeight>160,t=n?"vertical":"horizontal";o&&n||!(window.Firebug&&window.Firebug.chrome&&window.Firebug.chrome.isInitialized||n||o)?(i.isOpen&&e(!1,void 0),i.isOpen=!1,i.orientation=void 0):(i.isOpen&&i.orientation===t||e(!0,t),i.isOpen=!0,i.orientation=t)}),500),"undefined"!=typeof module&&module.exports?module.exports=i:window.devtools=i}();