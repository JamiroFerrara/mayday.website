import { useState, useEffect } from 'react'

interface Props {
    className?: string
    title?: string
    text?: string
}

export default function Input(props:Props){
  const { className, title, text } = props
  const [Focused, setFocused] = useState(false)

  function handleClick(){
    setFocused(true)
  }

  function hanldeOnMouseLeave(){
    console.log(text)
    if (text == null){
      setFocused(false);
      (document.activeElement as HTMLElement).blur();
    }
  }

  return (
    <>
      <div contentEditable onBlur={() => hanldeOnMouseLeave()} onMouseDown={() => handleClick()} className={'h-8 flex flex-col justify-start p-1 bg-zinc-800 rounded w-full ' + className}>
        {Focused ? (
          text
        ) : (
          <div contentEditable={false} className='text-zinc-500'>{title}</div>
        )}
      </div>
    </>
  )
}
