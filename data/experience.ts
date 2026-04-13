export interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
  type: "work" | "education"
}

export const timelineItems: TimelineItem[] = [
  {
    year: "2026 - En curso",
    title: "Ingeniería Civil Informática",
    company: "Universidad Andres Bello",
    description: "Continuidad de estudios profesionales para profundizar conocimientos teóricos y técnicos en ingeniería de software y gestión tecnológica.",
    type: "education",
  },
  {
    year: "Marzo 2025 - Presente",
    title: "Desarrollador Full Stack / Encargado Informático",
    company: "CESFAM Dr. Alberto Reyes - DISAM Tomé",
    description: "Desarrollo de sistemas internos para la digitalización de procesos clínicos y administrativos. Implementación de validación automática de población y sistemas de gestión para activos críticos e inventario institucional.",
    type: "work",
  },
  {
    year: "Nov. 2024 - Ene. 2025",
    title: "Desarrollador Full Stack - Práctica Profesional",
    company: "SERVIU - Ministerio de Vivienda y Urbanismo",
    description: "Desarrollo de plataforma web para la gestión de activos tecnológicos. Arquitectura basada en Django y PostgreSQL, desplegada con Docker y Nginx.",
    type: "work",
  },
  {
    year: "2023 - 2025",
    title: "Titulado Técnico de Nivel Superior en Analista Programador",
    company: "Instituto Profesional Dr. Virginio Gómez",
    description: "Formación técnica con enfoque en desarrollo de sistemas, bases de datos y metodologías ágiles.",
    type: "education",
  },
]
