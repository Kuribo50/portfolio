import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import TagComponent from "./iconos";

interface ProjectPresentationProps {
  presentationData: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    duration: string;
    team: string;
    year: string;
    client: string;
  };
}

const ProjectPresentation: React.FC<ProjectPresentationProps> = ({ presentationData }) => {
  // In ProjectPresentation component
  return (
      <section id="presentation"  // Make sure this ID matches
        className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden"
      >
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {presentationData.tags.map((tag, index) => (
                <TagComponent key={index} tag={tag} />
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 mb-6">
              {presentationData.title}
            </h1>
            
            <p className="text-white/80 text-lg mb-8">
              {presentationData.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <motion.div
                whileHover={{ boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
                className="group relative bg-transparent backdrop-blur-sm p-4 rounded-xl border border-[#2a2a3e] hover:border-purple-500 transition-all duration-300"
              >
                <p className="text-white/60 text-sm">Duración</p>
                <p className="text-white font-medium">{presentationData.duration}</p>
              </motion.div>
              <motion.div
                whileHover={{ boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
                className="group relative bg-transparent backdrop-blur-sm p-4 rounded-xl border border-[#2a2a3e] hover:border-purple-500 transition-all duration-300"
              >
                <p className="text-white/60 text-sm">Equipo</p>
                <p className="text-white font-medium">{presentationData.team}</p>
              </motion.div>
              <motion.div
                whileHover={{ boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
                className="group relative bg-transparent backdrop-blur-sm p-4 rounded-xl border border-[#2a2a3e] hover:border-purple-500 transition-all duration-300"
              >
                <p className="text-white/60 text-sm">Año</p>
                <p className="text-white font-medium">{presentationData.year}</p>
              </motion.div>
              <motion.div
                whileHover={{ boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
                className="group relative bg-transparent backdrop-blur-sm p-4 rounded-xl border border-[#2a2a3e] hover:border-purple-500 transition-all duration-300"
              >
                <p className="text-white/60 text-sm">Cliente</p>
                <p className="text-white font-medium">{presentationData.client}</p>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={presentationData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-transparent border border-purple-500 text-white font-medium flex items-center gap-2 hover:bg-purple-500/10 transition-all"
              >
                <Github className="h-5 w-5" /> Ver Código
              </a>
              <a
                href={presentationData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium flex items-center gap-2 hover:opacity-90 transition-all"
              >
                Ver Demo <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -bottom-4 -right-4 w-full h-[calc(100%+1rem)] border-2 border-purple-600/50 rounded-xl" />
            <div className="relative rounded-xl overflow-hidden border-2 border-purple-500/30 aspect-video z-10">
              <Image
                src={presentationData.image}
                alt={presentationData.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPresentation;