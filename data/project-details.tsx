import {
  Clock,
  Users,
  Database,
  Shield,
  LogIn,
  LayoutDashboard,
  PackagePlus,
  PackageMinus,
  RefreshCcw,
  PackageSearch,
  History,
  ClipboardList,
  Share2,
  Settings,
  UserCog,
  Github,
  Zap,
  FileSpreadsheet,
  FileCheck2,
  LayoutTemplate,
} from "lucide-react";
import React from "react";

export const projectDetails: Record<string, any> = {
  "consolidador-rm": {
    presentationData: {
      title: "Consolidador REM",
      description:
        "Plataforma web para consolidación masiva de archivos clínicos REM, orientada a reemplazar tareas manuales con un flujo técnico más rápido, consistente y trazable en escenarios de alto volumen.",
      image: "/imagesProyectos/consolidador/Inicio.png",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Pandas",
        "Polars",
        "BullMQ",
        "Redis",
        "Tailwind CSS",
        "Docker",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Kuribo50/Consolidador-REM",
      duration: "1 mes",
      team: "1 persona",
      year: "2026",
      client: "Interno",
    },

    contextData: {
      title: "Contexto y desafío operativo",
      description:
        "La consolidación de archivos clínicos dependía de tareas manuales en Excel para unificar datos descargados desde el sistema clínico. Esto generaba demoras importantes, errores recurrentes y una alta dependencia de procesos repetitivos. La necesidad principal era contar con una herramienta capaz de procesar grandes volúmenes de archivos CSV y ZIP de forma rápida, confiable y con una salida estandarizada para análisis y uso operativo.",
      image: "/imagesProyectos/consolidador/Inicio.png",
      subtitle: "Principales desafíos técnicos:",
      challenges: [
        "Procesamiento manual lento y propenso a errores en archivos clínicos de gran volumen.",
        "Bloqueos de memoria y bajo rendimiento al trabajar con múltiples archivos CSV desde herramientas tradicionales.",
        "Variabilidad en estructuras, columnas, codificaciones y separadores entre archivos de origen.",
        "Necesidad de controlar la concurrencia para evitar saturación del sistema durante cargas pesadas.",
      ],
      conclusion:
        "Desarrollé un Consolidador REM para automatizar la consolidación masiva de archivos clínicos, estandarizando la salida en un formato único y reduciendo drásticamente los tiempos de procesamiento: desde flujos manuales de varias horas a ejecuciones de entre 20 y 30 segundos en cargas exigentes, con resultados inferiores a 15 segundos en escenarios optimizados.",
    },

    developmentProcess: [
      {
        title: "Normalización de archivos de entrada",
        description:
          "Se implementó una lógica de normalización para interpretar archivos CSV clínicos con estructuras variables, incluyendo diferencias en nombres de columnas, codificaciones, separadores y posición de campos. Esta etapa permitió reducir significativamente la intervención manual previa a la consolidación y disminuir errores frecuentes en la preparación de datos.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Primera etapa con Python",
        description:
          "La primera versión del procesamiento fue desarrollada con Python, priorizando validar la lógica de lectura, limpieza y unificación de archivos. Aunque resolvió el problema inicial, el rendimiento seguía siendo limitado frente a archivos más pesados o múltiples cargas consecutivas.",
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Optimización intermedia con Pandas",
        description:
          "Posteriormente, el motor fue migrado a Pandas para mejorar la manipulación tabular y reducir los tiempos de procesamiento. Esta etapa permitió una mejora importante respecto de la versión inicial, aunque los tiempos seguían siendo variables y podían fluctuar entre 60 y 300 segundos según el volumen y la complejidad de los archivos.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Optimización final con Polars",
        description:
          "La etapa final consistió en migrar el procesamiento intensivo a Polars, logrando una mejora sustancial en velocidad y eficiencia de memoria. Con ello, las consolidaciones bajaron a rangos aproximados de 20 a 30 segundos en cargas exigentes, alcanzando tiempos inferiores a 15 segundos en escenarios optimizados.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Implementación de cola de procesamiento",
        description:
          "Para evitar saturación en escenarios con múltiples solicitudes simultáneas, se incorporó una cola de espera utilizando BullMQ y Redis. Esto permitió ordenar tareas pesadas, desacoplar el procesamiento del flujo principal de la aplicación y mejorar la estabilidad general del sistema bajo carga.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Dockerización y despliegue",
        description:
          "La aplicación fue dockerizada para facilitar su despliegue, portabilidad y mantenimiento entre distintos entornos. Esto permitió estandarizar la ejecución de servicios, simplificar la configuración técnica y dejar la solución preparada para despliegues más consistentes.",
        image:
          "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1200&auto=format&fit=crop",
      },
    ],

    features: [
      {
        icon: <Zap className="w-8 h-8 text-purple-500" />,
        title: "Pantalla de inicio",
        longDescription:
          "Presenta una vista inicial clara del sistema, orientada a que el usuario comprenda rápidamente el flujo de consolidación y acceda al procesamiento de archivos de forma simple y ordenada.",
        image: "/imagesProyectos/consolidador/Inicio.png",
      },
      {
        icon: <FileSpreadsheet className="w-8 h-8 text-purple-500" />,
        title: "Carga inteligente de archivos",
        longDescription:
          "Permite cargar archivos CSV y ZIP de manera rápida, detectando automáticamente variaciones frecuentes en estructura, codificación, separadores y formato de origen para facilitar la consolidación masiva.",
        image: "/imagesProyectos/consolidador/Seleccion.png",
      },
      {
        icon: <LayoutDashboard className="w-8 h-8 text-purple-500" />,
        title: "Procesamiento y seguimiento",
        longDescription:
          "Entrega retroalimentación clara durante la ejecución, mostrando el estado del procesamiento y mejorando la confiabilidad de tareas de consolidación intensiva.",
        image: "/imagesProyectos/consolidador/Procesando.png",
      },
      {
        icon: <RefreshCcw className="w-8 h-8 text-purple-500" />,
        title: "Cola de procesamiento",
        longDescription:
          "Administra tareas pesadas de forma ordenada, evitando la saturación del sistema y mejorando la estabilidad cuando existen múltiples solicitudes simultáneas.",
        image: "/imagesProyectos/consolidador/Procesando.png",
      },
      {
        icon: <FileCheck2 className="w-8 h-8 text-purple-500" />,
        title: "Exportación unificada",
        longDescription:
          "Genera un resultado final consolidado y estructurado en un formato único, listo para descarga, análisis posterior o integración con otros procesos administrativos y estadísticos.",
        image: "/imagesProyectos/consolidador/Final.png",
      },
      {
        icon: <Settings className="w-8 h-8 text-purple-500" />,
        title: "Despliegue con Docker",
        longDescription:
          "La solución fue preparada para ejecutarse en contenedores, facilitando su instalación, mantenimiento y despliegue en distintos entornos de forma consistente.",
        image: "/imagesProyectos/consolidador/ModoNoche.png",
      },
    ],
  },

  mantenciones: {
    presentationData: {
      title: "SIMAC — Control de Mantenciones Clínicas e Infraestructura para CESFAM",
      description:
        "Plataforma web institucional para gestionar mantenciones preventivas y correctivas, equipos, pautas, planificación, trazabilidad y analítica operativa en un solo entorno.",
      image: "/imagesProyectos/Mantenciones/simac-logo.svg",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Docker",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Kuribo50/MantencionesSIMAC",
      duration: "4 meses",
      team: "1 persona",
      year: "2026",
      client: "Institucional / Salud / Sistema interno",
    },

    contextData: {
      title: "Contexto y desafío operativo",
      description:
        "Antes de SIMAC, la gestión de mantenciones dependía de seguimiento manual y registros dispersos. Esa forma de trabajo dificultaba conocer el estado operativo de los equipos, programar tareas a tiempo y sostener una trazabilidad histórica útil para supervisión.",
      image: "/imagesProyectos/Mantenciones/LoginSimac.png",
      subtitle: "Principales riesgos operativos:",
      challenges: [
        "Baja visibilidad de vencimientos y tareas críticas por falta de un tablero unificado.",
        "Programación mensual frágil al depender de planillas y seguimiento manual.",
        "Historial técnico incompleto por equipo, afectando continuidad y auditoría interna.",
        "Supervisión limitada por ausencia de indicadores operativos consolidados.",
      ],
      conclusion:
        "SIMAC centraliza equipos, pautas, órdenes, agenda, analítica y cierre documental en una sola plataforma. En la muestra visible del sistema se observan 63 equipos registrados, 63 operativos, 95% de cumplimiento, 9 mantenciones vencidas y flujo de solicitud en 4 pasos.",
    },

    developmentProcess: [
      {
        title: "Origen del proyecto y diagnóstico",
        description:
          "SIMAC surgió por una necesidad institucional concreta: ordenar mantenciones que se seguían de forma dispersa. El levantamiento inicial permitió identificar brechas de planificación, trazabilidad y control, y convertirlas en requerimientos funcionales claros.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Planificación técnica y arquitectura",
        description:
          "Se eligió Next.js para integrar frontend y backend en una sola base mantenible, y Prisma para modelar datos con consistencia. SQLite se utilizó para acelerar iteración en desarrollo y PostgreSQL quedó como base objetivo para operación productiva.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Diseño de flujo operativo",
        description:
          "La navegación se estructuró según tareas reales del equipo técnico: revisar estado, buscar equipos, planificar y cerrar mantenciones. Esto definió una jerarquía visual simple y estable para uso diario.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Implementación del control central",
        description:
          "El dashboard se construyó como punto de control institucional, concentrando cumplimiento, vencimientos y estado operativo en una vista única para supervisión rápida.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Estandarización del registro de mantenciones",
        description:
          "Se implementó un wizard de 4 pasos para registrar órdenes de forma homogénea, reduciendo errores de captura y mejorando la calidad de la información técnica registrada.",
        image:
          "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Estructuración de equipos y pautas",
        description:
          "Se definieron relaciones entre equipos, pautas, historial y responsables para sostener trazabilidad completa. Esta base permitió planificar con contexto y ejecutar con criterios consistentes.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Monitoreo y seguimiento institucional",
        description:
          "Se incorporaron analítica y bandeja de pendientes para apoyar jefaturas y equipos en el seguimiento mensual, priorización de vencidas y control de cumplimiento.",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Gobernanza de acceso y responsabilidades",
        description:
          "La gestión de usuarios, roles y permisos se diseñó para reflejar funciones institucionales reales, fortaleciendo control de acceso y trazabilidad de acciones.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Despliegue y continuidad operativa",
        description:
          "Se preparó despliegue con Docker, build standalone y migraciones en release para facilitar operación técnica. El manejo de sesión con cookie httpOnly reforzó seguridad en un contexto institucional.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop",
      },
    ],

    features: [
      {
        icon: <LayoutDashboard className="w-8 h-8 text-purple-500" />,
        title: "Dashboard operativo en modo oscuro",
        longDescription:
          "Portada ejecutiva del sistema con lectura rápida de estado general, cumplimiento y alertas de operación diaria.",
        image: "/imagesProyectos/Mantenciones/ModoNoche.png",
      },
      {
        icon: <LayoutDashboard className="w-8 h-8 text-purple-500" />,
        title: "Dashboard claro con selector de centros",
        longDescription:
          "Vista operativa para filtrar por centro y comparar contexto local, manteniendo indicadores consistentes entre unidades.",
        image: "/imagesProyectos/Mantenciones/SeleccionCentros.png",
      },
      {
        icon: <Users className="w-8 h-8 text-purple-500" />,
        title: "Administración de usuarios",
        longDescription:
          "Gestión de cuentas visibles en módulo administrativo, con control de perfiles y permisos para operación segura.",
        image: "/imagesProyectos/Mantenciones/Usuarios.png",
      },
      {
        icon: <Database className="w-8 h-8 text-purple-500" />,
        title: "Vista de equipos",
        longDescription:
          "Inventario técnico centralizado para consultar estado operativo, clasificación y acceso directo al historial de cada activo.",
        image: "/imagesProyectos/Mantenciones/Equipamiento.png",
      },
      {
        icon: <ClipboardList className="w-8 h-8 text-purple-500" />,
        title: "Detalle técnico del equipo",
        longDescription:
          "Ficha completa con contexto operativo, información técnica e intervenciones previas para decidir y ejecutar mantenciones con mejor criterio.",
        image: "/imagesProyectos/Mantenciones/DetalleEquipo.png",
      },
      {
        icon: <Settings className="w-8 h-8 text-purple-500" />,
        title: "Edición de equipo",
        longDescription:
          "Actualización estructurada de datos del activo para mantener consistencia del inventario y trazabilidad de cambios.",
        image: "/imagesProyectos/Mantenciones/EditarEquipo.png",
      },
      {
        icon: <Clock className="w-8 h-8 text-purple-500" />,
        title: "Calendario mensual",
        longDescription:
          "Planificación visual de mantenciones para anticipar carga de trabajo, distribuir tareas y prevenir atrasos críticos.",
        image: "/imagesProyectos/Mantenciones/Calendario.png",
      },
      {
        icon: <History className="w-8 h-8 text-purple-500" />,
        title: "Agenda de mantenciones",
        longDescription:
          "Vista tabular complementaria al calendario para seguimiento detallado de fechas, estados y ejecución mensual.",
        image: "/imagesProyectos/Mantenciones/AgendaMAntenciones.png",
      },
      {
        icon: <PackageMinus className="w-8 h-8 text-purple-500" />,
        title: "Bandeja de pendientes",
        longDescription:
          "Listado operativo para priorizar mantenciones vencidas o próximas y sostener continuidad de servicio.",
        image: "/imagesProyectos/Mantenciones/Pendientes.png",
      },
      {
        icon: <LayoutTemplate className="w-8 h-8 text-purple-500" />,
        title: "Wizard nueva orden paso 1",
        longDescription:
          "Inicio del flujo guiado con selección de centro para contextualizar la solicitud desde el origen operativo.",
        image: "/imagesProyectos/Mantenciones/Solciitud1.png",
      },
      {
        icon: <LayoutTemplate className="w-8 h-8 text-purple-500" />,
        title: "Wizard nueva orden paso 2",
        longDescription:
          "Selección del equipo objetivo para vincular la solicitud con su ficha técnica y pauta correspondiente.",
        image: "/imagesProyectos/Mantenciones/Solicitud2.png",
      },
      {
        icon: <LayoutTemplate className="w-8 h-8 text-purple-500" />,
        title: "Wizard nueva orden paso 3",
        longDescription:
          "Ingreso de detalles de mantención para dejar registro estructurado y facilitar ejecución posterior.",
        image: "/imagesProyectos/Mantenciones/Solcitud3.png",
      },
      {
        icon: <FileCheck2 className="w-8 h-8 text-purple-500" />,
        title: "Confirmación de mantención agendada",
        longDescription:
          "Cierre del flujo con confirmación explícita de la orden, reforzando control y trazabilidad del agendamiento.",
        image: "/imagesProyectos/Mantenciones/MantencionAsignada.png",
      },
      {
        icon: <PackageSearch className="w-8 h-8 text-purple-500" />,
        title: "Búsqueda global con recientes",
        longDescription:
          "Acceso rápido a elementos consultados recientemente para reducir tiempos de navegación en operación diaria.",
        image: "/imagesProyectos/Mantenciones/Buscar.png",
      },
      {
        icon: <PackageSearch className="w-8 h-8 text-purple-500" />,
        title: "Búsqueda global con resultados",
        longDescription:
          "Resolución de consultas por folio o término con resultados directos para ubicar información crítica sin fricción.",
        image: "/imagesProyectos/Mantenciones/Buscar2.png",
      },
      {
        icon: <Share2 className="w-8 h-8 text-purple-500" />,
        title: "Panel de analítica",
        longDescription:
          "Visualización de cumplimiento y comportamiento operativo para supervisión técnica y seguimiento institucional.",
        image: "/imagesProyectos/Mantenciones/Analitica.png",
      },
      {
        icon: <Shield className="w-8 h-8 text-purple-500" />,
        title: "Notificaciones y trazabilidad",
        longDescription:
          "Alertas del sistema para eventos relevantes de mantención, con registro de actividad para auditoría interna.",
        image: "/imagesProyectos/Mantenciones/Notificaciones.png",
      },
      {
        icon: <FileCheck2 className="w-8 h-8 text-purple-500" />,
        title: "Pauta y cierre documental con firma",
        longDescription:
          "Registro formal de ejecución mediante acta y firma, asegurando respaldo documental del cierre de mantención.",
        image: "/imagesProyectos/Mantenciones/FirmarActa.png",
      },
    ],
  },

  convenios: {
    presentationData: {
      title: "Sistema de Convenios",
      description:
        "Plataforma para la digitalización, administración y validación de convenios de salud, orientada a agilizar flujos de revisión clínica, aprobaciones y control administrativo de recursos.",
      image: "/imagesProyectos/SBSERVIU/Foto4.webp",
      tags: ["FastAPI", "React", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      duration: "3 meses",
      team: "1 persona",
      year: "2025",
      client: "Dirección de Salud",
    },

    contextData: {
      title: "Contexto del proyecto",
      description:
        "Los flujos de aprobación y validación consumían demasiado papel y dependían de firmas presenciales, lo que ralentizaba la gestión y dificultaba el seguimiento documental.",
      image: "/imagesProyectos/SBSERVIU/Sedificio.webp",
      subtitle: "Oportunidades de mejora detectadas:",
      challenges: [
        "Demoras en la cadena de firmas.",
        "Pérdida de historial de modificaciones y negociaciones.",
        "Dificultad para escalar el proceso a distintos centros.",
      ],
      conclusion:
        "La solución permitió agilizar la revisión y digitalizar el flujo de gestión de convenios, mejorando trazabilidad y control administrativo.",
    },

    developmentProcess: [
      {
        title: "Backend robusto con FastAPI",
        description:
          "Se utilizó FastAPI por su buen rendimiento, claridad en el diseño de endpoints y generación automática de documentación, facilitando el desarrollo y mantenimiento de la API.",
        image: "/imagesProyectos/SBSERVIU/Foto5.webp",
      },
    ],

    features: [
      {
        icon: <FileCheck2 className="w-8 h-8 text-purple-500" />,
        title: "Flujos de aprobación",
        longDescription:
          "Automatiza el avance de convenios por distintas etapas de revisión y validación, permitiendo un control más ordenado del proceso administrativo.",
        image: "/imagesProyectos/SBSERVIU/capturas/C_dashboard.webp",
      },
    ],
  },

  serviu: {
    presentationData: {
      title: "Sistema de Bodega SERVIU",
      description:
        "Sistema de gestión de bodega para el área de TI de SERVIU Biobío, diseñado para el control de stock, administración de préstamos, registro de movimientos, generación de informes y gestión de usuarios con autenticación segura.",
      image: "/imagesProyectos/SBSERVIU/ServiuFoto.webp",
      tags: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/Kuribo50/Gestion-de-inventario",
      duration: "3 meses",
      team: "1 persona",
      year: "2025",
      client: "SERVIU (Servicio de Vivienda y Urbanización)",
    },

    contextData: {
      title: "Contexto del proyecto",
      description:
        "El sistema surge como respuesta a la necesidad de modernizar y optimizar los procesos de inventario en las bodegas del área de TI.",
      image: "/imagesProyectos/SBSERVIU/Sedificio.webp",
      subtitle: "Principales desafíos detectados:",
      challenges: [
        "Procesos manuales que consumían tiempo y recursos.",
        "Dificultad para rastrear equipos prestados.",
        "Inexactitud en el conteo de stock.",
        "Inconsistencias en el registro de movimientos.",
        "Pérdida de materiales.",
        "Falta de control sobre equipos en mal estado.",
      ],
      conclusion:
        "La solución entregada fue un sistema de bodega integral que aborda estos desafíos y mejora el control general del inventario.",
    },

    developmentProcess: [
      {
        title: "Levantamiento de requerimientos",
        description:
          "Durante la etapa inicial se realizó el levantamiento de requerimientos junto al equipo de TI, con el fin de comprender el flujo diario de entrega de equipos, materiales y control de inventario.",
        image: "/imagesProyectos/SBSERVIU/FOTO1.webp",
      },
      {
        title: "Selección tecnológica",
        description:
          "Se optó por Django para el backend y Next.js para el frontend, priorizando escalabilidad, rendimiento y mantenibilidad a largo plazo.",
        image: "/imagesProyectos/SBSERVIU/Foto2.webp",
      },
      {
        title: "Desarrollo de API y base de datos",
        description:
          "Se diseñó y desarrolló la API con Django REST Framework, estructurando la base de datos para asegurar integridad y eficiencia en el manejo del inventario.",
        image: "/imagesProyectos/SBSERVIU/Foto3.webp",
      },
      {
        title: "Despliegue en producción",
        description:
          "El sistema fue implementado en infraestructura interna sobre una máquina virtual con Ubuntu, asegurando su funcionamiento operativo y disponibilidad para el equipo.",
        image: "/imagesProyectos/SBSERVIU/Foto8.webp",
      },
    ],

    features: [
      {
        icon: <LogIn className="w-8 h-8 text-purple-500" />,
        title: "Inicio de sesión",
        longDescription:
          "Sistema de autenticación que permite a los usuarios acceder mediante credenciales y niveles de permiso diferenciados según su rol.",
        image: "/imagesProyectos/SBSERVIU/ServiuFoto.webp",
      },
      {
        icon: <LayoutDashboard className="w-8 h-8 text-purple-500" />,
        title: "Dashboard",
        longDescription:
          "Panel principal con un resumen del estado actual del inventario, movimientos recientes, alertas de stock y préstamos activos.",
        image: "/imagesProyectos/SBSERVIU/capturas/C_dashboard.webp",
      },
      {
        icon: <PackagePlus className="w-8 h-8 text-purple-500" />,
        title: "Entrada de stock",
        longDescription:
          "Permite registrar ingresos de inventario con validación de datos y actualización inmediata del stock disponible.",
        image: "/imagesProyectos/SBSERVIU/capturas/C_entrada.webp",
      },
      {
        icon: <Database className="w-8 h-8 text-purple-500" />,
        title: "Salida de stock",
        longDescription:
          "Controla la salida de materiales y equipos mediante un registro detallado del destinatario, fecha y motivo del movimiento.",
        image: "/imagesProyectos/SBSERVIU/capturas/C_salidastock.webp",
      },
      {
        icon: <History className="w-8 h-8 text-purple-500" />,
        title: "Historial de stock",
        longDescription:
          "Registra cambios, movimientos y estados del inventario, permitiendo consultar el historial completo de cada artículo.",
        image: "/imagesProyectos/SBSERVIU/capturas/C_historialstock.webp",
      },
    ],
  },
};
