import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Center, Col } from '@mantine/core'
import { BiPlay, BiPause, BiUpload } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { Collapse } from '@mantine/core';

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: '#eee',
  progressColor: 'OrangeRed',
  cursorColor: 'OrangeRed',
  barWidth: 2,
  barGap: 6,
  barRadius: 2,
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

export default function IndexPage({ url, image, title, artist }) {
  const waveformRef = useRef(null)
  const wavesurfer = useRef(null)
  const [opened, setOpened] = useState(true)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    create()

    // setOpened(false)

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
    <Center className='space-x-4 relative border-stone-600 shadow-black p-4 hover:bg-black rounded-xl transition'>


      <img src={image} className='transition absolute w-full h-full object-none opacity-50 rounded-xl' alt=""/>

      <div onClick={handlePlayPause} className={`${opened ? '' : 'opacity-0'} transition flex flex-col translate-y-8 justify-center h-full`}>
        {!playing ? player(playing) : player(playing)}
      </div>

      <div className="z-10 w-11/12 space-y-2 flex flex-col">
        <div className='flex justify-between mb-2'>
          <div onClick={() => setOpened(!opened)} className='bg-black/[0.4]  -translate-x-14 cursor-pointer hover:border-slate-200 border-black/[0] border-2 rounded-xl p-2'>
            <div className='font-extrabold text-white'>{title}</div>
            <div className='text-sm'>{artist}</div>
          </div>

          <div className={`${opened ? '' : 'translate-y-4'} transition p-2 flex flex-row justify-center hover:text-red-500 space-x-2`}>
            <div className='rounded-lg border flex justify-center border-white h-8 w-8 hover:rotate-12 transition'>
              <div className='flex flex-col justify-center transition cursor-pointer'>
                <AiFillHeart/>
              </div>
            </div>
          </div>
        </div>

        <Collapse in={opened} className='w-full' transitionDuration={100}>
          <div id="waveform" ref={waveformRef} />
          <div className='text-stone-200 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem fugit quo velit, cupiditate voluptate laboriosam sequi odio inventore et repellendus fugiat, quasi laudantium quod vitae totam sed molestiae facere!</div>
        </Collapse>

      </div>

    </Center>
  )
}

function player(playing) {
  if (playing){
    return (
      <div className='ml-2 w-10 h-10 rounded-full bg-orange-500 text-white flex justify-center hover:scale-105 transition'>
          <div className='flex flex-col justify-center'>
            <BiPause size={24}/>
          </div>
        </div> 
    )
      
  } else {
    return (
        <div className='ml-2 w-10 h-10 rounded-full bg-orange-500 text-white flex justify-center hover:scale-105 transition'>
          <div className='flex flex-col justify-center'>
            <BiPlay size={24}/>
          </div>
        </div> 
    )
  }
}
