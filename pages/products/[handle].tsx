import React from 'react'
import { storefront } from '../../utils'
import Head from 'next/head'
import Navbar from '../../components/Ui/Navbar'
import styles from '../../styles/Layout.module.css'

function products ({product}) {
  console.log(product);

  return (
    <div>
      <Head>
        <title>Mayday - Shop</title>
        <meta name="description" content="Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>


        <main className={styles.main}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.title}>{product.updatedAt}</div>
        </main>
    </div>
  )
}

export async function getStaticPaths() {
  const {data} = await storefront(gql`
  {
    products(first: 6) {
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
  }
}

export async function getStaticProps({params}) {
  const {data} = await storefront(singleProductsQuery, {handle: params.handle})
  return {
    props: {
      product: data.productByHandle
    }

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
  }
}
`

export default products