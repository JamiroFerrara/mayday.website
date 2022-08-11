import WavDropzone from '../Dropzone/WavDropzone'
import { Input, Textarea, NumberInput } from '@mantine/core'
import BannerDropzone from '../Dropzone/BannerDropzone'
import ArtworkDropzone from '../Dropzone/ArtworkDropzone'
import ArtistAdder from '../Input/ArtistAdder'
import VinylReleaseAdder from '../Input/VinylReleaseAdder'
import GenreAdder from '../Input/GenreAdder'
import { uploadFile, uploadAudio } from '../../../backend/aws/s3'
import { useState, useRef } from 'react'
import { trpc } from '../../../utils/trpc'
import { PuffLoader } from 'react-spinners'
import UseAnimations from 'react-useanimations';
import alertTriangle from 'react-useanimations/lib/alertTriangle'
import { FillOutAllDataError } from '../../../utils/notifications'
import BackButton from '../../../components/Ui/BackButton'
import { convertToMp3 } from '../../../backend/aws/elasticTranscoder'

interface Props {
  setShowNewTrackPanel: any
}

export default function NewTrackPanel(props: Props) {
  const { setShowNewTrackPanel } = props

  const addTrack = trpc.useMutation(['addTrack'])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [banner, setBanner] = useState<string | ArrayBuffer | null>(null)
  const [artwork, setArtwork] = useState<string | ArrayBuffer | null>(null)
  const [track, setTrack] = useState<any>(null)
  const [artists, setArtists] = useState([])
  const [vinyls, setVinyls] = useState<string[]>([])
  const [genres, setGenres] = useState<string[]>([])
  const trackNameRef = useRef<HTMLInputElement>(null)
  const bpmRef = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  async function handleUpload() {
    try
    {
      const trackName = trackNameRef.current?.value
      const bpm = bpmRef.current?.value
      const price = priceRef.current?.value
      const description = descriptionRef.current?.value
      let artistsId = artists.map((v) => parseInt(v))

      console.log(artists);

      if (!trackName || !artists || !bpm || !price || !genres || !description) {
        FillOutAllDataError();
        return
      }

      setLoading(true)

      const bannerUrl = await uploadFile(banner, trackName, 'Banners', 'png')
      const artworkUrl = await uploadFile(artwork, trackName, 'Artwork', 'png')
      const trackUrl = await uploadAudio(track, trackName, 'Tracks', 'wav')
      const mp3Url = await convertToMp3("Tracks/" + trackName + ".wav")

      console.log(artistsId)

      addTrack.mutate({
        title: trackName!,
        artists: artistsId,
        description: description!,
        url: trackUrl,
        mp3Url: mp3Url,
        artworkUrl: artworkUrl,
        bannerUrl: bannerUrl,
        price: parseFloat(price),
        vinyls: vinyls,
        genre: genres[0]
      })

      setLoading(false);
    } catch (e) {
      setError(true);
    }

    // setShowNewTrackPanel(false)
  }

  if(loading === true) {
    return (
      <div className="pMain">
        <div className="pMain w-11/12 h-11/12 flex justify-center rounded-xl border-2 border-black bg-zinc-900 p-8">
          <PuffLoader color={"#FFF"}/>
          <div className="m-4">Uploading Track..</div>
        </div>
      </div>
    )
  }

  if (error === true) {
    return (
      <div className="pMain">
        <div className="pMain w-11/12 h-11/12 flex justify-center rounded-xl border-2 border-black bg-zinc-900 p-8">
          <UseAnimations animation={alertTriangle} loop={true} size={80} strokeColor={"#FFF"}/>
          <div className="title">There was an error uploading track.. :(</div>
        </div>
      </div>
    )
  }

  return (
    <div className="pMain">
      <div className="w-11/12 max-w-screen-2xl rounded-xl border-2 border-black bg-zinc-900 p-8">

        <div className='flex flex-row title w-full justify-between'>
          <BackButton onClick={() => setShowNewTrackPanel(false)}/>
          <div className="">Create a new track</div>
          <div></div>
        </div>

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
            <ArtistAdder values={artists} setValues={setArtists} />

            <div className="h-2"></div>

            <Input ref={trackNameRef} placeholder="Track name" />

            <div className="h-2"></div>

            <GenreAdder values={genres} setValues={setGenres}/>

            <div className="h-2"></div>

            <div className="flex flex-row space-x-2">
              <NumberInput className='w-1/2' ref={bpmRef} value={160} placeholder="BPM" />
              <NumberInput
                className='w-1/2'
                ref={priceRef}
                placeholder="Price ¢"
                defaultValue={1.99}
                precision={2}
              />
            </div>

            <div className="h-2"></div>

            <Textarea
              ref={descriptionRef}
              autosize
              minRows={3}
              placeholder="Description"
            />
          </div>
        </div>

        <div className="h-2"></div>

        <VinylReleaseAdder values={vinyls} setValues={setVinyls} />

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
