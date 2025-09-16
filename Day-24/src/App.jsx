import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      
     <div
        className="gradient-blob w-[700px] h-[600px] right-[-10rem] top-80"
        style={{
          background: "radial-gradient(circle, #afc5f7, transparent 70%)",
        }}
        aria-hidden="true"
      ></div>

      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
       <div
        className="gradient-blob w-[600px] h-[700px] -left-40 -top-32"
        style={{
          background: "radial-gradient(circle, #d5b1f4, transparent 70%)",
        }}
        aria-hidden="true"
      ></div>
    </div>
  )
}

export default App