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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cz-url/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cz-url/index.js":
/*!*****************************!*\
  !*** ./src/cz-url/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/cz-url/style.css\");\n/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ \"./src/cz-url/template.html\");\n\n\n\nconst urlProperties = [\n  'hash',\n  'host',\n  'hostname',\n  'origin',\n  'password',\n  'pathname',\n  'port',\n  'protocol',\n  'search',\n  'username'\n];\n\nclass CalamarzoneURL extends HTMLElement {\n  /**\n   * Constructor\n   */\n  constructor() {\n    super();\n    this.shadowNode = this.attachShadow({mode: 'open'});\n    this.appendStyle(this.shadowNode);\n    this.appendTemplate(this.shadowNode);\n  }\n\n\n  /**\n   * Lifecycle method\n   */\n  connectedCallback() {\n    this.url = this.originalURL;\n    this.form = this.shadowRoot.getElementById('url-form');\n    this.form.elements.url.value = this.url.href;\n    this.populateData(this.form, this.url);\n    this.addListeners();\n  }\n\n  /**\n   * Add event listeners to input, button, and textarea in the URL form\n   */\n  addListeners() {\n    this.form.elements.url.addEventListener('input', () => {\n      this.url = new URL(this.form.elements.url.value);\n      this.populateData(this.form, this.url);\n    }, false);\n\n    urlProperties.forEach((property) => {\n      this.form.elements[property]\n        .addEventListener('input', this.fieldEventHandler(property), false);\n    });\n\n    this.form.elements.reset.addEventListener('click', () => {\n      this.url = this.originalURL;\n      this.form.elements.url.value = this.url.href;\n      this.populateData(this.form, this.url);\n    });\n  }\n\n  /**\n   * Event handler creator for each field\n   *\n   * @param {string} fieldName\n   * @return {Function}\n   */\n  fieldEventHandler(fieldName) {\n    const handler = () => {\n      this.url[fieldName] = this.form.elements[fieldName].value;\n      this.form.elements.url.value = this.url.href;\n      this.populateData(this.form, this.url, fieldName);\n    };\n    return handler;\n  }\n\n  /**\n   * Populate data into the URL form fields\n   *\n   * @param {Object} form\n   * @param {Object} url\n   * @param {string} skipProperty\n   */\n  populateData(form, url, skipProperty) {\n    urlProperties.forEach((property) => {\n      if (property !== skipProperty) {\n        form.elements[property].value = url[property];\n      }\n    });\n  }\n\n  /**\n   * Append style to the shadow root\n   *\n   * @param {Object} shadowNode\n   */\n  appendStyle(shadowNode) {\n    const style = document.createElement('style');\n    style.innerText = _style_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    shadowNode.appendChild(style);\n  }\n\n  /**\n   * Append html template to the shadow root\n   *\n   * @param {Object} shadowNode\n   */\n  appendTemplate(shadowNode) {\n    const templateElement = document.createElement('template');\n    templateElement.innerHTML = _template_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    shadowNode.appendChild(templateElement.content.cloneNode(true));\n  }\n\n  /**\n   * Retrieve the URL from the web component attribute url or takes location\n   *\n   * @return {string}\n   */\n  get originalURL() {\n    const urlString = this.getAttribute('url') || window.location.href;\n    return new URL(urlString);\n  }\n}\n\ncustomElements.define('cz-url', CalamarzoneURL);\n\n//# sourceURL=webpack:///./src/cz-url/index.js?");

/***/ }),

/***/ "./src/cz-url/style.css":
/*!******************************!*\
  !*** ./src/cz-url/style.css ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\".url-form {\\n  width: calc(100% - 30px);\\n  margin: 0 auto;\\n}\\n\\n.url-form__field {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 12px 0;\\n}\\n\\n.url-form__field__label {\\n  font-weight: 700;\\n  margin-bottom: 4px;\\n}\\n\\n.url-form__field__label,\\n.url-form__field__textarea,\\n.url-form__field__input {\\n  flex: 1;\\n}\\n\\n.url-form__field__textarea {\\n  resize: none;\\n}\\n\\n.url-form__reset {\\n  float: right;\\n}\");\n\n//# sourceURL=webpack:///./src/cz-url/style.css?");

/***/ }),

/***/ "./src/cz-url/template.html":
/*!**********************************!*\
  !*** ./src/cz-url/template.html ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<form id=\\\"url-form\\\" class=\\\"url-form\\\">\\n  <div class=\\\"url-form__field\\\">\\n    <label class=\\\"url-form__field__label\\\" for=\\\"url\\\">URL</label>\\n    <textarea class=\\\"url-form__field__textarea\\\" type=\\\"text\\\" rows=\\\"5\\\" name=\\\"url\\\"></textarea>\\n  </div>\\n  <div class=\\\"url-form__field\\\">\\n    <label class=\\\"url-form__field__label\\\" for=\\\"hash\\\">hash</label>\\n    <input class=\\\"url-form__field__input\\\" type=\\\"text\\\" name=\\\"hash\\\">\\n  </div>\\n  <div class=\\\"url-form__field\\\">\\n    <label class=\\\"url-form__field__label\\\" for=\\\"host\\\">host</label>\\n    <input class=\\\"url-form__field__input\\\" type=\\\"text\\\" name=\\\"host\\\">\\n  </div>\\n  <div class=\\\"url-form__field\\\">\\n    <label class=\\\"url-form__field__label\\\" for=\\\"hostname\\\">hostname</label>\\n    <input class=\\\"url-form__field__input\\\" type=\\\"text\\\" name=\\\"hostname\\\">\\n  </div>\\n  <div class=\\\"url-form__field\\\">\\n    <label class=\\\"url-form__field__label\\\" for=\\\"origin\\\">origin (readonly)</label>\\n    <input class=\\\"url-form__field__input\\\" type=\\\"text\\\" name=\\\"origin\\\" readonly>\\n  </div>\\n  <div class=\\\"url-form__field\\\">\\n    <label class=\\\"url-form__field__label\\\" for=\\\"password\\\">password</label>\\n    <input class=\\\"url-form__field__input\\\" type=\\\"text\\\" name=\\\"password\\\">\\n  </div>\\n  <div class=\\\"url-form__field\\\">\\n    <label class=\\\"url-form__field__label\\\" for=\\\"pathname\\\">pathname</label>\\n    <input class=\\\"url-form__field__input\\\" type=\\\"text\\\" name=\\\"pathname\\\">\\n  </div>\\n  <div class=\\\"url-form__field\\\">\\n    <label class=\\\"url-form__field__label\\\" for=\\\"port\\\">port</label>\\n    <input class=\\\"url-form__field__input\\\" type=\\\"text\\\" name=\\\"port\\\">\\n  </div>\\n  <div class=\\\"url-form__field\\\">\\n    <label class=\\\"url-form__field__label\\\" for=\\\"protocol\\\">protocol</label>\\n    <input class=\\\"url-form__field__input\\\" type=\\\"text\\\" name=\\\"protocol\\\">\\n  </div>\\n  <div class=\\\"url-form__field\\\">\\n    <label class=\\\"url-form__field__label\\\" for=\\\"search\\\">search</label>\\n    <input class=\\\"url-form__field__input\\\" type=\\\"text\\\" name=\\\"search\\\">\\n  </div>\\n  <div class=\\\"url-form__field\\\">\\n    <label class=\\\"url-form__field__label\\\" for=\\\"username\\\">username</label>\\n    <input class=\\\"url-form__field__input\\\" type=\\\"text\\\" name=\\\"username\\\">\\n  </div>\\n  <button class=\\\"url-form__reset\\\" name=\\\"reset\\\" type=\\\"button\\\">Reset</button>\\n</form>\\n\");\n\n//# sourceURL=webpack:///./src/cz-url/template.html?");

/***/ })

/******/ });