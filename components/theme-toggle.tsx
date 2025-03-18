"use client"

import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from './theme-provider'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-pink-200 hover:bg-pink-300'}`}
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-transform duration-300" />
      )}
    </motion.button>
  )
}