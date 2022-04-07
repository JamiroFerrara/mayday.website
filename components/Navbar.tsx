import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import mayday from '../public/mayday03.png'

export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className="flex flex-wrap items-center bg-black p-3 ">
        <Link href="/">
          <a className="mr-4 inline-flex items-center p-2 ">
            <Image src={mayday} width={35} height={35} />
            <span className="mx-3 text-xl font-bold tracking-wide text-white">
              MAYDAYSOUNDSYSTEM
            </span>
          </a>
        </Link>
        <button
          className=" ml-auto inline-flex rounded p-3 text-white outline-none hover:bg-gray-700 hover:text-white lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
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
          <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-gray-700 hover:text-white lg:inline-flex lg:w-auto ">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-gray-700 hover:text-white lg:inline-flex lg:w-auto">
                Services
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
