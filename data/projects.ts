export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: "Consolidador RM",
    description: "Sistema para la consolidación masiva de resoluciones médicas. Optimiza el procesamiento de datos clínicos mediante parseo eficiente de CSV, reduciendo tiempos de gestión a menos de 15 segundos con validación en tiempo real.",
    image: "/imagesProyectos/consolidador/Inicio.png",
    tags: ["Next.js", "Python", "Polars", "Tailwind CSS"],
    liveUrl: "/projects/consolidador-rm",
    githubUrl: "https://github.com/Kuribo50/Consolidador-REM",
  },
  {
    title: "Sistema de Mantenciones",
    description: "Aplicación para la gestión de mantenimientos preventivos y correctivos de equipamiento clínico. Incluye flujos de trabajo guiados y dashboards para la trazabilidad operativa de activos institucionales.",
    image: "/imagesProyectos/SBSERVIU/Foto3.webp",
    tags: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "/projects/mantenciones",
    githubUrl: "#",
  },
  {
    title: "Sistema de Convenios",
    description: "Plataforma técnica para la administración y validación de convenios de salud. Automatiza la revisión clínica y el control administrativo de recursos, eliminando cuellos de botella en los flujos de aprobación.",
    image: "/imagesProyectos/SBSERVIU/Foto4.webp",
    tags: ["FastAPI", "React", "PostgreSQL", "Docker"],
    liveUrl: "/projects/convenios",
    githubUrl: "#",
  },
  {
    title: "Intranet Institucional",
    description: "Portal centralizado para la gestión de información interna y herramientas operativas. Facilita el acceso a recursos críticos y optimiza la comunicación administrativa en recintos de salud.",
    image: "/imagesProyectos/SBSERVIU/ServiuFoto.webp",
    tags: ["Django", "Python", "PostgreSQL", "Next.js"],
    liveUrl: "/projects/intranet",
    githubUrl: "#",
  },
  {
    title: "Sistema de bodega SERVIU",
    description: "Gestión automatizada de inventario tecnológico para SERVIU Biobío. Control de stock, movimientos de activos y trazabilidad de préstamos mediante una arquitectura basada en Django y PostgreSQL.",
    image: "/imagesProyectos/SBSERVIU/ServiuFoto.webp",
    tags: ["Next.js", "Django", "PostgreSQL", "Docker", "Tailwind CSS"],
    liveUrl: "/projects/serviu",
    githubUrl: "https://github.com/Kuribo50/Gestion-de-inventario",
  },
]

