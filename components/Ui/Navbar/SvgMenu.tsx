interface Props {
  onPress: any
}

export default function SvgMenu(props: Props){
  const {onPress} = props

  return(
    <button onClick={onPress} className="absolute inline-flex items-center justify-center w-10 h-10 text-white outline-none hover:bg-gray-700 right-4 top-5 rounded-md focus:outline-none lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  )
}
