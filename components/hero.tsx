"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6"
import { TypeAnimation } from "react-type-animation"
import { useState } from "react"

export default function Hero() {
  const [tooltipVisible, setTooltipVisible] = useState(false)

  return (
    <section
      id="Inicio"
      className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 overflow-hidden"
    >
      <div className="container relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col items-start space-y-6 sm:space-y-8 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 text-primary lg:-ml-[60px] relative">
              <motion.span className="block text-[#6A4780]">
                Martin Beroiza
              </motion.span>

              <motion.span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 leading-normal h-[2.8em] sm:h-[2.6em] md:h-[2.4em] lg:h-[2.4em] flex items-center">
                <TypeAnimation
                  sequence={[
                    "Desarrollador Full Stack ",
                    2000,
                    "Python, Django y FastAPI ",
                    2000,
                    "React, Next.js y PostgreSQL ",
                    2000,
                    "Automatización y análisis de datos",
                    2000,
                  ]}
                  wrapper="span"
                  speed={75}
                  repeat={Infinity}
                  cursor={true}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block"
                />
              </motion.span>
            </motion.h1>

            <div className="space-y-4 max-w-lg">
              <motion.h2
                className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Desarrollo de software y automatizaciones.
              </motion.h2>

              <motion.p
                className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Construyo herramientas web que optimizan operaciones y gestionan datos complejos, con enfoque en resultados técnicos y eficiencia operativa.
              </motion.p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigator.clipboard.writeText("martin.beroiza0@gmail.com")
                setTooltipVisible(true)
                setTimeout(() => setTooltipVisible(false), 2000)
              }}
              className="relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-full transition-all duration-200 shadow-lg"
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span>Disponible para trabajar</span>

              {tooltipVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2"
                >
                  ¡Mail copiado!
                </motion.div>
              )}
            </motion.button>

            <div className="flex flex-wrap items-center gap-6 mt-6">
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/in/martinberoiza"
                  target="_blank"
                  className="text-white/40 hover:text-[#0077B5] transition-colors"
                >
                  <FaLinkedin size={24} />
                </Link>

                <Link
                  href="mailto:martin.beroiza0@gmail.com"
                  className="text-white/40 hover:text-[#EA4335] transition-colors"
                >
                  <FaEnvelope size={24} />
                </Link>

                <Link
                  href="https://github.com/Kuribo50"
                  target="_blank"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <FaGithub size={24} />
                </Link>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/CV_Martin_Beroiza_v3.pdf"
                  download
                  className="px-5 py-2 text-sm rounded-full border border-pink-500/50 text-white hover:bg-pink-500 transition-all"
                >
                  Currículum
                </Link>

                <Link
                  href="#contact"
                  className="px-5 py-2 text-sm rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-700" />

              <div className="relative bg-[#0d0d1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[10px] text-white/40 font-mono ml-2 uppercase tracking-widest">
                    process_automation.py
                  </div>
                </div>

                <div className="p-8 font-mono text-sm leading-relaxed">
                  <div>
                    <span className="text-purple-400">class</span>{" "}
                    <span className="text-blue-400">ProcessAutomation</span>:
                  </div>
                  <div className="pl-4 mt-1">
                    <span className="text-blue-400">def</span>{" "}
                    <span className="text-emerald-400">optimize</span>(self, data):
                  </div>
                  <div className="pl-8 mt-1">
                    <span className="text-pink-400">return</span> data.map(lambda x: {"{"}
                  </div>
                  <div className="pl-12">
                    <span className="text-amber-400">'status'</span>:{" "}
                    <span className="text-emerald-400">'optimized'</span>,
                  </div>
                  <div className="pl-12">
                    <span className="text-amber-400">'result'</span>:{" "}
                    <span className="text-emerald-400">'success'</span>
                  </div>
                  <div className="pl-8">{"}"})</div>
                  <div className="mt-4 text-white/20"># Trazabilidad garantizada</div>

                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-purple-500 ml-1 translate-y-1"
                  />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 -top-6 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl z-20"
              >
                <div className="text-[10px] text-emerald-400 font-mono">Status: Active</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}