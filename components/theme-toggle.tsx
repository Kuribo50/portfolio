"use client"

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [scrollbarTheme, setScrollbarTheme] = useState('purple')

  useEffect(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('scrollbarTheme') || 'purple'
    setScrollbarTheme(savedTheme)
    document.documentElement.setAttribute('data-scrollbar-theme', savedTheme)
  }, [])

  const toggleScrollbarTheme = () => {
    const newTheme = scrollbarTheme === 'purple' ? 'pink' : 'purple'
    setScrollbarTheme(newTheme)
    document.documentElement.setAttribute('data-scrollbar-theme', newTheme)
    localStorage.setItem('scrollbarTheme', newTheme)
  }

  return (
    <motion.button
      onClick={toggleScrollbarTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 group"
      aria-label="Toggle scrollbar theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {scrollbarTheme === 'purple' ? (
        <Sun className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-transform duration-300" />
      )}
    </motion.button>
  )
}