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
import { useState, useEffect } from "react"

const technologies = [
  {
    name: "HTML",
    icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS",
    icon: <SiCss3 className="w-8 h-8 text-[#1572B6]" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://www.typescriptlang.org/docs/"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-8 h-8" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://nextjs.org/docs"
  },
  {
    name: "Astro",
    icon: <SiAstro className="w-8 h-8 text-[#FF5D01]" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://docs.astro.build"
  },
  {
    name: "React",
    icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://react.dev"
  },
  {
    name: "Python",
    icon: <SiPython className="w-8 h-8 text-[#0d3c72]" />,
    sizeClass: "col-span-1",
    category: "Backend",
    docUrl: "https://docs.python.org"
  },
  {
    name: "Django",
    icon: <SiDjango className="w-8 h-8 text-[#188b31]" />,
    sizeClass: "col-span-1",
    category: "Backend",
    docUrl: "https://docs.djangoproject.com"
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-8 h-8 text-[#a5b0b9]" />,
    sizeClass: "col-span-1",
    category: "Database",
    docUrl: "https://dev.mysql.com/doc/"
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" />,
    sizeClass: "col-span-1",
    category: "Database",
    docUrl: "https://www.postgresql.org/docs/"
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-8 h-8 text-[#2496ED]" />,
    sizeClass: "col-span-1",
    category: "DevOps",
    docUrl: "https://docs.docker.com"
  },
  {
    name: "Git",
    icon: <SiGit className="w-8 h-8 text-[#F05032]" />,
    sizeClass: "col-span-1",
    category: "DevOps",
    docUrl: "https://git-scm.com/doc"
  },
  {
    name: ".NET",
    icon: <SiDotnet className="w-8 h-8 text-[#512BD4]" />,
    sizeClass: "col-span-1",
    category: "Backend",
    docUrl: "https://learn.microsoft.com/en-us/dotnet/"
  },
  {
    name: "Kotlin",
    icon: <SiKotlin className="w-8 h-8 text-[#7F52FF]" />,
    sizeClass: "col-span-1",
    category: "Backend",
    docUrl: "https://kotlinlang.org/docs/"
  },
]

// First, define TechCard component outside of the main component
const TechCard = ({ tech, borderColorClass }: { tech: any, borderColorClass: string }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      key={tech.name}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
      }}
      className={`p-4 flex items-center justify-center flex-col bg-transparent backdrop-blur-sm rounded-xl border border-[#2a2a3e] transition-all duration-300 h-28 hover:border-${borderColorClass} ${!isMobile ? 'cursor-pointer' : ''}`}
      onClick={() => !isMobile && window.open(tech.docUrl, '_blank')}
    >
      <div className="mb-3">{tech.icon}</div>
      <p className="text-white text-sm font-medium text-center">{tech.name}</p>
    </motion.div>
  );
};

// Then update the sections to use TechCard
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-3">
                {technologies
                  .filter(tech => tech.category === "Frontend")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((tech) => (
                    <TechCard key={tech.name} tech={tech} borderColorClass="purple-500" />
                  ))}
              </div>
            </div>
            
            {/* Backend */}
            <div className="rounded-lg p-6 bg-transparent backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Backend</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-3">
                {technologies
                  .filter(tech => tech.category === "Backend")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((tech) => (
                    <TechCard key={tech.name} tech={tech} borderColorClass="blue-500" />
                  ))}
              </div>
            </div>
            
            {/* DevOps */}
            <div className="rounded-lg p-6 bg-transparent backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">DevOps</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-3">
                {technologies
                  .filter(tech => tech.category === "DevOps")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((tech) => (
                    <TechCard key={tech.name} tech={tech} borderColorClass="green-500" />
                  ))}
              </div>
            </div>
            
            {/* Base de Datos */}
            <div className="rounded-lg p-6 bg-transparent backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Base de Datos</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-3">
                {technologies
                  .filter(tech => tech.category === "Database")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((tech) => (
                    <TechCard key={tech.name} tech={tech} borderColorClass="yellow-500" />
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
