import type { NextPage } from 'next'
import Head from 'next/head'
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
