import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Carousel from '../components/Media/Carousel/Carousel'
import VideoContainer from '../components/Media/Carousel/VideoContainer/VideoContainer'
import Navbar from '../components/Ui/Navbar'
import Footer from '../components/Ui/Footer'

const home = () => {
  return (
      <div>
        <Head>
        <title>Mayday - Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar></Navbar>


        <div className={styles.homePage}>
        <Carousel/>
        </div>
      </div>
  )
}

export default home