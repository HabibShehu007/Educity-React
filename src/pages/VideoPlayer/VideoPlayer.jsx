import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import './VideoPlayer.css'
import video from '../../assets/7971025-uhd_3840_2160_24fps (2).mp4'

const VideoPlayer = ({ playState, setPlayState }) => {

 const player = useRef(null);

 const closePlayer = (e) => {
    if (e.target === player.current) {
     setPlayState(false);
    }
 }


  return (
    <div className={`video-player${playState ? '' : ' hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

VideoPlayer.propTypes = {
  playState: PropTypes.bool.isRequired,
  setPlayState: PropTypes.func.isRequired
}

export default VideoPlayer
