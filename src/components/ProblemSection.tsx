import React from "react";
import { motion } from "framer-motion";

interface ProblemProps {
  content: {
    title: string;
    text: string;
  };
}

export const ProblemSection: React.FC<ProblemProps> = ({ content }) => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Chaos Elements Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-40 bg-white rotate-12 blur-sm"
          animate={{ y: [0, 20, 0], rotate: [12, 15, 12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-32 bg-indigo-500 -rotate-6 blur-sm"
          animate={{ y: [0, -30, 0], rotate: [-6, 0, -6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Add more chaotic abstract shapes */}
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {content.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-white/60 leading-relaxed"
        >
          {content.text}
        </motion.p>
      </div>
    </section>
  );
};
