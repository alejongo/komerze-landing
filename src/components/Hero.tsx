import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  content: {
    headline: string;
    subheadline: string;
    cta: string;
    notification: string;
  };
}

const RequestCard: React.FC<{
  className?: string;
  delay?: number;
  scale?: number;
  icon?: string;
  price?: string;
  barColor?: string;
  statusText?: string;
}> = ({
  className,
  delay = 0,
  scale = 1,
  icon = "💻",
  price = "$1,200",
  barColor = "bg-indigo-500",
  statusText = "Automatic validation",
}) => {
  return (
    <motion.div
      className={`absolute ${className} bg-white/40 rounded-2xl shadow-soft border border-white/60 p-4 backdrop-blur-xl z-20 origin-center`}
      style={{ scale }}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay, type: "spring", bounce: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
            <span className="text-sm">{icon}</span>
          </div>
          <div>
            <div className="h-2 w-16 bg-slate-100 rounded mb-1"></div>
            <div className="h-1.5 w-10 bg-slate-50 rounded"></div>
          </div>
        </div>
        <div className="px-2 py-1 bg-white/50 rounded-full flex items-center justify-center border border-white/40">
          <span className="text-[10px] font-bold text-slate-600">{price}</span>
        </div>
      </div>

      {/* Progress Bar Animation */}
      <div className="w-full bg-slate-100/50 h-1 rounded-full overflow-hidden mb-4">
        <motion.div
          className={`h-full ${barColor}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: delay + 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Validation Status */}
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay + 1.8, type: "spring" }}
          className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 1.9 }}
        >
          <p className="text-[10px] text-slate-500 font-medium">{statusText}</p>
        </motion.div>
      </div>

      {/* Breathing Animation Wrapper */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 2 + Math.random(),
        }} // Random offset
      />
    </motion.div>
  );
};

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative pt-32 md:pt-48 overflow-hidden mx-auto max-w-7xl px-6">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 relative">
        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1] text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {content.headline.split(". ")[0]}.
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-800 to-green-500">
            {content.headline.split(". ")[1]}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {content.subheadline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:shadow-indigo-500/20"
          >
            {content.cta}
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Hero Visualization: The "Relaxed Control" Scene */}
      <div className="md:mt-24 relative h-[500px] w-full max-w-4xl mx-auto flex items-center justify-center pointer-events-none select-none">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-indigo-100/50 blur-[90px] rounded-full scale-75 animate-blob"></div>

        {/* Relaxed Person Image - Centered and Larger */}
        <img
          src="/images/person-hero.png"
          alt="Relaxed Komerze User"
          className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 h-[115%] w-auto object-contain z-10 opacity-90"
        />

        {/* 1. Main Card - Right Side (The active Request) */}
        <RequestCard
          className="right-[5%] top-[20%] w-[280px]"
          delay={0.5}
          scale={1}
          price="$4,200"
          icon="🚀"
          statusText={content.notification}
        />

        {/* 2. Secondary Card - Left Side (Another request) */}
        <RequestCard
          className="left-[5%] top-[10%] w-[260px]"
          delay={1.5}
          scale={0.9}
          icon="🛒"
          price="$850"
          barColor="bg-teal-500"
          statusText="Purchase approved"
        />

        {/* 3. Tertiary Card - Bottom Left (Just finishing) */}
        <RequestCard
          className="left-[15%] bottom-[15%] w-[240px]"
          delay={2.5}
          scale={0.85}
          icon="📄"
          price="$120"
          barColor="bg-purple-500"
          statusText="Invoice matched"
        />
      </div>
    </section>
  );
};
