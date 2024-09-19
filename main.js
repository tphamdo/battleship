(()=>{var e={365:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(601),a=r.n(n),i=r(314),o=r.n(i)()(a());o.push([e.id,'* {\n  margin: 0;\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: black;\n  color: white;\n  font-family: sans-serif, serif;\n  padding: 24px;\n}\n\n.title {\n  text-align: center;\n  font-size: 5rem;\n  padding: 16px;\n  margin-bottom: 48px;\n}\n\n.boards {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 120px;\n}\n\n.board div {\n  border: 1px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n}\n\n.board {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.hit::after {\n  color: red;\n  content: "X";\n}\n\n.miss::after {\n  content: "•";\n}\n\n.ship {\n  background-color: blue;\n}\n\n.name {\n  text-align: center;\n  margin-bottom: 30px;\n  font-size: 2rem;\n}\n\n.clickable {\n  cursor: pointer;\n}\n\n.clickable:hover {\n  background-color: grey;\n}\n',""]);const s=o},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var h=r(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=a(p,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var i=n(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=r(i[o]);t[s].references--}for(var c=n(e,a),l=0;l<i.length;l++){var d=r(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},659:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},966:(e,t,r)=>{const n=r(77),a=r(508),i=r(338);class o{#e;#t;static get DEFAULT_GAME_SIZE(){return 10}static get DEFAULT_SHIP_SIZES(){return[...Array(1).fill(5),...Array(2).fill(4),...Array(3).fill(3),...Array(4).fill(3)]}constructor({gridSize:e=10,player1Name:t="You",player2Name:r="Computer"}={}){this.gridSize=e,this.player1=new n(new a(e),t),this.player2=new n(new a(e),r),this.#e=this.player1,this.#t=this.player2}playTurn(e){this.#t.gameboard.receiveAttack(e),this.#r()}playRandomTurn(){for(;;){try{let e=this.getRandomCoord();console.log(this.player1.gameboard.board),console.log(e),this.#t.gameboard.receiveAttack(e)}catch(e){console.log(e);continue}break}this.#r()}get activePlayer(){return this.#e}get waitingPlayer(){return this.#t}get player1Board(){return this.player1.gameboard.board}get player2Board(){return this.player2.gameboard.board}#r(){[this.#e,this.#t]=[this.#t,this.#e]}initDefaults(){this.gridSize=o.DEFAULT_GAME_SIZE,this.#n(this.player1),this.#n(this.player2)}#n(e){e.gameboard=new a(this.gridSize),o.DEFAULT_SHIP_SIZES.forEach((t=>{const r=new i(t);for(;;){try{e.placeShip({ship:r,coord:this.getRandomCoord(),dir:o.getRandomDirection()})}catch(e){console.log(e);continue}break}})),console.log(e.gameboard.board)}getRandomCoord(){return{x:s.getRandomInt(this.gridSize-1),y:s.getRandomInt(this.gridSize-1)}}static getRandomDirection(){return 1===s.getRandomInt(1)?"v":"h"}}class s{static getRandomInt(e){return Math.floor(Math.random()*(e+1))}}e.exports=o},508:e=>{e.exports=class{#a;#i=0;#o=[];constructor(e=10){this.size=e,this.#a=Array(e).fill().map((t=>new Array(e).fill("E")))}placeShip(e,t,r){if(!this.isPlacementValid(t,e.length,r)||!this.isPlacementEmpty(t,e.length,r))throw new Error("Invalid placement");for(let n=0;n<e.length;++n)this.#a[t.y][t.x]=this.#o.length+1,"v"===r?t.y++:t.x++;this.#o.push(e)}receiveAttack({x:e,y:t}){if(!this.isCoordValid({x:e,y:t}))throw new Error("Invalid Coordinate");let r=this.#a[t][e];if("number"==typeof r)this.#o[r-1].hit(),this.#a[t][e]=-r;else{if("E"!==r)throw new Error("Attacking grid position that has already been tried");this.#a[t][e]="M"}}isPlacementValid(e,t,r){return this.isPlacementOnBoard(e,t,r)&&this.isPlacementEmpty(e,t,r)}isPlacementOnBoard(e,t,r){let n={x:e.x,y:e.y};return"v"===r?n.y+=t-1:n.x+=t-1,this.isCoordValid(e)&&this.isCoordValid(n)}isPlacementEmpty(e,t,r){if(!this.isPlacementOnBoard(e,t,r))return!1;let n=!0,a={x:e.x,y:e.y};for(let e=0;e<t;++e)n&="E"===this.#a[a.y][a.x],"v"===r?a.y++:a.x++;return n}isCoordValid(e){return e.x>=0&&e.y>=0&&e.x<this.size&&e.y<this.size}isHitOrMiss({x:e,y:t}){let r=this.#a[t][e];return"number"==typeof r&&r<0||"M"===r}get board(){return this.#a}}},77:e=>{e.exports=class{constructor(e,t){this.gameboard=e,this.name=t}placeShip({ship:e,coord:t,dir:r}){this.gameboard.placeShip(e,t,r)}}},640:(e,t,r)=>{const n=r(966);e.exports=function(){const e=document.querySelector(".board-1 .board"),t=document.querySelector(".board-2 .board"),r=document.querySelector(".board-1 .name"),a=document.querySelector(".board-2 .name"),i=new n;function o(){[e,t].forEach((e=>{e.textContent="",function({boardContainer:e,height:t=600}={}){e.style.height=`${t}px`,e.style.width=`${t}px`}({boardContainer:e})})),s({name:i.player1.name,boardNameContainer:r}),s({name:i.player2.name,boardNameContainer:a}),function({board:e,boardContainer:t,gridHeightPx:r=600,numRows:n=10}={}){console.log(e.length);for(let a=0;a<n;++a)for(let i=0;i<n;++i){let o=document.createElement("div");o.style.height=r/n+"px",o.style.width=r/n+"px",o.classList.add(...c(e[a][i])),t.appendChild(o)}}({board:i.player1Board,boardContainer:e,numRows:i.player1Board.length}),function({board:e,boardContainer:t,gridHeightPx:r=600,numRows:n=10}){for(let a=0;a<n;++a)for(let i=0;i<n;++i){let o=document.createElement("div");o.style.height=r/n+"px",o.style.width=r/n+"px",o.dataset.y=a,o.dataset.x=i,o.classList.add(...l(e[a][i])),o.addEventListener("click",d,{once:!0}),t.appendChild(o)}}({board:i.player2Board,boardContainer:t,numRows:i.player2Board.length})}function s({name:e,boardNameContainer:t}){t.textContent=e}function c(e){switch(e){case"M":return["miss"];case"E":return["empty"];default:return e<0?["hit","ship"]:["ship"]}}function l(e){switch(e){case"E":return["empty","clickable"];case"M":return["miss"];default:return e<0?["hit"]:["clickable"]}}function d(e){let t=e.target,r=t.dataset.x,n=t.dataset.y;i.player2.gameboard.isHitOrMiss({x:r,y:n})||(i.playTurn({x:r,y:n}),i.playRandomTurn(),o())}i.initDefaults(),o()}},338:e=>{e.exports=class{#s=0;constructor(e=1){if("number"!=typeof e||e<1)throw new Error("Invalid length argument");this.length=e}hit(){this.#s++}isSunk(){return this.#s>=this.length}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{"use strict";var e=r(72),t=r.n(e),n=r(825),a=r.n(n),i=r(659),o=r.n(i),s=r(56),c=r.n(s),l=r(540),d=r.n(l),u=r(113),h=r.n(u),p=r(365),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),t()(p.A,f),p.A&&p.A.locals&&p.A.locals,r(640)()})()})();