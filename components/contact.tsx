"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { useState, useRef } from "react"
import emailjs from 'emailjs-com'
import { toast } from 'sonner'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    last_name: "", // Campo Honeypot (oculto para humanos, bots lo llenan)
  })

  const SERVICE_ID = "service_tqvv3yc";
  const TEMPLATE_ID = "template_ghdxwx1";
  const PUBLIC_KEY = "NQRoGUsW1vuS6GgSt";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Detección de Bots (Honeypot)
    if (formData.last_name !== "") {
      console.log("Bot detectado");
      return;
    }

    // 2. Restricción de envío múltiple (Rate Limiting Local)
    const LAST_SEND_TIME = localStorage.getItem('last_contact_send');
    const COOLDOWN_MS = 60000; // 1 minuto de restricción

    if (LAST_SEND_TIME && (Date.now() - parseInt(LAST_SEND_TIME)) < COOLDOWN_MS) {
      toast.error('Por favor, espera un momento antes de enviar otro mensaje.');
      return;
    }

    if (status === 'sending') return;

    setStatus('sending');
    const toastId = toast.loading('Enviando mensaje...');

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY
      );

      setStatus('success');
      toast.success('¡Mensaje enviado con éxito!', { id: toastId });
      
      // Guardar timestamp del último envío exitoso
      localStorage.setItem('last_contact_send', Date.now().toString());

      setFormData({ name: "", email: "", message: "", last_name: "" });
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error("Error al enviar con EmailJS:", error);
      setStatus('error');
      toast.error('Error al enviar. Por favor intenta de nuevo.', { id: toastId });
      setTimeout(() => setStatus('idle'), 3000);
    }
  }

  return (
    <section id="contact" className="relative w-full py-12 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl">
        <motion.div className="text-left mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A4780] mb-2 md:mb-4 pb-1">Contáctame</h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl">
            Si tienes una propuesta profesional o necesitas ayuda con el desarrollo de un sistema interno, puedes contactarme a través del siguiente formulario.
          </p>
        </motion.div>
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#6A4780]">Disponibilidad Profesional</h3>
            <p className="text-white/80 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              Respondo a consultas sobre desarrollo de software, automatización de procesos y gestión de datos. 
              Mi enfoque actual está en la creación de herramientas digitales que resuelvan necesidades operativas concretas.
            </p>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-pink-900/30 flex items-center justify-center mr-4 border border-pink-800/50 group-hover:border-pink-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Correo Electrónico</p>
                  <a href="mailto:martin.beroiza0@gmail.com" className="font-medium text-white hover:text-pink-400 transition-colors">martin.beroiza0@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-pink-900/30 flex items-center justify-center mr-4 border border-pink-800/50 group-hover:border-pink-500/50 transition-colors">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Ubicación</p>
                  <p className="font-medium text-white">Concepción, Chile</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-4 text-white">Redes Profesionales</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/Kuribo50", color: "#6e5494", label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/martinberoiza/", color: "#0077B5", label: "LinkedIn" },
                  { icon: <Mail className="w-5 h-5" />, href: "mailto:martin.beroiza0@gmail.com", color: "#EA4335", label: "Email" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-all duration-300"
                    style={{ backgroundColor: social.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-transparent backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#2a2a3e] hover:border-purple-500/30 transition-all duration-500 glass-card shadow-2xl relative overflow-hidden"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Consulta Profesional</h3>

              <div className="space-y-5">
                {/* Honeypot field - Hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <input 
                    type="text" 
                    name="last_name" 
                    value={formData.last_name}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div className="relative">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu Nombre" 
                    required 
                    className="w-full px-4 py-3 bg-black/40 border border-[#2a2a3e] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all" 
                  />
                </div>

                <div className="relative">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu Correo Electrónico" 
                    required 
                    className="w-full px-4 py-3 bg-black/40 border border-[#2a2a3e] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all" 
                  />
                </div>

                <div className="relative">
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensaje o consulta" 
                    required 
                    rows={5} 
                    className="w-full px-4 py-3 bg-black/40 border border-[#2a2a3e] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white resize-none transition-all" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg
                    ${status === 'success' ? 'bg-emerald-500 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 hover:shadow-purple-500/20'}
                    ${status === 'sending' ? 'opacity-70 cursor-wait' : ''}
                  `}
                >
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                        <CheckCircle2 size={20} /> ¡Mensaje Enviado!
                      </motion.div>
                    ) : status === 'sending' ? (
                      <motion.div key="sending" className="flex items-center gap-2">
                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Enviando...
                      </motion.div>
                    ) : (
                      <motion.div key="idle" className="flex items-center gap-2">
                        Enviar Mensaje <Send size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

