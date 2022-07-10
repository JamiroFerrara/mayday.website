import NavButton  from "./NavButton"
import {useState} from "react"
import st from '../../../styles/Layout.module.css'
import {useRouter} from 'next/router'

interface Props {
  items: any[]
  title: string
  isNavOpen: any
  link: string
}

export default function Dropdown(props: Props){
  const [isOpen, setIsOpen] = useState(false)
  const {items, title, link, isNavOpen} = props
  const router = useRouter();

  function onMouseEnter(){
    if (!isNavOpen){
      setIsOpen(true);
    }
  }

  function onMouseLeave(){
    if(!isNavOpen){
      setIsOpen(false);
    }
  }

  function onButtonPressed(){
    if (isNavOpen){
      setIsOpen(!isOpen)
    } else {
      router.push(link)
    }
  }

  return(
    <li onMouseLeave={() => onMouseLeave()} onMouseEnter={() => onMouseEnter()} className="relative">
        <NavButton onPress={() => onButtonPressed()} title={title}/>
        <div className={`${ isOpen ? '' : 'translate-y-7 opacity-0' } p-2 text-white transition-all lg:w-44 top-18 full lg:absolute -left-6 rounded-md`}>
          <div className={st.backgroundContainer}>
            <ul className="flex flex-col space-y-2">
              {items.map((item) => (
                <a href={item.link}>
                  <li className="p-2 pl-4 border-b-2 hover:border-b-red-500 transition">
                    <div className="w-full" >{item.title}</div>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </li>
  )
}
