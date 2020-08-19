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
/******/ 	return __webpack_require__(__webpack_require__.s = "./carousel/main2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./carousel/animation.js":
/*!*******************************!*\
  !*** ./carousel/animation.js ***!
  \*******************************/
/*! exports provided: TimeLine, Animation, ColorAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TimeLine\", function() { return TimeLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animation\", function() { return Animation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorAnimation\", function() { return ColorAnimation; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* \n  对比 animation5.js，增加了 color 的过渡动画\n  并且将通过 progression 计算 value 的算法，放到了 animation 的方法中，因为对于不同的动画，计算方法不同。\n*/\nvar TimeLine = /*#__PURE__*/function () {\n  function TimeLine() {\n    _classCallCheck(this, TimeLine);\n\n    this.animations = [];\n    this.requestID = null;\n    this.state = 'init';\n    this.startTime = null;\n    this.pauseTime = null;\n  }\n\n  _createClass(TimeLine, [{\n    key: \"tick\",\n    value: function tick() {\n      var _this = this;\n\n      var t = Date.now() - this.startTime;\n      var animations = this.animations.filter(function (a) {\n        return !a.finished;\n      });\n\n      var _iterator = _createForOfIteratorHelper(animations),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var animation = _step.value;\n          var object = animation.object,\n              property = animation.property,\n              template = animation.template,\n              duration = animation.duration,\n              delay = animation.delay,\n              timingFunction = animation.timingFunction,\n              addTime = animation.addTime;\n          var progression = timingFunction((t - delay - addTime) / duration); // 0-1的百分比\n\n          if (t > duration + delay + addTime) {\n            progression = 1;\n            animation.finished = true;\n          }\n\n          var value = animation.valueProgression(progression); // template 的作用是因为，object[property] 通常是一个字符串，而计算出的结果一般都是数字。\n\n          object[property] = template(value);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      if (true) {\n        this.requestID = requestAnimationFrame(function () {\n          return _this.tick();\n        });\n      }\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      if (this.state !== 'init') {\n        return;\n      }\n\n      this.state = 'start';\n      this.startTime = Date.now();\n      this.tick();\n    } // 开一个新的 requestID\n\n  }, {\n    key: \"restart\",\n    value: function restart() {\n      this.pause();\n      this.animations = [];\n      this.requestID = null;\n      this.state = 'start';\n      this.startTime = Date.now();\n      this.pauseTime = null;\n      this.tick();\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      if (this.state !== 'start') {\n        return;\n      }\n\n      this.state = 'pause';\n      this.pauseTime = Date.now();\n\n      if (this.requestID !== null) {\n        cancelAnimationFrame(this.requestID);\n      }\n    }\n  }, {\n    key: \"resume\",\n    value: function resume() {\n      // 如果不加状态管理，多次resume，就会有问题\n      if (this.state !== 'pause') {\n        return;\n      }\n\n      this.state = 'start';\n      this.startTime += Date.now() - this.pauseTime;\n      this.tick();\n    }\n    /* \n      逻辑梳理\n      在 index5.html 中，点击 el2-start 按钮，执行 add 方法后，\n      1，第2个动画被 push\n      2，设置了第2个动画的 addTime\n      3，因为在第一个动画结束前， tick 方法一直在循环的执行，所以当第二次执行 tick 时，第2个动画也会被触发。\n       如果在 add 指定 animation.addTime = 0，就会在第2个动画执行的瞬间，追上第一个动画的位置。\n      因为在 tick 中计算的 progression 是一样的。\n       addTime 始终都是指，和第1个动画的延迟时间，\n      因此，如果2个动画，开始结束位置相同，持续时间也相同，addTime 是2s 时，\n      如果在第1个动画刚开始运动，就立刻让第2个也开始，则第2个动画会反向运动，再正向运动，就是为了保证和第1个差2s 的时间到达终点。\n    */\n\n  }, {\n    key: \"add\",\n    value: function add(animation, addTime) {\n      this.animations.push(animation);\n\n      if (this.state === 'start') {\n        animation.addTime = addTime !== void 0 ? addTime : Date.now() - this.startTime;\n      } else {\n        animation.addTime = addTime !== void 0 ? addTime : 0;\n      }\n    }\n  }]);\n\n  return TimeLine;\n}();\nvar Animation = /*#__PURE__*/function () {\n  function Animation(object, property, start, end, duration, delay, timingFunction, template) {\n    _classCallCheck(this, Animation);\n\n    this.object = object;\n    this.property = property;\n    this.start = start;\n    this.end = end;\n    this.duration = duration;\n    this.delay = delay || 0;\n    this.timingFunction = timingFunction;\n    this.template = template;\n  }\n\n  _createClass(Animation, [{\n    key: \"valueProgression\",\n    value: function valueProgression(progression) {\n      return this.start + progression * (this.end - this.start);\n    }\n  }]);\n\n  return Animation;\n}();\nvar ColorAnimation = /*#__PURE__*/function () {\n  function ColorAnimation(object, property, start, end, duration, delay, timingFunction, template) {\n    _classCallCheck(this, ColorAnimation);\n\n    this.object = object;\n    this.property = property;\n    this.start = start;\n    this.end = end;\n    this.duration = duration;\n    this.delay = delay || 0;\n    this.timingFunction = timingFunction;\n\n    this.template = template || function (v) {\n      return \"rgba(\".concat(v.r, \", \").concat(v.g, \", \").concat(v.b, \", \").concat(v.a, \")\");\n    };\n  }\n\n  _createClass(ColorAnimation, [{\n    key: \"valueProgression\",\n    value: function valueProgression(progression) {\n      return {\n        r: this.start.r + progression * (this.end.r - this.start.r),\n        g: this.start.g + progression * (this.end.g - this.start.g),\n        b: this.start.b + progression * (this.end.b - this.start.b),\n        a: this.start.a + progression * (this.end.a - this.start.a)\n      };\n    }\n  }]);\n\n  return ColorAnimation;\n}();\n\n//# sourceURL=webpack:///./carousel/animation.js?");

/***/ }),

/***/ "./carousel/createElement.js":
/*!***********************************!*\
  !*** ./carousel/createElement.js ***!
  \***********************************/
/*! exports provided: createElement, Text, Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* \n  以 main7.js 最终的 jsx 语法模型和 carousel.html 为基础，将其合并起来。\n  - 在 main.js 中加了动画，并且将函数封装在这个 js 中。\n*/\nfunction createElement(Cls, attributes) {\n  /* \n    ƒ Child() {_classCallCheck(this, Child);} null []\n    ƒ Child() {_classCallCheck(this, Child);} null []\n    ƒ Parent() {_classCallCheck(this, Parent);} {id: \"a\", class: \"b\"} [Child, Child]\n    \n    注意，在组件没有属性时，attributes 是 null\n    并且有第3个参数，可以看到 jsx 中，父子树的构建关系，先子后父。\n  */\n  // console.log(Cls, attributes, children)\n  var o;\n\n  if (typeof Cls === 'string') {\n    o = new Wrapper(Cls);\n  } else {\n    o = new Cls();\n  }\n\n  for (var name in attributes) {\n    o.setAttribute(name, attributes[name]);\n  }\n\n  var visit = function visit(children) {\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var child = _step.value;\n\n        if (typeof child === 'string') {\n          child = new Text(child);\n        }\n\n        if (_typeof(child) === 'object' && child instanceof Array) {\n          visit(child);\n          continue;\n        }\n\n        o.appendChild(child);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  visit(children);\n  return o;\n}\nvar Text = /*#__PURE__*/function () {\n  function Text(text) {\n    _classCallCheck(this, Text);\n\n    this.children = [];\n    this.root = document.createTextNode(text);\n  }\n\n  _createClass(Text, [{\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return Text;\n}();\nvar Wrapper = /*#__PURE__*/function () {\n  function Wrapper(type) {\n    _classCallCheck(this, Wrapper);\n\n    this.children = [];\n    this.root = document.createElement(type);\n  }\n\n  _createClass(Wrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      // attribute\n      this.root.setAttribute(name, value);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      // children\n      this.children.push(child);\n    }\n  }, {\n    key: \"addEventListener\",\n    value: function addEventListener() {\n      var _this$root;\n\n      (_this$root = this.root).addEventListener.apply(_this$root, arguments);\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root); // child 等 parent 挂载后，延迟挂载。\n\n      var _iterator2 = _createForOfIteratorHelper(this.children),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var child = _step2.value;\n          child.mountTo(this.root);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  }, {\n    key: \"style\",\n    get: function get() {\n      return this.root.style;\n    }\n  }]);\n\n  return Wrapper;\n}();\n\n//# sourceURL=webpack:///./carousel/createElement.js?");

/***/ }),

/***/ "./carousel/cubicBezier.js":
/*!*********************************!*\
  !*** ./carousel/cubicBezier.js ***!
  \*********************************/
/*! exports provided: cubicBezier, ease, linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cubicBezier\", function() { return cubicBezier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ease\", function() { return ease; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linear\", function() { return linear; });\nfunction cubicBezier(p1x, p1y, p2x, p2y) {\n  var ZERO_LIMIT = 1e-6; // Calculate the polynomial coefficients,\n  // implicit first and last control points are (0,0) and (1,1).\n\n  var ax = 3 * p1x - 3 * p2x + 1;\n  var bx = 3 * p2x - 6 * p1x;\n  var cx = 3 * p1x;\n  var ay = 3 * p1y - 3 * p2y + 1;\n  var by = 3 * p2y - 6 * p1y;\n  var cy = 3 * p1y;\n\n  function sampleCurveDerivativeX(t) {\n    // `ax t^3 + bx t^2 + cx t' expanded using Horner 's rule.\n    return (3 * ax * t + 2 * bx) * t + cx;\n  }\n\n  function sampleCurveX(t) {\n    return ((ax * t + bx) * t + cx) * t;\n  }\n\n  function sampleCurveY(t) {\n    return ((ay * t + by) * t + cy) * t;\n  } // Given an x value, find a parametric value it came from.\n\n\n  function solveCurveX(x) {\n    var t2 = x;\n    var derivative;\n    var x2; // https://trac.webkit.org/browser/trunk/Source/WebCore/platform/animation\n    // First try a few iterations of Newton's method -- normally very fast.\n    // http://en.wikipedia.org/wiki/Newton's_method\n\n    for (var i = 0; i < 8; i++) {\n      // f(t)-x=0\n      x2 = sampleCurveX(t2) - x;\n\n      if (Math.abs(x2) < ZERO_LIMIT) {\n        return t2;\n      }\n\n      derivative = sampleCurveDerivativeX(t2); // == 0, failure\n\n      /* istanbul ignore if */\n\n      if (Math.abs(derivative) < ZERO_LIMIT) {\n        break;\n      }\n\n      t2 -= x2 / derivative;\n    } // Fall back to the bisection method for reliability.\n    // bisection\n    // http://en.wikipedia.org/wiki/Bisection_method\n\n\n    var t1 = 1;\n    /* istanbul ignore next */\n\n    var t0 = 0;\n    /* istanbul ignore next */\n\n    t2 = x;\n    /* istanbul ignore next */\n\n    while (t1 > t0) {\n      x2 = sampleCurveX(t2) - x;\n\n      if (Math.abs(x2) < ZERO_LIMIT) {\n        return t2;\n      }\n\n      if (x2 > 0) {\n        t1 = t2;\n      } else {\n        t0 = t2;\n      }\n\n      t2 = (t1 + t0) / 2;\n    } // Failure\n\n\n    return t2;\n  }\n\n  function solve(x) {\n    return sampleCurveY(solveCurveX(x));\n  }\n\n  return solve;\n}\nvar ease = cubicBezier(.25, .1, .25, .1);\nvar linear = cubicBezier(0, 0, 1, 1);\n\n//# sourceURL=webpack:///./carousel/cubicBezier.js?");

/***/ }),

/***/ "./carousel/main2.js":
/*!***************************!*\
  !*** ./carousel/main2.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./carousel/createElement.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ \"./carousel/animation.js\");\n/* harmony import */ var _cubicBezier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubicBezier */ \"./carousel/cubicBezier.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Carousel = /*#__PURE__*/function () {\n  function Carousel() {\n    _classCallCheck(this, Carousel);\n\n    this.children = [];\n  }\n\n  _createClass(Carousel, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      this.children.push(child);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var childrens = this.data.map(function (url) {\n        var element = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n          src: url\n        });\n        element.addEventListener('dragstart', function (event) {\n          return event.preventDefault();\n        });\n        return element;\n      });\n      var position = 0;\n      var timeline = new _animation__WEBPACK_IMPORTED_MODULE_1__[\"TimeLine\"]();\n      timeline.start();\n\n      var next = function next() {\n        var nextPosition = (position + 1) % _this.data.length;\n        var currentPic = childrens[position];\n        var nextPic = childrens[nextPosition];\n        var currentAnimation = new _animation__WEBPACK_IMPORTED_MODULE_1__[\"Animation\"](currentPic.style, 'transform', -100 * position, -100 - 100 * position, 500, 0, _cubicBezier__WEBPACK_IMPORTED_MODULE_2__[\"ease\"], function (v) {\n          return \"translateX(\".concat(v, \"%)\");\n        });\n        var nextAnimation = new _animation__WEBPACK_IMPORTED_MODULE_1__[\"Animation\"](nextPic.style, 'transform', 100 - 100 * nextPosition, -100 * nextPosition, 500, 0, _cubicBezier__WEBPACK_IMPORTED_MODULE_2__[\"ease\"], function (v) {\n          return \"translateX(\".concat(v, \"%)\");\n        });\n        timeline.add(currentAnimation);\n        timeline.add(nextAnimation);\n        position = nextPosition;\n        setTimeout(next, 2000);\n      }; // 一开始的延迟，保证第1个图片出现。\n\n\n      setTimeout(next, 2000);\n      return Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        \"class\": \"carousel\"\n      }, childrens);\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      this.render().mountTo(parent);\n    }\n  }]);\n\n  return Carousel;\n}();\n\nvar component = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Carousel, {\n  data: ['https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg', 'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg', 'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg', 'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg']\n});\ncomponent.mountTo(document.body);\n\n//# sourceURL=webpack:///./carousel/main2.js?");

/***/ })

/******/ });