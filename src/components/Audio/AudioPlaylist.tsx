import AudioPlayer from '../../components/Audio/AudioPlayer'
import st from '../../styles/Layout.module.css'
import { trpc } from '../../utils/trpc'

export default function AudioPlaylist(){
  const tracks = trpc.useQuery(['getAllTracks'])
  console.log(tracks)

  if(tracks.status == "loading"){
    return (
      <div className={st.main}>
        <div className='font-extrabold text-xl'>Loading..</div>
      </div>
    )
  }

  return (
    <div className={st.main}>
      <h1 className='font-extrabold text-white text-2xl'>Playlist</h1>
      <div className='h-4'></div>
      <div className='border w-11/12 rounded-xl p-4 bg-gradient-to-t from-black to-stone-900 space-y-4 max-w-7xl'>
        {tracks.data?.tracks?.map((track) => (
          <AudioPlayer description={track.description} title={track.title} artist={track.artist.artistName} image={track.bannerUrl} url={track.url} key={track.id}/>
        ))}
      </div>
    </div>
  )
}
