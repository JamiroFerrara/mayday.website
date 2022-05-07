import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Carousel from '../components/Media/Carousel/Carousel'
import VideoContainer from '../components/Media/Carousel/VideoContainer/VideoContainer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mayday - Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Carousel/>

        <div className={styles.content}>
          <div className={styles.box}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius itaque quo quidem architecto placeat repellendus mollitia cupiditate delectus aperiam.
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
