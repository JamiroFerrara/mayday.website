import dynamic from 'next/dynamic'

const PodcastPlayer = dynamic(
    () => import('../components/Audio/waveform'),
    { ssr: false }
)

export default function Sandbox2(){
  return (
    <PodcastPlayer/>
  )
}
