import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RolesProps {
  content: {
    finance_btn: string;
    finance_msg: string;
    buyer_btn: string;
    buyer_msg: string;
  };
}

export const RolesSection: React.FC<RolesProps> = ({ content }) => {
  const [activeRole, setActiveRole] = useState<"finance" | "buyer">("finance");

  return (
    <section className="py-24 bg-navy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Toggle */}
        <div className="inline-flex bg-white/5 p-1 rounded-full mb-12 border border-white/10">
          <button
            onClick={() => setActiveRole("finance")}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
              activeRole === "finance"
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-white/60 hover:text-white"
            }`}
          >
            {content.finance_btn}
          </button>
          <button
            onClick={() => setActiveRole("buyer")}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
              activeRole === "buyer"
                ? "bg-teal-500 text-navy shadow-lg"
                : "text-white/60 hover:text-white"
            }`}
          >
            {content.buyer_btn}
          </button>
        </div>

        {/* Content */}
        <div className="relative h-40 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                "
                {activeRole === "finance"
                  ? content.finance_msg
                  : content.buyer_msg}
                "
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
