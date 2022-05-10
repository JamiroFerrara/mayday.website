import React from 'react'
import mayday from '../../public/mayday03.png'
import Image from 'next/image'
import {FaFacebookF, FaInstagram, FaYoutube, FaSoundcloud } from 'react-icons/fa'

const iconStyle = "hover:text-red-900 transition hover:translate-y-1";

const Footer = () => {
  return (
      <>
        <footer className="footer p-10 flex justify-center">
        <div>
            <div className="grid grid-flow-col gap-4">
            <a href='https://www.youtube.com/channel/UCjKzoOZc3GZMRIkkVPjgfLA'><FaYoutube className={iconStyle} size={30}/></a> 
            <a href='https://www.facebook.com/groups/1060511574133075/'><FaFacebookF className={iconStyle} size={30}/></a> 
            <a href='https://www.instagram.com/maydaysoundsystem/?hl=it'><FaInstagram className={iconStyle} size={30}/></a> 
            <a href='https://soundcloud.com/maydaysystem'><FaSoundcloud className={iconStyle} size={30}/></a> 
            </div>
        </div>
        </footer>
      </>
  )
}

export default Footer