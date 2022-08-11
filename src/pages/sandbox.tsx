import { Group, Button, Center } from '@mantine/core'
import { ItemAddedNotification } from '../utils/notifications'
import { useRef, useState, useEffect } from 'react'
import { trpc } from '../utils/trpc'
import {useRouter} from 'next/router'
import { convertToMp3} from '../backend/aws/elasticTranscoder'

export default function SandboxPage() {

  function handleCLick(){
    convertToMp3('quad.wav');
  }

  return (
    <>
      <button onClick={() => handleCLick()} className='btn'>Convert to mp3</button>
    </>
  )
}
