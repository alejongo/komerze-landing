import React, { useState, useEffect } from "react";
import StatsSection from "./StatsSection";
import MobileMenu from "./MobileMenu";
import ContactForm from "./ContactForm";

// Componente para iconos SVG personalizados
const KomerzeLogo = () => (
  <div className="flex items-center w-auto">
    <img
      src="/images/Komerze-logo.png"
      alt="Komerze Logo"
      className="max-w-38"
    />
  </div>
);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg
    className="w-12 h-12 text-indigo-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
);

const ClipboardIcon = () => (
  <svg
    className="w-12 h-12 text-blue-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    className="w-12 h-12 text-purple-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-12 h-12 text-indigo-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);

export default function KomerzeLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`floating-header ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 px-2">
            <KomerzeLogo />
            <nav className="hidden md:flex space-x-8">
              <a
                href="#caracteristicas"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Características
              </a>
              <a
                href="#beneficios"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Beneficios
              </a>
              <a
                href="#demo"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Demo
              </a>
              <a
                href="#contacto"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contacto
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a
                href="https://app.komerze.co"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hidden md:inline-flex px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Iniciar Sesión
              </a>
              <MobileMenu
                isOpen={mobileMenuOpen}
                setIsOpen={setMobileMenuOpen}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-36  relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-indigo-700 rounded-full text-sm font-medium mb-8 animate-fade-in border border-indigo-200">
              🚀 Software de gestión de compras B2B
            </div>

            <div className="w-5/6 flex items-center mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
                El 90% de tu tiempo en{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Compras B2B{" "}
                </span>
                se pierde
              </h1>
            </div>

            <p className="text-base md:text-lg text-slate-700 mb-8 max-w-3xl mx-auto animate-slide-up font-base">
              ¡Recupéralo! Convierte la experiencia de compra con tu proveedores
              en un marketplace ajustado para tu empresa
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
                Solicitar Demo
                <ArrowRightIcon />
              </button>
            </div>

            {/* Hero Image en la parte inferior */}
            <div className="mt-16 animate-slide-up">
              <img
                src="/images/person-hero-3-2.png"
                alt="Profesional usando Komerze"
                className="mx-auto max-w-4xl w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Featured Testimonial */}
          <div className=" p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-2 left-8 text-8xl text-indigo-700 font-serif">
              "
            </div>

            {/* Two Column Layout - 70/30 distribution */}
            <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-center">
              {/* Left Column - Testimonial Content (70%) */}
              <div className="md:col-span-7 flex flex-col justify-center">
                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-3xl text-slate-900 mb-8 font-bold">
                  Con komerze logramos reducir significativamente el tiempo de
                  conciliación de ventas por centros de costos de días a
                  minutos. Sin errores y de forma automática.
                </blockquote>
              </div>

              {/* Right Column - Author Info (30%) */}
              <div className="md:col-span-3 flex flex-col items-center lg:items-start">
                {/* Company Logo */}
                <div className="flex items-center mb-6">
                  <img
                    src="/images/las-hermosas-logo.png"
                    alt="Company Logo"
                    className="h-18"
                  />
                </div>

                {/* Author Details */}
                <div className="flex flex-col sm:flex-row items-center  lg:items-center gap-6 ">
                  {/* Avatar */}
                  <div className=" w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    AG
                  </div>

                  {/* Author Info */}
                  <div className="text-center sm:text-left lg:text-left">
                    <p className="text-lg font-semibold text-gray-900 mb-1">
                      Alejandro Gómez
                    </p>
                    <p className="text-sm text-slate-600 mb-2">Sub Gerente</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-indigo-50 to-transparent rounded-full -mb-16 -mr-16"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-full -mt-12 -mr-12"></div>
          </div>

          {/* Trust badges */}
          {/* <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 mb-8">
              Empresas que confían en Komerze
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-700 font-semibold">
                TechCorp
              </div>
              <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-700 font-semibold">
                Innova Solutions
              </div>
              <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-700 font-semibold">
                Digital Ventures
              </div>
              <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-700 font-semibold">
                Global Industries
              </div>
              <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-700 font-semibold">
                ProBusiness
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una plataforma completa diseñada para optimizar cada aspecto de la
              gestión de compras empresariales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <ShoppingCartIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                In House e-commerce personalizado
              </h3>
              {/* <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">Marketplace personalizado</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">Catálogos por proveedor</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">
                    Búsqueda avanzada por SKU y categoría
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">
                    Gestión de inventario en tiempo real
                  </span>
                </li>
              </ul> */}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <ClipboardIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Gestión de Pedidos a proveedores
              </h3>
              {/* <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">
                    Carrito intuitivo con persistencia
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">Checkout simplificado</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">Gestión de estados de pedidos</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">Generación automática de PDFs</span>
                </li>
              </ul> */}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <UsersIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Control de presupuesto a centros de costos
              </h3>
              {/* <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">
                    Autenticación segura con Supabase
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">Roles diferenciados por función</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">
                    Gestión de perfiles personalizada
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">Activación por email</span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Benefits Section */}
      <section id="beneficios" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir Komerze?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Una solución integral que transforma la gestión de compras
                empresariales, optimizando procesos y mejorando la eficiencia
                operacional.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Reducción de Costos Operativos
                    </h3>
                    <p className="text-gray-600">
                      Automatización de procesos manuales que reduce hasta un
                      60% el tiempo invertido en gestión de compras.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-4">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Control Total de Inventario
                    </h3>
                    <p className="text-gray-600">
                      Visibilidad completa del inventario en tiempo real con
                      alertas automáticas de stock bajo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mt-1 mr-4">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Escalabilidad Empresarial
                    </h3>
                    <p className="text-gray-600">
                      Arquitectura moderna que crece con tu empresa, desde
                      startups hasta grandes corporaciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                style={{
                  background:
                    "linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)",
                }}
              >
                <h3 className="text-2xl font-bold mb-6">
                  Optimizaciones de Rendimiento
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckIcon />
                    <span className="ml-3">Lazy loading de componentes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon />
                    <span className="ml-3">
                      Compresión automática de imágenes
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon />
                    <span className="ml-3">Memoización de componentes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon />
                    <span className="ml-3">Debouncing en búsquedas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon />
                    <span className="ml-3">Skeletons para mejor UX</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Elige un plan que se adapte a tu empresa
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Estándar */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-indigo-300 relative">
              {/* Badge "Más Popular" */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Más Popular
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Plan Estándar
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ideal para empresas en crecimiento
                  </p>
                </div>

                {/* Pricing */}
                <div className="bg-white py-4 mb-3">
                  <div className="text-left space-y-2">
                    {/* Base Price - Destacado */}
                    <div>
                      <p className="text-xs text-indigo-600 mb-2 font-semibold uppercase tracking-wide">
                        Precio Base
                      </p>
                      <div className="text-4xl font-black text-slate-900">
                        $49,900/mes
                      </div>
                    </div>

                    {/* Plus Symbol */}
                    <div className="text-sm font-medium text-slate-900">
                      + $2,200 por orden generada
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <span className="text-slate-800">
                      Para empresas que busquen eficiencia y autonomía en las
                      compras por centros de costos.
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-4 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 hover:shadow-lg">
                  Comenzar Ahora
                </button>
              </div>
            </div>

            {/* Plan Empresarial */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Plan Empresarial
                  </h3>
                  <p className="text-sm text-gray-600">
                    Para empresas con alto volumen
                  </p>
                </div>

                {/* Pricing */}
                <div className="bg-white py-4 mb-3">
                  <div className="text-left space-y-2">
                    {/* Base Price - Destacado */}
                    <div>
                      <p className="text-xs text-indigo-600 mb-2 font-semibold uppercase tracking-wide">
                        Precio Base
                      </p>
                      <div className="text-4xl font-black text-slate-900">
                        $199,900/mes
                      </div>
                    </div>

                    {/* Plus Symbol */}
                    <div className="text-sm font-medium text-slate-900">
                      + $1,200 por orden generada
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <span className="text-slate-800">
                      Para empresas que generen más de 1,000 órdenes mensuales.
                      Incluye soporte prioritario y características avanzadas.
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg">
                  Contactar Ventas
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Costo Transparente
                </h4>
                <p className="text-gray-600 text-sm">
                  Solo pagas por las órdenes que realmente generas
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Implementación Rápida
                </h4>
                <p className="text-gray-600 text-sm">
                  Comienza a usar la plataforma en menos de 24 horas
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Soporte 24/7
                </h4>
                <p className="text-gray-600 text-sm">
                  Asistencia técnica completa cuando la necesites
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="demo"
        className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para Revolucionar tu Gestión de Compras?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Únete a las empresas que ya están transformando sus procesos con
              Komerze. Solicita una demo personalizada y descubre todo el
              potencial de nuestra plataforma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#contacto"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 no-underline inline-flex items-center justify-center"
              >
                Solicitar Demo Gratuita
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Contactar Ventas
              </button>
            </div>

            <div
              className="bg-white rounded-2xl p-6 max-w-2xl mx-auto"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="text-blue-100 text-sm mb-4">
                ⚠️ Fase Alpha - Acceso Limitado
              </p>
              <p className="text-white text-lg">
                Komerze v0.9 está en desarrollo activo. Solicita acceso
                early-bird para ser parte de la revolución B2B.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <span className="text-2xl font-bold text-white">Komerze</span>
              </div>
              <p className="text-gray-400">
                Plataforma B2B moderna para la gestión automatizada de compras
                empresariales.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentación
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guías
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 Komerze. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Términos
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
