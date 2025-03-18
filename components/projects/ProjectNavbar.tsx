import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProjectNavbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["presentation", "context", "process", "features"];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-[#2a2a3e]">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white hover:text-purple-400 transition-colors">
            Volver
          </Link>
          <div className="flex gap-8">
            {[
              { id: "presentation", label: "Presentación" },
              { id: "context", label: "Contexto" },
              { id: "process", label: "Proceso" },
              { id: "features", label: "Funcionalidades" },
            ].map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === id ? "text-purple-400" : "text-white/80 hover:text-white"
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute -bottom-[1.5px] left-0 w-full h-[2px] bg-purple-400" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}