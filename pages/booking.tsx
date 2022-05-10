import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import ReactPlayer from 'react-player'
import Navbar from '../components/Ui/Navbar'

const Booking: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mayday - Booking</title>
        <meta name="description" content="Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>

      <main className={styles.main}>
        <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' playing={true} controls={true} />
      </main>
    </div>
  )
}

export default Booking
