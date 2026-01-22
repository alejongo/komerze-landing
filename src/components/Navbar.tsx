import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  texts: {
    product: string;
    pricing: string;
    login: string;
    demo: string;
  };
  currentLang: string;
}

export const Navbar: React.FC<NavbarProps> = ({ texts, currentLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: texts.product, href: "#product" },
    { name: texts.pricing, href: "#pricing" },
  ];

  const languages = [
    { code: "es", label: "ES" },
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-indigo-100 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href={`/${currentLang === "es" ? "" : currentLang}`}
          className="text-2xl font-bold tracking-tighter text-navy"
        >
          Komerze<span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-navy transition-all text-sm font-medium"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-4 ml-4">
            {/* Lang Picker */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              {languages.map((lang) => (
                <a
                  key={lang.code}
                  href={`/${lang.code === "es" ? "" : lang.code}`}
                  className={`hover:text-navy transition-colors uppercase ${currentLang === lang.code ? "text-indigo-600 font-bold" : ""}`}
                >
                  {lang.label}
                </a>
              ))}
            </div>

            <a
              href="#"
              className="text-navy font-medium text-sm hover:text-indigo-600 transition-colors"
            >
              {texts.login}
            </a>
            <a
              href="#"
              className="bg-navy text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/10"
            >
              {texts.demo}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-navy p-2"
        >
          <span className="sr-only">Menu</span>
          {isMobileMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-indigo-100 overflow-hidden shadow-lg"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-navy text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-slate-100 my-2"></div>
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-navy font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {texts.login}
                </a>
                <a
                  href="#"
                  className="bg-navy text-white px-5 py-3 rounded-full text-center font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {texts.demo}
                </a>
              </div>
              <div className="flex gap-4 justify-center mt-4">
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    href={`/${lang.code === "es" ? "" : lang.code}`}
                    className={`px-3 py-1 rounded text-sm font-medium ${currentLang === lang.code ? "bg-indigo-50 text-indigo-600" : "text-slate-400"}`}
                  >
                    {lang.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
