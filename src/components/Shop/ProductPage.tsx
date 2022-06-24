import React from 'react'
import s from "./ProductPage.module.scss"
import { formatPrice, storefront } from '../../utils'
import {FaAngleLeft } from 'react-icons/fa'
import Image from 'next/image'

function ProductPage ({product, checkoutMutation, variantId}) {
const image = product.images.edges[0].node

async function checkout(){
    const {data} = await storefront(checkoutMutation, {variantId});
    console.log(checkoutMutation, variantId)
    const {webUrl} = data.checkoutCreate.checkout;
    window.location.href = webUrl;
}

  return (
            <div className="flex p-5 align-middle md:h-screen md:items-center">
                <div className="w-full p-5 px-4 mt-2 mb-8 bg-white rounded lg:max-w-7xl">
                    <div className='flex flex-row'>
                        <a href="/shop">
                            <FaAngleLeft className='mx-2 transition hover:-translate-x-1 hover:text-red-900' size={40}/>
                        </a>
                        <h2 className="title-bold">
                            {product.title}
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full p-4 md:w-3/5">
                            <div className={s.container}>
                                <Image src={image.transformedSrc} alt={image.altText} height={1000} width={1000}
                                className="object-cover object-center w-full h-full rounded"
                                />
                            </div>
                        </div>
                        <div className="relative flex flex-col p-2 mt-4 md:w-2/5">
                            <div className="flex flex-col w-full h-full md:absolute">
                                <div className="h-5/6">
                                    <h1 className="m-2 title-bold">
                                        Description:
                                    </h1>
                                    <p className="m-2 text-gray-500 text-l">{product.description}</p>
                                    <div className="flex justify-center w-full">
                                        <h2 className="font-serif text-4xl font-extrabold text-gray-900">
                                            {formatPrice(product.priceRange.minVariantPrice.amount)}
                                        </h2>
                                    </div>
                                </div>
                                <div className={s.container}>
                                    <button className="w-full gap-2 btn" onClick={checkout}>
                                        <svg fill="#FFFFFF" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 11.40625 2 C 10.40625 2 9.511719 2.6875 9.3125 3.6875 C 9.3125 3.6875 3.414063 30.695313 2.3125 36.09375 C 2.113281 37.195313 2.386719 37.789063 2.6875 38.1875 C 3.085938 38.6875 3.699219 39 4.5 39 L 12 39 L 17.90625 11.8125 C 18.105469 10.8125 19.011719 9 21.8125 9 L 38 9 C 36.601563 4.398438 32.105469 2 27.90625 2 Z M 22 11.09375 L 20.40625 11.40625 C 20.105469 11.605469 19.914063 12.011719 19.8125 12.3125 L 17.40625 23.5 C 18.105469 23.199219 18.792969 23.09375 19.59375 23.09375 L 26.8125 23.09375 C 33.210938 23.09375 36.800781 20.507813 38 14.90625 C 38.199219 13.90625 38.3125 13.113281 38.3125 12.3125 L 38.1875 11.1875 L 38.1875 11.09375 Z M 40.09375 11.3125 L 40.1875 12 C 40.289063 13 40.105469 13.894531 39.90625 15.09375 C 38.507813 21.59375 33.988281 24.90625 26.6875 24.90625 L 19.5 24.90625 C 17.898438 24.90625 16.800781 25.605469 16.5 26.90625 C 16.101563 28.707031 12.601563 45.199219 12.5 45.5 C 12.398438 46 12.507813 46.6875 12.90625 47.1875 C 13.207031 47.585938 13.6875 48 14.6875 48 L 22.6875 48 C 23.6875 48 24.613281 47.289063 24.8125 46.1875 C 25.710938 42.386719 26.898438 36.613281 27 36.3125 C 27 36.210938 27.09375 36 27.09375 36 L 32.40625 36 C 40.207031 36 46.101563 31.3125 47.5 23.8125 C 48.5 19.210938 47.207031 16.289063 45.90625 14.6875 C 44.105469 12.386719 40.792969 11.3125 40.09375 11.3125 Z"/></svg>
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative md:h-full w-full footer-icons center ...">
                        <h2 className="text-xs text-gray">Updated: {product.updatedAt}</h2>
                    </div>
                </div>
            </div>
  )
}

export default ProductPage