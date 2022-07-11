interface Props{
  title: string
  artist: string
  onClick?: any
}

export default function TitleBox(props:Props){
  const {title, artist, onClick} = props
  
  return (
      <div onClick={onClick} className='bg-black/[0.45]  -translate-x-14 cursor-pointer hover:border-slate-200 border-black/[0] border-2 rounded-xl p-2'>
        <div className='font-extrabold text-white'>{title}</div>
        <div className='text-sm'>{artist}</div>
      </div>
  )
}
