"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Telón Superior */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[50vh] bg-black z-[100]"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
      />
      
      {/* Telón Inferior */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-[50vh] bg-black z-[100]"
        initial={{ y: "0%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
      >
        {children}
      </motion.div>
    </>
  );
}
