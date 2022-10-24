/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var g_debounce_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! g-debounce-throttle */ \"./node_modules/g-debounce-throttle/index.js\");\n/* harmony import */ var g_debounce_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(g_debounce_throttle__WEBPACK_IMPORTED_MODULE_0__);\nconst utils = __webpack_require__(/*! ./utils */ \"./utils/index.js\");\n\nfunction test(params) {\n  \n console.log(params) \n}\ntest(utils.name)\nconsole.log({debounce: g_debounce_throttle__WEBPACK_IMPORTED_MODULE_0__.debounce})\n\n\n//# sourceURL=webpack://webpack-example/./index.js?");

/***/ }),

/***/ "./node_modules/g-debounce-throttle/index.js":
/*!***************************************************!*\
  !*** ./node_modules/g-debounce-throttle/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("//节流\r\n/**\r\n * throttle 是节流函数\r\n * @param {Array} func 执行函数\r\n * @param {Number} wait 节流时长  \r\n * @returns no\r\n * @example throttle(()=>{console.log(1)},5000) \r\n */\r\nconst throttle = (func, wait) => {\r\n    let lastTime = null;\r\n    // 为了避免每次调用lastTime都被清空，利用js的闭包返回一个function;\r\n    return function (...args) {\r\n        let now = new Date();\r\n        // 如果上次执行的时间和这次触发的时间大于一个执行周期，则执行\r\n        if (now - lastTime - wait > 0) {\r\n            func.apply(this, args);\r\n            lastTime = now;\r\n        }\r\n    }\r\n}\r\n//防抖\r\n/**\r\n * debounce 是防抖函数\r\n * @param {Array} func 执行函数\r\n * @param {Number} wait 防抖时长 \r\n * @returns no\r\n * @example debounce(()=>{console.log(1)},1000) \r\n */\r\nconst debounce = (func, wait) => {\r\n    let t = null;\r\n    return function (...args) {\r\n        clearTimeout(t);\r\n        t = clearTimeout(() => {\r\n            func.apply(this, args)\r\n        }, wait)\r\n    }\r\n}\r\nmodule.exports = {\r\n    throttle,\r\n    debounce\r\n}\n\n//# sourceURL=webpack://webpack-example/./node_modules/g-debounce-throttle/index.js?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ ((module) => {

eval("module.exports = {\n  name:'kaka',\n  id:222\n}\n\n//# sourceURL=webpack://webpack-example/./utils/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;