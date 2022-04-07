import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Video: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mayday - Home</title>
        <meta name="description" content="Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a className={styles.title}>VIDEO</a>
      </main>
    </div>
  )
}

export default Video
