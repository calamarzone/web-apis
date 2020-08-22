/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cz-touch-events/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cz-touch-events/index.js":
/*!**************************************!*\
  !*** ./src/cz-touch-events/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ \"./src/cz-touch-events/template.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/cz-touch-events/style.css\");\n\n\n\nclass CalamarzoneURL extends HTMLElement {\n  /**\n   * Constructor\n   */\n  constructor() {\n    super();\n    this.shadowNode = this.attachShadow({mode: 'open'});\n    this.appendStyle(this.shadowNode);\n    this.appendTemplate(this.shadowNode);\n  }\n\n  /**\n   * Lifecycle method\n   */\n  connectedCallback() {\n    this.getElements();\n    this.addListeners();\n  }\n\n  /**\n   * Get elements method\n   */\n  getElements() {\n    this.statusElement = this.shadowRoot.getElementById('touch-event-status');\n    this.mainElement = this.shadowRoot.getElementById('touch-event-area');\n  }\n\n  /**\n   * Add event listener to main element\n   */\n  addListeners() {\n    // touchstart event\n    this.mainElement.addEventListener('touchstart', () => {\n      this.statusElement.textContent = 'Touch start event';\n    }, false);\n\n    // touchmove event\n    this.mainElement.addEventListener('touchmove', () => {\n      this.statusElement.textContent = 'Touch move event';\n    }, false);\n\n    // touchend event\n    this.mainElement.addEventListener('touchend', () => {\n      this.statusElement.textContent = 'Touch end event';\n\n      // reset status text\n      setTimeout(() => {\n        this.statusElement.textContent = `nothing yet, use under \n      mobile 📱 and touch the area below to see the effects 👇`;\n      }, 1000);\n    }, false);\n  }\n\n  /**\n   * Append style to the shadow root\n   *\n   * @param {Object} shadowNode\n   */\n  appendStyle(shadowNode) {\n    const style = document.createElement('style');\n    style.innerText = _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    shadowNode.appendChild(style);\n  }\n\n  /**\n   * Append html template to the shadow root\n   *\n   * @param {Object} shadowNode\n   */\n  appendTemplate(shadowNode) {\n    const templateElement = document.createElement('template');\n    templateElement.innerHTML = _template_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    shadowNode.appendChild(templateElement.content.cloneNode(true));\n  }\n}\n\ncustomElements.define('cz-touch-events', CalamarzoneURL);\n\n\n//# sourceURL=webpack:///./src/cz-touch-events/index.js?");

/***/ }),

/***/ "./src/cz-touch-events/style.css":
/*!***************************************!*\
  !*** ./src/cz-touch-events/style.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"header {\\n  color: white;\\n  background: #2B3243;\\n  padding: 5px 20px;\\n}\\n\\nmain {\\n  height: 75vh;\\n  margin: 1rem 0;\\n  background: #2B3243;\\n}\\n\");\n\n//# sourceURL=webpack:///./src/cz-touch-events/style.css?");

/***/ }),

/***/ "./src/cz-touch-events/template.html":
/*!*******************************************!*\
  !*** ./src/cz-touch-events/template.html ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<section id=\\\"touch-events\\\">\\n  <header>\\n    <p>⚡Status: <span id=\\\"touch-event-status\\\">nothing yet, use under mobile 📱 and touch the area below to see the effects 👇</span></p>\\n  </header>\\n  <main id=\\\"touch-event-area\\\"></main>\\n</section>\\n\");\n\n//# sourceURL=webpack:///./src/cz-touch-events/template.html?");

/***/ })

/******/ });