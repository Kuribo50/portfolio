"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function GradientBackground() {
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gradientRef.current) return

      const { clientX, clientY } = e
      const x = clientX / window.innerWidth
      const y = clientY / window.innerHeight
      
      // Siempre usar el estilo del tema oscuro
      gradientRef.current.style.background = 
        `radial-gradient(circle at ${x * 100}% ${y * 100}%, 
          rgba(147, 51, 234, 0.5), 
          rgba(79, 70, 229, 0.3), 
          transparent 50%)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, []) // Ya no necesitamos theme como dependencia

  return (
    <motion.div
      ref={gradientRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-hidden="true"
    />
  )
}
