"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWNoaWdvLy4vbGliL3ByaXNtYS50cz9kNzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IHByaXNtYTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/prisma.ts */ \"./lib/prisma.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/mel/documents/_programming/node/ichigo/pages/index.tsx\";\n\n\n\n\nconst getServerSideProps = async () => {\n  const feed = await _lib_prisma_ts__WEBPACK_IMPORTED_MODULE_0__.default.message.findMany({\n    include: {\n      user: {\n        select: {\n          name: true\n        }\n      }\n    }\n  });\n  return {\n    props: {\n      feed\n    }\n  };\n};\n\nfunction Post(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n    children: props.content\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\nfunction PostView(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      children: [\" \", props.feed[0].user.name, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, this), props.feed.map(Post)]\n  }, void 0, true);\n}\n\nconst Home = ({\n  feed\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: \" \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PostView, {\n      feed: feed\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTtBQUVBOzs7QUFJTyxNQUFNRSxrQkFBc0MsR0FBRyxZQUFZO0FBQ2hFLFFBQU1DLElBQUksR0FBRyxNQUFNSCxvRUFBQSxDQUF3QjtBQUN6Q00sSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRTtBQUNKQyxRQUFBQSxNQUFNLEVBQUU7QUFBRUMsVUFBQUEsSUFBSSxFQUFFO0FBQVI7QUFESjtBQURDO0FBRGdDLEdBQXhCLENBQW5CO0FBT0EsU0FBTztBQUFFQyxJQUFBQSxLQUFLLEVBQUU7QUFBRVAsTUFBQUE7QUFBRjtBQUFULEdBQVA7QUFDRCxDQVRNOztBQVdQLFNBQVNRLElBQVQsQ0FBY0QsS0FBZCxFQUFxQjtBQUNuQixzQkFDRTtBQUFBLGNBQ0lBLEtBQUssQ0FBQ0U7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFRCxTQUFTQyxRQUFULENBQWtCSCxLQUFsQixFQUF5QjtBQUN2QixzQkFDRTtBQUFBLDRCQUNBO0FBQUEsc0JBQU9BLEtBQUssQ0FBQ1AsSUFBTixDQUFXLENBQVgsRUFBY0ksSUFBZCxDQUFtQkUsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsRUFFRUMsS0FBSyxDQUFDUCxJQUFOLENBQVdXLEdBQVgsQ0FBZUgsSUFBZixDQUZGO0FBQUEsa0JBREY7QUFNRDs7QUFFRCxNQUFNSSxJQUFjLEdBQUcsQ0FBQztBQUFFWixFQUFBQTtBQUFGLENBQUQsS0FBYztBQUNuQyxzQkFDSTtBQUFBLDRCQUNBLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUEsOERBQUMsUUFBRDtBQUFVLFVBQUksRUFBRUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBLGtCQURKO0FBTUQsQ0FQRDs7QUFTQSxpRUFBZVksSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2ljaGlnby8uL3BhZ2VzL2luZGV4LnRzeD9kYjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi9saWIvcHJpc21hLnRzJztcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZmVlZCA9IGF3YWl0IHByaXNtYS5tZXNzYWdlLmZpbmRNYW55KHtcbiAgICBpbmNsdWRlOiB7XG4gICAgICB1c2VyOiB7XG4gICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4geyBwcm9wczogeyBmZWVkIH0gfTtcbn07XG5cbmZ1bmN0aW9uIFBvc3QocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8cD5cbiAgICAgIHsgcHJvcHMuY29udGVudCB9XG4gICAgPC9wPlxuICApO1xufVxuXG5mdW5jdGlvbiBQb3N0Vmlldyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGgxPiB7IHByb3BzLmZlZWRbMF0udXNlci5uYW1lIH0gPC9oMT5cbiAgICB7IHByb3BzLmZlZWQubWFwKFBvc3QpIH1cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoeyBmZWVkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8SGVhZD4gPC9IZWFkPlxuICAgICAgPFBvc3RWaWV3IGZlZWQ9e2ZlZWR9Lz5cbiAgICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJIZWFkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZmVlZCIsIm1lc3NhZ2UiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJ1c2VyIiwic2VsZWN0IiwibmFtZSIsInByb3BzIiwiUG9zdCIsImNvbnRlbnQiLCJQb3N0VmlldyIsIm1hcCIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();