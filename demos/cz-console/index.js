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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/cz-console/style.css\");\n\n\n/**\n * CalamarzoneConsole class\n */\nclass CalamarzoneConsole extends HTMLElement {\n  /**\n   * Constructor\n   */\n  constructor() {\n    super();\n    const shadowRoot = this.attachShadow({mode: 'open'}),\n          style = document.createElement('style');\n    style.innerText = _style_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    shadowRoot.appendChild(style);\n    // console.log(style);\n    this.createAssert(shadowRoot);\n    this.createClear(shadowRoot);\n    this.createCount(shadowRoot);\n    this.createCountreset(shadowRoot);\n    this.createDebug(shadowRoot);\n    this.createDir(shadowRoot);\n    this.createDirXML(shadowRoot);\n    this.createError(shadowRoot);\n    this.createGroup(shadowRoot);\n    this.createGroupCollapsed(shadowRoot);\n    this.createInfo(shadowRoot);\n    this.createLog(shadowRoot);\n    this.createProfile(shadowRoot);\n    this.createTable(shadowRoot);\n    this.createTime(shadowRoot);\n    this.createTimeLog(shadowRoot);\n    this.createTimeStamp(shadowRoot);\n    this.createTrace(shadowRoot);\n    this.createWarn(shadowRoot);\n    // this.createClear(shadow);\n    // this.createCount(shadow);\n  }\n\n  /**\n   * Create Assert example\n   * @param {ShadowRoot} shadow\n   */\n  createAssert(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'assert';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      const random = Math.random() * 10,\n            limit = 5;\n      console.assert(random > limit, {\n        errorMsg: `Number ${random} is not greater than ${limit}`\n      });\n    };\n\n    shadow.appendChild(button);\n  }\n\n  /**\n   * Create Clear example\n   * @param {ShadowRoot} shadow\n   */\n  createClear(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'clear';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.clear();\n    };\n\n    shadow.appendChild(button);\n  }\n\n  /**\n   * Create Count example\n   * @param {ShadowRoot} shadow\n   */\n  createCount(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'count';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.count();\n    };\n\n    shadow.appendChild(button);\n  }\n\n  /**\n   *  Create Countreset example\n   * @param {shadowroot} shadow\n   */\n  createCountreset(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'countReset';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.countReset();\n    };\n    shadow.appendChild(button);\n  }\n\n  /**\n   * Create Debug example\n   * @param {shadowroot} shadow\n   */\n  createDebug(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'Debug';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.debug('Debugging');\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   * Create Dir example\n   * @param {shadowroot} shadow\n   */\n  createDir(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'Dir';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.dir(button);\n      console.log(typeof button);\n      console.log(button);\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   * create DirXML example\n   * @param {shadowroot} shadow\n   */\n  createDirXML(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'DirXML';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      const fancyThings = {\n        car: '🏎️ Ferrari',\n        watch: '⌚ Cartier',\n        clothing: {\n          shoes: '👠 Christian Louboutin',\n          dress: '👗 Versace'\n        },\n        boat: '🛥️ Sunseeker'\n      };\n      console.dirxml(fancyThings);\n      console.dirxml(button);\n      console.log(typeof button);\n      console.log(button);\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   *  Create Error example\n   * @param {shadowroot} shadow\n   */\n  createError(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'Error';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.error('This is an error message!');\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   * create Group example\n   * @param {shadowroot} shadow\n   */\n  createGroup(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'Group';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.group('Level 2');\n      console.log('Level 2');\n      console.group('Level 3');\n      console.log('Level 3');\n      console.log('More of level 3');\n      console.groupEnd();\n      console.log('Back to level 2');\n      console.groupEnd();\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   *create GroupCollapsed example\n   * @param {shadowroot} shadow\n   */\n  createGroupCollapsed(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'GroupCollapsed';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.groupCollapsed('Level 2');\n      console.log('Level 2');\n      console.log('You had to displayed it right?');\n      console.group('Level 3');\n      console.log('Level 3');\n      console.log('More of level 3');\n      console.log('You had to displayed it right?');\n      console.groupEnd();\n      console.log('Back to level 2');\n      console.groupEnd();\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   *  create Info example\n   * @param {shadowroot} shadow\n   */\n  createInfo(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'Info';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.info('This is an info message');\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   *  create Log example\n   * @param {shadowroot} shadow\n   */\n  createLog(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'Log';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.log(document.body);\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   *  create Profile example\n   * @param {shadowroot} shadow\n   */\n  createProfile(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'Profile';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.profile('myProfile');\n      let time = 1;\n      const interval = setInterval(function() {\n        if (time <= 3) {\n          alert(time);\n          time++;\n        } else {\n          clearInterval(interval);\n          console.profileEnd();\n          alert('Go to the JavaScript Profiler to see the results');\n        }\n      }, 4000);\n    };\n    shadow.appendChild(button);\n  }\n\n  /**\n   *  create Table example\n   * @param {shadowroot} shadow\n   */\n  createTable(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'Table';\n    button.setAttribute('class', 'my-class');\n    /**\n     *Person\n     * @param {*} firstName\n     * @param {*} lastName\n     */\n    function Person(firstName, lastName) {\n      this.firstName = firstName;\n      this.lastName = lastName;\n    }\n    button.onclick = () => {\n      const devs = {};\n      devs.dev1 = new Person('Irving', 'Medina');\n      devs.dev2 = new Person('Rodrigo', 'Benavides');\n      console.table(devs);\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   *  create Time example\n   * @param {shadowroot} shadow\n   */\n  createTime(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'Time';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.time('mytime');\n      let time = 1;\n      const interval = setInterval(function() {\n        if (time <= 5) {\n          console.log(time);\n          time++;\n        } else {\n          clearInterval(interval);\n          console.timeEnd('mytime');\n          console.log('Time is 5');\n        }\n      }, 4000);\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   *  create TimeLog example\n   * @param {shadowroot} shadow\n   */\n  createTimeLog(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'TimeLog';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.timeLog('mytime');\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   *  create TimeStamp example\n   * @param {shadowroot} shadow\n   */\n  createTimeStamp(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'TimeStamp';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.timeStamp('Jimmy');\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   *  create Trace example\n   * @param {shadowroot} shadow\n   */\n  createTrace(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'Trace';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      /**\n       *function1\n       */\n      function function1() {\n        /**\n         *function2\n         */\n        function function2() {\n          console.trace();\n        }\n        function2();\n      }\n      function1();\n    };\n    shadow.appendChild(button);\n  }\n  /**\n   *  create Warn example\n   * @param {shadowroot} shadow\n   */\n  createWarn(shadow) {\n    const button = document.createElement('button');\n    button.textContent = 'Warn';\n    button.setAttribute('class', 'my-class');\n    button.onclick = () => {\n      console.warn('This is an warning message');\n    };\n    shadow.appendChild(button);\n  }\n}\n\ncustomElements.define('cz-console', CalamarzoneConsole);\n\n//# sourceURL=webpack:///./src/cz-console/index.js?");

/***/ }),

/***/ "./src/cz-console/style.css":
/*!**********************************!*\
  !*** ./src/cz-console/style.css ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\".my-class {\\n  background-color: red;\\n}\");\n\n//# sourceURL=webpack:///./src/cz-console/style.css?");

/***/ })

/******/ });