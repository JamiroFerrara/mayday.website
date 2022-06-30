import { Group, Button } from '@mantine/core';
import { ItemAddedNotification } from '../utils/notifications'
import { useRef } from 'react'

const url = "https://d31xpgvwmv5tnx.cloudfront.net/Stiwie%20-%20Quadruplex.mp3";

export default function SandboxPage(){
const musicPlayers = useRef<HTMLAudioElement | undefined>( typeof Audio !== "undefined" ? new Audio(url) : undefined);
musicPlayers.current?.play();

  return(
    <>
      <Group position="center">
        <Button
          variant="outline"
          onClick={() => ItemAddedNotification()}
        >
          Show customized notification
        </Button>
      </Group>
    </>
  )
}
