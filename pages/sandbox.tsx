import {useState} from "react"

export default function SandboxPage(){
  const [isOpen, setIsOpen] = useState(false)

  return(
    <body className="bg-blue-700 ">
      <nav className="py-2 mx-6 lg:flex ">

        <div className="container flex flex-wrap w-auto align-middle bottom-2">
          <div>
            <a href="#" className="inline-flex p-2 text-xl font-bold tracking-wider text-white uppercase align-middle">Frontendfunn</a>
          </div>

          <button onClick={()=> setIsOpen(!isOpen)} className="absolute inline-flex items-center justify-center w-10 h-10 text-white border-2 border-white outline-none active:bg-blue-800 right-4 rounded-md focus:outline-none lg:hidden">
            {svgMenu()}
          </button>
        </div>

        <div className={`${ isOpen ? '' : 'hidden' } flex my-auto w-full lg:w-auto lg:inline-flex`}>
          <ul className="flex flex-col w-full mt-auto lg:space-y-0 space-y-2 lg:space-x-2 lg:flex-row">
            <li>
              <a href="" className="flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800">Dashboard</a>
            </li>
            <li>
              <a href="" className="flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800">Projects</a>
            </li>
            <li className="relative">
              <button className="flex px-4 py-2 font-medium text-white outline-none focus:outline-none rounded-md hover:bg-blue-800">Dropdown</button>
              <div className="right-0 p-2 text-black bg-white lg:absolute rounded-md">
                <ul>
                  <li>
                    <a href="">Categories</a>
                  </li>
                  <li>
                    <a href="">Inventories</a>
                  </li>
                  <li>
                    <a href="">Brand</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="" className="flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800">Invoices</a>
            </li>
          </ul>
        </div>

      </nav>
    </body>
  )
}

function svgMenu(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

