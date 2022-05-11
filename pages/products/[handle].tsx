import {useState} from 'react'
import { storefront } from '../../utils'
import Head from 'next/head'
import Navbar from '../../components/Ui/Navbar'
import styles from '../../styles/Layout.module.css'
import ProductPage from '../../components/Shop/ProductPage'

function products ({product}) {
  console.log(product)
  const variantId = product.variants.edges[0].node.id;

  return (
    <div>
      <Head>
        <title>Mayday - Shop</title>
        <meta name="description" content="Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>

        <main className={styles.main}>
          <ProductPage product={product} checkoutMutation={checkoutsMutation} variantId={variantId}/>
        </main>
    </div>
  )
}

export async function getStaticPaths() {
  const {data} = await storefront(gql`
  {
    products(first: 100) {
      edges {
        node {
          handle
        }
      }
    }
  }
  `)
  return {
    paths: data.products.edges.map(product => ({params: {handle: product.node.handle}})),
    fallback: false,
    revalidate:10
  }
}

export async function getStaticProps({params}) {
  const {data} = await storefront(singleProductsQuery, {handle: params.handle})
  return {
    props: {
      product: data.productByHandle
    },
    revalidate:10
  }
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
`
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
`

export default products