import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='/'>Shop</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='/'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar