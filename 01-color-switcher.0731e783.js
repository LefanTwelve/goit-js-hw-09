const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};function n(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function e(t,n){n.setAttribute("disabled",!0),t.removeAttribute("disabled")}t.startBtn.addEventListener("click",(function(o){const{startBtn:r,stopBtn:c}=t,a=setInterval(n,1e3);n(),e(c,r),c.addEventListener("click",function(n){return function(o){const{startBtn:r,stopBtn:c}=t;clearInterval(n),e(r,c)}}(a),{once:!0})}));
//# sourceMappingURL=01-color-switcher.0731e783.js.map