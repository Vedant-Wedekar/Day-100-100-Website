import React , { useRef } from 'react'
import {  useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
const Cyl = () => {
      let tex = useTexture('/image.png')
      let Cyl = useRef(null);
      useFrame((state,delta) => {
    Cyl.current.rotation.y += delta     
      });
  return (
         <mesh ref={Cyl} rotation={[0.1,1,0.2]}   >
            <cylinderGeometry  args={[1,1,1,30,30,true]} />
            <meshStandardMaterial map={tex}  side={ THREE.DoubleSide } />
            </mesh>
  )
}
export default Cyl



