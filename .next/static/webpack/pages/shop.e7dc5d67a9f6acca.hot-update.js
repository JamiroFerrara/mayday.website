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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem */ \"./components/Shop/ProductItem.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuse.js */ \"./node_modules/fuse.js/dist/fuse.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ProductList = function(param) {\n    var title = param.title, products = param.products;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), searchTerm = ref[0], setSearchTerm = ref[1];\n    var fItems = filterJSONFuse(products.edges, searchTerm);\n    console.log(fItems, products.edges);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full px-4 py-10 mb-8 bg-gray-100 rounded sm:px-6 lg:max-w-7xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl group-hover:text-red-900 group-hover:translate-x-1 transition duration-1000 w-3/5 font-extrabold tracking-tight text-gray-900\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"title w-2/5 border rounded p-1 border-slate-900 hover:shadow-md transition\",\n                            placeholder: \"Search\",\n                            onChange: function(event) {\n                                setSearchTerm(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                    children: fItems.map(function(item) {\n                        var product = item.item.node;\n                        var image = product.images.edges[0].node;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            product: product,\n                            image: image\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jamiroferrara/Github/websites/maydaysoundsystem/components/Shop/ProductList.tsx\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(ProductList, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = ProductList;\nfunction filterJSON(value, searchTerm) {\n    var sVal = JSON.stringify(value);\n    if (searchTerm == \"\") {\n        return value;\n    } else if (sVal.includes(searchTerm)) {\n        return value;\n    }\n}\nfunction filterJSONFuse(items, searchTerm) {\n    if (searchTerm != \"\") {\n        var options = {\n            includeScore: true,\n            keys: [\n                \"node.title\",\n                \"node.tags\"\n            ]\n        };\n        var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](items, options);\n        return fuse.search(searchTerm);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3AvUHJvZHVjdExpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDUDtBQUVOOztBQUUxQixJQUFNRyxXQUFXLEdBQUcsZ0JBQXVCO1FBQXJCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsUUFBUSxTQUFSQSxRQUFROzs7SUFDbkMsSUFBb0NKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFObEQsVUFNbUIsR0FBbUJBLEdBQVksR0FBL0IsRUFObkIsYUFNa0MsR0FBSUEsR0FBWSxHQUFoQjtJQUNoQyxJQUFNTyxNQUFNLEdBQUdDLGNBQWMsQ0FBQ0osUUFBUSxDQUFDSyxLQUFLLEVBQUVKLFVBQVUsQ0FBQztJQUN6REssT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sRUFBRUgsUUFBUSxDQUFDSyxLQUFLLENBQUM7SUFFbkMscUJBQ0U7a0JBQ0ksNEVBQUNHLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGlFQUFpRTs7OEJBQzlFLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsWUFBWTs7c0NBQ3pCLDhEQUFDQyxJQUFFOzRCQUFDRCxTQUFTLEVBQUMsd0lBQXdJO3NDQUNuSlYsS0FBSzs7Ozs7aUNBQ0g7c0NBQ0wsOERBQUNZLE9BQUs7NEJBQUNGLFNBQVMsRUFBQyw0RUFBNEU7NEJBQUNHLFdBQVcsRUFBQyxRQUFROzRCQUFDQyxRQUFRLEVBQUVDLFNBQUFBLEtBQUssRUFBSTtnQ0FBQ1osYUFBYSxDQUFDWSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDOzZCQUFDOzs7OztpQ0FBRzs7Ozs7O3lCQUN4Szs4QkFFTiw4REFBQ1IsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGlGQUFpRjs4QkFDN0ZOLE1BQU0sQ0FBQ2MsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSzt3QkFDcEIsSUFBTUMsT0FBTyxHQUFHRCxJQUFJLENBQUNBLElBQUksQ0FBQ0UsSUFBSTt3QkFDOUIsSUFBTUMsS0FBSyxHQUFHRixPQUFPLENBQUNHLE1BQU0sQ0FBQ2pCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ2UsSUFBSTt3QkFFMUMscUJBQ0UsOERBQUN6QixvREFBVzs0QkFBQ3dCLE9BQU8sRUFBRUEsT0FBTzs0QkFBRUUsS0FBSyxFQUFFQSxLQUFLOzs7OztrQ0FBZ0IsQ0FDOUQ7cUJBQUMsQ0FBQzs7Ozs7eUJBQ0M7Ozs7OztpQkFDRjtxQkFDUCxDQUNKO0NBQ0Y7R0EzQkt2QixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUE2QmpCLFNBQVN5QixVQUFVLENBQUNQLEtBQUssRUFBRWYsVUFBVSxFQUNyQztJQUNFLElBQU11QixJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVixLQUFLLENBQUM7SUFDbEMsSUFBSWYsVUFBVSxJQUFJLEVBQUUsRUFBRTtRQUNwQixPQUFPZSxLQUFLO0tBQ2IsTUFBTSxJQUFJUSxJQUFJLENBQUNHLFFBQVEsQ0FBQzFCLFVBQVUsQ0FBQyxFQUFDO1FBQ25DLE9BQU9lLEtBQUs7S0FDUDtDQUNSO0FBRUQsU0FBU1osY0FBYyxDQUFDd0IsS0FBSyxFQUFFM0IsVUFBVSxFQUN6QztJQUNFLElBQUlBLFVBQVUsSUFBSSxFQUFFLEVBQ3BCO1FBQ0UsSUFBTTRCLE9BQU8sR0FBRztZQUNkQyxZQUFZLEVBQUUsSUFBSTtZQUNsQkMsSUFBSSxFQUFFO2dCQUFDLFlBQVk7Z0JBQUUsV0FBVzthQUFDO1NBQ2xDO1FBQ0QsSUFBTUMsSUFBSSxHQUFHLElBQUluQywrQ0FBSSxDQUFDK0IsS0FBSyxFQUFFQyxPQUFPLENBQUM7UUFDckMsT0FBT0csSUFBSSxDQUFDQyxNQUFNLENBQUNoQyxVQUFVLENBQUM7S0FDL0I7Q0FDRjtBQUVELCtEQUFlSCxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hvcC9Qcm9kdWN0TGlzdC50c3g/OTQ0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSAnLi9Qcm9kdWN0SXRlbSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdG9yZWZyb250IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgRnVzZSBmcm9tICdmdXNlLmpzJ1xuXG5jb25zdCBQcm9kdWN0TGlzdCA9ICh7dGl0bGUsIHByb2R1Y3RzfSkgPT4ge1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBmSXRlbXMgPSBmaWx0ZXJKU09ORnVzZShwcm9kdWN0cy5lZGdlcywgc2VhcmNoVGVybSlcbiAgY29uc29sZS5sb2coZkl0ZW1zLCBwcm9kdWN0cy5lZGdlcylcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMTAgbWItOCBiZy1ncmF5LTEwMCByb3VuZGVkIHNtOnB4LTYgbGc6bWF4LXctN3hsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdyb3VwXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZ3JvdXAtaG92ZXI6dGV4dC1yZWQtOTAwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAwIHctMy81IGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ0aXRsZSB3LTIvNSBib3JkZXIgcm91bmRlZCBwLTEgYm9yZGVyLXNsYXRlLTkwMCBob3ZlcjpzaGFkb3ctbWQgdHJhbnNpdGlvblwiIHBsYWNlaG9sZGVyPSdTZWFyY2gnIG9uQ2hhbmdlPXtldmVudCA9PiB7c2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpfX0vPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG10LTYgZ2FwLXktMTAgZ2FwLXgtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCB4bDpnYXAteC04XCI+XG4gICAgICAgICAgICB7Zkl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gaXRlbS5pdGVtLm5vZGVcbiAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBwcm9kdWN0LmltYWdlcy5lZGdlc1swXS5ub2RlXG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UHJvZHVjdEl0ZW0gcHJvZHVjdD17cHJvZHVjdH0gaW1hZ2U9e2ltYWdlfT48L1Byb2R1Y3RJdGVtPlxuICAgICAgICAgICAgKX0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJKU09OKHZhbHVlLCBzZWFyY2hUZXJtKVxue1xuICBjb25zdCBzVmFsID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICBpZiAoc2VhcmNoVGVybSA9PSBcIlwiKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0gZWxzZSBpZiAoc1ZhbC5pbmNsdWRlcyhzZWFyY2hUZXJtKSl7XG4gICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVySlNPTkZ1c2UoaXRlbXMsIHNlYXJjaFRlcm0pXG57XG4gIGlmIChzZWFyY2hUZXJtICE9IFwiXCIpXG4gIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgaW5jbHVkZVNjb3JlOiB0cnVlLFxuICAgICAga2V5czogWydub2RlLnRpdGxlJywgJ25vZGUudGFncyddXG4gICAgfVxuICAgIGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShpdGVtcywgb3B0aW9ucylcbiAgICByZXR1cm4gZnVzZS5zZWFyY2goc2VhcmNoVGVybSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFxuIl0sIm5hbWVzIjpbIlByb2R1Y3RJdGVtIiwidXNlU3RhdGUiLCJGdXNlIiwiUHJvZHVjdExpc3QiLCJ0aXRsZSIsInByb2R1Y3RzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJmSXRlbXMiLCJmaWx0ZXJKU09ORnVzZSIsImVkZ2VzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iLCJwcm9kdWN0Iiwibm9kZSIsImltYWdlIiwiaW1hZ2VzIiwiZmlsdGVySlNPTiIsInNWYWwiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5jbHVkZXMiLCJpdGVtcyIsIm9wdGlvbnMiLCJpbmNsdWRlU2NvcmUiLCJrZXlzIiwiZnVzZSIsInNlYXJjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Shop/ProductList.tsx\n");

/***/ })

});