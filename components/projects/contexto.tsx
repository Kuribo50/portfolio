import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectContextProps {
  contextData: {
    title: string;
    description: string;
    image: string;
    challenges: string[];
    conclusion: string;
    subtitle?: string; // Add this new optional property
  };
}

const ProjectContext: React.FC<ProjectContextProps> = ({ contextData }) => {
  // In ProjectContext component
  return (
      <section id="context"  // Updated ID
        className="relative w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
      >
        <div className="container relative z-10 mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 mb-3 sm:mb-4 pb-1">
              {contextData.title}
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-3xl mx-auto px-4">
              {contextData.description}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto w-full h-full"
            >
              <div className="absolute -bottom-4 -right-4 w-full h-[calc(100%+1rem)] border-2 border-purple-600/50 rounded-xl" />
              <div className="relative rounded-xl overflow-hidden border-2 border-purple-500/30 aspect-video w-full h-full z-10">
                <Image
                  src={contextData.image}
                  alt="Contexto del proyecto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-4 sm:px-0"
            >
              <p className="text-white/80 text-base sm:text-lg mb-6">
                {contextData.subtitle || "SERVIU enfrentaba desafíos significativos en la gestión de sus bodegas, incluyendo:"}
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {contextData.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="min-w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500 flex items-center justify-center mt-1">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <p className="text-white/80 text-sm sm:text-base">{challenge}</p>
                  </li>
                ))}
              </ul>
              
              <p className="text-white/80 text-base sm:text-lg mt-6">
                {contextData.conclusion}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

export default ProjectContext;