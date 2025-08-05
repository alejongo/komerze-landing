import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function StatsSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Números que recuperan tu tiempo
          </h2>
          <p className="text-base text-slate-900 max-w-3xl mx-auto">
            Komerze está transformando la gestión de compras para empresas de
            todos los tamaños
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">
              <AnimatedCounter end={70} suffix="%" />
            </div>
            <p className="text-slate-700">
              Reducción de tiempo en gestión de compras
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">
              <AnimatedCounter end={99.9} suffix="%" />
            </div>
            <p className="text-slate-700">Uptime </p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">
              <AnimatedCounter end={24} suffix="/7" />
            </div>
            <p className="text-gray-300">Soporte técnico disponible</p>
          </div>
        </div>
      </div>
    </section>
  );
}
