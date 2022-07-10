import AudioPlayer from '../components/Audio/waveform'
import st from '../styles/Layout.module.css'

export default function Sandbox2(){
  return (
    <div className={st.main}>
      <h1 className='font-extrabold text-white text-2xl'>Playlist</h1>
      <div className='h-4'></div>
      <div className='border w-11/12 rounded-xl p-4 bg-gradient-to-t from-black to-stone-900 space-y-4'>
          <AudioPlayer title="Stiwie - Quadruplex" artist="Stiwie" image="https://va.sndcdn.com/bg/soundcloud:tracks:1249914607/f8872dc5-f03f-44d9-ad65-66a2c7960d6c.png" url="https://d31xpgvwmv5tnx.cloudfront.net/Stiwie%20-%20Quadruplex.mp3"/>
          <AudioPlayer title="Stiwie - Space-X" artist="Stiwie" image="https://va.sndcdn.com/bg/soundcloud:tracks:1005705622/59598e7e-58e7-4823-83f2-9d34c91ef9e9.jpg" url="https://d31xpgvwmv5tnx.cloudfront.net/Kick_Test_1.wav"/>
          <AudioPlayer title="Stiwie - Pandemic" artist="Nesh vs Stiwie" image="https://va.sndcdn.com/bg/soundcloud:tracks:779687176/4662adb1-351e-4760-b882-3094aa79a440.jpg" url="https://d31xpgvwmv5tnx.cloudfront.net/Kick_Test_1.wav"/>
          <AudioPlayer title="Stiwie - Funk That Shit![OUT NOW on FNK005]" artist="Nesh vs Stiwie" image="https://va.sndcdn.com/bg/soundcloud:tracks:1065037687/6ce564e0-606b-4d46-8e33-bced50a89e6f.jpg" url="https://d31xpgvwmv5tnx.cloudfront.net/Kick_Test_1.wav"/>
      </div>
    </div>
  )
}
