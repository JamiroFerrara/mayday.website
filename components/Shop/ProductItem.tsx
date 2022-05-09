import { formatPrice } from '../../utils'
import Link from 'next/link'
import styles from './products.module.scss'

const ProductItem = ({ product, image }) => {
  return (
    <Link key={product.id} href={`/products/${product.handle}`}>
      <div className={styles.container}>
        <div  className="group relative">
          <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
            <img src={image.transformedSrc} alt={image.altText}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className={styles.itemTitle}>
                <a href="#">
                  <span aria-hidden="true" className="absolute  inset-0"></span>
                  {product.title}
                </a>
              </h3>
              <p className={styles.tags}>{product.tags}</p>
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

export default ProductItem
