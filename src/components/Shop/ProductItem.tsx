import { formatPrice } from '../../utils/shopify/helpers'
import Link from 'next/link'
import styles from './products.module.scss'
import { FaCartPlus } from 'react-icons/fa'
import { addToCart } from '../../utils/shopify'
import { ItemAddedNotification } from '../../utils/notifications'

const ProductItem = ({ product, image }) => {
  const isPhysical = isProductPhysical(product);
  const isOutOfStock = isProductOutOfStock(isPhysical, product);
  console.log(isOutOfStock, product.title, product.totalInventory);
  const variantId = product.variants.edges[0].node.id;

  function addToCartClicked(){
    addToCart(variantId);
    ItemAddedNotification(product.title);
  }

  return (
    <div className={styles.container}>
        <Link key={product.id} href={`${isOutOfStock ? "" : "/products/" + product.handle}`} scroll={false}>
          <div>
            <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <div className={`${isOutOfStock ? 'bg-red-500' : ''} object-cover object-center w-full h-full lg:h-full lg:w-full`} >
                <div className={`${isOutOfStock ? '' : 'hidden'}  w-full rounded text-white pl-2`}>Out of Stock</div>
                <img src={image.transformedSrc} alt={image.altText}
                  className={`${isOutOfStock ? 'opacity-50' : ''} object-cover object-center w-full h-full`}/>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <h3 className={styles.itemTitle}>
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {product.title}
                  </a>
                </h3>
              </div>
              <p className={styles.itemPrice}>
                {formatPrice(product.priceRange.minVariantPrice.amount)}
              </p>
            </div>
            <div className="h-8"></div>
          </div>
        </Link>

        <button onClick={() => addToCartClicked()} className={`${isOutOfStock ? 'hidden' : ''} hover:text-red-500 hover:-translate-y-1 transition absolute m-2 right-2 bottom-2`}>
          <FaCartPlus size={25}/>
        </button>
    </div>
  )
}

function isProductPhysical(product: any){
  return product.tags.includes("physical")
}

function isProductOutOfStock(isPhysical:any, product: any){
  if (isPhysical){
    const ret = product.totalInventory > 0
    return !ret;
  } else {
    return false;
  }
}

export default ProductItem
