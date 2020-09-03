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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cz-web-storage/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cz-web-storage/index.js":
/*!*************************************!*\
  !*** ./src/cz-web-storage/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/cz-web-storage/style.css\");\n/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ \"./src/cz-web-storage/template.html\");\n\n\n\nclass CalamarzoneWebStorage extends HTMLElement {\n  /**\n   * Constructor\n   */\n  constructor() {\n    super();\n    this.shadowNode = this.attachShadow({mode: 'open'});\n    this.appendStyle(this.shadowNode);\n    this.appendTemplate(this.shadowNode);\n  }\n\n  /**\n   * Lifecycle method\n   */\n  connectedCallback() {\n    this.getElements();\n    this.addListeners();\n  }\n\n  /**\n   * Get elements method\n   */\n  getElements() {\n    this.form = this.shadowRoot.getElementById('storage-form');\n    this.local = this.shadowRoot.getElementById('local-data');\n    this.session = this.shadowRoot.getElementById('session-data');\n  }\n\n  /**\n   * Add event listeners to input, button, and textarea in the URL form\n   */\n  addListeners() {\n    this.form.elements.save.addEventListener('click', () => {\n      localStorage.name = this.form.elements.name.value;\n      localStorage.password = this.form.elements.password.value;\n      sessionStorage.name = this.form.elements.name.value;\n      sessionStorage.password = this.form.elements.password.value;\n    });\n\n    this.form.elements.display.addEventListener('click', () => {\n      if ((localStorage.name != undefined) &&\n       (localStorage.password != undefined)) {\n        this.local.textContent = 'Nombre: ' +\n          localStorage.name + ' Password: ' + localStorage.password;\n        this.session.textContent = 'Nombre: ' +\n          sessionStorage.name + ' Password: ' + sessionStorage.password;\n      } else {\n        this.local.textContent =\n          'No has introducido tu nombre y tu password';\n        this.session.textContent =\n          'No has introducido tu nombre y tu password';\n      }\n    });\n  }\n\n  /**\n   * Append style to the shadow root\n   *\n   * @param {Object} shadowNode\n   */\n  appendStyle(shadowNode) {\n    const style = document.createElement('style');\n    style.innerText = _style_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    shadowNode.appendChild(style);\n  }\n\n  /**\n   * Append html template to the shadow root\n   *\n   * @param {Object} shadowNode\n   */\n  appendTemplate(shadowNode) {\n    const templateElement = document.createElement('template');\n    templateElement.innerHTML = _template_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    shadowNode.appendChild(templateElement.content.cloneNode(true));\n  }\n}\n\ncustomElements.define('cz-web-storage', CalamarzoneWebStorage);\n\n\n//# sourceURL=webpack:///./src/cz-web-storage/index.js?");

/***/ }),

/***/ "./src/cz-web-storage/style.css":
/*!**************************************!*\
  !*** ./src/cz-web-storage/style.css ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\".storage-form {\\n  width: calc(50% - 30px);\\n  margin: 0 auto;\\n}\\n\\n.storage-form__field {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 12px 0;\\n}\\n\\n.storage-form__field__label {\\n  font-weight: 700;\\n  margin-bottom: 4px;\\n}\\n\\n.storage-form__field__label,\\n.storage-form__field__textarea,\\n.storage-form__field__input {\\n  flex: 1;\\n}\\n\\n.storage-form__field__textarea {\\n  resize: none;\\n}\\n\\n.storage-form__reset {\\n  float: right;\\n}\");\n\n//# sourceURL=webpack:///./src/cz-web-storage/style.css?");

/***/ }),

/***/ "./src/cz-web-storage/template.html":
/*!******************************************!*\
  !*** ./src/cz-web-storage/template.html ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<form id=\\\"storage-form\\\" class=\\\"storage-form\\\">\\n  <div class=\\\"storage-form__field\\\">\\n    <label class=\\\"storage-form__field__label\\\" for=\\\"name\\\">Name</label>\\n    <input class=\\\"storage-form__field__input\\\" type=\\\"text\\\" name=\\\"name\\\" id=\\\"name\\\">\\n  </div>\\n  <div class=\\\"storage-form__field\\\">\\n    <label class=\\\"storage-form__field__label\\\" for=\\\"password\\\">Password</label>\\n    <input class=\\\"storage-form__field__input\\\" type=\\\"text\\\" name=\\\"password\\\" id=\\\"password\\\">\\n  </div>\\n  <button class=\\\"storage-form__reset\\\" name=\\\"save\\\" type=\\\"button\\\">Save</button>\\n  <p><strong>Data: </strong><span id=\\\"local-data\\\">nothing yet, click display data to dislay your info stored.</span></p>\\n  <p><strong>This data will be lost when page is closed: </strong><span id=\\\"session-data\\\">nothing yet, click display data to dislay your info stored.</span></p>\\n  <button button class=\\\"storage-form__display\\\"  name=\\\"display\\\" type=\\\"button\\\">Display Data</button>\\n</form>\\n\");\n\n//# sourceURL=webpack:///./src/cz-web-storage/template.html?");

/***/ })

/******/ });