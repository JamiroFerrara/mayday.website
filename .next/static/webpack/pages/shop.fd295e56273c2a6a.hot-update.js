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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem */ \"./components/Shop/ProductItem.tsx\");\nvar _this = undefined;\n\n\nvar staticProducts = [\n    {\n        id: 1,\n        name: \"Focus Paper Refill\",\n        href: \"#\",\n        price: \"$13\",\n        description: \"3 sizes available\",\n        imageSrc: \"https:tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg\",\n        imageAlt: \"Person using a pen to cross a task off a productivity paper card.\"\n    }, \n];\nvar ProductList = function(param) {\n    var title = param.title, products = param.products;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white px-4 sm:py-10 sm:px-6 lg:max-w-7xl w-full rounded\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-extrabold tracking-tight text-gray-900\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductList.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                    children: products.data.products.edges.map(function(item) {\n                        var product = item.node;\n                        var image = product.images.edges[0].node;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            product: product,\n                            image: image\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductList.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductList.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jamiro Ferrara\\\\Desktop\\\\maydaysoundsystem\\\\components\\\\Shop\\\\ProductList.tsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3AvUHJvZHVjdExpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFBdUM7QUFFdkMsSUFBTUMsY0FBYyxHQUFHO0lBQ3JCO1FBQ0VDLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLElBQUksRUFBRSxvQkFBb0I7UUFDMUJDLElBQUksRUFBRSxHQUFHO1FBQ1RDLEtBQUssRUFBRSxLQUFLO1FBQ1pDLFdBQVcsRUFBRSxtQkFBbUI7UUFDaENDLFFBQVEsRUFDTiw4RUFBOEU7UUFDaEZDLFFBQVEsRUFBRSxtRUFBbUU7S0FDOUU7Q0FDRjtBQUVELElBQU1DLFdBQVcsR0FBRyxnQkFBdUI7UUFBckJDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ25DLHFCQUNFO2tCQUNJLDRFQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyw0REFBNEQ7OzhCQUN6RSw4REFBQ0MsSUFBRTtvQkFBQ0QsU0FBUyxFQUFDLHNEQUFzRDs4QkFDakVILEtBQUs7Ozs7O3lCQUNIOzhCQUVMLDhEQUFDRSxLQUFHO29CQUFDQyxTQUFTLEVBQUMsaUZBQWlGOzhCQUM3RkYsUUFBUSxDQUFDSSxJQUFJLENBQUNKLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO3dCQUUxQyxJQUFNQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsSUFBSTt3QkFDekIsSUFBTUMsS0FBSyxHQUFHRixPQUFPLENBQUNHLE1BQU0sQ0FBQ04sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDSSxJQUFJO3dCQUUxQyxxQkFDRSw4REFBQ3BCLG9EQUFXOzRCQUFDbUIsT0FBTyxFQUFFQSxPQUFPOzRCQUFFRSxLQUFLLEVBQUVBLEtBQUs7Ozs7O2tDQUFnQixDQUM5RDtxQkFBQyxDQUFDOzs7Ozt5QkFDQzs7Ozs7O2lCQUNGO3FCQUNQLENBQ0o7Q0FDRjtBQXJCS1osS0FBQUEsV0FBVztBQXdCakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaG9wL1Byb2R1Y3RMaXN0LnRzeD85NDRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0SXRlbSBmcm9tICcuL1Byb2R1Y3RJdGVtJ1xyXG5cclxuY29uc3Qgc3RhdGljUHJvZHVjdHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiAnRm9jdXMgUGFwZXIgUmVmaWxsJyxcclxuICAgIGhyZWY6ICcjJyxcclxuICAgIHByaWNlOiAnJDEzJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnMyBzaXplcyBhdmFpbGFibGUnLFxyXG4gICAgaW1hZ2VTcmM6XHJcbiAgICAgICdodHRwczp0YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9jYXRlZ29yeS1wYWdlLTAxLWltYWdlLWNhcmQtMDEuanBnJyxcclxuICAgIGltYWdlQWx0OiAnUGVyc29uIHVzaW5nIGEgcGVuIHRvIGNyb3NzIGEgdGFzayBvZmYgYSBwcm9kdWN0aXZpdHkgcGFwZXIgY2FyZC4nXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgUHJvZHVjdExpc3QgPSAoe3RpdGxlLCBwcm9kdWN0c30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTQgc206cHktMTAgc206cHgtNiBsZzptYXgtdy03eGwgdy1mdWxsIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTAgZ2FwLXgtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCB4bDpnYXAteC04XCI+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy5kYXRhLnByb2R1Y3RzLmVkZ2VzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBpdGVtLm5vZGVcclxuICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IHByb2R1Y3QuaW1hZ2VzLmVkZ2VzWzBdLm5vZGVcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSBwcm9kdWN0PXtwcm9kdWN0fSBpbWFnZT17aW1hZ2V9PjwvUHJvZHVjdEl0ZW0+XHJcbiAgICAgICAgICAgICl9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RcclxuIl0sIm5hbWVzIjpbIlByb2R1Y3RJdGVtIiwic3RhdGljUHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJocmVmIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImltYWdlU3JjIiwiaW1hZ2VBbHQiLCJQcm9kdWN0TGlzdCIsInRpdGxlIiwicHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImRhdGEiLCJlZGdlcyIsIm1hcCIsIml0ZW0iLCJwcm9kdWN0Iiwibm9kZSIsImltYWdlIiwiaW1hZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Shop/ProductList.tsx\n");

/***/ })

});