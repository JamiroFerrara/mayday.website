import Head from 'next/head'
import Carousel from '../components/Media/Carousel/Carousel'
import Navbar from '../components/Ui/Navbar/Navbar'
import ContactUs from '../components/Ui/ContactUs'
import { WelcomeHomeNotification } from '../utils/notifications'

let loaded = false;

const home = ({imgSourcesStatic}) => {

  function onPageLoaded(){
    if (!loaded){
      WelcomeHomeNotification();
      loaded = true;
    }
  }

  return (
    <div onLoad={() => onPageLoaded()}>
        <Head>
        <title>Mayday - Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar></Navbar>

        <Carousel imgSourcesStatic={imgSourcesStatic}/>

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