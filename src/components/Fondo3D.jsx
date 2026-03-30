import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particulas({ count = 4000 }) {
  const mesh = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  // Escuchar el mouse en toda la ventana para que no se bloquee
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push(THREE.MathUtils.randFloatSpread(120), THREE.MathUtils.randFloatSpread(120), THREE.MathUtils.randFloatSpread(120))
    }
    return new Float32Array(temp)
  }, [count])

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()
    // Rotación constante
    mesh.current.rotation.y += delta * 0.1
    // Seguimiento suave del mouse (Lerp)
    mesh.current.rotation.x += (mouse.current.y * 0.5 - mesh.current.rotation.x) * 0.05
    mesh.current.rotation.z += (mouse.current.x * 0.5 - mesh.current.rotation.z) * 0.05
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.15} color="#ffffff" transparent opacity={0.6} sizeAttenuation blending={THREE.AdditiveBlending} />
    </points>
  )
}

export default function Fondo3D() {
  return (
    <div className="absolute inset-0 z-0 bg-[#070708] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }} gl={{ alpha: true }}>
        <Particulas />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#070708]"></div>
    </div>
  )
}