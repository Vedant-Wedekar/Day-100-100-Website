import React from 'react'
import flower from '../assets/kj.jpg'

const Move = () => {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center gap-70 ml-50 ">
        <div className="font-medium text-4xl">01</div>
        
          <img className="w-[370px] h-[550px]" src={flower} alt="Flower" />
        
      </div>
    </div>
  )
}

export default Move
