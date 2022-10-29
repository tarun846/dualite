import React, { useEffect, useRef, useState } from 'react';

import './Videoplayer.css'
function Videoplayer({videos}) {
   const [video, setvideo] = useState(0)
   const [show , SetShow]  = useState(true)
   const [duration, setduration] = useState(null)
   const videoEl = useRef(null);

  
   const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;
    setduration(video.duration)
  };

 
  useEffect(() => {
     if (duration === null) return
    const interval = setInterval(() => {
      setduration((prevCounter) => prevCounter - 1)
      console.log('bini' , duration );
   if (duration === 0) {
    clearInterval(interval)
    return
  }

    }, 1000);
  }, [duration])
  
 

    return (
    <div className='video-player-Container' >
   
 { video >= 0 ?   <div className="videos">  
  <video  ref={videoEl} src={videos[video]} controls autoPlay = {true}  onLoadedMetadata={handleLoadedMetadata} ></video>
  
  
  </div> : ''  }
  
 {

  show ?  <div className="container">

    <button  className='top'   onClick={()  =>  setvideo(0)}   > video 1  </button>
    <button  onClick={()  =>  setvideo(1)}      > video 2  </button>
    <button  onClick={()  =>  setvideo(2)}   className='right' > video 3  </button>

   </div> : null
 }
    
    </div>
  )
}

export default Videoplayer