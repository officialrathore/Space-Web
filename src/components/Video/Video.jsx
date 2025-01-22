import React from 'react'
import bgVideo from '../../assets/images/earth-bg.mp4'

function Video() {
  return (
    <>
       <video autoPlay muted loop className='fixed right-0 top-0  h-[700px] w-full object-cover z[-1]'>
          <source src={bgVideo} type='video/mp4' />
        </video>
    </>
  )
}

export default Video