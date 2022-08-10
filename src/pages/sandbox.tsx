import { Group, Button, Center } from '@mantine/core'
import { ItemAddedNotification } from '../utils/notifications'
import { useRef, useState, useEffect } from 'react'
import { trpc } from '../utils/trpc'
import {useRouter} from 'next/router'
import { deleteQuad } from '../backend/aws/s3'

export default function SandboxPage() {
  // const musicPlayers = useRef<HTMLAudioElement | undefined>( typeof Audio !== "undefined" ? new Audio(url) : undefined);
  // musicPlayers.current?.play();
  //

  function handleClick(){
    deleteQuad('dbwlp.png');
  }

  return (
    <>
      <Center className='mt-6'>
        <button className='btn' onClick={() => handleClick()}>Delete AWS file</button>
      </Center>
    </>
  )
}
