import ProductItem from './ProductItem'
import { useState } from 'react'
import { storefront } from '../../utils'
import Fuse from 'fuse.js'

const ProductList = ({title, products}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const fItems = filterJSONFuse(products.edges, searchTerm)
  console.log(fItems, products.edges)

  return (
    <>
        <div className="w-full px-4 py-10 mb-8 bg-gray-100 rounded sm:px-6 lg:max-w-7xl">
          <div className="flex group">
            <h2 className="text-2xl group-hover:text-red-900 group-hover:translate-x-1 transition duration-1000 w-3/5 font-extrabold tracking-tight text-gray-900">
              {title}
            </h2>
            <input className="title w-2/5 border rounded p-1 border-slate-900 hover:shadow-md transition" placeholder='Search' onChange={event => {setSearchTerm(event.target.value)}}/>
          </div>

          <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {fItems.map((item) => {
              const product = item.item.node
              const image = product.images.edges[0].node

              return (
                <ProductItem product={product} image={image}></ProductItem>
            )})}
          </div>
        </div>
    </>
  )
}

function filterJSON(value, searchTerm)
{
  const sVal = JSON.stringify(value);
  if (searchTerm == "") {
    return value
  } else if (sVal.includes(searchTerm)){
    return value
        }
}

function filterJSONFuse(items, searchTerm)
{
  const options = {
    includeScore: true,
    keys: ['node.title', 'node.tags',]
  }
  const fuse = new Fuse(items, options)

  if (searchTerm != ""){
    return fuse.search<any>(searchTerm)
  }
  else {
    return fuse.search<any>(" ")
  }
}

export default ProductList
