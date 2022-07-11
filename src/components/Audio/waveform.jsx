import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Center, Col } from '@mantine/core'
import { Collapse } from '@mantine/core';
import Buttons from './Buttons'
import PlayBtn from './playBtn'

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: '#eee',
  progressColor: 'OrangeRed',
  cursorColor: 'OrangeRed',
  barWidth: 2,
  barGap: 6,
  barRadius: 1,
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
  const [opened, setOpened] = useState(false)
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
    <Center className='space-x-4 relative border-stone-600 shadow-black p-4 hover:bg-black rounded-xl transition'>

      <img src={image} className='transition absolute w-full h-full object-cover opacity-50 rounded-xl' alt=""/>

      <div onClick={handlePlayPause} className={`${opened ? '' : ''} transition flex flex-col translate-y-8 justify-center h-full`}>
        <PlayBtn playing={playing}/>
      </div>

      <div className="z-10 w-11/12 space-y-2 flex flex-col">
        <div className='flex justify-between mb-2'>
          <div onClick={() => setOpened(!opened)} className='bg-black/[0.45]  -translate-x-14 cursor-pointer hover:border-slate-200 border-black/[0] border-2 rounded-xl p-2'>
            <div className='font-extrabold text-white'>{title}</div>
            <div className='text-sm'>{artist}</div>
          </div>

          <Buttons opened={opened}/>
        </div>

        <div id="waveform" ref={waveformRef} />

        <Collapse in={opened} className='w-full' transitionDuration={100}>
          <div className='text-stone-200 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem fugit quo velit, cupiditate voluptate laboriosam sequi odio inventore et repellendus fugiat, quasi laudantium quod vitae totam sed molestiae facere!</div>
        </Collapse>

      </div>

    </Center>
  )
}
