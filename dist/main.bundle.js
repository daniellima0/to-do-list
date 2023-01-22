(()=>{"use strict";var t={424:(t,n,e)=>{e.d(n,{Z:()=>a});var r=e(81),o=e.n(r),i=e(645),s=e.n(i)()(o());s.push([t.id,"body {\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tdisplay: flex;\r\n}\r\n\r\n.lists {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmin-width: 15rem;\r\n\theight: 100vh;\r\n\tpadding-top: 3rem;\r\n\tpadding-left: 3rem;\r\n\tbackground-color: #eeeeee;\r\n}\r\n\r\n.lists__item {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin-bottom: 1rem;\r\n\theight: 2.5rem;\r\n\tborder-top-left-radius: 0.3rem;\r\n\tborder-bottom-left-radius: 0.3rem;\r\n\tpadding-left: 1rem;\r\n\tbackground-color: #eeeeee;\r\n\ttransition: background 0.2s ease-in-out;\r\n}\r\n\r\n.lists__item:hover {\r\n\tbackground-color: #f9f9f9;\r\n\tcursor: pointer;\r\n}\r\n\r\n.lists__item--active {\r\n\tbackground-color: #f7f7f7;\r\n}\r\n\r\n.lists__inbox-icon {\r\n\twidth: 1.5rem;\r\n\tmargin-right: 1.6rem;\r\n}\r\n\r\n.lists__list-icon {\r\n\twidth: 0.8rem;\r\n\tmargin-left: 0.3rem;\r\n\tmargin-right: 2rem;\r\n}\r\n\r\n.lists__text {\r\n\tfont-size: large;\r\n}\r\n\r\n.lists__button {\r\n\tborder: none;\r\n\tbackground-color: rgb(240, 128, 128);\r\n\tcolor: white;\r\n\tfont-size: medium;\r\n\theight: 1.8rem;\r\n\twidth: 7rem;\r\n\tmargin-top: 0.5rem;\r\n\tmargin-left: 3.5rem;\r\n}\r\n\r\n.lists__button:hover {\r\n\tcursor: pointer;\r\n\tbackground-color: rgb(250, 128, 128);\r\n\ttransition: background 0.2s ease-in-out;\r\n}\r\n\r\n.list-content {\r\n\tbackground-color: #f7f7f7;\r\n\twidth: 100%;\r\n}\r\n\r\n.list-content__title {\r\n\tmargin-top: 3.5rem;\r\n\tmargin-left: 6rem;\r\n\tfont-weight: bold;\r\n\tfont-size: 1.8rem;\r\n}\r\n\r\n.list-content__tasks {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-top: 3rem;\r\n\tmargin-left: 4rem;\r\n}\r\n\r\n.list-content__task {\r\n\tdisplay: flex;\r\n}\r\n\r\n/* .list-content__checkbox {\r\n} */\r\n\r\n.list-content__text {\r\n\tfont-size: large;\r\n\tmargin-left: 0.5rem;\r\n}\r\n\r\n.list-content__button {\r\n\tbackground-color: inherit;\r\n\tborder: none;\r\n\tfont-size: medium;\r\n\tcolor: grey;\r\n\tfont-style: italic;\r\n\tmargin-left: 4rem;\r\n\tmargin-top: 0.8rem;\r\n}\r\n\r\n.list-content__button:hover {\r\n\tcursor: pointer;\r\n}",""]);const a=s},917:(t,n,e)=>{e.d(n,{Z:()=>a});var r=e(81),o=e.n(r),i=e(645),s=e.n(i)()(o());s.push([t.id,"/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}",""]);const a=s},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},s=[],a=0;a<t.length;a++){var c=t[a],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var m=e(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,r);r.byIndex=a,n.splice(a,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=e(i[s]);n[a].references--}for(var c=r(t,o),l=0;l<i.length;l++){var d=e(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),r=e(795),o=e.n(r),i=e(569),s=e.n(i),a=e(565),c=e.n(a),l=e(216),d=e.n(l),u=e(589),m=e.n(u),p=e(917),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var b=e(424),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),n()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;const h=e.p+"99a5bb37814801d3b6b7.png",v=e.p+"9e58a24a8ce8e6b1a28e.png",_=(t,n)=>{let e=[],r=0;return{id:t,name:n,addTask:t=>{let n=((t,n,e,r,o,i)=>({id:t,title:n,description:void 0,dueDate:void 0,priority:void 0,list:void 0}))(r,t);e.push(n),r+=1},removeTask:t=>{e.forEach((n=>{n.id==t.id&&e.splice(indexOf(t),0)}))},getAllTasks:()=>e}},y=(()=>{let t=_(0,"Inbox");t.addTask("aaaaa");let n=[t],e=1;return{addList:t=>{let r=_(e,t);n.push(r),e+=1},removeList:t=>{n.forEach((e=>{e.id==t.id&&n.splice(indexOf(t),0)}))},getListById:t=>n[t],getAllLists:()=>n}})(),x={renderPage:()=>{document.getElementsByTagName("body")[0].textContent="",document.body.innerHTML='\n\t\t\t<div class="lists">\n\t\t\t\t<div class="lists__items"></div>\n\t\t\t\t<button class="lists__button">+ New List</button>\n\t\t\t</div>\n\t\t\t<div class="list-content">\n\t\t\t\t<h1 class="list-content__title">Inbox</h1>\n\t\t\t\t<div class="list-content__tasks"></div>\n\t\t\t\t<button class="list-content__button">+ New Task</button>\n\t\t\t</div>\n        ',(()=>{const t=document.getElementsByClassName("lists__items")[0];y.getAllLists().forEach((n=>{const e=document.createElement("div");e.className="lists__item";const r=document.createElement("img");"Inbox"==n.name?(r.src=h,r.className="lists__inbox-icon",e.className="lists__item lists__item--active"):(r.src=v,r.className="lists__list-icon");const o=document.createElement("span");o.textContent=n.name,o.className="lists__text",e.append(r,o),t.append(e)}))})(),(t=>{const n=document.getElementsByClassName("list-content__tasks")[0];y.getListById(t).getAllTasks().forEach((t=>{const e=document.createElement("div");e.className="list-content__task";const r=document.createElement("input");r.className="list-content__checkbox",r.type="checkbox";const o=document.createElement("p");o.className="list-content__text",o.textContent=t.title,console.log(t),e.append(r,o),n.append(e)}))})(0)}};x.renderPage(),y.addList("List1"),y.addList("List2"),x.renderPage()})()})();