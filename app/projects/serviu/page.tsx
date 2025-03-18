"use client";

import { motion } from "framer-motion";
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
    UserCog
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Using relative imports instead of alias
import ProjectPresentation from "../../../components/projects/presentacion";
import ProjectContext from "../../../components/projects/contexto";
import ProcessSection from "../../../components/projects/proceso";
import FeaturesSection from "../../../components/projects/funcionalidades";

export default function ServiuProject() {
    const presentationData = {
        title: "Sistema de bodega SERVIU",
        description: "Sistema de gestión de bodega para el área de TI de SERVIU Biobío, diseñado para un control preciso y automatizado que permite el ingreso y salida de stock, la administración de préstamos de equipos, el registro de movimientos, la generación de informes, la administración de usuarios y cuenta con un sistema de autenticación.",
        image: "/imagesProyectos/SBSERVIU/ServiuFoto.webp",
        tags: ["Next.js", "JavaScript", "Python", "Django", "Tailwind", "PostgreSQL", "Docker"],
        liveUrl: "#",
        githubUrl: "https://github.com/Kuribo50/Gestion-de-inventario",
        duration: "3 meses",
        team: "1 persona",
        year: "2025",
        client: "SERVIU (Servicio de Vivienda y Urbanización)",
    };

    const contextData = {
        title: "Contexto del Proyecto",
        description: "El sistema de gestión de bodega para SERVIU surge como respuesta a la necesidad de modernizar y optimizar los procesos de inventario en las bodegas.",
        image: "/imagesProyectos/SBSERVIU/Sedificio.webp",
        subtitle: "SERVIU enfrentaba desafíos significativos en la gestión de sus bodegas, incluyendo:",
        challenges: [
            "Procesos manuales que consumían tiempo y recursos",
            "Dificultad para rastrear equipos prestados",
            "Inexactitud en el conteo de stock",
            "Inconsistencia en el registro de movimientos",
            "Pérdida de materiales",
            "No conteo de equipos en mal estado",
        ],
        conclusion: "La solución entregada fue un sistema de bodega completo que aborda estos desafíos y garantiza el correcto manejo del inventario."
    };

    const developmentProcess = [
        {
            title: "Toma de requerimientos y planificación",
            description: "Durante los primeros días se realizó la toma de requerimientos, integrándose al equipo de TI para comprender el flujo de trabajo diario, la entrega de equipos y materiales, y las necesidades del sistema.",
            image: "/imagesProyectos/SBSERVIU/FOTO1.webp"
        },
        {
            title: "Elección de tecnologías",
            description: "Se optó por utilizar Django para el backend y Next.js para el frontend, priorizando la escalabilidad, el rendimiento y la facilidad de mantenimiento a largo plazo.",
            image: "/imagesProyectos/SBSERVIU/Foto2.webp"
        },
        {
            title: "Creación de API y base de datos",
            description: "Se diseñó y desarrolló la API utilizando Django REST Framework, y se estructuró la base de datos en MySQL para garantizar la integridad y eficiencia en el manejo del inventario.",
            image: "/imagesProyectos/SBSERVIU/Foto3.webp"
        },
        {
            title: "Creación de UI/UX y funcionalidades",
            description: "Se diseñó la interfaz de usuario en Next.js, garantizando una experiencia intuitiva y eficiente, además de implementar funcionalidades clave como la gestión de stock, usuarios y reportes.",
            image: "/imagesProyectos/SBSERVIU/Foto4.webp"
        },
        {
            title: "Optimización y manejo de la API",
            description: "Se mejoró la eficiencia de la API mediante la optimización de consultas, la implementación de paginación y el fortalecimiento de la seguridad mediante autenticación y control de accesos.",
            image: "/imagesProyectos/SBSERVIU/Foto5.webp"
        },
        {
            title: "Pruebas y corrección de errores",
            description: "Se realizaron pruebas unitarias e integradas para validar el funcionamiento del sistema, corrigiendo errores y optimizando el rendimiento previo al despliegue.",
            image: "/imagesProyectos/SBSERVIU/Foto6.webp"
        },
        {
            title: "Preparación para el despliegue",
            description: "Se configuró el entorno de producción, optimizando el rendimiento del sistema y asegurando medidas de seguridad para garantizar un despliegue estable y confiable.",
            image: "/imagesProyectos/SBSERVIU/Foto7.webp"
        },
        {
            title: "Despliegue en producción",
            description: "Se implementó el sistema en el servidor interno de SERVIU dentro de una máquina virtual con Ubuntu, asegurando su correcto funcionamiento.",
            image: "/imagesProyectos/SBSERVIU/Foto8.webp"
        },
    ];

    const features = [
        {
            icon: <LogIn className="w-8 h-8 text-purple-500" />,
            title: "Inicio de sesion",
            longDescription: "Sistema de autenticación seguro que permite a los usuarios acceder a sus cuentas mediante credenciales únicas, con diferentes niveles de acceso según el rol asignado.",
            image: "/imagesProyectos/SBSERVIU/ServiuFoto.webp"
        },
        {
            icon: <LayoutDashboard className="w-8 h-8 text-purple-500" />,
            title: "Dashboard",
            longDescription: "Panel principal que muestra un resumen completo del estado actual del inventario, incluyendo estadísticas de movimientos, alertas de stock bajo y préstamos activos.",
            image: "/imagesProyectos/SBSERVIU/capturas/C_dashboard.webp"
        },
        {
            icon: <PackagePlus className="w-8 h-8 text-purple-500" />,
            title: "Entrada de stock",
            longDescription: "Gestión eficiente de entradas de inventario con validación automática, registro de detalles del producto y actualización en tiempo real del stock disponible.",
            image: "/imagesProyectos/SBSERVIU/capturas/C_entrada.webp"
        },
        {
            icon: <Database className="w-8 h-8 text-purple-500" />,
            title: "Salida de stock",
            longDescription: "Control preciso de las salidas de inventario, con registro detallado del destinatario, fecha y motivo de la salida, manteniendo un seguimiento completo de cada movimiento.",
            image: "/imagesProyectos/SBSERVIU/capturas/C_salidastock.webp"
        },
        {
            icon: <PackageMinus className="w-8 h-8 text-purple-500" />,
            title: "Salida de stock",
            longDescription: "Sistema de actualización del estado de los equipos, permitiendo registrar condiciones como 'en mantenimiento', 'defectuoso' o 'dado de baja', con historial completo de cambios.",
            image: "/imagesProyectos/SBSERVIU/capturas/C_cambioestado.webp"
        },
        {
            icon: <RefreshCcw className="w-8 h-8 text-purple-500" />,
            title: "Cambio de estado",
            longDescription: "Proceso simplificado para agregar nuevos artículos al inventario, incluyendo categorización, asignación de códigos únicos y registro de especificaciones técnicas.",
            image: "/imagesProyectos/SBSERVIU/capturas/C_ingresonuevostock.webp"
        },
        {
            icon: <Users className="w-8 h-8 text-purple-500" />,
            title: "Historial de stock",
            longDescription: "Registro detallado de todos los cambios en el inventario, permitiendo consultar el histórico completo de movimientos, modificaciones y estados de cada artículo.",
            image: "/imagesProyectos/SBSERVIU/capturas/C_historialstock.webp"
        },
        {
            icon: <Shield className="w-8 h-8 text-purple-500" />,
            title: "Historial de movimientos",
            longDescription: "Sistema completo de seguimiento de todas las operaciones realizadas en la bodega, con capacidad de filtrado, búsqueda avanzada y generación de reportes personalizados.",
            image: "/imagesProyectos/SBSERVIU/capturas/C_historialmovimientos.webp"
        },
        {
            icon: <Users className="w-8 h-8 text-purple-500" />,
            title: "Prestamos",
            longDescription: "Gestión integral de préstamos de equipos, incluyendo registro de solicitante, fechas de entrega y devolución, estado del préstamo y notificaciones automáticas.",
            image: "/imagesProyectos/SBSERVIU/capturas/C_prestamos.webp"
        },
        {
            icon: <Users className="w-8 h-8 text-purple-500" />,
            title: "Administracion",
            longDescription: "Panel de control administrativo que permite configurar parámetros del sistema, gestionar permisos, y supervisar todas las operaciones de la bodega.",
            image: "/imagesProyectos/SBSERVIU/capturas/C_administracion.webp"
        },
        {
            icon: <Users className="w-8 h-8 text-purple-500" />,
            title: "Administracion de usuarios",
            longDescription: "Sistema completo para la gestión de usuarios, incluyendo creación de cuentas, asignación de roles, permisos específicos y seguimiento de actividades.",
            image: "/imagesProyectos/SBSERVIU/capturas/C_gestionUsuario.webp"
        },
    ];

    const processData = {
        title: "Proceso de Desarrollo",
        subtitle: "Conoce cómo se llevó a cabo este proyecto desde su concepción hasta su implementación final.",
    };

    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <ProjectPresentation presentationData={presentationData} />
            <ProjectContext contextData={contextData} />
            <ProcessSection
                developmentProcess={developmentProcess}
                title={processData.title}
                subtitle={processData.subtitle}
            />
            <FeaturesSection features={features.map(feature => ({
                ...feature,
                description: feature.longDescription // Map longDescription to description
            }))} />
            <Footer />
        </main>
    );
}
