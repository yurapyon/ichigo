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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mel/documents/_programming/node/ichigo/pages/settings.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar defaultSettings = {\n  a: false,\n  b: false,\n  c: false,\n  num1: 0,\n  num2: 0\n};\n\nvar Button = function Button(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n      type: \"checkbox\",\n      onChange: props.onChange,\n      value: props.value\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }, _this), props.value ? props.name.toUpperCase() : props.name]\n  }, void 0, true);\n};\n\n_c = Button;\n\nvar Slider = function Slider(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n      type: \"number\",\n      onChange: props.onChange,\n      value: props.value\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }, _this), props.value]\n  }, void 0, true);\n};\n\n_c2 = Slider;\n\nvar Settings = /*#__PURE__*/function (_React$Component) {\n  (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Settings, _React$Component);\n\n  var _super = _createSuper(Settings);\n\n  function Settings(props) {\n    var _this2;\n\n    (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Settings);\n\n    _this2 = _super.call(this, props);\n    _this2.state = {\n      settings: _objectSpread({}, defaultSettings)\n    };\n    return _this2;\n  }\n\n  (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Settings, [{\n    key: \"handleChange\",\n    value: function handleChange(val, name) {\n      var s = _objectSpread({}, this.state.settings);\n\n      s[name] = val;\n      console.log(val);\n      this.setState({\n        settings: s\n      });\n    }\n  }, {\n    key: \"renderSlider\",\n    value: function renderSlider(name) {\n      var _this3 = this;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Slider, {\n        name: name,\n        value: this.state.settings[name],\n        onChange: function onChange(e) {\n          return _this3.handleChange(e.target.value, name);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }, this);\n    }\n  }, {\n    key: \"renderButton\",\n    value: function renderButton(name) {\n      var _this4 = this;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Button, {\n        name: name,\n        value: this.state.settings[name],\n        onChange: function onChange(e) {\n          return _this4.handleChange(e.target.checked, name);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 7\n      }, this);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n        children: [this.renderButton(\"a\"), this.renderButton(\"b\"), this.renderButton(\"c\"), this.renderSlider(\"num1\"), this.renderSlider(\"num2\")]\n      }, void 0, true);\n    }\n  }]);\n\n  return Settings;\n}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));\n/*\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n  // find settings by user\n  const settings = await prisma.settings.findUnique({\n  });\n  return { props: { settings } };\n}\n*/\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c2, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLQSxZQUFMLENBQWtCLEdBQWxCLENBRkgsRUFHRyxLQUFLQSxZQUFMLENBQWtCLEdBQWxCLENBSEgsRUFJRyxLQUFLQyxZQUFMLENBQWtCLE1BQWxCLENBSkgsRUFLRyxLQUFLQSxZQUFMLENBQWtCLE1BQWxCLENBTEg7QUFBQSxzQkFEQTtBQVNEOzs7O0VBN0NvQjNCO0FBZ0R2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSwrREFBZWMsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZXR0aW5ncy50c3g/ZmQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgYTogZmFsc2UsXG4gIGI6IGZhbHNlLFxuICBjOiBmYWxzZSxcbiAgbnVtMTogMCxcbiAgbnVtMjogMCxcbn07XG5cbmNvbnN0IEJ1dHRvbjogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IHZhbHVlPXtwcm9wcy52YWx1ZX0gLz5cbiAgICB7cHJvcHMudmFsdWUgPyBwcm9wcy5uYW1lLnRvVXBwZXJDYXNlKCkgOiBwcm9wcy5uYW1lIH1cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgU2xpZGVyOiBSZWFjdC5GQyA9IChwcm9wcykgPT57XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gdmFsdWU9e3Byb3BzLnZhbHVlfSAvPlxuICAgIHtwcm9wcy52YWx1ZX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2V0dGluZ3M6IHsuLi5kZWZhdWx0U2V0dGluZ3N9LFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UodmFsLCBuYW1lKSB7XG4gICAgdmFyIHMgPSB7Li4udGhpcy5zdGF0ZS5zZXR0aW5nc307XG4gICAgc1tuYW1lXSA9IHZhbDtcbiAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogcyB9KTtcbiAgfVxuXG4gIHJlbmRlclNsaWRlcihuYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbGlkZXJcbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2V0dGluZ3NbbmFtZV19XG4gICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRoaXMuaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCBuYW1lKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckJ1dHRvbihuYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2V0dGluZ3NbbmFtZV19XG4gICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRoaXMuaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LmNoZWNrZWQsIG5hbWUpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbihcImFcIil9XG4gICAgICB7dGhpcy5yZW5kZXJCdXR0b24oXCJiXCIpfVxuICAgICAge3RoaXMucmVuZGVyQnV0dG9uKFwiY1wiKX1cbiAgICAgIHt0aGlzLnJlbmRlclNsaWRlcihcIm51bTFcIil9XG4gICAgICB7dGhpcy5yZW5kZXJTbGlkZXIoXCJudW0yXCIpfVxuICAgIDwvPlxuICApO1xuICB9XG59XG5cbi8qXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAvLyBmaW5kIHNldHRpbmdzIGJ5IHVzZXJcbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBwcmlzbWEuc2V0dGluZ3MuZmluZFVuaXF1ZSh7XG4gIH0pO1xuICByZXR1cm4geyBwcm9wczogeyBzZXR0aW5ncyB9IH07XG59XG4qL1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZGVmYXVsdFNldHRpbmdzIiwiYSIsImIiLCJjIiwibnVtMSIsIm51bTIiLCJCdXR0b24iLCJwcm9wcyIsIm9uQ2hhbmdlIiwidmFsdWUiLCJuYW1lIiwidG9VcHBlckNhc2UiLCJTbGlkZXIiLCJTZXR0aW5ncyIsInN0YXRlIiwic2V0dGluZ3MiLCJ2YWwiLCJzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImNoZWNrZWQiLCJyZW5kZXJCdXR0b24iLCJyZW5kZXJTbGlkZXIiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/settings.tsx\n");

/***/ })

});