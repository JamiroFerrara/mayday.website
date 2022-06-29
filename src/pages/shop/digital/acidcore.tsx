import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../../styles/Layout.module.css'
import ProductList from '../../../components/Shop/ProductList'
import { getProductsFromCollection } from '../../../utils/shopify'
import Navbar from '../../../components/Ui/Navbar/Navbar'
import { WelcomeDigitalTracksNotfication } from '../../../utils/notifications'

let loaded = false;

const Acidcore: NextPage = ({products} : any) => {

  function onPageLoaded(){
    if (!loaded){
      WelcomeDigitalTracksNotfication();
      loaded = true;
    }
  }

  return (
    <div onLoad={() => onPageLoaded()}>
      <Head>
        <title>Mayday - Shop</title>
        <meta name="Acidcore digital downloads" content="Acidcore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

        <main className={styles.main}>
          <ProductList title={'Acidcore Downloads'} products={products.data.collectionByHandle.products} />
        </main>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsFromCollection('acid')
  console.log(products)

  return {
    props: {
      products: products,
    },
    revalidate: 10,
  }
}

export default Acidcore
