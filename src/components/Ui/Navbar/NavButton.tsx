interface Props {
  title: string
  onPress?: any
  href?: string
}

export default function NavButton(props: Props) {
  const { title, onPress, href } = props

  return (
    <button className="w-full" onClick={onPress}>
      <li>
        <a
          href={href}
          className="flex transition border border-transparent px-4 py-2 font-extrabold text-white hover:border hover:border-b-red-500"
        >
          {title}
        </a>
      </li>
    </button>
  )
}
