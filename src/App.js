import React from 'react'
import Navbar from './Componnets/Navbar/Navbar'
import Videoplayer from './Componnets/Videoplayer/Videoplayer'
import video1 from './videos/Earth_Rotating__In_the_space__Free_HD_Video_-_no_copyright(720p).mp4' 
import video2 from "./videos/Earth's_Rotation_Visualized_in_a_Timelapse_of_the_Milky_Way_Galaxy_-_4K(720p).mp4" 
import video3 from './videos/Viewing_the_Earth’s_Rotation_from_Space(720p).mp4' 

function App() {

  let videos = [   video2 ,  video1 , video3]
  return (
    <div>
       <Navbar/>
       <Videoplayer videos = {videos} />
    </div>
  )
}

export default App