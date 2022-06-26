import Navbar from "../components/Ui/Navbar/Navbar"
import { createCart, Cart, addToCart, getCart } from '../utils/shopify'
import { Center } from '@mantine/core'

export default function SandboxPage(){

  async function CreateCart(){
    const res = await createCart();
    console.log("Cart --> ", res);
  }

  async function GetCart(){
    const res = await getCart();
    console.log(res);
  }

  async function AddToCartHandle(){
    addToCart();
    console.log("adding..")
  }

  return(
    <>
      {/* <Navbar/> */}
      <div className="h-4"></div>
      <Center>
        <button className="btn" onClick={() => CreateCart()}>Create cart</button>
        <div className="w-6"></div>
        <button className="btn" onClick={() => GetCart()}>Get cart</button>
        <div className="w-6"></div>
        <button className="btn" onClick={() => AddToCartHandle()}>Add to cart</button>
      </Center>
    </>
  )
}
