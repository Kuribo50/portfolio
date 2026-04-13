import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next (slide up), -1 = prev (slide down)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and HIDE NAVBAR when modal is open
  useEffect(() => {
    const header = document.querySelector('header');
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      if (header) {
        header.style.opacity = '0';
        header.style.pointerEvents = 'none';
        header.style.transition = 'opacity 0.3s ease';
      }
    } else {
      document.body.style.overflow = '';
      if (header) {
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
      }
    }
    return () => {
      document.body.style.overflow = '';
      if (header) {
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
      }
    };
  }, [isModalOpen]);

  // Auto-scroll logic when next/prev arrows are pressed
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeElement = thumbnailsRef.current.children[selectedFeature] as HTMLElement;
      if (activeElement) {
        const container = thumbnailsRef.current;
        const scrollTarget = activeElement.offsetTop - container.offsetTop - (container.clientHeight / 2) + (activeElement.clientHeight / 2);
        
        if (window.innerWidth >= 1024) {
           container.scrollTo({ top: scrollTarget > 0 ? scrollTarget : 0, behavior: "smooth" });
        } else {
           const scrollTargetX = activeElement.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (activeElement.clientWidth / 2);
           container.scrollTo({ left: scrollTargetX > 0 ? scrollTargetX : 0, behavior: "smooth" });
        }
      }
    }
  }, [selectedFeature]);

  const navigateFeatures = (newIndex: number) => {
    setDirection(newIndex > selectedFeature ? 1 : -1);
    setSelectedFeature(newIndex);
  };

  const variants = {
    initial: (direction: number) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section
      id="features"
      className="relative w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="container relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 mb-4 pb-1">
            Funcionalidades Clave
          </h2>
          <p className="text-white/60 text-lg">
            Explora las características principales seleccionando una miniatura.
          </p>
        </motion.div>

        {/* Estilos para el scroll oculto */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbars::-webkit-scrollbar { display: none; }
          .hide-scrollbars { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        <div className="flex flex-col lg:flex-row gap-6 lg:h-[750px] w-full items-stretch">
          
          {/* COLUMNA IZQUIERDA: Galería Compacta (Alta Densidad) */}
          <div className="w-full lg:w-[130px] shrink-0 flex flex-col gap-3">
            <div className="flex flex-row lg:flex-col gap-2 items-center flex-grow overflow-hidden">
              {/* Controles Desktop (Arriba) */}
              <button 
                onClick={() => navigateFeatures(selectedFeature > 0 ? selectedFeature - 1 : features.length - 1)}
                className="hidden lg:flex w-full items-center justify-center p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-white/30 hover:text-white group"
              >
                <ChevronUp className="w-4 h-4" />
              </button>

              {/* Contenedor de scroll de miniaturas - MÁXIMA DENSIDAD */}
              <div 
                ref={thumbnailsRef}
                className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto hide-scrollbars flex-grow py-1 w-full lg:max-h-[650px]"
              >
                {features.map((feature, index) => {
                  const isActive = selectedFeature === index;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedFeature(index)}
                      className={`relative shrink-0 w-20 lg:w-full aspect-square rounded-lg overflow-hidden transition-all duration-300 border
                        ${isActive ? "border-purple-500 scale-100 shadow-[0_0_10px_rgba(168,85,247,0.4)] z-10" : "border-transparent opacity-30 hover:opacity-100 scale-90 z-0 hover:border-white/10"}
                      `}
                      whileHover={{ scale: isActive ? 1.02 : 0.95 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        sizes="150px"
                      />
                      {!isActive && <div className="absolute inset-0 bg-black/40" />}
                    </motion.button>
                  );
                })}
              </div>

              {/* Controles Desktop (Abajo) */}
              <button 
                onClick={() => navigateFeatures(selectedFeature < features.length - 1 ? selectedFeature + 1 : 0)}
                className="hidden lg:flex w-full items-center justify-center p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-white/30 hover:text-white group"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Contador Compacto */}
            <div className="w-full text-center py-2">
               <span className="text-[10px] font-medium text-white/20 tracking-widest uppercase">
                  {selectedFeature + 1} / {features.length}
               </span>
            </div>
          </div>

          {/* ÁREA PRINCIPAL: Imagen + Info (Ocupa todo el resto) */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Imagen Hero (Maximizada) */}
            <div className="flex-1 relative rounded-[2.5rem] overflow-hidden glass-card border border-white/5 bg-black/40 min-h-[400px] flex items-center justify-center group cursor-pointer shadow-2xl transition-all duration-500 hover:border-purple-500/20"
                 onClick={() => setIsModalOpen(true)}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={selectedFeature}
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-0"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={features[selectedFeature].image}
                      alt={features[selectedFeature].title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 80vw"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center z-10 pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 text-white px-8 py-3 rounded-full backdrop-blur-xl font-bold tracking-[0.2em] border border-white/10 text-[10px] transform translate-y-2 group-hover:translate-y-0">
                  VER EN GRANDE
                </span>
              </div>
            </div>

            {/* Información Inferior (Limpia - Sin Movimiento) */}
            <div className="px-6 lg:px-10 pb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFeature}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                    {features[selectedFeature].title}
                  </h3>
                  <p className="text-white/40 text-sm lg:text-lg leading-relaxed max-w-4xl">
                    {features[selectedFeature].longDescription || features[selectedFeature].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

        {/* Modal Portaled */}
        {mounted && typeof document !== 'undefined' && createPortal(
          <AnimatePresence>
            {isModalOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ zIndex: 9999999 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-3xl flex items-center justify-center p-4 md:p-8 cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                {/* Close Button Fixed Top Right - ABSOLUTAMENTE EN LA ESQUINA */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="fixed top-2 right-2 md:top-4 md:right-4 z-[10000000] p-4 rounded-full bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110 group cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white/50 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Main Content Area - CLIC DENTRO NO CIERRA */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative w-full max-w-6xl h-[82vh] flex items-center justify-center p-4 cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={features[selectedFeature].image}
                    alt={features[selectedFeature].title}
                    fill
                    className="object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      </div>
    </section>
  );
};

export default FeaturesSection;