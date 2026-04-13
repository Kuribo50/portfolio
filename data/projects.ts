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
    description: "Plataforma para consolidar archivos clínicos REM de forma masiva, reduciendo tareas manuales y tiempos de procesamiento mediante un flujo técnico estable y trazable.",
    image: "/imagesProyectos/consolidador/Inicio.png",
    tags: ["Next.js", "React", "TypeScript", "Python", "Pandas", "Polars", "Redis", "Docker"],
    liveUrl: "/projects/consolidador-rm",
    githubUrl: "https://github.com/Kuribo50/Consolidador-REM",
  },
  {
    title: "Sistema de Mantenciones",
    description: "Aplicación para la gestión de mantenimientos preventivos y correctivos de equipamiento clínico. Incluye flujos de trabajo guiados y dashboards para la trazabilidad operativa de activos institucionales.",
    image: "/imagesProyectos/Mantenciones/simac-logo.svg",
    tags: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "/projects/mantenciones",
    githubUrl: "https://github.com/Kuribo50/MantencionesSIMAC",
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

