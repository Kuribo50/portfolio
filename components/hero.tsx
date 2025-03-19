"use client"

import { motion } from "framer-motion"
import { ArrowRight, Coffee } from "lucide-react"
import Link from "next/link"
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

export default function Hero() {
  const [tooltipVisible, setTooltipVisible] = useState(false)

  return (
    <section id="Inicio" className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-start space-y-6 sm:space-y-8"
        >
          <div className="flex items-center space-x-2 text-purple-400">
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight sm:leading-none mb-4 sm:mb-6 text-primary"
          >
            <motion.span 
              className="block text-[#6A4780]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Martin Beroiza
            </motion.span>
            <motion.span 
              className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 leading-normal"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  '!full%^s&*ta(ck)_+',
                  200,
                  '!fusll cst¿ack ups xD' ,
                  100,
                  'Full Stack Developer',
                  1000,
                ]}
                wrapper="span"
                speed={75}
                repeat={0}
                cursor={false}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              />
            </motion.span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-5 md:mt-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.span 
              className="font-semibold hero-title-text block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Diseño soluciones digitales
              <span className="hidden sm:inline"> que marcan la diferencia.</span>
            </motion.span> 
            <motion.span 
              className="block mt-2 sm:mt-3 md:mt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Enfocado en crear experiencias únicas y personalizadas.
            </motion.span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigator.clipboard.writeText("martin.beroiza0@gmail.com")
              setTooltipVisible(true)
              setTimeout(() => {
                setTooltipVisible(false)
              }, 2000)
            }}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-emerald-500/30"
          >
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
            <span>Disponible para trabajar</span>
            <motion.div 
              id="email-tooltip" 
              className={`absolute mt-16 bg-gray-900 text-white text-xs rounded py-1 px-2 transition-opacity duration-300 ${tooltipVisible ? 'opacity-100' : 'opacity-0'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: tooltipVisible ? 1 : 0, y: tooltipVisible ? 0 : 10 }}
              transition={{ duration: 0.3 }}
            >
                ¡Mail copiado!
            </motion.div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            {/* Iconos sociales */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://www.linkedin.com/in/martinberoiza"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5] hover:bg-[#0077B5]/90 transition-all duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5 text-white group-hover:scale-125 transition-transform duration-300" />
              </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="mailto:martin.beroiza0@gmail.com"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#EA4335] hover:bg-[#EA4335]/90 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5 text-white group-hover:scale-125 transition-transform duration-300" />
              </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://github.com/Kuribo50"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#6e5494] hover:bg-[#6e5494]/90 transition-all duration-300"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5 text-white group-hover:scale-125 transition-transform duration-300" />
              </Link>
              </motion.div>
            </motion.div>
            {/* Botones de acción */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/MartinBeroizaCV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-5 py-2 text-sm rounded-full border border-pink-400 text-white font-medium hover:bg-pink-500 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full" />
                </div>
                <span className="relative">Currículum</span>
              </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="px-5 py-2 text-sm rounded-full border border-purple-500 text-white font-medium hover:bg-purple-600 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                Contáctame
              </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
