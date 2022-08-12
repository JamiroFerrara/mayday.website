import NewTrackPanel from '../components/Admin/Panel/NewTrackPanel'
import LoginPanel from '../components/Admin/Panel/LoginPanel'
import TrackListPanel from '../components/Admin/Panel/TrackListPanel'
import {useState } from 'react'

export default function AdminPage() {
  // const [showNewTrackPanel, setShowNewTrackPanel] = useState(false)
  // const [login, setLogin] = useState(false)

  // if (login === false){
    // return <LoginPanel setLogin={setLogin}/>
  // }

  // if(showNewTrackPanel === true) {
    return (
      <NewTrackPanel />
    )
  // }

  // return (
    // <TrackListPanel setShowNewTrackPanel={setShowNewTrackPanel}/>
  // )
}
