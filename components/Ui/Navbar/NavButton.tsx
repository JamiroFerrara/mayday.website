interface Props {
  title: string
  onPress?: any
  href?: string
}

export default function NavButton(props: Props){
  const {title, onPress, href} = props

  return(
    <button className="w-full" onClick={onPress}>
      <li>
        <a href={href} className="flex px-4 py-2 font-extrabold text-white rounded-md hover:bg-gray-700">{title}</a>
      </li>
    </button>
  )
}
