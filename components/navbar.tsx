"use client";

import { usePathname } from 'next/navigation';
import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "./theme-provider";

// Items de navegación según la página
const getNavigationItems = (isProjectPage: boolean) => {
  if (isProjectPage) {
    return [
      { label: "Presentación", href: "#presentation" },
      { label: "Contexto", href: "#context" },
      { label: "Proceso", href: "#process" },
      { label: "Funcionalidades", href: "#features" },
    ];
  }
  
  return [
    { label: "Inicio", href: "#Inicio" },
    { label: "Tecnologías", href: "#tech-stack" },
    { label: "Proyectos", href: "#projects" },
    { label: "Trayectoria", href: "#timeline" },
    { label: "Sobre mí", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ];
};

export default function Navbar() {
  const pathname = usePathname();
  const isProjectPage = pathname.includes('/projects/');
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");
  
  // Usamos directamente el hook useTheme para obtener el tema actual
  const { theme } = useTheme();

  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Items de navegación según la página
  const NAVIGATION_ITEMS = getNavigationItems(isProjectPage);

  // Detecta tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detecta scroll (solo para desktop) para cambiar fondo según la posición
  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        // Revisa las secciones y decide si la navbar está "scrolled"
        const sections = NAVIGATION_ITEMS.map((item) => item.href.substring(1));
        let currentActive = activeSection;
        let found = false;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 100) {
              currentActive = section;
              found = true;
              setIsScrolled(true);
              break;
            }
          }
        }
        
        if (!found && !isProjectPage) {
          currentActive = "Inicio";
          setIsScrolled(false);
        }
        
        if (currentActive !== activeSection) {
          setActiveSection(currentActive);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Al montar
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, isProjectPage, NAVIGATION_ITEMS, isMobile]);

  // Cierra menú móvil si se hace click fuera
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !(e.target as Element).closest("#menu-toggle")
      ) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen],
  );
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [handleOutsideClick]);

  // Evita scroll en el body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Variantes para la animación del menú
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: { duration: 0.3, when: "afterChildren" },
    },
    open: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.05 },
    },
  };
  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  // Click en enlaces
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    // Si está en página de proyecto y clic en "Inicio", regresa al home
    if (isProjectPage && href === "#Inicio") {
      window.location.href = "/";
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop - 100,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
      setActiveSection(href.substring(1));
    }
  };

  // Clases de fondo en desktop vs mobile
  const backgroundClasses = isMobile
    ? (theme === 'light' ? "bg-white/80 text-black" : "bg-black/90 text-white")
    : (isScrolled
      ? "backdrop-blur-lg rounded-xl shadow-xl " + (theme === 'light' ? "bg-white/80 text-black" : "bg-black/90 text-white")
      : "bg-transparent " + (theme === 'light' ? "text-black" : "text-white"));

  // Fondo del menú móvil según el tema
  const mobileMenuBackground = theme === 'light'
    ? 'bg-white/95 text-black'
    : 'bg-black/95 text-white';

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 px-4 py-4 md:py-6`}
    >
      <div className={`${backgroundClasses} px-4 md:px-6`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between h-14 md:h-16 transition-all duration-300">
            {/* Logo */}
            <motion.a
              href={isProjectPage ? "/" : "#Inicio"}
              onClick={(e) => handleNavClick(e, "#Inicio")}
              className="text-2xl font-bold tracking-tight relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={theme === 'light' ? 'text-black' : 'text-white'}>
                Martin
              </span>
              <span className="text-blue-500">Beroiza</span>
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: activeSection === "Inicio" ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 w-full bg-purple-500 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>

            {/* Navegación desktop */}
            <nav className="hidden md:flex justify-center items-center">
              <ul className="flex space-x-8 px-4 py-1">
                {isProjectPage && (
                  <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/#projects"
                      className="relative inline-block py-2 text-sm font-medium tracking-widest"
                    >
                      Volver
                    </Link>
                  </motion.li>
                )}
                {NAVIGATION_ITEMS.map((item) => (
                  <motion.li key={item.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="relative inline-block py-2 text-sm font-medium tracking-widest"
                    >
                      {item.label}
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX: activeSection === item.href.substring(1) ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              {/* Botón de tema */}
              <div className="ml-6">
                <ThemeToggle />
              </div>
            </nav>

            {/* Botón menú móvil */}
            {isMobile && (
              <motion.button
                id="menu-toggle"
                className="relative z-50 p-2 rounded-lg transition-colors hover:bg-white/10"
                aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <motion.div className="w-6 h-6 flex flex-col justify-center items-center" initial={false}>
                    <motion.span
                      className={`block w-5 h-0.5 ${theme === 'light' ? 'bg-black' : 'bg-white'} mb-1.5`}
                      animate={{
                        rotate: isMobileMenuOpen ? 45 : 0,
                        y: isMobileMenuOpen ? 8 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className={`block w-5 h-0.5 ${theme === 'light' ? 'bg-black' : 'bg-white'} mb-1.5`}
                      animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className={`block w-5 h-0.5 ${theme === 'light' ? 'bg-black' : 'bg-white'}`}
                      animate={{
                        rotate: isMobileMenuOpen ? -45 : 0,
                        y: isMobileMenuOpen ? -8 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ) : (
                  <Menu className={`w-6 h-6 ${theme === 'light' ? 'text-black' : 'text-white'}`} />
                )}
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className={`absolute top-full left-0 right-0 ${mobileMenuBackground} backdrop-blur-xl z-40 
                  rounded-b-xl shadow-xl overflow-hidden`}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.nav className="flex flex-col items-center justify-center py-6">
              <ul className="flex flex-col space-y-5 text-center w-full">
                {isProjectPage && (
                  <motion.li
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4"
                  >
                    <Link
                      href="/#projects"
                      className="text-xl font-medium tracking-wide relative inline-block"
                    >
                      Volver
                    </Link>
                  </motion.li>
                )}
                
                {NAVIGATION_ITEMS.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4"
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-xl font-medium tracking-wide relative inline-block"
                    >
                      {item.label}
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX: activeSection === item.href.substring(1) ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              {/* Theme Toggle en el menú móvil */}
              <motion.div 
                variants={itemVariants}
                className="mt-6"
              >
                <ThemeToggle />
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
