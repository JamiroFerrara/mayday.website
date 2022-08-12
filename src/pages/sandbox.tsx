import { Group, Button, Center } from '@mantine/core'
import { ItemAddedNotification } from '../utils/notifications'
import { useRef, useState, useEffect } from 'react'
import { trpc } from '../utils/trpc'
import {useRouter} from 'next/router'
import { convertToMp3} from '../backend/aws/elasticTranscoder'
import {prisma} from '../backend/utils/prisma'
import axios from 'axios'

export default function SandboxPage() {

  async function handleCLick(){
    await axios.post('/api/test/createTrack', {}).then(res => {
      console.log(res);
    })
  }

  return (
    <>
      <button onClick={() => handleCLick()} className='btn'>Create test track</button>
    </>
  )
}
