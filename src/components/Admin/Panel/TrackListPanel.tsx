import { trpc } from '../../../utils/trpc'
import { PuffLoader } from 'react-spinners'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { deleteTrack } from '../../../backend/aws/s3'

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

      //Delete from S3
      // const file = tracks.data?.tracks.filter((track) => track.id === id)
      // if (file) {
        // const trackUrl = file[0].url
        // const bannerUrl = file[0].bannerUrl
        // const artworkUrl = file[0].artworkUrl
        // deleteTrack(trackUrl, bannerUrl, artworkUrl)
      // }
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
          {tracks.data?.tracks.map((track, key) => (
            <div onClick={() => removeTrack.mutate({id: track.id})} key={key} className="mb-4 flex cursor-pointer w-full justify-between rounded border border-zinc-500 p-4 transition hover:border-red-600">
                <div className="self-center">
                  <p className="text-xl text-zinc-300">
                    {track.artists.map((artist) => (artist.artist.artistName)).join(', ')}
                  </p>

                  <p className="">
                    {track.title}
                  </p>
                </div>

                <p className="text-xl self-center">{track.price + " €"}</p>

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
