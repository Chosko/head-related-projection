!function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([225,1]),n()}({203:function(e,t){},222:function(e,t){},223:function(e,t){},224:function(e,t){},225:function(e,t,n){"use strict";n.r(t);n(85),n(70),n(95),n(96);var r=n(1),o=n(11),i=n.n(o),a=n(42),s=(n(30),n(101),n(75),n(104),n(23),n(79),n(152),n(109),n(32),n(110),n(111),n(112),n(24),n(27),n(81),n(33),n(157),n(130)),c=n.n(s),u=n(131),l=n.n(u),f=n(132),p=n.n(f),d=n(133),h=n.n(d),b=n(134),w=n.n(b),g=n(135),y=n(142),v=n(136);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){x(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var S=0;function C(e){return"__private_"+S+++"_"+e}var E=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=n.background,a=void 0===o?"#000":o,s=n.backgroundAlpha,u=void 0===s?1:s,f=n.fov,p=void 0===f?45:f,d=n.near,b=void 0===d?.01:d,m=n.far,x=void 0===m?100:m,j=k(n,["background","backgroundAlpha","fov","near","far"]);if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.defineProperty(this,D,{writable:!0,value:[]}),Object.defineProperty(this,T,{writable:!0,value:new r.Gb}),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,_,{writable:!0,value:void 0}),this.resize=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width,r=void 0===n?window.innerWidth:n,o=e.height,i=void 0===o?window.innerHeight:o,a=e.pixelRatio,s=void 0===a?Math.min(t.maxPixelRatio,window.devicePixelRatio):a;return t.width=r,t.height=i,t.pixelRatio=s,t.renderer.getPixelRatio()!==s&&t.renderer.setPixelRatio(s),t.renderer.setSize(r,i),t.camera.isPerspectiveCamera&&(t.camera.aspect=r/i),t.camera.updateProjectionMatrix(),t.composer&&t.composer.setSize(s*r,s*i),t.scene.traverse(function(e){"function"==typeof e.resize&&e.resize({width:r,height:i,pixelRatio:s})}),t.draw(),t},this.saveScreenshot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width,r=void 0===n?2560:n,o=e.height,i=void 0===o?1440:o,a=e.fileName,s=void 0===a?"image.png":a;t.resize({width:r,height:i,pixelRatio:1}),t.draw();var c=t.canvas.toDataURL("image/png");t.resize(),t.draw(),B(s,c)},this.update=function(e,n){return t.orbitControls&&(t.orbitControls.update(),t.camera.up.fromArray(t.orbitControls.up),t.camera.position.fromArray(t.orbitControls.position),P(t,T)[T].fromArray(t.orbitControls.target),t.camera.lookAt(P(t,T)[T])),t.scene.traverse(function(t){"function"==typeof t.update&&t.update(e,n)}),t.world&&(t.world.step(e),t.world.bodies.forEach(function(t){"function"==typeof t.update&&t.update(e,n)})),t.tween&&t.tween.update(),P(t,D)[D].forEach(function(t){return t(e,n)}),t},this.draw=function(){return t.composer?(t.composer.passes.forEach(function(e,t,n){var r=t===n.length-1;e.renderToScreen=!!r}),t.composer.render()):t.renderer.render(t.scene,t.camera),t},this.start=function(){if(null===P(t,R)[R])return P(t,R)[R]=window.requestAnimationFrame(t.animate),t.isRunning=!0,t},this.stop=function(){if(null!==P(t,R)[R])return window.cancelAnimationFrame(P(t,R)[R]),P(t,R)[R]=null,t.isRunning=!1,t},this.animate=function(){if(t.isRunning){window.requestAnimationFrame(t.animate),t.stats&&t.stats.begin();var e=performance.now(),n=Math.min(t.maxDeltaTime,(e-P(t,_)[_])/1e3);t.time+=n,P(t,_)[_]=e,t.update(n,t.time),t.draw(),t.stats&&t.stats.end()}},this.traverse=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t.scene.traverse(function(t){"function"==typeof t[e]&&t[e].apply(t,r)})},this.renderer=new r.Lb(O({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,failIfMajorPerformanceCaveat:!0},j)),this.renderer.sortObjects=!1,this.canvas=this.renderer.domElement,this.renderer.setClearColor(a,u),this.maxPixelRatio=j.maxPixelRatio||2,this.maxDeltaTime=j.maxDeltaTime||1/30,this.camera=new r.eb(p,1,b,x),this.scene=new r.sb,this.gl=this.renderer.getContext(),this.time=0,this.isRunning=!1,P(this,_)[_]=performance.now(),P(this,R)[R]=null,window.addEventListener("resize",this.resize),window.addEventListener("orientationchange",this.resize),this.resize(),this.touchHandler=l()(this.canvas,{target:this.canvas,filtered:!0}),this.touchHandler.on("start",function(e,n){return t.traverse("onPointerDown",e,n)}),this.touchHandler.on("move",function(e,n){return t.traverse("onPointerMove",e,n)}),this.touchHandler.on("end",function(e,n){return t.traverse("onPointerUp",e,n)}),j.postprocessing&&(this.composer=new y.a(this.renderer),this.composer.addPass(new v.a(this.scene,this.camera))),j.orbitControls&&(this.orbitControls=c()(O({element:this.canvas,parent:window,distance:5},j.orbitControls instanceof Object?j.orbitControls:{})),this.camera.position.fromArray(this.orbitControls.position),this.camera.lookAt((new r.Gb).fromArray(this.orbitControls.target))),j.world&&(this.world=j.world),j.tween&&(this.tween=j.tween),j.showFps&&(this.stats=new h.a,this.stats.showPanel(0),document.body.appendChild(this.stats.dom)),j.controls){var S=i()(j.controls);if(this.controls=j.hideControls?S:w()(S),j.closeControls){var C=document.querySelector('[class*="controlPanel"]');C.style.display="none",document.querySelector('[class*="controlPanel"] button').click(),C.style.display="block"}}var E=Object(g.getGPUTier)({glContext:this.renderer.getContext()});this.gpu={name:E.type,tier:Number(E.tier.slice(-1)),isMobile:E.tier.toLowerCase().includes("mobile")}}var t,n,o;return t=e,(n=[{key:"onUpdate",value:function(e){P(this,D)[D].push(e)}}])&&j(t.prototype,n),o&&j(t,o),e}(),D=C("updateListeners"),T=C("tmpTarget"),R=C("rafID"),_=C("lastTime");function B(e,t){var n=p()(t),r=document.createElement("a");r.download=e,r.href=window.URL.createObjectURL(n),r.onclick=setTimeout(function(){window.URL.revokeObjectURL(n),r.removeAttribute("href")},0),r.click()}n(40),n(41),n(124),n(186),n(187),n(188),n(190),n(54),n(199),n(55);var M=n(137),L=n.n(M),U=n(60),A=n.n(U),q=n(58),z=n(138);n(205),n(206);function H(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function I(e,t){return F.apply(this,arguments)}function F(){var e;return e=regeneratorRuntime.mark(function e(t,n){var o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new r.zb).name=t,o.encoding=n.encoding||r.I,Y(t,o,n),e.prev=4,e.next=7,Object(q.a)(t,{crossorigin:"anonymous"});case 7:return i=e.sent,o.image=i,o.needsUpdate=!0,n.renderer&&n.renderer.initTexture(o),e.abrupt("return",o);case 14:throw e.prev=14,e.t0=e.catch(4),new Error("Could not load texture ".concat(t));case 17:case"end":return e.stop()}},e,null,[[4,14]])}),(F=function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){H(i,r,o,a,s,"next",e)}function s(e){H(i,r,o,a,s,"throw",e)}a(void 0)})}).apply(this,arguments)}function Y(e,t,n){if("boolean"==typeof n.flipY&&(t.flipY=n.flipY),void 0!==n.mapping&&(t.mapping=n.mapping),void 0!==n.format)t.format=n.format;else{var o=e.search(/\.(jpg|jpeg)$/)>0||0===e.search(/^data:image\/jpeg/);t.format=o?r.pb:r.mb}n.repeat&&t.repeat.copy(n.repeat),t.wrapS=n.wrapS||r.i,t.wrapT=n.wrapT||r.i,t.minFilter=n.minFilter||r.K,t.magFilter=n.magFilter||r.J,t.generateMipmaps=!1!==n.generateMipmaps}n(208);var G=n(139),V=n.n(G),W=n(143),X=n(140),$=n(141);function K(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function J(e,t){return N.apply(this,arguments)}function N(){var e;return e=regeneratorRuntime.mark(function e(t,n){var o,i,a,s,c,u,l,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.renderer){e.next=3;break}throw new Error("PBR Map requires renderer to passed in the options for ".concat(t,"!"));case 3:if(!n.equirectangular){e.next=13;break}return e.next=6,I(t,{renderer:o});case 6:return i=e.sent,a=new r.Kb(1024,1024).fromEquirectangularTexture(o,i),(s=a.texture).renderTarget=a,i.dispose(),i.image.data=null,e.abrupt("return",Q(s,n));case 13:if(c=t,u=n.hdr,l=u?".hdr":".png",p="".concat(c.replace(/\/$/,""),"/"),d=l,f=["".concat(p,"px").concat(d),"".concat(p,"nx").concat(d),"".concat(p,"py").concat(d),"".concat(p,"ny").concat(d),"".concat(p,"pz").concat(d),"".concat(p,"nz").concat(d)],!u){e.next=19;break}return e.abrupt("return",new Promise(function(e,t){(new W.a).load(r.Eb,f,function(t){return e(Q(t,n))},null,function(){return t(new Error("Could not load PBR map: ".concat(c)))})}));case 19:return e.abrupt("return",new Promise(function(e,t){(new r.m).load(f,function(t){t.encoding=r.qb,e(Q(t,n))},null,function(){return t(new Error("Could not load PBR map: ".concat(c)))})}));case 20:case"end":return e.stop()}var p,d},e)}),(N=function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){K(i,r,o,a,s,"next",e)}function s(e){K(i,r,o,a,s,"throw",e)}a(void 0)})}).apply(this,arguments)}function Q(e,t){if(t.pbr||"number"==typeof t.level){var n=new X.a(e);if(n.update(t.renderer),t.pbr){var r=new $.a(n.cubeLods);r.update(t.renderer),e=r.CubeUVRenderTarget.texture,r.dispose()}else{var o=V()(Math.floor(t.level),0,n.cubeLods.length);e=n.cubeLods[o].texture}n.dispose()}return t.mapping&&(e.mapping=t.mapping),e}function Z(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ee(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function te(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){ee(i,r,o,a,s,"next",e)}function s(e){ee(i,r,o,a,s,"throw",e)}a(void 0)})}}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach(function(t){oe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function se(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var ce=0;function ue(e){return"__private_"+ce+++"_"+e}var le=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.defineProperty(this,fe,{writable:!0,value:[]}),Object.defineProperty(this,pe,{writable:!0,value:{}}),Object.defineProperty(this,de,{writable:!0,value:[]}),Object.defineProperty(this,he,{writable:!0,value:10}),Object.defineProperty(this,be,{writable:!0,value:[]}),this.get=function(e){if(!e)throw new TypeError("Must specify an URL for AssetManager.get()");if(!(e in se(t,pe)[pe]))throw new Error("The asset ".concat(e," is not in the loaded files."));return se(t,pe)[pe][e]}}var t,n,r,o,i,a;return t=e,(n=[{key:"addProgressListener",value:function(e){if("function"!=typeof e)throw new TypeError("onProgress must be a function");se(this,de)[de].push(e)}},{key:"queue",value:function(e){var t=e.url,n=e.type,r=ie(e,["url","type"]);if(!t)throw new TypeError("Must specify a URL or opt.url for AssetManager.queue()");return this._getQueued(t)||se(this,fe)[fe].push(re({url:t,type:n||this._extractType(t)},r)),t}},{key:"_getQueued",value:function(e){return se(this,fe)[fe].find(function(t){return t.url===e})}},{key:"_extractType",value:function(e){var t=e.slice(e.lastIndexOf("."));switch(!0){case/\.(gltf|glb)$/i.test(t):return"gltf";case/\.json$/i.test(t):return"json";case/\.svg$/i.test(t):return"svg";case/\.(jpe?g|png|gif|bmp|tga|tif)$/i.test(t):return"image";case/\.(wav|mp3)$/i.test(t):return"audio";case/\.(mp4|webm|ogg|ogv)$/i.test(t):return"video";default:throw new Error("Could not load ".concat(e,", unknown file extension!"))}}},{key:"loadSingle",value:(a=te(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.renderer,r=ie(t,["renderer"]),n){e.next=3;break}throw new Error("You must provide a renderer to the loadSingle function.");case 3:return e.prev=3,o=Date.now(),e.next=7,this._loadItem(re({renderer:n},r));case 7:return se(this,pe)[pe][r.url]=e.sent,window.DEBUG&&console.log("\ud83d\udce6 Loaded single asset %c".concat(r.url,"%c in ").concat(A()(Date.now()-o)),"color:blue","color:black"),e.abrupt("return",r.url);case 12:e.prev=12,e.t0=e.catch(3),delete se(this,pe)[pe][r.url],console.error("\ud83d\udce6  Could not load ".concat(r.url,":\n").concat(e.t0));case 16:case"end":return e.stop()}},e,this,[[3,12]])})),function(e){return a.apply(this,arguments)})},{key:"load",value:(i=te(regeneratorRuntime.mark(function e(t){var n,r,o,i,a,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.renderer){e.next=3;break}throw new Error("You must provide a renderer to the load function.");case 3:if(r=se(this,fe)[fe].slice(),se(this,fe)[fe].length=0,0!==(o=r.length)){e.next=9;break}return setTimeout(function(){return se(s,de)[de].forEach(function(e){return e(1)})},0),e.abrupt("return");case 9:return i=Date.now(),e.next=12,L()(r,function(){var e=te(regeneratorRuntime.mark(function e(t,r){var i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=Date.now(),e.next=4,s._loadItem(re({renderer:n},t));case 4:se(s,pe)[pe][t.url]=e.sent,window.DEBUG&&s.log("Loaded %c".concat(t.url,"%c in ").concat(A()(Date.now()-i)),"color:blue","color:black"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s.logError("Skipping ".concat(t.url," from asset loading:\n").concat(e.t0));case 11:a=(r+1)/o,se(s,de)[de].forEach(function(e){return e(a)});case 13:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}(),{concurrency:se(this,he)[he]});case 12:window.DEBUG&&(a=se(this,be)[be].filter(function(e){return"error"===e.type}),this.groupLog("\ud83d\udce6 Assets loaded in ".concat(A()(Date.now()-i)," \u23f1 ").concat(a.length>0?"%c \u26a0\ufe0f Skipped ".concat(a.length," asset").concat(a.length>1?"s":""," "):""),a.length>0?"color:white;background:red;":""));case 13:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)})},{key:"_loadItem",value:(o=te(regeneratorRuntime.mark(function e(t){var n,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.url,r=t.type,o=t.renderer,i=ie(t,["url","type","renderer"]),!(n in se(this,pe)[pe])){e.next=3;break}return e.abrupt("return",se(this,pe)[pe][n]);case 3:e.t0=r,e.next="gltf"===e.t0?6:"json"===e.t0?7:"env-map"===e.t0?8:"svg"===e.t0?9:"image"===e.t0?9:"texture"===e.t0?10:"audio"===e.t0?11:"video"===e.t0?12:13;break;case 6:return e.abrupt("return",new Promise(function(e,t){(new z.a).load(n,e,null,function(e){return t(new Error("Could not load GLTF asset ".concat(n,":\n").concat(e)))})}));case 7:return e.abrupt("return",fetch(n).then(function(e){return e.json()}));case 8:return e.abrupt("return",J(n,re({renderer:o},i)));case 9:return e.abrupt("return",Object(q.a)(n,{crossorigin:"anonymous"}));case 10:return e.abrupt("return",I(n,re({renderer:o},i)));case 11:return e.abrupt("return",fetch(n).then(function(e){return e.arrayBuffer()}));case 12:return e.abrupt("return",fetch(n).then(function(e){return e.blob()}));case 13:throw new Error("Could not load ".concat(n,", the type ").concat(r," is unknown!"));case 14:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];se(this,be)[be].push({type:"log",text:t})}},{key:"logError",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];se(this,be)[be].push({type:"error",text:t})}},{key:"groupLog",value:function(){var e;(e=console).groupCollapsed.apply(e,arguments),se(this,be)[be].forEach(function(e){var t;(t=console)[e.type].apply(t,Z(e.text))}),console.groupEnd(),se(this,be)[be].length=0}}])&&ae(t.prototype,n),r&&ae(t,r),e}(),fe=ue("queue"),pe=ue("cache"),de=ue("onProgressListeners"),he=ue("asyncConcurrency"),be=ue("logs"),we=new le,ge=we.queue({url:"assets/ouside-afternoon-blurred-hdr.jpg",type:"env-map",equirectangular:!0});n(56),n(57);function ye(e){return(ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function me(e,t){return!t||"object"!==ye(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Oe(e){return(Oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e,t){return(xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ke=function(e){function t(e,n){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=me(this,Oe(t).call(this,n))).webgl=e,o.options=n;var i=o.options,a=i.width,s=void 0===a?1:a,c=i.height,u=void 0===c?1:c,l=i.depth,f=void 0===l?1:l,p=i.widthSegments,d=void 0===p?1:p,h=i.heightSegments,b=void 0===h?1:h,w=i.depthSegments,g=void 0===w?1:w,y=i.color,v=void 0===y?16777215:y;return o.box=new r.T(new r.e(s,u,f,d,b,g),new r.U({color:v,wireframe:!0})),o.calibrationMarkers=new r.w,o.greenCircle=new r.T(new r.h(.01,20,0,2*Math.PI),new r.U({color:65280})),o.greenCircle.position.set(0,0,.25*f),o.redCircle=new r.T(new r.h(.02,20,0,2*Math.PI),new r.U({color:16711680})),o.redCircle.position.set(0,0,.5*-f),o.greenSquare=new r.T(new r.gb(.02,.02,1,1),new r.U({color:65280})),o.greenSquare.position.set(.5*-s,0,.25*f),o.redSquare=new r.T(new r.gb(.02,.02,1,1),new r.U({color:16711680})),o.redSquare.position.set(.5*-s,0,.5*-f),o.greenDiamond=new r.T(new r.gb(.02,.02,1,1),new r.U({color:65280})),o.greenDiamond.position.set(0,.5*u,.25*f),o.greenDiamond.rotation.set(0,0,.25*Math.PI),o.redDiamond=new r.T(new r.gb(.02,.02,1,1),new r.U({color:16711680})),o.redDiamond.position.set(0,.5*u,.5*-f),o.redDiamond.rotation.set(0,0,.25*Math.PI),o.calibrationMarkers.add(o.greenCircle),o.calibrationMarkers.add(o.redCircle),o.calibrationMarkers.add(o.greenSquare),o.calibrationMarkers.add(o.redSquare),o.calibrationMarkers.add(o.greenDiamond),o.calibrationMarkers.add(o.redDiamond),o.add(o.box),o.add(o.calibrationMarkers),o}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xe(e,t)}(t,r["w"]),n=t,(o=[{key:"update",value:function(e,t){this.calibrationMarkers.visible=this.webgl.controls.enableCalibrationMarkers}}])&&ve(n.prototype,o),i&&ve(n,i),t}();function je(e){return(je="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Se(e,t){return!t||"object"!==je(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ce(e){return(Ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var De=function(e){function t(e,n,r){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=Se(this,Ce(t).call(this,n))).webgl=e,o.options=n,o.faceTracker=r,function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(o.options),o.position.set(r.position.x,r.position.y,r.position.z),e.camera.position.set(o.position.x,o.position.y,o.position.z),o}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}(t,r["w"]),n=t,(o=[{key:"update",value:function(e,t){var n=window.innerHeight/window.innerWidth,o=new r.Gb(this.faceTracker.position.x,this.faceTracker.position.y,this.faceTracker.position.z);this.webgl.camera.position.set(o.x,o.y,o.z),this.position.set(o.x,o.y,o.z),this.webgl.camera.near=o.z+.001,this.webgl.camera.setViewOffset(1,n,-o.x,o.y,1,n),this.webgl.camera.fov=r.R.radToDeg(Math.atan(.5/o.z))}}])&&Pe(n.prototype,o),i&&Pe(n,i),t}(),Te=n(16);function Re(e){return(Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _e(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function Be(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){_e(i,r,o,a,s,"next",e)}function s(e){_e(i,r,o,a,s,"throw",e)}a(void 0)})}}function Me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Le(e,t){return!t||"object"!==Re(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ue(e){return(Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var qe=function(e){function t(e,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=Le(this,Ue(t).call(this,n))).webgl=e,r.options=n,r.debugElement=document.getElementById("face-tracker"),r.webcamVideo=document.getElementById("webcam-video"),r.webcamCanvas=document.getElementById("face-tracker-debug"),r.webcamVideo.setAttribute("width",r.webgl.canvas.clientWidth),r.webcamVideo.setAttribute("height",r.webgl.canvas.clientHeight),r.position.setZ(1),r}var n,o,i,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(t,r["w"]),n=t,(o=[{key:"setup",value:(s=Be(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:{}});case 2:return t=e.sent,this.webcamVideo.srcObject=t,e.next=6,Te.f("/models/tiny_face_detector");case 6:return e.next=8,Te.e("/models/face_landmark_68_tiny");case 8:this.detectorOptions=new Te.b,this.updateTracking();case 10:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)})},{key:"updateDebug",value:function(){var e=this.webgl.controls.debugFaceTracker;if(this.debugElement.style=e?"visibility: visible":"visibility: hidden",e){if(this.debugElement.style="visibility: visible",this.webcamCanvas.width=this.webcamVideo.width,this.webcamCanvas.height=this.webcamVideo.height,this.detection){var t=Te.g(this.detection,{width:this.webcamVideo.width,height:this.webcamVideo.height});Te.d.drawDetections(this.webcamCanvas,t),Te.d.drawFaceLandmarks(this.webcamCanvas,t);var n=this.extractDetectionData(t),r=this.webcamCanvas.getContext("2d");r.fillStyle="#00ff00",r.fillRect(n.eyeLeft.x,n.eyeLeft.y,5,5),r.fillRect(n.eyeRight.x,n.eyeRight.y,5,5),r.fillRect(n.eyeMiddle.x,n.eyeMiddle.y,10,10)}}else this.debugElement.style="visibility: hidden"}},{key:"runDetectionTask",value:function(){return Te.c(this.webcamVideo,this.detectorOptions).withFaceLandmarks(!0)}},{key:"avgLandmark",value:function(e){if(0==e.length)return new Te.a(0,0);var t=0,n=0;return e.forEach(function(e){t+=e.x,n+=e.y}),t/=e.length,n/=e.length,new Te.a(t,n)}},{key:"extractDetectionData",value:function(e){var t=this.avgLandmark(e.landmarks.getLeftEye()),n=this.avgLandmark(e.landmarks.getRightEye());return{eyeLeft:t,eyeRight:n,eyeMiddle:this.avgLandmark([t,n]),faceArea:e.detection.box.area}}},{key:"computeWorldPosition",value:function(){if(this.detection){localStorage.depthBias=this.webgl.controls.depthBias,localStorage.widthBias=this.webgl.controls.widthBias,localStorage.heightBias=this.webgl.controls.heightBias,localStorage.offsetXBias=this.webgl.controls.offsetXBias,localStorage.offsetYBias=this.webgl.controls.offsetYBias,this.rawDataHistory||(this.rawDataHistory=[]),this.rawDataHistory.push(this.extractDetectionData(this.detection)),this.rawDataHistory=this.rawDataHistory.slice(Math.max(this.rawDataHistory.length-5,0));var e=0,t=0,n=0;this.rawDataHistory.forEach(function(r){e+=r.faceArea,t+=r.eyeMiddle.x,n+=r.eyeMiddle.y}),e/=this.rawDataHistory.length,t/=this.rawDataHistory.length,n/=this.rawDataHistory.length,t=(-t+this.webgl.controls.offsetXBias)/this.webgl.controls.widthBias,n=(-n+this.webgl.controls.offsetYBias)/this.webgl.controls.heightBias,this.position.setZ(this.webgl.controls.depthBias/Math.sqrt(e)),this.position.setX(t),this.position.setY(n)}}},{key:"updateTracking",value:(a=Be(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.runDetectionTask();case 2:this.detection=e.sent,this.detection&&(this.computeWorldPosition(),this.updateDebug()),window.requestAnimationFrame(this.updateTracking.bind(this));case 5:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})}])&&Me(n.prototype,o),i&&Me(n,i),t}();window.DEBUG=window.location.search.includes("debug");var ze=new E({canvas:document.getElementById("app"),alpha:!0,background:"#000",backgroundAlpha:1,showFps:!0,postprocessing:!0,orbitControls:window.DEBUG&&{distance:5},controls:{Instructions:{instructions:i.a.Raw(function(e){return e("p",null,'\n        Hello! This is just a prototype of a face-tracking camera.\n        If this is the first time you are watching this demo,\n        please follow the instructions in order to calibrate the\n        face-tracking system. When you are finished you can close\n        this popup by clicking on "controls".\n      ')}),"Step 1 - Calibrate Face Offset":{instructions:i.a.Raw(function(e){return e("p",null,'\n          Enable the calibration markers.\n          Keep your face still in front of the green circle,\n          then adjust "OffsetX Bias" and "OffsetY Bias" until the\n          red circle completely disappears behind the green circle\n        ')})},"Step 2 - Calibrate webcam/viewport width":{instructions:i.a.Raw(function(e){return e("p",null,'\n          Keep your face still in front of the green square,\n          then adjust "Width Bias" until the red square completely\n          disappears behind the green square\n        ')})},"Step 3 - Calibrate webcam/viewport height":{instructions:i.a.Raw(function(e){return e("p",null,'\n          Keep your face still in front of the green triangle,\n          then adjust "Height Bias" until the red triangle completely\n          disappears behind the green triangle\n        ')})},"Step 4 - Calibrate webcam/viewport depth":{instructions:i.a.Raw(function(e){return e("p",null,'\n          Keep your face still in front of the green circle,\n          then adjust "Depth Bias" until you feel that the depth\n          of the box is equal to the width of your screen.\n          Disable the calibration markers.\n        ')})}},enableCalibrationMarkers:!1,offsetXBias:i.a.Slider(+localStorage.offsetXBias||0,{label:"OffsetX Bias",min:0,max:4096,step:.01}),offsetYBias:i.a.Slider(+localStorage.offsetYBias||0,{label:"OffsetY Bias",min:0,max:4096,step:.01}),widthBias:i.a.Slider(+localStorage.widthBias||4096,{label:"Width Bias",min:1,max:4096,step:.01}),heightBias:i.a.Slider(+localStorage.heightBias||4096,{label:"Height Bias",min:1,max:4096,step:.01}),depthBias:i.a.Slider(+localStorage.depthBias||1,{label:"Depth Bias",min:1,max:1e3,step:.01}),debugFaceTracker:i.a.Checkbox(!1,{label:"Debug Face Tracker"}),resetCalibration:function(){localStorage.clear(),window.location.reload()}}});window.DEBUG&&(window.webgl=ze),ze.canvas.style.visibility="hidden",we.load({renderer:ze.renderer}).then(function(){return ze.scene.faceTracker=new qe(ze,{}),ze.scene.faceTracker.setup()}).then(function(){ze.canvas.style.visibility="",ze.scene.add(ze.scene.faceTracker),ze.scene.offCenterCamera=new De(ze,{},ze.scene.faceTracker),ze.scene.add(ze.scene.offCenterCamera),ze.scene.box=new ke(ze,{width:1,height:ze.canvas.clientHeight/ze.canvas.clientWidth,depth:1,widthSegments:10,heightSegments:10,depthSegments:10,color:16777215}),ze.scene.box.position.z=-.5,ze.scene.add(ze.scene.box),ze.scene.background=we.get(ge).renderTarget,function(e){var t=new r.y(16777215,16777215,.6);t.color.setHSL(.6,1,.6),t.groundColor.setHSL(.095,1,.75),t.position.set(0,50,0),e.scene.add(t);var n=new r.q(16777215,1);n.color.setHSL(.1,1,.95),n.position.set(3,5,1),n.position.multiplyScalar(50),e.scene.add(n)}(ze);var e=new a.a({vertexShader:"#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",fragmentShader:"#define GLSLIFY 1\nfloat vignette(vec2 uv, float radius, float smoothness) {\n\tfloat diff = radius - distance(uv, vec2(0.5, 0.5));\n\treturn smoothstep(-smoothness, smoothness, diff);\n}\n\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 texColor = texture2D(tDiffuse, vUv);\n\n  float vignetteValue = vignette(vUv, 0.5, 0.5);\n  texColor.rgb *= vignetteValue;\n\n  gl_FragColor = texColor;\n}\n",uniforms:{tDiffuse:{type:"t",value:new r.zb}}});ze.composer.addPass(e),window.DEBUG&&function(e){var t=document.createElement("div");t.style.position="fixed",t.style.bottom=0,t.style.right=0,t.style.background="tomato",t.style.cursor="pointer",t.style.padding="8px 16px",t.style.color="white",t.style.fontSize="24px",t.textContent="Save screenshot",document.body.appendChild(t),t.addEventListener("click",e.saveScreenshot)}(ze),ze.start(),ze.draw()})}});
//# sourceMappingURL=app.9b722a42.js.map