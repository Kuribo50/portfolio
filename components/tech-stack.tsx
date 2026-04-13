"use client"

import { technologies } from "@/data/tech-stack"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const TechCard = ({ tech }: { tech: any }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <motion.div
      key={tech.name}
      className={`group relative flex flex-col items-center justify-center px-4 py-5 md:py-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
        transition-all duration-300 ${tech.hoverColor} hover:border-transparent hover:-translate-y-2 cursor-pointer neon-border glass-card`}
      whileHover={{ scale: 1.05 }}
      onClick={() => !isMobile && window.open(tech.docUrl, "_blank")}
    >
      <div className="mb-3 transform transition-transform duration-300 group-hover:scale-125">
        {tech.icon}
      </div>
      <p className="text-white text-sm md:text-base font-bold text-center opacity-80 group-hover:opacity-100">
        {tech.name}
      </p>
    </motion.div>
  )
}

export default function TechStack() {
  const categories = [
    "Frontend",
    "Backend",
    "Bases de datos",
    "Datos y análisis",
    "Infraestructura",
    "Herramientas",
  ]

  return (
    <section
      id="tech-stack"
      className="relative w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="container relative z-10 mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-left mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6A4780] mb-4 pb-1">
              Tecnologías
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Herramientas y lenguajes de uso continuo para el desarrollo web, la automatización de procesos y el análisis de datos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {categories.map((cat) => (
              <div key={cat} className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-white/90 border-l-4 border-[#6A4780] pl-4">
                  {cat}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 lg:gap-6">
                  {technologies
                    .filter((t) => t.category === cat)
                    .map((tech) => (
                      <TechCard key={tech.name} tech={tech} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}