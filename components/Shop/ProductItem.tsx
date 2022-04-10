import { formatPrice } from '../../utils'
import Link from 'next/link'

const ProductItem = ({ product, image }) => {
  return (
    <Link key={product.id} href={`/products/${product.handle}`}>
      <div  className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
          <img
            src={image.transformedSrc}
            alt={image.altText}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {product.title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.tags}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {formatPrice(product.priceRange.minVariantPrice.amount)}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
