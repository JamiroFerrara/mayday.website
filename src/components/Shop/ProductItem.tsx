import { formatPrice } from '../../utils/shopify/helpers'
import Link from 'next/link'
import styles from './products.module.scss'

const ProductItem = ({ product, image }) => {
  const isPhysical = isProductPhysical(product);
  const isOutOfStock = isProductOutOfStock(isPhysical, product);
  console.log(isOutOfStock, product.title, product.totalInventory);

  return (
    <Link key={product.id} href={`${isOutOfStock ? "" : "/products/" + product.handle}`} scroll={false}>
      <div className={styles.container}>
        <div  className="relative group">
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
        </div>
      </div>
    </Link>
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
