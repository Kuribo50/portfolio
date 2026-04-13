"use client"

import { timelineItems } from "@/data/experience"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

export default function Timeline() {
  return (
    <section 
      id="timeline" 
      className="relative w-full min-h-screen py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden flex items-center"
    >
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          className="text-left mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6A4780] mb-3 md:mb-5 pb-1">
            Mi Trayectoria
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            Un recorrido por mi experiencia profesional y formación académica
          </p>
        </motion.div>

        <div className="relative">
          <div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-animate" 
            style={{
              background: 'linear-gradient(to bottom, #9333ea, #3b82f6, #4f46e5)',
              backgroundSize: '200% 200%',
              animation: 'gradientFlow 8s ease infinite'
            }}
          />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-12 md:mb-20 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-sm border-2 border-purple-600 flex items-center justify-center z-10 shadow-lg shadow-purple-500/20">
                {item.type === "work" ? (
                  <Briefcase className="w-3 h-3 md:w-5 md:h-5 text-pink-400" />
                ) : (
                  <GraduationCap className="w-3 h-3 md:w-5 md:h-5 text-pink-400" />
                )}
              </div>

              <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-20" : "md:pl-20"}`}>
                <motion.div 
                  className="bg-black/20 backdrop-blur-sm p-5 sm:p-6 md:p-7 rounded-xl border border-[#2a2a3e] hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 neon-border glass-card timeline-item"
                  style={{
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
                  }}
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  whileTap={{ scale: 0.95, rotate: -1 }}
                >
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white dark:text-pink-300 text-black border border-pink-800 mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-[#6A4780]">{item.title}</h3>
                  <p className="text-purple-400 mb-4 text-sm sm:text-base">{item.company}</p>
                  <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">{item.description}</p>
                </motion.div>
              </div>

              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
