(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  display: flex;\n  flex-direction: column;\n  background-color: #fdd8af;\n}\n\nheader {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  flex-basis: 80px;\n}\n\nnav {\n  display: flex;\n  width: 500px;\n  justify-content: space-evenly;\n}\n\nnav button {\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  border: none;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\nnav button:hover {\n  background-color: #fcc586;\n}\n\n#content {\n  flex-grow: 2;\n}\n\n.restaurant-name {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  position: absolute;\n  font-size: 2rem;\n  text-align: center;\n  text-transform: uppercase;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.6);\n  text-shadow: -2px -2px 0 #ffb563, 2px -2px 0 #ffb563, -2px 2px 0 #ffb563,\n    1px 1px 0 #ffb563;\n  color: black;\n}\n\n.main-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-image img {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n\n.showcase {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-evenly;\n  background-color: #fcc586;\n  padding: 40px 0px;\n}\n\n.dish {\n  flex-basis: 220px;\n}\n\n.dish img {\n  width: 100%;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  border-radius: 30px;\n  border: 3px outset #f85f009e;\n}\n\n.dish .description {\n  color: rgb(255, 255, 255);\n  font-size: 0.95rem;\n  text-align: center;\n  padding-top: 10px;\n  text-shadow: 1px 1px 1px #000000;\n}\n\n.title {\n  text-align: center;\n  font-size: 1.3rem;\n}\n\n.main-description {\n  text-align: center;\n  font-size: 1.2rem;\n  margin: 0 15%;\n}\n\nfooter {\n  text-align: center;\n  font-size: 1.1rem;\n  margin: 8px 0;\n}\n\n.restaurant-description {\n  margin: 20px 0 50px 0;\n}\n",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],d=a[p]||0,u="".concat(p," ").concat(d);a[p]=d+1;var l=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),p=0;p<a.length;p++){var d=t(a[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),p=t(540),d=t.n(p),u=t(113),l=t.n(u),f=t(208),m={};m.styleTagTransform=l(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const v=t.p+"8f4109a6cc76de34da20.png";function h(n){let e=document.querySelector("nav"),t=document.createElement("button");t.innerHTML=`${n}`,e.append(t)}h("Home"),h("Contact"),h("About Us"),function(n){const e=new Image;e.src=v,e.alt="japanese cuisine";const t=document.querySelector("#content");let r=document.createElement("div");r.classList.add("main-image"),t.append(r),r.append(e),function(n){const e=document.querySelector(".main-image");let t=document.createElement("div");t.classList.add("restaurant-name");let r=document.createElement("h1");r.innerHTML=`${n}`,t.append(r),e.append(t)}("ラーメン")}(),document.body.append(document.createElement("br")),function(n){let e=document.createElement("div");e.classList.add("main-description"),document.body.append(e)}(),console.log("Works")})()})();