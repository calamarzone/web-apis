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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cz-console/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cz-console/index.js":
/*!*********************************!*\
  !*** ./src/cz-console/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/cz-console/style.css\");\n/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ \"./src/cz-console/template.html\");\n\n\n\n\nclass CalamarzoneConsole extends HTMLElement {\n  /**\n   * Constructor\n   */\n  constructor() {\n    super();\n    this.shadowNode = this.attachShadow({mode: 'open'});\n    this.appendStyle(this.shadowNode);\n    this.appendTemplate(this.shadowNode);\n  }\n\n  /**\n   * Append style to the shadow root\n   *\n   * @param {Object} shadowNode\n   */\n  appendStyle(shadowNode) {\n    const style = document.createElement('style');\n    style.innerText = _style_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    shadowNode.appendChild(style);\n  }\n\n  /**\n   * Append html template to the shadow root\n   *\n   * @param {Object} shadowNode\n   */\n  appendTemplate(shadowNode) {\n    const templateElement = document.createElement('template');\n    templateElement.innerHTML = _template_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    shadowNode.appendChild(templateElement.content.cloneNode(true));\n  }\n\n  /**\n   * Lifecycle method\n   */\n  connectedCallback() {\n    this.form = this.shadowNode.getElementById('console-form');\n    this.addListeners();\n  }\n\n  /**\n   * Add event listeners to buttons\n   */\n  addListeners() {\n    this.form.elements.assert.onclick = this.consoleAssert;\n    this.form.elements.count.onclick = this.consoleCount;\n    this.form.elements.countReset.onclick = this.consoleCountreset;\n    this.form.elements.debug.onclick = this.consoleDebug;\n    this.form.elements.dir.onclick = this.consoleDir;\n    this.form.elements.dirxml.onclick = this.consoleDirXML;\n    this.form.elements.errorLog.onclick = this.consoleError;\n    this.form.elements.group.onclick = this.consoleGroup;\n    this.form.elements.groupCollapsed.onclick = this.consoleGroupCollapsed;\n    this.form.elements.info.onclick = this.consoleInfo;\n    this.form.elements.log.onclick = this.consoleLog;\n    this.form.elements.profile.onclick = this.consoleProfile;\n    this.form.elements.table.onclick = this.consoleTable;\n    this.form.elements.time.onclick = this.consoleTime;\n    this.form.elements.timelog.onclick = this.consoleTimeLog;\n    this.form.elements.timeStamp.onclick = this.consoleTimeStamp;\n    this.form.elements.trace.onclick = this.consoleTrace;\n    this.form.elements.warn.onclick = this.consoleWarn;\n    this.form.elements.clear.onclick = this.consoleClear;\n  }\n\n  /**\n   * Assert example\n   * @param {ShadowRoot} shadow\n   */\n  consoleAssert() {\n    const random = Math.random() * 10,\n          limit = 5;\n    console.assert(random > limit, {\n      errorMsg: `Number ${random} is not greater than ${limit}`\n    });\n  }\n\n  /**\n   * Console Clear example\n   */\n  consoleClear() {\n    console.clear();\n  }\n\n  /**\n   * Console Count example\n   */\n  consoleCount() {\n    console.count();\n  }\n\n  /**\n   * Console Countreset example\n   */\n  consoleCountreset() {\n    console.countReset();\n  }\n\n  /**\n   * Console Debug example\n   */\n  consoleDebug() {\n    console.debug('Debugging');\n  }\n\n  /**\n   * Console Dir example\n   */\n  consoleDir() {\n    console.dir(this);\n    console.log(typeof this);\n    console.log(this);\n  }\n\n  /**\n   * Console DirXML example\n   */\n  consoleDirXML() {\n    const fancyThings = {\n      car: '🏎️ Ferrari',\n      watch: '⌚ Cartier',\n      clothing: {\n        shoes: '👠 Christian Louboutin',\n        dress: '👗 Versace'\n      },\n      boat: '🛥️ Sunseeker'\n    };\n    console.dirxml(fancyThings);\n    console.dirxml(this);\n    console.log(typeof this);\n    console.log(this);\n  }\n\n  /**\n   * Console Error example\n   */\n  consoleError() {\n    console.error('This is an error message!');\n  }\n\n  /**\n   * Console Group example\n   */\n  consoleGroup() {\n    console.group('Level 2');\n    console.log('Level 2');\n    console.group('Level 3');\n    console.log('Level 3');\n    console.log('More of level 3');\n    console.groupEnd();\n    console.log('Back to level 2');\n    console.groupEnd();\n  }\n\n  /**\n   * Console GroupCollapsed example\n   */\n  consoleGroupCollapsed() {\n    console.groupCollapsed('Level 2');\n    console.log('Level 2');\n    console.log('You had to displayed it right?');\n    console.group('Level 3');\n    console.log('Level 3');\n    console.log('More of level 3');\n    console.log('You had to displayed it right?');\n    console.groupEnd();\n    console.log('Back to level 2');\n    console.groupEnd();\n  }\n\n  /**\n   * Console Info example\n   */\n  consoleInfo() {\n    console.info('This is an info message');\n  }\n\n  /**\n   * Console Log example\n   */\n  consoleLog() {\n    console.log(document.body);\n  }\n\n  /**\n   * Console Profile example\n   */\n  consoleProfile() {\n    console.profile('myProfile');\n    let time = 1;\n    const interval = setInterval(function() {\n      if (time <= 3) {\n        alert(time);\n        time++;\n      } else {\n        clearInterval(interval);\n        console.profileEnd();\n        alert('Go to the JavaScript Profiler to see the results');\n      }\n    }, 4000);\n  }\n\n  /**\n   * Console Table example\n   */\n  consoleTable() {\n    function Person(firstName, lastName) {\n      this.firstName = firstName;\n      this.lastName = lastName;\n    }\n    const devs = {};\n    devs.dev1 = new Person('Irving', 'Medina');\n    devs.dev2 = new Person('Rodrigo', 'Benavides');\n    console.table(devs);\n  }\n\n  /**\n   * Console Time example\n   */\n  consoleTime() {\n    console.time('mytime');\n    let time = 1;\n    const interval = setInterval(function() {\n      if (time <= 5) {\n        console.log(time);\n        time++;\n      } else {\n        clearInterval(interval);\n        console.timeEnd('mytime');\n        console.log('Time is 5');\n      }\n    }, 4000);\n  }\n\n  /**\n   * Console TimeLog example\n   */\n  consoleTimeLog() {\n    console.timeLog('mytime');\n  }\n\n  /**\n   * Console TimeStamp example\n   */\n  consoleTimeStamp() {\n    console.timeStamp('Jimmy');\n  }\n\n  /**\n   * Console Trace example\n   */\n  consoleTrace() {\n    function function1() {\n      function function2() {\n        console.trace();\n      }\n      function2();\n    }\n    function1();\n  }\n\n  /**\n   * Console Warn example\n   */\n  consoleWarn() {\n    console.warn('This is an warning message');\n  }\n}\n\ncustomElements.define('cz-console', CalamarzoneConsole);\n\n//# sourceURL=webpack:///./src/cz-console/index.js?");

/***/ }),

/***/ "./src/cz-console/style.css":
/*!**********************************!*\
  !*** ./src/cz-console/style.css ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\".console-form {\\n  width: calc(100% - 30px);\\n  margin: 0 auto;\\n}\\n\\n.console-form__btn {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 4px 0;\\n  flex: 1;\\n  width: 100%;\\n  align-items: center;\\n}\\n\\n.console-form__btn:hover {\\n  cursor: pointer;\\n}\");\n\n//# sourceURL=webpack:///./src/cz-console/style.css?");

/***/ }),

/***/ "./src/cz-console/template.html":
/*!**************************************!*\
  !*** ./src/cz-console/template.html ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<form id=\\\"console-form\\\" class=\\\"console-form\\\">\\n  <button class=\\\"console-form__btn\\\" name=\\\"assert\\\" type=\\\"button\\\">Assert</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"count\\\" type=\\\"button\\\">Count</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"countReset\\\" type=\\\"button\\\">Count Reset</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"debug\\\" type=\\\"button\\\">Debug</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"dir\\\" type=\\\"button\\\">Dir</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"dirxml\\\" type=\\\"button\\\">Dir XML</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"errorLog\\\" type=\\\"button\\\">Error</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"group\\\" type=\\\"button\\\">Group</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"groupCollapsed\\\" type=\\\"button\\\">Group Collapsed</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"info\\\" type=\\\"button\\\">Info</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"log\\\" type=\\\"button\\\">Log</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"profile\\\" type=\\\"button\\\">Profile</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"table\\\" type=\\\"button\\\">Table</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"time\\\" type=\\\"button\\\">Time</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"timelog\\\" type=\\\"button\\\">Timelog</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"timeStamp\\\" type=\\\"button\\\">Timestamp</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"trace\\\" type=\\\"button\\\">Trace</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"warn\\\" type=\\\"button\\\">Warn</button>\\n  <button class=\\\"console-form__btn\\\" name=\\\"clear\\\" type=\\\"button\\\">Clear</button>\\n</form>\");\n\n//# sourceURL=webpack:///./src/cz-console/template.html?");

/***/ })

/******/ });