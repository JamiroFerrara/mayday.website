import { Input } from '@mantine/core'
import AdminDropzone from '../components/Admin/AdminDropzone'
import ArtistAdder from '../components/Admin/ArtistAdder'
import { Music, User } from 'tabler-icons-react'

export default function AdminPage() {
  return (
    <div className="pMain">
      <div className="w-11/12 rounded-xl border-2 border-black bg-zinc-900 p-4">
        <AdminDropzone
          title="Drag track banner here!"
          description="This will be used as the track banner"
        />
        <div className="h-4"></div>

        <div className="flex h-full w-full flex-row">
            <AdminDropzone
              icon={User}
              className='aspect-square h-64'
              title="Drag track artwork here!"
              description="This will the main track artwork"
            />

          <div className="ml-4 w-full justify-center flex flex-col">
            <Input className="mb-2" type="text" placeholder="Song name" variant="filled" />
            <div className='h-full bg-zinc-100 rounded mb-2'></div>

            <div className='flex flex-row space-x-2'>
              <Input className="mb-2" type="text" placeholder="Genre" variant="filled" />
              <Input className="mb-2" type="text" placeholder="Price" variant="filled" />
              <Input className="mb-2" type="text" placeholder="BPM" variant="filled" />
            </div>
          </div>
        </div>

        <div className="h-4"></div>
        <AdminDropzone
          icon={Music}
          title="Drag .wav file here"
          description="This will be the main playable audio for the track"
        />

        <ArtistAdder/>

        <div className='w-full flex flex-row justify-center'>
          <div className='w-full border border-black p-2 text-center rounded bg-zinc-800 hover:bg-zinc-700 transition cursor-pointer select-none'>Upload!</div>
        </div>

      </div>
    </div>
  )
}
