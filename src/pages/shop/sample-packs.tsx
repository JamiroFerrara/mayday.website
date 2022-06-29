import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Layout.module.css'
import ProductList from '../../components/Shop/ProductList'
import { getProductsFromCollection } from '../../utils/shopify'
import Navbar from '../../components/Ui/Navbar/Navbar'
import { WelcomeSamplePacksNotfication } from '../../utils/notifications'

let loaded = false;

const SamplePacks: NextPage = ({samplePacks} : any) => {

  function onPageLoaded(){
    if (!loaded){
      WelcomeSamplePacksNotfication();
      loaded = true;
    }
  }

  return (
    <div onLoad={() => onPageLoaded()}>
      <Head>
        <title>Mayday - Shop</title>
        <meta name="Sample packs" content="Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

        <main className={styles.main}>
          <ProductList title={'Sample Packs'} products={samplePacks.data.collectionByHandle.products} />
        </main>
    </div>
  )
}

export async function getStaticProps() {
  const samplePacks = await getProductsFromCollection('Sample')

  return {
    props: {
      samplePacks: samplePacks,
    },
    revalidate: 10,
  }
}

export default SamplePacks
