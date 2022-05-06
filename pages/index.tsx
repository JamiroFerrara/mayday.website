import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Carousel from '../components/Media/Carousel/Carousel'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mayday - Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Carousel />
      </main>
    </div>
  )
}

export default Home
