import { useEffect, useRef, useState } from 'react'
import { Center, Col } from '@mantine/core'
import { Collapse } from '@mantine/core';
import Buttons from './Buttons'
import PlayBtn from './playBtn'
import Waveform from './waveform'
import TitleBox from './TitleBox'

export default function IndexPage({ url, image, title, artist }) {
  const wavesurfer = useRef(null)
  const [opened, setOpened] = useState(false)
  const [playing, setPlaying] = useState(false)

  const handlePlayPause = () => {
    setPlaying(!playing)
    setOpened(!playing)
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

          <TitleBox title={title} artist={artist}/>
          <Buttons opened={opened}/>
        </div>

        <Waveform wavesurfer={wavesurfer} playing={playing} url={url}/>

        <Collapse in={opened} className='w-full' transitionDuration={100}>
          <div className='text-stone-200 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem fugit quo velit, cupiditate voluptate laboriosam sequi odio inventore et repellendus fugiat, quasi laudantium quod vitae totam sed molestiae facere!</div>
        </Collapse>

      </div>

    </Center>
  )
}
