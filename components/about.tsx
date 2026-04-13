"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Code, Coffee, Search, MessageSquare, Target } from "lucide-react"

// Stats array containing key metrics and achievements
const stats: { value: string; label: string; }[] = [
  /*{ value: "1", label: "Años de Experiencia" },
  { value: "10+", label: "Proyectos Completados" },
  { value: "5+", label: "Clientes Satisfechos" },
  { value: "99%", label: "Satisfacción" },
   */
]

// Definiendo los badges como constantes para facilitar su modificación
const badges = [
  {
    position: "top-left",
    icon: <Code className="text-purple-400 w-5 h-5" />,
    title: <span className="text-white/60">Perfil Técnico</span>,
    subtitle: <span><span className="text-rose-400/90">Desarrollo</span> y <span className="text-purple-400">Operaciones</span></span>,
    gradient: "from-blue-900 to-purple-900/40"
  },
  {
    position: "bottom-right",
    icon: <Award className="text-purple-400 w-5 h-5" />,
    title: <span className="text-purple-300">Stack Principal</span>,
    subtitle: <span className="text-blue-400">Next.js, Python</span>,
    gradient: "from-blue-900 to-purple-900/40"
  }
]

export default function About() {
  return (
    <section id="about" className="relative w-full py-12 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A4780] mb-2 md:mb-4 pb-1">Sobre Mí</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 100, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] group shadow-2xl">
                <Image
                  src="/FOTO.webp"
                  alt="Martin Beroiza"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Hover Overlay with Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/20 backdrop-blur-[2px]">
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-purple-600/50 rounded-xl z-0" />
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`absolute ${badge.position === "top-left" ? "-top-6 -left-6" : "-bottom-4 right-12"
                    } p-3 sm:p-4 bg-gradient-to-${badge.position === "top-left" ? "br" : "tr"
                    } from-pink-900 to-purple-900/40 backdrop-blur-sm rounded-xl border border-[#2a2a3e] z-20`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    {badge.icon}
                    <div className="text-xs sm:text-sm">
                      <p className="text-white/60">{badge.title}</p>
                      <p className="font-medium text-white">{badge.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-6"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-rose-400">
                  Martín Beroiza
                </span>
              </h3>
              <div className="flex items-center gap-2">
                <div className="h-[2px] w-12 bg-purple-500 rounded-full" />
                <span className="text-purple-400 font-medium tracking-widest uppercase text-xs sm:text-sm">
                  Desarrollador Full Stack
                </span>
                <span className="text-2xl animate-bounce">👋</span>
              </div>
            </motion.div>
            <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              Soy desarrollador de software enfocado en el diseño e implementación de sistemas internos. Mi experiencia ha estado orientada fundamentalmente a entornos operativos (como el sector salud), construyendo herramientas que digitalizan procesos manuales, centralizan la información y aseguran el correcto control de los datos.
            </p>
            <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              Trabajo principalmente con Python (Django/FastAPI), React/Next.js y bases de datos PostgreSQL. Me especializo en crear software útil que resuelva problemas del día a día, como sistemas de trazabilidad, administración de activos críticos o automatización de validaciones.
            </p>

            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Principios de Trabajo</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group bg-white/5 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden"
                  whileHover={{
                    y: -4,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div className="absolute -right-4 -top-4 w-12 h-12 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-2 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                    {value.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold mb-1 text-white group-hover:text-purple-300 transition-colors">{value.title}</h4>
                  <p className="text-white/60 text-[11px] sm:text-xs leading-snug">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const values = [
  {
    icon: <Code className="w-4 h-4 text-purple-400" />,
    title: "Código ordenado",
    description: "Priorizo arquitecturas limpias y legibles para facilitar el mantenimiento y la transferencia técnica.",
  },
  {
    icon: <Search className="w-4 h-4 text-purple-400" />,
    title: "Visión resolutiva",
    description: "Analizo el problema operativo de fondo antes de escribir la primera línea de código.",
  },
  {
    icon: <MessageSquare className="w-4 h-4 text-purple-400" />,
    title: "Integración de equipo",
    description: "Comunico avances y bloqueos de forma directa y oportuna para asegurar la continuidad del proyecto.",
  },
  {
    icon: <Target className="w-4 h-4 text-purple-400" />,
    title: "Autonomía en ejecución",
    description: "Asumo la responsabilidad técnica del flujo completo, desde el diseño de los datos hasta la puesta en marcha.",
  },
];

