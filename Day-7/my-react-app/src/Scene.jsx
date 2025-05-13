import React from 'react'
import { OrbitControls, useTexture } from '@react-three/drei'

const Scene = () => {
      let tex = useTexture('./assets/image.png')
        tex.needsUpdate = true; 
  return (
    <div>
         <mesh>
            <cylinderGeometry  args={[1,1,1,30,30,true]} />
            <meshStandardMaterial map={tex}  side={ THREE.DoubleSide } />
            </mesh>
      
    </div>
  )
}

export default Scene
