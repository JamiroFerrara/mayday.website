import { Center } from '@mantine/core'
import { Cart, getCart, createCart, addToCart } from '../../../utils/shopify'
import { useEffect, useState } from 'react'
import CartItem from './CartItem'

let cartData

interface Props {
  cartItems: any
}

export default function CartContainer(props: Props) {
  const { cartItems } = props
  const [isLoading, setisLoading] = useState(true)

  if (isLoading) {
    return (
      <>
        <div className="h-20"></div>
        <Center>
          <div>Loading..</div>
        </Center>
      </>
    )
  }

  return (
    <>
      <div className="h-20"></div>

      <Center className="p-10">
        <div className="w-full rounded bg-white p-8">
          <div className="flex text-2xl font-extrabold text-black">Cart</div>
          {cartData.data.cart.lines.edges.map((cartItem:any) => {
            return (
              <CartItem item={cartItem}/>
            )
          })}
        </div>
      </Center>
    </>
  )
}
