import AudioPlayer from '../../components/Audio/AudioPlayer'
import st from '../../styles/Layout.module.css'
import { Track, Artist } from '@prisma/client'

interface Props {
  tracks: (Track & {artist: Artist; })[] | undefined
}

export default function AudioPlaylist(props:Props){
  const { tracks } = props

  return (
    <div className={st.main}>
      <h1 className='font-extrabold text-white text-2xl'>Playlist</h1>
      <div className='h-4'></div>
      <div className='border w-11/12 rounded-xl p-4 bg-gradient-to-t from-black to-stone-900 space-y-4 max-w-7xl'>
        {tracks?.map((track) => (
          <AudioPlayer description={track.description} title={track.title} artist={track.artist.artistName} image={track.bannerUrl} url={track.url} key={track.id}/>
        ))}
      </div>
    </div>
  )
}
