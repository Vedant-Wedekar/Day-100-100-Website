import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { CylinderGeometry, MeshStandardMaterial } from 'three'
import { BoxGeometry } from 'three'
import { AmbientLight } from 'three'
import * as THREE from 'three'
import Cyl from './Cyl'
import { Bloom, EffectComposer , ToneMapping } from '@react-three/postprocessing'
// import { Mesh } from 'three'
const App = () => { 
  return (
    <>
  <Canvas camera={{ fov: 35 }}>
    {/* <OrbitControls   /> */}
    <ambientLight intensity={1}  />
    <Cyl />
    <EffectComposer>
    <Bloom
    mipmapBlur
    intensity={4.0}
    luminanceThreshold={0}
    luminanceSmoothing={0}
    />
    </EffectComposer>
    <ToneMapping />
   
  </Canvas> 

  <div className="w-full h-[500px] bg-black"></div>
  
  
  
   </>
  )
}

export default App
