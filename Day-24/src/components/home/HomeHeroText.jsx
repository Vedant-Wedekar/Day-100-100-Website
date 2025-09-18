import React from 'react'
import Video from './Video'
import Video2 from './Video2'

const HomeHeroText = () => {
    return (
        <div className='font-[font1]  mt-72 lg:mt-0 pt-5 text-center'>
            <div className='lg:text-[5.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
               The Simplest Way to
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
               Launch
                <div className='h-[7vw] w-[16vw]  mt-3 overflow-hidden '>
                    <Video2 />
                </div>
                Grow
            </div>
            {/* <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
  
            </div> */}
        </div>
    )
}

export default HomeHeroText