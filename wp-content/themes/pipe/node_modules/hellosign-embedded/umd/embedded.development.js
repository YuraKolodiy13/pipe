(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HelloSign"] = factory();
	else
		root["HelloSign"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/common-tags/es/TemplateTag/TemplateTag.js":
/*!****************************************************************!*\
  !*** ./node_modules/common-tags/es/TemplateTag/TemplateTag.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * @class TemplateTag
 * @classdesc Consumes a pipeline of composable transformer plugins and produces a template tag.
 */


var TemplateTag = function () {
  /**
   * constructs a template tag
   * @constructs TemplateTag
   * @param  {...Object} [...transformers] - an array or arguments list of transformers
   * @return {Function}                    - a template tag
   */
  function TemplateTag() {
    var _this = this;

    for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
      transformers[_key] = arguments[_key];
    }

    _classCallCheck(this, TemplateTag);

    this.tag = function (strings) {
      for (var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        expressions[_key2 - 1] = arguments[_key2];
      }

      if (typeof strings === 'function') {
        // if the first argument passed is a function, assume it is a template tag and return
        // an intermediary tag that processes the template using the aforementioned tag, passing the
        // result to our tag
        return _this.interimTag.bind(_this, strings);
      }

      if (typeof strings === 'string') {
        // if the first argument passed is a string, just transform it
        return _this.transformEndResult(strings);
      } // else, return a transformed end result of processing the template with our tag


      strings = strings.map(_this.transformString.bind(_this));
      return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
    }; // if first argument is an array, extrude it as a list of transformers


    if (transformers.length > 0 && Array.isArray(transformers[0])) {
      transformers = transformers[0];
    } // if any transformers are functions, this means they are not initiated - automatically initiate them


    this.transformers = transformers.map(function (transformer) {
      return typeof transformer === 'function' ? transformer() : transformer;
    }); // return an ES2015 template tag

    return this.tag;
  }
  /**
   * Applies all transformers to a template literal tagged with this method.
   * If a function is passed as the first argument, assumes the function is a template tag
   * and applies it to the template, returning a template tag.
   * @param  {(Function|String|Array<String>)} strings        - Either a template tag or an array containing template strings separated by identifier
   * @param  {...*}                            ...expressions - Optional list of substitution values.
   * @return {(String|Function)}                              - Either an intermediary tag function or the results of processing the template.
   */


  _createClass(TemplateTag, [{
    key: 'interimTag',

    /**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */
    value: function interimTag(previousTag, template) {
      for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        substitutions[_key3 - 2] = arguments[_key3];
      }

      return this.tag(_templateObject, previousTag.apply(undefined, [template].concat(substitutions)));
    }
    /**
     * Performs bulk processing on the tagged template, transforming each substitution and then
     * concatenating the resulting values into a string.
     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
     * @param  {String}   resultSoFar   - this iteration's result string so far
     * @param  {String}   remainingPart - the template chunk after the current substitution
     * @return {String}                 - the result of joining this iteration's processed substitution with the result
     */

  }, {
    key: 'processSubstitutions',
    value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
      var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
      return ''.concat(resultSoFar, substitution, remainingPart);
    }
    /**
     * Iterate through each transformer, applying the transformer's `onString` method to the template
     * strings before all substitutions are processed.
     * @param {String}  str - The input string
     * @return {String}     - The final results of processing each transformer
     */

  }, {
    key: 'transformString',
    value: function transformString(str) {
      var cb = function cb(res, transform) {
        return transform.onString ? transform.onString(res) : res;
      };

      return this.transformers.reduce(cb, str);
    }
    /**
     * When a substitution is encountered, iterates through each transformer and applies the transformer's
     * `onSubstitution` method to the substitution.
     * @param  {*}      substitution - The current substitution
     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
     * @return {*}                   - The final result of applying all substitution transformations.
     */

  }, {
    key: 'transformSubstitution',
    value: function transformSubstitution(substitution, resultSoFar) {
      var cb = function cb(res, transform) {
        return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
      };

      return this.transformers.reduce(cb, substitution);
    }
    /**
     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
     * template literal after all substitutions have finished processing.
     * @param  {String} endResult - The processed template, just before it is returned from the tag
     * @return {String}           - The final results of processing each transformer
     */

  }, {
    key: 'transformEndResult',
    value: function transformEndResult(endResult) {
      var cb = function cb(res, transform) {
        return transform.onEndResult ? transform.onEndResult(res) : res;
      };

      return this.transformers.reduce(cb, endResult);
    }
  }]);

  return TemplateTag;
}();

var _default = TemplateTag;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/TemplateTag/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/common-tags/es/TemplateTag/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _TemplateTag.default;
  }
});

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ./TemplateTag */ "./node_modules/common-tags/es/TemplateTag/TemplateTag.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/codeBlock/index.js":
/*!********************************************************!*\
  !*** ./node_modules/common-tags/es/codeBlock/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _html.default;
  }
});

var _html = _interopRequireDefault(__webpack_require__(/*! ../html */ "./node_modules/common-tags/es/html/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/commaLists/commaLists.js":
/*!**************************************************************!*\
  !*** ./node_modules/common-tags/es/commaLists/commaLists.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commaLists = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ','
}), _stripIndentTransformer.default, _trimResultTransformer.default);
var _default = commaLists;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/commaLists/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/common-tags/es/commaLists/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _commaLists.default;
  }
});

var _commaLists = _interopRequireDefault(__webpack_require__(/*! ./commaLists */ "./node_modules/common-tags/es/commaLists/commaLists.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js":
/*!********************************************************************!*\
  !*** ./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commaListsAnd = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ',',
  conjunction: 'and'
}), _stripIndentTransformer.default, _trimResultTransformer.default);
var _default = commaListsAnd;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsAnd/index.js":
/*!************************************************************!*\
  !*** ./node_modules/common-tags/es/commaListsAnd/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _commaListsAnd.default;
  }
});

var _commaListsAnd = _interopRequireDefault(__webpack_require__(/*! ./commaListsAnd */ "./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsOr/commaListsOr.js":
/*!******************************************************************!*\
  !*** ./node_modules/common-tags/es/commaListsOr/commaListsOr.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commaListsOr = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ',',
  conjunction: 'or'
}), _stripIndentTransformer.default, _trimResultTransformer.default);
var _default = commaListsOr;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsOr/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/common-tags/es/commaListsOr/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _commaListsOr.default;
  }
});

var _commaListsOr = _interopRequireDefault(__webpack_require__(/*! ./commaListsOr */ "./node_modules/common-tags/es/commaListsOr/commaListsOr.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/html/html.js":
/*!**************************************************!*\
  !*** ./node_modules/common-tags/es/html/html.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

var _splitStringTransformer = _interopRequireDefault(__webpack_require__(/*! ../splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/index.js"));

var _removeNonPrintingValuesTransformer = _interopRequireDefault(__webpack_require__(/*! ../removeNonPrintingValuesTransformer */ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = new _TemplateTag.default((0, _splitStringTransformer.default)('\n'), _removeNonPrintingValuesTransformer.default, _inlineArrayTransformer.default, _stripIndentTransformer.default, _trimResultTransformer.default);
var _default = html;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/html/index.js":
/*!***************************************************!*\
  !*** ./node_modules/common-tags/es/html/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _html.default;
  }
});

var _html = _interopRequireDefault(__webpack_require__(/*! ./html */ "./node_modules/common-tags/es/html/html.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/common-tags/es/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TemplateTag", {
  enumerable: true,
  get: function get() {
    return _TemplateTag2.default;
  }
});
Object.defineProperty(exports, "trimResultTransformer", {
  enumerable: true,
  get: function get() {
    return _trimResultTransformer2.default;
  }
});
Object.defineProperty(exports, "stripIndentTransformer", {
  enumerable: true,
  get: function get() {
    return _stripIndentTransformer2.default;
  }
});
Object.defineProperty(exports, "replaceResultTransformer", {
  enumerable: true,
  get: function get() {
    return _replaceResultTransformer2.default;
  }
});
Object.defineProperty(exports, "replaceSubstitutionTransformer", {
  enumerable: true,
  get: function get() {
    return _replaceSubstitutionTransformer2.default;
  }
});
Object.defineProperty(exports, "replaceStringTransformer", {
  enumerable: true,
  get: function get() {
    return _replaceStringTransformer2.default;
  }
});
Object.defineProperty(exports, "inlineArrayTransformer", {
  enumerable: true,
  get: function get() {
    return _inlineArrayTransformer2.default;
  }
});
Object.defineProperty(exports, "splitStringTransformer", {
  enumerable: true,
  get: function get() {
    return _splitStringTransformer2.default;
  }
});
Object.defineProperty(exports, "removeNonPrintingValuesTransformer", {
  enumerable: true,
  get: function get() {
    return _removeNonPrintingValuesTransformer2.default;
  }
});
Object.defineProperty(exports, "commaLists", {
  enumerable: true,
  get: function get() {
    return _commaLists2.default;
  }
});
Object.defineProperty(exports, "commaListsAnd", {
  enumerable: true,
  get: function get() {
    return _commaListsAnd2.default;
  }
});
Object.defineProperty(exports, "commaListsOr", {
  enumerable: true,
  get: function get() {
    return _commaListsOr2.default;
  }
});
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function get() {
    return _html2.default;
  }
});
Object.defineProperty(exports, "codeBlock", {
  enumerable: true,
  get: function get() {
    return _codeBlock2.default;
  }
});
Object.defineProperty(exports, "source", {
  enumerable: true,
  get: function get() {
    return _source2.default;
  }
});
Object.defineProperty(exports, "safeHtml", {
  enumerable: true,
  get: function get() {
    return _safeHtml2.default;
  }
});
Object.defineProperty(exports, "oneLine", {
  enumerable: true,
  get: function get() {
    return _oneLine2.default;
  }
});
Object.defineProperty(exports, "oneLineTrim", {
  enumerable: true,
  get: function get() {
    return _oneLineTrim2.default;
  }
});
Object.defineProperty(exports, "oneLineCommaLists", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaLists2.default;
  }
});
Object.defineProperty(exports, "oneLineCommaListsOr", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaListsOr2.default;
  }
});
Object.defineProperty(exports, "oneLineCommaListsAnd", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaListsAnd2.default;
  }
});
Object.defineProperty(exports, "inlineLists", {
  enumerable: true,
  get: function get() {
    return _inlineLists2.default;
  }
});
Object.defineProperty(exports, "oneLineInlineLists", {
  enumerable: true,
  get: function get() {
    return _oneLineInlineLists2.default;
  }
});
Object.defineProperty(exports, "stripIndent", {
  enumerable: true,
  get: function get() {
    return _stripIndent2.default;
  }
});
Object.defineProperty(exports, "stripIndents", {
  enumerable: true,
  get: function get() {
    return _stripIndents2.default;
  }
});

var _TemplateTag2 = _interopRequireDefault(__webpack_require__(/*! ./TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _trimResultTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

var _stripIndentTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

var _replaceResultTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

var _replaceSubstitutionTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./replaceSubstitutionTransformer */ "./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js"));

var _replaceStringTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./replaceStringTransformer */ "./node_modules/common-tags/es/replaceStringTransformer/index.js"));

var _inlineArrayTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

var _splitStringTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/index.js"));

var _removeNonPrintingValuesTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./removeNonPrintingValuesTransformer */ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js"));

var _commaLists2 = _interopRequireDefault(__webpack_require__(/*! ./commaLists */ "./node_modules/common-tags/es/commaLists/index.js"));

var _commaListsAnd2 = _interopRequireDefault(__webpack_require__(/*! ./commaListsAnd */ "./node_modules/common-tags/es/commaListsAnd/index.js"));

var _commaListsOr2 = _interopRequireDefault(__webpack_require__(/*! ./commaListsOr */ "./node_modules/common-tags/es/commaListsOr/index.js"));

var _html2 = _interopRequireDefault(__webpack_require__(/*! ./html */ "./node_modules/common-tags/es/html/index.js"));

var _codeBlock2 = _interopRequireDefault(__webpack_require__(/*! ./codeBlock */ "./node_modules/common-tags/es/codeBlock/index.js"));

var _source2 = _interopRequireDefault(__webpack_require__(/*! ./source */ "./node_modules/common-tags/es/source/index.js"));

var _safeHtml2 = _interopRequireDefault(__webpack_require__(/*! ./safeHtml */ "./node_modules/common-tags/es/safeHtml/index.js"));

var _oneLine2 = _interopRequireDefault(__webpack_require__(/*! ./oneLine */ "./node_modules/common-tags/es/oneLine/index.js"));

var _oneLineTrim2 = _interopRequireDefault(__webpack_require__(/*! ./oneLineTrim */ "./node_modules/common-tags/es/oneLineTrim/index.js"));

var _oneLineCommaLists2 = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaLists */ "./node_modules/common-tags/es/oneLineCommaLists/index.js"));

var _oneLineCommaListsOr2 = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaListsOr */ "./node_modules/common-tags/es/oneLineCommaListsOr/index.js"));

var _oneLineCommaListsAnd2 = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaListsAnd */ "./node_modules/common-tags/es/oneLineCommaListsAnd/index.js"));

var _inlineLists2 = _interopRequireDefault(__webpack_require__(/*! ./inlineLists */ "./node_modules/common-tags/es/inlineLists/index.js"));

var _oneLineInlineLists2 = _interopRequireDefault(__webpack_require__(/*! ./oneLineInlineLists */ "./node_modules/common-tags/es/oneLineInlineLists/index.js"));

var _stripIndent2 = _interopRequireDefault(__webpack_require__(/*! ./stripIndent */ "./node_modules/common-tags/es/stripIndent/index.js"));

var _stripIndents2 = _interopRequireDefault(__webpack_require__(/*! ./stripIndents */ "./node_modules/common-tags/es/stripIndents/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/inlineArrayTransformer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/common-tags/es/inlineArrayTransformer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _inlineArrayTransformer.default;
  }
});

var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ./inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");

var defaults = {
  separator: '',
  conjunction: '',
  serial: false
};
/**
 * Converts an array substitution to a string containing a list
 * @param  {String} [opts.separator = ''] - the character that separates each item
 * @param  {String} [opts.conjunction = '']  - replace the last separator with this
 * @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
 *
 * @return {Object}                     - a TemplateTag transformer
 */

var inlineArrayTransformer = function inlineArrayTransformer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      // only operate on arrays
      if (Array.isArray(substitution)) {
        var arrayLength = substitution.length;
        var separator = opts.separator;
        var conjunction = opts.conjunction;
        var serial = opts.serial; // join each item in the array into a string where each item is separated by separator
        // be sure to maintain indentation

        var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);

        if (indent) {
          substitution = substitution.join(separator + indent[1]);
        } else {
          substitution = substitution.join(separator + ' ');
        } // if conjunction is set, replace the last separator with conjunction, but only if there is more than one substitution


        if (conjunction && arrayLength > 1) {
          var separatorIndex = substitution.lastIndexOf(separator);
          substitution = substitution.slice(0, separatorIndex) + (serial ? separator : '') + ' ' + conjunction + substitution.slice(separatorIndex + 1);
        }
      }

      return substitution;
    }
  };
};

var _default = inlineArrayTransformer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/inlineLists/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/common-tags/es/inlineLists/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _inlineLists.default;
  }
});

var _inlineLists = _interopRequireDefault(__webpack_require__(/*! ./inlineLists */ "./node_modules/common-tags/es/inlineLists/inlineLists.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/inlineLists/inlineLists.js":
/*!****************************************************************!*\
  !*** ./node_modules/common-tags/es/inlineLists/inlineLists.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inlineLists = new _TemplateTag.default(_inlineArrayTransformer.default, _stripIndentTransformer.default, _trimResultTransformer.default);
var _default = inlineLists;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLine/index.js":
/*!******************************************************!*\
  !*** ./node_modules/common-tags/es/oneLine/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLine.default;
  }
});

var _oneLine = _interopRequireDefault(__webpack_require__(/*! ./oneLine */ "./node_modules/common-tags/es/oneLine/oneLine.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLine/oneLine.js":
/*!********************************************************!*\
  !*** ./node_modules/common-tags/es/oneLine/oneLine.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLine = new _TemplateTag.default((0, _replaceResultTransformer.default)(/(?:\n(?:\s*))+/g, ' '), _trimResultTransformer.default);
var _default = oneLine;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaLists/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaLists/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaLists.default;
  }
});

var _oneLineCommaLists = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaLists */ "./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js":
/*!****************************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLineCommaLists = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ','
}), (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
var _default = oneLineCommaLists;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsAnd/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaListsAnd/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaListsAnd.default;
  }
});

var _oneLineCommaListsAnd = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaListsAnd */ "./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLineCommaListsAnd = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ',',
  conjunction: 'and'
}), (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
var _default = oneLineCommaListsAnd;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsOr/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaListsOr/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaListsOr.default;
  }
});

var _oneLineCommaListsOr = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaListsOr */ "./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js":
/*!********************************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLineCommaListsOr = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ',',
  conjunction: 'or'
}), (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
var _default = oneLineCommaListsOr;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineInlineLists/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineInlineLists/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLineInlineLists.default;
  }
});

var _oneLineInlineLists = _interopRequireDefault(__webpack_require__(/*! ./oneLineInlineLists */ "./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js":
/*!******************************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLineInlineLists = new _TemplateTag.default(_inlineArrayTransformer.default, (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
var _default = oneLineInlineLists;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineTrim/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineTrim/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLineTrim.default;
  }
});

var _oneLineTrim = _interopRequireDefault(__webpack_require__(/*! ./oneLineTrim */ "./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js":
/*!****************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLineTrim = new _TemplateTag.default((0, _replaceResultTransformer.default)(/(?:\n\s*)/g, ''), _trimResultTransformer.default);
var _default = oneLineTrim;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _removeNonPrintingValuesTransformer.default;
  }
});

var _removeNonPrintingValuesTransformer = _interopRequireDefault(__webpack_require__(/*! ./removeNonPrintingValuesTransformer */ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");

__webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");

var isValidValue = function isValidValue(x) {
  return x != null && !Number.isNaN(x) && typeof x !== 'boolean';
};

var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
  return {
    onSubstitution: function onSubstitution(substitution) {
      if (Array.isArray(substitution)) {
        return substitution.filter(isValidValue);
      }

      if (isValidValue(substitution)) {
        return substitution;
      }

      return '';
    }
  };
};

var _default = removeNonPrintingValuesTransformer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/replaceResultTransformer/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceResultTransformer/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _replaceResultTransformer.default;
  }
});

var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ./replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

/**
 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
 * @param  {*}               replaceWith - the replacement value
 * @return {Object}                      - a TemplateTag transformer
 */
var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
  return {
    onEndResult: function onEndResult(endResult) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceResultTransformer requires at least 2 arguments.');
      }

      return endResult.replace(replaceWhat, replaceWith);
    }
  };
};

var _default = replaceResultTransformer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/replaceStringTransformer/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceStringTransformer/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _replaceStringTransformer.default;
  }
});

var _replaceStringTransformer = _interopRequireDefault(__webpack_require__(/*! ./replaceStringTransformer */ "./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

var replaceStringTransformer = function replaceStringTransformer(replaceWhat, replaceWith) {
  return {
    onString: function onString(str) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceStringTransformer requires at least 2 arguments.');
      }

      return str.replace(replaceWhat, replaceWith);
    }
  };
};

var _default = replaceStringTransformer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _replaceSubstitutionTransformer.default;
  }
});

var _replaceSubstitutionTransformer = _interopRequireDefault(__webpack_require__(/*! ./replaceSubstitutionTransformer */ "./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');
      } // Do not touch if null or undefined


      if (substitution == null) {
        return substitution;
      } else {
        return substitution.toString().replace(replaceWhat, replaceWith);
      }
    }
  };
};

var _default = replaceSubstitutionTransformer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/safeHtml/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/common-tags/es/safeHtml/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _safeHtml.default;
  }
});

var _safeHtml = _interopRequireDefault(__webpack_require__(/*! ./safeHtml */ "./node_modules/common-tags/es/safeHtml/safeHtml.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/safeHtml/safeHtml.js":
/*!**********************************************************!*\
  !*** ./node_modules/common-tags/es/safeHtml/safeHtml.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

var _splitStringTransformer = _interopRequireDefault(__webpack_require__(/*! ../splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/index.js"));

var _replaceSubstitutionTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceSubstitutionTransformer */ "./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var safeHtml = new _TemplateTag.default((0, _splitStringTransformer.default)('\n'), _inlineArrayTransformer.default, _stripIndentTransformer.default, _trimResultTransformer.default, (0, _replaceSubstitutionTransformer.default)(/&/g, '&amp;'), (0, _replaceSubstitutionTransformer.default)(/</g, '&lt;'), (0, _replaceSubstitutionTransformer.default)(/>/g, '&gt;'), (0, _replaceSubstitutionTransformer.default)(/"/g, '&quot;'), (0, _replaceSubstitutionTransformer.default)(/'/g, '&#x27;'), (0, _replaceSubstitutionTransformer.default)(/`/g, '&#x60;'));
var _default = safeHtml;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/source/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/common-tags/es/source/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _html.default;
  }
});

var _html = _interopRequireDefault(__webpack_require__(/*! ../html */ "./node_modules/common-tags/es/html/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/splitStringTransformer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/common-tags/es/splitStringTransformer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _splitStringTransformer.default;
  }
});

var _splitStringTransformer = _interopRequireDefault(__webpack_require__(/*! ./splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");

var splitStringTransformer = function splitStringTransformer(splitBy) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (splitBy != null && typeof splitBy === 'string') {
        if (typeof substitution === 'string' && substitution.includes(splitBy)) {
          substitution = substitution.split(splitBy);
        }
      } else {
        throw new Error('You need to specify a string character to split by.');
      }

      return substitution;
    }
  };
};

var _default = splitStringTransformer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndent/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndent/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _stripIndent.default;
  }
});

var _stripIndent = _interopRequireDefault(__webpack_require__(/*! ./stripIndent */ "./node_modules/common-tags/es/stripIndent/stripIndent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndent/stripIndent.js":
/*!****************************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndent/stripIndent.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stripIndent = new _TemplateTag.default(_stripIndentTransformer.default, _trimResultTransformer.default);
var _default = stripIndent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndentTransformer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndentTransformer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _stripIndentTransformer.default;
  }
});

var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ./stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");

__webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");

__webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}
/**
 * strips indentation from a template literal
 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return {Object}                  - a TemplateTag transformer
 */


var stripIndentTransformer = function stripIndentTransformer() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
  return {
    onEndResult: function onEndResult(endResult) {
      if (type === 'initial') {
        // remove the shortest leading indentation from each line
        var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
        var indent = match && Math.min.apply(Math, _toConsumableArray(match.map(function (el) {
          return el.length;
        })));

        if (indent) {
          var regexp = new RegExp('^.{' + indent + '}', 'gm');
          return endResult.replace(regexp, '');
        }

        return endResult;
      }

      if (type === 'all') {
        // remove all indentation from each line
        return endResult.replace(/^[^\S\n]+/gm, '');
      }

      throw new Error('Unknown type: ' + type);
    }
  };
};

var _default = stripIndentTransformer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndents/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndents/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _stripIndents.default;
  }
});

var _stripIndents = _interopRequireDefault(__webpack_require__(/*! ./stripIndents */ "./node_modules/common-tags/es/stripIndents/stripIndents.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndents/stripIndents.js":
/*!******************************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndents/stripIndents.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stripIndents = new _TemplateTag.default((0, _stripIndentTransformer.default)('all'), _trimResultTransformer.default);
var _default = stripIndents;
exports.default = _default;

/***/ }),

/***/ "./node_modules/common-tags/es/trimResultTransformer/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/common-tags/es/trimResultTransformer/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _trimResultTransformer.default;
  }
});

var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ./trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

/**
 * TemplateTag transformer that trims whitespace on the end result of a tagged template
 * @param  {String} side = '' - The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
 * @return {Object}           - a TemplateTag transformer
 */
var trimResultTransformer = function trimResultTransformer() {
  var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    onEndResult: function onEndResult(endResult) {
      if (side === '') {
        return endResult.trim();
      }

      side = side.toLowerCase();

      if (side === 'start' || side === 'left') {
        return endResult.replace(/^\s*/, '');
      }

      if (side === 'end' || side === 'right') {
        return endResult.replace(/\s*$/, '');
      }

      throw new Error('Side not supported: ' + side);
    }
  };
};

var _default = trimResultTransformer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/embedded.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/embedded.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".x-hellosign-embedded {\n  height: 100%; }\n  .x-hellosign-embedded--in-modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%; }\n\n.x-hellosign-embedded__modal-screen {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-screen {\n      display: none; } }\n\n.x-hellosign-embedded__modal-content {\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  top: 5vh;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 90vh;\n  min-height: 400px;\n  width: 80vw;\n  min-width: 512px;\n  max-width: 1024px; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-content {\n      overflow: hidden;\n      box-shadow: none;\n      height: 100%;\n      min-height: 0;\n      width: 100%;\n      min-width: 0;\n      transform: none;\n      left: 0;\n      top: 0; } }\n\n.x-hellosign-embedded__modal-close {\n  position: absolute;\n  top: 0;\n  right: -60px;\n  height: 40px;\n  width: 40px; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-close {\n      display: none; } }\n\n.x-hellosign-embedded__modal-close-button {\n  -webkit-appearance: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  background-color: #1A1A1A;\n  transition: background-color 0.35s ease;\n  will-change: background-color;\n  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  padding: 20px; }\n  .x-hellosign-embedded__modal-close-button:hover {\n    background-color: #4E4E4E; }\n  .x-hellosign-embedded__modal-close-button::before, .x-hellosign-embedded__modal-close-button::after {\n    content: '';\n    position: absolute;\n    width: 1px;\n    background-color: white;\n    height: 20px;\n    top: 10px; }\n  .x-hellosign-embedded__modal-close-button::before {\n    transform: rotateZ(45deg); }\n  .x-hellosign-embedded__modal-close-button::after {\n    transform: rotateZ(-45deg); }\n\n.x-hellosign-embedded__iframe {\n  min-height: 400px;\n  background-color: #F7F8F9;\n  height: 100%;\n  border: none;\n  min-width: 100%;\n  width: 100px;\n  *width: 100%; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/debug/node_modules/ms/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/debug/node_modules/ms/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};

  var type = _typeof(val);

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }

  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }

  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }

  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");

__webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/debug/node_modules/ms/index.js");
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/tiny-emitter/index.js":
/*!********************************************!*\
  !*** ./node_modules/tiny-emitter/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

function E() {// Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function on(name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });
    return this;
  },
  once: function once(name, callback, ctx) {
    var self = this;

    function listener() {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }

    ;
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function emit(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },
  off: function off(name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
      }
    } // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
module.exports = E;
module.exports.TinyEmitter = E;

/***/ }),

/***/ "./node_modules/url-polyfill/url-polyfill.js":
/*!***************************************************!*\
  !*** ./node_modules/url-polyfill/url-polyfill.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global) {
  /**
   * Polyfill URLSearchParams
   *
   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
   */
  var checkIfIteratorIsSupported = function checkIfIteratorIsSupported() {
    try {
      return !!Symbol.iterator;
    } catch (error) {
      return false;
    }
  };

  var iteratorSupported = checkIfIteratorIsSupported();

  var createIterator = function createIterator(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: value === void 0,
          value: value
        };
      }
    };

    if (iteratorSupported) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  };
  /**
   * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
   * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
   */


  var serializeParam = function serializeParam(value) {
    return encodeURIComponent(value).replace(/%20/g, '+');
  };

  var deserializeParam = function deserializeParam(value) {
    return decodeURIComponent(String(value).replace(/\+/g, ' '));
  };

  var polyfillURLSearchParams = function polyfillURLSearchParams() {
    var URLSearchParams = function URLSearchParams(searchString) {
      Object.defineProperty(this, '_entries', {
        writable: true,
        value: {}
      });

      var typeofSearchString = _typeof(searchString);

      if (typeofSearchString === 'undefined') {// do nothing
      } else if (typeofSearchString === 'string') {
        if (searchString !== '') {
          this._fromString(searchString);
        }
      } else if (searchString instanceof URLSearchParams) {
        var _this = this;

        searchString.forEach(function (value, name) {
          _this.append(name, value);
        });
      } else if (searchString !== null && typeofSearchString === 'object') {
        if (Object.prototype.toString.call(searchString) === '[object Array]') {
          for (var i = 0; i < searchString.length; i++) {
            var entry = searchString[i];

            if (Object.prototype.toString.call(entry) === '[object Array]' || entry.length !== 2) {
              this.append(entry[0], entry[1]);
            } else {
              throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
            }
          }
        } else {
          for (var key in searchString) {
            if (searchString.hasOwnProperty(key)) {
              this.append(key, searchString[key]);
            }
          }
        }
      } else {
        throw new TypeError('Unsupported input\'s type for URLSearchParams');
      }
    };

    var proto = URLSearchParams.prototype;

    proto.append = function (name, value) {
      if (name in this._entries) {
        this._entries[name].push(String(value));
      } else {
        this._entries[name] = [String(value)];
      }
    };

    proto.delete = function (name) {
      delete this._entries[name];
    };

    proto.get = function (name) {
      return name in this._entries ? this._entries[name][0] : null;
    };

    proto.getAll = function (name) {
      return name in this._entries ? this._entries[name].slice(0) : [];
    };

    proto.has = function (name) {
      return name in this._entries;
    };

    proto.set = function (name, value) {
      this._entries[name] = [String(value)];
    };

    proto.forEach = function (callback, thisArg) {
      var entries;

      for (var name in this._entries) {
        if (this._entries.hasOwnProperty(name)) {
          entries = this._entries[name];

          for (var i = 0; i < entries.length; i++) {
            callback.call(thisArg, entries[i], name, this);
          }
        }
      }
    };

    proto.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return createIterator(items);
    };

    proto.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return createIterator(items);
    };

    proto.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return createIterator(items);
    };

    if (iteratorSupported) {
      proto[Symbol.iterator] = proto.entries;
    }

    proto.toString = function () {
      var searchArray = [];
      this.forEach(function (value, name) {
        searchArray.push(serializeParam(name) + '=' + serializeParam(value));
      });
      return searchArray.join('&');
    };

    global.URLSearchParams = URLSearchParams;
  };

  if (!('URLSearchParams' in global) || new global.URLSearchParams('?a=1').toString() !== 'a=1') {
    polyfillURLSearchParams();
  }

  var proto = global.URLSearchParams.prototype;

  if (typeof proto.sort !== 'function') {
    proto.sort = function () {
      var _this = this;

      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);

        if (!_this._entries) {
          _this.delete(name);
        }
      });
      items.sort(function (a, b) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return +1;
        } else {
          return 0;
        }
      });

      if (_this._entries) {
        // force reset because IE keeps keys index
        _this._entries = {};
      }

      for (var i = 0; i < items.length; i++) {
        this.append(items[i][0], items[i][1]);
      }
    };
  }

  if (typeof proto._fromString !== 'function') {
    Object.defineProperty(proto, '_fromString', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function value(searchString) {
        if (this._entries) {
          this._entries = {};
        } else {
          var keys = [];
          this.forEach(function (value, name) {
            keys.push(name);
          });

          for (var i = 0; i < keys.length; i++) {
            this.delete(keys[i]);
          }
        }

        searchString = searchString.replace(/^\?/, '');
        var attributes = searchString.split('&');
        var attribute;

        for (var i = 0; i < attributes.length; i++) {
          attribute = attributes[i].split('=');
          this.append(deserializeParam(attribute[0]), attribute.length > 1 ? deserializeParam(attribute[1]) : '');
        }
      }
    });
  } // HTMLAnchorElement

})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : void 0);

(function (global) {
  /**
   * Polyfill URL
   *
   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
   */
  var checkIfURLIsSupported = function checkIfURLIsSupported() {
    try {
      var u = new global.URL('b', 'http://a');
      u.pathname = 'c%20d';
      return u.href === 'http://a/c%20d' && u.searchParams;
    } catch (e) {
      return false;
    }
  };

  var polyfillURL = function polyfillURL() {
    var _URL = global.URL;

    var URL = function URL(url, base) {
      if (typeof url !== 'string') url = String(url); // Only create another document if the base is different from current location.

      var doc = document,
          baseElement;

      if (base && (global.location === void 0 || base !== global.location.href)) {
        doc = document.implementation.createHTMLDocument('');
        baseElement = doc.createElement('base');
        baseElement.href = base;
        doc.head.appendChild(baseElement);

        try {
          if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
        } catch (err) {
          throw new Error('URL unable to set base ' + base + ' due to ' + err);
        }
      }

      var anchorElement = doc.createElement('a');
      anchorElement.href = url;

      if (baseElement) {
        doc.body.appendChild(anchorElement);
        anchorElement.href = anchorElement.href; // force href to refresh
      }

      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
        throw new TypeError('Invalid URL');
      }

      Object.defineProperty(this, '_anchorElement', {
        value: anchorElement
      }); // create a linked searchParams which reflect its changes on URL

      var searchParams = new global.URLSearchParams(this.search);
      var enableSearchUpdate = true;
      var enableSearchParamsUpdate = true;

      var _this = this;

      ['append', 'delete', 'set'].forEach(function (methodName) {
        var method = searchParams[methodName];

        searchParams[methodName] = function () {
          method.apply(searchParams, arguments);

          if (enableSearchUpdate) {
            enableSearchParamsUpdate = false;
            _this.search = searchParams.toString();
            enableSearchParamsUpdate = true;
          }
        };
      });
      Object.defineProperty(this, 'searchParams', {
        value: searchParams,
        enumerable: true
      });
      var search = void 0;
      Object.defineProperty(this, '_updateSearchParams', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function value() {
          if (this.search !== search) {
            search = this.search;

            if (enableSearchParamsUpdate) {
              enableSearchUpdate = false;

              this.searchParams._fromString(this.search);

              enableSearchUpdate = true;
            }
          }
        }
      });
    };

    var proto = URL.prototype;

    var linkURLWithAnchorAttribute = function linkURLWithAnchorAttribute(attributeName) {
      Object.defineProperty(proto, attributeName, {
        get: function get() {
          return this._anchorElement[attributeName];
        },
        set: function set(value) {
          this._anchorElement[attributeName] = value;
        },
        enumerable: true
      });
    };

    ['hash', 'host', 'hostname', 'port', 'protocol'].forEach(function (attributeName) {
      linkURLWithAnchorAttribute(attributeName);
    });
    Object.defineProperty(proto, 'search', {
      get: function get() {
        return this._anchorElement['search'];
      },
      set: function set(value) {
        this._anchorElement['search'] = value;

        this._updateSearchParams();
      },
      enumerable: true
    });
    Object.defineProperties(proto, {
      'toString': {
        get: function get() {
          var _this = this;

          return function () {
            return _this.href;
          };
        }
      },
      'href': {
        get: function get() {
          return this._anchorElement.href.replace(/\?$/, '');
        },
        set: function set(value) {
          this._anchorElement.href = value;

          this._updateSearchParams();
        },
        enumerable: true
      },
      'pathname': {
        get: function get() {
          return this._anchorElement.pathname.replace(/(^\/?)/, '/');
        },
        set: function set(value) {
          this._anchorElement.pathname = value;
        },
        enumerable: true
      },
      'origin': {
        get: function get() {
          // get expected port from protocol
          var expectedPort = {
            'http:': 80,
            'https:': 443,
            'ftp:': 21
          }[this._anchorElement.protocol]; // add port to origin if, expected port is different than actual port
          // and it is not empty f.e http://foo:8080
          // 8080 != 80 && 8080 != ''

          var addPortToOrigin = this._anchorElement.port != expectedPort && this._anchorElement.port !== '';
          return this._anchorElement.protocol + '//' + this._anchorElement.hostname + (addPortToOrigin ? ':' + this._anchorElement.port : '');
        },
        enumerable: true
      },
      'password': {
        // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      },
      'username': {
        // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      }
    });

    URL.createObjectURL = function (blob) {
      return _URL.createObjectURL.apply(_URL, arguments);
    };

    URL.revokeObjectURL = function (url) {
      return _URL.revokeObjectURL.apply(_URL, arguments);
    };

    global.URL = URL;
  };

  if (!checkIfURLIsSupported()) {
    polyfillURL();
  }

  if (global.location !== void 0 && !('origin' in global.location)) {
    var getOrigin = function getOrigin() {
      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? ':' + global.location.port : '');
    };

    try {
      Object.defineProperty(global.location, 'origin', {
        get: getOrigin,
        enumerable: true
      });
    } catch (e) {
      setInterval(function () {
        global.location.origin = getOrigin();
      }, 100);
    }
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : void 0);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/url-search-params-polyfill/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/url-search-params-polyfill/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 *
 *
 * @author Jerry Bendy <jerry@icewingcc.com>
 * @licence MIT
 *
 */
(function (self) {
  'use strict';

  var nativeURLSearchParams = self.URLSearchParams ? self.URLSearchParams : null,
      isSupportObjectConstructor = nativeURLSearchParams && new nativeURLSearchParams({
    a: 1
  }).toString() === 'a=1',
      // There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
  decodesPlusesCorrectly = nativeURLSearchParams && new nativeURLSearchParams('s=%2B').get('s') === '+',
      __URLSearchParams__ = "__URLSearchParams__",
      // Fix bug in Edge which cannot encode ' &' correctly
  encodesAmpersandsCorrectly = nativeURLSearchParams ? function () {
    var ampersandTest = new nativeURLSearchParams();
    ampersandTest.append('s', ' &');
    return ampersandTest.toString() === 's=+%26';
  }() : true,
      prototype = URLSearchParamsPolyfill.prototype,
      iterable = !!(self.Symbol && self.Symbol.iterator);

  if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly && encodesAmpersandsCorrectly) {
    return;
  }
  /**
   * Make a URLSearchParams instance
   *
   * @param {object|string|URLSearchParams} search
   * @constructor
   */


  function URLSearchParamsPolyfill(search) {
    search = search || ""; // support construct object with another URLSearchParams instance

    if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
      search = search.toString();
    }

    this[__URLSearchParams__] = parseToDict(search);
  }
  /**
   * Appends a specified key/value pair as a new search parameter.
   *
   * @param {string} name
   * @param {string} value
   */


  prototype.append = function (name, value) {
    appendTo(this[__URLSearchParams__], name, value);
  };
  /**
   * Deletes the given search parameter, and its associated value,
   * from the list of all search parameters.
   *
   * @param {string} name
   */


  prototype.delete = function (name) {
    delete this[__URLSearchParams__][name];
  };
  /**
   * Returns the first value associated to the given search parameter.
   *
   * @param {string} name
   * @returns {string|null}
   */


  prototype.get = function (name) {
    var dict = this[__URLSearchParams__];
    return name in dict ? dict[name][0] : null;
  };
  /**
   * Returns all the values association with a given search parameter.
   *
   * @param {string} name
   * @returns {Array}
   */


  prototype.getAll = function (name) {
    var dict = this[__URLSearchParams__];
    return name in dict ? dict[name].slice(0) : [];
  };
  /**
   * Returns a Boolean indicating if such a search parameter exists.
   *
   * @param {string} name
   * @returns {boolean}
   */


  prototype.has = function (name) {
    return name in this[__URLSearchParams__];
  };
  /**
   * Sets the value associated to a given search parameter to
   * the given value. If there were several values, delete the
   * others.
   *
   * @param {string} name
   * @param {string} value
   */


  prototype.set = function set(name, value) {
    this[__URLSearchParams__][name] = ['' + value];
  };
  /**
   * Returns a string containg a query string suitable for use in a URL.
   *
   * @returns {string}
   */


  prototype.toString = function () {
    var dict = this[__URLSearchParams__],
        query = [],
        i,
        key,
        name,
        value;

    for (key in dict) {
      name = encode(key);

      for (i = 0, value = dict[key]; i < value.length; i++) {
        query.push(name + '=' + encode(value[i]));
      }
    }

    return query.join('&');
  }; // There is a bug in Safari 10.1 and `Proxy`ing it is not enough.


  var forSureUsePolyfill = !decodesPlusesCorrectly;
  var useProxy = !forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy;
  /*
   * Apply polifill to global object and append other prototype into it
   */

  self.URLSearchParams = useProxy ? // Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
  new Proxy(nativeURLSearchParams, {
    construct: function construct(target, args) {
      return new target(new URLSearchParamsPolyfill(args[0]).toString());
    }
  }) : URLSearchParamsPolyfill;
  var USPProto = self.URLSearchParams.prototype;
  USPProto.polyfill = true;
  /**
   *
   * @param {function} callback
   * @param {object} thisArg
   */

  USPProto.forEach = USPProto.forEach || function (callback, thisArg) {
    var dict = parseToDict(this.toString());
    Object.getOwnPropertyNames(dict).forEach(function (name) {
      dict[name].forEach(function (value) {
        callback.call(thisArg, value, name, this);
      }, this);
    }, this);
  };
  /**
   * Sort all name-value pairs
   */


  USPProto.sort = USPProto.sort || function () {
    var dict = parseToDict(this.toString()),
        keys = [],
        k,
        i,
        j;

    for (k in dict) {
      keys.push(k);
    }

    keys.sort();

    for (i = 0; i < keys.length; i++) {
      this.delete(keys[i]);
    }

    for (i = 0; i < keys.length; i++) {
      var key = keys[i],
          values = dict[key];

      for (j = 0; j < values.length; j++) {
        this.append(key, values[j]);
      }
    }
  };
  /**
   * Returns an iterator allowing to go through all keys of
   * the key/value pairs contained in this object.
   *
   * @returns {function}
   */


  USPProto.keys = USPProto.keys || function () {
    var items = [];
    this.forEach(function (item, name) {
      items.push(name);
    });
    return makeIterator(items);
  };
  /**
   * Returns an iterator allowing to go through all values of
   * the key/value pairs contained in this object.
   *
   * @returns {function}
   */


  USPProto.values = USPProto.values || function () {
    var items = [];
    this.forEach(function (item) {
      items.push(item);
    });
    return makeIterator(items);
  };
  /**
   * Returns an iterator allowing to go through all key/value
   * pairs contained in this object.
   *
   * @returns {function}
   */


  USPProto.entries = USPProto.entries || function () {
    var items = [];
    this.forEach(function (item, name) {
      items.push([name, item]);
    });
    return makeIterator(items);
  };

  if (iterable) {
    USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
  }

  function encode(str) {
    var replace = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function (match) {
      return replace[match];
    });
  }

  function decode(str) {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  }

  function makeIterator(arr) {
    var iterator = {
      next: function next() {
        var value = arr.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };

    if (iterable) {
      iterator[self.Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function parseToDict(search) {
    var dict = {};

    if (_typeof(search) === "object") {
      for (var key in search) {
        if (search.hasOwnProperty(key)) {
          appendTo(dict, key, search[key]);
        }
      }
    } else {
      // remove first '?'
      if (search.indexOf("?") === 0) {
        search = search.slice(1);
      }

      var pairs = search.split("&");

      for (var j = 0; j < pairs.length; j++) {
        var value = pairs[j],
            index = value.indexOf('=');

        if (-1 < index) {
          appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
        } else {
          if (value) {
            appendTo(dict, decode(value), '');
          }
        }
      }
    }

    return dict;
  }

  function appendTo(dict, name, value) {
    var val = typeof value === 'string' ? value : value !== null && value !== undefined && typeof value.toString === 'function' ? value.toString() : JSON.stringify(value);

    if (name in dict) {
      dict[name].push(val);
    } else {
      dict[name] = [val];
    }
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : void 0);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/defaults.js":
/*!*************************!*\
  !*** ./src/defaults.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(__webpack_require__(/*! ./settings */ "./src/settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  allowCancel: true,
  debug: false,
  locale: _settings.default.locales.EN_US,
  skipDomainVerification: false,
  testMode: false,
  timeout: 30000 // 30 seconds

};
exports.default = _default;

/***/ }),

/***/ "./src/embedded.js":
/*!*************************!*\
  !*** ./src/embedded.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");

__webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

__webpack_require__(/*! core-js/modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");

__webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");

__webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! core-js/modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");

__webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");

var _tinyEmitter = _interopRequireDefault(__webpack_require__(/*! tiny-emitter */ "./node_modules/tiny-emitter/index.js"));

var _commonTags = __webpack_require__(/*! common-tags */ "./node_modules/common-tags/es/index.js");

var _debug = _interopRequireDefault(__webpack_require__(/*! ./utils/debug */ "./src/utils/debug.js"));

var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ "./src/defaults.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ./settings */ "./src/settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            <iframe class=\"", "\" name=\"", "\" src=\"", "\" scrolling=\"no\" />\n          </div>\n        </div>\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          <div class=", ">\n            <button class=", " role=\"button\" title=\"Close signature request\"></button>\n          </div>\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        <div class=\"", " ", "\">\n          <div class=\"", "\"></div>\n          <div class=\"", "\">\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <div class=\"", "\">\n          <iframe class=\"", "\" name=\"", "\" src=\"", "\" scrolling=\"no\" />\n        </div>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HelloSign =
/*#__PURE__*/
function (_Emitter) {
  _inherits(HelloSign, _Emitter);

  /**
   * HelloSign Embedded class names.
   *
   * @enum {string}
   * @static
   * @readonly
   */

  /**
   * HelloSign Embedded events.
   *
   * @enum {string}
   * @static
   * @readonly
   */

  /**
   * HelloSign Embedded supported locales.
   *
   * @enum {string}
   * @static
   * @readonly
   */

  /**
   * HelloSign Embedded cross-origin window messages.
   *
   * @enum {string}
   * @static
   * @readonly
   */

  /**
   * HelloSign Embedded version number.
   *
   * @enum {string}
   * @static
   * @readonly
   */

  /**
   * The base config object which "open" will extend.
   *
   * @type {?Object}
   * @private
   */

  /**
   * A reference to the base HelloSign Embedded container
   * element.
   *
   * @type {?HTMLElement}
   * @private
   */

  /**
   * The final config object.
   *
   * @type {?Object}
   * @private
   */

  /**
   * The iFrame URL object.
   *
   * @type {?URL}
   * @private
   */

  /**
   * A reference to the iFrame element.
   *
   * @type {?HTMLElement}
   * @private
   */

  /**
   * The initialization timeout timer.
   *
   * @type {?number}
   * @private
   */

  /**
   * Whether the client is open or not.
   *
   * @type {boolean}
   * @private
   */

  /**
   * Whether the app is ready or not.
   *
   * @type {boolean}
   * @private
   */

  /**
   * Whether the signature request has been sent or signed.
   *
   * @type {boolean}
   * @private
   */

  /**
   * @type {Function}
   * @private
   */

  /**
   * @type {Function}
   * @private
   */

  /**
   * @type {Function}
   * @private
   */

  /**
   * @type {Function}
   * @private
   */

  /**
   * Creates a new HelloSign Embedded instance.
   *
   * @param {Object} [obj]
   * @constructor
   */
  function HelloSign() {
    var _this;

    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, HelloSign);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HelloSign).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_baseConfig", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_baseEl", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_config", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_iFrameURL", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_iFrameEl", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_initTimeout", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_isOpen", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_isReady", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_isSentOrSigned", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onEmbeddedClick", _this._onEmbeddedClick.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onInitTimeout", _this._onInitTimeout.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onBeforeUnload", _this._onBeforeUnload.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onMessage", _this._onMessage.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    _debug.default.info('created new HelloSign instance with options', obj);

    if (obj && _typeof(obj) === 'object') {
      _this._baseConfig = _objectSpread({}, obj);
    } else {
      throw new TypeError('Configuration must be an object');
    }

    return _this;
  }
  /**
   * Validates and appends the "client_id" parameter to the
   * iFrame params object.
   *
   * @throws {TypeError} if clientId is invalid
   * @param {URLSearchParams} params
   * @private
   */


  _createClass(HelloSign, [{
    key: "_applyClientId",
    value: function _applyClientId(params) {
      var val = this._config.clientId;

      if (!val) {
        throw new TypeError('"clientId" is required');
      }

      if (typeof val !== 'string') {
        throw new TypeError('"clientId" must be a string');
      }

      params.append('client_id', val);
    }
    /**
     * Validates and appends the "debug" parameter to the
     * iFrame params object.
     *
     * @throws {TypeError} if debug is invalid
     * @param {URLSearchParams} params
     * @private
     */

  }, {
    key: "_applyDebug",
    value: function _applyDebug(params) {
      var val = this._config.debug;

      if (typeof val !== 'boolean') {
        throw new TypeError('"debug" must be a boolean');
      }

      params.append('debug', val ? 1 : 0);
    }
    /**
     * Validates and appends the "final_button_text" parameter
     * to the iFrame params object.
     *
     * @throws {TypeError} if finalButtonText is invalid
     * @param {URLSearchParams} params
     * @private
     */

  }, {
    key: "_applyFinalButtonText",
    value: function _applyFinalButtonText(params) {
      if ('finalButtonText' in this._config) {
        var val = this._config.finalButtonText;

        if (typeof val !== 'string') {
          throw new TypeError('"finalButtonText" must be a string');
        }

        if (!['Save', 'Send', 'Continue'].includes(val)) {
          throw new TypeError('"finalButtonText" must be one of "Save", "Send", or "Continue"');
        }

        params.append('final_button_text', val);
      }
    }
    /**
     * Validates and appends the "hide_header" parameter to the
     * iFrame params object.
     *
     * @throws {TypeError} if hideHeader is invalid
     * @param {URLSearchParams} params
     * @private
     */

  }, {
    key: "_applyHideHeader",
    value: function _applyHideHeader(params) {
      if ('hideHeader' in this._config) {
        var val = this._config.hideHeader;

        if (typeof val !== 'boolean') {
          throw new TypeError('"hideHeader" must be a boolean');
        }

        params.append('hide_header', val);
      }
    }
    /**
     * Validates and appends the "user_culture" parameter to
     * the iFrame params object.
     *
     * @throws {TypeError} if locale is invalid
     * @param {URLSearchParams} params
     * @private
     */

  }, {
    key: "_applyLocale",
    value: function _applyLocale(params) {
      var val = this._config.locale;

      if (typeof val !== 'string') {
        throw new TypeError('"locale" must be a string');
      } // Object.values() has been polyfilled, eslint-compat
      // need not raise an exception for it.
      // eslint-disable-next-line


      if (!Object.values(_settings.default.locales).includes(val)) {
        throw new TypeError("\"".concat(val, "\" is not a supported locale"));
      }

      params.append('user_culture', val);
    }
    /**
     * Appends the "parent_url" parameter to the iFrame params
     * object.
     *
     * @param {URLSearchParams} params
     * @private
     */

  }, {
    key: "_applyParentURL",
    value: function _applyParentURL(params) {
      params.append('parent_url', document.location.href);
    }
    /**
     * Validates and appends the "redirect_url" parameter to
     * the iFrame params object.
     *
     * @throws {TypeError} if redirectTo is invalid
     * @param {URLSearchParams} params
     * @private
     */

  }, {
    key: "_applyRedirectTo",
    value: function _applyRedirectTo(params) {
      if ('redirectTo' in this._config) {
        var val = this._config.redirectTo;

        if (typeof val !== 'string') {
          throw new TypeError('"redirectTo" must be a string');
        }

        params.append('redirect_url', val);
      }
    }
    /**
     * Validates and appends the "requester" parameter to the
     * iFrame params object.
     *
     * @throws {TypeError} if requestingEmail is invalid
     * @param {URLSearchParams} params
     * @private
     */

  }, {
    key: "_applyRequestingEmail",
    value: function _applyRequestingEmail(params) {
      if ('requestingEmail' in this._config) {
        var val = this._config.requestingEmail;

        if (typeof val !== 'string') {
          throw new TypeError('"requestingEmail" must be a string');
        }

        params.append('requester', val);
      }
    }
    /**
     * Validates and appends the "skip_domain_verification"
     * parameter to the iFrame params object.
     *
     * @throws {TypeError} if testMode is invalid
     * @param {URLSearchParams} params
     * @private
     */

  }, {
    key: "_applyTestMode",
    value: function _applyTestMode(params) {
      var val = this._config.skipDomainVerification || this._config.testMode;

      if (typeof val !== 'boolean') {
        throw new TypeError('"testMode" must be a boolean');
      }

      params.append('skip_domain_verification', val ? 1 : 0);
    }
    /**
     * Validates and appends the "white_labeling_options"
     * parameter to the iFrame params object.
     *
     * @throws {TypeError} if whiteLabeling is invalid
     * @param {URLSearchParams} params
     * @private
     */

  }, {
    key: "_applyWhiteLabeling",
    value: function _applyWhiteLabeling(params) {
      if ('whiteLabeling' in this._config) {
        var val = this._config.whiteLabeling;

        if (_typeof(val) !== 'object') {
          throw new TypeError('"whiteLabeling" must be an object');
        }

        params.append('white_labeling_options', JSON.stringify(val));
      }
    }
    /**
     * Appends the "ux_version" parameter to the iFrame
     * params object.
     *
     * @param {URLSearchParams} params
     * @private
     */

  }, {
    key: "_applyUxVersion",
    value: function _applyUxVersion(params) {
      params.append('ux_version', '2');
    }
    /**
     * Appends the "js_version" parameter to the iFrame params
     * object.
     *
     * @param {URLSearchParams} params
     * @private
     */

  }, {
    key: "_applyVersion",
    value: function _applyVersion(params) {
      params.append('js_version', "2.5.0");
    }
    /**
     * Validates and crates the iFrame params object.
     *
     * @param {URL} frameURL
     * @returns {URLSearchParams}
     * @private
     */

  }, {
    key: "_getFrameParams",
    value: function _getFrameParams(frameURL) {
      var params = new URLSearchParams(frameURL.search);

      this._applyClientId(params);

      this._applyDebug(params);

      this._applyFinalButtonText(params);

      this._applyHideHeader(params);

      this._applyLocale(params);

      this._applyParentURL(params);

      this._applyRedirectTo(params);

      this._applyRequestingEmail(params);

      this._applyTestMode(params);

      this._applyUxVersion(params);

      this._applyVersion(params);

      this._applyWhiteLabeling(params);

      return params;
    }
    /**
     * Calculates and sets the iFrame frame src.
     *
     * @param {string} url
     * @private
     */

  }, {
    key: "_updateFrameUrl",
    value: function _updateFrameUrl(url) {
      var frameURL = new URL(url);

      var frameParams = this._getFrameParams(frameURL);

      frameURL.search = frameParams.toString();
      this._iFrameURL = frameURL;
    }
    /**
     * Renders the HelloSign Embedded markup.
     *
     * We would like to have used HTML Content Templates or
     * Range.createContextualFragment() but we are concerned
     * about browser support.
     *
     * @returns {HTMLElement}
     * @private
     */

  }, {
    key: "_renderMarkup",
    value: function _renderMarkup() {
      var elem = document.createElement('div');

      if (this._config.container) {
        elem.innerHTML = (0, _commonTags.safeHtml)(_templateObject(), _settings.default.classNames.BASE, _settings.default.classNames.IFRAME, _settings.default.iframe.NAME, this._iFrameURL.href);
      } else {
        elem.innerHTML = (0, _commonTags.safeHtml)(_templateObject2(), _settings.default.classNames.BASE, _settings.default.classNames.BASE_IN_MODAL, _settings.default.classNames.MODAL_SCREEN, _settings.default.classNames.MODAL_CONTENT) + (this._config.allowCancel ? (0, _commonTags.safeHtml)(_templateObject3(), _settings.default.classNames.MODAL_CLOSE, _settings.default.classNames.MODAL_CLOSE_BTN) : '') + (0, _commonTags.safeHtml)(_templateObject4(), _settings.default.classNames.IFRAME, _settings.default.iframe.NAME, this._iFrameURL.href);
      }

      return elem.firstChild;
    }
    /**
     * Renders the HelloSign Embedded markup into the DOM.
     *
     * @private
     */

  }, {
    key: "_appendMarkup",
    value: function _appendMarkup() {
      this._baseEl = this._renderMarkup(); // Listen for click events within the HelloSign
      // Embedded DOM markup. These will be delegated
      // depending on the source element.

      this._baseEl.addEventListener('click', this._onEmbeddedClick); // Obtain element references.


      this._iFrameEl = this._baseEl.getElementsByClassName(_settings.default.classNames.IFRAME).item(0); // Insert HelloSign Embedded markup into the DOM.

      if (this._config.container) {
        this._config.container.appendChild(this._baseEl);
      } else {
        document.body.appendChild(this._baseEl);
      }
    }
    /**
     * Removes the HelloSign Embedded markup from the DOM.
     *
     *
     * @private
     */

  }, {
    key: "_clearMarkup",
    value: function _clearMarkup() {
      this._baseEl.parentElement.removeChild(this._baseEl);
    }
    /**
     * @typedef {Object} HelloSignMessage
     * @property {string} type
     * @property {Object} [payload]
     */

    /**
     * Posts a cross-origin window message to the HelloSign
     * Embedded iFrame content window.
     *
     * @param {HelloSignMessage} msg
     * @private
     */

  }, {
    key: "_sendMessage",
    value: function _sendMessage(msg) {
      _debug.default.info('posting message', msg);

      var targetOrigin = this._iFrameURL.href;
      var targetWindow = this._iFrameEl.contentWindow;
      targetWindow.postMessage(msg, targetOrigin);
    }
    /**
     * Sends a cancel request message to the app.
     *
     * @private
     */

  }, {
    key: "_sendCancelRequestMessage",
    value: function _sendCancelRequestMessage() {
      _debug.default.info('sending cancel request message');

      this._sendMessage({
        type: _settings.default.messages.USER_CANCEL_REQUEST
      });
    }
    /**
     * Sends the configuration message to the app.
     *
     * @private
     */

  }, {
    key: "_sendConfigurationMessage",
    value: function _sendConfigurationMessage() {
      _debug.default.info('sending app configuration message');

      this._sendMessage({
        type: _settings.default.messages.APP_CONFIGURE,
        payload: {
          allowCancel: this._config.allowCancel
        }
      });
    }
    /**
     * Sends the domain verification response.
     *
     * @param {string} token
     * @private
     */

  }, {
    key: "_sendDomainVerificationMessage",
    value: function _sendDomainVerificationMessage(token) {
      _debug.default.info('sending domain verification message', token);

      this._sendMessage({
        type: _settings.default.messages.APP_VERIFY_DOMAIN_RESPONSE,
        payload: {
          token: token
        }
      });
    }
    /**
     * Sends the initialization error message.
     *
     * @private
     */

  }, {
    key: "_sendInitializationErrorMessage",
    value: function _sendInitializationErrorMessage() {
      _debug.default.info('sending initialization error message');

      this._sendMessage({
        type: _settings.default.messages.APP_ERROR,
        payload: {
          message: 'App failed to initialize before timeout'
        }
      });
    }
    /**
     * Clears the initialization timeout timer.
     *
     * @private
     */

  }, {
    key: "_clearInitTimeout",
    value: function _clearInitTimeout() {
      if (this._initTimeout) {
        _debug.default.info('clearing initialization timeout');

        clearTimeout(this._initTimeout);
        this._initTimeout = null;
      }
    }
    /**
     * Starts the initialization timeout timer.
     *
     * @private
     */

  }, {
    key: "_startInitTimeout",
    value: function _startInitTimeout() {
      _debug.default.info('starting initialization timeout');

      this._clearInitTimeout();

      this._initTimeout = setTimeout(this._onInitTimeout, this._config.timeout);
    }
    /**
     * Starts the initialization timeout timer if the workflow
     * is embedded signing.
     *
     * @private
     */

  }, {
    key: "_maybeStartInitTimeout",
    value: function _maybeStartInitTimeout() {
      if (this._iFrameURL.href.includes('embeddedSign')) {
        // Start the initialization timeout because this is
        // embedded signing.
        this._startInitTimeout();
      }
    }
    /**
     * @event HelloSign#error
     * @type {Object}
     * @property {string} signatureId
     * @property {number} code
     */

    /**
     * Called when the app encountered an error.
     *
     * @emits HelloSign#error
     * @param {Object} payload
     * @private
     */

  }, {
    key: "_appDidError",
    value: function _appDidError(payload) {
      _debug.default.error('app encountered an error with code:', payload.code);

      this.emit(_settings.default.events.ERROR, payload);
    }
    /**
     * @event HelloSign#ready
     * @type {Object}
     * @property {string} signatureId
     */

    /**
     * Called when the app was initialized.
     *
     * @emits HelloSign#ready
     * @param {Object} payload
     * @private
     */

  }, {
    key: "_appDidInitialize",
    value: function _appDidInitialize(payload) {
      _debug.default.info('app was initialized');

      this._isReady = true;

      this._sendConfigurationMessage();

      this._clearInitTimeout();

      this.emit(_settings.default.events.READY, payload);
    }
    /**
     * Called when the app requested domain verification.
     *
     * @param {Object} payload
     * @param {string} payload.token
     * @private
     */

  }, {
    key: "_appDidRequestDomainVerification",
    value: function _appDidRequestDomainVerification(_ref) {
      var token = _ref.token;

      _debug.default.info('app requested domain verification', token);

      this._sendDomainVerificationMessage(token);
    }
    /**
     * @event HelloSign#message
     * @type {Object}
     * @property {string} type
     * @property {?Object} payload
     */

    /**
     * Called when HelloSign Embedded receives a cross-origin
     * window message.
     *
     * @emits HelloSign#message
     * @param {MessageEvent} evt
     * @private
     */

  }, {
    key: "_appDidSendMessage",
    value: function _appDidSendMessage(_ref2) {
      var data = _ref2.data,
          origin = _ref2.origin;

      _debug.default.info('received message', data, origin);

      this.emit(_settings.default.events.MESSAGE, data);

      this._delegateMessage(data);
    }
    /**
     * @event HelloSign#cancel
     */

    /**
     * Called when the user canceled the request.
     *
     * @emits HelloSign#cancel
     * @private
     */

  }, {
    key: "_userDidCancelRequest",
    value: function _userDidCancelRequest() {
      _debug.default.info('user canceled the signature request');

      this.emit(_settings.default.events.CANCEL);
      this.close();
    }
    /**
     * @event HelloSign#createTemplate
     * @type {Object}
     * @property {string} title
     * @property {string} message
     * @property {string[]} signerRoles
     * @property {Object} signatureRequestInfo
     */

    /**
     * Called when the user created the template.
     *
     * @emits HelloSign#createTemplate
     * @param {Object} payload
     * @private
     */

  }, {
    key: "_userDidCreateTemplate",
    value: function _userDidCreateTemplate(payload) {
      _debug.default.info('user created the signature request template');

      this.emit(_settings.default.events.CREATE_TEMPLATE, payload);
    }
    /**
     * @event HelloSign#decline
     * @type {Object}
     * @property {string} signatureId
     * @property {string} reason
     */

    /**
     * Called when the user declined the request.
     *
     * @emits HelloSign#decline
     * @param {Object} payload
     * @private
     */

  }, {
    key: "_userDidDeclineRequest",
    value: function _userDidDeclineRequest(payload) {
      _debug.default.info('user declined the signature request');

      this.emit(_settings.default.events.DECLINE, payload);
    }
    /**
     * @event HelloSign#finish
     */

    /**
     * Called when the user finished the request.
     *
     * @emits HelloSign#finish
     * @private
     */

  }, {
    key: "_userDidFinishRequest",
    value: function _userDidFinishRequest() {
      _debug.default.info('user finished the signature request');

      this.emit(_settings.default.events.FINISH);
      this.close();
    }
    /**
     * @event HelloSign#reassign
     * @type {Object}
     * @property {string} signatureId
     * @property {string} name
     * @property {string} email
     * @property {string} reason
     */

    /**
     * Called when the user reassigned the request.
     *
     * @emits HelloSign#reassign
     * @param {Object} payload
     * @private
     */

  }, {
    key: "_userDidReassignRequest",
    value: function _userDidReassignRequest(payload) {
      _debug.default.info('user reassigned the signature request with reason:', payload.reason);

      this.emit(_settings.default.events.REASSIGN, payload);
    }
    /**
     * @event HelloSign#send
     * @type {Object}
     * @property {string} signatureRequestId
     * @property {string} signatureId
     */

    /**
     * Called when the user sent the request.
     *
     * @emits HelloSign#send
     * @param {Object} payload
     * @private
     */

  }, {
    key: "_userDidSendRequest",
    value: function _userDidSendRequest(payload) {
      _debug.default.info('user sent the signature request');

      this._isSentOrSigned = true;
      this.emit(_settings.default.events.SEND, payload);
    }
    /**
     * @event HelloSign#sign
     * @type {Object}
     * @property {string} signatureId
     */

    /**
     * Called when the user signed the request.
     *
     * @emits HelloSign#sign
     * @param {Object} payload
     * @private
     */

  }, {
    key: "_userDidSignRequest",
    value: function _userDidSignRequest(payload) {
      _debug.default.info('user signed the signature request');

      this._isSentOrSigned = true;
      this.emit(_settings.default.events.SIGN, payload);
    }
    /**
     * Called when the user clicks anything within the
     * HelloSign Embedded boundary.
     *
     * @param {Event} evt
     * @private
     */

  }, {
    key: "_onEmbeddedClick",
    value: function _onEmbeddedClick(evt) {
      var elem = evt.srcElement; // Check if the element that was clicked is the close
      // button.

      if (elem.classList.contains(_settings.default.classNames.MODAL_CLOSE_BTN)) {
        evt.preventDefault(); // If the app is ready but has not yet been sent or
        // signed, close via the app. Otherwise, we force
        // close without notifying the app. This is because
        // the close button can represent a "cancel" or a
        // "close" depdending on the state of the request,
        // but Embedded is not aware of this state. Therefore
        // we send the close request down to the app so that
        // the app can determine the proper close type.

        if (this._isReady && !this._isSentOrSigned) {
          this._sendCancelRequestMessage();
        } else {
          this.close();
        }
      }
    }
    /**
     * Called when the initialization timeout timer completes.
     * Sends an error message to the app and closes HelloSign
     * Embedded.
     *
     * @private
     */

  }, {
    key: "_onInitTimeout",
    value: function _onInitTimeout() {
      _debug.default.error('app failed to initialize before timeout'); // Display error to the user instead of just closing the
      // signature request window.
      // eslint-disable-next-line no-alert


      alert('Something went wrong when preparing your signature request. Please try again.');

      this._sendInitializationErrorMessage();

      this._clearInitTimeout();

      this.close();
    }
    /**
     * Called when the user navigates away from the page in
     * some way. Although modern browsers will likely block
     * this message, the browser may still natively confirm
     * with the user if they want to leave or stay on the
     * page.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
     * @param {BeforeUnloadEvent} evt
     * @private
     */

  }, {
    key: "_onBeforeUnload",
    value: function _onBeforeUnload(evt) {
      if (this._isReady) {
        /* eslint-disable-next-line no-restricted-globals, no-alert */
        if (!confirm('Are you sure you want to close this signature request? You will lose your changes.')) {
          evt.preventDefault(); // Chrome requires returnValue to be set.

          evt.returnValue = '';
        }
      }
    }
    /**
     * Called when a message is received by the window.
     * Validates the message origin and delegates to the
     * appropriate method based on the message type.
     *
     * @param {MessageEvent} evt
     * @private
     */

  }, {
    key: "_onMessage",
    value: function _onMessage(message) {
      var strippedOrigin = message.origin.replace(/\/$/, '');

      if (strippedOrigin === this._iFrameURL.origin) {
        if (_typeof(message.data) === 'object') {
          this._appDidSendMessage(message);
        }
      }
    }
    /**
     * Called when a message is received by the window.
     * Validates the message origin and delegates to the
     * appropriate method based on the message type.
     *
     * @param {HelloSignMessage} msg
     * @private
     */

  }, {
    key: "_delegateMessage",
    value: function _delegateMessage(_ref3) {
      var type = _ref3.type,
          payload = _ref3.payload;

      switch (type) {
        case _settings.default.messages.APP_ERROR:
          this._appDidError(payload);

          break;

        case _settings.default.messages.APP_INITIALIZE:
          this._appDidInitialize(payload);

          break;

        case _settings.default.messages.APP_VERIFY_DOMAIN_REQUEST:
          this._appDidRequestDomainVerification(payload);

          break;

        case _settings.default.messages.USER_CANCEL_REQUEST:
          this._userDidCancelRequest();

          break;

        case _settings.default.messages.USER_CREATE_TEMPLATE:
          this._userDidCreateTemplate(payload);

          break;

        case _settings.default.messages.USER_DECLINE_REQUEST:
          this._userDidDeclineRequest(payload);

          break;

        case _settings.default.messages.USER_FINISH_REQUEST:
          this._userDidFinishRequest();

          break;

        case _settings.default.messages.USER_REASSIGN_REQUEST:
          this._userDidReassignRequest(payload);

          break;

        case _settings.default.messages.USER_SEND_REQUEST:
          this._userDidSendRequest(payload);

          break;

        case _settings.default.messages.USER_SIGN_REQUEST:
          this._userDidSignRequest(payload);

          break;

        default:
          // Unhandled message.
          _debug.default.warn('unhandled cross-origin window message', type);

      }
    }
    /**
     * @event HelloSign#open
     * @type {Object}
     * @property {string} url
     * @property {string} iFrameUrl
     */

    /**
     * @typedef {Object} HelloSignOptions
     * @property {boolean} [allowCancel=true]
     * @property {string} [clientId]
     * @property {HTMLElement} [container]
     * @property {boolean} [debug=false]
     * @property {boolean} [hideHeader=false]
     * @property {string} [locale="en_US"]
     * @property {string} [redirectTo]
     * @property {string} [requestingEmail]
     * @property {boolean} [skipDomainVerification=false]
     * @property {boolean} [testMode=false]
     * @property {number} [timeout=30000]
     * @property {Object} [whiteLabeling]
     */

    /**
     * Opens the url in HelloSign Embedded.
     *
     * @emits HelloSign#open
     * @param {string} url
     * @param {HelloSignOptions} [opts={}]
     * @public
     */

  }, {
    key: "open",
    value: function open(url) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _debug.default.info('open()', url, opts); // Close if embedded is already open.


      if (this._isOpen) {
        this.close();
      }

      this._config = _objectSpread({}, _defaults.default, this._baseConfig, opts); // Check if container is valid.

      if (this._config.container) {
        if (!(this._config.container instanceof HTMLElement)) {
          throw new TypeError('"container" must be an element');
        }
      }

      this._updateFrameUrl(url);

      this._appendMarkup();

      this._maybeStartInitTimeout();

      this._isOpen = true;
      window.addEventListener('message', this._onMessage);
      window.addEventListener('beforeunload', this._onBeforeUnload);
      this.emit(_settings.default.events.OPEN, {
        url: this._iFrameURL.href
      });
    }
    /**
     * @event HelloSign#close
     */

    /**
     * Closes the HelloSign Embeded window.
     *
     * @emits HelloSign#close
     * @public
     */

  }, {
    key: "close",
    value: function close() {
      _debug.default.info('close()'); // It's already closed!


      if (!this._isOpen) {
        return;
      }

      this._clearInitTimeout();

      this._clearMarkup();

      this._baseEl.removeEventListener('click', this._onEmbeddedClick);

      this._config = null;
      this._baseEl = null;
      this._iFrameEl = null;
      this._iFrameURL = null;
      this._isOpen = false;
      this._isReady = false;
      this._isSentOrSigned = false;
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('beforeunload', this._onBeforeUnload);
      this.emit(_settings.default.events.CLOSE);
    }
    /**
     * Overrides tiny-emitter's "emit" method.
     *
     * @see https://www.npmjs.com/package/tiny-emitter
     * @param {string} name
     * @param {any} [data]
     * @override
     */

  }, {
    key: "emit",
    value: function emit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _debug.default.info.apply(_debug.default, ['emit()'].concat(args));

      (_get2 = _get(_getPrototypeOf(HelloSign.prototype), "emit", this)).call.apply(_get2, [this].concat(args));
    }
    /**
     * @returns {?HTMLElement}
     * @public
     */

  }, {
    key: "element",
    get: function get() {
      return this._baseEl;
    }
    /**
     * @returns {?HTMLElement}
     * @public
     */

  }, {
    key: "iFrame",
    get: function get() {
      return this._iFrameEl;
    }
    /**
     * @returns {boolean}
     * @public
     */

  }, {
    key: "isOpen",
    get: function get() {
      return this._isOpen;
    }
    /**
     * @returns {boolean}
     * @public
     */

  }, {
    key: "isReady",
    get: function get() {
      return this._isReady;
    }
  }]);

  return HelloSign;
}(_tinyEmitter.default);

_defineProperty(HelloSign, "classNames", _settings.default.classNames);

_defineProperty(HelloSign, "events", _settings.default.events);

_defineProperty(HelloSign, "locales", _settings.default.locales);

_defineProperty(HelloSign, "messages", _settings.default.messages);

_defineProperty(HelloSign, "version", "2.5.0");

var _default = HelloSign;
exports.default = _default;

/***/ }),

/***/ "./src/sass/embedded.scss":
/*!********************************!*\
  !*** ./src/sass/embedded.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./embedded.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/embedded.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * HelloSign Embedded class names.
 *
 * @enum {string}
 * @readonly
 */
var classNames = {
  BASE: 'x-hellosign-embedded',
  BASE_IN_MODAL: 'x-hellosign-embedded--in-modal',
  IFRAME: 'x-hellosign-embedded__iframe',
  MODAL_CLOSE: 'x-hellosign-embedded__modal-close',
  MODAL_CLOSE_BTN: 'x-hellosign-embedded__modal-close-button',
  MODAL_CONTENT: 'x-hellosign-embedded__modal-content',
  MODAL_SCREEN: 'x-hellosign-embedded__modal-screen'
};
/**
 * HelloSign Embedded events.
 *
 * @enum {string}
 * @readonly
 */

var events = {
  ERROR: 'error',
  SEND: 'send',
  CANCEL: 'cancel',
  CLOSE: 'close',
  CREATE_TEMPLATE: 'createTemplate',
  DECLINE: 'decline',
  FINISH: 'finish',
  MESSAGE: 'message',
  OPEN: 'open',
  READY: 'ready',
  REASSIGN: 'reassign',
  SIGN: 'sign'
};
/**
 * HelloSign Embedded iFrame properties.
 *
 * @enum {string}
 * @readonly
 */

var iframe = {
  NAME: 'x-hellosign-embedded'
};
/**
 * HelloSign Embedded supported locales.
 *
 * @enum {string}
 * @readonly
 */

var locales = {
  DA_DK: 'da_DK',
  // Danish (Denmark)
  DE_DE: 'de_DE',
  // German (Germany)
  EN_US: 'en_US',
  // English (United States)
  ES_ES: 'es_ES',
  // Spanish (Spain)
  ES_MX: 'es_MX',
  // Spanish (Mexico)
  FR_FR: 'fr_FR',
  // French (France)
  IT_IT: 'it_IT',
  // Italian (Italy)
  JA_JP: 'ja_JP',
  // Japanese (Japan)
  NL_NL: 'nl_NL',
  // Dutch (Netherlands)
  PL_PL: 'pl_PL',
  // Polish (Poland)
  PT_BR: 'pt_BR',
  // Portuguese (Brazil)
  SV_SE: 'sv_SE',
  // Swedish (Sweden)
  ZH_CN: 'zh_CN' // Chinese (Simplified)

};
/**
 * HelloSign Embedded cross-origin window messages.
 *
 * @enum {string}
 * @readonly
 */

var messages = {
  APP_CONFIGURE: 'hellosign:configure',
  APP_ERROR: 'hellosign:error',
  APP_INITIALIZE: 'hellosign:initialize',
  APP_VERIFY_DOMAIN_REQUEST: 'hellosign:verifyDomainRequest',
  APP_VERIFY_DOMAIN_RESPONSE: 'hellosign:verifyDomainResponse',
  USER_CANCEL_REQUEST: 'hellosign:userCancelRequest',
  USER_CREATE_TEMPLATE: 'hellosign:userCreateTemplate',
  USER_DECLINE_REQUEST: 'hellosign:userDeclineRequest',
  USER_FINISH_REQUEST: 'hellosign:userFinishRequest',
  USER_REASSIGN_REQUEST: 'hellosign:userReassignRequest',
  USER_SEND_REQUEST: 'hellosign:userSendRequest',
  USER_SIGN_REQUEST: 'hellosign:userSignRequest'
};
var _default = {
  classNames: classNames,
  events: events,
  iframe: iframe,
  locales: locales,
  messages: messages
};
exports.default = _default;

/***/ }),

/***/ "./src/utils/debug.js":
/*!****************************!*\
  !*** ./src/utils/debug.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _debug = _interopRequireDefault(__webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * To enable debug messages, enter the following into your
 * developer tools console:
 *
 *   localStorage.debug = 'hellosign-embedded:*';
 *
 * This will surface all debug messages under the
 * "hellosign:" namespace.
 */
var info = (0, _debug.default)("".concat("hellosign-embedded", ":info"));
var warn = (0, _debug.default)("".concat("hellosign-embedded", ":warn"));
var error = (0, _debug.default)("".concat("hellosign-embedded", ":error"));
info.log = console.log.bind(console); // eslint-disable-line no-console

warn.log = console.warn.bind(console); // eslint-disable-line no-console

var _default = {
  info: info,
  warn: warn,
  error: error
};
exports.default = _default;

/***/ }),

/***/ 0:
/*!************************************************************************************************!*\
  !*** multi url-polyfill url-search-params-polyfill ./src/sass/embedded.scss ./src/embedded.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! url-polyfill */"./node_modules/url-polyfill/url-polyfill.js");
__webpack_require__(/*! url-search-params-polyfill */"./node_modules/url-search-params-polyfill/index.js");
__webpack_require__(/*! ./src/sass/embedded.scss */"./src/sass/embedded.scss");
module.exports = __webpack_require__(/*! ./src/embedded.js */"./src/embedded.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IZWxsb1NpZ24vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0hlbGxvU2lnbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL1RlbXBsYXRlVGFnL1RlbXBsYXRlVGFnLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvVGVtcGxhdGVUYWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9jb2RlQmxvY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9jb21tYUxpc3RzL2NvbW1hTGlzdHMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9jb21tYUxpc3RzL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvY29tbWFMaXN0c0FuZC9jb21tYUxpc3RzQW5kLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvY29tbWFMaXN0c0FuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL2NvbW1hTGlzdHNPci9jb21tYUxpc3RzT3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9jb21tYUxpc3RzT3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9odG1sL2h0bWwuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9odG1sL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9pbmxpbmVBcnJheVRyYW5zZm9ybWVyL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvaW5saW5lQXJyYXlUcmFuc2Zvcm1lci9pbmxpbmVBcnJheVRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvaW5saW5lTGlzdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9pbmxpbmVMaXN0cy9pbmxpbmVMaXN0cy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL29uZUxpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lL29uZUxpbmUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL29uZUxpbmVDb21tYUxpc3RzL29uZUxpbmVDb21tYUxpc3RzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvb25lTGluZUNvbW1hTGlzdHNBbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c0FuZC9vbmVMaW5lQ29tbWFMaXN0c0FuZC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL29uZUxpbmVDb21tYUxpc3RzT3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c09yL29uZUxpbmVDb21tYUxpc3RzT3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvb25lTGluZUlubGluZUxpc3RzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvb25lTGluZVRyaW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lVHJpbS9vbmVMaW5lVHJpbS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIvcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyL3JlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lci9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9zYWZlSHRtbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3NhZmVIdG1sL3NhZmVIdG1sLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc291cmNlL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3BsaXRTdHJpbmdUcmFuc2Zvcm1lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXIvc3BsaXRTdHJpbmdUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3N0cmlwSW5kZW50L2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3RyaXBJbmRlbnQvc3RyaXBJbmRlbnQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9zdHJpcEluZGVudFRyYW5zZm9ybWVyL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3RyaXBJbmRlbnRUcmFuc2Zvcm1lci9zdHJpcEluZGVudFRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3RyaXBJbmRlbnRzL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3RyaXBJbmRlbnRzL3N0cmlwSW5kZW50cy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3RyaW1SZXN1bHRUcmFuc2Zvcm1lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3RyaW1SZXN1bHRUcmFuc2Zvcm1lci90cmltUmVzdWx0VHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLWlzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWdleHAtZXhlYy1hYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zYW1lLXZhbHVlLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctY29udGV4dC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctd3MuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL3NyYy9zYXNzL2VtYmVkZGVkLnNjc3MiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvZGVidWcvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL3VybC1wb2x5ZmlsbC91cmwtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vc3JjL2RlZmF1bHRzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL3NyYy9lbWJlZGRlZC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9zcmMvc2Fzcy9lbWJlZGRlZC5zY3NzPzk4ZDkiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vc3JjL3NldHRpbmdzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL3NyYy91dGlscy9kZWJ1Zy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyYW5zZm9ybWVycyIsImV4cHJlc3Npb25zIiwic3RyaW5ncyIsIkFycmF5IiwidHJhbnNmb3JtZXIiLCJwcmV2aW91c1RhZyIsInRlbXBsYXRlIiwic3Vic3RpdHV0aW9ucyIsInJlc3VsdFNvRmFyIiwicmVtYWluaW5nUGFydCIsInN1YnN0aXR1dGlvbiIsInN0ciIsImNiIiwidHJhbnNmb3JtIiwiZW5kUmVzdWx0IiwiY29tbWFMaXN0cyIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJzZXBhcmF0b3IiLCJjb21tYUxpc3RzQW5kIiwiY29uanVuY3Rpb24iLCJjb21tYUxpc3RzT3IiLCJodG1sIiwic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsImRlZmF1bHRzIiwic2VyaWFsIiwib3B0cyIsIm9uU3Vic3RpdHV0aW9uIiwiYXJyYXlMZW5ndGgiLCJpbmRlbnQiLCJzZXBhcmF0b3JJbmRleCIsImlubGluZUxpc3RzIiwib25lTGluZSIsInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsIm9uZUxpbmVDb21tYUxpc3RzIiwib25lTGluZUNvbW1hTGlzdHNBbmQiLCJvbmVMaW5lQ29tbWFMaXN0c09yIiwib25lTGluZUlubGluZUxpc3RzIiwib25lTGluZVRyaW0iLCJpc1ZhbGlkVmFsdWUiLCJ4IiwiTnVtYmVyIiwicmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lciIsIm9uRW5kUmVzdWx0IiwicmVwbGFjZVdoYXQiLCJyZXBsYWNlV2l0aCIsInJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciIsIm9uU3RyaW5nIiwicmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIiwic2FmZUh0bWwiLCJzcGxpdEJ5Iiwic3RyaXBJbmRlbnQiLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwidHlwZSIsIm1hdGNoIiwiZWwiLCJyZWdleHAiLCJzdHJpcEluZGVudHMiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJzaWRlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInMiLCJtIiwiaCIsImQiLCJ3IiwieSIsInZhbCIsIm9wdGlvbnMiLCJwYXJzZSIsImlzTmFOIiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsIkVycm9yIiwiU3RyaW5nIiwiZXhlYyIsIm4iLCJwYXJzZUZsb2F0IiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJtcyIsIm1zQWJzIiwiTWF0aCIsImFicyIsInJvdW5kIiwicGx1cmFsIiwibmFtZSIsImlzUGx1cmFsIiwibG9nIiwiZm9ybWF0QXJncyIsInNhdmUiLCJsb2FkIiwidXNlQ29sb3JzIiwic3RvcmFnZSIsImxvY2Fsc3RvcmFnZSIsImNvbG9ycyIsIndpbmRvdyIsInByb2Nlc3MiLCJfX253anMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiV2Via2l0QXBwZWFyYW5jZSIsImNvbnNvbGUiLCJmaXJlYnVnIiwiZXhjZXB0aW9uIiwidGFibGUiLCJwYXJzZUludCIsIlJlZ0V4cCIsIiQxIiwiYXJncyIsIm5hbWVzcGFjZSIsImh1bWFuaXplIiwiZGlmZiIsImMiLCJjb2xvciIsInNwbGljZSIsImluZGV4IiwibGFzdEMiLCJyZXBsYWNlIiwibmFtZXNwYWNlcyIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZXJyb3IiLCJyIiwiZ2V0SXRlbSIsImVudiIsIkRFQlVHIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImZvcm1hdHRlcnMiLCJqIiwidiIsIm1lc3NhZ2UiLCJzZXR1cCIsImNyZWF0ZURlYnVnIiwiZGVidWciLCJkZWZhdWx0IiwiY29lcmNlIiwiZGlzYWJsZSIsImVuYWJsZSIsImVuYWJsZWQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImluc3RhbmNlcyIsIm5hbWVzIiwic2tpcHMiLCJzZWxlY3RDb2xvciIsImhhc2giLCJjaGFyQ29kZUF0IiwicHJldlRpbWUiLCJzZWxmIiwiY3VyciIsIkRhdGUiLCJwcmV2IiwidW5zaGlmdCIsImZvcm1hdCIsImZvcm1hdHRlciIsImNhbGwiLCJsb2dGbiIsImFwcGx5IiwiZGVzdHJveSIsImV4dGVuZCIsImluaXQiLCJpbmRleE9mIiwiZGVsaW1pdGVyIiwibmV3RGVidWciLCJzcGxpdCIsImxlbiIsInN1YnN0ciIsImluc3RhbmNlIiwidG9OYW1lc3BhY2UiLCJ0ZXN0Iiwic3Vic3RyaW5nIiwic3RhY2siLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZSIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJhcmd1bWVudHMiLCJJdGVtIiwiYXJyYXkiLCJwcm90b3R5cGUiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiY3NzIiwibG9jYXRpb24iLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwiY3VycmVudERpciIsInBhdGhuYW1lIiwiZml4ZWRDc3MiLCJmdWxsTWF0Y2giLCJvcmlnVXJsIiwidW5xdW90ZWRPcmlnVXJsIiwidHJpbSIsIm8iLCJuZXdVcmwiLCJFIiwiY2FsbGJhY2siLCJjdHgiLCJmbiIsImxpc3RlbmVyIiwiXyIsInNsaWNlIiwiZXZ0QXJyIiwiZXZ0cyIsImxpdmVFdmVudHMiLCJUaW55RW1pdHRlciIsImdsb2JhbCIsImNoZWNrSWZJdGVyYXRvcklzU3VwcG9ydGVkIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJpdGVyYXRvclN1cHBvcnRlZCIsImNyZWF0ZUl0ZXJhdG9yIiwiaXRlbXMiLCJuZXh0IiwidmFsdWUiLCJzaGlmdCIsImRvbmUiLCJzZXJpYWxpemVQYXJhbSIsImRlc2VyaWFsaXplUGFyYW0iLCJkZWNvZGVVUklDb21wb25lbnQiLCJwb2x5ZmlsbFVSTFNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaFN0cmluZyIsImRlZmluZVByb3BlcnR5Iiwid3JpdGFibGUiLCJ0eXBlb2ZTZWFyY2hTdHJpbmciLCJfZnJvbVN0cmluZyIsIl90aGlzIiwiYXBwZW5kIiwiZW50cnkiLCJUeXBlRXJyb3IiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvIiwiX2VudHJpZXMiLCJkZWxldGUiLCJnZXQiLCJnZXRBbGwiLCJoYXMiLCJzZXQiLCJ0aGlzQXJnIiwiZW50cmllcyIsInZhbHVlcyIsInNlYXJjaEFycmF5Iiwic29ydCIsImEiLCJiIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGUiLCJjaGVja0lmVVJMSXNTdXBwb3J0ZWQiLCJ1IiwiVVJMIiwiaHJlZiIsInNlYXJjaFBhcmFtcyIsInBvbHlmaWxsVVJMIiwiX1VSTCIsInVybCIsImJhc2UiLCJkb2MiLCJiYXNlRWxlbWVudCIsImltcGxlbWVudGF0aW9uIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImVyciIsImFuY2hvckVsZW1lbnQiLCJib2R5Iiwic2VhcmNoIiwiZW5hYmxlU2VhcmNoVXBkYXRlIiwiZW5hYmxlU2VhcmNoUGFyYW1zVXBkYXRlIiwibWV0aG9kTmFtZSIsIm1ldGhvZCIsImxpbmtVUkxXaXRoQW5jaG9yQXR0cmlidXRlIiwiYXR0cmlidXRlTmFtZSIsIl9hbmNob3JFbGVtZW50IiwiX3VwZGF0ZVNlYXJjaFBhcmFtcyIsImRlZmluZVByb3BlcnRpZXMiLCJleHBlY3RlZFBvcnQiLCJhZGRQb3J0VG9PcmlnaW4iLCJwb3J0IiwiaG9zdG5hbWUiLCJjcmVhdGVPYmplY3RVUkwiLCJibG9iIiwicmV2b2tlT2JqZWN0VVJMIiwiZ2V0T3JpZ2luIiwic2V0SW50ZXJ2YWwiLCJvcmlnaW4iLCJuYXRpdmVVUkxTZWFyY2hQYXJhbXMiLCJpc1N1cHBvcnRPYmplY3RDb25zdHJ1Y3RvciIsImRlY29kZXNQbHVzZXNDb3JyZWN0bHkiLCJfX1VSTFNlYXJjaFBhcmFtc19fIiwiZW5jb2Rlc0FtcGVyc2FuZHNDb3JyZWN0bHkiLCJhbXBlcnNhbmRUZXN0IiwiVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwiLCJpdGVyYWJsZSIsInBhcnNlVG9EaWN0IiwiYXBwZW5kVG8iLCJkaWN0IiwicXVlcnkiLCJlbmNvZGUiLCJmb3JTdXJlVXNlUG9seWZpbGwiLCJ1c2VQcm94eSIsIlByb3h5IiwiY29uc3RydWN0IiwidGFyZ2V0IiwiVVNQUHJvdG8iLCJwb2x5ZmlsbCIsImdldE93blByb3BlcnR5TmFtZXMiLCJrIiwibWFrZUl0ZXJhdG9yIiwiZGVjb2RlIiwiYXJyIiwicGFpcnMiLCJnIiwiRnVuY3Rpb24iLCJhbGxvd0NhbmNlbCIsImxvY2FsZSIsInNldHRpbmdzIiwibG9jYWxlcyIsIkVOX1VTIiwic2tpcERvbWFpblZlcmlmaWNhdGlvbiIsInRlc3RNb2RlIiwiSGVsbG9TaWduIiwib2JqIiwiX29uRW1iZWRkZWRDbGljayIsImJpbmQiLCJfb25Jbml0VGltZW91dCIsIl9vbkJlZm9yZVVubG9hZCIsIl9vbk1lc3NhZ2UiLCJpbmZvIiwiX2Jhc2VDb25maWciLCJwYXJhbXMiLCJfY29uZmlnIiwiY2xpZW50SWQiLCJmaW5hbEJ1dHRvblRleHQiLCJpbmNsdWRlcyIsImhpZGVIZWFkZXIiLCJyZWRpcmVjdFRvIiwicmVxdWVzdGluZ0VtYWlsIiwid2hpdGVMYWJlbGluZyIsIl9fUEtHX1ZFUlNJT05fXyIsImZyYW1lVVJMIiwiX2FwcGx5Q2xpZW50SWQiLCJfYXBwbHlEZWJ1ZyIsIl9hcHBseUZpbmFsQnV0dG9uVGV4dCIsIl9hcHBseUhpZGVIZWFkZXIiLCJfYXBwbHlMb2NhbGUiLCJfYXBwbHlQYXJlbnRVUkwiLCJfYXBwbHlSZWRpcmVjdFRvIiwiX2FwcGx5UmVxdWVzdGluZ0VtYWlsIiwiX2FwcGx5VGVzdE1vZGUiLCJfYXBwbHlVeFZlcnNpb24iLCJfYXBwbHlWZXJzaW9uIiwiX2FwcGx5V2hpdGVMYWJlbGluZyIsImZyYW1lUGFyYW1zIiwiX2dldEZyYW1lUGFyYW1zIiwiX2lGcmFtZVVSTCIsImVsZW0iLCJjb250YWluZXIiLCJpbm5lckhUTUwiLCJjbGFzc05hbWVzIiwiQkFTRSIsIklGUkFNRSIsImlmcmFtZSIsIk5BTUUiLCJCQVNFX0lOX01PREFMIiwiTU9EQUxfU0NSRUVOIiwiTU9EQUxfQ09OVEVOVCIsIk1PREFMX0NMT1NFIiwiTU9EQUxfQ0xPU0VfQlROIiwiZmlyc3RDaGlsZCIsIl9iYXNlRWwiLCJfcmVuZGVyTWFya3VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9pRnJhbWVFbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJtc2ciLCJ0YXJnZXRPcmlnaW4iLCJ0YXJnZXRXaW5kb3ciLCJjb250ZW50V2luZG93IiwicG9zdE1lc3NhZ2UiLCJfc2VuZE1lc3NhZ2UiLCJtZXNzYWdlcyIsIlVTRVJfQ0FOQ0VMX1JFUVVFU1QiLCJBUFBfQ09ORklHVVJFIiwicGF5bG9hZCIsInRva2VuIiwiQVBQX1ZFUklGWV9ET01BSU5fUkVTUE9OU0UiLCJBUFBfRVJST1IiLCJfaW5pdFRpbWVvdXQiLCJfY2xlYXJJbml0VGltZW91dCIsIl9zdGFydEluaXRUaW1lb3V0IiwiY29kZSIsImV2ZW50cyIsIkVSUk9SIiwiX2lzUmVhZHkiLCJfc2VuZENvbmZpZ3VyYXRpb25NZXNzYWdlIiwiUkVBRFkiLCJfc2VuZERvbWFpblZlcmlmaWNhdGlvbk1lc3NhZ2UiLCJNRVNTQUdFIiwiX2RlbGVnYXRlTWVzc2FnZSIsIkNBTkNFTCIsImNsb3NlIiwiQ1JFQVRFX1RFTVBMQVRFIiwiREVDTElORSIsIkZJTklTSCIsInJlYXNvbiIsIlJFQVNTSUdOIiwiX2lzU2VudE9yU2lnbmVkIiwiU0VORCIsIlNJR04iLCJldnQiLCJzcmNFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwcmV2ZW50RGVmYXVsdCIsIl9zZW5kQ2FuY2VsUmVxdWVzdE1lc3NhZ2UiLCJhbGVydCIsIl9zZW5kSW5pdGlhbGl6YXRpb25FcnJvck1lc3NhZ2UiLCJjb25maXJtIiwicmV0dXJuVmFsdWUiLCJzdHJpcHBlZE9yaWdpbiIsIl9hcHBEaWRTZW5kTWVzc2FnZSIsIl9hcHBEaWRFcnJvciIsIkFQUF9JTklUSUFMSVpFIiwiX2FwcERpZEluaXRpYWxpemUiLCJBUFBfVkVSSUZZX0RPTUFJTl9SRVFVRVNUIiwiX2FwcERpZFJlcXVlc3REb21haW5WZXJpZmljYXRpb24iLCJfdXNlckRpZENhbmNlbFJlcXVlc3QiLCJVU0VSX0NSRUFURV9URU1QTEFURSIsIl91c2VyRGlkQ3JlYXRlVGVtcGxhdGUiLCJVU0VSX0RFQ0xJTkVfUkVRVUVTVCIsIl91c2VyRGlkRGVjbGluZVJlcXVlc3QiLCJVU0VSX0ZJTklTSF9SRVFVRVNUIiwiX3VzZXJEaWRGaW5pc2hSZXF1ZXN0IiwiVVNFUl9SRUFTU0lHTl9SRVFVRVNUIiwiX3VzZXJEaWRSZWFzc2lnblJlcXVlc3QiLCJVU0VSX1NFTkRfUkVRVUVTVCIsIl91c2VyRGlkU2VuZFJlcXVlc3QiLCJVU0VSX1NJR05fUkVRVUVTVCIsIl91c2VyRGlkU2lnblJlcXVlc3QiLCJ3YXJuIiwiX2lzT3BlbiIsIkhUTUxFbGVtZW50IiwiX3VwZGF0ZUZyYW1lVXJsIiwiX2FwcGVuZE1hcmt1cCIsIl9tYXliZVN0YXJ0SW5pdFRpbWVvdXQiLCJPUEVOIiwiX2NsZWFyTWFya3VwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNMT1NFIiwiRW1pdHRlciIsIkRBX0RLIiwiREVfREUiLCJFU19FUyIsIkVTX01YIiwiRlJfRlIiLCJJVF9JVCIsIkpBX0pQIiwiTkxfTkwiLCJQTF9QTCIsIlBUX0JSIiwiU1ZfU0UiLCJaSF9DTiIsIl9fUEtHX05BTUVfXyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7OztJQUlxQkEsVztBQUNuQjs7Ozs7O0FBTUEseUJBQTZCO0FBQUE7O0FBQUEsc0NBQWRDLFlBQWM7QUFBZEEsa0JBQWMs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QUFOQSxNQUhhO0FBSWI3QyxTQUFPLEVBQVBBLE9BSmE7QUFLYmtFLFVBQVEsRUFBUkE7QUFMYSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGZjs7OztBQVZBOzs7Ozs7Ozs7QUFZQSxJQUFNdkQsSUFBSSxHQUFHLDhCQUFTeUksb0JBQVQsV0FBYjtBQUNBLElBQU12QixJQUFJLEdBQUcsOEJBQVN1QixvQkFBVCxXQUFiO0FBQ0EsSUFBTWxZLEtBQUssR0FBRyw4QkFBU2tZLG9CQUFULFlBQWQ7QUFFQXpJLElBQUksQ0FBQzlSLEdBQUwsR0FBV2lCLE9BQU8sQ0FBQ2pCLEdBQVIsQ0FBWTBSLElBQVosQ0FBaUJ6USxPQUFqQixDQUFYLEMsQ0FBc0M7O0FBQ3RDK1gsSUFBSSxDQUFDaFosR0FBTCxHQUFXaUIsT0FBTyxDQUFDK1gsSUFBUixDQUFhdEgsSUFBYixDQUFrQnpRLE9BQWxCLENBQVgsQyxDQUF1Qzs7ZUFFeEI7QUFDYjZRLE1BQUksRUFBSkEsSUFEYTtBQUVia0gsTUFBSSxFQUFKQSxJQUZhO0FBR2IzVyxPQUFLLEVBQUxBO0FBSGEsQyIsImZpbGUiOiJlbWJlZGRlZC5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhlbGxvU2lnblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIZWxsb1NpZ25cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogQGNsYXNzIFRlbXBsYXRlVGFnXG4gKiBAY2xhc3NkZXNjIENvbnN1bWVzIGEgcGlwZWxpbmUgb2YgY29tcG9zYWJsZSB0cmFuc2Zvcm1lciBwbHVnaW5zIGFuZCBwcm9kdWNlcyBhIHRlbXBsYXRlIHRhZy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVUYWcge1xuICAvKipcbiAgICogY29uc3RydWN0cyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBAY29uc3RydWN0cyBUZW1wbGF0ZVRhZ1xuICAgKiBAcGFyYW0gIHsuLi5PYmplY3R9IFsuLi50cmFuc2Zvcm1lcnNdIC0gYW4gYXJyYXkgb3IgYXJndW1lbnRzIGxpc3Qgb2YgdHJhbnNmb3JtZXJzXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICAgICAgICAgLSBhIHRlbXBsYXRlIHRhZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4udHJhbnNmb3JtZXJzKSB7XG4gICAgLy8gaWYgZmlyc3QgYXJndW1lbnQgaXMgYW4gYXJyYXksIGV4dHJ1ZGUgaXQgYXMgYSBsaXN0IG9mIHRyYW5zZm9ybWVyc1xuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KHRyYW5zZm9ybWVyc1swXSkpIHtcbiAgICAgIHRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVyc1swXTtcbiAgICB9XG5cbiAgICAvLyBpZiBhbnkgdHJhbnNmb3JtZXJzIGFyZSBmdW5jdGlvbnMsIHRoaXMgbWVhbnMgdGhleSBhcmUgbm90IGluaXRpYXRlZCAtIGF1dG9tYXRpY2FsbHkgaW5pdGlhdGUgdGhlbVxuICAgIHRoaXMudHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLm1hcCh0cmFuc2Zvcm1lciA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRyYW5zZm9ybWVyID09PSAnZnVuY3Rpb24nID8gdHJhbnNmb3JtZXIoKSA6IHRyYW5zZm9ybWVyO1xuICAgIH0pO1xuXG4gICAgLy8gcmV0dXJuIGFuIEVTMjAxNSB0ZW1wbGF0ZSB0YWdcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhbGwgdHJhbnNmb3JtZXJzIHRvIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWdnZWQgd2l0aCB0aGlzIG1ldGhvZC5cbiAgICogSWYgYSBmdW5jdGlvbiBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LCBhc3N1bWVzIHRoZSBmdW5jdGlvbiBpcyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBhbmQgYXBwbGllcyBpdCB0byB0aGUgdGVtcGxhdGUsIHJldHVybmluZyBhIHRlbXBsYXRlIHRhZy5cbiAgICogQHBhcmFtICB7KEZ1bmN0aW9ufFN0cmluZ3xBcnJheTxTdHJpbmc+KX0gc3RyaW5ncyAgICAgICAgLSBFaXRoZXIgYSB0ZW1wbGF0ZSB0YWcgb3IgYW4gYXJyYXkgY29udGFpbmluZyB0ZW1wbGF0ZSBzdHJpbmdzIHNlcGFyYXRlZCBieSBpZGVudGlmaWVyXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmV4cHJlc3Npb25zIC0gT3B0aW9uYWwgbGlzdCBvZiBzdWJzdGl0dXRpb24gdmFsdWVzLlxuICAgKiBAcmV0dXJuIHsoU3RyaW5nfEZ1bmN0aW9uKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIEVpdGhlciBhbiBpbnRlcm1lZGlhcnkgdGFnIGZ1bmN0aW9uIG9yIHRoZSByZXN1bHRzIG9mIHByb2Nlc3NpbmcgdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgdGFnID0gKHN0cmluZ3MsIC4uLmV4cHJlc3Npb25zKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSBpdCBpcyBhIHRlbXBsYXRlIHRhZyBhbmQgcmV0dXJuXG4gICAgICAvLyBhbiBpbnRlcm1lZGlhcnkgdGFnIHRoYXQgcHJvY2Vzc2VzIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUgYWZvcmVtZW50aW9uZWQgdGFnLCBwYXNzaW5nIHRoZVxuICAgICAgLy8gcmVzdWx0IHRvIG91ciB0YWdcbiAgICAgIHJldHVybiB0aGlzLmludGVyaW1UYWcuYmluZCh0aGlzLCBzdHJpbmdzKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgc3RyaW5nLCBqdXN0IHRyYW5zZm9ybSBpdFxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtRW5kUmVzdWx0KHN0cmluZ3MpO1xuICAgIH1cblxuICAgIC8vIGVsc2UsIHJldHVybiBhIHRyYW5zZm9ybWVkIGVuZCByZXN1bHQgb2YgcHJvY2Vzc2luZyB0aGUgdGVtcGxhdGUgd2l0aCBvdXIgdGFnXG4gICAgc3RyaW5ncyA9IHN0cmluZ3MubWFwKHRoaXMudHJhbnNmb3JtU3RyaW5nLmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUVuZFJlc3VsdChcbiAgICAgIHN0cmluZ3MucmVkdWNlKHRoaXMucHJvY2Vzc1N1YnN0aXR1dGlvbnMuYmluZCh0aGlzLCBleHByZXNzaW9ucykpLFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFuIGludGVybWVkaWFyeSB0ZW1wbGF0ZSB0YWcgdGhhdCByZWNlaXZlcyBhIHRlbXBsYXRlIHRhZyBhbmQgcGFzc2VzIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgdGVtcGxhdGUgd2l0aCB0aGUgcmVjZWl2ZWRcbiAgICogdGVtcGxhdGUgdGFnIHRvIG91ciBvd24gdGVtcGxhdGUgdGFnLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICAgICAgIG5leHRUYWcgICAgICAgICAgLSB0aGUgcmVjZWl2ZWQgdGVtcGxhdGUgdGFnXG4gICAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59ICAgdGVtcGxhdGUgICAgICAgICAtIHRoZSB0ZW1wbGF0ZSB0byBwcm9jZXNzXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgLi4uc3Vic3RpdHV0aW9ucyAtIGBzdWJzdGl0dXRpb25zYCBpcyBhbiBhcnJheSBvZiBhbGwgc3Vic3RpdHV0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICogQHJldHVybiB7Kn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gdGhlIGZpbmFsIHByb2Nlc3NlZCB2YWx1ZVxuICAgKi9cbiAgaW50ZXJpbVRhZyhwcmV2aW91c1RhZywgdGVtcGxhdGUsIC4uLnN1YnN0aXR1dGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy50YWdgJHtwcmV2aW91c1RhZyh0ZW1wbGF0ZSwgLi4uc3Vic3RpdHV0aW9ucyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBidWxrIHByb2Nlc3Npbmcgb24gdGhlIHRhZ2dlZCB0ZW1wbGF0ZSwgdHJhbnNmb3JtaW5nIGVhY2ggc3Vic3RpdHV0aW9uIGFuZCB0aGVuXG4gICAqIGNvbmNhdGVuYXRpbmcgdGhlIHJlc3VsdGluZyB2YWx1ZXMgaW50byBhIHN0cmluZy5cbiAgICogQHBhcmFtICB7QXJyYXk8Kj59IHN1YnN0aXR1dGlvbnMgLSBhbiBhcnJheSBvZiBhbGwgcmVtYWluaW5nIHN1YnN0aXR1dGlvbnMgcHJlc2VudCBpbiB0aGlzIHRlbXBsYXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICByZXN1bHRTb0ZhciAgIC0gdGhpcyBpdGVyYXRpb24ncyByZXN1bHQgc3RyaW5nIHNvIGZhclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgcmVtYWluaW5nUGFydCAtIHRoZSB0ZW1wbGF0ZSBjaHVuayBhZnRlciB0aGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgLSB0aGUgcmVzdWx0IG9mIGpvaW5pbmcgdGhpcyBpdGVyYXRpb24ncyBwcm9jZXNzZWQgc3Vic3RpdHV0aW9uIHdpdGggdGhlIHJlc3VsdFxuICAgKi9cbiAgcHJvY2Vzc1N1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgcmVzdWx0U29GYXIsIHJlbWFpbmluZ1BhcnQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnRyYW5zZm9ybVN1YnN0aXR1dGlvbihcbiAgICAgIHN1YnN0aXR1dGlvbnMuc2hpZnQoKSxcbiAgICAgIHJlc3VsdFNvRmFyLFxuICAgICk7XG4gICAgcmV0dXJuICcnLmNvbmNhdChyZXN1bHRTb0Zhciwgc3Vic3RpdHV0aW9uLCByZW1haW5pbmdQYXJ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIHRocm91Z2ggZWFjaCB0cmFuc2Zvcm1lciwgYXBwbHlpbmcgdGhlIHRyYW5zZm9ybWVyJ3MgYG9uU3RyaW5nYCBtZXRob2QgdG8gdGhlIHRlbXBsYXRlXG4gICAqIHN0cmluZ3MgYmVmb3JlIGFsbCBzdWJzdGl0dXRpb25zIGFyZSBwcm9jZXNzZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSAgc3RyIC0gVGhlIGlucHV0IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAtIFRoZSBmaW5hbCByZXN1bHRzIG9mIHByb2Nlc3NpbmcgZWFjaCB0cmFuc2Zvcm1lclxuICAgKi9cbiAgdHJhbnNmb3JtU3RyaW5nKHN0cikge1xuICAgIGNvbnN0IGNiID0gKHJlcywgdHJhbnNmb3JtKSA9PlxuICAgICAgdHJhbnNmb3JtLm9uU3RyaW5nID8gdHJhbnNmb3JtLm9uU3RyaW5nKHJlcykgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3RyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgc3Vic3RpdHV0aW9uIGlzIGVuY291bnRlcmVkLCBpdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIgYW5kIGFwcGxpZXMgdGhlIHRyYW5zZm9ybWVyJ3NcbiAgICogYG9uU3Vic3RpdHV0aW9uYCBtZXRob2QgdG8gdGhlIHN1YnN0aXR1dGlvbi5cbiAgICogQHBhcmFtICB7Kn0gICAgICBzdWJzdGl0dXRpb24gLSBUaGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHBhcmFtICB7U3RyaW5nfSByZXN1bHRTb0ZhciAgLSBUaGUgcmVzdWx0IHVwIHRvIGFuZCBleGNsdWRpbmcgdGhpcyBzdWJzdGl0dXRpb24uXG4gICAqIEByZXR1cm4geyp9ICAgICAgICAgICAgICAgICAgIC0gVGhlIGZpbmFsIHJlc3VsdCBvZiBhcHBseWluZyBhbGwgc3Vic3RpdHV0aW9uIHRyYW5zZm9ybWF0aW9ucy5cbiAgICovXG4gIHRyYW5zZm9ybVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgY29uc3QgY2IgPSAocmVzLCB0cmFuc2Zvcm0pID0+XG4gICAgICB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb25cbiAgICAgICAgPyB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb24ocmVzLCByZXN1bHRTb0ZhcilcbiAgICAgICAgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIsIGFwcGx5aW5nIHRoZSB0cmFuc2Zvcm1lcidzIGBvbkVuZFJlc3VsdGAgbWV0aG9kIHRvIHRoZVxuICAgKiB0ZW1wbGF0ZSBsaXRlcmFsIGFmdGVyIGFsbCBzdWJzdGl0dXRpb25zIGhhdmUgZmluaXNoZWQgcHJvY2Vzc2luZy5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbmRSZXN1bHQgLSBUaGUgcHJvY2Vzc2VkIHRlbXBsYXRlLCBqdXN0IGJlZm9yZSBpdCBpcyByZXR1cm5lZCBmcm9tIHRoZSB0YWdcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgLSBUaGUgZmluYWwgcmVzdWx0cyBvZiBwcm9jZXNzaW5nIGVhY2ggdHJhbnNmb3JtZXJcbiAgICovXG4gIHRyYW5zZm9ybUVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBjb25zdCBjYiA9IChyZXMsIHRyYW5zZm9ybSkgPT5cbiAgICAgIHRyYW5zZm9ybS5vbkVuZFJlc3VsdCA/IHRyYW5zZm9ybS5vbkVuZFJlc3VsdChyZXMpIDogcmVzO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybWVycy5yZWR1Y2UoY2IsIGVuZFJlc3VsdCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vVGVtcGxhdGVUYWcnO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi4vaHRtbCc7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3QgY29tbWFMaXN0cyA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnIH0pLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21tYUxpc3RzO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9jb21tYUxpc3RzJztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzQW5kID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnYW5kJyB9KSxcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFMaXN0c0FuZDtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vY29tbWFMaXN0c0FuZCc7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3QgY29tbWFMaXN0c09yID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnb3InIH0pLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21tYUxpc3RzT3I7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2NvbW1hTGlzdHNPcic7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyIGZyb20gJy4uL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIgZnJvbSAnLi4vcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGh0bWwgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIoJ1xcbicpLFxuICByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyLFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBodG1sO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9odG1sJztcbiIsIi8vIGNvcmVcbmV4cG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuL1RlbXBsYXRlVGFnJztcblxuLy8gdHJhbnNmb3JtZXJzXG5leHBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmV4cG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5leHBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcbmV4cG9ydCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXInO1xuZXhwb3J0IHJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciBmcm9tICcuL3JlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lcic7XG5leHBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuZXhwb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyJztcbmV4cG9ydCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIGZyb20gJy4vcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcic7XG5cbi8vIHRhZ3NcbmV4cG9ydCBjb21tYUxpc3RzIGZyb20gJy4vY29tbWFMaXN0cyc7XG5leHBvcnQgY29tbWFMaXN0c0FuZCBmcm9tICcuL2NvbW1hTGlzdHNBbmQnO1xuZXhwb3J0IGNvbW1hTGlzdHNPciBmcm9tICcuL2NvbW1hTGlzdHNPcic7XG5leHBvcnQgaHRtbCBmcm9tICcuL2h0bWwnO1xuZXhwb3J0IGNvZGVCbG9jayBmcm9tICcuL2NvZGVCbG9jayc7XG5leHBvcnQgc291cmNlIGZyb20gJy4vc291cmNlJztcbmV4cG9ydCBzYWZlSHRtbCBmcm9tICcuL3NhZmVIdG1sJztcbmV4cG9ydCBvbmVMaW5lIGZyb20gJy4vb25lTGluZSc7XG5leHBvcnQgb25lTGluZVRyaW0gZnJvbSAnLi9vbmVMaW5lVHJpbSc7XG5leHBvcnQgb25lTGluZUNvbW1hTGlzdHMgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0cyc7XG5leHBvcnQgb25lTGluZUNvbW1hTGlzdHNPciBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzT3InO1xuZXhwb3J0IG9uZUxpbmVDb21tYUxpc3RzQW5kIGZyb20gJy4vb25lTGluZUNvbW1hTGlzdHNBbmQnO1xuZXhwb3J0IGlubGluZUxpc3RzIGZyb20gJy4vaW5saW5lTGlzdHMnO1xuZXhwb3J0IG9uZUxpbmVJbmxpbmVMaXN0cyBmcm9tICcuL29uZUxpbmVJbmxpbmVMaXN0cyc7XG5leHBvcnQgc3RyaXBJbmRlbnQgZnJvbSAnLi9zdHJpcEluZGVudCc7XG5leHBvcnQgc3RyaXBJbmRlbnRzIGZyb20gJy4vc3RyaXBJbmRlbnRzJztcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG4iLCJjb25zdCBkZWZhdWx0cyA9IHtcbiAgc2VwYXJhdG9yOiAnJyxcbiAgY29uanVuY3Rpb246ICcnLFxuICBzZXJpYWw6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhcnJheSBzdWJzdGl0dXRpb24gdG8gYSBzdHJpbmcgY29udGFpbmluZyBhIGxpc3RcbiAqIEBwYXJhbSAge1N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gJyddIC0gdGhlIGNoYXJhY3RlciB0aGF0IHNlcGFyYXRlcyBlYWNoIGl0ZW1cbiAqIEBwYXJhbSAge1N0cmluZ30gW29wdHMuY29uanVuY3Rpb24gPSAnJ10gIC0gcmVwbGFjZSB0aGUgbGFzdCBzZXBhcmF0b3Igd2l0aCB0aGlzXG4gKiBAcGFyYW0gIHtCb29sZWFufSBbb3B0cy5zZXJpYWwgPSBmYWxzZV0gLSBpbmNsdWRlIHRoZSBzZXBhcmF0b3IgYmVmb3JlIHRoZSBjb25qdW5jdGlvbj8gKE94Zm9yZCBjb21tYSB1c2UtY2FzZSlcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgPSAob3B0cyA9IGRlZmF1bHRzKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgLy8gb25seSBvcGVyYXRlIG9uIGFycmF5c1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN1YnN0aXR1dGlvbikpIHtcbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gc3Vic3RpdHV0aW9uLmxlbmd0aDtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IG9wdHMuc2VwYXJhdG9yO1xuICAgICAgY29uc3QgY29uanVuY3Rpb24gPSBvcHRzLmNvbmp1bmN0aW9uO1xuICAgICAgY29uc3Qgc2VyaWFsID0gb3B0cy5zZXJpYWw7XG4gICAgICAvLyBqb2luIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgaW50byBhIHN0cmluZyB3aGVyZSBlYWNoIGl0ZW0gaXMgc2VwYXJhdGVkIGJ5IHNlcGFyYXRvclxuICAgICAgLy8gYmUgc3VyZSB0byBtYWludGFpbiBpbmRlbnRhdGlvblxuICAgICAgY29uc3QgaW5kZW50ID0gcmVzdWx0U29GYXIubWF0Y2goLyhcXG4/W15cXFNcXG5dKykkLyk7XG4gICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi5qb2luKHNlcGFyYXRvciArIGluZGVudFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24uam9pbihzZXBhcmF0b3IgKyAnICcpO1xuICAgICAgfVxuICAgICAgLy8gaWYgY29uanVuY3Rpb24gaXMgc2V0LCByZXBsYWNlIHRoZSBsYXN0IHNlcGFyYXRvciB3aXRoIGNvbmp1bmN0aW9uLCBidXQgb25seSBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHN1YnN0aXR1dGlvblxuICAgICAgaWYgKGNvbmp1bmN0aW9uICYmIGFycmF5TGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBzZXBhcmF0b3JJbmRleCA9IHN1YnN0aXR1dGlvbi5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xuICAgICAgICBzdWJzdGl0dXRpb24gPVxuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zbGljZSgwLCBzZXBhcmF0b3JJbmRleCkgK1xuICAgICAgICAgIChzZXJpYWwgPyBzZXBhcmF0b3IgOiAnJykgK1xuICAgICAgICAgICcgJyArXG4gICAgICAgICAgY29uanVuY3Rpb24gK1xuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zbGljZShzZXBhcmF0b3JJbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGlubGluZUFycmF5VHJhbnNmb3JtZXI7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2lubGluZUxpc3RzJztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBpbmxpbmVMaXN0cyA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5saW5lTGlzdHM7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmUnO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgb25lTGluZSA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXG4oPzpcXHMqKSkrL2csICcgJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmU7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzJztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgb25lTGluZUNvbW1hTGlzdHMgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJyB9KSxcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXHMrKS9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lQ29tbWFMaXN0cztcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZUNvbW1hTGlzdHNBbmQnO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lQ29tbWFMaXN0c0FuZCA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnLCBjb25qdW5jdGlvbjogJ2FuZCcgfSksXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxzKykvZywgJyAnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb25lTGluZUNvbW1hTGlzdHNBbmQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzT3InO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lQ29tbWFMaXN0c09yID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnb3InIH0pLFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/OlxccyspL2csICcgJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVDb21tYUxpc3RzT3I7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVJbmxpbmVMaXN0cyc7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmVJbmxpbmVMaXN0cyA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXHMrKS9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lSW5saW5lTGlzdHM7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVUcmltJztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmVUcmltID0gbmV3IFRlbXBsYXRlVGFnKFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/OlxcblxccyopL2csICcnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb25lTGluZVRyaW07XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXInO1xuIiwiY29uc3QgaXNWYWxpZFZhbHVlID0geCA9PlxuICB4ICE9IG51bGwgJiYgIU51bWJlci5pc05hTih4KSAmJiB0eXBlb2YgeCAhPT0gJ2Jvb2xlYW4nO1xuXG5jb25zdCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyID0gKCkgPT4gKHtcbiAgb25TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3Vic3RpdHV0aW9uKSkge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi5maWx0ZXIoaXNWYWxpZFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGlzVmFsaWRWYWx1ZShzdWJzdGl0dXRpb24pKSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcjtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcbiIsIi8qKlxuICogUmVwbGFjZXMgdGFicywgbmV3bGluZXMgYW5kIHNwYWNlcyB3aXRoIHRoZSBjaG9zZW4gdmFsdWUgd2hlbiB0aGV5IG9jY3VyIGluIHNlcXVlbmNlc1xuICogQHBhcmFtICB7KFN0cmluZ3xSZWdFeHApfSByZXBsYWNlV2hhdCAtIHRoZSB2YWx1ZSBvciBwYXR0ZXJuIHRoYXQgc2hvdWxkIGJlIHJlcGxhY2VkXG4gKiBAcGFyYW0gIHsqfSAgICAgICAgICAgICAgIHJlcGxhY2VXaXRoIC0gdGhlIHJlcGxhY2VtZW50IHZhbHVlXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgIC0gYSBUZW1wbGF0ZVRhZyB0cmFuc2Zvcm1lclxuICovXG5jb25zdCByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgPSAocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKSA9PiAoe1xuICBvbkVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBpZiAocmVwbGFjZVdoYXQgPT0gbnVsbCB8fCByZXBsYWNlV2l0aCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgcmVxdWlyZXMgYXQgbGVhc3QgMiBhcmd1bWVudHMuJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBlbmRSZXN1bHQucmVwbGFjZShyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcjtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyJztcbiIsImNvbnN0IHJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciA9IChyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpID0+ICh7XG4gIG9uU3RyaW5nKHN0cikge1xuICAgIGlmIChyZXBsYWNlV2hhdCA9PSBudWxsIHx8IHJlcGxhY2VXaXRoID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3JlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciByZXF1aXJlcyBhdCBsZWFzdCAyIGFyZ3VtZW50cy4nLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXI7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcic7XG4iLCJjb25zdCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgPSAocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgaWYgKHJlcGxhY2VXaGF0ID09IG51bGwgfHwgcmVwbGFjZVdpdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIHJlcXVpcmVzIGF0IGxlYXN0IDIgYXJndW1lbnRzLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCB0b3VjaCBpZiBudWxsIG9yIHVuZGVmaW5lZFxuICAgIGlmIChzdWJzdGl0dXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi50b1N0cmluZygpLnJlcGxhY2UocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9zYWZlSHRtbCc7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyIGZyb20gJy4uL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXInO1xuXG5jb25zdCBzYWZlSHRtbCA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcignXFxuJyksXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIsXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbiAgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyKC8mL2csICcmYW1wOycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLzwvZywgJyZsdDsnKSxcbiAgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyKC8+L2csICcmZ3Q7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvXCIvZywgJyZxdW90OycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLycvZywgJyYjeDI3OycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoL2AvZywgJyYjeDYwOycpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc2FmZUh0bWw7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuLi9odG1sJztcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcic7XG4iLCJjb25zdCBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyID0gc3BsaXRCeSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgaWYgKHNwbGl0QnkgIT0gbnVsbCAmJiB0eXBlb2Ygc3BsaXRCeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2Ygc3Vic3RpdHV0aW9uID09PSAnc3RyaW5nJyAmJiBzdWJzdGl0dXRpb24uaW5jbHVkZXMoc3BsaXRCeSkpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLnNwbGl0KHNwbGl0QnkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHNwZWNpZnkgYSBzdHJpbmcgY2hhcmFjdGVyIHRvIHNwbGl0IGJ5LicpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXI7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3N0cmlwSW5kZW50JztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgc3RyaXBJbmRlbnQgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlwSW5kZW50O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbiIsIi8qKlxuICogc3RyaXBzIGluZGVudGF0aW9uIGZyb20gYSB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGUgPSAnaW5pdGlhbCcgLSB3aGV0aGVyIHRvIHJlbW92ZSBhbGwgaW5kZW50YXRpb24gb3IganVzdCBsZWFkaW5nIGluZGVudGF0aW9uLiBjYW4gYmUgJ2FsbCcgb3IgJ2luaXRpYWwnXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgPSAodHlwZSA9ICdpbml0aWFsJykgPT4gKHtcbiAgb25FbmRSZXN1bHQoZW5kUmVzdWx0KSB7XG4gICAgaWYgKHR5cGUgPT09ICdpbml0aWFsJykge1xuICAgICAgLy8gcmVtb3ZlIHRoZSBzaG9ydGVzdCBsZWFkaW5nIGluZGVudGF0aW9uIGZyb20gZWFjaCBsaW5lXG4gICAgICBjb25zdCBtYXRjaCA9IGVuZFJlc3VsdC5tYXRjaCgvXlteXFxTXFxuXSooPz1cXFMpL2dtKTtcbiAgICAgIGNvbnN0IGluZGVudCA9IG1hdGNoICYmIE1hdGgubWluKC4uLm1hdGNoLm1hcChlbCA9PiBlbC5sZW5ndGgpKTtcbiAgICAgIGlmIChpbmRlbnQpIHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChgXi57JHtpbmRlbnR9fWAsICdnbScpO1xuICAgICAgICByZXR1cm4gZW5kUmVzdWx0LnJlcGxhY2UocmVnZXhwLCAnJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW5kUmVzdWx0O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2FsbCcpIHtcbiAgICAgIC8vIHJlbW92ZSBhbGwgaW5kZW50YXRpb24gZnJvbSBlYWNoIGxpbmVcbiAgICAgIHJldHVybiBlbmRSZXN1bHQucmVwbGFjZSgvXlteXFxTXFxuXSsvZ20sICcnKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHR5cGU6ICR7dHlwZX1gKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdHJpcEluZGVudFRyYW5zZm9ybWVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9zdHJpcEluZGVudHMnO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBzdHJpcEluZGVudHMgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIoJ2FsbCcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzdHJpcEluZGVudHM7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG4iLCIvKipcbiAqIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyIHRoYXQgdHJpbXMgd2hpdGVzcGFjZSBvbiB0aGUgZW5kIHJlc3VsdCBvZiBhIHRhZ2dlZCB0ZW1wbGF0ZVxuICogQHBhcmFtICB7U3RyaW5nfSBzaWRlID0gJycgLSBUaGUgc2lkZSBvZiB0aGUgc3RyaW5nIHRvIHRyaW0uIENhbiBiZSAnc3RhcnQnIG9yICdlbmQnIChhbHRlcm5hdGl2ZWx5ICdsZWZ0JyBvciAncmlnaHQnKVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciA9IChzaWRlID0gJycpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChzaWRlID09PSAnJykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC50cmltKCk7XG4gICAgfVxuXG4gICAgc2lkZSA9IHNpZGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChzaWRlID09PSAnc3RhcnQnIHx8IHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbiAgICB9XG5cbiAgICBpZiAoc2lkZSA9PT0gJ2VuZCcgfHwgc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNpZGUgbm90IHN1cHBvcnRlZDogJHtzaWRlfWApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuNScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsInZhciBNQVRDSCA9IHJlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciByZSA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tLRVldKHJlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICByZVtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAhJy8uLydbS0VZXShyZSk7XG4gICAgfSBjYXRjaCAoZikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIHRydWU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmV4ZWMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcblxudmFyIFNQRUNJRVMgPSB3a3MoJ3NwZWNpZXMnKTtcblxudmFyIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gI3JlcGxhY2UgbmVlZHMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbmFtZWQgZ3JvdXBzLlxuICAvLyAjbWF0Y2ggd29ya3MgZmluZSBiZWNhdXNlIGl0IGp1c3QgcmV0dXJuIHRoZSBleGVjIHJlc3VsdHMsIGV2ZW4gaWYgaXQgaGFzXG4gIC8vIGEgXCJncm9wc1wiIHByb3BlcnR5LlxuICB2YXIgcmUgPSAvLi87XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdC5ncm91cHMgPSB7IGE6ICc3JyB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHJldHVybiAnJy5yZXBsYWNlKHJlLCAnJDxhPicpICE9PSAnNyc7XG59KTtcblxudmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPT09IDIgJiYgcmVzdWx0WzBdID09PSAnYScgJiYgcmVzdWx0WzFdID09PSAnYic7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYykge1xuICB2YXIgU1lNQk9MID0gd2tzKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCA/ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgIHZhciByZSA9IC9hLztcbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgIH1cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pIDogdW5kZWZpbmVkO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIChLRVkgPT09ICdyZXBsYWNlJyAmJiAhUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMpIHx8XG4gICAgKEtFWSA9PT0gJ3NwbGl0JyAmJiAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDKVxuICApIHtcbiAgICB2YXIgbmF0aXZlUmVnRXhwTWV0aG9kID0gLy4vW1NZTUJPTF07XG4gICAgdmFyIGZucyA9IGV4ZWMoXG4gICAgICBkZWZpbmVkLFxuICAgICAgU1lNQk9MLFxuICAgICAgJydbS0VZXSxcbiAgICAgIGZ1bmN0aW9uIG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IHJlZ2V4cEV4ZWMpIHtcbiAgICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgICB9XG4gICAgKTtcbiAgICB2YXIgc3RyZm4gPSBmbnNbMF07XG4gICAgdmFyIHJ4Zm4gPSBmbnNbMV07XG5cbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgdGFyZ2V0LCBDKSB7XG4gIHZhciBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICB2YXIgUDtcbiAgaWYgKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2YpIHtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBNQVRDSCA9IHJlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJ2YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGlzRW51bSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXNFbnRyaWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBnZXRLZXlzKE8pO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKSB7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuL19mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIGJ1aWx0aW5FeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuXG4gLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUiwgUykge1xuICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgaWYgKHR5cGVvZiBleGVjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmIChjbGFzc29mKFIpICE9PSAnUmVnRXhwJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbiAgfVxuICByZXR1cm4gYnVpbHRpbkV4ZWMuY2FsbChSLCBTKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWdleHBGbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG5cbnZhciBuYXRpdmVFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuLy8gVGhpcyBhbHdheXMgcmVmZXJzIHRvIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24sIGJlY2F1c2UgdGhlXG4vLyBTdHJpbmcjcmVwbGFjZSBwb2x5ZmlsbCB1c2VzIC4vZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyxcbi8vIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBiZWZvcmUgcGF0Y2hpbmcgdGhlIG1ldGhvZC5cbnZhciBuYXRpdmVSZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xuXG52YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG52YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuXG52YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlMSA9IC9hLyxcbiAgICAgIHJlMiA9IC9iKi9nO1xuICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICBuYXRpdmVFeGVjLmNhbGwocmUyLCAnYScpO1xuICByZXR1cm4gcmUxW0xBU1RfSU5ERVhdICE9PSAwIHx8IHJlMltMQVNUX0lOREVYXSAhPT0gMDtcbn0pKCk7XG5cbi8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbnZhciBOUENHX0lOQ0xVREVEID0gLygpPz8vLmV4ZWMoJycpWzFdICE9PSB1bmRlZmluZWQ7XG5cbnZhciBQQVRDSCA9IFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyB8fCBOUENHX0lOQ0xVREVEO1xuXG5pZiAoUEFUQ0gpIHtcbiAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cikge1xuICAgIHZhciByZSA9IHRoaXM7XG4gICAgdmFyIGxhc3RJbmRleCwgcmVDb3B5LCBtYXRjaCwgaTtcblxuICAgIGlmIChOUENHX0lOQ0xVREVEKSB7XG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeJyArIHJlLnNvdXJjZSArICckKD8hXFxcXHMpJywgcmVnZXhwRmxhZ3MuY2FsbChyZSkpO1xuICAgIH1cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZVtMQVNUX0lOREVYXTtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHJlLCBzdHIpO1xuXG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgcmVbTEFTVF9JTkRFWF0gPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIvLyA3LjIuOSBTYW1lVmFsdWUoeCwgeSlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwiLy8gaGVscGVyIGZvciBTdHJpbmcje3N0YXJ0c1dpdGgsIGVuZHNXaXRoLCBpbmNsdWRlc31cbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHNlYXJjaFN0cmluZywgTkFNRSkge1xuICBpZiAoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSkgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmcjJyArIE5BTUUgKyBcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7XG4gIHJldHVybiBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG59O1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzcGFjZXMgPSByZXF1aXJlKCcuL19zdHJpbmctd3MnKTtcbnZhciBzcGFjZSA9ICdbJyArIHNwYWNlcyArICddJztcbnZhciBub24gPSAnXFx1MjAwYlxcdTAwODUnO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHNwYWNlICsgc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHNwYWNlICsgc3BhY2UgKyAnKiQnKTtcblxudmFyIGV4cG9ydGVyID0gZnVuY3Rpb24gKEtFWSwgZXhlYywgQUxJQVMpIHtcbiAgdmFyIGV4cCA9IHt9O1xuICB2YXIgRk9SQ0UgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhc3BhY2VzW0tFWV0oKSB8fCBub25bS0VZXSgpICE9IG5vbjtcbiAgfSk7XG4gIHZhciBmbiA9IGV4cFtLRVldID0gRk9SQ0UgPyBleGVjKHRyaW0pIDogc3BhY2VzW0tFWV07XG4gIGlmIChBTElBUykgZXhwW0FMSUFTXSA9IGZuO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIEZPUkNFLCAnU3RyaW5nJywgZXhwKTtcbn07XG5cbi8vIDEgLT4gU3RyaW5nI3RyaW1MZWZ0XG4vLyAyIC0+IFN0cmluZyN0cmltUmlnaHRcbi8vIDMgLT4gU3RyaW5nI3RyaW1cbnZhciB0cmltID0gZXhwb3J0ZXIudHJpbSA9IGZ1bmN0aW9uIChzdHJpbmcsIFRZUEUpIHtcbiAgc3RyaW5nID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSk7XG4gIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICByZXR1cm4gc3RyaW5nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gJ1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyArXG4gICdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwidmFyIERhdGVQcm90byA9IERhdGUucHJvdG90eXBlO1xudmFyIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRGF0ZVByb3RvW1RPX1NUUklOR107XG52YXIgZ2V0VGltZSA9IERhdGVQcm90by5nZXRUaW1lO1xuaWYgKG5ldyBEYXRlKE5hTikgKyAnJyAhPSBJTlZBTElEX0RBVEUpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShEYXRlUHJvdG8sIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZS5jYWxsKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gJHRvU3RyaW5nLmNhbGwodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW07XG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgJE51bWJlciA9IGdsb2JhbFtOVU1CRVJdO1xudmFyIEJhc2UgPSAkTnVtYmVyO1xudmFyIHByb3RvID0gJE51bWJlci5wcm90b3R5cGU7XG4vLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbnZhciBCUk9LRU5fQ09GID0gY29mKHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKShwcm90bykpID09IE5VTUJFUjtcbnZhciBUUklNID0gJ3RyaW0nIGluIFN0cmluZy5wcm90b3R5cGU7XG5cbi8vIDcuMS4zIFRvTnVtYmVyKGFyZ3VtZW50KVxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gVFJJTSA/IGl0LnRyaW0oKSA6ICR0cmltKGl0LCAzKTtcbiAgICB2YXIgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIHZhciB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG4gICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGl0LmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgY2FzZSA2NjogY2FzZSA5ODogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5OiBjYXNlIDExMTogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGRpZ2l0cyA9IGl0LnNsaWNlKDIpLCBpID0gMCwgbCA9IGRpZ2l0cy5sZW5ndGgsIGNvZGU7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuaWYgKCEkTnVtYmVyKCcgMG8xJykgfHwgISROdW1iZXIoJzBiMScpIHx8ICROdW1iZXIoJysweDEnKSkge1xuICAkTnVtYmVyID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWU7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiB0aGF0IGluc3RhbmNlb2YgJE51bWJlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NPRiA/IGZhaWxzKGZ1bmN0aW9uICgpIHsgcHJvdG8udmFsdWVPZi5jYWxsKHRoYXQpOyB9KSA6IGNvZih0aGF0KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UodG9OdW1iZXIoaXQpKSwgdGhhdCwgJE51bWJlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QTihCYXNlKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTNiAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTNiBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKEJhc2UsIGtleSA9IGtleXNbal0pICYmICFoYXMoJE51bWJlciwga2V5KSkge1xuICAgICAgZFAoJE51bWJlciwga2V5LCBnT1BEKEJhc2UsIGtleSkpO1xuICAgIH1cbiAgfVxuICAkTnVtYmVyLnByb3RvdHlwZSA9IHByb3RvO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICROdW1iZXI7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCBOVU1CRVIsICROdW1iZXIpO1xufVxuIiwiLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc05hTjogZnVuY3Rpb24gaXNOYU4obnVtYmVyKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xuICB9XG59KTtcbiIsIi8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZnJlZXplJywgZnVuY3Rpb24gKCRmcmVlemUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZyZWV6ZShpdCkge1xuICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcbiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG4iLCIvLyAyNi4xLjYgUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSBbLCByZWNlaXZlcl0pXG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcblxuZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgLyogLCByZWNlaXZlciAqLykge1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXTtcbiAgdmFyIGRlc2MsIHByb3RvO1xuICBpZiAoYW5PYmplY3QodGFyZ2V0KSA9PT0gcmVjZWl2ZXIpIHJldHVybiB0YXJnZXRbcHJvcGVydHlLZXldO1xuICBpZiAoZGVzYyA9IGdPUEQuZih0YXJnZXQsIHByb3BlcnR5S2V5KSkgcmV0dXJuIGhhcyhkZXNjLCAndmFsdWUnKVxuICAgID8gZGVzYy52YWx1ZVxuICAgIDogZGVzYy5nZXQgIT09IHVuZGVmaW5lZFxuICAgICAgPyBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIGlmIChpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKSByZXR1cm4gZ2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgcmVjZWl2ZXIpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7IGdldDogZ2V0IH0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgJGZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcbnZhciAkUmVnRXhwID0gZ2xvYmFsLlJlZ0V4cDtcbnZhciBCYXNlID0gJFJlZ0V4cDtcbnZhciBwcm90byA9ICRSZWdFeHAucHJvdG90eXBlO1xudmFyIHJlMSA9IC9hL2c7XG52YXIgcmUyID0gL2EvZztcbi8vIFwibmV3XCIgY3JlYXRlcyBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnZ3kgaGVyZVxudmFyIENPUlJFQ1RfTkVXID0gbmV3ICRSZWdFeHAocmUxKSAhPT0gcmUxO1xuXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAoIUNPUlJFQ1RfTkVXIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZTJbcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyldID0gZmFsc2U7XG4gIC8vIFJlZ0V4cCBjb25zdHJ1Y3RvciBjYW4gYWx0ZXIgZmxhZ3MgYW5kIElzUmVnRXhwIHdvcmtzIGNvcnJlY3Qgd2l0aCBAQG1hdGNoXG4gIHJldHVybiAkUmVnRXhwKHJlMSkgIT0gcmUxIHx8ICRSZWdFeHAocmUyKSA9PSByZTIgfHwgJFJlZ0V4cChyZTEsICdpJykgIT0gJy9hL2knO1xufSkpKSB7XG4gICRSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocCwgZikge1xuICAgIHZhciB0aVJFID0gdGhpcyBpbnN0YW5jZW9mICRSZWdFeHA7XG4gICAgdmFyIHBpUkUgPSBpc1JlZ0V4cChwKTtcbiAgICB2YXIgZmlVID0gZiA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiAhdGlSRSAmJiBwaVJFICYmIHAuY29uc3RydWN0b3IgPT09ICRSZWdFeHAgJiYgZmlVID8gcFxuICAgICAgOiBpbmhlcml0SWZSZXF1aXJlZChDT1JSRUNUX05FV1xuICAgICAgICA/IG5ldyBCYXNlKHBpUkUgJiYgIWZpVSA/IHAuc291cmNlIDogcCwgZilcbiAgICAgICAgOiBCYXNlKChwaVJFID0gcCBpbnN0YW5jZW9mICRSZWdFeHApID8gcC5zb3VyY2UgOiBwLCBwaVJFICYmIGZpVSA/ICRmbGFncy5jYWxsKHApIDogZilcbiAgICAgICwgdGlSRSA/IHRoaXMgOiBwcm90bywgJFJlZ0V4cCk7XG4gIH07XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBrZXkgaW4gJFJlZ0V4cCB8fCBkUCgkUmVnRXhwLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQmFzZVtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAoaXQpIHsgQmFzZVtrZXldID0gaXQ7IH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IGdPUE4oQmFzZSksIGkgPSAwOyBrZXlzLmxlbmd0aCA+IGk7KSBwcm94eShrZXlzW2krK10pO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XG4gICRSZWdFeHAucHJvdG90eXBlID0gcHJvdG87XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCAnUmVnRXhwJywgJFJlZ0V4cCk7XG59XG5cbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoJ1JlZ0V4cCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xucmVxdWlyZSgnLi9fZXhwb3J0Jykoe1xuICB0YXJnZXQ6ICdSZWdFeHAnLFxuICBwcm90bzogdHJ1ZSxcbiAgZm9yY2VkOiByZWdleHBFeGVjICE9PSAvLi8uZXhlY1xufSwge1xuICBleGVjOiByZWdleHBFeGVjXG59KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4vX2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnbWF0Y2gnLCAxLCBmdW5jdGlvbiAoZGVmaW5lZCwgTUFUQ0gsICRtYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkbWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgdmFyIG4gPSAwO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJmAnXXxcXGRcXGQ/fDxbXj5dKj4pL2c7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJmAnXXxcXGRcXGQ/KS9nO1xuXG52YXIgbWF5YmVUb1N0cmluZyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbn07XG5cbi8vIEBAcmVwbGFjZSBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJHJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIGZ1bmN0aW9uYWxSZXBsYWNlID0gdHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IFN0cmluZyhyZXBsYWNlVmFsdWUpO1xuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgIH1cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG5cbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICB9XG4gICAgcmV0dXJuICRyZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgIH0pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi9fc2FtZS12YWx1ZScpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzZWFyY2gnLCAxLCBmdW5jdGlvbiAoZGVmaW5lZCwgU0VBUkNILCAkc2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtTRUFSQ0hdO1xuICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXShTdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkc2VhcmNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY2FsbFJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkbWluID0gTWF0aC5taW47XG52YXIgJHB1c2ggPSBbXS5wdXNoO1xudmFyICRTUExJVCA9ICdzcGxpdCc7XG52YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG52YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xudmFyIE1BWF9VSU5UMzIgPSAweGZmZmZmZmZmO1xuXG4vLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ3gnLCAneScpIC0+IC94L3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyIFNVUFBPUlRTX1kgPSAhZmFpbHMoZnVuY3Rpb24gKCkgeyBSZWdFeHAoTUFYX1VJTlQzMiwgJ3knKTsgfSk7XG5cbi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHZhciBpbnRlcm5hbFNwbGl0O1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuICRzcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6ICRzcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9ICRzcGxpdDtcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSAkc3BsaXQpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcbiAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSAkbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgIHJldHVybiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIvLyAyMS4xLjMuNyBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24gPSAwKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWNvbnRleHQnKTtcbnZhciBJTkNMVURFUyA9ICdpbmNsdWRlcyc7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMtaXMtcmVnZXhwJykoSU5DTFVERVMpLCAnU3RyaW5nJywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhfmNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUylcbiAgICAgIC5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L0FycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoJ2luY2x1ZGVzJyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi54LWhlbGxvc2lnbi1lbWJlZGRlZCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG4gIC54LWhlbGxvc2lnbi1lbWJlZGRlZC0taW4tbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLXNjcmVlbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCksIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkgYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxNiAvIDkpIHtcXG4gICAgLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1zY3JlZW4ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbi54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY29udGVudCB7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1dmg7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgbWluLXdpZHRoOiA1MTJweDtcXG4gIG1heC13aWR0aDogMTAyNHB4OyB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSwgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDE2IC8gOSkge1xcbiAgICAueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNvbnRlbnQge1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgbWluLWhlaWdodDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtaW4td2lkdGg6IDA7XFxuICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAwOyB9IH1cXG5cXG4ueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAtNjBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4OyB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSwgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDE2IC8gOSkge1xcbiAgICAueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNsb3NlIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG4ueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNsb3NlLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMzVzIGVhc2U7XFxuICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1jb2xvcjtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMjBweDsgfVxcbiAgLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jbG9zZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RTRFOyB9XFxuICAueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNsb3NlLWJ1dHRvbjo6YmVmb3JlLCAueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNsb3NlLWJ1dHRvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB0b3A6IDEwcHg7IH1cXG4gIC54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY2xvc2UtYnV0dG9uOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpOyB9XFxuICAueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNsb3NlLWJ1dHRvbjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTsgfVxcblxcbi54LWhlbGxvc2lnbi1lbWJlZGRlZF9faWZyYW1lIHtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGOTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gICp3aWR0aDogMTAwJTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLT9cXGQ/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuXHQvLyBUaGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuXHQvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuXHRyZXR1cm4gdHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmXG5cdFx0Y29uc29sZS5sb2cgJiZcblx0XHRjb25zb2xlLmxvZyguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmluc3RhbmNlcyA9IFtdO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHQvLyBEZWJ1Zy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcblx0XHQvLyBkZWJ1Zy5yYXdMb2cgPSByYXdMb2c7XG5cblx0XHQvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zdCBpbmRleCA9IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuXHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzW2ldO1xuXHRcdFx0aW5zdGFuY2UuZW5hYmxlZCA9IGNyZWF0ZURlYnVnLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cblx0KlxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0Y29uc3QgbmFtZXNwYWNlcyA9IFtcblx0XHRcdC4uLmNyZWF0ZURlYnVnLm5hbWVzLm1hcCh0b05hbWVzcGFjZSksXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5za2lwcy5tYXAodG9OYW1lc3BhY2UpLm1hcChuYW1lc3BhY2UgPT4gJy0nICsgbmFtZXNwYWNlKVxuXHRcdF0uam9pbignLCcpO1xuXHRcdGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG5cdFx0cmV0dXJuIG5hbWVzcGFjZXM7XG5cdH1cblxuXHQvKipcblx0KiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG5cdFx0aWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgbGVuO1xuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogQ29udmVydCByZWdleHAgdG8gbmFtZXNwYWNlXG5cdCpcblx0KiBAcGFyYW0ge1JlZ0V4cH0gcmVneGVwXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gdG9OYW1lc3BhY2UocmVnZXhwKSB7XG5cdFx0cmV0dXJuIHJlZ2V4cC50b1N0cmluZygpXG5cdFx0XHQuc3Vic3RyaW5nKDIsIHJlZ2V4cC50b1N0cmluZygpLmxlbmd0aCAtIDIpXG5cdFx0XHQucmVwbGFjZSgvXFwuXFwqXFw/JC8sICcqJyk7XG5cdH1cblxuXHQvKipcblx0KiBDb2VyY2UgYHZhbGAuXG5cdCpcblx0KiBAcGFyYW0ge01peGVkfSB2YWxcblx0KiBAcmV0dXJuIHtNaXhlZH1cblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuXHRcdGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJmdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcbm1vZHVsZS5leHBvcnRzLlRpbnlFbWl0dGVyID0gRTtcbiIsIihmdW5jdGlvbihnbG9iYWwpIHtcclxuICAvKipcclxuICAgKiBQb2x5ZmlsbCBVUkxTZWFyY2hQYXJhbXNcclxuICAgKlxyXG4gICAqIEluc3BpcmVkIGZyb20gOiBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi91cmwtc2VhcmNoLXBhcmFtcy9ibG9iL21hc3Rlci9zcmMvdXJsLXNlYXJjaC1wYXJhbXMuanNcclxuICAgKi9cclxuXHJcbiAgdmFyIGNoZWNrSWZJdGVyYXRvcklzU3VwcG9ydGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gISFTeW1ib2wuaXRlcmF0b3I7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBpdGVyYXRvclN1cHBvcnRlZCA9IGNoZWNrSWZJdGVyYXRvcklzU3VwcG9ydGVkKCk7XHJcblxyXG4gIHZhciBjcmVhdGVJdGVyYXRvciA9IGZ1bmN0aW9uKGl0ZW1zKSB7XHJcbiAgICB2YXIgaXRlcmF0b3IgPSB7XHJcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdmFsdWUgPT09IHZvaWQgMCwgdmFsdWU6IHZhbHVlIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGl0ZXJhdG9yU3VwcG9ydGVkKSB7XHJcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gaXRlcmF0b3I7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlYXJjaCBwYXJhbSBuYW1lIGFuZCB2YWx1ZXMgc2hvdWxkIGJlIGVuY29kZWQgYWNjb3JkaW5nIHRvIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsZW5jb2RlZC1zZXJpYWxpemluZ1xyXG4gICAqIGVuY29kZVVSSUNvbXBvbmVudCgpIHByb2R1Y2VzIHRoZSBzYW1lIHJlc3VsdCBleGNlcHQgZW5jb2Rpbmcgc3BhY2VzIGFzIGAlMjBgIGluc3RlYWQgb2YgYCtgLlxyXG4gICAqL1xyXG4gIHZhciBzZXJpYWxpemVQYXJhbSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lMjAvZywgJysnKTtcclxuICB9O1xyXG5cclxuICB2YXIgZGVzZXJpYWxpemVQYXJhbSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG4gIH07XHJcblxyXG4gIHZhciBwb2x5ZmlsbFVSTFNlYXJjaFBhcmFtcyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBVUkxTZWFyY2hQYXJhbXMgPSBmdW5jdGlvbihzZWFyY2hTdHJpbmcpIHtcclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfZW50cmllcycsIHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB7fSB9KTtcclxuICAgICAgdmFyIHR5cGVvZlNlYXJjaFN0cmluZyA9IHR5cGVvZiBzZWFyY2hTdHJpbmc7XHJcblxyXG4gICAgICBpZiAodHlwZW9mU2VhcmNoU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2ZTZWFyY2hTdHJpbmcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaFN0cmluZyAhPT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuX2Zyb21TdHJpbmcoc2VhcmNoU3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoc2VhcmNoU3RyaW5nIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBzZWFyY2hTdHJpbmcuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xyXG4gICAgICAgICAgX3RoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICgoc2VhcmNoU3RyaW5nICE9PSBudWxsKSAmJiAodHlwZW9mU2VhcmNoU3RyaW5nID09PSAnb2JqZWN0JykpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNlYXJjaFN0cmluZykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHNlYXJjaFN0cmluZ1tpXTtcclxuICAgICAgICAgICAgaWYgKChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZW50cnkpID09PSAnW29iamVjdCBBcnJheV0nKSB8fCAoZW50cnkubGVuZ3RoICE9PSAyKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYXBwZW5kKGVudHJ5WzBdLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgW3N0cmluZywgYW55XSBhcyBlbnRyeSBhdCBpbmRleCAnICsgaSArICcgb2YgVVJMU2VhcmNoUGFyYW1zXFwncyBpbnB1dCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzZWFyY2hTdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaFN0cmluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCBzZWFyY2hTdHJpbmdba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5zdXBwb3J0ZWQgaW5wdXRcXCdzIHR5cGUgZm9yIFVSTFNlYXJjaFBhcmFtcycpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm90byA9IFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XHJcblxyXG4gICAgcHJvdG8uYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcclxuICAgICAgaWYgKG5hbWUgaW4gdGhpcy5fZW50cmllcykge1xyXG4gICAgICAgIHRoaXMuX2VudHJpZXNbbmFtZV0ucHVzaChTdHJpbmcodmFsdWUpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9lbnRyaWVzW25hbWVdID0gW1N0cmluZyh2YWx1ZSldO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLmRlbGV0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuX2VudHJpZXNbbmFtZV07XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgcmV0dXJuIChuYW1lIGluIHRoaXMuX2VudHJpZXMpID8gdGhpcy5fZW50cmllc1tuYW1lXVswXSA6IG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgcmV0dXJuIChuYW1lIGluIHRoaXMuX2VudHJpZXMpID8gdGhpcy5fZW50cmllc1tuYW1lXS5zbGljZSgwKSA6IFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90by5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgIHJldHVybiAobmFtZSBpbiB0aGlzLl9lbnRyaWVzKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8uc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcclxuICAgICAgdGhpcy5fZW50cmllc1tuYW1lXSA9IFtTdHJpbmcodmFsdWUpXTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8uZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XHJcbiAgICAgIHZhciBlbnRyaWVzO1xyXG4gICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMuX2VudHJpZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5fZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgZW50cmllcyA9IHRoaXMuX2VudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBlbnRyaWVzW2ldLCBuYW1lLCB0aGlzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8ua2V5cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChuYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvcihpdGVtcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3IoaXRlbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90by5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yKGl0ZW1zKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGl0ZXJhdG9yU3VwcG9ydGVkKSB7XHJcbiAgICAgIHByb3RvW1N5bWJvbC5pdGVyYXRvcl0gPSBwcm90by5lbnRyaWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzZWFyY2hBcnJheSA9IFtdO1xyXG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcclxuICAgICAgICBzZWFyY2hBcnJheS5wdXNoKHNlcmlhbGl6ZVBhcmFtKG5hbWUpICsgJz0nICsgc2VyaWFsaXplUGFyYW0odmFsdWUpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBzZWFyY2hBcnJheS5qb2luKCcmJyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBnbG9iYWwuVVJMU2VhcmNoUGFyYW1zID0gVVJMU2VhcmNoUGFyYW1zO1xyXG4gIH07XHJcblxyXG4gIGlmICghKCdVUkxTZWFyY2hQYXJhbXMnIGluIGdsb2JhbCkgfHwgKG5ldyBnbG9iYWwuVVJMU2VhcmNoUGFyYW1zKCc/YT0xJykudG9TdHJpbmcoKSAhPT0gJ2E9MScpKSB7XHJcbiAgICBwb2x5ZmlsbFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHByb3RvID0gZ2xvYmFsLlVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XHJcblxyXG4gIGlmICh0eXBlb2YgcHJvdG8uc29ydCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcHJvdG8uc29ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICB2YXIgaXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKTtcclxuICAgICAgICBpZiAoIV90aGlzLl9lbnRyaWVzKSB7XHJcbiAgICAgICAgICBfdGhpcy5kZWxldGUobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaXRlbXMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgaWYgKGFbMF0gPCBiWzBdKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhWzBdID4gYlswXSkge1xyXG4gICAgICAgICAgcmV0dXJuICsxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoX3RoaXMuX2VudHJpZXMpIHsgLy8gZm9yY2UgcmVzZXQgYmVjYXVzZSBJRSBrZWVwcyBrZXlzIGluZGV4XHJcbiAgICAgICAgX3RoaXMuX2VudHJpZXMgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmQoaXRlbXNbaV1bMF0sIGl0ZW1zW2ldWzFdKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgcHJvdG8uX2Zyb21TdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ19mcm9tU3RyaW5nJywge1xyXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oc2VhcmNoU3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VudHJpZXMpIHtcclxuICAgICAgICAgIHRoaXMuX2VudHJpZXMgPSB7fTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIGtleXMgPSBbXTtcclxuICAgICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xyXG4gICAgICAgICAgICBrZXlzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShrZXlzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlYXJjaFN0cmluZyA9IHNlYXJjaFN0cmluZy5yZXBsYWNlKC9eXFw/LywgJycpO1xyXG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gc2VhcmNoU3RyaW5nLnNwbGl0KCcmJyk7XHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbaV0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgIHRoaXMuYXBwZW5kKFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZVBhcmFtKGF0dHJpYnV0ZVswXSksXHJcbiAgICAgICAgICAgIChhdHRyaWJ1dGUubGVuZ3RoID4gMSkgPyBkZXNlcmlhbGl6ZVBhcmFtKGF0dHJpYnV0ZVsxXSkgOiAnJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gSFRNTEFuY2hvckVsZW1lbnRcclxuXHJcbn0pKFxyXG4gICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgPyBnbG9iYWxcclxuICAgIDogKCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3dcclxuICAgIDogKCh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpID8gc2VsZiA6IHRoaXMpKVxyXG4pO1xyXG5cclxuKGZ1bmN0aW9uKGdsb2JhbCkge1xyXG4gIC8qKlxyXG4gICAqIFBvbHlmaWxsIFVSTFxyXG4gICAqXHJcbiAgICogSW5zcGlyZWQgZnJvbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hcnYvRE9NLVVSTC1Qb2x5ZmlsbC9ibG9iL21hc3Rlci9zcmMvdXJsLmpzXHJcbiAgICovXHJcblxyXG4gIHZhciBjaGVja0lmVVJMSXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciB1ID0gbmV3IGdsb2JhbC5VUkwoJ2InLCAnaHR0cDovL2EnKTtcclxuICAgICAgdS5wYXRobmFtZSA9ICdjJTIwZCc7XHJcbiAgICAgIHJldHVybiAodS5ocmVmID09PSAnaHR0cDovL2EvYyUyMGQnKSAmJiB1LnNlYXJjaFBhcmFtcztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgcG9seWZpbGxVUkwgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBfVVJMID0gZ2xvYmFsLlVSTDtcclxuXHJcbiAgICB2YXIgVVJMID0gZnVuY3Rpb24odXJsLCBiYXNlKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykgdXJsID0gU3RyaW5nKHVybCk7XHJcblxyXG4gICAgICAvLyBPbmx5IGNyZWF0ZSBhbm90aGVyIGRvY3VtZW50IGlmIHRoZSBiYXNlIGlzIGRpZmZlcmVudCBmcm9tIGN1cnJlbnQgbG9jYXRpb24uXHJcbiAgICAgIHZhciBkb2MgPSBkb2N1bWVudCwgYmFzZUVsZW1lbnQ7XHJcbiAgICAgIGlmIChiYXNlICYmIChnbG9iYWwubG9jYXRpb24gPT09IHZvaWQgMCB8fCBiYXNlICE9PSBnbG9iYWwubG9jYXRpb24uaHJlZikpIHtcclxuICAgICAgICBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoJycpO1xyXG4gICAgICAgIGJhc2VFbGVtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2Jhc2UnKTtcclxuICAgICAgICBiYXNlRWxlbWVudC5ocmVmID0gYmFzZTtcclxuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChiYXNlRWxlbWVudCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChiYXNlRWxlbWVudC5ocmVmLmluZGV4T2YoYmFzZSkgIT09IDApIHRocm93IG5ldyBFcnJvcihiYXNlRWxlbWVudC5ocmVmKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVVJMIHVuYWJsZSB0byBzZXQgYmFzZSAnICsgYmFzZSArICcgZHVlIHRvICcgKyBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICBhbmNob3JFbGVtZW50LmhyZWYgPSB1cmw7XHJcbiAgICAgIGlmIChiYXNlRWxlbWVudCkge1xyXG4gICAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKGFuY2hvckVsZW1lbnQpO1xyXG4gICAgICAgIGFuY2hvckVsZW1lbnQuaHJlZiA9IGFuY2hvckVsZW1lbnQuaHJlZjsgLy8gZm9yY2UgaHJlZiB0byByZWZyZXNoXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChhbmNob3JFbGVtZW50LnByb3RvY29sID09PSAnOicgfHwgIS86Ly50ZXN0KGFuY2hvckVsZW1lbnQuaHJlZikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFVSTCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19hbmNob3JFbGVtZW50Jywge1xyXG4gICAgICAgIHZhbHVlOiBhbmNob3JFbGVtZW50XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBhIGxpbmtlZCBzZWFyY2hQYXJhbXMgd2hpY2ggcmVmbGVjdCBpdHMgY2hhbmdlcyBvbiBVUkxcclxuICAgICAgdmFyIHNlYXJjaFBhcmFtcyA9IG5ldyBnbG9iYWwuVVJMU2VhcmNoUGFyYW1zKHRoaXMuc2VhcmNoKTtcclxuICAgICAgdmFyIGVuYWJsZVNlYXJjaFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgIHZhciBlbmFibGVTZWFyY2hQYXJhbXNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICBbJ2FwcGVuZCcsICdkZWxldGUnLCAnc2V0J10uZm9yRWFjaChmdW5jdGlvbihtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IHNlYXJjaFBhcmFtc1ttZXRob2ROYW1lXTtcclxuICAgICAgICBzZWFyY2hQYXJhbXNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIG1ldGhvZC5hcHBseShzZWFyY2hQYXJhbXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICBpZiAoZW5hYmxlU2VhcmNoVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIGVuYWJsZVNlYXJjaFBhcmFtc1VwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5zZWFyY2ggPSBzZWFyY2hQYXJhbXMudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZW5hYmxlU2VhcmNoUGFyYW1zVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc2VhcmNoUGFyYW1zJywge1xyXG4gICAgICAgIHZhbHVlOiBzZWFyY2hQYXJhbXMsXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHZhciBzZWFyY2ggPSB2b2lkIDA7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX3VwZGF0ZVNlYXJjaFBhcmFtcycsIHtcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2ggIT09IHNlYXJjaCkge1xyXG4gICAgICAgICAgICBzZWFyY2ggPSB0aGlzLnNlYXJjaDtcclxuICAgICAgICAgICAgaWYgKGVuYWJsZVNlYXJjaFBhcmFtc1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgIGVuYWJsZVNlYXJjaFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLl9mcm9tU3RyaW5nKHRoaXMuc2VhcmNoKTtcclxuICAgICAgICAgICAgICBlbmFibGVTZWFyY2hVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByb3RvID0gVVJMLnByb3RvdHlwZTtcclxuXHJcbiAgICB2YXIgbGlua1VSTFdpdGhBbmNob3JBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGVOYW1lKSB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgYXR0cmlidXRlTmFtZSwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yRWxlbWVudFthdHRyaWJ1dGVOYW1lXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuX2FuY2hvckVsZW1lbnRbYXR0cmlidXRlTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIFsnaGFzaCcsICdob3N0JywgJ2hvc3RuYW1lJywgJ3BvcnQnLCAncHJvdG9jb2wnXVxyXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihhdHRyaWJ1dGVOYW1lKSB7XHJcbiAgICAgICAgbGlua1VSTFdpdGhBbmNob3JBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3NlYXJjaCcsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yRWxlbWVudFsnc2VhcmNoJ107XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9hbmNob3JFbGVtZW50WydzZWFyY2gnXSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNlYXJjaFBhcmFtcygpO1xyXG4gICAgICB9LFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhwcm90bywge1xyXG5cclxuICAgICAgJ3RvU3RyaW5nJzoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHJlZjtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgJ2hyZWYnOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9hbmNob3JFbGVtZW50LmhyZWYucmVwbGFjZSgvXFw/JC8sICcnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuX2FuY2hvckVsZW1lbnQuaHJlZiA9IHZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5fdXBkYXRlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAncGF0aG5hbWUnOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9hbmNob3JFbGVtZW50LnBhdGhuYW1lLnJlcGxhY2UoLyheXFwvPykvLCAnLycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5fYW5jaG9yRWxlbWVudC5wYXRobmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgJ29yaWdpbic6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgLy8gZ2V0IGV4cGVjdGVkIHBvcnQgZnJvbSBwcm90b2NvbFxyXG4gICAgICAgICAgdmFyIGV4cGVjdGVkUG9ydCA9IHsgJ2h0dHA6JzogODAsICdodHRwczonOiA0NDMsICdmdHA6JzogMjEgfVt0aGlzLl9hbmNob3JFbGVtZW50LnByb3RvY29sXTtcclxuICAgICAgICAgIC8vIGFkZCBwb3J0IHRvIG9yaWdpbiBpZiwgZXhwZWN0ZWQgcG9ydCBpcyBkaWZmZXJlbnQgdGhhbiBhY3R1YWwgcG9ydFxyXG4gICAgICAgICAgLy8gYW5kIGl0IGlzIG5vdCBlbXB0eSBmLmUgaHR0cDovL2Zvbzo4MDgwXHJcbiAgICAgICAgICAvLyA4MDgwICE9IDgwICYmIDgwODAgIT0gJydcclxuICAgICAgICAgIHZhciBhZGRQb3J0VG9PcmlnaW4gPSB0aGlzLl9hbmNob3JFbGVtZW50LnBvcnQgIT0gZXhwZWN0ZWRQb3J0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2FuY2hvckVsZW1lbnQucG9ydCAhPT0gJyc7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvckVsZW1lbnQucHJvdG9jb2wgK1xyXG4gICAgICAgICAgICAnLy8nICtcclxuICAgICAgICAgICAgdGhpcy5fYW5jaG9yRWxlbWVudC5ob3N0bmFtZSArXHJcbiAgICAgICAgICAgIChhZGRQb3J0VG9PcmlnaW4gPyAoJzonICsgdGhpcy5fYW5jaG9yRWxlbWVudC5wb3J0KSA6ICcnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgfSxcclxuXHJcbiAgICAgICdwYXNzd29yZCc6IHsgLy8gVE9ET1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAndXNlcm5hbWUnOiB7IC8vIFRPRE9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgVVJMLmNyZWF0ZU9iamVjdFVSTCA9IGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAgcmV0dXJuIF9VUkwuY3JlYXRlT2JqZWN0VVJMLmFwcGx5KF9VUkwsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwgPSBmdW5jdGlvbih1cmwpIHtcclxuICAgICAgcmV0dXJuIF9VUkwucmV2b2tlT2JqZWN0VVJMLmFwcGx5KF9VUkwsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdsb2JhbC5VUkwgPSBVUkw7XHJcblxyXG4gIH07XHJcblxyXG4gIGlmICghY2hlY2tJZlVSTElzU3VwcG9ydGVkKCkpIHtcclxuICAgIHBvbHlmaWxsVVJMKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoKGdsb2JhbC5sb2NhdGlvbiAhPT0gdm9pZCAwKSAmJiAhKCdvcmlnaW4nIGluIGdsb2JhbC5sb2NhdGlvbikpIHtcclxuICAgIHZhciBnZXRPcmlnaW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIGdsb2JhbC5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBnbG9iYWwubG9jYXRpb24uaG9zdG5hbWUgKyAoZ2xvYmFsLmxvY2F0aW9uLnBvcnQgPyAoJzonICsgZ2xvYmFsLmxvY2F0aW9uLnBvcnQpIDogJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLmxvY2F0aW9uLCAnb3JpZ2luJywge1xyXG4gICAgICAgIGdldDogZ2V0T3JpZ2luLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGdsb2JhbC5sb2NhdGlvbi5vcmlnaW4gPSBnZXRPcmlnaW4oKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KShcclxuICAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpID8gZ2xvYmFsXHJcbiAgICA6ICgodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93XHJcbiAgICA6ICgodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSA/IHNlbGYgOiB0aGlzKSlcclxuKTtcclxuIiwiLyoqXG4gKlxuICpcbiAqIEBhdXRob3IgSmVycnkgQmVuZHkgPGplcnJ5QGljZXdpbmdjYy5jb20+XG4gKiBAbGljZW5jZSBNSVRcbiAqXG4gKi9cblxuKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbmF0aXZlVVJMU2VhcmNoUGFyYW1zID0gc2VsZi5VUkxTZWFyY2hQYXJhbXMgPyBzZWxmLlVSTFNlYXJjaFBhcmFtcyA6IG51bGwsXG4gICAgICAgIGlzU3VwcG9ydE9iamVjdENvbnN0cnVjdG9yID0gbmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmIChuZXcgbmF0aXZlVVJMU2VhcmNoUGFyYW1zKHthOiAxfSkpLnRvU3RyaW5nKCkgPT09ICdhPTEnLFxuICAgICAgICAvLyBUaGVyZSBpcyBhIGJ1ZyBpbiBzYWZhcmkgMTAuMSAoYW5kIGVhcmxpZXIpIHRoYXQgaW5jb3JyZWN0bHkgZGVjb2RlcyBgJTJCYCBhcyBhbiBlbXB0eSBzcGFjZSBhbmQgbm90IGEgcGx1cy5cbiAgICAgICAgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAobmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygncz0lMkInKS5nZXQoJ3MnKSA9PT0gJysnKSxcbiAgICAgICAgX19VUkxTZWFyY2hQYXJhbXNfXyA9IFwiX19VUkxTZWFyY2hQYXJhbXNfX1wiLFxuICAgICAgICAvLyBGaXggYnVnIGluIEVkZ2Ugd2hpY2ggY2Fubm90IGVuY29kZSAnICYnIGNvcnJlY3RseVxuICAgICAgICBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyA/IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhbXBlcnNhbmRUZXN0ID0gbmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgYW1wZXJzYW5kVGVzdC5hcHBlbmQoJ3MnLCAnICYnKTtcbiAgICAgICAgICAgIHJldHVybiBhbXBlcnNhbmRUZXN0LnRvU3RyaW5nKCkgPT09ICdzPSslMjYnO1xuICAgICAgICB9KSgpIDogdHJ1ZSxcbiAgICAgICAgcHJvdG90eXBlID0gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwucHJvdG90eXBlLFxuICAgICAgICBpdGVyYWJsZSA9ICEhKHNlbGYuU3ltYm9sICYmIHNlbGYuU3ltYm9sLml0ZXJhdG9yKTtcblxuICAgIGlmIChuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSAmJiBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGEgVVJMU2VhcmNoUGFyYW1zIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdHxzdHJpbmd8VVJMU2VhcmNoUGFyYW1zfSBzZWFyY2hcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbChzZWFyY2gpIHtcbiAgICAgICAgc2VhcmNoID0gc2VhcmNoIHx8IFwiXCI7XG5cbiAgICAgICAgLy8gc3VwcG9ydCBjb25zdHJ1Y3Qgb2JqZWN0IHdpdGggYW5vdGhlciBVUkxTZWFyY2hQYXJhbXMgaW5zdGFuY2VcbiAgICAgICAgaWYgKHNlYXJjaCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyB8fCBzZWFyY2ggaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbCkge1xuICAgICAgICAgICAgc2VhcmNoID0gc2VhcmNoLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gPSBwYXJzZVRvRGljdChzZWFyY2gpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNwZWNpZmllZCBrZXkvdmFsdWUgcGFpciBhcyBhIG5ldyBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgYXBwZW5kVG8odGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10sIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciwgYW5kIGl0cyBhc3NvY2lhdGVkIHZhbHVlLFxuICAgICAqIGZyb20gdGhlIGxpc3Qgb2YgYWxsIHNlYXJjaCBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gW25hbWVdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWx1ZSBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3RbbmFtZV1bMF0gOiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCB0aGUgdmFsdWVzIGFzc29jaWF0aW9uIHdpdGggYSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3QgW25hbWVdLnNsaWNlKDApIDogW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBCb29sZWFuIGluZGljYXRpbmcgaWYgc3VjaCBhIHNlYXJjaCBwYXJhbWV0ZXIgZXhpc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB0byBhIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIgdG9cbiAgICAgKiB0aGUgZ2l2ZW4gdmFsdWUuIElmIHRoZXJlIHdlcmUgc2V2ZXJhbCB2YWx1ZXMsIGRlbGV0ZSB0aGVcbiAgICAgKiBvdGhlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX11bbmFtZV0gPSBbJycgKyB2YWx1ZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgY29udGFpbmcgYSBxdWVyeSBzdHJpbmcgc3VpdGFibGUgZm9yIHVzZSBpbiBhIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gdGhpc1tfX1VSTFNlYXJjaFBhcmFtc19fXSwgcXVlcnkgPSBbXSwgaSwga2V5LCBuYW1lLCB2YWx1ZTtcbiAgICAgICAgZm9yIChrZXkgaW4gZGljdCkge1xuICAgICAgICAgICAgbmFtZSA9IGVuY29kZShrZXkpO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgdmFsdWUgPSBkaWN0W2tleV07IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnB1c2gobmFtZSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeS5qb2luKCcmJyk7XG4gICAgfTtcblxuICAgIC8vIFRoZXJlIGlzIGEgYnVnIGluIFNhZmFyaSAxMC4xIGFuZCBgUHJveHlgaW5nIGl0IGlzIG5vdCBlbm91Z2guXG4gICAgdmFyIGZvclN1cmVVc2VQb2x5ZmlsbCA9ICFkZWNvZGVzUGx1c2VzQ29ycmVjdGx5O1xuICAgIHZhciB1c2VQcm94eSA9ICghZm9yU3VyZVVzZVBvbHlmaWxsICYmIG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAhaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgc2VsZi5Qcm94eSlcbiAgICAvKlxuICAgICAqIEFwcGx5IHBvbGlmaWxsIHRvIGdsb2JhbCBvYmplY3QgYW5kIGFwcGVuZCBvdGhlciBwcm90b3R5cGUgaW50byBpdFxuICAgICAqL1xuICAgIHNlbGYuVVJMU2VhcmNoUGFyYW1zID0gdXNlUHJveHkgP1xuICAgICAgICAvLyBTYWZhcmkgMTAuMCBkb2Vzbid0IHN1cHBvcnQgUHJveHksIHNvIGl0IHdvbid0IGV4dGVuZCBVUkxTZWFyY2hQYXJhbXMgb24gc2FmYXJpIDEwLjBcbiAgICAgICAgbmV3IFByb3h5KG5hdGl2ZVVSTFNlYXJjaFBhcmFtcywge1xuICAgICAgICAgICAgY29uc3RydWN0OiBmdW5jdGlvbih0YXJnZXQsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRhcmdldCgobmV3IFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKGFyZ3NbMF0pLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgOlxuICAgICAgICBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbDtcblxuXG4gICAgdmFyIFVTUFByb3RvID0gc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG4gICAgVVNQUHJvdG8ucG9seWZpbGwgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0aGlzQXJnXG4gICAgICovXG4gICAgVVNQUHJvdG8uZm9yRWFjaCA9IFVTUFByb3RvLmZvckVhY2ggfHwgZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwYXJzZVRvRGljdCh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkaWN0KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IGFsbCBuYW1lLXZhbHVlIHBhaXJzXG4gICAgICovXG4gICAgVVNQUHJvdG8uc29ydCA9IFVTUFByb3RvLnNvcnQgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcGFyc2VUb0RpY3QodGhpcy50b1N0cmluZygpKSwga2V5cyA9IFtdLCBrLCBpLCBqO1xuICAgICAgICBmb3IgKGsgaW4gZGljdCkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuc29ydCgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShrZXlzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV0sIHZhbHVlcyA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCBrZXlzIG9mXG4gICAgICogdGhlIGtleS92YWx1ZSBwYWlycyBjb250YWluZWQgaW4gdGhpcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgVVNQUHJvdG8ua2V5cyA9IFVTUFByb3RvLmtleXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgbmFtZSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGl0ZXJhdG9yIGFsbG93aW5nIHRvIGdvIHRocm91Z2ggYWxsIHZhbHVlcyBvZlxuICAgICAqIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLnZhbHVlcyA9IFVTUFByb3RvLnZhbHVlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYXRvcihpdGVtcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwga2V5L3ZhbHVlXG4gICAgICogcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLmVudHJpZXMgPSBVU1BQcm90by5lbnRyaWVzIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goW25hbWUsIGl0ZW1dKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cblxuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gfHwgVVNQUHJvdG8uZW50cmllcztcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgICAgICAgdmFyIHJlcGxhY2UgPSB7XG4gICAgICAgICAgICAnISc6ICclMjEnLFxuICAgICAgICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgICAgICAgJygnOiAnJTI4JyxcbiAgICAgICAgICAgICcpJzogJyUyOScsXG4gICAgICAgICAgICAnfic6ICclN0UnLFxuICAgICAgICAgICAgJyUyMCc6ICcrJyxcbiAgICAgICAgICAgICclMDAnOiAnXFx4MDAnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bISdcXChcXCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VJdGVyYXRvcihhcnIpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gYXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICAgICAgaXRlcmF0b3Jbc2VsZi5TeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVRvRGljdChzZWFyY2gpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB7fTtcblxuICAgICAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNlYXJjaCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBrZXksIHNlYXJjaFtrZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGZpcnN0ICc/J1xuICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKFwiP1wiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNlYXJjaCA9IHNlYXJjaC5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhaXJzID0gc2VhcmNoLnNwbGl0KFwiJlwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFpcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwYWlycyBbal0sXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZignPScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKC0xIDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgZGVjb2RlKHZhbHVlLnNsaWNlKDAsIGluZGV4KSksIGRlY29kZSh2YWx1ZS5zbGljZShpbmRleCArIDEpKSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGRlY29kZSh2YWx1ZSksICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRvKGRpY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWwgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAoXG4gICAgICAgICAgICB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnRvU3RyaW5nKCkgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChuYW1lIGluIGRpY3QpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0ucHVzaCh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGljdFtuYW1lXSA9IFt2YWxdO1xuICAgICAgICB9XG4gICAgfVxuXG59KSh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMpKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBzZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhbGxvd0NhbmNlbDogdHJ1ZSxcbiAgZGVidWc6IGZhbHNlLFxuICBsb2NhbGU6IHNldHRpbmdzLmxvY2FsZXMuRU5fVVMsXG4gIHNraXBEb21haW5WZXJpZmljYXRpb246IGZhbHNlLFxuICB0ZXN0TW9kZTogZmFsc2UsXG4gIHRpbWVvdXQ6IDMwMDAwLCAvLyAzMCBzZWNvbmRzXG59O1xuIiwiaW1wb3J0IEVtaXR0ZXIgZnJvbSAndGlueS1lbWl0dGVyJztcbmltcG9ydCB7IHNhZmVIdG1sIH0gZnJvbSAnY29tbW9uLXRhZ3MnO1xuXG5pbXBvcnQgZGVidWcgZnJvbSAnLi91dGlscy9kZWJ1Zyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cyc7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncyc7XG5cbmNsYXNzIEhlbGxvU2lnbiBleHRlbmRzIEVtaXR0ZXIge1xuXG4gIC8qKlxuICAgKiBIZWxsb1NpZ24gRW1iZWRkZWQgY2xhc3MgbmFtZXMuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBzdGF0aWNcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBzdGF0aWMgY2xhc3NOYW1lcyA9IHNldHRpbmdzLmNsYXNzTmFtZXM7XG5cbiAgLyoqXG4gICAqIEhlbGxvU2lnbiBFbWJlZGRlZCBldmVudHMuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBzdGF0aWNcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBzdGF0aWMgZXZlbnRzID0gc2V0dGluZ3MuZXZlbnRzO1xuXG4gIC8qKlxuICAgKiBIZWxsb1NpZ24gRW1iZWRkZWQgc3VwcG9ydGVkIGxvY2FsZXMuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBzdGF0aWNcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBzdGF0aWMgbG9jYWxlcyA9IHNldHRpbmdzLmxvY2FsZXM7XG5cbiAgLyoqXG4gICAqIEhlbGxvU2lnbiBFbWJlZGRlZCBjcm9zcy1vcmlnaW4gd2luZG93IG1lc3NhZ2VzLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAc3RhdGljXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgc3RhdGljIG1lc3NhZ2VzID0gc2V0dGluZ3MubWVzc2FnZXM7XG5cbiAgLyoqXG4gICAqIEhlbGxvU2lnbiBFbWJlZGRlZCB2ZXJzaW9uIG51bWJlci5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHN0YXRpY1xuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHN0YXRpYyB2ZXJzaW9uID0gX19QS0dfVkVSU0lPTl9fO1xuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBjb25maWcgb2JqZWN0IHdoaWNoIFwib3BlblwiIHdpbGwgZXh0ZW5kLlxuICAgKlxuICAgKiBAdHlwZSB7P09iamVjdH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9iYXNlQ29uZmlnID0gbnVsbDtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGJhc2UgSGVsbG9TaWduIEVtYmVkZGVkIGNvbnRhaW5lclxuICAgKiBlbGVtZW50LlxuICAgKlxuICAgKiBAdHlwZSB7P0hUTUxFbGVtZW50fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2Jhc2VFbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBmaW5hbCBjb25maWcgb2JqZWN0LlxuICAgKlxuICAgKiBAdHlwZSB7P09iamVjdH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb25maWcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgaUZyYW1lIFVSTCBvYmplY3QuXG4gICAqXG4gICAqIEB0eXBlIHs/VVJMfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2lGcmFtZVVSTCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpRnJhbWUgZWxlbWVudC5cbiAgICpcbiAgICogQHR5cGUgez9IVE1MRWxlbWVudH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pRnJhbWVFbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsaXphdGlvbiB0aW1lb3V0IHRpbWVyLlxuICAgKlxuICAgKiBAdHlwZSB7P251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0VGltZW91dCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNsaWVudCBpcyBvcGVuIG9yIG5vdC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaXNPcGVuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGFwcCBpcyByZWFkeSBvciBub3QuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2lzUmVhZHkgPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc2lnbmF0dXJlIHJlcXVlc3QgaGFzIGJlZW4gc2VudCBvciBzaWduZWQuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2lzU2VudE9yU2lnbmVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkVtYmVkZGVkQ2xpY2sgPSB0aGlzLl9vbkVtYmVkZGVkQ2xpY2suYmluZCh0aGlzKTtcblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uSW5pdFRpbWVvdXQgPSB0aGlzLl9vbkluaXRUaW1lb3V0LmJpbmQodGhpcyk7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkJlZm9yZVVubG9hZCA9IHRoaXMuX29uQmVmb3JlVW5sb2FkLmJpbmQodGhpcyk7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbk1lc3NhZ2UgPSB0aGlzLl9vbk1lc3NhZ2UuYmluZCh0aGlzKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBIZWxsb1NpZ24gRW1iZWRkZWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqXVxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9iaiA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGRlYnVnLmluZm8oJ2NyZWF0ZWQgbmV3IEhlbGxvU2lnbiBpbnN0YW5jZSB3aXRoIG9wdGlvbnMnLCBvYmopO1xuXG4gICAgaWYgKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5fYmFzZUNvbmZpZyA9IHsgLi4ub2JqIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbmZpZ3VyYXRpb24gbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcImNsaWVudF9pZFwiIHBhcmFtZXRlciB0byB0aGVcbiAgICogaUZyYW1lIHBhcmFtcyBvYmplY3QuXG4gICAqXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgY2xpZW50SWQgaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlDbGllbnRJZChwYXJhbXMpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcuY2xpZW50SWQ7XG5cbiAgICBpZiAoIXZhbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJjbGllbnRJZFwiIGlzIHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImNsaWVudElkXCIgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIH1cblxuICAgIHBhcmFtcy5hcHBlbmQoJ2NsaWVudF9pZCcsIHZhbCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcImRlYnVnXCIgcGFyYW1ldGVyIHRvIHRoZVxuICAgKiBpRnJhbWUgcGFyYW1zIG9iamVjdC5cbiAgICpcbiAgICogQHRocm93cyB7VHlwZUVycm9yfSBpZiBkZWJ1ZyBpcyBpbnZhbGlkXG4gICAqIEBwYXJhbSB7VVJMU2VhcmNoUGFyYW1zfSBwYXJhbXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBseURlYnVnKHBhcmFtcykge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2NvbmZpZy5kZWJ1ZztcblxuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZGVidWdcIiBtdXN0IGJlIGEgYm9vbGVhbicpO1xuICAgIH1cblxuICAgIHBhcmFtcy5hcHBlbmQoJ2RlYnVnJywgdmFsID8gMSA6IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhbmQgYXBwZW5kcyB0aGUgXCJmaW5hbF9idXR0b25fdGV4dFwiIHBhcmFtZXRlclxuICAgKiB0byB0aGUgaUZyYW1lIHBhcmFtcyBvYmplY3QuXG4gICAqXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgZmluYWxCdXR0b25UZXh0IGlzIGludmFsaWRcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5RmluYWxCdXR0b25UZXh0KHBhcmFtcykge1xuICAgIGlmICgnZmluYWxCdXR0b25UZXh0JyBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMuX2NvbmZpZy5maW5hbEJ1dHRvblRleHQ7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImZpbmFsQnV0dG9uVGV4dFwiIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFbJ1NhdmUnLCAnU2VuZCcsICdDb250aW51ZSddLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJmaW5hbEJ1dHRvblRleHRcIiBtdXN0IGJlIG9uZSBvZiBcIlNhdmVcIiwgXCJTZW5kXCIsIG9yIFwiQ29udGludWVcIicpO1xuICAgICAgfVxuXG4gICAgICBwYXJhbXMuYXBwZW5kKCdmaW5hbF9idXR0b25fdGV4dCcsIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhbmQgYXBwZW5kcyB0aGUgXCJoaWRlX2hlYWRlclwiIHBhcmFtZXRlciB0byB0aGVcbiAgICogaUZyYW1lIHBhcmFtcyBvYmplY3QuXG4gICAqXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgaGlkZUhlYWRlciBpcyBpbnZhbGlkXG4gICAqIEBwYXJhbSB7VVJMU2VhcmNoUGFyYW1zfSBwYXJhbXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBseUhpZGVIZWFkZXIocGFyYW1zKSB7XG4gICAgaWYgKCdoaWRlSGVhZGVyJyBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMuX2NvbmZpZy5oaWRlSGVhZGVyO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiaGlkZUhlYWRlclwiIG11c3QgYmUgYSBib29sZWFuJyk7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5hcHBlbmQoJ2hpZGVfaGVhZGVyJywgdmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcInVzZXJfY3VsdHVyZVwiIHBhcmFtZXRlciB0b1xuICAgKiB0aGUgaUZyYW1lIHBhcmFtcyBvYmplY3QuXG4gICAqXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgbG9jYWxlIGlzIGludmFsaWRcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5TG9jYWxlKHBhcmFtcykge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2NvbmZpZy5sb2NhbGU7XG5cbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibG9jYWxlXCIgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIH1cblxuICAgIC8vIE9iamVjdC52YWx1ZXMoKSBoYXMgYmVlbiBwb2x5ZmlsbGVkLCBlc2xpbnQtY29tcGF0XG4gICAgLy8gbmVlZCBub3QgcmFpc2UgYW4gZXhjZXB0aW9uIGZvciBpdC5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpZiAoIU9iamVjdC52YWx1ZXMoc2V0dGluZ3MubG9jYWxlcykuaW5jbHVkZXModmFsKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgXCIke3ZhbH1cIiBpcyBub3QgYSBzdXBwb3J0ZWQgbG9jYWxlYCk7XG4gICAgfVxuXG4gICAgcGFyYW1zLmFwcGVuZCgndXNlcl9jdWx0dXJlJywgdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoZSBcInBhcmVudF91cmxcIiBwYXJhbWV0ZXIgdG8gdGhlIGlGcmFtZSBwYXJhbXNcbiAgICogb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlQYXJlbnRVUkwocGFyYW1zKSB7XG4gICAgcGFyYW1zLmFwcGVuZCgncGFyZW50X3VybCcsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhbmQgYXBwZW5kcyB0aGUgXCJyZWRpcmVjdF91cmxcIiBwYXJhbWV0ZXIgdG9cbiAgICogdGhlIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIHJlZGlyZWN0VG8gaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlSZWRpcmVjdFRvKHBhcmFtcykge1xuICAgIGlmICgncmVkaXJlY3RUbycgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcucmVkaXJlY3RUbztcblxuICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wicmVkaXJlY3RUb1wiIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLmFwcGVuZCgncmVkaXJlY3RfdXJsJywgdmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcInJlcXVlc3RlclwiIHBhcmFtZXRlciB0byB0aGVcbiAgICogaUZyYW1lIHBhcmFtcyBvYmplY3QuXG4gICAqXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgcmVxdWVzdGluZ0VtYWlsIGlzIGludmFsaWRcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5UmVxdWVzdGluZ0VtYWlsKHBhcmFtcykge1xuICAgIGlmICgncmVxdWVzdGluZ0VtYWlsJyBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMuX2NvbmZpZy5yZXF1ZXN0aW5nRW1haWw7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInJlcXVlc3RpbmdFbWFpbFwiIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLmFwcGVuZCgncmVxdWVzdGVyJywgdmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcInNraXBfZG9tYWluX3ZlcmlmaWNhdGlvblwiXG4gICAqIHBhcmFtZXRlciB0byB0aGUgaUZyYW1lIHBhcmFtcyBvYmplY3QuXG4gICAqXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgdGVzdE1vZGUgaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlUZXN0TW9kZShwYXJhbXMpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcuc2tpcERvbWFpblZlcmlmaWNhdGlvbiB8fCB0aGlzLl9jb25maWcudGVzdE1vZGU7XG5cbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRlc3RNb2RlXCIgbXVzdCBiZSBhIGJvb2xlYW4nKTtcbiAgICB9XG5cbiAgICBwYXJhbXMuYXBwZW5kKCdza2lwX2RvbWFpbl92ZXJpZmljYXRpb24nLCB2YWwgPyAxIDogMCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcIndoaXRlX2xhYmVsaW5nX29wdGlvbnNcIlxuICAgKiBwYXJhbWV0ZXIgdG8gdGhlIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIHdoaXRlTGFiZWxpbmcgaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlXaGl0ZUxhYmVsaW5nKHBhcmFtcykge1xuICAgIGlmICgnd2hpdGVMYWJlbGluZycgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcud2hpdGVMYWJlbGluZztcblxuICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wid2hpdGVMYWJlbGluZ1wiIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5hcHBlbmQoJ3doaXRlX2xhYmVsaW5nX29wdGlvbnMnLCBKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGUgXCJ1eF92ZXJzaW9uXCIgcGFyYW1ldGVyIHRvIHRoZSBpRnJhbWVcbiAgICogcGFyYW1zIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5VXhWZXJzaW9uKHBhcmFtcykge1xuICAgIHBhcmFtcy5hcHBlbmQoJ3V4X3ZlcnNpb24nLCAnMicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhlIFwianNfdmVyc2lvblwiIHBhcmFtZXRlciB0byB0aGUgaUZyYW1lIHBhcmFtc1xuICAgKiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7VVJMU2VhcmNoUGFyYW1zfSBwYXJhbXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBseVZlcnNpb24ocGFyYW1zKSB7XG4gICAgcGFyYW1zLmFwcGVuZCgnanNfdmVyc2lvbicsIF9fUEtHX1ZFUlNJT05fXyk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBjcmF0ZXMgdGhlIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1VSTH0gZnJhbWVVUkxcbiAgICogQHJldHVybnMge1VSTFNlYXJjaFBhcmFtc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRGcmFtZVBhcmFtcyhmcmFtZVVSTCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZnJhbWVVUkwuc2VhcmNoKTtcblxuICAgIHRoaXMuX2FwcGx5Q2xpZW50SWQocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseURlYnVnKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlGaW5hbEJ1dHRvblRleHQocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseUhpZGVIZWFkZXIocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseUxvY2FsZShwYXJhbXMpO1xuICAgIHRoaXMuX2FwcGx5UGFyZW50VVJMKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlSZWRpcmVjdFRvKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlSZXF1ZXN0aW5nRW1haWwocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseVRlc3RNb2RlKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlVeFZlcnNpb24ocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseVZlcnNpb24ocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseVdoaXRlTGFiZWxpbmcocGFyYW1zKTtcblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBhbmQgc2V0cyB0aGUgaUZyYW1lIGZyYW1lIHNyYy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZUZyYW1lVXJsKHVybCkge1xuICAgIGNvbnN0IGZyYW1lVVJMID0gbmV3IFVSTCh1cmwpO1xuICAgIGNvbnN0IGZyYW1lUGFyYW1zID0gdGhpcy5fZ2V0RnJhbWVQYXJhbXMoZnJhbWVVUkwpO1xuXG4gICAgZnJhbWVVUkwuc2VhcmNoID0gZnJhbWVQYXJhbXMudG9TdHJpbmcoKTtcblxuICAgIHRoaXMuX2lGcmFtZVVSTCA9IGZyYW1lVVJMO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIEhlbGxvU2lnbiBFbWJlZGRlZCBtYXJrdXAuXG4gICAqXG4gICAqIFdlIHdvdWxkIGxpa2UgdG8gaGF2ZSB1c2VkIEhUTUwgQ29udGVudCBUZW1wbGF0ZXMgb3JcbiAgICogUmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KCkgYnV0IHdlIGFyZSBjb25jZXJuZWRcbiAgICogYWJvdXQgYnJvd3NlciBzdXBwb3J0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVuZGVyTWFya3VwKCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuY29udGFpbmVyKSB7XG4gICAgICBlbGVtLmlubmVySFRNTCA9IHNhZmVIdG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiJHtzZXR0aW5ncy5jbGFzc05hbWVzLkJBU0V9XCI+XG4gICAgICAgICAgPGlmcmFtZSBjbGFzcz1cIiR7c2V0dGluZ3MuY2xhc3NOYW1lcy5JRlJBTUV9XCIgbmFtZT1cIiR7c2V0dGluZ3MuaWZyYW1lLk5BTUV9XCIgc3JjPVwiJHt0aGlzLl9pRnJhbWVVUkwuaHJlZn1cIiBzY3JvbGxpbmc9XCJub1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5pbm5lckhUTUwgPSBzYWZlSHRtbGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIiR7c2V0dGluZ3MuY2xhc3NOYW1lcy5CQVNFfSAke3NldHRpbmdzLmNsYXNzTmFtZXMuQkFTRV9JTl9NT0RBTH1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtzZXR0aW5ncy5jbGFzc05hbWVzLk1PREFMX1NDUkVFTn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtzZXR0aW5ncy5jbGFzc05hbWVzLk1PREFMX0NPTlRFTlR9XCI+XG4gICAgICBgICsgKFxuICAgICAgICB0aGlzLl9jb25maWcuYWxsb3dDYW5jZWwgPyBzYWZlSHRtbGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPSR7c2V0dGluZ3MuY2xhc3NOYW1lcy5NT0RBTF9DTE9TRX0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSR7c2V0dGluZ3MuY2xhc3NOYW1lcy5NT0RBTF9DTE9TRV9CVE59IHJvbGU9XCJidXR0b25cIiB0aXRsZT1cIkNsb3NlIHNpZ25hdHVyZSByZXF1ZXN0XCI+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAgOiAnJ1xuICAgICAgKSArIHNhZmVIdG1sYFxuICAgICAgICAgICAgPGlmcmFtZSBjbGFzcz1cIiR7c2V0dGluZ3MuY2xhc3NOYW1lcy5JRlJBTUV9XCIgbmFtZT1cIiR7c2V0dGluZ3MuaWZyYW1lLk5BTUV9XCIgc3JjPVwiJHt0aGlzLl9pRnJhbWVVUkwuaHJlZn1cIiBzY3JvbGxpbmc9XCJub1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbS5maXJzdENoaWxkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIEhlbGxvU2lnbiBFbWJlZGRlZCBtYXJrdXAgaW50byB0aGUgRE9NLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGVuZE1hcmt1cCgpIHtcbiAgICB0aGlzLl9iYXNlRWwgPSB0aGlzLl9yZW5kZXJNYXJrdXAoKTtcblxuICAgIC8vIExpc3RlbiBmb3IgY2xpY2sgZXZlbnRzIHdpdGhpbiB0aGUgSGVsbG9TaWduXG4gICAgLy8gRW1iZWRkZWQgRE9NIG1hcmt1cC4gVGhlc2Ugd2lsbCBiZSBkZWxlZ2F0ZWRcbiAgICAvLyBkZXBlbmRpbmcgb24gdGhlIHNvdXJjZSBlbGVtZW50LlxuICAgIHRoaXMuX2Jhc2VFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uRW1iZWRkZWRDbGljayk7XG5cbiAgICAvLyBPYnRhaW4gZWxlbWVudCByZWZlcmVuY2VzLlxuICAgIHRoaXMuX2lGcmFtZUVsID0gdGhpcy5fYmFzZUVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2V0dGluZ3MuY2xhc3NOYW1lcy5JRlJBTUUpLml0ZW0oMCk7XG5cbiAgICAvLyBJbnNlcnQgSGVsbG9TaWduIEVtYmVkZGVkIG1hcmt1cCBpbnRvIHRoZSBET00uXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fYmFzZUVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9iYXNlRWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBIZWxsb1NpZ24gRW1iZWRkZWQgbWFya3VwIGZyb20gdGhlIERPTS5cbiAgICpcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jbGVhck1hcmt1cCgpIHtcbiAgICB0aGlzLl9iYXNlRWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9iYXNlRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IEhlbGxvU2lnbk1lc3NhZ2VcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGVcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IFtwYXlsb2FkXVxuICAgKi9cblxuICAvKipcbiAgICogUG9zdHMgYSBjcm9zcy1vcmlnaW4gd2luZG93IG1lc3NhZ2UgdG8gdGhlIEhlbGxvU2lnblxuICAgKiBFbWJlZGRlZCBpRnJhbWUgY29udGVudCB3aW5kb3cuXG4gICAqXG4gICAqIEBwYXJhbSB7SGVsbG9TaWduTWVzc2FnZX0gbXNnXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2VuZE1lc3NhZ2UobXNnKSB7XG4gICAgZGVidWcuaW5mbygncG9zdGluZyBtZXNzYWdlJywgbXNnKTtcblxuICAgIGNvbnN0IHRhcmdldE9yaWdpbiA9IHRoaXMuX2lGcmFtZVVSTC5ocmVmO1xuICAgIGNvbnN0IHRhcmdldFdpbmRvdyA9IHRoaXMuX2lGcmFtZUVsLmNvbnRlbnRXaW5kb3c7XG5cbiAgICB0YXJnZXRXaW5kb3cucG9zdE1lc3NhZ2UobXNnLCB0YXJnZXRPcmlnaW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgY2FuY2VsIHJlcXVlc3QgbWVzc2FnZSB0byB0aGUgYXBwLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NlbmRDYW5jZWxSZXF1ZXN0TWVzc2FnZSgpIHtcbiAgICBkZWJ1Zy5pbmZvKCdzZW5kaW5nIGNhbmNlbCByZXF1ZXN0IG1lc3NhZ2UnKTtcblxuICAgIHRoaXMuX3NlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IHNldHRpbmdzLm1lc3NhZ2VzLlVTRVJfQ0FOQ0VMX1JFUVVFU1QsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgdGhlIGNvbmZpZ3VyYXRpb24gbWVzc2FnZSB0byB0aGUgYXBwLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NlbmRDb25maWd1cmF0aW9uTWVzc2FnZSgpIHtcbiAgICBkZWJ1Zy5pbmZvKCdzZW5kaW5nIGFwcCBjb25maWd1cmF0aW9uIG1lc3NhZ2UnKTtcblxuICAgIHRoaXMuX3NlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IHNldHRpbmdzLm1lc3NhZ2VzLkFQUF9DT05GSUdVUkUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGFsbG93Q2FuY2VsOiB0aGlzLl9jb25maWcuYWxsb3dDYW5jZWwsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIHRoZSBkb21haW4gdmVyaWZpY2F0aW9uIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9rZW5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZW5kRG9tYWluVmVyaWZpY2F0aW9uTWVzc2FnZSh0b2tlbikge1xuICAgIGRlYnVnLmluZm8oJ3NlbmRpbmcgZG9tYWluIHZlcmlmaWNhdGlvbiBtZXNzYWdlJywgdG9rZW4pO1xuXG4gICAgdGhpcy5fc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogc2V0dGluZ3MubWVzc2FnZXMuQVBQX1ZFUklGWV9ET01BSU5fUkVTUE9OU0UsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHRva2VuLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyB0aGUgaW5pdGlhbGl6YXRpb24gZXJyb3IgbWVzc2FnZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZW5kSW5pdGlhbGl6YXRpb25FcnJvck1lc3NhZ2UoKSB7XG4gICAgZGVidWcuaW5mbygnc2VuZGluZyBpbml0aWFsaXphdGlvbiBlcnJvciBtZXNzYWdlJyk7XG5cbiAgICB0aGlzLl9zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiBzZXR0aW5ncy5tZXNzYWdlcy5BUFBfRVJST1IsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBcHAgZmFpbGVkIHRvIGluaXRpYWxpemUgYmVmb3JlIHRpbWVvdXQnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGluaXRpYWxpemF0aW9uIHRpbWVvdXQgdGltZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2xlYXJJbml0VGltZW91dCgpIHtcbiAgICBpZiAodGhpcy5faW5pdFRpbWVvdXQpIHtcbiAgICAgIGRlYnVnLmluZm8oJ2NsZWFyaW5nIGluaXRpYWxpemF0aW9uIHRpbWVvdXQnKTtcblxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2luaXRUaW1lb3V0KTtcblxuICAgICAgdGhpcy5faW5pdFRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGluaXRpYWxpemF0aW9uIHRpbWVvdXQgdGltZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc3RhcnRJbml0VGltZW91dCgpIHtcbiAgICBkZWJ1Zy5pbmZvKCdzdGFydGluZyBpbml0aWFsaXphdGlvbiB0aW1lb3V0Jyk7XG5cbiAgICB0aGlzLl9jbGVhckluaXRUaW1lb3V0KCk7XG5cbiAgICB0aGlzLl9pbml0VGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5fb25Jbml0VGltZW91dCwgdGhpcy5fY29uZmlnLnRpbWVvdXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgaW5pdGlhbGl6YXRpb24gdGltZW91dCB0aW1lciBpZiB0aGUgd29ya2Zsb3dcbiAgICogaXMgZW1iZWRkZWQgc2lnbmluZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9tYXliZVN0YXJ0SW5pdFRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuX2lGcmFtZVVSTC5ocmVmLmluY2x1ZGVzKCdlbWJlZGRlZFNpZ24nKSkge1xuICAgICAgLy8gU3RhcnQgdGhlIGluaXRpYWxpemF0aW9uIHRpbWVvdXQgYmVjYXVzZSB0aGlzIGlzXG4gICAgICAvLyBlbWJlZGRlZCBzaWduaW5nLlxuICAgICAgdGhpcy5fc3RhcnRJbml0VGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI2Vycm9yXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzaWduYXR1cmVJZFxuICAgKiBAcHJvcGVydHkge251bWJlcn0gY29kZVxuICAgKi9cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGFwcCBlbmNvdW50ZXJlZCBhbiBlcnJvci5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNlcnJvclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcERpZEVycm9yKHBheWxvYWQpIHtcbiAgICBkZWJ1Zy5lcnJvcignYXBwIGVuY291bnRlcmVkIGFuIGVycm9yIHdpdGggY29kZTonLCBwYXlsb2FkLmNvZGUpO1xuXG4gICAgdGhpcy5lbWl0KHNldHRpbmdzLmV2ZW50cy5FUlJPUiwgcGF5bG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogQGV2ZW50IEhlbGxvU2lnbiNyZWFkeVxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gc2lnbmF0dXJlSWRcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBhcHAgd2FzIGluaXRpYWxpemVkLlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI3JlYWR5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwRGlkSW5pdGlhbGl6ZShwYXlsb2FkKSB7XG4gICAgZGVidWcuaW5mbygnYXBwIHdhcyBpbml0aWFsaXplZCcpO1xuXG4gICAgdGhpcy5faXNSZWFkeSA9IHRydWU7XG5cbiAgICB0aGlzLl9zZW5kQ29uZmlndXJhdGlvbk1lc3NhZ2UoKTtcbiAgICB0aGlzLl9jbGVhckluaXRUaW1lb3V0KCk7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLlJFQURZLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgYXBwIHJlcXVlc3RlZCBkb21haW4gdmVyaWZpY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF5bG9hZC50b2tlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcERpZFJlcXVlc3REb21haW5WZXJpZmljYXRpb24oeyB0b2tlbiB9KSB7XG4gICAgZGVidWcuaW5mbygnYXBwIHJlcXVlc3RlZCBkb21haW4gdmVyaWZpY2F0aW9uJywgdG9rZW4pO1xuXG4gICAgdGhpcy5fc2VuZERvbWFpblZlcmlmaWNhdGlvbk1lc3NhZ2UodG9rZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jbWVzc2FnZVxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZVxuICAgKiBAcHJvcGVydHkgez9PYmplY3R9IHBheWxvYWRcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIEhlbGxvU2lnbiBFbWJlZGRlZCByZWNlaXZlcyBhIGNyb3NzLW9yaWdpblxuICAgKiB3aW5kb3cgbWVzc2FnZS5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNtZXNzYWdlXG4gICAqIEBwYXJhbSB7TWVzc2FnZUV2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBEaWRTZW5kTWVzc2FnZSh7IGRhdGEsIG9yaWdpbiB9KSB7XG4gICAgZGVidWcuaW5mbygncmVjZWl2ZWQgbWVzc2FnZScsIGRhdGEsIG9yaWdpbik7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLk1FU1NBR0UsIGRhdGEpO1xuXG4gICAgdGhpcy5fZGVsZWdhdGVNZXNzYWdlKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jY2FuY2VsXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBjYW5jZWxlZCB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNjYW5jZWxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkQ2FuY2VsUmVxdWVzdCgpIHtcbiAgICBkZWJ1Zy5pbmZvKCd1c2VyIGNhbmNlbGVkIHRoZSBzaWduYXR1cmUgcmVxdWVzdCcpO1xuXG4gICAgdGhpcy5lbWl0KHNldHRpbmdzLmV2ZW50cy5DQU5DRUwpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jY3JlYXRlVGVtcGxhdGVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHRpdGxlXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IHNpZ25lclJvbGVzXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzaWduYXR1cmVSZXF1ZXN0SW5mb1xuICAgKi9cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY3JlYXRlZCB0aGUgdGVtcGxhdGUuXG4gICAqXG4gICAqIEBlbWl0cyBIZWxsb1NpZ24jY3JlYXRlVGVtcGxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkQ3JlYXRlVGVtcGxhdGUocGF5bG9hZCkge1xuICAgIGRlYnVnLmluZm8oJ3VzZXIgY3JlYXRlZCB0aGUgc2lnbmF0dXJlIHJlcXVlc3QgdGVtcGxhdGUnKTtcblxuICAgIHRoaXMuZW1pdChzZXR0aW5ncy5ldmVudHMuQ1JFQVRFX1RFTVBMQVRFLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI2RlY2xpbmVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZUlkXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWFzb25cbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIGRlY2xpbmVkIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI2RlY2xpbmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkRGVjbGluZVJlcXVlc3QocGF5bG9hZCkge1xuICAgIGRlYnVnLmluZm8oJ3VzZXIgZGVjbGluZWQgdGhlIHNpZ25hdHVyZSByZXF1ZXN0Jyk7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLkRFQ0xJTkUsIHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jZmluaXNoXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBmaW5pc2hlZCB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNmaW5pc2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkRmluaXNoUmVxdWVzdCgpIHtcbiAgICBkZWJ1Zy5pbmZvKCd1c2VyIGZpbmlzaGVkIHRoZSBzaWduYXR1cmUgcmVxdWVzdCcpO1xuXG4gICAgdGhpcy5lbWl0KHNldHRpbmdzLmV2ZW50cy5GSU5JU0gpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jcmVhc3NpZ25cbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZUlkXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbWFpbFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gcmVhc29uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciByZWFzc2lnbmVkIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI3JlYXNzaWduXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXNlckRpZFJlYXNzaWduUmVxdWVzdChwYXlsb2FkKSB7XG4gICAgZGVidWcuaW5mbygndXNlciByZWFzc2lnbmVkIHRoZSBzaWduYXR1cmUgcmVxdWVzdCB3aXRoIHJlYXNvbjonLCBwYXlsb2FkLnJlYXNvbik7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLlJFQVNTSUdOLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI3NlbmRcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZVJlcXVlc3RJZFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gc2lnbmF0dXJlSWRcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIHNlbnQgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBlbWl0cyBIZWxsb1NpZ24jc2VuZFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VzZXJEaWRTZW5kUmVxdWVzdChwYXlsb2FkKSB7XG4gICAgZGVidWcuaW5mbygndXNlciBzZW50IHRoZSBzaWduYXR1cmUgcmVxdWVzdCcpO1xuXG4gICAgdGhpcy5faXNTZW50T3JTaWduZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5lbWl0KHNldHRpbmdzLmV2ZW50cy5TRU5ELCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI3NpZ25cbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZUlkXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBzaWduZWQgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBlbWl0cyBIZWxsb1NpZ24jc2lnblxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VzZXJEaWRTaWduUmVxdWVzdChwYXlsb2FkKSB7XG4gICAgZGVidWcuaW5mbygndXNlciBzaWduZWQgdGhlIHNpZ25hdHVyZSByZXF1ZXN0Jyk7XG5cbiAgICB0aGlzLl9pc1NlbnRPclNpZ25lZCA9IHRydWU7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLlNJR04sIHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl0aGluZyB3aXRoaW4gdGhlXG4gICAqIEhlbGxvU2lnbiBFbWJlZGRlZCBib3VuZGFyeS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25FbWJlZGRlZENsaWNrKGV2dCkge1xuICAgIGNvbnN0IGVsZW0gPSBldnQuc3JjRWxlbWVudDtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWQgaXMgdGhlIGNsb3NlXG4gICAgLy8gYnV0dG9uLlxuICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhzZXR0aW5ncy5jbGFzc05hbWVzLk1PREFMX0NMT1NFX0JUTikpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBJZiB0aGUgYXBwIGlzIHJlYWR5IGJ1dCBoYXMgbm90IHlldCBiZWVuIHNlbnQgb3JcbiAgICAgIC8vIHNpZ25lZCwgY2xvc2UgdmlhIHRoZSBhcHAuIE90aGVyd2lzZSwgd2UgZm9yY2VcbiAgICAgIC8vIGNsb3NlIHdpdGhvdXQgbm90aWZ5aW5nIHRoZSBhcHAuIFRoaXMgaXMgYmVjYXVzZVxuICAgICAgLy8gdGhlIGNsb3NlIGJ1dHRvbiBjYW4gcmVwcmVzZW50IGEgXCJjYW5jZWxcIiBvciBhXG4gICAgICAvLyBcImNsb3NlXCIgZGVwZGVuZGluZyBvbiB0aGUgc3RhdGUgb2YgdGhlIHJlcXVlc3QsXG4gICAgICAvLyBidXQgRW1iZWRkZWQgaXMgbm90IGF3YXJlIG9mIHRoaXMgc3RhdGUuIFRoZXJlZm9yZVxuICAgICAgLy8gd2Ugc2VuZCB0aGUgY2xvc2UgcmVxdWVzdCBkb3duIHRvIHRoZSBhcHAgc28gdGhhdFxuICAgICAgLy8gdGhlIGFwcCBjYW4gZGV0ZXJtaW5lIHRoZSBwcm9wZXIgY2xvc2UgdHlwZS5cbiAgICAgIGlmICh0aGlzLl9pc1JlYWR5ICYmICF0aGlzLl9pc1NlbnRPclNpZ25lZCkge1xuICAgICAgICB0aGlzLl9zZW5kQ2FuY2VsUmVxdWVzdE1lc3NhZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGluaXRpYWxpemF0aW9uIHRpbWVvdXQgdGltZXIgY29tcGxldGVzLlxuICAgKiBTZW5kcyBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSBhcHAgYW5kIGNsb3NlcyBIZWxsb1NpZ25cbiAgICogRW1iZWRkZWQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25Jbml0VGltZW91dCgpIHtcbiAgICBkZWJ1Zy5lcnJvcignYXBwIGZhaWxlZCB0byBpbml0aWFsaXplIGJlZm9yZSB0aW1lb3V0Jyk7XG5cbiAgICAvLyBEaXNwbGF5IGVycm9yIHRvIHRoZSB1c2VyIGluc3RlYWQgb2YganVzdCBjbG9zaW5nIHRoZVxuICAgIC8vIHNpZ25hdHVyZSByZXF1ZXN0IHdpbmRvdy5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hlbiBwcmVwYXJpbmcgeW91ciBzaWduYXR1cmUgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcblxuICAgIHRoaXMuX3NlbmRJbml0aWFsaXphdGlvbkVycm9yTWVzc2FnZSgpO1xuICAgIHRoaXMuX2NsZWFySW5pdFRpbWVvdXQoKTtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBuYXZpZ2F0ZXMgYXdheSBmcm9tIHRoZSBwYWdlIGluXG4gICAqIHNvbWUgd2F5LiBBbHRob3VnaCBtb2Rlcm4gYnJvd3NlcnMgd2lsbCBsaWtlbHkgYmxvY2tcbiAgICogdGhpcyBtZXNzYWdlLCB0aGUgYnJvd3NlciBtYXkgc3RpbGwgbmF0aXZlbHkgY29uZmlybVxuICAgKiB3aXRoIHRoZSB1c2VyIGlmIHRoZXkgd2FudCB0byBsZWF2ZSBvciBzdGF5IG9uIHRoZVxuICAgKiBwYWdlLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9iZWZvcmV1bmxvYWRcbiAgICogQHBhcmFtIHtCZWZvcmVVbmxvYWRFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25CZWZvcmVVbmxvYWQoZXZ0KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVhZHkpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMsIG5vLWFsZXJ0ICovXG4gICAgICBpZiAoIWNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbG9zZSB0aGlzIHNpZ25hdHVyZSByZXF1ZXN0PyBZb3Ugd2lsbCBsb3NlIHlvdXIgY2hhbmdlcy4nKSkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBDaHJvbWUgcmVxdWlyZXMgcmV0dXJuVmFsdWUgdG8gYmUgc2V0LlxuICAgICAgICBldnQucmV0dXJuVmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkIGJ5IHRoZSB3aW5kb3cuXG4gICAqIFZhbGlkYXRlcyB0aGUgbWVzc2FnZSBvcmlnaW4gYW5kIGRlbGVnYXRlcyB0byB0aGVcbiAgICogYXBwcm9wcmlhdGUgbWV0aG9kIGJhc2VkIG9uIHRoZSBtZXNzYWdlIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB7TWVzc2FnZUV2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgIGNvbnN0IHN0cmlwcGVkT3JpZ2luID0gbWVzc2FnZS5vcmlnaW4ucmVwbGFjZSgvXFwvJC8sICcnKTtcblxuICAgIGlmIChzdHJpcHBlZE9yaWdpbiA9PT0gdGhpcy5faUZyYW1lVVJMLm9yaWdpbikge1xuICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMuX2FwcERpZFNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIG1lc3NhZ2UgaXMgcmVjZWl2ZWQgYnkgdGhlIHdpbmRvdy5cbiAgICogVmFsaWRhdGVzIHRoZSBtZXNzYWdlIG9yaWdpbiBhbmQgZGVsZWdhdGVzIHRvIHRoZVxuICAgKiBhcHByb3ByaWF0ZSBtZXRob2QgYmFzZWQgb24gdGhlIG1lc3NhZ2UgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHtIZWxsb1NpZ25NZXNzYWdlfSBtc2dcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9kZWxlZ2F0ZU1lc3NhZ2UoeyB0eXBlLCBwYXlsb2FkIH0pIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2Ugc2V0dGluZ3MubWVzc2FnZXMuQVBQX0VSUk9SOlxuICAgICAgICB0aGlzLl9hcHBEaWRFcnJvcihwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNldHRpbmdzLm1lc3NhZ2VzLkFQUF9JTklUSUFMSVpFOlxuICAgICAgICB0aGlzLl9hcHBEaWRJbml0aWFsaXplKHBheWxvYWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2V0dGluZ3MubWVzc2FnZXMuQVBQX1ZFUklGWV9ET01BSU5fUkVRVUVTVDpcbiAgICAgICAgdGhpcy5fYXBwRGlkUmVxdWVzdERvbWFpblZlcmlmaWNhdGlvbihwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNldHRpbmdzLm1lc3NhZ2VzLlVTRVJfQ0FOQ0VMX1JFUVVFU1Q6XG4gICAgICAgIHRoaXMuX3VzZXJEaWRDYW5jZWxSZXF1ZXN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZXR0aW5ncy5tZXNzYWdlcy5VU0VSX0NSRUFURV9URU1QTEFURTpcbiAgICAgICAgdGhpcy5fdXNlckRpZENyZWF0ZVRlbXBsYXRlKHBheWxvYWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2V0dGluZ3MubWVzc2FnZXMuVVNFUl9ERUNMSU5FX1JFUVVFU1Q6XG4gICAgICAgIHRoaXMuX3VzZXJEaWREZWNsaW5lUmVxdWVzdChwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNldHRpbmdzLm1lc3NhZ2VzLlVTRVJfRklOSVNIX1JFUVVFU1Q6XG4gICAgICAgIHRoaXMuX3VzZXJEaWRGaW5pc2hSZXF1ZXN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZXR0aW5ncy5tZXNzYWdlcy5VU0VSX1JFQVNTSUdOX1JFUVVFU1Q6XG4gICAgICAgIHRoaXMuX3VzZXJEaWRSZWFzc2lnblJlcXVlc3QocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZXR0aW5ncy5tZXNzYWdlcy5VU0VSX1NFTkRfUkVRVUVTVDpcbiAgICAgICAgdGhpcy5fdXNlckRpZFNlbmRSZXF1ZXN0KHBheWxvYWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2V0dGluZ3MubWVzc2FnZXMuVVNFUl9TSUdOX1JFUVVFU1Q6XG4gICAgICAgIHRoaXMuX3VzZXJEaWRTaWduUmVxdWVzdChwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBVbmhhbmRsZWQgbWVzc2FnZS5cbiAgICAgICAgZGVidWcud2FybigndW5oYW5kbGVkIGNyb3NzLW9yaWdpbiB3aW5kb3cgbWVzc2FnZScsIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI29wZW5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHVybFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gaUZyYW1lVXJsXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBIZWxsb1NpZ25PcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2FsbG93Q2FuY2VsPXRydWVdXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY2xpZW50SWRdXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IFtjb250YWluZXJdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2RlYnVnPWZhbHNlXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtoaWRlSGVhZGVyPWZhbHNlXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW2xvY2FsZT1cImVuX1VTXCJdXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcmVkaXJlY3RUb11cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtyZXF1ZXN0aW5nRW1haWxdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3NraXBEb21haW5WZXJpZmljYXRpb249ZmFsc2VdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3Rlc3RNb2RlPWZhbHNlXVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW3RpbWVvdXQ9MzAwMDBdXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBbd2hpdGVMYWJlbGluZ11cbiAgICovXG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSB1cmwgaW4gSGVsbG9TaWduIEVtYmVkZGVkLlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI29wZW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge0hlbGxvU2lnbk9wdGlvbnN9IFtvcHRzPXt9XVxuICAgKiBAcHVibGljXG4gICAqL1xuICBvcGVuKHVybCwgb3B0cyA9IHt9KSB7XG4gICAgZGVidWcuaW5mbygnb3BlbigpJywgdXJsLCBvcHRzKTtcblxuICAgIC8vIENsb3NlIGlmIGVtYmVkZGVkIGlzIGFscmVhZHkgb3Blbi5cbiAgICBpZiAodGhpcy5faXNPcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICAuLi50aGlzLl9iYXNlQ29uZmlnLFxuICAgICAgLi4ub3B0cyxcbiAgICB9O1xuXG4gICAgLy8gQ2hlY2sgaWYgY29udGFpbmVyIGlzIHZhbGlkLlxuICAgIGlmICh0aGlzLl9jb25maWcuY29udGFpbmVyKSB7XG4gICAgICBpZiAoISh0aGlzLl9jb25maWcuY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiY29udGFpbmVyXCIgbXVzdCBiZSBhbiBlbGVtZW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlRnJhbWVVcmwodXJsKTtcbiAgICB0aGlzLl9hcHBlbmRNYXJrdXAoKTtcbiAgICB0aGlzLl9tYXliZVN0YXJ0SW5pdFRpbWVvdXQoKTtcblxuICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX29uTWVzc2FnZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHRoaXMuX29uQmVmb3JlVW5sb2FkKTtcblxuICAgIHRoaXMuZW1pdChzZXR0aW5ncy5ldmVudHMuT1BFTiwge1xuICAgICAgdXJsOiB0aGlzLl9pRnJhbWVVUkwuaHJlZixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI2Nsb3NlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIEhlbGxvU2lnbiBFbWJlZGVkIHdpbmRvdy5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNjbG9zZVxuICAgKiBAcHVibGljXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBkZWJ1Zy5pbmZvKCdjbG9zZSgpJyk7XG5cbiAgICAvLyBJdCdzIGFscmVhZHkgY2xvc2VkIVxuICAgIGlmICghdGhpcy5faXNPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJJbml0VGltZW91dCgpO1xuICAgIHRoaXMuX2NsZWFyTWFya3VwKCk7XG5cbiAgICB0aGlzLl9iYXNlRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkVtYmVkZGVkQ2xpY2spO1xuXG4gICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICB0aGlzLl9iYXNlRWwgPSBudWxsO1xuICAgIHRoaXMuX2lGcmFtZUVsID0gbnVsbDtcbiAgICB0aGlzLl9pRnJhbWVVUkwgPSBudWxsO1xuICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuX2lzUmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1NlbnRPclNpZ25lZCA9IGZhbHNlO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbk1lc3NhZ2UpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCB0aGlzLl9vbkJlZm9yZVVubG9hZCk7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLkNMT1NFKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGlueS1lbWl0dGVyJ3MgXCJlbWl0XCIgbWV0aG9kLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3RpbnktZW1pdHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge2FueX0gW2RhdGFdXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZW1pdCguLi5hcmdzKSB7XG4gICAgZGVidWcuaW5mbygnZW1pdCgpJywgLi4uYXJncyk7XG5cbiAgICBzdXBlci5lbWl0KC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHs/SFRNTEVsZW1lbnR9XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldCBlbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9iYXNlRWw7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgez9IVE1MRWxlbWVudH1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0IGlGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faUZyYW1lRWw7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldCBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0IGlzUmVhZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUmVhZHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVsbG9TaWduO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZW1iZWRkZWQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9lbWJlZGRlZC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9lbWJlZGRlZC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyoqXG4gKiBIZWxsb1NpZ24gRW1iZWRkZWQgY2xhc3MgbmFtZXMuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqIEByZWFkb25seVxuICovXG5jb25zdCBjbGFzc05hbWVzID0ge1xuICBCQVNFOiAneC1oZWxsb3NpZ24tZW1iZWRkZWQnLFxuICBCQVNFX0lOX01PREFMOiAneC1oZWxsb3NpZ24tZW1iZWRkZWQtLWluLW1vZGFsJyxcbiAgSUZSQU1FOiAneC1oZWxsb3NpZ24tZW1iZWRkZWRfX2lmcmFtZScsXG4gIE1PREFMX0NMT1NFOiAneC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNsb3NlJyxcbiAgTU9EQUxfQ0xPU0VfQlROOiAneC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNsb3NlLWJ1dHRvbicsXG4gIE1PREFMX0NPTlRFTlQ6ICd4LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY29udGVudCcsXG4gIE1PREFMX1NDUkVFTjogJ3gtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1zY3JlZW4nLFxufTtcblxuLyoqXG4gKiBIZWxsb1NpZ24gRW1iZWRkZWQgZXZlbnRzLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcmVhZG9ubHlcbiAqL1xuY29uc3QgZXZlbnRzID0ge1xuICBFUlJPUjogJ2Vycm9yJyxcbiAgU0VORDogJ3NlbmQnLFxuICBDQU5DRUw6ICdjYW5jZWwnLFxuICBDTE9TRTogJ2Nsb3NlJyxcbiAgQ1JFQVRFX1RFTVBMQVRFOiAnY3JlYXRlVGVtcGxhdGUnLFxuICBERUNMSU5FOiAnZGVjbGluZScsXG4gIEZJTklTSDogJ2ZpbmlzaCcsXG4gIE1FU1NBR0U6ICdtZXNzYWdlJyxcbiAgT1BFTjogJ29wZW4nLFxuICBSRUFEWTogJ3JlYWR5JyxcbiAgUkVBU1NJR046ICdyZWFzc2lnbicsXG4gIFNJR046ICdzaWduJyxcbn07XG5cbi8qKlxuICogSGVsbG9TaWduIEVtYmVkZGVkIGlGcmFtZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcmVhZG9ubHlcbiAqL1xuY29uc3QgaWZyYW1lID0ge1xuICBOQU1FOiAneC1oZWxsb3NpZ24tZW1iZWRkZWQnLFxufTtcblxuLyoqXG4gKiBIZWxsb1NpZ24gRW1iZWRkZWQgc3VwcG9ydGVkIGxvY2FsZXMuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqIEByZWFkb25seVxuICovXG5jb25zdCBsb2NhbGVzID0ge1xuICBEQV9ESzogJ2RhX0RLJywgLy8gRGFuaXNoIChEZW5tYXJrKVxuICBERV9ERTogJ2RlX0RFJywgLy8gR2VybWFuIChHZXJtYW55KVxuICBFTl9VUzogJ2VuX1VTJywgLy8gRW5nbGlzaCAoVW5pdGVkIFN0YXRlcylcbiAgRVNfRVM6ICdlc19FUycsIC8vIFNwYW5pc2ggKFNwYWluKVxuICBFU19NWDogJ2VzX01YJywgLy8gU3BhbmlzaCAoTWV4aWNvKVxuICBGUl9GUjogJ2ZyX0ZSJywgLy8gRnJlbmNoIChGcmFuY2UpXG4gIElUX0lUOiAnaXRfSVQnLCAvLyBJdGFsaWFuIChJdGFseSlcbiAgSkFfSlA6ICdqYV9KUCcsIC8vIEphcGFuZXNlIChKYXBhbilcbiAgTkxfTkw6ICdubF9OTCcsIC8vIER1dGNoIChOZXRoZXJsYW5kcylcbiAgUExfUEw6ICdwbF9QTCcsIC8vIFBvbGlzaCAoUG9sYW5kKVxuICBQVF9CUjogJ3B0X0JSJywgLy8gUG9ydHVndWVzZSAoQnJhemlsKVxuICBTVl9TRTogJ3N2X1NFJywgLy8gU3dlZGlzaCAoU3dlZGVuKVxuICBaSF9DTjogJ3poX0NOJywgLy8gQ2hpbmVzZSAoU2ltcGxpZmllZClcbn07XG5cbi8qKlxuICogSGVsbG9TaWduIEVtYmVkZGVkIGNyb3NzLW9yaWdpbiB3aW5kb3cgbWVzc2FnZXMuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqIEByZWFkb25seVxuICovXG5jb25zdCBtZXNzYWdlcyA9IHtcbiAgQVBQX0NPTkZJR1VSRTogJ2hlbGxvc2lnbjpjb25maWd1cmUnLFxuICBBUFBfRVJST1I6ICdoZWxsb3NpZ246ZXJyb3InLFxuICBBUFBfSU5JVElBTElaRTogJ2hlbGxvc2lnbjppbml0aWFsaXplJyxcbiAgQVBQX1ZFUklGWV9ET01BSU5fUkVRVUVTVDogJ2hlbGxvc2lnbjp2ZXJpZnlEb21haW5SZXF1ZXN0JyxcbiAgQVBQX1ZFUklGWV9ET01BSU5fUkVTUE9OU0U6ICdoZWxsb3NpZ246dmVyaWZ5RG9tYWluUmVzcG9uc2UnLFxuICBVU0VSX0NBTkNFTF9SRVFVRVNUOiAnaGVsbG9zaWduOnVzZXJDYW5jZWxSZXF1ZXN0JyxcbiAgVVNFUl9DUkVBVEVfVEVNUExBVEU6ICdoZWxsb3NpZ246dXNlckNyZWF0ZVRlbXBsYXRlJyxcbiAgVVNFUl9ERUNMSU5FX1JFUVVFU1Q6ICdoZWxsb3NpZ246dXNlckRlY2xpbmVSZXF1ZXN0JyxcbiAgVVNFUl9GSU5JU0hfUkVRVUVTVDogJ2hlbGxvc2lnbjp1c2VyRmluaXNoUmVxdWVzdCcsXG4gIFVTRVJfUkVBU1NJR05fUkVRVUVTVDogJ2hlbGxvc2lnbjp1c2VyUmVhc3NpZ25SZXF1ZXN0JyxcbiAgVVNFUl9TRU5EX1JFUVVFU1Q6ICdoZWxsb3NpZ246dXNlclNlbmRSZXF1ZXN0JyxcbiAgVVNFUl9TSUdOX1JFUVVFU1Q6ICdoZWxsb3NpZ246dXNlclNpZ25SZXF1ZXN0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2xhc3NOYW1lcyxcbiAgZXZlbnRzLFxuICBpZnJhbWUsXG4gIGxvY2FsZXMsXG4gIG1lc3NhZ2VzLFxufTtcbiIsIi8qKlxuICogVG8gZW5hYmxlIGRlYnVnIG1lc3NhZ2VzLCBlbnRlciB0aGUgZm9sbG93aW5nIGludG8geW91clxuICogZGV2ZWxvcGVyIHRvb2xzIGNvbnNvbGU6XG4gKlxuICogICBsb2NhbFN0b3JhZ2UuZGVidWcgPSAnaGVsbG9zaWduLWVtYmVkZGVkOionO1xuICpcbiAqIFRoaXMgd2lsbCBzdXJmYWNlIGFsbCBkZWJ1ZyBtZXNzYWdlcyB1bmRlciB0aGVcbiAqIFwiaGVsbG9zaWduOlwiIG5hbWVzcGFjZS5cbiAqL1xuXG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuXG5jb25zdCBpbmZvID0gZGVidWcoYCR7X19QS0dfTkFNRV9ffTppbmZvYCk7XG5jb25zdCB3YXJuID0gZGVidWcoYCR7X19QS0dfTkFNRV9ffTp3YXJuYCk7XG5jb25zdCBlcnJvciA9IGRlYnVnKGAke19fUEtHX05BTUVfX306ZXJyb3JgKTtcblxuaW5mby5sb2cgPSBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbndhcm4ubG9nID0gY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluZm8sXG4gIHdhcm4sXG4gIGVycm9yLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=