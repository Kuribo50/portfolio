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
    icon: <Coffee className="text-purple-400 w-5 h-5" />,
    title: "Impulsado por",
    subtitle: <span><span className="text-amber-400">Café</span> y <span className="text-red-600/90">Pasión</span></span>,
    gradient: "from-blue-900 to-purple-900/40"
  },
  {
    position: "bottom-right",
    icon: <Award className="text-purple-400 w-5 h-5" />,
    title: "Certificado",
    subtitle: "Desarrollador Full Stack",
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
              <div className="relative z-10 rounded-xl overflow-hidden border border-[#2a2a3e] aspect-[4/5] group">
                <Image
                  src="/FOTO.webp"
                  alt="Martin Beroiza"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Hover Greeting */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-sm">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-purple-500/80 backdrop-blur-md px-8 py-4 rounded-full shadow-lg"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white">¡HOLA!</h3>
                  </motion.div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-purple-600/50 rounded-xl z-0" />
              {badges.map((badge, index) => (
                <div
                  key={badge.title}
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
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#6A4780] inline-flex items-center"
            >
              ¡Hola! Soy Martín Beroiza
            </motion.h3>
            <span className="text-2xl ml-2">👋</span>
            <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
              Tengo 22 años con formación como Analista Programador.
              Desde siempre me ha fascinado la tecnología, lo que me llevó aeqw iniciar mi carrera en el desarrollo
              de software hace unos años, con el objetivo de dejar una huella en el mundo a través de proyectos
              innovadores y desafiantes.
            </p>
            <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
              Aunque ya he completado mi formación académica, sigo comprometido con el aprendizaje continuo y la
              exploración de nuevas tecnologías para mantenerme a la vanguardia del desarrollo web. Cuando no estoy
              programando, me puedes encontrar leyendo sobre tendencias tecnológicas o experimentando con nuevos
              frameworks. Creo firmemente en crear tecnología que tenga un impacto positivo y mejore la vida de las personas.
            </p>

            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Mis Valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-transparent backdrop-blur-sm p-3 sm:p-4 rounded-xl border-2 border-purple-500/70 transition-all duration-300"
                  style={{
                    boxShadow: "0 0 10px rgba(168, 85, 247, 0.6), inset 0 0 5px rgba(168, 85, 247, 0.3)"
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 15px rgba(168, 85, 247, 0.8), inset 0 0 8px rgba(168, 85, 247, 0.5)"
                  }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-pink-900/30 flex items-center justify-center mb-2 sm:mb-3 border border-pink-800/50">
                    {value.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold mb-1 text-white">{value.title}</h4>
                  <p className="text-white/70 text-xs">{value.description}</p>
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
    icon: <Code className="w-5 h-5 text-purple-400" />,
    title: "Código Limpio",
    description: "Escribir código mantenible, eficiente y bien documentado es mi prioridad.",
  },
  {
    icon: <Search className="w-5 h-5 text-purple-400" />,
    title: "Curiosidad",
    description: "Siempre investigando nuevas tecnologías y metodos para resolver problemas.",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
    title: "Comunicación",
    description: "Trabajando eficazmente en equipo para lograr objetivos compartidos.",
  },
  {
    icon: <Target className="w-5 h-5 text-purple-400" />,
    title: "Autogestión",
    description: "Capacidad para organizar y gestionar proyectos de forma autónoma, asegurando calidad y cumplimiento.",
  },
];

