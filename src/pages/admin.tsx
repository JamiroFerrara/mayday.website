import WavDropzone from '../components/Admin/Dropzone/WavDropzone'
import {Input, Textarea, NumberInput} from '@mantine/core'
import BannerDropzone from '../components/Admin/Dropzone/BannerDropzone'
import ArtworkDropzone from '../components/Admin/Dropzone/ArtworkDropzone'
import ArtistAdder from '../components/Admin/ArtistAdder'
import VinylReleaseAdder from '../components/Admin/VinylReleaseAdder'
import { uploadImage} from '../backend/aws/s3'
import { useState, useRef } from 'react'

export default function AdminPage() {
  const [banner, setBanner] = useState<string | ArrayBuffer | null>(null);
  const [artwork, setArtwork] = useState<string | ArrayBuffer | null>(null);
  const [track, setTrack] = useState<string | ArrayBuffer | null>(null)
  const trackName = useRef<HTMLInputElement>(null)
  const bannerUrl = useRef<HTMLInputElement>(null);
  const artists = useRef<HTMLInputElement>(null)
  const bpm = useRef<HTMLInputElement>(null)
  const price = useRef<HTMLInputElement>(null)
  const genre = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLTextAreaElement>(null)
  const vinyls = useRef<HTMLInputElement>(null)

  async function handleUpload(){
    const trackNameValue = trackName.current?.value;
    const bannerUrlValue = bannerUrl.current?.value;
    const artistsValue = artists.current?.value;
    const bpmValue = bpm.current?.value;
    const priceValue = price.current?.value;
    const genreValue = genre.current?.value;
    const descriptionValue = description.current?.value;
    const vinylsValue = vinyls.current?.value;
    console.log(trackNameValue, bannerUrlValue, artistsValue, bpmValue, priceValue, genreValue, descriptionValue, vinylsValue)

    const cfBannerUrl = await uploadImage(banner, trackNameValue, 'Banners');
    // const cfArtworkUrl = uploadImage(artwork, trackNameValue, 'Artwork');
    // const cfTrackUrl = uploadImage(track, trackNameValue, 'Tracks');
    console.log(cfBannerUrl)
  }

  return (
    <div className="pMain">
      <div className="w-11/12 rounded-xl border-2 border-black bg-zinc-900 p-8">
        <div className="title">Create a new track</div>

        <BannerDropzone title="Drag track banner here!"
          description="This will be used as the track banner"
          Image={banner}
          setImage={setBanner}
        />

        <div className="h-4"></div>

        <Input ref={bannerUrl} placeholder="..Or input banner URL!"/>

        <div className="h-4"></div>

        <div className="flex h-full w-full flex-row">
            <ArtworkDropzone className='aspect-square w-72'
              title="Track artwork here!"
              description="This will the main track artwork"
            />

          <div className="ml-4 w-full flex flex-col">
            <ArtistAdder/>

            <div className="h-2"></div>

            <Input ref={trackName} placeholder='Track name'/>

            <div className="h-2"></div>

            <div className='flex flex-row space-x-2'>
              <NumberInput ref={bpm} value={160} placeholder='BPM'/>
              <NumberInput ref={price} placeholder='Price ¢'
                defaultValue={1.99}
                precision={2}
              />
              <Input ref={genre} placeholder='Genre'/>
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
          <div onClick={() => handleUpload()} className='w-full btn-dark'>Upload!</div>
        </div>

      </div>
    </div>
  )
}

