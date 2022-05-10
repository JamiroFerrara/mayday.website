import ProductItem from './ProductItem'

const staticProducts = [
  {
    id: 1,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$13',
    description: '3 sizes available',
    imageSrc:
      'https:tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
  },
]

const ProductList = ({title, products}) => {
  return (
    <>
        <div className="bg-white px-4 sm:py-10 sm:px-6 lg:max-w-7xl w-full rounded mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.data.products.edges.map((item) => {
              
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
