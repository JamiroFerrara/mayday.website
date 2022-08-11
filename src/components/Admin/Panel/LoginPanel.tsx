import { Input } from '@mantine/core'
import {useRef} from 'react'

interface Props {
    setLogin: any
}

export default function LoginPanel(props: Props) {
  const { setLogin } = props
  const passwordRef = useRef<HTMLInputElement>(null)

  function handleClick(){
    if(passwordRef.current?.value === 'troppogozio23'){
      setLogin(true)
    }
  }

  return (
    <div className="flex flex-row pMain">
      <div className="pMainPanel">
        <h1 className="title">Admin</h1>
        <h1 className="subtitle mb-5">Please enter password..</h1>

        <div className='space-y-4'>
          <Input ref={passwordRef} placeholder="Password"></Input>
          <button onClick={() => handleClick()} className="btn-dark w-full">Enter</button>
        </div>

      </div>
    </div>
  )
}
