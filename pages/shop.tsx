import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import ProductList from '../components/Shop/ProductList'
import { storefront } from '../utils'
import Navbar from '../components/Ui/Navbar'

const Shop: NextPage = ({products} : any) => {
  console.log({products})
  return (
    <div>
      <Head>
        <title>Mayday - Shop</title>
        <meta name="description" content="Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>

      <main className={styles.main}>
        <ProductList title={"Digital Products"} products={products}/>
        <ProductList title={"Vinyls"} products={products}/>
        <ProductList title={"Courses"} products={products}/>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const data = await storefront(productsQuery)
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  }
}

const gql = String.raw

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
`
export default Shop
