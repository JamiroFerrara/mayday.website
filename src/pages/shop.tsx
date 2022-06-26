import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import ProductList from '../components/Shop/ProductList'
import { getProductsFromCollection } from '../utils'
import Navbar from '../components/Ui/Navbar'

const Shop: NextPage = ({samplePacks, vinyls, tracks, wear, tutorials, projects} : any) => {
  return (
    <div>
      <Head>
        <title>Mayday - Shop</title>
        <meta name="Store for Mayday Sound System" content="Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

        <main className={styles.main}>
          <ProductList title={'Sample Packs'} products={samplePacks.data.collectionByHandle.products} />
          <ProductList title={'Digital Tracks'} products={tracks.data.collectionByHandle.products} />
          <ProductList title={'Vinyls'} products={vinyls.data.collectionByHandle.products} />
          {/* <ProductList title={'Wear'} products={wear.data.collectionByHandle.products} /> */}
          {/* <ProductList title={'Projects'} products={projects.data.collectionByHandle.products} /> */}
          {/* <ProductList title={'Tutorials'} products={tutorials.data.collectionByHandle.products} /> */}
        </main>
    </div>
  )
}

export async function getStaticProps() {
  const samplePacks = await getProductsFromCollection('Sample')
  const vinyls = await getProductsFromCollection('Vinyls')
  const tracks = await getProductsFromCollection('tracks')
  const tutorials = await getProductsFromCollection('tutorials')
  const projects = await getProductsFromCollection('projects')
  const wear = await getProductsFromCollection('wear')

  return {
    props: {
      samplePacks: samplePacks,
      vinyls: vinyls,
      tracks: tracks,
      tutorials: tutorials,
      projects: projects,
      wear: wear,
    },
    revalidate: 10,
  }
}

export default Shop
