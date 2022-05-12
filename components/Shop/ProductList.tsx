import ProductItem from './ProductItem'
import { useState } from 'react'
import { storefront } from '../../utils'

const ProductList = ({title, products}) => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
        <div className="w-full px-4 py-10 mb-8 bg-gray-100 rounded sm:px-6 lg:max-w-7xl">
          <div className="flex">
            <h2 className="text-2xl w-3/5 font-extrabold tracking-tight text-gray-900">
              {title}
            </h2>
            <input className="title w-2/5 border rounded p-1 border-slate-900" placeholder='Search' onChange={event => {setSearchTerm(event.target.value)}}/>
          </div>

          <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.edges.filter((val)=> {
              console.log(val)
              if (searchTerm == "") {
                return val
              } else if (val.node.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            }).map((item) => {
              
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
