import React, { useEffect, useRef, useState } from 'react';
import { act } from 'react-dom/test-utils';

import './Videoplayer.css'
function Videoplayer({videos}) {
   const [video, setvideo] = useState(0)
   const [show , SetShow]  = useState(false)
   const [duration, setduration] = useState(null)
   const videoEl = useRef(null);
   let actualduartion ;
   let halfduration   ;
   let timer  = 


 
   function timerfunction  ( ) {
    setTimeout(() => {
  
      console.log(duration , 'popop' );
         if (timer) {
           SetShow(timer)
         }
         timer = true ;
         console.log(timer);
     }, duration * 1000);
  }
  
 useEffect(() => {

  let val =  setInterval(() => {
    console.log(   videoEl.current.currentTime  , halfduration );   
    if ( halfduration  < videoEl.current.currentTime ) {
     
      clearInterval(val)
      SetShow(true)  
       }
  } , 1000 )
 },[video])

   const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;
    actualduartion =  videoEl.current.duration ;
    halfduration  =   actualduartion / 2
    console.log(  videoEl.current.currentTime);
  };


  function handleClick(val) {
    setvideo(val)
    SetShow(false)
  }
 

    return (
    <div className='video-player-Container' >
   
 { video >= 0 ?   <div className="videos">  
  <video  ref={videoEl} src={videos[video]} controls = {true}  autoPlay = {true}  onLoadedMetadata={handleLoadedMetadata} ></video>
  
  
  </div> : ''  }
  
 {

  show ?  <div className="container">

    <button  className='top'  > <a href="https://www.google.com/"> button 1  </a>  </button>
    <button  onClick={()  =>  handleClick(1)}      > video 2  </button>
    <button  onClick={()  =>  handleClick(2)}   className='right' > video 3  </button>

   </div> : null
 }
    
    </div>
  )
}

export default Videoplayer