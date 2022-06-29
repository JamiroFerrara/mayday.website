import { Center } from '@mantine/core'
import CartItem from './CartItem'
import { useCart, emptyCart } from '../../../utils/shopify'
import {useRouter} from 'next/router'
import { FaCartArrowDown } from 'react-icons/fa'
import { CartClearedNotification } from '../../../utils/notifications'

let total = 0;

export default function CartContainer() {
  const { cart } = useCart()
  const router = useRouter();

  if (cart.estimatedCost != null){
    total = cart.estimatedCost['totalAmount'];
  }

  function clearCart(){
    emptyCart();
    CartClearedNotification();
    router.reload();
  }

  function checkout(){
    const checkoutUrl = cart?.checkoutUrl;
    router.push(checkoutUrl);
    emptyCart();
  }

  return (
    <>
      <Center className="p-10 text-black">
        <div className="w-full rounded bg-white p-8">

          <div className="flex flex-row justify-between">
            <div className="text-2xl font-extrabold">Cart</div>
            <FaCartArrowDown className='text-black h-5 w-5 m-2'/>
          </div>

          {cart.lines.length > 0 ? (
            <>
              <ul>
                {cart.lines.map((item: any) => (
                  <>
                    <CartItem item={item}/>
                  </>
                ))}
              </ul>

              <div className='border-black border mt-4'></div>

              <div className="flex flex-row justify-between pt-2">
                <div>Total</div>
                <div className='flex flex-row space-x-2 font-extrabold text-red-800'>
                  <div>{total['amount']}</div>
                  <div>€</div>
                </div>
              </div>
            </>
          ) : <div>No items in cart..</div>}

        </div>
      </Center>

      <Center className='space-x-2'>
        <button className="border border-gray-500 rounded p-2 hover:border-white hover:text-white w-28" onClick={() => clearCart()}>Clear</button>
        <button className="border border-gray-500 rounded p-2 hover:border-white hover:text-white w-28" onClick={() => checkout()}>Checkout</button>
      </Center>
    </>
  )
}
