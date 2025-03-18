"use client"

import { useTheme } from "./theme-provider"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    // Asegurarse de que cambiamos al tema opuesto
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    console.log("Cambiando tema a:", newTheme) // Para depuración
    setTheme(newTheme)
  }

  return (
    <button 
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="p-2 rounded-full hover:bg-gray-800 transition-colors"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-slate-900" />
      )}
    </button>
  )
}