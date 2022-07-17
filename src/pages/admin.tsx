import WavDropzone from '../components/Admin/Dropzone/WavDropzone'
import {Input} from '@mantine/core'
import BannerDropzone from '../components/Admin/Dropzone/BannerDropzone'
import ArtworkDropzone from '../components/Admin/Dropzone/ArtworkDropzone'
import ArtistAdder from '../components/Admin/ArtistAdder'

export default function AdminPage() {
  return (
    <div className="pMain">
      <div className="w-11/12 rounded-xl border-2 border-black bg-zinc-900 p-8">
        <BannerDropzone title="Drag track banner here!"
          description="This will be used as the track banner"
        />

        <div className="h-4"></div>

        <div className="flex h-full w-full flex-row">
            <ArtworkDropzone className='aspect-square h-64'
              title="Drag track artwork here!"
              description="This will the main track artwork"
            />

          <div className="ml-4 w-full flex flex-col">
            <Input title='Track name'/>
            <div className="h-4"></div>
            <ArtistAdder/>

            <div className="h-6"></div>

            <div className='flex flex-row space-x-2'>
              <Input className="mb-2" title='BPM'/>
              <Input className="mb-2" title='Genre'/>
              <Input className="mb-2" title='Price ¢'/>
            </div>

            <Input className='flex flex-grow h-full' title='Description'/>

          </div>
        </div>

        <div className="h-4"></div>
        <WavDropzone title="Drag .wav file here" description="This will be the main playable audio for the track" />
        <div className="h-4"></div>

        <div className='flex-row justify-center mx-1'>
          <div className='w-full border border-black p-2 text-center rounded bg-zinc-800 hover:bg-zinc-700 transition cursor-pointer select-none'>Upload!</div>
        </div>

      </div>
    </div>
  )
}
