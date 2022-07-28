import { trpc } from '../../../utils/trpc'
import { PuffLoader } from 'react-spinners'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  setShowNewTrackPanel: any
}

export default function TrackListPanel(props: Props) {
  const { setShowNewTrackPanel } = props
  const tracks = trpc.useQuery(['getAllTracks'])
  const [parent] = useAutoAnimate<HTMLDivElement>()

  const tctx = trpc.useContext()
  const removeTrack = trpc.useMutation(['deleteTrack'], {
    onMutate: ({ id }) => {
      //Optimistic update
      tctx.queryClient.setQueryData(['getAllTracks'], {
        success: true,
        tracks: tracks.data?.tracks.filter((track) => track.id != id),
      })
    },
  })

  if (tracks.status === 'loading') {
    return (
      <div className="pMain">
        <div className="pMainPanel flex justify-center border">
          <PuffLoader color="#FFF" />
        </div>
      </div>
    )
  }

  return (
    <div className="pMain">
      <div className="pMainPanel">
        <div ref={parent} className="w-full">
          {tracks.data?.tracks.map((track) => (
            <div className="mb-4 flex w-full justify-between rounded border border-zinc-500 p-4 transition hover:border-zinc-300">
              <div className="self-center">
                <p className="">
                  {track.artists[0].artist.artistName + ' - ' + track.title}
                </p>
              </div>
              <div
                onClick={() => removeTrack.mutate({id: track.id})}
                className="cursor-pointer text-xl hover:text-red-700"
              >
                x
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowNewTrackPanel(true)}
          className="btn-dark w-full"
        >
          AddTrack
        </button>
      </div>
    </div>
  )
}
