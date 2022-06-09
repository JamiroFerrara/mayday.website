import SvgMenu from "./SvgMenu"
import NavButton from './NavButton'
import Dropdown  from "./Dropdown"
import {useState} from "react"
import NavbarTitle from './Title'
import style from './Navbar.module.css'

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)

  return(
    <>
      <body className={style.container}>
        <nav className="py-2 mx-3 lg:flex ">

          <div className="container flex flex-wrap w-auto align-middle bottom-2">
            <NavbarTitle/>
            <SvgMenu onPress={()=> setIsOpen(!isOpen)}/>
          </div>

          <div className={`${ isOpen ? '' : 'hidden' } flex my-auto w-full lg:w-auto lg:inline-flex`}>
            <ul className="flex flex-col w-full mt-auto lg:space-y-0 space-y-2 lg:space-x-2 lg:flex-row">
              <NavButton href="/home" title="Home"/>
              <NavButton href="/music" title="Music"/>
              <Dropdown title="Shop" items={["Vinyls", "Shirts", "Digital"]}/>
              <NavButton href="/video" title="Video"/>
              <NavButton href="/booking" title="Booking"/>
            </ul>
          </div>

        </nav>
      </body>
    </>
  )
}
