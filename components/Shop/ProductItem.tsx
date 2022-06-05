import { formatPrice } from '../../utils'
import Link from 'next/link'
import styles from './products.module.scss'
import Image from 'next/image'

const ProductItem = ({ product, image }) => {
  return (
    <Link key={product.id} href={`/products/${product.handle}`}>
      <div className={styles.container}>
        <div  className="relative group">
          <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <Image src={image.transformedSrc} alt={image.altText} height={1000} width={1000}
              className="object-cover object-center w-full h-full lg:h-full lg:w-full"
            />
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

export default ProductItem
