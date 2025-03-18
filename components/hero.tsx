"use client"

import { motion } from "framer-motion"
import { ArrowRight, Coffee } from "lucide-react"
import Link from "next/link"
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section id="Inicio" className="relative w-full min-h-[105vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-start space-y-6 sm:space-y-8"
        >
          <div className="flex items-center space-x-2 text-purple-400">
          </div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight sm:leading-none mb-4 sm:mb-6"
          >
            <span className="block">Martin Beroiza</span>
            <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 leading-normal">
              <TypeAnimation
                sequence={[
                  '!@#$%^&*()_+',
                  100,
                  '!@#$ Stack upps xDD' ,
                  100,
                  'Full Stack !@#$%^ jajajja',
                  100,
                  'Full Stack Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
                cursor={false}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block"
              />
            </span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-base md:text-lg text-gray-300 mt-7"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-medium text-purple-300">Diseño soluciones digitales que marcan la diferencia.<br></br> </span> 
            Enfocado en crear experiencias únicas y personalizadas.
          </motion.p>
          <button
              onClick={() => {
                navigator.clipboard.writeText("martin.beroiza0@gmail.com");
                const tooltip = document.getElementById("email-tooltip");
                if (tooltip) {
                  tooltip.classList.remove("opacity-0");
                  tooltip.classList.add("opacity-100");
                  setTimeout(() => {
                    tooltip.classList.remove("opacity-100");
                    tooltip.classList.add("opacity-0");
                  }, 2000);
                }
              }}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-emerald-500/30"
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span>Disponible para trabajar</span>
              <div id="email-tooltip" className="absolute mt-16 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 transition-opacity duration-300">
                ¡Mail copiado!
              </div>
            </button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 mt-4"
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            {/* Iconos sociales */}
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/martinberoiza"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 transition-all duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5 text-[#0077B5] group-hover:scale-125 transition-transform duration-300" />
              </Link>
              <Link
                href="martin.beroiza0@gmail.com"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5 text-[#EA4335] group-hover:scale-125 transition-transform duration-300" />
              </Link>
              <Link
                href="https://github.com/Kuribo50"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 transition-all duration-300"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5 text-[#6e5494] group-hover:scale-125 transition-transform duration-300" />
              </Link>
            </div>
            {/* Botones de acción */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/MartinBeroizaCV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-5 py-2 text-sm rounded-full border border-amber-400/30 text-white font-medium hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/40 transition-all duration-300"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-amber-100/40 to-transparent transition-all duration-500 group-hover:left-full" />
                </div>
                <span className="relative">Currículum</span>
              </Link>
              <Link
                href="#contact"
                className="px-5 py-2 text-sm rounded-full border border-gray-700 text-white font-medium hover:bg-purple-600 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                Contáctame
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
