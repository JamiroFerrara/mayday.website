
import { Navbar } from '../components/Ui/Navbar'
import { Center } from '@mantine/core'
import { Cart, getCart, createCart, addToCart } from '../utils/shopify'
import { useEffect, useState } from 'react'

let cartData;

export default function CartPage(){
  const [isLoading, setisLoading] = useState(true);

  useEffect(()=> {
    if (isLoading){
      const getCartData = async () => {
        await createCart();
        await addToCart();

        const ret = await getCart();
        cartData = ret;
        console.log(cartData.data.cart.lines);
        
        setisLoading(false);
      }
      getCartData();
    }
  })

  if (isLoading){
      return (
        <div></div>
      )
  }

  return (
    <>
      <Navbar/>
      <div className='h-12'></div>

      <Center className='p-10'>
        <div className='bg-white rounded w-full p-8'>
          <div className='flex text-2xl text-black font-extrabold'>Cart</div>
          {
            cartData.data.cart.lines.edges.map((index, cartItem) => {
              return (
                <div>item</div>
              )
          })
          }
        </div>
      </Center>
    </>
  )
}
