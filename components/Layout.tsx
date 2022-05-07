import styles from '../styles/Layout.module.css'
import Navbar from './Ui/Navbar'
import React, { FC } from 'react'
import Carousel from './Media/Carousel/Carousel'

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
    <Navbar></Navbar>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout
