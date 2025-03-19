"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Sistema de bodega SERVIU",
    description: "Sistema de gestión de inventario para bodegas públicas con seguimiento en tiempo real, reportes automatizados y control de acceso biométrico.",
    image: "/imagesProyectos/SBSERVIU/ServiuFoto.webp",
    tags: ["Next.js", "JavaScript", "Python", "Django", "Tailwind", "PostgreSQL", "Docker"],
    liveUrl: "/projects/serviu",
    githubUrl: "https://github.com/Kuribo50/Gestion-de-inventario",
  },
]

// Function to get tag style based on tag name
const getTagStyle = (tag: string) => {
  const tagLower = tag.toLowerCase()

  switch (tagLower) {
    case "mysql":
      return "bg-blue-900/30 text-blue-300 border-blue-800"
    case "mongodb":
      return "bg-green-900/30 text-green-300 border-green-800"
    case "next.js":
    case "nextjs":
      return "bg-gray-900/30 text-gray-300 border-gray-800"
    case "python":
      return "bg-green-900/30 text-green-300 border-green-800"
    case "javascript":
      return "bg-yellow-900/30 text-yellow-300 border-yellow-800"
    case "typescript":
      return "bg-blue-900/30 text-blue-300 border-blue-800"
    case "tailwind":
    case "tailwind css":
      return "bg-cyan-900/30 text-cyan-300 border-cyan-800"
    case "react":
      return "bg-cyan-900/30 text-cyan-300 border-cyan-800"
    case "node.js":
      return "bg-green-900/30 text-green-300 border-green-800"
    case "stripe":
      return "bg-purple-900/30 text-purple-300 border-purple-800"
    case "postgresql":
      return "bg-blue-900/30 text-blue-300 border-blue-800"
    case "openai api":
      return "bg-green-900/30 text-green-300 border-green-800"
    case "web3.js":
    case "ethers.js":
      return "bg-purple-900/30 text-purple-300 border-purple-800"
    case "socket.io":
    case "webrtc":
    case "redis":
      return "bg-red-900/30 text-red-300 border-red-800"
    case "django":
      return "bg-green-900/30 text-green-300 border-green-800"
    case "docker":
      return "bg-blue-900/30 text-blue-300 border-blue-800"
    default:
      return "bg-gray-900/30 text-gray-300 border-gray-800"
  }
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-12 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 mb-2 md:mb-4 pb-1">Proyectos Destacados</h2>
          </div>
            {/* comentado para poder ocuparlo cuando hayan mas proyectos para mostrar
            <Link
            href="#"
            className="mt-6 md:mt-0 text-purple-400 flex items-center gap-2 hover:text-purple-300 transition-colors relative group"
          >
            Ver Todos <ArrowUpRight size={16} />*/}

            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative block rounded-xl 
                transition-all duration-300 hover:-translate-y-1
                overflow-hidden border border-[#2a2a3e] hover:border-purple-500
                bg-transparent backdrop-blur-sm h-full"
              whileHover={{ 
                boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)"
              }}
            >
              <div className="relative bg-transparent backdrop-blur-sm rounded-xl p-5 z-10 h-full flex flex-col">
                <div className="flex flex-col gap-4 flex-grow">
                  <div className="aspect-video overflow-hidden rounded-xl relative group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      width={600}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 rounded-full w-10 h-10 
                          flex items-center justify-center transform translate-y-2 opacity-0 
                          group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="bg-purple-600 rounded-full w-10 h-10 
                          flex items-center justify-center transform translate-y-2 opacity-0 
                          group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <a href={project.liveUrl} className="group-hover:text-purple-400 transition-colors duration-300">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 relative inline-block text-white">
                        {project.title}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                      </h3>
                    </a>
                    <p className="text-white/80 mb-4 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => {
                      const TagIcon = getTagIcon(tag);
                      return (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1.5 text-xs rounded-full border font-medium
                            transition-colors duration-200 flex items-center gap-1.5 ${getTagStyle(tag)}`}
                        >
                          {TagIcon && <TagIcon className="w-3.5 h-3.5" />}
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-xl bg-transparent backdrop-blur-sm border border-[#2a2a3e] hover:border-purple-500"
          whileHover={{ 
            boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)"
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">¿Necesitas un proyecto personalizado?</h3>
              <p className="text-white/80">Hablemos sobre tus ideas y creemos algo increíble juntos.</p>
            </div>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium flex items-center gap-2 hover:opacity-90 transition-all whitespace-nowrap"
            >
              Contáctame <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Función para obtener el icono correspondiente a cada tag
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiStripe,
  SiOpenai,
  SiWeb3Dotjs,
  SiSocketdotio,
  SiRedis,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiMysql,
  SiDjango,
  SiDocker
} from "react-icons/si";

const getTagIcon = (tag: string) => {
  const tagLower = tag.toLowerCase();
  
  switch (tagLower) {
    case "next.js":
    case "nextjs":
      return SiNextdotjs;
    case "typescript":
      return SiTypescript;
    case "react":
      return SiReact;
    case "node.js":
      return SiNodedotjs;
    case "mongodb":
      return SiMongodb;
    case "postgresql":
      return SiPostgresql;
    case "stripe":
      return SiStripe;
    case "openai api":
      return SiOpenai;
    case "web3.js":
      return SiWeb3Dotjs;
    case "ethers.js":
      return SiWeb3Dotjs;
    case "socket.io":
      return SiSocketdotio;
    case "webrtc":
      return null;
    case "redis":
      return SiRedis;
    case "tailwind":
    case "tailwind css":
      return SiTailwindcss;
    case "javascript":
      return SiJavascript;
    case "python":
      return SiPython;
    case "mysql":
      return SiMysql;
    case "django":
      return SiDjango;
    case "docker":
      return SiDocker;
    default:
      return null;
  }
};

