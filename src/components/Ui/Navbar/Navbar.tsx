import NavButton from './NavButton'
import Dropdown  from "./Dropdown"
import {useState} from "react"
import NavbarTitle from './Title'
import style from './Navbar.module.css'
import { Burger } from '@mantine/core';
import {BsCart} from 'react-icons/bs'
import Link from 'next/link'

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)

  return(
    <>
      <div className="absolute z-10 w-full">
        <body className={style.container}>
          <nav className="py-2 mx-3 lg:flex justify-between pr-4">

            <div className="container flex flex-wrap w-auto align-middle bottom-2 justify-between">
              <NavbarTitle/>

              <div className="flex flex-row space-x-4 lg:hidden">

                <a href='/cart' className='h-8 mt-1 self-center'>
                  <BsCart size={25} className='text-white hover:text-red-500'/>
                </a>

                <Burger className='self-center' color={"white"} opened={isOpen} onClick={() => setIsOpen(!isOpen)} />

              </div>
            </div>

              <div className={`${ isOpen ? '' : 'hidden' } flex my-auto w-full lg:w-auto lg:inline-flex`}>
                <ul className="flex flex-col w-full mt-auto lg:space-y-0 space-y-2 lg:space-x-2 lg:flex-row">
                  <NavButton href="/home" title="Home"/>
                  <NavButton href="/music" title="Music"/>
                  <NavButton href="/shop" title="Shop"/>
                  {/* <Dropdown title="Shop" items={["Packs", "Digital", "Vinyl"]}/> */}
                  <NavButton href="/video" title="Video"/>

                  <a href='/cart' className='transition self-center p-2 border border-transparent hover:text-red-500 hover:-translate-y-1 hover:border-b-red-500'>
                    <BsCart size={20} className='text-white '/>
                  </a>

                </ul>
              </div>

          </nav>
        </body>
      </div>
      <div className="h-20"></div>
    </>
  )
}
