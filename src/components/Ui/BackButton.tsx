import { FaAngleLeft } from 'react-icons/fa'

interface Props {
  onClick?: any
}

export default function BackButton(props: Props) {
  const { onClick } = props

  return (
    <div onClick={onClick} className="cursor-pointer">
      <FaAngleLeft
        className="mx-2 transition hover:-translate-x-1 hover:text-red-900"
        size={40}
      />
    </div>
  )
}
