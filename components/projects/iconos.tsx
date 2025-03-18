import React from "react";
import { SiNextdotjs, SiJavascript, SiPython, SiDjango, SiTailwindcss, SiPostgresql, SiDocker } from "react-icons/si";

// Función para obtener el estilo de las etiquetas
export const getTagStyle = (tag: string) => {
  const tagLower = tag.toLowerCase();

  switch (tagLower) {
    case "mysql":
      return "bg-blue-900/30 text-blue-300 border-blue-800";
    case "mongodb":
      return "bg-green-900/30 text-green-300 border-green-800";
    case "next.js":
    case "nextjs":
      return "bg-gray-900/30 text-gray-300 border-gray-800";
    case "python":
      return "bg-green-900/30 text-green-300 border-green-800";
    case "javascript":
      return "bg-yellow-900/30 text-yellow-300 border-yellow-800";
    case "typescript":
      return "bg-blue-900/30 text-blue-300 border-blue-800";
    case "tailwind":
    case "tailwind css":
      return "bg-cyan-900/30 text-cyan-300 border-cyan-800";
    case "react":
      return "bg-cyan-900/30 text-cyan-300 border-cyan-800";
    case "node.js":
      return "bg-green-900/30 text-green-300 border-green-800";
    case "stripe":
      return "bg-purple-900/30 text-purple-300 border-purple-800";
    case "postgresql":
      return "bg-blue-900/30 text-blue-300 border-blue-800";
    case "openai api":
      return "bg-green-900/30 text-green-300 border-green-800";
    case "web3.js":
    case "ethers.js":
      return "bg-purple-900/30 text-purple-300 border-purple-800";
    case "socket.io":
    case "webrtc":
    case "redis":
      return "bg-red-900/30 text-red-300 border-red-800";
    case "django":
      return "bg-green-900/30 text-green-300 border-green-800";
    case "docker":
      return "bg-blue-900/30 text-blue-300 border-blue-800";
    default:
      return "bg-gray-900/30 text-gray-300 border-gray-800";
  }
};

// Función para obtener el icono correspondiente a cada tag
export const getTagIcon = (tag: string) => {
  const tagLower = tag.toLowerCase();
  
  switch (tagLower) {
    case "next.js":
    case "nextjs":
      return SiNextdotjs;
    case "javascript":
      return SiJavascript;
    case "python":
      return SiPython;
    case "django":
      return SiDjango;
    case "tailwind":
    case "tailwind css":
      return SiTailwindcss;
    case "postgresql":
      return SiPostgresql;
    case "docker":
      return SiDocker;
    default:
      return null;
  }
};

interface TagProps {
  tag: string;
}

const TagComponent: React.FC<TagProps> = ({ tag }) => {
  const TagIcon = getTagIcon(tag);
  
  return (
    <span
      className={`px-3 py-1.5 text-xs rounded-full border font-medium
        transition-colors duration-200 flex items-center gap-1.5 ${getTagStyle(tag)}`}
    >
      {TagIcon && <TagIcon className="w-3.5 h-3.5" />}
      {tag}
    </span>
  );
};

export default TagComponent;