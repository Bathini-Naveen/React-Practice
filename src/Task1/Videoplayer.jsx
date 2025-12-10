import React, { useState } from 'react'

const Videoplayer = ({videos}) => {
  const [selectedVideo,setSelectedVideo]  = useState("")
  // console.log(selectedVideo);
  return (
    <div className='Size-full  flex flex-wrap '>
      {videos.filter((url) => url !== selectedVideo).map((url,index)=> (
             <div className='flex justify-center items-center m-4' onClick={()=>setSelectedVideo(url)} key={index} >
               <video src={url} height={500} width={300}  ></video>  
             </div>
      )
      )}
        <div className='h-[400px] w-[620px] '>
              {selectedVideo && <video src={selectedVideo} height={400} width={620}/>}
            </div>
    </div>
  )
}

export default Videoplayer