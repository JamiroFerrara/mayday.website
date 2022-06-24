import Head from 'next/head'
import styles from '../../styles/Layout.module.css'
import Carousel from '../components/Media/Carousel/Carousel'
import Navbar from '../components/Ui/Navbar'
import ContactUs from '../components/Ui/ContactUs'

const home = ({imgSourcesStatic}) => {
  return (
      <div>
        <Head>
        <title>Mayday - Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar></Navbar>

        <div className={styles.homePage}>
          <Carousel imgSourcesStatic={imgSourcesStatic}/>
        </div>

        <main className="main">
          <ContactUs/>
        </main>
      </div>
  )
}

export async function getStaticProps(){
  const imgSourcesStatic = [
    "https://res.cloudinary.com/mayday-soundsystem/image/upload/v1652364718/500_Magnum_Soundcloud_Banner_dyg7qb.jpg",
    "https://res.cloudinary.com/mayday-soundsystem/image/upload/v1652364668/SoundCloud_Banner_sud9cq.jpg",
    "https://res.cloudinary.com/mayday-soundsystem/image/upload/v1652364666/Plata_Soundcloud_banner_w77mxh.jpg",
  ]

  return {
    props: {
      imgSourcesStatic: imgSourcesStatic,
    },
    revalidate: 10,
  }
}

export default home