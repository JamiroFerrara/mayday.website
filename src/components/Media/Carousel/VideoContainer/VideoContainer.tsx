import React from 'react'
import styles from './VideoContainer.module.scss'
import ReactPlayer from 'react-player'

const VideoContainer = () => {
  return (
    <>
    <video autoPlay loop muted playsInline className={styles.video}>
        <source src={'/Mayday.mp4'} type="video/mp4;"/>
    </video>

    </>
  )
}

export default VideoContainer