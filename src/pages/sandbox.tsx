import { Group, Button, Center } from '@mantine/core'
import { ItemAddedNotification } from '../utils/notifications'
import { useRef, useState, useEffect } from 'react'
import { trpc } from '../utils/trpc'
import {useRouter} from 'next/router'

const url = 'https://d31xpgvwmv5tnx.cloudfront.net/Stiwie%20-%20Quadruplex.mp3'

export default function SandboxPage() {
  // const musicPlayers = useRef<HTMLAudioElement | undefined>( typeof Audio !== "undefined" ? new Audio(url) : undefined);
  // musicPlayers.current?.play();

  const router = useRouter();
  const userMutation = trpc.useMutation(['createUser'])
  const createComment = trpc.useMutation(['createComment'])
  const comments = trpc.useQuery(['getComments'])
  console.log(comments)

  function handleCommentClick() {
    createComment.mutate({ content: 'Hello World!' })
    router.reload()
  }

  return (
    <>
      <Center className="m-4 flex flex-row space-x-1">
        <input type="text" />
        <input type="text" />
      </Center>
      <Group position="center">
        <button
          className="btn"
          onClick={() =>
            userMutation.mutate({
              Username: 'jamiro',
              Password: 'admin',
              Email: 'Jakthebest@hotmail.it',
            })
          }
        >
          Create User
        </button>
      </Group>

      <Center className="m-4 flex flex-col">
        <div className="min-h-8 w-full rounded bg-white">
          {comments.data?.comments.map((comment) => (
            <div className='text-center m-4 text-black'>{JSON.stringify(comment.content, null, 2)}</div>
          ))}
        </div>
        <button onClick={() => handleCommentClick()} className="btn m-4">
          InsertComment
        </button>
      </Center>
    </>
  )
}
