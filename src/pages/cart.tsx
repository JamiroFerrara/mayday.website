import { Navbar } from '../components/Ui/Navbar'
import CartContainer from '../components/Ui/Cart/CartContainer'

export default function CartPage(){
  return (
    <>
    <Navbar/>
    <CartContainer cartItems={""}/>
    </>
  )
}
