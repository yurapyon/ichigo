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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/mel/documents/_programming/node/ichigo/pages/settings.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar defaultSettings = {\n  a: false,\n  b: false,\n  c: false\n};\n\nvar cloneSettings = function cloneSettings(s) {\n  return {\n    a: s.a,\n    b: s.b,\n    c: s.c\n  };\n};\n\nvar Button = function Button(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n      type: \"checkbox\",\n      value: props.settings[props.name],\n      onChange: function onChange(e) {\n        var s = cloneSettings(props.settings);\n        s[props.name] = e.target.value;\n        props.setSettings(s);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), props.name]\n  }, void 0, true);\n};\n\n_c = Button;\n\nvar Settings = function Settings(_ref) {\n  _s();\n\n  var _settings = _ref._settings;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_settings || defaultSettings),\n      settings = _useState[0],\n      setSettings = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n      name: \"a\",\n      settings: settings,\n      setSettings: setSettings\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n      name: \"b\",\n      settings: settings,\n      setSettings: setSettings\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n      name: \"c\",\n      settings: settings,\n      setSettings: setSettings\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n/*\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n  // find settings by user\n  const settings = await prisma.settings.findUnique({\n  });\n  return { props: { settings } };\n}\n*/\n\n\n_s(Settings, \"pEf9LM5dr3d0xE30N/cgsxWqldw=\");\n\n_c2 = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c2, \"Settings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXR0aW5ncy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7QUFFQSxJQUFNRSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLENBQUMsRUFBRSxLQURtQjtBQUV0QkMsRUFBQUEsQ0FBQyxFQUFFLEtBRm1CO0FBR3RCQyxFQUFBQSxDQUFDLEVBQUU7QUFIbUIsQ0FBeEI7O0FBTUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDM0IsU0FBTztBQUNMSixJQUFBQSxDQUFDLEVBQUVJLENBQUMsQ0FBQ0osQ0FEQTtBQUVMQyxJQUFBQSxDQUFDLEVBQUVHLENBQUMsQ0FBQ0gsQ0FGQTtBQUdMQyxJQUFBQSxDQUFDLEVBQUVFLENBQUMsQ0FBQ0Y7QUFIQSxHQUFQO0FBS0QsQ0FORDs7QUFRQSxJQUFNRyxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbEMsc0JBQ0k7QUFBQSw0QkFDQTtBQUNFLFVBQUksRUFBQyxVQURQO0FBRUUsV0FBSyxFQUFFQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUQsS0FBSyxDQUFDRSxJQUFyQixDQUZUO0FBR0UsY0FBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDYixZQUFNTCxDQUFDLEdBQUdELGFBQWEsQ0FBQ0csS0FBSyxDQUFDQyxRQUFQLENBQXZCO0FBQ0FILFFBQUFBLENBQUMsQ0FBQ0UsS0FBSyxDQUFDRSxJQUFQLENBQUQsR0FBZ0JDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUF6QjtBQUNBTCxRQUFBQSxLQUFLLENBQUNNLFdBQU4sQ0FBa0JSLENBQWxCO0FBQ0Q7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsRUFXQ0UsS0FBSyxDQUFDRSxJQVhQO0FBQUEsa0JBREo7QUFlRCxDQWhCRDs7S0FBTUg7O0FBa0JOLElBQU1RLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDNUMsa0JBQWtDaEIsK0NBQVEsQ0FBQ2dCLFNBQVMsSUFBSWYsZUFBZCxDQUExQztBQUFBLE1BQVFRLFFBQVI7QUFBQSxNQUFrQkssV0FBbEI7O0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxNQUFEO0FBQVEsVUFBSSxFQUFDLEdBQWI7QUFBaUIsY0FBUSxFQUFFTCxRQUEzQjtBQUFxQyxpQkFBVyxFQUFFSztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxNQUFEO0FBQVEsVUFBSSxFQUFDLEdBQWI7QUFBaUIsY0FBUSxFQUFFTCxRQUEzQjtBQUFxQyxpQkFBVyxFQUFFSztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyxNQUFEO0FBQVEsVUFBSSxFQUFDLEdBQWI7QUFBaUIsY0FBUSxFQUFFTCxRQUEzQjtBQUFxQyxpQkFBVyxFQUFFSztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQSxrQkFERjtBQU9ELENBVEQ7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FsQk1DOztNQUFBQTtBQW9CTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZXR0aW5ncy50c3g/ZmQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgYTogZmFsc2UsXG4gIGI6IGZhbHNlLFxuICBjOiBmYWxzZSxcbn07XG5cbmNvbnN0IGNsb25lU2V0dGluZ3MgPSAocykgPT4ge1xuICByZXR1cm4ge1xuICAgIGE6IHMuYSxcbiAgICBiOiBzLmIsXG4gICAgYzogcy5jLFxuICB9O1xufVxuXG5jb25zdCBCdXR0b246IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIHZhbHVlPXtwcm9wcy5zZXR0aW5nc1twcm9wcy5uYW1lXX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzID0gY2xvbmVTZXR0aW5ncyhwcm9wcy5zZXR0aW5ncyk7XG4gICAgICAgICAgICBzW3Byb3BzLm5hbWVdID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBwcm9wcy5zZXRTZXR0aW5ncyhzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICB7cHJvcHMubmFtZX1cbiAgICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBTZXR0aW5nczogTmV4dFBhZ2UgPSAoeyBfc2V0dGluZ3MgfSkgPT4ge1xuICBjb25zdCBbIHNldHRpbmdzLCBzZXRTZXR0aW5ncyBdID0gdXNlU3RhdGUoX3NldHRpbmdzIHx8IGRlZmF1bHRTZXR0aW5ncylcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJ1dHRvbiBuYW1lPVwiYVwiIHNldHRpbmdzPXtzZXR0aW5nc30gc2V0U2V0dGluZ3M9e3NldFNldHRpbmdzfSAvPlxuICAgICAgPEJ1dHRvbiBuYW1lPVwiYlwiIHNldHRpbmdzPXtzZXR0aW5nc30gc2V0U2V0dGluZ3M9e3NldFNldHRpbmdzfSAvPlxuICAgICAgPEJ1dHRvbiBuYW1lPVwiY1wiIHNldHRpbmdzPXtzZXR0aW5nc30gc2V0U2V0dGluZ3M9e3NldFNldHRpbmdzfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG4vKlxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgLy8gZmluZCBzZXR0aW5ncyBieSB1c2VyXG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgcHJpc21hLnNldHRpbmdzLmZpbmRVbmlxdWUoe1xuICB9KTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgc2V0dGluZ3MgfSB9O1xufVxuKi9cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZGVmYXVsdFNldHRpbmdzIiwiYSIsImIiLCJjIiwiY2xvbmVTZXR0aW5ncyIsInMiLCJCdXR0b24iLCJwcm9wcyIsInNldHRpbmdzIiwibmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFNldHRpbmdzIiwiU2V0dGluZ3MiLCJfc2V0dGluZ3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/settings.tsx\n");

/***/ })

});