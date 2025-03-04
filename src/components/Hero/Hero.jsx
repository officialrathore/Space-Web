import React from 'react'
import MountIng from '../../assets/images/moon-surface-hd.png'

function Hero() {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
        <div className='h-full flex items-center justify-center p-4'>
            <div className='container grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                    <h1 data-aos="fade-up" className='text-5xl  font-bold'>
                        Orbit The Earth
                    </h1> <br/>
                    <p data-aos="fade-up" data-aos-delay="300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p> <br/>
                    <button className='primary-button' data-aos="fade-up" data-aos-delay="300">
                        Learn More
                    </button>
                </div>
                <div></div>
            </div>
        </div>
        <img src={MountIng} alt='' className='absolute right-0 bottom-0 w-full brightness-50 z-10'/>
        <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]'>

        </div>
    </div>
  )
}

export default Hero