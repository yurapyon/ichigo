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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mel/documents/_programming/node/ichigo/pages/settings.tsx\",\n    _this = undefined;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar defaultSettings = {\n  a: false,\n  b: false,\n  c: false\n};\n\nvar cloneSettings = function cloneSettings(s) {\n  return {\n    a: s.a,\n    b: s.b,\n    c: s.c\n  };\n};\n\nvar Button = function Button(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n      type: \"checkbox\",\n      onChange: props.onChange,\n      value: props.value\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }, _this), props.value ? props.name.toUpperCase() : props.name]\n  }, void 0, true);\n};\n\n_c = Button;\n\nvar Settings = /*#__PURE__*/function (_React$Component) {\n  (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Settings, _React$Component);\n\n  var _super = _createSuper(Settings);\n\n  function Settings(props) {\n    var _this2;\n\n    (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Settings);\n\n    _this2 = _super.call(this, props);\n    _this2.state = {\n      settings: cloneSettings(defaultSettings)\n    };\n    return _this2;\n  }\n\n  (0,_home_mel_documents_programming_node_ichigo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Settings, [{\n    key: \"handleChange\",\n    value: function handleChange(val, name) {\n      var s = cloneSettings(this.state.settings);\n      s[name] = val;\n      console.log(val);\n      this.setState({\n        settings: s\n      });\n    }\n  }, {\n    key: \"renderButton\",\n    value: function renderButton(name) {\n      var _this3 = this;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Button, {\n        name: name,\n        value: this.state.settings[name],\n        onChange: function onChange(val) {\n          return _this3.handleChange(val, name);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }, this);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n        children: [this.renderButton(\"a\"), this.renderButton(\"b\"), this.renderButton(\"c\")]\n      }, void 0, true);\n    }\n  }]);\n\n  return Settings;\n}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));\n/*\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n  // find settings by user\n  const settings = await prisma.settings.findUnique({\n  });\n  return { props: { settings } };\n}\n*/\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c;\n\n$RefreshReg$(_c, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXR0aW5ncy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUVBLElBQU1DLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsQ0FBQyxFQUFFLEtBRG1CO0FBRXRCQyxFQUFBQSxDQUFDLEVBQUUsS0FGbUI7QUFHdEJDLEVBQUFBLENBQUMsRUFBRTtBQUhtQixDQUF4Qjs7QUFNQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUMzQixTQUFPO0FBQ0xKLElBQUFBLENBQUMsRUFBRUksQ0FBQyxDQUFDSixDQURBO0FBRUxDLElBQUFBLENBQUMsRUFBRUcsQ0FBQyxDQUFDSCxDQUZBO0FBR0xDLElBQUFBLENBQUMsRUFBRUUsQ0FBQyxDQUFDRjtBQUhBLEdBQVA7QUFLRCxDQU5EOztBQVFBLElBQU1HLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLENBQUNDLEtBQUQsRUFBVztBQUNsQyxzQkFDRTtBQUFBLDRCQUNBO0FBQU8sVUFBSSxFQUFDLFVBQVo7QUFBdUIsY0FBUSxFQUFFQSxLQUFLLENBQUNDLFFBQXZDO0FBQWlELFdBQUssRUFBRUQsS0FBSyxDQUFDRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsRUFFQ0YsS0FBSyxDQUFDRSxLQUFOLEdBQWNGLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxXQUFYLEVBQWQsR0FBeUNKLEtBQUssQ0FBQ0csSUFGaEQ7QUFBQSxrQkFERjtBQU1ELENBUEQ7O0tBQU1KOztJQVNBTTs7Ozs7QUFDSixvQkFBWUwsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiwrQkFBTUEsS0FBTjtBQUNBLFdBQUtNLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxRQUFRLEVBQUVWLGFBQWEsQ0FBQ0osZUFBRDtBQURaLEtBQWI7QUFGaUI7QUFLbEI7Ozs7V0FFRCxzQkFBYWUsR0FBYixFQUFrQkwsSUFBbEIsRUFBd0I7QUFDdEIsVUFBSUwsQ0FBQyxHQUFHRCxhQUFhLENBQUMsS0FBS1MsS0FBTCxDQUFXQyxRQUFaLENBQXJCO0FBQ0FULE1BQUFBLENBQUMsQ0FBQ0ssSUFBRCxDQUFELEdBQVVLLEdBQVY7QUFDQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxXQUFLRyxRQUFMLENBQWM7QUFBRUosUUFBQUEsUUFBUSxFQUFFVDtBQUFaLE9BQWQ7QUFDRDs7O1dBRUQsc0JBQWFLLElBQWIsRUFBbUI7QUFBQTs7QUFDakIsMEJBQ0UsOERBQUMsTUFBRDtBQUNFLFlBQUksRUFBRUEsSUFEUjtBQUVFLGFBQUssRUFBRSxLQUFLRyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JKLElBQXBCLENBRlQ7QUFHRSxnQkFBUSxFQUFFLGtCQUFDSyxHQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDSSxZQUFMLENBQWtCSixHQUFsQixFQUF1QkwsSUFBdkIsQ0FBUDtBQUFBO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBT0Q7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0E7QUFBQSxtQkFDRyxLQUFLVSxZQUFMLENBQWtCLEdBQWxCLENBREgsRUFFRyxLQUFLQSxZQUFMLENBQWtCLEdBQWxCLENBRkgsRUFHRyxLQUFLQSxZQUFMLENBQWtCLEdBQWxCLENBSEg7QUFBQSxzQkFEQTtBQU9EOzs7O0VBakNvQnJCO0FBb0N2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSwrREFBZWEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZXR0aW5ncy50c3g/ZmQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgYTogZmFsc2UsXG4gIGI6IGZhbHNlLFxuICBjOiBmYWxzZSxcbn07XG5cbmNvbnN0IGNsb25lU2V0dGluZ3MgPSAocykgPT4ge1xuICByZXR1cm4ge1xuICAgIGE6IHMuYSxcbiAgICBiOiBzLmIsXG4gICAgYzogcy5jLFxuICB9O1xufVxuXG5jb25zdCBCdXR0b246IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSB2YWx1ZT17cHJvcHMudmFsdWV9IC8+XG4gICAge3Byb3BzLnZhbHVlID8gcHJvcHMubmFtZS50b1VwcGVyQ2FzZSgpIDogcHJvcHMubmFtZSB9XG4gICAgPC8+XG4gICk7XG59XG5cbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNldHRpbmdzOiBjbG9uZVNldHRpbmdzKGRlZmF1bHRTZXR0aW5ncyksXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWwsIG5hbWUpIHtcbiAgICB2YXIgcyA9IGNsb25lU2V0dGluZ3ModGhpcy5zdGF0ZS5zZXR0aW5ncyk7XG4gICAgc1tuYW1lXSA9IHZhbDtcbiAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogcyB9KTtcbiAgfVxuXG4gIHJlbmRlckJ1dHRvbihuYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2V0dGluZ3NbbmFtZV19XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsKT0+dGhpcy5oYW5kbGVDaGFuZ2UodmFsLCBuYW1lKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dGhpcy5yZW5kZXJCdXR0b24oXCJhXCIpfVxuICAgICAge3RoaXMucmVuZGVyQnV0dG9uKFwiYlwiKX1cbiAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbihcImNcIil9XG4gICAgPC8+XG4gICk7XG4gIH1cbn1cblxuLypcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIC8vIGZpbmQgc2V0dGluZ3MgYnkgdXNlclxuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IHByaXNtYS5zZXR0aW5ncy5maW5kVW5pcXVlKHtcbiAgfSk7XG4gIHJldHVybiB7IHByb3BzOiB7IHNldHRpbmdzIH0gfTtcbn1cbiovXG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJkZWZhdWx0U2V0dGluZ3MiLCJhIiwiYiIsImMiLCJjbG9uZVNldHRpbmdzIiwicyIsIkJ1dHRvbiIsInByb3BzIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsIlNldHRpbmdzIiwic3RhdGUiLCJzZXR0aW5ncyIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInJlbmRlckJ1dHRvbiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/settings.tsx\n");

/***/ })

});