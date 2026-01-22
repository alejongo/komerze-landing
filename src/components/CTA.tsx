import React from "react";
import { motion } from "framer-motion";

interface CTAProps {
  content: {
    title: string;
    btn: string;
  };
}

export const CTA: React.FC<CTAProps> = ({ content }) => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-linear-to-t from-indigo-900/40 to-navy pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-black tracking-tight text-white mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {content.title}
        </motion.h2>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="#"
            className="inline-block px-12 py-5 bg-teal text-navy font-bold text-xl rounded-full shadow-[0_0_50px_-5px_rgba(45,212,191,0.4)] hover:shadow-[0_0_80px_-5px_rgba(45,212,191,0.6)] transition-all"
          >
            {content.btn}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
