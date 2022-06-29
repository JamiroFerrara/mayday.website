import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Layout.module.css'
import ProductList from '../../components/Shop/ProductList'
import { getProductsFromCollection } from '../../utils/shopify'
import Navbar from '../../components/Ui/Navbar/Navbar'
import { WelcomeVinylsNotfication } from '../../utils/notifications'

let loaded = false;

const Vinyls: NextPage = ({vinyls} : any) => {

  function onPageLoaded(){
    if (!loaded){
      WelcomeVinylsNotfication();
      loaded = true;
    }
  }

  return (
    <div onLoad={() => onPageLoaded()}>
      <Head>
        <title>Mayday - Shop</title>
        <meta name="Vinyls for Mayday Sound System" content="Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

        <main className={styles.main}>
          <ProductList title={'Vinyls'} products={vinyls.data.collectionByHandle.products} />
        </main>
    </div>
  )
}

export async function getStaticProps() {
  const vinyls = await getProductsFromCollection('Vinyls')

  return {
    props: {
      vinyls: vinyls,
    },
    revalidate: 10,
  }
}

export default Vinyls
