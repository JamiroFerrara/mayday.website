import { AiFillHeart } from 'react-icons/ai'

interface Props{
  opened: boolean
}

export default function Buttons(props:Props){
  const {opened} = props
  
  return (
      <div className={`${opened ? '' : 'translate-y-4'} transition p-2 flex flex-row justify-center hover:text-red-500 space-x-2`}>
        <div className='rounded-lg border flex justify-center border-white h-8 w-8 hover:rotate-12 transition'>
          <div className='flex flex-col justify-center transition cursor-pointer'>
            <AiFillHeart/>
          </div>
        </div>
      </div>
  )
}
