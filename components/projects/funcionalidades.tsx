import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  // Ajusta el número de miniaturas a mostrar según el ancho de la pantalla
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(2); // Mostrar 2 elementos en móvil
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // Add this near your other state declarations at the top of the component
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <section
        id="features"  // Updated ID
        className="relative w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
      >
        <div className="container relative z-10 mx-auto max-w-7xl">
          {/* Título y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 mb-4 pb-1">
              Funcionalidades
            </h2>
  
          </motion.div>
  
          <div className="flex flex-col gap-4 md:gap-8">
            {/* Sección principal (descripción + imagen) */}
            <div className="flex flex-col lg:flex-row gap-4 md:gap-8 mb-8 md:mb-12">
              {/* Descripción */}
              <div className="lg:w-1/3 w-full relative">
                <div className="absolute -bottom-4 -right-4 w-full h-[calc(100%+1rem)] border-2 border-purple-600/50 rounded-xl" />
                <div className="p-4 sm:p-6 h-full rounded-xl bg-transparent backdrop-blur-sm border border-purple-500/30 relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="text-purple-500">{features[selectedFeature].icon}</div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-left">
                      {features[selectedFeature].title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 text-left leading-relaxed">
                    {features[selectedFeature].longDescription}
                  </p>
                </div>
              </div>
              {/* Imagen principal */}
              <div className="lg:w-2/3 w-full relative">
                <div className="absolute -bottom-4 -right-4 w-full h-[calc(100%+1rem)] border-2 border-purple-600/50 rounded-xl" />
                <div 
                  className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden z-10 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Image
                    src={features[selectedFeature].image}
                    alt={features[selectedFeature].title}
                    fill
                    className="object-contain bg-black/20 backdrop-blur-sm"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                    priority
                  />
                </div>
              </div>

              {/* Modal for full-size image */}
              {isModalOpen && (
                <div 
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      setIsModalOpen(false);
                    }
                  }}
                >
                  <div className="relative w-full max-w-7xl h-[80vh] rounded-xl overflow-hidden">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <Image
                      src={features[selectedFeature].image}
                      alt={features[selectedFeature].title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
  
            {/* Carrusel de miniaturas - Versión móvil rediseñada */}
            <div className="w-full">
              {/* Enfoques alternativos para móvil */}
              <div className="block sm:hidden">
                {/* Diseño tipo "grid" para móvil */}
                <div className="grid grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <div
                      key={`mobile-${feature.title}-${index}`}
                      className={`
                        cursor-pointer rounded-lg overflow-hidden
                        ${selectedFeature === index ? "ring-2 ring-purple-500" : ""}
                      `}
                      onClick={() => setSelectedFeature(index)}
                    >
                      <div className="relative h-20">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                        <div
                          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 
                            ${selectedFeature === index ? "opacity-0" : "opacity-40"} 
                            hover:opacity-0
                          `}
                        ></div>
                        <div className="absolute bottom-0 left-0 right-0 p-1 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-xs text-white text-center leading-tight font-medium truncate">
                            {feature.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Carrusel estándar para tablet/desktop */}
              <div className="relative hidden sm:block max-w-[1000px] mx-auto">
                <div className="overflow-hidden">
                  <div
                    className="flex gap-3 md:gap-4 transition-transform duration-1000 ease-in-out"
                    style={{
                      transform:
                        features.length > itemsToShow
                          ? `translateX(-${startIndex * (100 / itemsToShow)}%)`
                          : "none",
                    }}
                  >
                    {[...(features.length > itemsToShow ? [...features, ...features] : features)].map(
                      (feature, index) => (
                        <motion.div
                          key={`${feature.title}-${index}`}
                          className={`flex-none 
                            w-[calc(33.33%-8px)] md:w-[calc(25%-12px)] 
                            cursor-pointer rounded-xl overflow-hidden 
                            ${selectedFeature === index % features.length ? "ring-2 ring-purple-500" : ""}
                          `}
                          onClick={() => setSelectedFeature(index % features.length)}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="relative h-[100px] md:h-[130px]">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 33vw, 25vw"
                            />
                            <div
                              className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                                selectedFeature === index % features.length
                                  ? "opacity-0"
                                  : "opacity-40"
                              } hover:opacity-0`}
                            ></div>
                            <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/80 to-transparent">
                              <p className="text-xs md:text-sm text-white text-center leading-tight">
                                {feature.title}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>
  
                {/* Botones laterales para tablet y desktop */}
                {features.length > itemsToShow && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition-colors"
                    >
                      <ChevronLeft className="w-4 md:w-5 h-4 md:h-5 text-white" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition-colors"
                    >
                      <ChevronRight className="w-4 md:w-5 h-4 md:h-5 text-white" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FeaturesSection;