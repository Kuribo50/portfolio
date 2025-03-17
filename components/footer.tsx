"use client"

import Link from "next/link"
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Martin<span className="text-purple-500">Beroiza</span>
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              Desarrollador Full Stack.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a  
                href="https://github.com/Kuribo50"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-900/50 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-[#6e5494] group-hover:scale-125 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/martinberoiza/"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-900/50 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#0077B5] group-hover:scale-125 transition-transform duration-300" />
              </a>
              <a
                href="https://twitter.com/martinberoiza"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-900/50 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Mail className="w-5 h-5 text-[#EA4335] group-hover:scale-125 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <button 
              onClick={() => scrollToSection('#Inicio')}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('#tech-stack')}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              Tecnologías
            </button>
            <button 
              onClick={() => scrollToSection('#projects')}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('#timeline')}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              Trayectoria
            </button>
            <button 
              onClick={() => scrollToSection('#about')}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              Contacto
            </button>
          </nav>
        </div>
      </div>
    </footer>
  )
}

