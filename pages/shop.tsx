import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import ProductList from '../components/ProductList'
import { storefront, formatPrice } from '../utils'

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

const Shop: NextPage = ({products} : any) => {
  console.log({products})
  return (
    <div>
      <Head>
        <title>Mayday - Home</title>
        <meta name="description" content="Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Digital Downloads
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.data.products.edges.map((item) => {
              
              const product = item.node
              const image = product.images.edges[0].node

              return (
              <div key={product.id} className="group relative">
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
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                         {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.tags}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{formatPrice(product.priceRange.minVariantPrice.amount)}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const data = await storefront(productsQuery)
  return {
    props: {
      products: data,
    },
  }
}

const gql = String.raw

const productsQuery = gql`
  query Products {
    products(first: 6) {
      edges {
        node {
          id
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`
export default Shop
