import Link from 'next/link'
import Image from 'next/image'
import mayday from '../../../public/mayday03.png'

export default function NavbarTitle(){
  return(
        <Link href="/home">
          <a className="inline-flex items-center p-2">

            <Image className='hover-opacity' height={45} width={45} src={mayday} />

            <span className="mx-3 font-bold tracking-wide text-white transition hover-opacity">
              MAYDAYSOUNDSYSTEM
            </span>
          </a>
        </Link>
  )
}
