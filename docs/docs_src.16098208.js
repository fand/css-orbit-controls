parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"URZS":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Vec3=void 0;var i=function(){function t(n,i,r){e(this,t),this.x=n,this.y=i,this.z=r}return n(t,[{key:"set",value:function(e,t,n){this.x=e,this.y=t,this.z=n}},{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)}},{key:"sub",value:function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)}},{key:"mul",value:function(e){return new t(this.x*e.x,this.y*e.y,this.z*e.z)}},{key:"div",value:function(e){return new t(this.x/e.x,this.y/e.y,this.z/e.z)}},{key:"scale",value:function(e){return new t(this.x*e,this.y*e,this.z*e)}}],[{key:"one",value:function(e){return new t(e,e,e)}}]),t}();exports.Vec3=i;
},{}],"WvIY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.OrbitControls=void 0;var t=require("./Vec3");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}var i=function(){function n(o){var i=this;e(this,n),this.element=o,this.rotation=t.Vec3.one(0),this.scale=1,this.translate=t.Vec3.one(0),this.isDragging=!1,this.dragStartPos=t.Vec3.one(0),this.rotationOffset=t.Vec3.one(0),this.translateOffset=t.Vec3.one(0),this.button=0,this.onPointerDown=function(t){i.element.contains(t.target)&&(t.preventDefault(),i.isDragging=!0,i.dragStartPos.x=t.clientX,i.dragStartPos.y=t.clientY,i.button=t.button)},this.onPointerMove=function(t){if(i.isDragging){t.preventDefault();var e=t.clientX,n=t.clientY;0===i.button?(i.rotation.x=-(n-i.dragStartPos.y),i.rotation.y=e-i.dragStartPos.x):2===i.button&&(i.translate.x=e-i.dragStartPos.x,i.translate.y=n-i.dragStartPos.y),i.update()}},this.onPointerUp=function(e){i.isDragging&&(e.preventDefault(),i.isDragging=!1,i.rotationOffset=i.rotation.add(i.rotationOffset),i.rotation=t.Vec3.one(0),i.translateOffset=i.translate)},this.onWheel=function(t){t.preventDefault(),i.scale-=t.deltaY/100,i.update()},this.onContextMenu=function(t){t.preventDefault()}}return o(n,[{key:"start",value:function(){this.element.style.transformOrigin="50% 50%",window.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),this.element.addEventListener("wheel",this.onWheel),this.element.addEventListener("contextmenu",this.onContextMenu)}},{key:"stop",value:function(){window.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this.element.removeEventListener("wheel",this.onWheel),this.element.removeEventListener("contextmenu",this.onContextMenu)}},{key:"update",value:function(){var t=this.scale;this.element.style.transform="\n            scale3d(".concat(t,", ").concat(t,", ").concat(t,")\n            rotateX(").concat(this.rotation.x+this.rotationOffset.x,"deg)\n            rotateY(").concat(this.rotation.y+this.rotationOffset.y,"deg)\n            translate3d(\n                ").concat(this.translate.x+this.translateOffset.x,"px,\n                ").concat(this.translate.y+this.translateOffset.y,"px,\n                0\n            )\n        ")}}]),n}();exports.OrbitControls=i;
},{"./Vec3":"URZS"}],"fUdq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"OrbitControls",{enumerable:!0,get:function(){return e.OrbitControls}});var e=require("./OrbitControls");
},{"./OrbitControls":"WvIY"}],"QCba":[function(require,module,exports) {
"use strict";var e=require("../src"),r=document.querySelector("#element"),t=new e.OrbitControls(r);t.start(),window.onbeforeunload=function(){t.stop()};
},{"../src":"fUdq"}]},{},["QCba"], null)
//# sourceMappingURL=/docs_src.16098208.js.map