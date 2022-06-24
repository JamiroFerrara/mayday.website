import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import mayday from '../../../public/mayday03.png'
import style from '../../../styles/Navbar.module.css'
import { FaAngleLeft } from 'react-icons/fa'

export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  const handleItemClick = () => {
    setActive(false)
  }

  return (
    <>
      <nav className={style.container}>
        <Link href="/home">
          <a className="inline-flex items-center p-2 mr-4">
            <div className={style.image}>
              <Image className='hover-opacity' src={mayday} />
            </div>
            <span className="mx-3 font-bold tracking-wide text-white transition hover-opacity">
              MAYDAYSOUNDSYSTEM
            </span>
          </a>
        </Link>
        <button
          className="inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-gray-700 hover:text-white lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
        >
          <div className="flex flex-col items-start w-full lg:ml-auto lg:inline-flex lg:h-auto lg:w-auto lg:flex-row lg:items-center">
            <Link href="/home">
              <a onClick={handleItemClick}
                className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded hover:bg-gray-700 hover:text-white lg:inline-flex lg:w-auto "
              >
                Home
              </a>
            </Link>
            <Link href="/music">
              <a onClick={handleItemClick}
                className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded hover:bg-gray-700 hover:text-white lg:inline-flex lg:w-auto"
              >
                Music
              </a>
            </Link>
            <div className="flex flex-col w-full ">
              <div className="flex items-center w-full px-3 py-2 rounded hover:bg-gray-700 hover:text-white ">
                <Link href="/shop">
                    <a onClick={handleItemClick}
                      className="flex items-center w-11/12 font-bold text-white lg:inline-flex lg:w-auto"
                    >
                      Shop
                    </a>
                </Link>
                {/* <FaAngleLeft className="flex flex-col hover:text-red-900 hover:-rotate-90" size={20}></FaAngleLeft> */}
              </div>
            </div>
            <Link href="/video">
              <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded hover:bg-gray-700 hover:text-white lg:inline-flex lg:w-auto">
                Video
              </a>
            </Link>
            {/* <Link href="/events">
              <a onClick={handleItemClick}
                className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded hover:bg-gray-700 hover:text-white lg:inline-flex lg:w-auto"
              >
                Events
              </a>
            </Link> */}
            <Link href="/booking">
              <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded hover:bg-gray-700 hover:text-white lg:inline-flex lg:w-auto">
                Booking
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
