import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particulas({ count = 4000 }) {
  const mesh = useRef()
  // Usamos un valor inicial para que el efecto arranque activo en PC
  const motion = useRef({ x: 0.2, y: -0.2 })

  useEffect(() => {
    // 1. Manejo de Mouse (PC): Aumentamos la sensibilidad
    const handleMouseMove = (e) => {
      // Normalizamos de -1 a 1 y luego escalamos para dar más rango
      motion.current.x = ((e.clientX / window.innerWidth) * 2 - 1) * 2 // Sensibilidad x2
      motion.current.y = (-(e.clientY / window.innerHeight) * 2 + 1) * 2 // Sensibilidad x2
    }

    // 2. Manejo de Giroscopio (Móvil): 🚀 AUMENTO DRÁSTICO DE SENSIBILIDAD
    const handleDeviceMotion = (e) => {
      if (e.accelerationIncludingGravity) {
        // En móviles, los valores de gravedad (x, y) suelen ser bajos.
        // MULTIPLICAMOS POR 10 para que la inclinación sea evidente.
        // Si inclinas 10 grados, ahora parecerá que inclinaste 100.
        motion.current.x = (e.accelerationIncludingGravity.x / 9.8) * 10 // Sensibilidad x10
        motion.current.y = (e.accelerationIncludingGravity.y / 9.8) * 10 // Sensibilidad x10
      }
    }

    // Pedir permiso para iOS (iPhone): Esencial para que Vercel te dé los datos
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
        .then(response => {
          if (response === 'granted') {
            window.addEventListener('devicemotion', handleDeviceMotion)
          } else {
            console.log("Permiso de giroscopio denegado");
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
      // Hacemos que la nube de partículas sea más compacta (randFloatSpread más bajo)
      temp.push(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloatSpread(100))
    }
    return new Float32Array(temp)
  }, [count])

  useFrame((state, delta) => {
    // Rotación base constante (Nivel Pro: Más rápida para dar vértigo)
    mesh.current.rotation.y += delta * 0.1 
    
    // 💥💥💥 MOVIMIENTO FLUIDO Y EXAGERADO (Lerp) 💥💥💥
    // El '0.1' al final controla el suavizado. '1' sería instantáneo (como PUBG), '0.05' era muy lento.
    // Usamos '0.15' para que sea RÁPIDO pero sin marear.
    const smoothing = 0.15; 
    
    mesh.current.rotation.x += (motion.current.y * 0.4 - mesh.current.rotation.x) * smoothing
    mesh.current.rotation.z += (motion.current.x * 0.4 - mesh.current.rotation.z) * smoothing
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      {/* Nivel Pro: Partículas más grandes y más brillantes para que se noten al moverse */}
      <pointsMaterial size={0.25} color="#ffffff" transparent opacity={0.6} sizeAttenuation blending={THREE.AdditiveBlending} />
    </points>
  )
}

export default function Fondo3D() {
  return (
    <div className="fixed inset-0 z-0 bg-[#070708] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 70], fov: 75 }} gl={{ alpha: true }}>
        <Particulas />
      </Canvas>
      {/* Overlay oscuro para no cansar la vista y dar profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070708]/50 to-[#070708]"></div>
    </div>
  )
}