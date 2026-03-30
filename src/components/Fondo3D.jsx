import React, { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particulas({ count = 4000 }) {
  const mesh = useRef()
  const motion = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // 1. Manejo de Mouse (PC)
    const handleMouseMove = (e) => {
      motion.current.x = (e.clientX / window.innerWidth) * 2 - 1
      motion.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    // 2. Manejo de Giroscopio (Móvil)
    const handleDeviceMotion = (e) => {
      if (e.accelerationIncludingGravity) {
        // Usamos la inclinación (beta y gamma) para mover las partículas
        // Dividimos por 10 para suavizar el movimiento
        motion.current.x = e.accelerationIncludingGravity.x / 10
        motion.current.y = e.accelerationIncludingGravity.y / 10
      }
    }

    // Pedir permiso para iOS (iPhone)
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
      // Nota: Normalmente esto requiere un clic del usuario. 
      // Si el usuario ya aceptó el reto en el botón, el permiso fluye mejor.
      DeviceMotionEvent.requestPermission()
        .then(response => {
          if (response === 'granted') {
            window.addEventListener('devicemotion', handleDeviceMotion)
          }
        })
        .catch(console.error)
    } else {
      // Android o navegadores que no piden permiso explícito
      window.addEventListener('devicemotion', handleDeviceMotion)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('devicemotion', handleDeviceMotion)
    }
  }, [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push(THREE.MathUtils.randFloatSpread(120), THREE.MathUtils.randFloatSpread(120), THREE.MathUtils.randFloatSpread(120))
    }
    return new Float32Array(temp)
  }, [count])

  useFrame((state, delta) => {
    // Rotación base constante
    mesh.current.rotation.y += delta * 0.05
    
    // Movimiento fluido (Lerp) basado en inclinación o mouse
    // Aumentamos el multiplicador para que se note el efecto 3D
    mesh.current.rotation.x += (motion.current.y * 0.2 - mesh.current.rotation.x) * 0.05
    mesh.current.rotation.z += (motion.current.x * 0.2 - mesh.current.rotation.z) * 0.05
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.15} color="#ffffff" transparent opacity={0.4} sizeAttenuation blending={THREE.AdditiveBlending} />
    </points>
  )
}

export default function Fondo3D() {
  return (
    <div className="fixed inset-0 z-0 bg-[#070708] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 60], fov: 75 }} gl={{ alpha: true }}>
        <Particulas />
      </Canvas>
      {/* Overlay oscuro para no cansar la vista */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070708]/40 to-[#070708]"></div>
    </div>
  )
}