const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.body};t.btnStop.disabled=!0;let n=null;function e(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.btnStart.addEventListener("click",(function(){n=setInterval(e,1e3),t.btnStart.disabled=!0,t.btnStop.disabled=!1})),t.btnStop.addEventListener("click",(function(){clearInterval(n),t.btnStart.disabled=!1,t.btnStop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.d4e70a1b.js.map
