import styles from '../../styles/Layout.module.css'
import Navbar from './Ui/Navbar'
import React, { FC } from 'react'
import Carousel from './Media/Carousel/Carousel'
import Footer from './Ui/Footer'

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        {children}
        <Footer></Footer>
      </div>
    </>
  )
}

export default Layout
