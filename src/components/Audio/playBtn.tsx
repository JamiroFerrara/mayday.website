import { BiPlay, BiPause, BiUpload } from 'react-icons/bi'
import {useEffect} from 'react'

interface Props{
    playing: boolean
}

export default function PlayBtn(props:Props){
  const {playing} = props;

  useEffect(()=> {
  }, [playing])

  if (playing){
    return (
      <div className='ml-2 w-10 h-10 rounded-full bg-orange-500 text-white flex justify-center hover:scale-105 transition'>
          <div className='flex flex-col justify-center'>
            <BiPause size={24}/>
          </div>
        </div> 
    )
      
  } else {
    return (
        <div className='ml-2 w-10 h-10 rounded-full bg-orange-500 text-white flex justify-center hover:scale-105 transition'>
          <div className='flex flex-col justify-center'>
            <BiPlay size={24}/>
          </div>
        </div> 
    )
  }
}
