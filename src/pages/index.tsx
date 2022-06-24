import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Carousel from '../components/Media/Carousel/Carousel'
import VideoContainer from '../components/Media/Carousel/VideoContainer/VideoContainer'

const Index: NextPage = () => {
  return (
    <a href='/home'>
      <Head>
        <title>MaydaySoundSystem</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VideoContainer/>
    </a>
  )
}

export default Index
