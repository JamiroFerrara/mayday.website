(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2136:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__S4aNf",
	"video": "Layout_video__ZSmb7",
	"page": "Layout_page__FdxFd",
	"homePage": "Layout_homePage__M5N75",
	"imgContainer": "Layout_imgContainer__Si3Gl",
	"main": "Layout_main__c1pHS",
	"content": "Layout_content__RNbd0",
	"box": "Layout_box__L3iZ5",
	"title": "Layout_title__aN7Jd",
	"description": "Layout_description__tvpUW",
	"code": "Layout_code__wA5R5",
	"grid": "Layout_grid__oB4Ql",
	"card": "Layout_card__t1tJC",
	"logo": "Layout_logo__dBXl_"
};


/***/ }),

/***/ 7464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(2136);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/Ui/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "p-10 center footer",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-flow-col gap-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.youtube.com/channel/UCjKzoOZc3GZMRIkkVPjgfLA",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaYoutube, {
                                className: "footer-icons",
                                size: 30
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.facebook.com/groups/1060511574133075/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebookF, {
                                className: "footer-icons hover:text-blue-800",
                                size: 30
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.instagram.com/maydaysoundsystem/?hl=it",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaInstagram, {
                                className: "footer-icons hover:text-purple-700",
                                size: 30
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://soundcloud.com/maydaysystem",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaSoundcloud, {
                                className: "footer-icons hover:text-orange-600",
                                size: 30
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Ui_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout.tsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Layout_module_default()).container,
            children: [
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Ui_Footer, {})
            ]
        })
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7464));
module.exports = __webpack_exports__;

})();