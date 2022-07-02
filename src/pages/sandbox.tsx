import { Group, Button } from '@mantine/core';
import { ItemAddedNotification } from '../utils/notifications'
import { useRef } from 'react'
import {trpc} from '../utils/trpc'

const url = "https://d31xpgvwmv5tnx.cloudfront.net/Stiwie%20-%20Quadruplex.mp3";

export default function SandboxPage(){
const musicPlayers = useRef<HTMLAudioElement | undefined>( typeof Audio !== "undefined" ? new Audio(url) : undefined);
musicPlayers.current?.play();

const userMutation = trpc.useMutation(["createUser"])

  return(
    <>
      <Group position="center">
        <button className='btn' onClick={() => userMutation.mutate({Username: "jamiro", Password: "admin", Email: "Jakthebest@hotmail.it"})}>Create User</button>
      </Group>
    </>
  )
}
