import Navbar from "../components/Ui/Navbar/Navbar"
import { createCart } from '../utils/shopify'

export default function SandboxPage(){

  async function CreateCart(){
    const res = await createCart();
    console.log("Cart --> ", res);
  }

  return(
    <>
      {/* <Navbar/> */}
      <button className="border border-white rounded p-2" onClick={() => CreateCart()}>Create cart</button>
    </>
  )
}
