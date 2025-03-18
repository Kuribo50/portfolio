import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProcessItem {
  title: string;
  description: string;
  image: string;
}

interface ProcessSectionProps {
  developmentProcess: ProcessItem[];
  title: string;
  subtitle: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ developmentProcess, title, subtitle }) => {
  return (
    <section id="process" className="relative w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 mb-4 pb-1">
            {title}
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {developmentProcess.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col items-center rounded-xl 
                  transition-all duration-300 hover:-translate-y-1
                  overflow-hidden border border-[#2a2a3e] hover:border-purple-500
                  bg-transparent backdrop-blur-sm p-3 sm:p-4"
                whileHover={{ 
                  boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)"
                }}
              >
                <div className="relative w-full mb-4 sm:mb-6">
                  <div className="relative rounded-xl overflow-hidden aspect-video z-10">
                    <Image
                      src={process.image}
                      alt={process.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="text-left w-full px-2">
                  <div className="flex mb-2 sm:mb-3">
                    <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-900/50 border-2 border-purple-500 text-white font-bold text-xs sm:text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-white group-hover:text-purple-400 transition-colors duration-300 relative inline-block">
                    {process.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;