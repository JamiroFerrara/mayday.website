import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Music: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mayday - Home</title>
        <meta name="description" content="Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a className={styles.title}>MUSIC</a>
      </main>
    </div>
  )
}

export default Music
