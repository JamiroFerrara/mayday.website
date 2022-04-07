import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Btn from '../components/Button'
import mayday from '../public/mayday03.png'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Image src={mayday}/>
          <a className={styles.title}>COMING SOON..</a>
        </div>
      </main>
    </div>
  )
}

export default Home
