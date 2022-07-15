import AudioPlaylist from '../components/Audio/AudioPlaylist'
import { trpc } from '../utils/trpc'
import st from '../styles/Layout.module.css'

export default function Sandbox2(){
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
    <AudioPlaylist tracks={tracks.data?.tracks}/>
  )
}
