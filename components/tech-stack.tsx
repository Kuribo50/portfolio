"use client"

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiAstro,
  SiReact,
  SiPython,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDotnet,
  SiKotlin,
  SiDjango
} from "react-icons/si"
import { motion } from "framer-motion"

const technologies = [
  {
    name: "HTML",
    icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" />,
    sizeClass: "col-span-1",
    category: "Frontend"
  },
  {
    name: "CSS",
    icon: <SiCss3 className="w-8 h-8 text-[#1572B6]" />,
    sizeClass: "col-span-1",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
    sizeClass: "col-span-1",
    category: "Frontend"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    sizeClass: "col-span-1",
    category: "Frontend"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-8 h-8" />,
    sizeClass: "col-span-1",
    category: "Frontend"
  },
  {
    name: "Astro",
    icon: <SiAstro className="w-8 h-8 text-[#FF5D01]" />,
    sizeClass: "col-span-1",
    category: "Frontend"
  },
  {
    name: "React",
    icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
    sizeClass: "col-span-1",
    category: "Frontend"
  },
  {
    name: "Python",
    icon: <SiPython className="w-8 h-8 text-[#0d3c72]" />,
    sizeClass: "col-span-1",
    category: "Backend"
  },
  {
    name: "Django",
    icon: <SiDjango className="w-8 h-8 text-[#188b31]" />,
    sizeClass: "col-span-1",
    category: "Backend"
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-8 h-8 text-[#a5b0b9]" />,
    sizeClass: "col-span-1",
    category: "Database"
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" />,
    sizeClass: "col-span-1",
    category: "Database"
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-8 h-8 text-[#2496ED]" />,
    sizeClass: "col-span-1",
    category: "DevOps"
  },
  {
    name: "Git",
    icon: <SiGit className="w-8 h-8 text-[#F05032]" />,
    sizeClass: "col-span-1",
    category: "DevOps"
  },
  {
    name: ".NET",
    icon: <SiDotnet className="w-8 h-8 text-[#512BD4]" />,
    sizeClass: "col-span-1",
    category: "Backend"
  },
  {
    name: "Kotlin",
    icon: <SiKotlin className="w-8 h-8 text-[#7F52FF]" />,
    sizeClass: "col-span-1",
    category: "Backend"
  },
]

export default function TechStack() {
  return (
    <section 
      id="tech-stack" 
      className="relative w-full py-12 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 1, y: 0 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.2 }}
        >
          <div className="text-left mb-8 md:mb-12">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 mb-2 md:mb-4 pb-1" 
              data-component-name="TechStack"
            >
              Tecnologías
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Frontend */}
            <div className="rounded-lg p-6 bg-transparent backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Frontend</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {technologies
                  .filter(tech => tech.category === "Frontend")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
                      }}
                      className="p-4 flex items-center justify-center flex-col bg-transparent backdrop-blur-sm rounded-xl border border-[#2a2a3e] transition-all duration-300 h-28 hover:border-purple-500"
                    >
                      <div className="mb-3">{tech.icon}</div>
                      <p className="text-white text-sm font-medium text-center">{tech.name}</p>
                    </motion.div>
                  ))}
              </div>
            </div>
            
            {/* Backend */}
            <div className="rounded-lg p-6 bg-transparent backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Backend</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies
                  .filter(tech => tech.category === "Backend")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
                      }}
                      className="p-4 flex items-center justify-center flex-col bg-transparent backdrop-blur-sm rounded-xl border border-[#2a2a3e] transition-all duration-300 h-28 hover:border-blue-500"
                    >
                      <div className="mb-3">{tech.icon}</div>
                      <p className="text-white text-sm font-medium text-center">{tech.name}</p>
                    </motion.div>
                  ))}
              </div>
            </div>
            
            {/* DevOps */}
            <div className="rounded-lg p-6 bg-transparent backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">DevOps</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies
                  .filter(tech => tech.category === "DevOps")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
                      }}
                      className="p-4 flex items-center justify-center flex-col bg-transparent backdrop-blur-sm rounded-xl border border-[#2a2a3e] transition-all duration-300 h-28 hover:border-green-500"
                    >
                      <div className="mb-3">{tech.icon}</div>
                      <p className="text-white text-sm font-medium text-center">{tech.name}</p>
                    </motion.div>
                  ))}
              </div>
            </div>
            
            {/* Base de Datos */}
            <div className="rounded-lg p-6 bg-transparent backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Base de Datos</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies
                  .filter(tech => tech.category === "Database")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
                      }}
                      className="p-4 flex items-center justify-center flex-col bg-transparent backdrop-blur-sm rounded-xl border border-[#2a2a3e] transition-all duration-300 h-28 hover:border-yellow-500"
                    >
                      <div className="mb-3">{tech.icon}</div>
                      <p className="text-white text-sm font-medium text-center">{tech.name}</p>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
