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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ToyReact.js":
/*!*********************!*\
  !*** ./ToyReact.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// //  没有render方法的，这是一个真实的dom元素\n// class Wrapper {\n//   // 我们这边要让wrapper的行为和createElement之前创建真是dom的操作一直\n//   constructor(type) {\n//     this.root = document.createElement(type);\n//   }\n//   setAttribute(name, value) {\n//     this.root.setAttribute(name, value);\n//   }\n//   //   这里不是真的child，而是一个虚拟的child\n//   appendChild(vchild) {\n//     vchild.mountTo(this.root);\n//   }\n// }\n// class ElementWrapper {\n//   // 我们这边要让wrapper的行为和createElement之前创建真是dom的操作一直\n//   constructor(type) {\n//     this.root = document.createElement(type);\n//   }\n//   setAttribute(name, value) {\n//     this.root.setAttribute(name, value);\n//   }\n//   //   这里不是真的child，而是一个虚拟的child\n//   appendChild(vchild) {\n//     vchild.mountTo(this.root);\n//   }\n//   mountTo(parent) {\n//     parent.append(this.root);\n//   }\n// }\n// class TextWrapper {\n//   // 我们这边要让wrapper的行为和createElement之前创建真是dom的操作一直\n//   constructor(content) {\n//     this.root = document.createElement(content);\n//   }\n//   mountTo(parent) {\n//     parent.append(this.root);\n//   }\n// }\nvar ToyReact = {\n  createElement: function createElement(type, attributes) {\n    var element;\n\n    if (typeof type === \"string\") {\n      //   element = new ElementWrapper(type);\n      element = document.createElement(type);\n    } else {\n      element = new type();\n    }\n\n    for (var key in attributes) {\n      if (attributes.hasOwnProperty(key)) {\n        element.setAttribute(key, attributes[key]);\n      }\n    }\n\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    for (var _i = 0, _children = children; _i < _children.length; _i++) {\n      var child = _children[_i];\n\n      if (typeof child === \"string\") {\n        // child = new TextWrapper(child);\n        child = document.createTextNode(child);\n      }\n\n      element.appendChild(child);\n    } // 返回一个实dom\n\n\n    return element;\n  },\n  render: function render(vdom, element) {\n    //   在vdom中去做一个添加操作\n    vdom.mountTo(element); //   如果这边是一个vdom的实例，这边可能不太合适？\n\n    element.appendChild(vdom);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToyReact);\n\n//# sourceURL=webpack:///./ToyReact.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToyReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToyReact */ \"./ToyReact.js\");\n // class MyComponent {\n//   render() {\n//     return <div>cool</div>;\n//   }\n//   setAttribute(name, value) {\n//     this[name] = value;\n//   }\n//   mountTo(parent) {\n//     //   获取vdom\n//     let vdom = this.render();\n//     vdom.mountTo(parent);\n//   }\n// }\n// const a = <MyComponent name=\"tony\"></MyComponent>;\n// ToyReact.render(a, document.getElementById(\"root\"));\n\nvar a = _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n  name: \"tony\"\n}, _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"hello\"), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"world\"), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"!\"));\nconsole.log(a);\ndocument.getElementById(\"root\").appendChild(a);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });