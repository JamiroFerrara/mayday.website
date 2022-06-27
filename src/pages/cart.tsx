import { Navbar } from '../components/Ui/Navbar'
import CartContainer from '../components/Ui/Cart/CartContainer'
import { useState, useEffect } from 'react'
import { createCart } from '../utils/shopify'

export default function CartPage(){
  const [cart, setCart] = useState({id: null, lines: [], checkoutUrl: "", estimatedCost: null});

  useEffect(()=> {
    async function getCart(){
      let localCartData: any = JSON.parse(
        window.localStorage.getItem("") || '{}'
      );

      if (localCartData){
        setCart({
          id: localCartData.cartId,
          checkoutUrl: localCartData.checkoutUrl,
          estimatedCost: null,
          lines: [],
        });

        return;
      }

      localCartData = await createCart();

      setCart({
        id: localCartData.cartId,
        checkoutUrl: localCartData.checkoutUrl,
        estimatedCost: null,
        lines: [],
      })

      window.localStorage.setItem(
        'mdy:shopify:cart', 
        JSON.stringify(localCartData)
      )
    }

    getCart();
  }, [])

  return (
    <>
      <Navbar/>
      <CartContainer cartItems={""}/>
    </>
  )
}
