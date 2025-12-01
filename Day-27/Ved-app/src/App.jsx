import React from 'react'
import Clock from './components/Clock.jsx'
import Dots from './components/Dots.jsx'
const App = () => {
  return (
    <div  className='bg-[#81a2eb] h-screen w-screen '>
<div className="flex justify-center items-center h-screen w-screen ">
    <Clock />
    </div>
    
<Dots />


    </div>
  )
}

export default App


