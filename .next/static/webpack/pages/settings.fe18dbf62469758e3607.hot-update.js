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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mel/documents/_programming/node/ichigo/pages/settings.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar defaultSettings = {\n  a: false,\n  b: false,\n  c: false\n};\n\nvar Button = function Button(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n      type: \"checkbox\",\n      onChange: props.onChange,\n      value: props.value\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, _this), props.value ? props.name.toUpperCase() : props.name]\n  }, void 0, true);\n};\n\n_c = Button;\n\nvar Settings = /*#__PURE__*/function (_React$Component) {\n  (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Settings, _React$Component);\n\n  var _super = _createSuper(Settings);\n\n  function Settings(props) {\n    var _this2;\n\n    (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Settings);\n\n    _this2 = _super.call(this, props);\n    _this2.state = {\n      settings: _objectSpread({}, defaultSettings)\n    };\n    return _this2;\n  }\n\n  (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Settings, [{\n    key: \"handleChange\",\n    value: function handleChange(val, name) {\n      var s = _objectSpread({}, this.state.settings);\n\n      s[name] = val;\n      console.log(val);\n      this.setState({\n        settings: s\n      });\n    }\n  }, {\n    key: \"renderButton\",\n    value: function renderButton(name) {\n      var _this3 = this;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Button, {\n        name: name,\n        value: this.state.settings[name],\n        onChange: function onChange(e) {\n          return _this3.handleChange(e.target.checked, name);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }, this);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n        children: [this.renderButton(\"a\"), this.renderButton(\"b\"), this.renderButton(\"c\")]\n      }, void 0, true);\n    }\n  }]);\n\n  return Settings;\n}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));\n/*\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n  // find settings by user\n  const settings = await prisma.settings.findUnique({\n  });\n  return { props: { settings } };\n}\n*/\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c;\n\n$RefreshReg$(_c, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXR0aW5ncy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUVBLElBQU1DLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsQ0FBQyxFQUFFLEtBRG1CO0FBRXRCQyxFQUFBQSxDQUFDLEVBQUUsS0FGbUI7QUFHdEJDLEVBQUFBLENBQUMsRUFBRTtBQUhtQixDQUF4Qjs7QUFNQSxJQUFNQyxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbEMsc0JBQ0U7QUFBQSw0QkFDQTtBQUFPLFVBQUksRUFBQyxVQUFaO0FBQXVCLGNBQVEsRUFBRUEsS0FBSyxDQUFDQyxRQUF2QztBQUFpRCxXQUFLLEVBQUVELEtBQUssQ0FBQ0U7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLEVBRUNGLEtBQUssQ0FBQ0UsS0FBTixHQUFjRixLQUFLLENBQUNHLElBQU4sQ0FBV0MsV0FBWCxFQUFkLEdBQXlDSixLQUFLLENBQUNHLElBRmhEO0FBQUEsa0JBREY7QUFNRCxDQVBEOztLQUFNSjs7SUFTQU07Ozs7O0FBQ0osb0JBQVlMLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsK0JBQU1BLEtBQU47QUFDQSxXQUFLTSxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsUUFBUSxvQkFBTVosZUFBTjtBQURHLEtBQWI7QUFGaUI7QUFLbEI7Ozs7V0FFRCxzQkFBYWEsR0FBYixFQUFrQkwsSUFBbEIsRUFBd0I7QUFDdEIsVUFBSU0sQ0FBQyxxQkFBTyxLQUFLSCxLQUFMLENBQVdDLFFBQWxCLENBQUw7O0FBQ0FFLE1BQUFBLENBQUMsQ0FBQ04sSUFBRCxDQUFELEdBQVVLLEdBQVY7QUFDQUUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVo7QUFDQSxXQUFLSSxRQUFMLENBQWM7QUFBRUwsUUFBQUEsUUFBUSxFQUFFRTtBQUFaLE9BQWQ7QUFDRDs7O1dBRUQsc0JBQWFOLElBQWIsRUFBbUI7QUFBQTs7QUFDakIsMEJBQ0UsOERBQUMsTUFBRDtBQUNFLFlBQUksRUFBRUEsSUFEUjtBQUVFLGFBQUssRUFBRSxLQUFLRyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JKLElBQXBCLENBRlQ7QUFHRSxnQkFBUSxFQUFFLGtCQUFDVSxDQUFEO0FBQUEsaUJBQUssTUFBSSxDQUFDQyxZQUFMLENBQWtCRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsT0FBM0IsRUFBb0NiLElBQXBDLENBQUw7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQU9EOzs7V0FFRCxrQkFBUztBQUNQLDBCQUNBO0FBQUEsbUJBQ0csS0FBS2MsWUFBTCxDQUFrQixHQUFsQixDQURILEVBRUcsS0FBS0EsWUFBTCxDQUFrQixHQUFsQixDQUZILEVBR0csS0FBS0EsWUFBTCxDQUFrQixHQUFsQixDQUhIO0FBQUEsc0JBREE7QUFPRDs7OztFQWpDb0J2QjtBQW9DdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsK0RBQWVXLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MudHN4P2ZkMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gIGE6IGZhbHNlLFxuICBiOiBmYWxzZSxcbiAgYzogZmFsc2UsXG59O1xuXG5jb25zdCBCdXR0b246IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSB2YWx1ZT17cHJvcHMudmFsdWV9IC8+XG4gICAge3Byb3BzLnZhbHVlID8gcHJvcHMubmFtZS50b1VwcGVyQ2FzZSgpIDogcHJvcHMubmFtZSB9XG4gICAgPC8+XG4gICk7XG59XG5cbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNldHRpbmdzOiB7Li4uZGVmYXVsdFNldHRpbmdzfSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHZhbCwgbmFtZSkge1xuICAgIHZhciBzID0gey4uLnRoaXMuc3RhdGUuc2V0dGluZ3N9O1xuICAgIHNbbmFtZV0gPSB2YWw7XG4gICAgY29uc29sZS5sb2codmFsKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2V0dGluZ3M6IHMgfSk7XG4gIH1cblxuICByZW5kZXJCdXR0b24obmFtZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNldHRpbmdzW25hbWVdfVxuICAgICAgICBvbkNoYW5nZT17KGUpPT50aGlzLmhhbmRsZUNoYW5nZShlLnRhcmdldC5jaGVja2VkLCBuYW1lKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dGhpcy5yZW5kZXJCdXR0b24oXCJhXCIpfVxuICAgICAge3RoaXMucmVuZGVyQnV0dG9uKFwiYlwiKX1cbiAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbihcImNcIil9XG4gICAgPC8+XG4gICk7XG4gIH1cbn1cblxuLypcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIC8vIGZpbmQgc2V0dGluZ3MgYnkgdXNlclxuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IHByaXNtYS5zZXR0aW5ncy5maW5kVW5pcXVlKHtcbiAgfSk7XG4gIHJldHVybiB7IHByb3BzOiB7IHNldHRpbmdzIH0gfTtcbn1cbiovXG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJkZWZhdWx0U2V0dGluZ3MiLCJhIiwiYiIsImMiLCJCdXR0b24iLCJwcm9wcyIsIm9uQ2hhbmdlIiwidmFsdWUiLCJuYW1lIiwidG9VcHBlckNhc2UiLCJTZXR0aW5ncyIsInN0YXRlIiwic2V0dGluZ3MiLCJ2YWwiLCJzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImNoZWNrZWQiLCJyZW5kZXJCdXR0b24iLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/settings.tsx\n");

/***/ })

});