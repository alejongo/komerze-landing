import React from "react";
import { motion } from "framer-motion";

interface BentoProps {
  content: {
    budget_title: string;
    budget_desc: string;
    market_title: string;
    market_desc: string;
    compliance_title: string;
    compliance_desc: string;
    speed_title: string;
    speed_desc: string;
  };
  solutionTitle: string;
  solutionText: string;
}

const Card: React.FC<{
  title: string;
  desc: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}> = ({ title, desc, className, delay = 0, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`p-8 rounded-3xl bg-white border border-white/60 shadow-soft hover:shadow-xl transition-all group overflow-hidden relative flex flex-col justify-between ${className}`}
  >
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 leading-relaxed text-sm font-medium">
        {desc}
      </p>
    </div>

    {/* Visual Metaphor Area */}
    <div className="mt-6 relative h-32 w-full flex items-center justify-center bg-slate-50/50 rounded-2xl border border-slate-100 overflow-hidden group-hover:bg-indigo-50/30 transition-colors">
      {children}
    </div>
  </motion.div>
);

export const BentoGrid: React.FC<BentoProps> = ({
  content,
  solutionTitle,
  solutionText,
}) => {
  return (
    <section className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-navy mb-6 tracking-tight text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {solutionTitle}
          </motion.h2>
          <motion.p
            className="text-xl text-indigo-600 font-medium bg-indigo-50 inline-block px-4 py-1 rounded-full text-balance"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {solutionText}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
          {/* 1. Marketplace (Stadium) - Large */}
          <Card
            title={content.market_title}
            desc={content.market_desc}
            className="md:col-span-2 md:row-span-1"
            delay={0.1}
          >
            {/* Abstract Stadium / Network Metaphor */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
              <div className="relative w-64 h-32 border-2 border-slate-300 rounded-full flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 border border-dashed border-indigo-400 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <div className="absolute top-2 left-10 w-2 h-2 bg-slate-300 rounded-full"></div>
                <div className="absolute bottom-4 right-12 w-2 h-2 bg-slate-300 rounded-full"></div>
                <div className="absolute top-1/2 right-4 w-2 h-2 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </Card>

          {/* 2. Speed - Small */}
          <Card
            title={content.speed_title}
            desc={content.speed_desc}
            delay={0.2}
          >
            <motion.div className="text-4xl font-black text-slate-200 group-hover:text-indigo-400 transition-colors flex items-center gap-1">
              <span>3</span>
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-teal-400 text-6xl"
              >
                ⚡
              </motion.span>
            </motion.div>
          </Card>

          {/* 3. Compliance - Small */}
          <Card
            title={content.compliance_title}
            desc={content.compliance_desc}
            delay={0.3}
          >
            <div className="flex flex-col gap-2 items-center opacity-50 group-hover:opacity-80 transition-opacity">
              <div className="w-16 h-2 bg-slate-200 rounded-full"></div>
              <div className="w-24 h-2 bg-slate-200 rounded-full"></div>
              <div className="w-10 h-10 rounded-full border-2 border-indigo-500 mt-2 flex items-center justify-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              </div>
            </div>
          </Card>

          {/* 4. Smart Budget - Medium */}
          <Card
            title={content.budget_title}
            desc={content.budget_desc}
            className="md:col-span-2 md:row-span-1"
            delay={0.4}
          >
            <div className="flex items-center gap-8">
              <div className="w-16 h-12 border-2 border-slate-300 rounded-lg flex items-center justify-center relative">
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-400 rounded-full border-2 border-white"></div>
              </div>
              <motion.div className="h-px bg-slate-200 w-20 relative">
                <motion.div
                  className="absolute top-1/2 left-0 h-1 w-4 bg-indigo-500 -translate-y-1/2 rounded-full"
                  animate={{ left: ["0%", "80%", "0%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
