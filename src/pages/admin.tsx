import WavDropzone from '../components/Admin/Dropzone/WavDropzone'
import {Input, Textarea, NumberInput} from '@mantine/core'
import BannerDropzone from '../components/Admin/Dropzone/BannerDropzone'
import ArtworkDropzone from '../components/Admin/Dropzone/ArtworkDropzone'
import ArtistAdder from '../components/Admin/ArtistAdder'
import VinylReleaseAdder from '../components/Admin/VinylReleaseAdder'

export default function AdminPage() {
  return (
    <div className="pMain">
      <div className="w-11/12 rounded-xl border-2 border-black bg-zinc-900 p-8">
        <div className="title">Create a new track</div>

        <BannerDropzone title="Drag track banner here!"
          description="This will be used as the track banner"
        />

        <div className="h-4"></div>

        <div className="flex h-full w-full flex-row">
            <ArtworkDropzone className='aspect-square w-72'
              title="Track artwork here!"
              description="This will the main track artwork"
            />

          <div className="ml-4 w-full flex flex-col">
            <ArtistAdder/>

            <div className="h-2"></div>

            <Input placeholder='Track name'/>

            <div className="h-2"></div>

            <div className='flex flex-row space-x-2'>
              <NumberInput value={160} placeholder='BPM'/>
              <NumberInput placeholder='Price ¢'
                defaultValue={1.99}
                precision={2}
              />
              <Input placeholder='Genre'/>
            </div>

            <div className="h-2"></div>

            <Textarea autosize minRows={3} placeholder='Description'/>

          </div>
        </div>

        <div className="h-2"></div>

        <VinylReleaseAdder/>

        <div className="h-4"></div>
          <WavDropzone title="And finally the .wav file here" description="This will be the main playable audio for the track" />
        <div className="h-4"></div>

        <div className='flex-row justify-center'>
          <div className='w-full border border-black p-2 text-center rounded bg-zinc-800 hover:bg-zinc-700 active:scale-x-[99%] active:bg-zinc-800 transition cursor-pointer select-none'>Upload!</div>
        </div>

      </div>
    </div>
  )
}
