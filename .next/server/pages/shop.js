(() => {
var exports = {};
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 5607:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "products_container__vhhcC",
	"itemTitle": "products_itemTitle__ODI4w",
	"itemPrice": "products_itemPrice__fEDZT",
	"fadeIn": "products_fadeIn___yf47"
};


/***/ }),

/***/ 2383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ shop),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(2136);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(558);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Shop/products.module.scss
var products_module = __webpack_require__(5607);
var products_module_default = /*#__PURE__*/__webpack_require__.n(products_module);
;// CONCATENATED MODULE: ./components/Shop/ProductItem.tsx




const ProductItem = ({ product , image  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/products/${product.handle}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (products_module_default()).container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none group-hover:opacity-75 lg:h-80",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image.transformedSrc,
                            alt: image.altText,
                            className: "object-cover object-center w-full h-full lg:h-full lg:w-full"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between mt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: (products_module_default()).itemTitle,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "#",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                "aria-hidden": "true",
                                                className: "absolute inset-0"
                                            }),
                                            product.title
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (products_module_default()).itemPrice,
                                children: (0,utils/* formatPrice */.T4)(product.priceRange.minVariantPrice.amount)
                            })
                        ]
                    })
                ]
            })
        })
    }, product.id);
};
/* harmony default export */ const Shop_ProductItem = (ProductItem);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "fuse.js"
const external_fuse_js_namespaceObject = require("fuse.js");
var external_fuse_js_default = /*#__PURE__*/__webpack_require__.n(external_fuse_js_namespaceObject);
;// CONCATENATED MODULE: ./components/Shop/ProductList.tsx




const ProductList = ({ title , products  })=>{
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)("");
    const fItems = filterJSONFuse(products.edges, searchTerm);
    console.log(fItems, products.edges);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full px-4 py-10 mb-8 bg-gray-100 rounded sm:px-6 lg:max-w-7xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex group",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl group-hover:text-red-900 group-hover:translate-x-1 transition duration-1000 w-3/5 font-extrabold tracking-tight text-gray-900",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "title w-2/5 border rounded p-1 border-slate-900 hover:shadow-md transition",
                            placeholder: "Search",
                            onChange: (event)=>{
                                setSearchTerm(event.target.value);
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",
                    children: fItems.map((item)=>{
                        const product = item.item.node;
                        const image = product.images.edges[0].node;
                        return /*#__PURE__*/ jsx_runtime_.jsx(Shop_ProductItem, {
                            product: product,
                            image: image
                        });
                    })
                })
            ]
        })
    });
};
function filterJSON(value, searchTerm) {
    const sVal = JSON.stringify(value);
    if (searchTerm == "") {
        return value;
    } else if (sVal.includes(searchTerm)) {
        return value;
    }
}
function filterJSONFuse(items, searchTerm) {
    const options = {
        includeScore: true,
        keys: [
            "node.title",
            "node.tags", 
        ]
    };
    const fuse = new (external_fuse_js_default())(items, options);
    if (searchTerm != "") {
        return fuse.search(searchTerm);
    } else {
        return fuse.search(" ");
    }
}
/* harmony default export */ const Shop_ProductList = (ProductList);

// EXTERNAL MODULE: ./components/Ui/Navbar.tsx + 1 modules
var Navbar = __webpack_require__(2007);
;// CONCATENATED MODULE: ./pages/shop.tsx






const Shop = ({ samplePacks , vinyls , tracks , wear , tutorials , projects  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Mayday - Shop"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "Store for Mayday Sound System",
                        content: "Shop"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (Layout_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Shop_ProductList, {
                        title: "Sample Packs",
                        products: samplePacks.data.collectionByHandle.products
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Shop_ProductList, {
                        title: "Digital Tracks",
                        products: tracks.data.collectionByHandle.products
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Shop_ProductList, {
                        title: "Vinyls",
                        products: vinyls.data.collectionByHandle.products
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Shop_ProductList, {
                        title: "Projects",
                        products: projects.data.collectionByHandle.products
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Shop_ProductList, {
                        title: "Wear",
                        products: wear.data.collectionByHandle.products
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Shop_ProductList, {
                        title: "Tutorials",
                        products: tutorials.data.collectionByHandle.products
                    })
                ]
            })
        ]
    });
};
async function getStaticProps() {
    const samplePacks = await (0,utils/* getProductsFromCollection */.er)("Sample");
    const vinyls = await (0,utils/* getProductsFromCollection */.er)("Vinyls");
    const tracks = await (0,utils/* getProductsFromCollection */.er)("tracks");
    const tutorials = await (0,utils/* getProductsFromCollection */.er)("tutorials");
    const projects = await (0,utils/* getProductsFromCollection */.er)("projects");
    const wear = await (0,utils/* getProductsFromCollection */.er)("wear");
    return {
        props: {
            samplePacks: samplePacks,
            vinyls: vinyls,
            tracks: tracks,
            tutorials: tutorials,
            projects: projects,
            wear: wear
        },
        revalidate: 10
    };
}
/* harmony default export */ const shop = (Shop);


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,61,650,558], () => (__webpack_exec__(2383)));
module.exports = __webpack_exports__;

})();