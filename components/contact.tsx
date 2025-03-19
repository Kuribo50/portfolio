"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    
  }

  return (
    // Example contact section standardization (if exists)
    <section id="contact" className="relative w-full py-12 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl">
        <motion.div className="text-left mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A4780] mb-2 md:mb-4 pb-1">Contáctame</h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl">
            ¿Tienes un proyecto en mente o quieres discutir oportunidades potenciales? ¡Me encantaría escucharte!
          </p>
        </motion.div>
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#6A4780]">Información de Contacto</h3>
            <p className="text-white/80 mb-6 text-sm sm:text-base md:text-lg">
              No dudes en contactarme a través de cualquiera de estos métodos. Estoy abierto a discutir nuevos proyectos,
              ideas creativas u oportunidades para ser parte de tu visión ¡Me encantaría escucharte!.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-pink-900/30 flex items-center justify-center mr-4 border border-pink-800/50">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Correo</p>
                  <p className="font-medium text-white">martin.beroiza0@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-pink-900/30 flex items-center justify-center mr-4 border border-pink-800/50">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Ubicación</p>
                  <p className="font-medium text-white">Concepcion, Chile</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-4 text-white">Conéctate conmigo</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Kuribo50"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#6e5494] hover:bg-[#6e5494]/80 transition-all duration-300"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-white group-hover:scale-125 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/martinberoiza/"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5] hover:bg-[#0077B5]/80 transition-all duration-300"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:scale-125 transition-transform duration-300" />
                </a>
                <a
                  href="mailto:martin.beroiza0@gmail.com"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#EA4335] hover:bg-[#EA4335]/80 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-white group-hover:scale-125 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form action="https://airform.io/martin.beroiza0@gmail.com" method="post" className="bg-transparent backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-[#2a2a3e] hover:border-purple-500 transition-all duration-300 neon-border glass-card">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Enviar un Mensaje</h3>

              <div className="space-y-5">
                <div>
                  <input type="text" name="name" placeholder="Tu Nombre" required className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white" />
                </div>

                <div>
                  <textarea name="message" placeholder="Escribe tu mensaje aquí..." required rows={5} className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white resize-none" />
                </div>

                <button type="submit" className="w-full py-3 px-6 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                  Enviar Mensaje <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

