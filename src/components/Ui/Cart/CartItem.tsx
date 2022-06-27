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
  
  return (
    <div>{title + " " + price + " " + currencyCode}</div>
  )
}
