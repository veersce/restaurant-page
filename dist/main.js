(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  display: flex;\n  flex-direction: column;\n  background-color: #fdd8af;\n  height: 100vh;\n}\n\nheader {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  flex-basis: 80px;\n  max-height: 100px;\n}\n\nnav {\n  display: flex;\n  width: 500px;\n  height: 100px;\n  justify-content: space-evenly;\n}\n\nnav button {\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  border: none;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\nnav button:hover {\n  background-color: #fcc586;\n}\n\n#content {\n  flex-grow: 2;\n}\n\n.restaurant-name {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  position: absolute;\n  font-size: 2rem;\n  text-align: center;\n  text-transform: uppercase;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.6);\n  text-shadow: -2px -2px 0 #ffb563, 2px -2px 0 #ffb563, -2px 2px 0 #ffb563,\n    1px 1px 0 #ffb563;\n  color: black;\n}\n\n.main-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-image img {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n\n.showcase {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-evenly;\n  background-color: #fcc586;\n  padding: 20px 0px;\n}\n\n.dish {\n  flex-basis: 220px;\n}\n\n.dish img {\n  width: 100%;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  border-radius: 30px;\n  border: 3px outset #f85f009e;\n}\n\n.dish .description {\n  color: rgb(255, 255, 255);\n  font-size: 0.95rem;\n  text-align: center;\n  padding-top: 10px;\n  text-shadow: 1px 1px 1px #000000;\n}\n\n.title {\n  text-align: center;\n  font-size: 1.3rem;\n}\n\n.main-description {\n  text-align: center;\n  font-size: 1.2rem;\n  margin: 0 15%;\n}\n\nfooter {\n  text-align: center;\n  font-size: 1.1rem;\n  padding: 8px 0px;\n}\n\n.restaurant-description {\n  margin: 20px 0 50px 0;\n}\n",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),o=t(825),r=t.n(o),a=t(659),i=t.n(a),c=t(56),s=t.n(c),d=t(540),u=t.n(d),l=t(113),p=t.n(l),f=t(208),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;const h=t.p+"8f4109a6cc76de34da20.png",v=t.p+"022eb5cceddb157a56de.jpg",b=t.p+"44857645cad1d0e36bcf.jpg",g=t.p+"004396dbe293bfd7806b.jpg",y=t.p+"2296ef5e5ef799ffa68e.jpg";function x(){w(),E("ラーメン"),L("body"),S("restaurant-description","body"),S("title",".restaurant-description"),function(e,n){let t=document.createElement("h1");t.textContent="A Taste of Japan",k(t,".title")}(),S("main-description",".restaurant-description"),L(".main-description"),j("Step into Ramen Haven, a sanctuary for ramen enthusiasts seeking the\n            ultimate noodle experience. Our menu is a celebration of Japan's\n            culinary heritage, featuring a diverse array of ramen bowls\n            meticulously crafted to perfection. From rich tonkotsu to flavorful\n            shoyu, each bowl is a harmonious blend of savory broth, springy\n            noodles, and fresh toppings. Immerse yourself in the vibrant\n            atmosphere of our restaurant, where the aroma of simmering broth and\n            the buzz of satisfied diners create an unforgettable dining\n            ambiance.",".main-description"),L(".main-description"),j("Join us and embark on a journey through the flavors of Japan, one\n            tantalizing slurp at a time.",".main-description"),S("showcase","body"),k(C(v,"Indulge in our authentic ramen bowls, a symphony of savory broth,\n            chewy noodles, and fresh toppings. Satisfy your cravings with every\n            slurp at our cozy eatery."),".showcase"),k(C(b,"Discover the soul-warming comfort of our signature ramen bowls,\n            crafted with care and bursting with bold flavors. Dive into a bowl\n            of perfection today!"),".showcase"),k(C(g,"Treat your taste buds to an unforgettable journey through Japan with\n            our tantalizing ramen creations. Each bowl promises a delightful\n            blend of texture and taste."),".showcase"),k(C(y,"Experience the ultimate umami explosion with our mouthwatering ramen\n            dishes. From rich tonkotsu to aromatic miso, our menu offers a taste\n            of authentic Japanese comfort."),".showcase"),M("ラーメン","2024")}function w(){T("Home"),T("Menu"),T("Contact")}function E(e){const n=new Image;n.src=h,n.alt="japanese cuisine";const t=document.querySelector("#content");let o=document.createElement("div");o.classList.add("main-image"),t.append(o),o.append(n),function(e){const n=document.querySelector(".main-image");let t=document.createElement("div");t.classList.add("restaurant-name");let o=document.createElement("h1");o.innerHTML=`${e}`,t.append(o),n.append(t)}(e)}function T(e){let n=document.querySelector("nav"),t=document.createElement("button");t.innerHTML=`${e}`,n.append(t)}function L(e){k(document.createElement("br"),e)}function S(e,n){let t=document.querySelector(`${n}`),o=document.createElement("div");o.classList.add(`${e}`),t.append(o)}function k(e,n){document.querySelector(`${n}`).append(e)}function j(e,n){let t=document.createElement("p");t.textContent=e,k(t,n)}function C(e,n){let t=document.createElement("div");t.classList.add("dish");let o=document.createElement("img");o.src=e,o.alt=e,t.append(o);let r=document.createElement("p");return r.classList.add("description"),r.textContent=n,t.append(r),t}function M(e,n){let t=document.createElement("footer");t.innerHTML=`<p>${e} &copy; ${n}</p>`,k(t,"body")}function $(e,n){let t=document.createElement("div");t.classList.add("main-description"),t.classList.add("showcase");let o=document.createElement("p");return o.textContent=`${e} - ${n}`,t.append(o),t}function A(e,n,t,o){let r=document.createElement("div");r.classList.add("main-description"),r.classList.add("showcase");let a=document.createElement("p");return a.textContent=`${e}) ${n} | ${t} | $${o}`,r.append(a),r}x(),function e(){let n=document.querySelectorAll("button");n[0].addEventListener("click",(()=>{document.body.innerHTML='<header><nav></nav></header>\n    <div id="content"></div>',x(),e()})),n[1].addEventListener("click",(()=>{document.body.innerHTML='<header><nav></nav></header>\n    <div id="content"></div>',w(),E("ラーメン"),function(){let e=document.createElement("div");e.classList.add("title");let n=document.createElement("h1");n.textContent="Choose your ramen",e.append(n),L("#content"),k(e,"#content"),L("#content"),k(A("1","Shoyu Ramen","Soy sauce broth, noodles, chashu pork, bamboo shoots, nori seaweed","10.99"),"#content"),L("#content"),k(A("2","Miso Ramen","Miso broth, noodles, sliced pork, corn, bean sprouts","11.99"),"#content"),L("#content"),k(A("3","Tonkotsu Ramen","Pork bone broth, noodles, tender pork belly, green onions, wood ear mushrooms","12.99"),"#content"),L("#content"),k(A("4","Spicy Tan Tan Ramen ","Spicy sesame broth, ground pork, noodles, bok choy, chili oil","13.99"),"#content"),L("#content"),k(A("5","Vegetarian Ramen","Vegetable broth, noodles, tofu, spinach, mushrooms, menma","1.99"),"#content")}(),M("ラーメン","2024"),e()})),n[2].addEventListener("click",(()=>{document.body.innerHTML='<header><nav></nav></header>\n    <div id="content"></div>',w(),E("ラーメン"),function(){let e=document.createElement("div");e.classList.add("title");let n=document.createElement("h1");n.textContent="Contact us",e.append(n),L("#content"),k(e,"#content"),L("#content"),k($("Smith","669 523 612"),"#content"),L("#content"),k($("Elisa","694 521 885"),"#content")}(),M("ラーメン","2024"),e()}))}()})()})();