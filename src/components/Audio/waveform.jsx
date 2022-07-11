import { useState, useEffect, useRef } from 'react'
import { Center, Slider } from '@mantine/core'

export default function IndexPage({ url, wavesurfer }) {
  const waveformRef = useRef(null)
  const [value, setValue] = useState(50)

  useEffect(() => {
    create()

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy()
      }
    }
  }, [])

  useEffect(() => {
    const val = (value + 50) / 100
    console.log(val)
    wavesurfer?.current?.setPlaybackRate(val);
  }, [value])

  const create = async () => {
    const WaveSurfer = (await import('wavesurfer.js')).default
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
    const options = formWaveSurferOptions(waveformRef.current)
    wavesurfer.current = WaveSurfer.create(options)
    wavesurfer.current.load(url)
  }

  return (
    <div className="w-full">
      <div id="waveform" ref={waveformRef} />
        {/* <button onClick={() => } className='btn m-4'>1x</button> */}
        <Slider
          value={value}
          onChange={setValue}
          size={2}
          labelTransition="fade"
          marks={[
            { value: 25, label: '75%' },
            { value: 50, label: '100%' },
            { value: 85, label: '125%' },
          ]}
          className="mt-2 w-full outline-none"
          styles={(theme) => ({
            bar: {
              backgroundColor: '#EA580C',
            },
            mark: {
              borderRadius: 6,
              borderColor: theme.colors.blue[6]
            },
            markFilled: {
              borderColor: theme.colors.blue[6],
            },
            markLabel: {
              fontSize: theme.fontSizes.xs,
              marginBottom: 5,
              marginTop: 2,
            },
            thumb: {
              height: 12,
              width: 12,
              borderColor: 'white',
              backgroundColor: theme.white,
              borderWidth: 1,
              boxShadow: theme.shadows.sm,
            },
          })}
        ></Slider>
    </div>
  )
}
