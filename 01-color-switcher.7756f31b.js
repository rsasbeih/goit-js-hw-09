const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;function o(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{n=setInterval(o,1e3)})),e.addEventListener("click",(()=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.7756f31b.js.map
