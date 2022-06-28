import React from 'react'
import {FaFacebookF, FaInstagram, FaYoutube, FaSoundcloud } from 'react-icons/fa'

const Footer = () => {
  return (
      <>
        <footer className="p-10 center footer">
        <div>
            <div className="grid grid-flow-col gap-4">
            <a href='https://www.youtube.com/channel/UCjKzoOZc3GZMRIkkVPjgfLA'><FaYoutube className="footer-icons" size={30}/></a> 
            <a href='https://www.facebook.com/groups/1060511574133075/'><FaFacebookF className="footer-icons hover:text-blue-800" size={30}/></a> 
            <a href='https://www.instagram.com/maydaysoundsystem/?hl=it'><FaInstagram className="footer-icons hover:text-purple-700" size={30}/></a> 
            <a href='https://soundcloud.com/maydaysystem'><FaSoundcloud className="footer-icons hover:text-orange-600" size={30}/></a> 
            </div>
        </div>
        </footer>
      </>
  )
}

export default Footer