import storefront from './storefront'

const gql = String.raw

export let Cart

export async function getProductsFromCollection(collection) {
  const productsQuery = gql`
    query ProductsByCollection($handle: String!) {
      collectionByHandle(handle: $handle) {
        products(first: 100) {
          edges {
            node {
              id
              title
              handle
              variants (first: 1){
                edges {
                  node {
                    id
                  }
                }
              }
              tags
              totalInventory
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
    }
  `
  return await storefront(productsQuery, { handle: collection })
}

export async function createCart() {
  const createCartMutation = gql`
    mutation CreateCart {
      cartCreate {
        cart {
          checkoutUrl
          id
        }
      }
    }
  `
  const res = await storefront(createCartMutation)
  Cart = res.data.cartCreate.cart
  return Cart
}

export async function addToCart() { const addToCartMutation = gql`
    mutation AddToCart($cartId: ID!, $variantId: ID!) {
      cartLinesAdd(
        cartId: $cartId
        lines: [{ quantity: 1, merchandiseId: $variantId }]
      ) {
        cart {
          lines(first: 100) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    product {
                      title
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  console.log(Cart.checkoutUrl)
  return await storefront(addToCartMutation, {cartId: Cart.id, variantId: "gid://shopify/ProductVariant/42878097719470"})
}

export async function getCart() { const getCartQuery = gql`
  query GetCart($cartId: ID!) {
        cart(id: $cartId) {
          checkoutUrl
          estimatedCost {
            totalAmount {
              amount
            }
          }
          lines(first: 100) {
            edges {
              node {
                quantity
                estimatedCost {
                  subtotalAmount {
                    amount
                    currencyCode
                  }
                  totalAmount {
                    amount
                    currencyCode
                  }
                }
                merchandise {
                  ... on ProductVariant {
                    title
                    product {
                      title
                    }
                    priceV2 {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
  `

  return await storefront(getCartQuery, {cartId: Cart.id})
}