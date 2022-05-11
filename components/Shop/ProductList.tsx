import ProductItem from './ProductItem'
import { storefront } from '../../utils'

const ProductList = ({title, products}) => {
  return (
    <>
        <div className="w-full px-4 py-10 mb-8 bg-gray-100 rounded sm:px-6 lg:max-w-7xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h2>

          <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.edges.map((item) => {
              
              const product = item.node
              const image = product.images.edges[0].node

              return (
                <ProductItem product={product} image={image}></ProductItem>
            )})}
          </div>
        </div>
    </>
  )
}

export default ProductList
