import React from "react";
import { motion } from "framer-motion";

interface TickerProps {
  content: {
    processed: string;
    time: string;
    companies: string;
  };
}

export const Ticker: React.FC<TickerProps> = ({ content }) => {
  const stats = [content.processed, content.time, content.companies];
  // Duplicate for seamless loop
  const duplicatedStats = [
    ...stats,
    ...stats,
    ...stats,
    ...stats,
    ...stats,
    ...stats,
    ...stats,
    ...stats,
  ];

  return (
    <section className="bg-navy border-y border-white/5 py-8 relative overflow-hidden flex">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-navy to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-navy to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex gap-16 items-center whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedStats.map((stat, i) => (
          <div key={i} className="flex flex-col items-start min-w-[200px]">
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-teal-400 to-indigo-400">
              {stat.includes("$") || stat.includes("150") || stat.includes("12")
                ? stat.split(" ")[0]
                : stat}
            </span>
            <span className="text-white/60 text-sm uppercase tracking-wider font-semibold">
              {stat.includes("$") || stat.includes("150") || stat.includes("12")
                ? stat.substring(stat.indexOf(" ") + 1)
                : stat}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
