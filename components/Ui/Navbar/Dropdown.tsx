import NavButton  from "./NavButton"
import {useState} from "react"

interface Props {
  items: string[]
  title: string
}

export default function Dropdown(props: Props){
  const [isOpen, setIsOpen] = useState(false)
  const {items, title} = props

  return(
      <li className="relative">
        <NavButton onPress={() => setIsOpen(!isOpen)} title={title}/>
        <div className={`${ isOpen ? '' : 'hidden' } left-0 p-2 text-black bg-white transition-all lg:w-44 top-18 mt-2 full lg:absolute rounded-md`}>
          <ul className="flex flex-col space-y-2">
            {items.map((title) => (
              <a href="/shop">
                <li className="p-2 pl-4 border-b-2 hover:border-b-blue-500 transition">
                  <div className="w-full" >{title}</div>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </li>
  )
}
