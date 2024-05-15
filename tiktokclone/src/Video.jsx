import React from 'react'

function video(props) {
  const { url } = props
  return (
    <div className="video">
			<video className="player" loop src={url}></video>
		</div>
  )
}

export default video
