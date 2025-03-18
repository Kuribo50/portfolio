"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"

export default function GradientBackground() {
  const gradientRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gradientRef.current) return

      const { clientX, clientY } = e
      const x = clientX / window.innerWidth
      const y = clientY / window.innerHeight
      // Adjust gradient based on theme
      if (theme === 'dark') {
        gradientRef.current.style.background =
          `radial-gradient(circle at ${x * 100}% ${y * 100}%, 
            rgba(147, 51, 234, 0.5), 
            rgba(79, 70, 229, 0.3), 
            transparent 50%)`
      } else {
        gradientRef.current.style.background =
          `radial-gradient(circle at ${x * 100}% ${y * 100}%, 
            #ff69b466, 
            rgba(255, 20, 147, 0.3), 
            transparent 50%)`
      }
    }
    // Set initial background based on theme
    if (gradientRef.current) {
      if (theme === 'dark') {
      } else {
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [theme])

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
