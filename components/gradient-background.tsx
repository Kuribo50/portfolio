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
      const x = (clientX / window.innerWidth) * 100
      const y = (clientY / window.innerHeight) * 100
      
      gradientRef.current.style.setProperty('--mouse-x', `${x}%`)
      gradientRef.current.style.setProperty('--mouse-y', `${y}%`)
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
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-40' : 'opacity-20'}`}
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${theme === 'dark' ? 'rgba(147, 51, 234, 0.4), rgba(79, 70, 229, 0.1)' : 'rgba(255, 105, 180, 0.3), rgba(255, 20, 147, 0.1)'}, transparent 80%)`,
        transition: 'background 0.3s ease-out'
      } as any}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-hidden="true"
    />
  )
}
