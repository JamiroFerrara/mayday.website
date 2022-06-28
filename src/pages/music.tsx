import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Ui/Navbar/Navbar'
import styles from '../styles/Layout.module.css'
import ReactPlayer from 'react-player'

function Music ({players}){
  return (
    <div>
      <Head>
        <title>Mayday - Home</title>
        <meta name="description" content="Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <main className={styles.main}>
        <div className="flex flex-wrap gap-2 rounded center">
          <ReactPlayer width={"48%"} url='https://soundcloud.com/edo-et-ganesh' controls={true} />
          <ReactPlayer width={"48%"} url='https://soundcloud.com/stiwi23' controls={true} />
          <ReactPlayer width={"48%"} url='https://soundcloud.com/the_discoutsider' controls={true} />
          <ReactPlayer width={"48%"} url='https://soundcloud.com/tekaproduction' controls={true} />
        </div>
      </main>
    </div>
  )
}

export default Music
