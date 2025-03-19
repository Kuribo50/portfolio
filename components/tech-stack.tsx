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
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    hoverColor: "hover:bg-[#E34F26]/40"
  },
  {
    name: "CSS",
    icon: <SiCss3 className="w-8 h-8 text-[#1572B6]" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    hoverColor: "hover:bg-[#1572B6]/40"
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    hoverColor: "hover:bg-[#F7DF1E]/40"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://www.typescriptlang.org/docs/",
    hoverColor: "hover:bg-[#3178C6]/40"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-8 h-8 text-black" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://nextjs.org/docs",
    hoverColor: "hover:bg-[#000000]/40"
  },
  {
    name: "Astro",
    icon: <SiAstro className="w-8 h-8 text-[#FF5D01]" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://docs.astro.build",
    hoverColor: "hover:bg-[#FF5D01]/40"
  },
  {
    name: "React",
    icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
    sizeClass: "col-span-1",
    category: "Frontend",
    docUrl: "https://react.dev",
    hoverColor: "hover:bg-[#61DAFB]/40"
  },
  {
    name: "Python",
    icon: <SiPython className="w-8 h-8 text-[#0d3c72]" />,
    sizeClass: "col-span-1",
    category: "Backend",
    docUrl: "https://docs.python.org",
    hoverColor: "hover:bg-[#0d3c72]/40"
  },
  {
    name: "Django",
    icon: <SiDjango className="w-8 h-8 text-[#188b31]" />,
    sizeClass: "col-span-1",
    category: "Backend",
    docUrl: "https://docs.djangoproject.com",
    hoverColor: "hover:bg-[#188b31]/40"
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-8 h-8 text-[#a5b0b9]" />,
    sizeClass: "col-span-1",
    category: "Database",
    docUrl: "https://dev.mysql.com/doc/",
    hoverColor: "hover:bg-[#a5b0b9]/40"
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" />,
    sizeClass: "col-span-1",
    category: "Database",
    docUrl: "https://www.postgresql.org/docs/",
    hoverColor: "hover:bg-[#4169E1]/40"
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-8 h-8 text-[#2496ED]" />,
    sizeClass: "col-span-1",
    category: "DevOps",
    docUrl: "https://docs.docker.com",
    hoverColor: "hover:bg-[#2496ED]/40"
  },
  {
    name: "Git",
    icon: <SiGit className="w-8 h-8 text-[#F05032]" />,
    sizeClass: "col-span-1",
    category: "DevOps",
    docUrl: "https://git-scm.com/doc",
    hoverColor: "hover:bg-[#F05032]/40"
  },
  {
    name: ".NET",
    icon: <SiDotnet className="w-8 h-8 text-[#512BD4]" />,
    sizeClass: "col-span-1",
    category: "Backend",
    docUrl: "https://learn.microsoft.com/en-us/dotnet/",
    hoverColor: "hover:bg-[#512BD4]/40"
  },
  {
    name: "Kotlin",
    icon: <SiKotlin className="w-8 h-8 text-[#7F52FF]" />,
    sizeClass: "col-span-1",
    category: "Backend",
    docUrl: "https://kotlinlang.org/docs/",
    hoverColor: "hover:bg-[#7F52FF]/40"
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
      className={`relative flex flex-col items-center px-4 py-5 rounded-lg bg-white backdrop-blur-sm border border-${borderColorClass} 
        transition-all duration-300 ${tech.hoverColor} hover:-translate-y-1 cursor-pointer neon-border glass-card shadow-lg shadow-${borderColorClass} hover:shadow-${borderColorClass}/50`}
      whileHover={{ scale: 1.05 }}
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
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A4780] mb-2 md:mb-4 pb-1" 
              data-component-name="TechStack"
            >
              Tecnologías
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Frontend */}
            <div className="rounded-lg p-6 bg-transparent backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-[#6A4780] mb-4">Frontend</h3>
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
              <h3 className="text-xl md:text-2xl font-semibold text-[#6A4780] mb-4">Backend</h3>
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
              <h3 className="text-xl md:text-2xl font-semibold text-[#6A4780] mb-4">DevOps</h3>
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
              <h3 className="text-xl md:text-2xl font-semibold text-[#6A4780] mb-4">Base de Datos</h3>
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
