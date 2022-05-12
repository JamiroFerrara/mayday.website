"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shop",{

/***/ "./components/Shop/ProductList.tsx":
/*!*****************************************!*\
  !*** ./components/Shop/ProductList.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem */ \"./components/Shop/ProductItem.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ProductList = function(param) {\n    var title = param.title, products = param.products;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), searchTerm = ref[0], setSearchTerm = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full px-4 py-10 mb-8 bg-gray-100 rounded sm:px-6 lg:max-w-7xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl w-3/5 font-extrabold tracking-tight text-gray-900\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"title w-2/5 border rounded p-1 border-slate-900\",\n                            placeholder: \"Search\",\n                            onChange: function(event) {\n                                setSearchTerm(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                    children: products.edges.filter(function(val) {\n                        console.log(val);\n                        if (searchTerm == \"\") {\n                            return val;\n                        } else if (val.node.title.toLowerCase().includes(searchTerm.toLowerCase())) {\n                            return val;\n                        }\n                    }).map(function(item) {\n                        var product = item.node;\n                        var image = product.images.edges[0].node;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            product: product,\n                            image: image\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(ProductList, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3AvUHJvZHVjdExpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUF1QztBQUNQOztBQUloQyxJQUFNRSxXQUFXLEdBQUcsZ0JBQXVCO1FBQXJCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsUUFBUSxTQUFSQSxRQUFROzs7SUFDbkMsSUFBb0NILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFObEQsVUFNbUIsR0FBbUJBLEdBQVksR0FBL0IsRUFObkIsYUFNa0MsR0FBSUEsR0FBWSxHQUFoQjtJQUVoQyxxQkFDRTtrQkFDSSw0RUFBQ00sS0FBRztZQUFDQyxTQUFTLEVBQUMsaUVBQWlFOzs4QkFDOUUsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxNQUFNOztzQ0FDbkIsOERBQUNDLElBQUU7NEJBQUNELFNBQVMsRUFBQyw0REFBNEQ7c0NBQ3ZFTCxLQUFLOzs7OztpQ0FDSDtzQ0FDTCw4REFBQ08sT0FBSzs0QkFBQ0YsU0FBUyxFQUFDLGlEQUFpRDs0QkFBQ0csV0FBVyxFQUFDLFFBQVE7NEJBQUNDLFFBQVEsRUFBRUMsU0FBQUEsS0FBSyxFQUFJO2dDQUFDUCxhQUFhLENBQUNPLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7NkJBQUM7Ozs7O2lDQUFHOzs7Ozs7eUJBQzdJOzhCQUVOLDhEQUFDUixLQUFHO29CQUFDQyxTQUFTLEVBQUMsaUZBQWlGOzhCQUM3RkosUUFBUSxDQUFDWSxLQUFLLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxHQUFHLEVBQUk7d0JBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO3dCQUNoQixJQUFJYixVQUFVLElBQUksRUFBRSxFQUFFOzRCQUNwQixPQUFPYSxHQUFHO3lCQUNYLE1BQU0sSUFBSUEsR0FBRyxDQUFDRyxJQUFJLENBQUNsQixLQUFLLENBQUNtQixXQUFXLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDbEIsVUFBVSxDQUFDaUIsV0FBVyxFQUFFLENBQUMsRUFBRTs0QkFDMUUsT0FBT0osR0FBRzt5QkFDWDtxQkFDRixDQUFDLENBQUNNLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7d0JBRWYsSUFBTUMsT0FBTyxHQUFHRCxJQUFJLENBQUNKLElBQUk7d0JBQ3pCLElBQU1NLEtBQUssR0FBR0QsT0FBTyxDQUFDRSxNQUFNLENBQUNaLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssSUFBSTt3QkFFMUMscUJBQ0UsOERBQUNyQixvREFBVzs0QkFBQzBCLE9BQU8sRUFBRUEsT0FBTzs0QkFBRUMsS0FBSyxFQUFFQSxLQUFLOzs7OztrQ0FBZ0IsQ0FDOUQ7cUJBQUMsQ0FBQzs7Ozs7eUJBQ0M7Ozs7OztpQkFDRjtxQkFDUCxDQUNKO0NBQ0Y7R0FqQ0t6QixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUFtQ2pCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hvcC9Qcm9kdWN0TGlzdC50c3g/OTQ0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSAnLi9Qcm9kdWN0SXRlbSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdG9yZWZyb250IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgRnVzZSBmcm9tICdmdXNlLmpzJ1xuXG5jb25zdCBQcm9kdWN0TGlzdCA9ICh7dGl0bGUsIHByb2R1Y3RzfSkgPT4ge1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0xMCBtYi04IGJnLWdyYXktMTAwIHJvdW5kZWQgc206cHgtNiBsZzptYXgtdy03eGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB3LTMvNSBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidGl0bGUgdy0yLzUgYm9yZGVyIHJvdW5kZWQgcC0xIGJvcmRlci1zbGF0ZS05MDBcIiBwbGFjZWhvbGRlcj0nU2VhcmNoJyBvbkNoYW5nZT17ZXZlbnQgPT4ge3NldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtdC02IGdhcC15LTEwIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOFwiPlxuICAgICAgICAgICAge3Byb2R1Y3RzLmVkZ2VzLmZpbHRlcigodmFsKT0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKVxuICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbC5ub2RlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gaXRlbS5ub2RlXG4gICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gcHJvZHVjdC5pbWFnZXMuZWRnZXNbMF0ubm9kZVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIHByb2R1Y3Q9e3Byb2R1Y3R9IGltYWdlPXtpbWFnZX0+PC9Qcm9kdWN0SXRlbT5cbiAgICAgICAgICAgICl9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RcbiJdLCJuYW1lcyI6WyJQcm9kdWN0SXRlbSIsInVzZVN0YXRlIiwiUHJvZHVjdExpc3QiLCJ0aXRsZSIsInByb2R1Y3RzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJlZGdlcyIsImZpbHRlciIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJub2RlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCIsIml0ZW0iLCJwcm9kdWN0IiwiaW1hZ2UiLCJpbWFnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Shop/ProductList.tsx\n");

/***/ })

});