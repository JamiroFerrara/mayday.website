import WavDropzone from '../components/Admin/Dropzone/WavDropzone'
import { Input, Textarea, NumberInput } from '@mantine/core'
import BannerDropzone from '../components/Admin/Dropzone/BannerDropzone'
import ArtworkDropzone from '../components/Admin/Dropzone/ArtworkDropzone'
import ArtistAdder from '../components/Admin/ArtistAdder'
import VinylReleaseAdder from '../components/Admin/VinylReleaseAdder'
import { uploadFile } from '../backend/aws/s3'
import { useState, useRef } from 'react'
import {trpc} from '../utils/trpc'

export default function AdminPage() {
  const createTrack = trpc.useMutation(['addTrack'])

  const [banner, setBanner] = useState<string | ArrayBuffer | null>(null)
  const [artwork, setArtwork] = useState<string | ArrayBuffer | null>(null)
  const [track, setTrack] = useState<string | ArrayBuffer | null>(null)
  const [artists, setArtists] = useState([])
  const [vinyls, setVinyls] = useState([])
  const trackNameRef = useRef<HTMLInputElement>(null)
  const bpmRef = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  const genreRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  async function handleUpload() {
    const trackName = trackNameRef.current?.value
    const bpm = bpmRef.current?.value
    const price = priceRef.current?.value
    const genre = genreRef.current?.value
    const description = descriptionRef.current?.value
    console.log(price)

    if ( !trackName || !artists || !bpm || !price || !genre || !description) {
      alert('Please fill out all fields')
      return
    }

    const bannerUrl = await uploadFile(banner, trackName, 'Banners')
    const artworkUrl = await uploadFile(artwork, trackName, 'Artwork')
    const trackUrl = await uploadFile(track, trackName, 'Tracks', "wav")
    const ret = createTrack.mutate({title: trackName!, artistId: parseInt(artists[0]), description: description!, price: parseInt(price!), url: trackUrl, artworkUrl: artworkUrl, bannerUrl: bannerUrl})
    console.log(ret);
  }

  return (
    <div className="pMain">
      <div className="w-11/12 rounded-xl border-2 border-black bg-zinc-900 p-8">
        <div className="title">Create a new track</div>

        <BannerDropzone
          title="Drag track banner here!"
          description="This will be used as the track banner"
          Image={banner}
          setImage={setBanner}
        />

        <div className="h-4"></div>

        {/* <Input ref={bannerUrl} placeholder="..Or input banner URL!"/> */}

        <div className="h-4"></div>

        <div className="flex h-full w-full flex-row">
          <ArtworkDropzone
            className="aspect-square w-72"
            title="Track artwork here!"
            description="This will the main track artwork"
            Image={artwork}
            setImage={setArtwork}
          />

          <div className="ml-4 flex w-full flex-col">
            <ArtistAdder values={artists} setValues={setArtists}/>

            <div className="h-2"></div>

            <Input ref={trackNameRef} placeholder="Track name" />

            <div className="h-2"></div>

            <div className="flex flex-row space-x-2">
              <NumberInput ref={bpmRef} value={160} placeholder="BPM" />
              <NumberInput
                ref={priceRef}
                placeholder="Price ¢"
                defaultValue={1.99}
                precision={2}
              />
              <Input ref={genreRef} placeholder="Genre" />
            </div>

            <div className="h-2"></div>

            <Textarea ref={descriptionRef} autosize minRows={3} placeholder="Description" />
          </div>
        </div>

        <div className="h-2"></div>

        <VinylReleaseAdder values={vinyls} setValues={setVinyls}/>

        <div className="h-4"></div>

        <WavDropzone
          title="And finally the .wav file here"
          description="This will be the main playable audio for the track"
          Audio={track}
          setAudio={setTrack}
        />

        <div className="h-4"></div>

        <div className="flex-row justify-center">
          <div onClick={() => handleUpload()} className="btn-dark w-full">
            Upload!
          </div>
        </div>
      </div>
    </div>
  )
}
