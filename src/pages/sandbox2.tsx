import AudioPlayer from '../components/Audio/waveform'
import st from '../styles/Layout.module.css'

export default function Sandbox2(){
  return (
    <div className={st.main}>
      <div className='border w-11/12 rounded-xl p-4 bg-gradient-to-t from-stone-800 to-stone-900'>
          <AudioPlayer url="https://d31xpgvwmv5tnx.cloudfront.net/Stiwie%20-%20Quadruplex.mp3"/>
          <AudioPlayer url="https://d31xpgvwmv5tnx.cloudfront.net/Kick_Test_1.wav"/>
          <AudioPlayer url="https://d31xpgvwmv5tnx.cloudfront.net/Stiwie%20-%20Quadruplex.mp3"/>
          <AudioPlayer url="https://d31xpgvwmv5tnx.cloudfront.net/Kick_Test_1.wav"/>
      </div>
    </div>
  )
}
