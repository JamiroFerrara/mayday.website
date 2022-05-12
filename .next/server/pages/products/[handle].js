(() => {
var exports = {};
exports.id = 238;
exports.ids = [238];
exports.modules = {

/***/ 8044:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ProductPage_container__jCHSU"
};


/***/ }),

/***/ 8449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _handle_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(558);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Ui/Navbar.tsx + 1 modules
var Navbar = __webpack_require__(2007);
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(2136);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Shop/ProductPage.module.scss
var ProductPage_module = __webpack_require__(8044);
var ProductPage_module_default = /*#__PURE__*/__webpack_require__.n(ProductPage_module);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/Shop/ProductPage.tsx





function ProductPage({ product , checkoutMutation , variantId  }) {
    const image = product.images.edges[0].node;
    async function checkout() {
        const { data  } = await (0,utils/* storefront */.bn)(checkoutMutation, {
            variantId
        });
        console.log(checkoutMutation, variantId);
        const { webUrl  } = data.checkoutCreate.checkout;
        window.location.href = webUrl;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex p-5 align-middle md:h-screen md:items-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full p-5 px-4 mt-2 mb-8 bg-white rounded lg:max-w-7xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/shop",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaAngleLeft, {
                                className: "mx-2 transition hover:-translate-x-1 hover:text-red-900",
                                size: 40
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "title-bold",
                            children: product.title
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col md:flex-row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full p-4 md:w-3/5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (ProductPage_module_default()).container,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: image.transformedSrc,
                                    alt: image.altText,
                                    className: "object-cover object-center w-full h-full rounded"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative flex flex-col p-2 mt-4 md:w-2/5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col w-full h-full md:absolute",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "h-5/6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "m-2 title-bold",
                                                children: "Description:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "m-2 text-gray-500 text-l",
                                                children: product.description
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex justify-center w-full",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "font-serif text-4xl font-extrabold text-gray-900",
                                                    children: (0,utils/* formatPrice */.T4)(product.priceRange.minVariantPrice.amount)
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (ProductPage_module_default()).container,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            className: "w-full gap-2 btn",
                                            onClick: checkout,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    fill: "#FFFFFF",
                                                    className: "w-6 h-6",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 50 50",
                                                    width: "50px",
                                                    height: "50px",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M 11.40625 2 C 10.40625 2 9.511719 2.6875 9.3125 3.6875 C 9.3125 3.6875 3.414063 30.695313 2.3125 36.09375 C 2.113281 37.195313 2.386719 37.789063 2.6875 38.1875 C 3.085938 38.6875 3.699219 39 4.5 39 L 12 39 L 17.90625 11.8125 C 18.105469 10.8125 19.011719 9 21.8125 9 L 38 9 C 36.601563 4.398438 32.105469 2 27.90625 2 Z M 22 11.09375 L 20.40625 11.40625 C 20.105469 11.605469 19.914063 12.011719 19.8125 12.3125 L 17.40625 23.5 C 18.105469 23.199219 18.792969 23.09375 19.59375 23.09375 L 26.8125 23.09375 C 33.210938 23.09375 36.800781 20.507813 38 14.90625 C 38.199219 13.90625 38.3125 13.113281 38.3125 12.3125 L 38.1875 11.1875 L 38.1875 11.09375 Z M 40.09375 11.3125 L 40.1875 12 C 40.289063 13 40.105469 13.894531 39.90625 15.09375 C 38.507813 21.59375 33.988281 24.90625 26.6875 24.90625 L 19.5 24.90625 C 17.898438 24.90625 16.800781 25.605469 16.5 26.90625 C 16.101563 28.707031 12.601563 45.199219 12.5 45.5 C 12.398438 46 12.507813 46.6875 12.90625 47.1875 C 13.207031 47.585938 13.6875 48 14.6875 48 L 22.6875 48 C 23.6875 48 24.613281 47.289063 24.8125 46.1875 C 25.710938 42.386719 26.898438 36.613281 27 36.3125 C 27 36.210938 27.09375 36 27.09375 36 L 32.40625 36 C 40.207031 36 46.101563 31.3125 47.5 23.8125 C 48.5 19.210938 47.207031 16.289063 45.90625 14.6875 C 44.105469 12.386719 40.792969 11.3125 40.09375 11.3125 Z"
                                                    })
                                                }),
                                                "Buy"
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative md:h-full w-full footer-icons center ...",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "text-xs text-gray",
                        children: [
                            "Updated: ",
                            product.updatedAt
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Shop_ProductPage = (ProductPage);

;// CONCATENATED MODULE: ./pages/products/[handle].tsx






function products({ product  }) {
    const variantId = product.variants.edges[0].node.id;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Mayday - Shop"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Music"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (Layout_module_default()).main,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Shop_ProductPage, {
                    product: product,
                    checkoutMutation: checkoutsMutation,
                    variantId: variantId
                })
            })
        ]
    });
}
async function getStaticPaths() {
    const { data  } = await (0,utils/* storefront */.bn)(gql`
  {
    products(first: 100) {
      edges {
        node {
          handle
        }
      }
    }
  }
  `);
    return {
        paths: data.products.edges.map((product)=>({
                params: {
                    handle: product.node.handle
                }
            })
        ),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const { data  } = await (0,utils/* storefront */.bn)(singleProductsQuery, {
        handle: params.handle
    });
    return {
        props: {
            product: data.productByHandle
        },
        revalidate: 10
    };
}
const gql = String.raw;
const singleProductsQuery = gql`
query SingleProduct ($handle: String!){
  productByHandle(handle:  $handle){
    title
    description
    updatedAt
    tags
    priceRange {
      minVariantPrice {
        amount
      }
    }
    images(first: 1) {
      edges {
        node {
          transformedSrc
          altText
        }
      }
    }
    variants(first:1) {
      edges {
        node {
          id
        }
      }
    }
  }
}
`;
const checkoutsMutation = gql`
mutation CheckoutCreate($variantId: ID!) {
  checkoutCreate(input: {
    lineItems: {
      variantId: $variantId,
      quantity: 1
    }
  }) {
    checkout {
      webUrl
    }
  }
}
`;
/* harmony default export */ const _handle_ = (products);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,650,558], () => (__webpack_exec__(8449)));
module.exports = __webpack_exports__;

})();