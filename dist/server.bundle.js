/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module) => {

eval("function a(ctx) {\n  ctx.body = {\n    message: 'hello function from a'\n  };\n}\n\nmodule.exports = {\n  a\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9hcGkvYS5qcz9jMTk4Il0sIm5hbWVzIjpbImEiLCJjdHgiLCJib2R5IiwibWVzc2FnZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLENBQVQsQ0FBV0MsR0FBWCxFQUFnQjtBQUNaQSxFQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVztBQUNQQyxJQUFBQSxPQUFPLEVBQUU7QUFERixHQUFYO0FBR0g7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiTCxFQUFBQTtBQURhLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYShjdHgpIHtcbiAgICBjdHguYm9keSA9IHtcbiAgICAgICAgbWVzc2FnZTogJ2hlbGxvIGZ1bmN0aW9uIGZyb20gYSdcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFcbn0iXSwiZmlsZSI6Ii4vc3JjL2FwaS9hLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module) => {

eval("function b(ctx) {\n  ctx.body = {\n    message: 'hello function from b'\n  };\n}\n\nmodule.exports = {\n  b\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9hcGkvYi5qcz9kZWZkIl0sIm5hbWVzIjpbImIiLCJjdHgiLCJib2R5IiwibWVzc2FnZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLENBQVQsQ0FBV0MsR0FBWCxFQUFnQjtBQUNaQSxFQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVztBQUNQQyxJQUFBQSxPQUFPLEVBQUU7QUFERixHQUFYO0FBR0g7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiTCxFQUFBQTtBQURhLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYihjdHgpIHtcbiAgICBjdHguYm9keSA9IHtcbiAgICAgICAgbWVzc2FnZTogJ2hlbGxvIGZ1bmN0aW9uIGZyb20gYidcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGJcbn0iXSwiZmlsZSI6Ii4vc3JjL2FwaS9iLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var __dirname = \"src\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes_routes__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n // 合并路由\n\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())();\napp.use(helmat());\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_3___default()(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, '../public')));\napp.use(_routes_routes__WEBPACK_IMPORTED_MODULE_4___default()());\napp.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImFwcCIsImtvYSIsInVzZSIsImhlbG1hdCIsInN0YXRpY3MiLCJwYXRoIiwiX19kaXJuYW1lIiwicm91dGVyIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUNxQzs7QUFFckMsTUFBTUEsR0FBRyxHQUFHLElBQUlDLDRDQUFKLEVBQVo7QUFFQUQsR0FBRyxDQUFDRSxHQUFKLENBQVFDLE1BQU0sRUFBZDtBQUNBSCxHQUFHLENBQUNFLEdBQUosQ0FBUUUsaURBQU8sQ0FBQ0MsZ0RBQUEsQ0FBVUMsU0FBVixFQUFxQixXQUFyQixDQUFELENBQWY7QUFDQU4sR0FBRyxDQUFDRSxHQUFKLENBQVFLLHFEQUFNLEVBQWQ7QUFFQVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsSUFBWCIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrb2EgZnJvbSAna29hJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGhlbG1ldCBmcm9tICdrb2EtaGVsbWV0JztcbmltcG9ydCBzdGF0aWNzIGZyb20gJ2tvYS1zdGF0aWMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcy9yb3V0ZXMnIC8vIOWQiOW5tui3r+eUsVxuXG5jb25zdCBhcHAgPSBuZXcga29hKCk7XG5cbmFwcC51c2UoaGVsbWF0KCkpO1xuYXBwLnVzZShzdGF0aWNzKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMnKSkpO1xuYXBwLnVzZShyb3V0ZXIoKSk7XG5cbmFwcC5saXN0ZW4oMzAwMCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/aRouter.js":
/*!*******************************!*\
  !*** ./src/routes/aRouter.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst {\n  a\n} = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nconst router = new Router();\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9yb3V0ZXMvYVJvdXRlci5qcz85MmJjIl0sIm5hbWVzIjpbIlJvdXRlciIsInJlcXVpcmUiLCJhIiwicm91dGVyIiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQXRCOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFRRCxtQkFBTyxDQUFDLGdDQUFELENBQXJCOztBQUVBLE1BQU1FLE1BQU0sR0FBRyxJQUFJSCxNQUFKLEVBQWY7QUFFQUcsTUFBTSxDQUFDQyxHQUFQLENBQVcsSUFBWCxFQUFpQkYsQ0FBakI7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxNQUFqQiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvYVJvdXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2tvYS1yb3V0ZXInKTtcbmNvbnN0IHsgYSB9ID0gcmVxdWlyZSgnLi4vYXBpL2EnKTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvYScsIGEpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/aRouter.js\n");

/***/ }),

/***/ "./src/routes/bRouter.js":
/*!*******************************!*\
  !*** ./src/routes/bRouter.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst {\n  b\n} = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\n\nconst router = new Router();\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9yb3V0ZXMvYlJvdXRlci5qcz8yZmU3Il0sIm5hbWVzIjpbIlJvdXRlciIsInJlcXVpcmUiLCJiIiwicm91dGVyIiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQXRCOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFRRCxtQkFBTyxDQUFDLGdDQUFELENBQXJCOztBQUVBLE1BQU1FLE1BQU0sR0FBRyxJQUFJSCxNQUFKLEVBQWY7QUFFQUcsTUFBTSxDQUFDQyxHQUFQLENBQVcsSUFBWCxFQUFpQkYsQ0FBakI7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxNQUFqQiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvYlJvdXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2tvYS1yb3V0ZXInKTtcbmNvbnN0IHsgYiB9ID0gcmVxdWlyZSgnLi4vYXBpL2InKTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvYicsIGIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/bRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const combineRoutes = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n\nconst aroutes = __webpack_require__(/*! ./aRouter */ \"./src/routes/aRouter.js\");\n\nconst broutes = __webpack_require__(/*! ./bRouter */ \"./src/routes/bRouter.js\");\n\nmodule.exports = combineRoutes(aroutes, broutes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9yb3V0ZXMvcm91dGVzLmpzPzY0MWIiXSwibmFtZXMiOlsiY29tYmluZVJvdXRlcyIsInJlcXVpcmUiLCJhcm91dGVzIiwiYnJvdXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGFBQWEsR0FBR0MsbUJBQU8sQ0FBQyxnREFBRCxDQUE3Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsMENBQUQsQ0FBdkI7O0FBQ0EsTUFBTUUsT0FBTyxHQUFHRixtQkFBTyxDQUFDLDBDQUFELENBQXZCOztBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLGFBQWEsQ0FBQ0UsT0FBRCxFQUFVQyxPQUFWLENBQTlCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9yb3V0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb21iaW5lUm91dGVzID0gcmVxdWlyZSgna29hLWNvbWJpbmUtcm91dGVycycpO1xuXG5jb25zdCBhcm91dGVzID0gcmVxdWlyZSgnLi9hUm91dGVyJyk7XG5jb25zdCBicm91dGVzID0gcmVxdWlyZSgnLi9iUm91dGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29tYmluZVJvdXRlcyhhcm91dGVzLCBicm91dGVzKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("koa");;

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("koa-combine-routers");;

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("koa-helmet");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;