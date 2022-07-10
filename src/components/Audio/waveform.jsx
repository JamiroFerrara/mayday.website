import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Center } from '@mantine/core'
import { BiPlay, BiPause, BiUpload } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: '#eee',
  progressColor: 'OrangeRed',
  cursorColor: 'OrangeRed',
  barWidth: 2,
  barGap: 5,
  barRadius: 3,
  responsive: true,
  height: 50,
  normalize: true,
  partialRender: true,
  audioRate: 1,
  hideScrollbar: true,
})

// plugins: [
    // WaveSurfer.cursor.create({
        // showTime: true,
        // opacity: 1,
        // customShowTimeStyle: {
            // 'background-color': '#000',
            // color: '#fff',
            // padding: '2px',
            // 'font-size': '10px'
        // }
    // })
// ]

export default function IndexPage({ url }) {
  const waveformRef = useRef(null)
  const wavesurfer = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    create()

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy()
      }
    }
  }, [])

  const create = async () => {
    const WaveSurfer = (await import('wavesurfer.js')).default

    const options = formWaveSurferOptions(waveformRef.current)
    wavesurfer.current = WaveSurfer.create(options)

    wavesurfer.current.load(url)
  }

  const handlePlayPause = () => {
    setPlaying(!playing)
    wavesurfer.current.playPause()
  }

  return (
    <Center className='space-x-4 border-b-2 border-stone-600 p-4 rounded hover:bg-stone-900/[0.7]'>
      <div onClick={handlePlayPause} className='flex flex-col translate-y-8 justify-center h-full'>
        {!playing ? 
          player(playing)
        : 
          player(playing)
        }
      </div>

      <div className="w-11/12 space-y-2 flex flex-col">
        <div className='flex justify-between'>
          <div>
            <div className='text-xl font-extrabold text-white'>Title</div>
            <div className='text-sm'>Artist</div>
          </div>

          <div className="p-2 flex flex-row justify-center hover:text-red-500 space-x-2">
            <div className='rounded-lg border flex justify-center border-white h-8 w-8 hover:rotate-12 transition'>
              <div className='flex flex-col justify-center transition'>
                <AiFillHeart/>
              </div>
            </div>
          </div>
        </div>

        <div id="waveform" ref={waveformRef} />

      </div>

    </Center>
  )
}

function player(playing) {
  if (playing){
    return (
        <div className='ml-2 w-10 h-10 rounded-full bg-orange-500 text-white flex justify-center'>
          <div className='flex flex-col justify-center'>
            <BiPause size={24}/>
          </div>
        </div> 
    )
      
  } else {
    return (
        <div className='ml-2 w-10 h-10 rounded-full bg-orange-500 text-white flex justify-center'>
          <div className='flex flex-col justify-center'>
            <BiPlay size={24}/>
          </div>
        </div> 
    )
  }
}
