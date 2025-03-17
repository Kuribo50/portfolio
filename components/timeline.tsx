"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

const timelineItems = [
  {
    year: "2024 - 2025",
    title: "Practica Profesional Serviu Región del Biobío",
    company: "Practicante",
    description: "Desarrollé durante 3 meses una aplicación web utilizando tecnologías como React, Next.js, Python, DJangoRest y PostgresSQL para implementar un sistema de gestión de bodega en el área de TI. Este sistema optimiza la entrega y recepción de equipos y suministros, mejorando la eficiencia en la administración de inventario del sector tecnológico.",
    type: "work",
  },
  {
    year: "2022 - 2024",
    title: "Titulado Técnico Analista Programador",
    company: "Instituto Profesional Dr. Virginio Gómez G.",
    description: "Titulado en Analista Programador, con sólidos conocimientos en bases de datos, metodologías de desarrollo y creación de sistemas web y móviles.",
    type: "education",
  },
]

export default function Timeline() {
  // Función para manejar el desplazamiento suave
  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  return (
    <section 
      id="timeline" 
      className="relative w-full min-h-screen py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden flex items-center"
    >
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 mb-3 md:mb-5 pb-1">
            Mi Trayectoria
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            Un recorrido por mi experiencia profesional y formación académica
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea de la timeline */}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-12 md:mb-20 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Punto de la timeline */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-sm border-2 border-purple-600 flex items-center justify-center z-10 shadow-lg shadow-purple-500/20">
                {item.type === "work" ? (
                  <Briefcase className="w-3 h-3 md:w-5 md:h-5 text-purple-400" />
                ) : (
                  <GraduationCap className="w-3 h-3 md:w-5 md:h-5 text-purple-400" />
                )}
              </div>

              {/* Contenido */}
              <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-20" : "md:pl-20"}`}>
                <motion.div 
                  className="bg-black/20 backdrop-blur-sm p-5 sm:p-6 md:p-7 rounded-xl border border-[#2a2a3e] hover:border-purple-500 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-900/30 text-purple-300 border border-purple-800 mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-purple-400 mb-4 text-sm sm:text-base">{item.company}</p>
                  <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">{item.description}</p>
                </motion.div>
              </div>

              {/* Div vacío para mantener la estructura */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
