import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const steps = [
    { title: "Supplier Homologated", icon: "🏢" },
    { title: "Price Agreed", icon: "🤝" },
    { title: "Budget Available", icon: "💰" },
    { title: "Auto Approval", icon: "✨", highlight: true },
  ];

  return (
    <section
      className="py-32 bg-white relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-2xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy">The Invisible Flow</h2>
        </div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-[27px] top-0 bottom-0 w-1 bg-slate-100 rounded-full"></div>

          {/* Active Line (Animated) */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[27px] top-0 bottom-0 w-1 bg-indigo-500 rounded-full"
          />

          <div className="flex flex-col gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-8 relative z-10"
              >
                <div
                  className={`w-14 h-14 rounded-full border-4 flex items-center justify-center text-xl bg-white transition-colors duration-500 ${step.highlight ? "border-teal-400 text-teal-600 shadow-glow" : "border-slate-100 text-slate-400"}`}
                >
                  {step.icon}
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold ${step.highlight ? "text-teal-600" : "text-slate-400"}`}
                  >
                    {step.title}
                  </h3>
                  {step.highlight && (
                    <p className="text-sm text-slate-400 mt-1">
                      No human intervention needed.
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
