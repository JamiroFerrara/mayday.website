import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
import React, { FC } from 'react'

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout
