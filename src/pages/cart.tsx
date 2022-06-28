import Navbar from '../components/Ui/Navbar/Navbar'
import Head from 'next/head'
import CartContainer from '../components/Ui/Cart/CartContainer'
import { WelcomeCartNotification } from '../utils/notifications'

let loaded = false;

export default function CartPage(){

  function onPageLoaded(){
    if (!loaded){
      WelcomeCartNotification();
      loaded = true;
    }
  }

  return (
    <>
      <Head>
        <title>Mayday - Cart</title>
        <meta name="Cart for Mayday Sound System" content="Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div onLoad={() => onPageLoaded()}>
        <Navbar/>
        <CartContainer/>
      </div>
    </>
  )
}
