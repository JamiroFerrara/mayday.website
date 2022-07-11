import {useState, useEffect, useRef } from 'react'

interface Props{
  src?: string
}

export default function AudioPlayer(props:Props){
  const {src} = props
  const [isPlaying, setisPlaying] = useState(false)
  const audioElement = useRef<HTMLAudioElement | undefined>( typeof Audio !== "undefined" ? new Audio(src) : undefined);

  function onPlayClick(){
    if(!isPlaying){
      audioElement.current?.play();
    } else {
      audioElement.current?.pause();
    }
    setisPlaying(!isPlaying);
  }
  
  return (
    <button className='rounded p-2 border-2 w-16' onClick={() => onPlayClick()}>{isPlaying ? "Pause" : "Play"}</button>
  )
}
