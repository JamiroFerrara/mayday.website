import storefront from './storefront'
import { useEffect, useState } from 'react'

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

export async function addToCart(item) {
  const addToCartMutation = gql`
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

  let localCartData = JSON.parse( window.localStorage.getItem("mdy:shopify:cart") || '{}');
  return await storefront(addToCartMutation, {cartId: localCartData.id, variantId: item})
}

export async function getCart(cartId) { const getCartQuery = gql`
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

  return await storefront(getCartQuery, {cartId: cartId})
}

// HOOKS
//-------------------------------------
export function useCart() {
  const [cart, setCart] = useState({id: null, lines: [], checkoutUrl: "", estimatedCost: null});

  useEffect(()=> {
    async function getShopCart(){
      let localCartData = JSON.parse( window.localStorage.getItem("mdy:shopify:cart") || '{}');

      if (Object.keys(localCartData).length !== 0){
        const existingCart = await getCart(localCartData.id);

        setCart({
          id: localCartData.id,
          checkoutUrl: localCartData.checkoutUrl,
          estimatedCost: existingCart.data.cart.estimatedCost,
          lines: existingCart.data.cart.lines.edges,
        });

        return;
      }

      localCartData = await createCart();

      setCart({
        id: localCartData.id,
        checkoutUrl: localCartData.checkoutUrl,
        estimatedCost: null,
        lines: [],
      })

      window.localStorage.setItem(
        'mdy:shopify:cart', JSON.stringify(localCartData)
      )
    }

    getShopCart();
  }, [])

  return {cart, setCart};
}

// FUNCTIONS
//-------------------------------------
export function emptyCart(){
    window.localStorage.removeItem('mdy:shopify:cart');
}