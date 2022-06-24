import React from 'react'
import Button from './Button'

function ContactUs() {
  return (
        <div className="flex center flex-col w-5/6">
          <h1 className="title m-10 font-bold text-white text-3xl">Contact Us!</h1>
          <div className="flex border-2 bg-gray-600 bg-opacity-25 shadow-white p-5 shadow-lg border-slate-50 flex-col rounded center ...">
            <div contentEditable className="w-full bg-transparent border-0 outline-none justify-start text-left" />
          </div>
        </div>
  )
}

export default ContactUs