"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/settings",{

/***/ "./pages/settings.tsx":
/*!****************************!*\
  !*** ./pages/settings.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/mel/documents/_programming/node/ichigo/pages/settings.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar defaultSettings = {\n  a: false,\n  b: false,\n  c: false\n};\n\nvar Button = function Button() {};\n\n_c = Button;\n\nvar Settings = function Settings(_ref) {\n  _s();\n\n  var _settings = _ref._settings;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_settings || defaultSettings),\n      settings = _useState[0],\n      setSettings = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n      type: \"button\",\n      value: settings.a,\n      onChange: function onChange(e) {\n        var s = settings.slice();\n        s.a = e.target.value;\n        setSettings(s);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n/*\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n  // find settings by user\n  const settings = await prisma.settings.findUnique({\n  });\n  return { props: { settings } };\n}\n*/\n\n\n_s(Settings, \"pEf9LM5dr3d0xE30N/cgsxWqldw=\");\n\n_c2 = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c2, \"Settings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXR0aW5ncy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7QUFFQSxJQUFNRSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLENBQUMsRUFBRSxLQURtQjtBQUV0QkMsRUFBQUEsQ0FBQyxFQUFFLEtBRm1CO0FBR3RCQyxFQUFBQSxDQUFDLEVBQUU7QUFIbUIsQ0FBeEI7O0FBTUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTSxDQUNwQixDQUREOztLQUFNQTs7QUFHTixJQUFNQyxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQzVDLGtCQUFrQ1AsK0NBQVEsQ0FBQ08sU0FBUyxJQUFJTixlQUFkLENBQTFDO0FBQUEsTUFBUU8sUUFBUjtBQUFBLE1BQWtCQyxXQUFsQjs7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFLLEVBQUVELFFBQVEsQ0FBQ04sQ0FGbEI7QUFHRSxjQUFRLEVBQUUsa0JBQUNRLENBQUQsRUFBTztBQUNiLFlBQU1DLENBQUMsR0FBR0gsUUFBUSxDQUFDSSxLQUFULEVBQVY7QUFDQUQsUUFBQUEsQ0FBQyxDQUFDVCxDQUFGLEdBQU1RLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFmO0FBQ0FMLFFBQUFBLFdBQVcsQ0FBQ0UsQ0FBRCxDQUFYO0FBQ0Q7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFjRCxDQWhCRDtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0F6Qk1MOztNQUFBQTtBQTJCTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZXR0aW5ncy50c3g/ZmQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgYTogZmFsc2UsXG4gIGI6IGZhbHNlLFxuICBjOiBmYWxzZSxcbn07XG5cbmNvbnN0IEJ1dHRvbiA9ICgpID0+IHtcbn1cblxuY29uc3QgU2V0dGluZ3M6IE5leHRQYWdlID0gKHsgX3NldHRpbmdzIH0pID0+IHtcbiAgY29uc3QgWyBzZXR0aW5ncywgc2V0U2V0dGluZ3MgXSA9IHVzZVN0YXRlKF9zZXR0aW5ncyB8fCBkZWZhdWx0U2V0dGluZ3MpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgdmFsdWU9e3NldHRpbmdzLmF9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcyA9IHNldHRpbmdzLnNsaWNlKCk7XG4gICAgICAgICAgICBzLmEgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHNldFNldHRpbmdzKHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLypcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIC8vIGZpbmQgc2V0dGluZ3MgYnkgdXNlclxuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IHByaXNtYS5zZXR0aW5ncy5maW5kVW5pcXVlKHtcbiAgfSk7XG4gIHJldHVybiB7IHByb3BzOiB7IHNldHRpbmdzIH0gfTtcbn1cbiovXG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImRlZmF1bHRTZXR0aW5ncyIsImEiLCJiIiwiYyIsIkJ1dHRvbiIsIlNldHRpbmdzIiwiX3NldHRpbmdzIiwic2V0dGluZ3MiLCJzZXRTZXR0aW5ncyIsImUiLCJzIiwic2xpY2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/settings.tsx\n");

/***/ })

});