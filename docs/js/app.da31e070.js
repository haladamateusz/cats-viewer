!function(e){function t(t){for(var r,i,c=t[0],a=t[1],l=t[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(f&&f(t);p.length;)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=a;u.push([48,1]),n()}({48:function(e,t,n){"use strict";n.r(t);n(49),n(55),n(86),n(87);function r(e,t,n,r,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,u){var i=e.apply(t,n);function c(e){r(i,o,u,c,a,"next",e)}function a(e){r(i,o,u,c,a,"throw",e)}c(void 0)}))}}var u,i=n(88).default;function c(){return i({method:"get",url:"https://api.thecatapi.com/v1/images/search"}).catch((function(e){console.log(e)}))}function a(){return l.apply(this,arguments)}function l(){return(l=o(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a().then((function(e){u=e[0].url})),document.querySelector(".random-button").addEventListener("click",(function(){a().then((function(e){u=e[0].url;var t=document.createElement("img");t.src=u,t.classList.add("image");for(var n=document.querySelector(".parent");n.firstChild;)n.removeChild(n.firstChild);n.appendChild(t)}))}));var f=document.querySelector(".container");document.querySelector(".close-button").addEventListener("click",(function(){f.removeChild(f.firstElementChild)}))},87:function(e,t,n){}});
//# sourceMappingURL=app.da31e070.js.map