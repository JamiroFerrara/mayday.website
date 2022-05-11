import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import ReactPlayer from 'react-player'
import Navbar from '../components/Ui/Navbar'

const Events: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mayday - Events</title>
        <meta name="description" content="Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>

      <main className={styles.main}>
        <ReactPlayer width={"80%"} url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' playing={true} controls={true} />
      </main>
    </div>
  )
}

export default Events
