(() => {
var exports = {};
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 2136:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__S4aNf",
	"imgContainer": "Layout_imgContainer__Si3Gl",
	"main": "Layout_main__c1pHS",
	"title": "Layout_title__aN7Jd",
	"description": "Layout_description__tvpUW",
	"code": "Layout_code__wA5R5",
	"grid": "Layout_grid__oB4Ql",
	"card": "Layout_card__t1tJC",
	"logo": "Layout_logo__dBXl_"
};


/***/ }),

/***/ 9684:
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
;// CONCATENATED MODULE: ./utils/index.js
async function storefront(query, variables = {}) {
    const response = await fetch("https://mayday-sound-system.myshopify.com/api/2022-04/graphql.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": "db56b07b09f9f3e2bc43adab18dc4573"
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    return response.json();
}
function formatPrice(number) {
    return Intl.NumberFormat("it-it", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 0
    }).format(number);
}

;// CONCATENATED MODULE: ./pages/shop.tsx




const Shop = ({ products  })=>{
    console.log({
        products
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Mayday - Home"
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
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (Layout_module_default()).main,
                children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-white",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-2xl font-extrabold tracking-tight text-gray-900",
                                    children: "Digital Downloads"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",
                                    children: products.data.products.edges.map((item)=>{
                                        const product = item.node;
                                        const image = product.images.edges[0].node;
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "group relative",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: image.transformedSrc,
                                                        alt: image.altText,
                                                        className: "h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mt-4 flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "text-sm text-gray-700",
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
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "mt-1 text-sm text-gray-500",
                                                                    children: product.tags
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-sm font-medium text-gray-900",
                                                            children: formatPrice(product.priceRange.minVariantPrice.amount)
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, product.id);
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
async function getStaticProps() {
    const data = await storefront(productsQuery);
    return {
        props: {
            products: data
        },
        revalidate: 10
    };
}
const gql = String.raw;
const productsQuery = gql`
  query Products {
    products(first: 6) {
      edges {
        node {
          id
          title
          handle
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
        }
      }
    }
  }
`;
/* harmony default export */ const shop = (Shop);


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__(9684));
module.exports = __webpack_exports__;

})();