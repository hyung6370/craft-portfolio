import { useState, useRef } from 'react'


const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)

  // iframe이 로드되었을 때 호출될 함수
  const onIframeLoad = () => {
    setLoading(false) // 로딩 상태를 false로 설정하여 로딩 인디케이터를 숨긴다.
  }

  return (
    <div ref={refContainer}>
      {loading && <div>Loading...</div>}
      <div className="sketchfab-embed-wrapper">
      <iframe
        title="1984 Apple Macintosh 128k (Expanded)"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/544a03b89d72462c9b1480dcae3d2530/embed?autostart=1"
        onLoad={onIframeLoad}
        style={{ width: '600px', height: '250px' }}
      >
      </iframe>
      </div>
    </div>
  )
}

export default VoxelDog
