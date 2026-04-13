import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiReact, 
  SiPython, 
  SiDjango, 
  SiFastapi, 
  SiNodedotjs, 
  SiPhp, 
  SiPostgresql, 
  SiPrisma, 
  SiGit,
  SiDocker,
  SiNginx,
  SiPandas,
  SiSqlite,
  SiTailwindcss
} from "react-icons/si"
import { FaDatabase, FaChartBar, FaFileExcel, FaMicrosoft } from "react-icons/fa6"
import React from 'react'

export interface Technology {
  name: string
  icon: React.ReactNode
  category: string
  docUrl: string
  hoverColor: string
}

export const technologies: Technology[] = [
  // Frontend
  {
    name: "Next.js",
    icon: React.createElement(SiNextdotjs, { className: "w-8 h-8 text-white" }),
    category: "Frontend",
    docUrl: "https://nextjs.org/docs",
    hoverColor: "hover:bg-gray-800/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
  },
  {
    name: "React",
    icon: React.createElement(SiReact, { className: "w-8 h-8 text-[#61DAFB]" }),
    category: "Frontend",
    docUrl: "https://react.dev",
    hoverColor: "hover:bg-[#61DAFB]/20 hover:shadow-[0_0_20px_rgba(97,218,251,0.3)]"
  },
  {
    name: "JavaScript",
    icon: React.createElement(SiJavascript, { className: "w-8 h-8 text-[#F7DF1E]" }),
    category: "Frontend",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    hoverColor: "hover:bg-[#F7DF1E]/20 hover:shadow-[0_0_20px_rgba(247,223,30,0.3)]"
  },
  {
    name: "TypeScript",
    icon: React.createElement(SiTypescript, { className: "w-8 h-8 text-[#3178C6]" }),
    category: "Frontend",
    docUrl: "https://www.typescriptlang.org/",
    hoverColor: "hover:bg-[#3178C6]/20 hover:shadow-[0_0_20px_rgba(49,120,198,0.3)]"
  },
  {
    name: "Tailwind",
    icon: React.createElement(SiTailwindcss, { className: "w-8 h-8 text-[#38B2AC]" }),
    category: "Frontend",
    docUrl: "https://tailwindcss.com/",
    hoverColor: "hover:bg-[#38B2AC]/20 hover:shadow-[0_0_20px_rgba(56,178,172,0.3)]"
  },
  // Backend
  {
    name: "Python",
    icon: React.createElement(SiPython, { className: "w-8 h-8 text-[#3776AB]" }),
    category: "Backend",
    docUrl: "https://docs.python.org",
    hoverColor: "hover:bg-[#3776AB]/20 hover:shadow-[0_0_20px_rgba(55,118,171,0.3)]"
  },
  {
    name: "Django",
    icon: React.createElement(SiDjango, { className: "w-8 h-8 text-[#092E20]" }),
    category: "Backend",
    docUrl: "https://docs.djangoproject.com",
    hoverColor: "hover:bg-[#092E20]/20 hover:shadow-[0_0_20px_rgba(9,46,32,0.3)]"
  },
  {
    name: "FastAPI",
    icon: React.createElement(SiFastapi, { className: "w-8 h-8 text-[#05998B]" }),
    category: "Backend",
    docUrl: "https://fastapi.tiangolo.com/",
    hoverColor: "hover:bg-[#05998B]/20 hover:shadow-[0_0_20px_rgba(5,153,139,0.3)]"
  },
  {
    name: "Node.js",
    icon: React.createElement(SiNodedotjs, { className: "w-8 h-8 text-[#339933]" }),
    category: "Backend",
    docUrl: "https://nodejs.org/",
    hoverColor: "hover:bg-[#339933]/20 hover:shadow-[0_0_20px_rgba(51,153,51,0.3)]"
  },
  {
    name: "PHP",
    icon: React.createElement(SiPhp, { className: "w-8 h-8 text-[#777BB4]" }),
    category: "Backend",
    docUrl: "https://www.php.net/",
    hoverColor: "hover:bg-[#777BB4]/20 hover:shadow-[0_0_20px_rgba(119,123,180,0.3)]"
  },
  // Bases de datos
  {
    name: "PostgreSQL",
    icon: React.createElement(SiPostgresql, { className: "w-8 h-8 text-[#4169E1]" }),
    category: "Bases de datos",
    docUrl: "https://www.postgresql.org/",
    hoverColor: "hover:bg-[#4169E1]/20 hover:shadow-[0_0_20px_rgba(65,105,225,0.3)]"
  },
  {
    name: "SQL",
    icon: React.createElement(SiSqlite, { className: "w-8 h-8 text-[#003B57]" }),
    category: "Bases de datos",
    docUrl: "https://en.wikipedia.org/wiki/SQL",
    hoverColor: "hover:bg-[#003B57]/20 hover:shadow-[0_0_20px_rgba(0,59,87,0.3)]"
  },
  {
    name: "Prisma",
    icon: React.createElement(SiPrisma, { className: "w-8 h-8 text-white" }),
    category: "Bases de datos",
    docUrl: "https://www.prisma.io/",
    hoverColor: "hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
  },
  // Datos y análisis
  {
    name: "Pandas",
    icon: React.createElement(SiPandas, { className: "w-8 h-8 text-[#150458]" }),
    category: "Datos y análisis",
    docUrl: "https://pandas.pydata.org/",
    hoverColor: "hover:bg-[#150458]/20 hover:shadow-[0_0_20px_rgba(21,4,88,0.3)]"
  },
  {
    name: "Power BI",
    icon: React.createElement(FaChartBar, { className: "w-8 h-8 text-[#F2C811]" }),
    category: "Datos y análisis",
    docUrl: "https://powerbi.microsoft.com/",
    hoverColor: "hover:bg-[#F2C811]/20 hover:shadow-[0_0_20px_rgba(242,200,17,0.3)]"
  },
  {
    name: "Excel",
    icon: React.createElement(FaFileExcel, { className: "w-8 h-8 text-[#217346]" }),
    category: "Datos y análisis",
    docUrl: "https://www.microsoft.com/excel",
    hoverColor: "hover:bg-[#217346]/20 hover:shadow-[0_0_20px_rgba(33,115,70,0.3)]"
  },
  {
    name: "Access",
    icon: React.createElement(FaMicrosoft, { className: "w-8 h-8 text-[#A4373A]" }),
    category: "Datos y análisis",
    docUrl: "https://www.microsoft.com/access",
    hoverColor: "hover:bg-[#A4373A]/20 hover:shadow-[0_0_20px_rgba(164,55,58,0.3)]"
  },
  // Infraestructura
  {
    name: "Docker",
    icon: React.createElement(SiDocker, { className: "w-8 h-8 text-[#2496ED]" }),
    category: "Infraestructura",
    docUrl: "https://www.docker.com/",
    hoverColor: "hover:bg-[#2496ED]/20 hover:shadow-[0_0_20px_rgba(36,150,237,0.3)]"
  },
  {
    name: "Nginx",
    icon: React.createElement(SiNginx, { className: "w-8 h-8 text-[#009639]" }),
    category: "Infraestructura",
    docUrl: "https://www.nginx.com/",
    hoverColor: "hover:bg-[#009639]/20 hover:shadow-[0_0_20px_rgba(0,150,57,0.3)]"
  },
  {
    name: "Git",
    icon: React.createElement(SiGit, { className: "w-8 h-8 text-[#F05032]" }),
    category: "Herramientas",
    docUrl: "https://git-scm.com/",
    hoverColor: "hover:bg-[#F05032]/20 hover:shadow-[0_0_20px_rgba(240,80,50,0.3)]"
  },
]

export const methodologies = [
  "Scrum", "Kanban"
]
