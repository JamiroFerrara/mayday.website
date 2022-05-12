"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T4": () => (/* binding */ formatPrice),
/* harmony export */   "bn": () => (/* binding */ storefront),
/* harmony export */   "er": () => (/* binding */ getProductsFromCollection)
/* harmony export */ });
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
const gql = String.raw;
async function getProductsFromCollection(collection) {
    const productsQuery = gql`
  query ProductsByCollection ($handle: String!){
    collectionByHandle(handle: $handle){
      products (first: 100){
        edges{
          node{
            id
            title
            handle
            tags
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1){
              edges{
                node{
                  transformedSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
  `;
    return await storefront(productsQuery, {
        handle: collection
    });
}


/***/ })

};
;