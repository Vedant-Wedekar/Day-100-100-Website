import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-4 lg:gap-8 py-8 bg-[#0a0a0a] text-white">
      
      {/* Projects Button - Warm Pink Tone */}
      <div className="transition-all duration-300 border-2 border-[#2a2a2a] hover:border-[#ffd7d4] hover:text-[#ffd7d4] hover:shadow-[0_0_20px_#ffd7d4aa] lg:h-44 flex items-center justify-center px-6 pt-1 lg:px-14 rounded-full uppercase backdrop-blur-sm bg-[#111111]/70">
        <Link className="text-[6vw] lg:text-[3vw] tracking-wide" to="/  ">
          Home 
        </Link>
      </div>

      {/* Agence Button - Cool Blue Tone */}
      <div className="transition-all duration-300 border-2 border-[#2a2a2a] hover:border-[#d4f9ff] hover:text-[#d4f9ff] hover:shadow-[0_0_20px_#d4f9ffaa] lg:h-44 flex items-center justify-center px-6 pt-1 lg:px-14 rounded-full uppercase backdrop-blur-sm bg-[#111111]/70">
        <Link className="text-[6vw] lg:text-[3vw] tracking-wide" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  )
}

export default HomeBottomText
