!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("ejkSG");function a(e,n){var t=Math.random()>.3;return new Promise((function(o,i){return t?o({position:e,newDelay:n}):i({position:e,newDelay:n})}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=n.currentTarget,o=+t.delay.value,i=+t.step.value,u=+t.amount.value,c=1;c<=u;c+=1){var l=o;o+=i;a(c,l).then((function(n){var t=n.position,o=n.newDelay;setTimeout((function(){e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))}),o)})).catch((function(n){var t=n.position,o=n.newDelay;setTimeout((function(){e(r).Notify.warning("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}),o)}))}}))}();
//# sourceMappingURL=03-promises.c66a4405.js.map