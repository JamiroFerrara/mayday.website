interface Props{
  item?: any
}

export default function CartItem(props:Props){
  const {item} = props

  const merchandise = item.node.merchandise;
  const title = merchandise.product.title;
  const price = merchandise.priceV2.amount;
  const currencyCode = merchandise.priceV2.currencyCode;
  console.log(title, price, currencyCode);
  console.log(item)
  
  return (
    <>
      <div className='flex flex-row justify-between'>
        <div>{item.node.merchandise.product.title}</div>
        <div className='flex flex-row space-x-2 font-extrabold text-black'>
          <div>{item.node.merchandise.priceV2.amount}</div>
          <div>€</div>
        </div>
      </div>
    </>
  )
}
