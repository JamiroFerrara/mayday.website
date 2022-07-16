import {Input} from '@mantine/core'
import AdminDropzone from '../components/Admin/AdminDropzone'

export default function AdminPage(){
  return (
    <div className='pMain'>
      <div className="border-2 p-4 rounded-xl w-11/12 bg-zinc-900 border-black">
        <AdminDropzone/>
        <div className='h-4'></div>
        <Input className='mb-2' type='text' placeholder='Song name' variant='filled'/>
        <Input className='mb-2' type='text' placeholder='Artist' variant='filled'/>
      </div>
    </div>
  )
}
