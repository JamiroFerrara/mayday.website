import NewTrackPanel from '../components/Admin/Panel/NewTrackPanel'
import TrackListPanel from '../components/Admin/Panel/TrackListPanel'
import {useState } from 'react'

export default function AdminPage() {
  const [showNewTrackPanel, setShowNewTrackPanel] = useState(false)

  if(showNewTrackPanel === true) {
    return (
      <NewTrackPanel/>
    )
  }

  return (
    <TrackListPanel setShowNewTrackPanel={setShowNewTrackPanel}/>
  )
}
