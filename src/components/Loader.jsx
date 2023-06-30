import React from 'react'
import { Html, useProgress } from '@react-three/drei'
const Loader = () => {

  const { progress } = useProgress();//para cargar nuestro 3D

  return (
    <Html>
      <span></span>
      <p style={{
        fontSize: 14,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 40
      }}
      >
        {progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader