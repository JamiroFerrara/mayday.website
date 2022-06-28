import Navbar from '../components/Ui/Navbar/Navbar'
import Head from 'next/head'
import CartContainer from '../components/Ui/Cart/CartContainer'

export default function CartPage(){
  return (
    <>
      <Head>
        <title>Mayday - Cart</title>
        <meta name="Cart for Mayday Sound System" content="Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <CartContainer/>
    </>
  )
}
