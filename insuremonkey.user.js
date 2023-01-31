// ==UserScript==
// @name         InsureMonkey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ipartner.icicilombard.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        unsafeWindow
// @updateURL    https://github.com/PrishaPolicy/tampermonkey/raw/main/insuremonkey.user.js
// @downloadURL  https://github.com/PrishaPolicy/tampermonkey/raw/main/insuremonkey.user.js
// @run-at document-end
// ==/UserScript==


unsafeWindow.console.log("hi from monkey");

const helperFunction = (e)=>{
    e.stopPropagation()
}

const removeKeyRestrictions = (events)=>{
    events.forEach(event=>{
        unsafeWindow.addEventListener(event,helperFunction,{capture:true})

    })
}

removeKeyRestrictions(["keypress","keydown"])
