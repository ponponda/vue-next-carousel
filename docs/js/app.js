/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./dev/serve.ts","chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/serve.ts":
/*!**********************!*\
  !*** ./dev/serve.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _serve_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serve.vue */ \"./dev/serve.vue\");\n/* harmony import */ var _entry_esm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entry.esm */ \"./src/entry.esm.ts\");\n\n\n\n\n\n\n\nvar app = Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"createApp\"])(_serve_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\napp.use(_entry_esm__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.mount(\"#app\");\n\n//# sourceURL=webpack:///./dev/serve.ts?");

/***/ }),

/***/ "./dev/serve.vue":
/*!***********************!*\
  !*** ./dev/serve.vue ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _serve_vue_vue_type_template_id_060a6712__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serve.vue?vue&type=template&id=060a6712 */ \"./dev/serve.vue?vue&type=template&id=060a6712\");\n/* harmony import */ var _serve_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serve.vue?vue&type=script&lang=ts */ \"./dev/serve.vue?vue&type=script&lang=ts\");\n/* empty/unused harmony star reexport */\n\n\n_serve_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _serve_vue_vue_type_template_id_060a6712__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_serve_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"dev/serve.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_serve_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./dev/serve.vue?");

/***/ }),

/***/ "./dev/serve.vue?vue&type=script&lang=ts":
/*!***********************************************!*\
  !*** ./dev/serve.vue?vue&type=script&lang=ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_13_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_serve_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/ts-loader??ref--13-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./serve.vue?vue&type=script&lang=ts */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./dev/serve.vue?vue&type=script&lang=ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_13_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_serve_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./dev/serve.vue?");

/***/ }),

/***/ "./dev/serve.vue?vue&type=template&id=060a6712":
/*!*****************************************************!*\
  !*** ./dev/serve.vue?vue&type=template&id=060a6712 ***!
  \*****************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_serve_vue_vue_type_template_id_060a6712__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./serve.vue?vue&type=template&id=060a6712 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./dev/serve.vue?vue&type=template&id=060a6712\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_serve_vue_vue_type_template_id_060a6712__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./dev/serve.vue?");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./dev/serve.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./dev/serve.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n // Uncomment import and local \"components\" registration if library is not registered globally.\n// import { VueCarousel } from '@/entry.esm';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  name: \"ServeDev\" // components: {\n  //  VueCarousel,\n  // }\n\n}));\n\n//# sourceURL=webpack:///./dev/serve.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./dev/serve.vue?vue&type=template&id=060a6712":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./dev/serve.vue?vue&type=template&id=060a6712 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _src_assets_demo01_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/demo01.jpg */ \"./src/assets/demo01.jpg\");\n/* harmony import */ var _src_assets_demo01_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_assets_demo01_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_assets_demo02_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/assets/demo02.jpg */ \"./src/assets/demo02.jpg\");\n/* harmony import */ var _src_assets_demo02_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_demo02_jpg__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _hoisted_1 = {\n  id: \"app\",\n  style: {\n    \"width\": \"800px\",\n    \"margin\": \"0 auto\"\n  }\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"img\", {\n  src: _src_assets_demo01_jpg__WEBPACK_IMPORTED_MODULE_1___default.a\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", null, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"img\", {\n  src: _src_assets_demo02_jpg__WEBPACK_IMPORTED_MODULE_2___default.a\n})], -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_v_carousel = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"v-carousel\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_v_carousel, null, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [_hoisted_2, _hoisted_3];\n    }),\n    _: 1\n    /* STABLE */\n\n  })]);\n}\n\n//# sourceURL=webpack:///./dev/serve.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/app.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/postcss-loader/src??ref--8-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./src/assets/app.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* img,\\n* video {\\n  max-width: 100%;\\n  height: auto; }\\n\\n.v-carousel {\\n  position: relative;\\n  overflow: hidden; }\\n  .v-carousel .v-carousel-pager {\\n    position: absolute;\\n    bottom: 1rem;\\n    width: 100%;\\n    text-align: center; }\\n    .v-carousel .v-carousel-pager button {\\n      position: relative;\\n      border: 0.25rem solid #9ca3af;\\n      border-radius: 9999px;\\n      margin-right: 0.5rem;\\n      height: 1.5rem;\\n      width: 2rem;\\n      cursor: pointer; }\\n      .v-carousel .v-carousel-pager button.v-carousel-current-page {\\n        width: 3rem; }\\n  .v-carousel .v-carousel-counter {\\n    position: absolute;\\n    bottom: 1rem;\\n    right: 0.25rem;\\n    padding: 0.25rem;\\n    font-size: 1rem;\\n    border-radius: 0.5rem;\\n    background-color: #e5e7eb; }\\n  .v-carousel .v-carousel-slides-wrapper {\\n    width: 100%;\\n    position: relative;\\n    display: flex;\\n    transition-property: transform; }\\n    .v-carousel .v-carousel-slides-wrapper .v-carousel-slide {\\n      opacity: 0.4; }\\n    .v-carousel .v-carousel-slides-wrapper .v-carousel-slide-active, .v-carousel .v-carousel-slides-wrapper .v-carousel-slide {\\n      flex-grow: 0;\\n      flex-shrink: 0;\\n      flex-basis: inherit; }\\n  @media screen and (max-width: 768px) {\\n    .v-carousel .v-carousel-pager {\\n      bottom: 0.5rem; }\\n      .v-carousel .v-carousel-pager button {\\n        height: 1rem;\\n        width: 1rem; }\\n        .v-carousel .v-carousel-pager button.v-carousel-current-page {\\n          width: 2rem; }\\n    .v-carousel .v-carousel-counter {\\n      bottom: 0.5rem;\\n      font-size: 0.5rem; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/app.scss?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/postcss-loader/src??ref--8-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3");

/***/ }),

/***/ "./src/assets/app.scss":
/*!*****************************!*\
  !*** ./src/assets/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!../../node_modules/postcss-loader/src??ref--8-oneOf-3-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./app.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/app.scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"0e173eaa\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/assets/app.scss?");

/***/ }),

/***/ "./src/assets/demo01.jpg":
/*!*******************************!*\
  !*** ./src/assets/demo01.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/demo01.44ff6480.jpg\";\n\n//# sourceURL=webpack:///./src/assets/demo01.jpg?");

/***/ }),

/***/ "./src/assets/demo02.jpg":
/*!*******************************!*\
  !*** ./src/assets/demo02.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/demo02.7cd7ed1d.jpg\";\n\n//# sourceURL=webpack:///./src/assets/demo02.jpg?");

/***/ }),

/***/ "./src/directives/swipe/index.ts":
/*!***************************************!*\
  !*** ./src/directives/swipe/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar startEvent,\n    moveEvent,\n    endEvent,\n    xStart = null,\n    yStart = null;\nvar startFn;\nvar moveFn;\nvar endFn;\n\nvar isTouch = function isTouch() {\n  return \"ontouchstart\" in window || \"DocumentTouch\" in window && document instanceof window.DocumentTouch;\n};\n\nvar isPointer = function isPointer() {\n  return !!window.PointerEvent && \"maxTouchPoints\" in window.navigator && window.navigator.maxTouchPoints >= 0;\n};\n\nvar getCoordinates = function getCoordinates(e) {\n  var x = 0,\n      y = 0;\n\n  if (isTouch()) {\n    var evt = e;\n    x = evt.changedTouches[0].pageX;\n    y = evt.changedTouches[0].pageY;\n  } else if (isPointer()) {\n    var _evt = e;\n    x = _evt.pageX;\n    y = _evt.pageY;\n  } else {\n    var _evt2 = e;\n    x = _evt2.pageX;\n    y = _evt2.pageY;\n  }\n\n  return {\n    x: x,\n    y: y\n  };\n};\n\nvar watchDistance = function watchDistance(x, y, options) {\n  if (!xStart || !yStart) return {\n    x: 0,\n    y: 0\n  };\n  var xEnd = x;\n  var yEnd = y;\n  var xDiff = xEnd - xStart;\n  var yDiff = yEnd - yStart;\n  var result = {\n    x: xEnd,\n    y: yEnd,\n    xDiff: xDiff,\n    yDiff: yDiff\n  };\n\n  if (Math.abs(xDiff) > Math.abs(yDiff)) {\n    if (xDiff > 0) {\n      var _options$onRight;\n\n      (_options$onRight = options.onRight) === null || _options$onRight === void 0 ? void 0 : _options$onRight.call(options, result);\n    } else {\n      var _options$onLeft;\n\n      (_options$onLeft = options.onLeft) === null || _options$onLeft === void 0 ? void 0 : _options$onLeft.call(options, result);\n    }\n  } else {\n    if (yDiff < 0) {\n      var _options$onUp;\n\n      (_options$onUp = options.onUp) === null || _options$onUp === void 0 ? void 0 : _options$onUp.call(options, result);\n    } else {\n      var _options$onDown;\n\n      (_options$onDown = options.onDown) === null || _options$onDown === void 0 ? void 0 : _options$onDown.call(options, result);\n    }\n  }\n};\n\nvar directive = {\n  beforeMount: function beforeMount(el, _ref) {\n    var value = _ref.value;\n\n    startFn = function startFn(e) {\n      var _value$onStart;\n\n      e.preventDefault();\n\n      var _getCoordinates = getCoordinates(e),\n          x = _getCoordinates.x,\n          y = _getCoordinates.y;\n\n      xStart = x;\n      yStart = y;\n      (_value$onStart = value.onStart) === null || _value$onStart === void 0 ? void 0 : _value$onStart.call(value, {\n        x: x,\n        y: y\n      });\n    };\n\n    moveFn = function moveFn(e) {\n      if (!value.watch) return;\n      if (!xStart || !yStart) return;\n\n      var _getCoordinates2 = getCoordinates(e),\n          x = _getCoordinates2.x,\n          y = _getCoordinates2.y;\n\n      watchDistance(x, y, value);\n    };\n\n    endFn = function endFn(e) {\n      var _value$onEnd;\n\n      if (!xStart || !yStart) return;\n\n      var _getCoordinates3 = getCoordinates(e),\n          x = _getCoordinates3.x,\n          y = _getCoordinates3.y;\n\n      if (!value.watch) {\n        watchDistance(x, y, value);\n      }\n\n      var xEnd = x;\n      var yEnd = y;\n      var xDiff = xEnd - xStart;\n      var yDiff = yEnd - yStart;\n      (_value$onEnd = value.onEnd) === null || _value$onEnd === void 0 ? void 0 : _value$onEnd.call(value, {\n        x: xEnd,\n        y: yEnd,\n        xDiff: xDiff,\n        yDiff: yDiff\n      });\n      xStart = null;\n      yStart = null;\n    };\n\n    if (isTouch()) {\n      startEvent = \"touchstart\";\n      moveEvent = \"touchmove\";\n      endEvent = \"touchend\";\n    } else if (isPointer()) {\n      startEvent = \"pointerdown\";\n      moveEvent = \"pointermove\";\n      endEvent = \"pointerup\";\n    } else {\n      startEvent = \"mousedown\";\n      moveEvent = \"mousemove\";\n      endEvent = \"mouseup\";\n    }\n\n    el.addEventListener(startEvent, startFn);\n    el.addEventListener(moveEvent, moveFn);\n    el.addEventListener(endEvent, endFn);\n  },\n  unmounted: function unmounted(el) {\n    el.removeEventListener(startEvent, startFn);\n    el.removeEventListener(moveEvent, moveFn);\n    el.removeEventListener(endEvent, endFn);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (directive);\n\n//# sourceURL=webpack:///./src/directives/swipe/index.ts?");

/***/ }),

/***/ "./src/entry.esm.ts":
/*!**************************!*\
  !*** ./src/entry.esm.ts ***!
  \**************************/
/*! exports provided: default, VCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ \"./node_modules/core-js/modules/es.object.entries.js\");\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib-components */ \"./src/lib-components/index.ts\");\n/* harmony import */ var _assets_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/app.scss */ \"./src/assets/app.scss\");\n/* harmony import */ var _assets_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_app_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VCarousel\", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__[\"VCarousel\"]; });\n\n\n\n\n// Import vue components\n\n // install function executed by Vue.use()\n\nvar install = function installVueNextCarousel(app) {\n  Object.entries(_lib_components__WEBPACK_IMPORTED_MODULE_3__).forEach(function (_ref) {\n    var _ref2 = Object(C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n        componentName = _ref2[0],\n        component = _ref2[1];\n\n    app.component(componentName, component);\n  });\n}; // Create module definition for Vue.use()\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (install); // To allow individual component use, export components\n// each can be registered via Vue.component()\n\n\n\n//# sourceURL=webpack:///./src/entry.esm.ts?");

/***/ }),

/***/ "./src/lib-components/Carousel.ts":
/*!****************************************!*\
  !*** ./src/lib-components/Carousel.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ \"./src/lib-components/types.ts\");\n/* harmony import */ var _utils_resize_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/resize-observer */ \"./src/utils/resize-observer.ts\");\n/* harmony import */ var _directives_swipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/swipe */ \"./src/directives/swipe/index.ts\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Slide */ \"./src/lib-components/Slide.ts\");\n/* harmony import */ var _Pager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pager */ \"./src/lib-components/Pager.ts\");\n/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Counter */ \"./src/lib-components/Counter.ts\");\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"defineComponent\"])({\n  name: \"VCarousel\",\n  props: {\n    autoplay: {\n      type: Boolean,\n      default: true\n    },\n    autoplayTimeout: {\n      type: Number,\n      default: 3000\n    },\n    loop: {\n      type: Boolean,\n      default: true\n    },\n    minSwipeDistance: {\n      type: Number,\n      default: 100\n    },\n    slideRemainRatio: {\n      type: Number,\n      default: 0.2,\n      validator: function validator(v) {\n        return v >= 0 && v < 1;\n      }\n    },\n    transitionDuration: {\n      type: Number,\n      default: 300\n    }\n  },\n  setup: function setup(props, _ref) {\n    var _slots$default;\n\n    var slots = _ref.slots;\n\n    var _ResizeObserver = new _utils_resize_observer__WEBPACK_IMPORTED_MODULE_6__[\"default\"](),\n        carouselRef = _ResizeObserver.element,\n        carouselRect = _ResizeObserver.contentRect;\n\n    var source = ((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots).filter(function (e) {\n      return e.type !== vue__WEBPACK_IMPORTED_MODULE_4__[\"Comment\"];\n    })) || [];\n    var sourceLength = source.length;\n    var loopSource = [].concat(source);\n    var config = props.loop && sourceLength > 1 ? Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"reactive\"])({\n      slideRemainRatio: props.slideRemainRatio,\n      startIdx: 1,\n      endIdx: sourceLength + 1,\n      touchMovement: 0,\n      selectedIdx: 1,\n      transitionDuration: props.transitionDuration\n    }) : Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"reactive\"])({\n      slideRemainRatio: props.slideRemainRatio,\n      startIdx: 0,\n      endIdx: sourceLength - 1,\n      touchMovement: 0,\n      selectedIdx: 0,\n      transitionDuration: props.transitionDuration\n    });\n    var autoplay;\n    var windowWidth = Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"computed\"])(function () {\n      var _carouselRect$value;\n\n      return ((_carouselRect$value = carouselRect.value) === null || _carouselRect$value === void 0 ? void 0 : _carouselRect$value.width) || 0;\n    });\n    var blankWidth = Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"computed\"])(function () {\n      return windowWidth.value * config.slideRemainRatio / 2;\n    });\n    var imgWidth = Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"computed\"])(function () {\n      return windowWidth.value * (1 - config.slideRemainRatio);\n    });\n    var slideTranslate = Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"computed\"])(function () {\n      return -1 * imgWidth.value * config.selectedIdx + blankWidth.value + config.touchMovement;\n    });\n    var carouselCtx = {\n      getSelectedIndex: function getSelectedIndex() {\n        if (props.loop) {\n          if (config.selectedIdx === 0) return sourceLength - 1;else if (config.selectedIdx === config.endIdx) return 0;\n        }\n\n        return config.selectedIdx - config.startIdx;\n      },\n      getSourceLength: function getSourceLength() {\n        return sourceLength;\n      },\n      getImgWidth: function getImgWidth() {\n        return imgWidth.value;\n      }\n    };\n    Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"provide\"])(_types__WEBPACK_IMPORTED_MODULE_5__[\"CarouselSymbol\"], carouselCtx);\n\n    var stopAutoplay = function stopAutoplay() {\n      if (autoplay) clearInterval(autoplay);\n    };\n\n    var slideTo = function slideTo(idx) {\n      config.transitionDuration = props.transitionDuration;\n\n      if (idx > config.endIdx) {\n        config.selectedIdx = config.startIdx;\n      } else if (idx < 0) {\n        config.selectedIdx = config.endIdx;\n      } else {\n        config.selectedIdx = idx;\n      }\n    };\n\n    var slideToNext = function slideToNext() {\n      slideTo(config.selectedIdx + 1);\n    };\n\n    var slideToPrev = function slideToPrev() {\n      slideTo(config.selectedIdx - 1);\n    };\n\n    if (props.loop && sourceLength > 1) {\n      loopSource.unshift(source[sourceLength - 1]);\n      loopSource.push(source[0]);\n    }\n\n    if (props.autoplay && sourceLength > 1) {\n      autoplay = setInterval(function () {\n        slideToNext();\n      }, props.autoplayTimeout);\n    }\n\n    Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"watch\"])(function () {\n      return config.selectedIdx;\n    }, function (current) {\n      setTimeout(function () {\n        config.transitionDuration = 0;\n\n        if (props.loop) {\n          if (current === config.endIdx) {\n            config.selectedIdx = config.startIdx;\n          } else if (current === 0) {\n            config.selectedIdx = config.endIdx - 1;\n          }\n        }\n      }, 200);\n    });\n    return function () {\n      return Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"h\"])(\"div\", {\n        class: \"v-carousel\",\n        ref: carouselRef\n      }, loopSource.length > 0 ? [Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"h\"])(\"div\", {\n        class: \"v-carousel-slides-wrapper\",\n        style: {\n          \"transition-duration\": config.transitionDuration + \"ms\",\n          transform: \"translate3d(\".concat(slideTranslate.value, \"px, 0, 0)\")\n        }\n      }, loopSource.map(function (e, idx) {\n        return Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"h\"])(_Slide__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          active: idx === config.selectedIdx\n        }, function () {\n          return e;\n        });\n      })), [[_directives_swipe__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        watch: true,\n        onStart: function onStart() {\n          config.transitionDuration = 0;\n          stopAutoplay();\n        },\n        onRight: function onRight(_ref2) {\n          var xDiff = _ref2.xDiff;\n          config.touchMovement = xDiff;\n        },\n        onLeft: function onLeft(_ref3) {\n          var xDiff = _ref3.xDiff;\n          config.touchMovement = xDiff;\n        },\n        onEnd: function onEnd(_ref4) {\n          var xDiff = _ref4.xDiff;\n          var pass = Math.abs(xDiff) > props.minSwipeDistance;\n          config.transitionDuration = props.transitionDuration;\n          config.touchMovement = 0;\n\n          if (pass) {\n            if (xDiff > 0) {\n              slideToPrev();\n            } else {\n              slideToNext();\n            }\n          }\n        }\n      }]]), Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"h\"])(_Pager__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        onClick: function onClick(v) {\n          slideTo(v + 1);\n          stopAutoplay();\n        }\n      }), Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"h\"])(_Counter__WEBPACK_IMPORTED_MODULE_10__[\"default\"])] : []);\n    };\n  }\n}));\n\n//# sourceURL=webpack:///./src/lib-components/Carousel.ts?");

/***/ }),

/***/ "./src/lib-components/Counter.ts":
/*!***************************************!*\
  !*** ./src/lib-components/Counter.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./src/lib-components/types.ts\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"defineComponent\"])({\n  name: \"VCarouselCounter\",\n  setup: function setup() {\n    var carouselCtx = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"inject\"])(_types__WEBPACK_IMPORTED_MODULE_2__[\"CarouselSymbol\"]);\n    return function () {\n      return carouselCtx !== null && carouselCtx !== void 0 && carouselCtx.getSourceLength() ? Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"div\", {\n        class: \"v-carousel-counter\"\n      }, \"\".concat(carouselCtx.getSelectedIndex() + 1, \"/\").concat(carouselCtx === null || carouselCtx === void 0 ? void 0 : carouselCtx.getSourceLength())) : null;\n    };\n  }\n}));\n\n//# sourceURL=webpack:///./src/lib-components/Counter.ts?");

/***/ }),

/***/ "./src/lib-components/Pager.ts":
/*!*************************************!*\
  !*** ./src/lib-components/Pager.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ \"./src/lib-components/types.ts\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"defineComponent\"])({\n  name: \"VCarouselPager\",\n  emits: [\"click\"],\n  setup: function setup(_, _ref) {\n    var emit = _ref.emit;\n    var carouselCtx = Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"inject\"])(_types__WEBPACK_IMPORTED_MODULE_5__[\"CarouselSymbol\"]);\n    return function () {\n      return carouselCtx !== null && carouselCtx !== void 0 && carouselCtx.getSourceLength() ? Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"h\"])(\"div\", {\n        class: \"v-carousel-pager\"\n      }, Object(C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(carouselCtx === null || carouselCtx === void 0 ? void 0 : carouselCtx.getSourceLength()).keys()).map(function (idx) {\n        return Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"h\"])(\"button\", {\n          class: {\n            \"v-carousel-current-page\": (carouselCtx === null || carouselCtx === void 0 ? void 0 : carouselCtx.getSelectedIndex()) === idx\n          },\n          onClick: function onClick() {\n            return emit(\"click\", idx);\n          }\n        });\n      })) : null;\n    };\n  }\n}));\n\n//# sourceURL=webpack:///./src/lib-components/Pager.ts?");

/***/ }),

/***/ "./src/lib-components/Slide.ts":
/*!*************************************!*\
  !*** ./src/lib-components/Slide.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/lib-components/types.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  name: \"VCarouselSlide\",\n  props: {\n    active: Boolean\n  },\n  setup: function setup(props, _ref) {\n    var slots = _ref.slots;\n    var carouselCtx = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"inject\"])(_types__WEBPACK_IMPORTED_MODULE_1__[\"CarouselSymbol\"]);\n    return function () {\n      var _slots$default;\n\n      return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", {\n        class: props.active ? \"v-carousel-slide-active\" : \"v-carousel-slide\",\n        style: {\n          flex: \"0 0 \".concat(carouselCtx.getImgWidth() + \"px\")\n        }\n      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));\n    };\n  }\n}));\n\n//# sourceURL=webpack:///./src/lib-components/Slide.ts?");

/***/ }),

/***/ "./src/lib-components/index.ts":
/*!*************************************!*\
  !*** ./src/lib-components/index.ts ***!
  \*************************************/
/*! exports provided: VCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel */ \"./src/lib-components/Carousel.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VCarousel\", function() { return _Carousel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/lib-components/index.ts?");

/***/ }),

/***/ "./src/lib-components/types.ts":
/*!*************************************!*\
  !*** ./src/lib-components/types.ts ***!
  \*************************************/
/*! exports provided: CarouselSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CarouselSymbol\", function() { return CarouselSymbol; });\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar CarouselSymbol = Symbol(\"VCarousel\");\n\n//# sourceURL=webpack:///./src/lib-components/types.ts?");

/***/ }),

/***/ "./src/utils/resize-observer.ts":
/*!**************************************!*\
  !*** ./src/utils/resize-observer.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! resize-observer-polyfill */ \"./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\n\n\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    var _this = this;\n\n    Object(C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, _default);\n\n    Object(C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_element\", Object(vue__WEBPACK_IMPORTED_MODULE_5__[\"ref\"])(null));\n\n    Object(C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_observer\", Object(vue__WEBPACK_IMPORTED_MODULE_5__[\"ref\"])(null));\n\n    Object(C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_contentRect\", Object(vue__WEBPACK_IMPORTED_MODULE_5__[\"ref\"])(null));\n\n    var el = Object(vue__WEBPACK_IMPORTED_MODULE_5__[\"computed\"])(function () {\n      return _this._element.value;\n    });\n    Object(vue__WEBPACK_IMPORTED_MODULE_5__[\"watch\"])(el, function () {\n      if (_this._observer.value) _this._observer.value.disconnect();\n      if (!_this._element.value) return;\n      _this._observer.value = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__[\"default\"](function (entries) {\n        entries.forEach(function (entry) {\n          _this._contentRect.value = entry.contentRect;\n        });\n      });\n\n      _this._observer.value.observe(_this._element.value);\n    });\n  }\n\n  Object(C_Users_Burke_Documents_GitHub_vue_next_carousel_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_default, [{\n    key: \"element\",\n    get: function get() {\n      return this._element;\n    }\n  }, {\n    key: \"contentRect\",\n    get: function get() {\n      return this._contentRect;\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack:///./src/utils/resize-observer.ts?");

/***/ })

/******/ });