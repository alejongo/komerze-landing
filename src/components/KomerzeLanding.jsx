import React, { useState, useEffect, useRef } from "react";

/* ---- SVG icons ---- */
const IconArrow = () => (
  <svg className="k-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const IconMail = () => (
  <svg className="k-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2 7 12 13 22 7" />
  </svg>
);
const IconExternal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);
const IconGrid = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
const IconMinus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);
const IconPlus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);
const IconWrench = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
  </svg>
);
const IconHamburger = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const IconClose = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CAP_CARDS = [
  {
    num: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </svg>
    ),
    title: "Estrategia PLG",
    body: "Mapeamos el viaje real del usuario — dónde se frustra, dónde abandona, dónde llega al valor sin ayuda — y definimos qué debe sentir el producto en cada paso.",
  },
  {
    num: "02",
    icon: <IconGrid />,
    title: "Diseño de producto",
    body: "Sistemas de diseño propios, pensados para cada rol que toca el producto — no una interfaz genérica que le sirve a nadie del todo.",
  },
  {
    num: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
    title: "Onboarding sin fricción",
    body: "Rediseñamos el primer minuto del producto para que el usuario llegue al valor antes de tener que configurar, pedir permiso o leer un manual.",
  },
  {
    num: "04",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" /><path d="M19 14l.7 2.1L22 17l-2.1.7L19 20l-.7-2.1L16 17l2.1-.7L19 14z" />
      </svg>
    ),
    title: "Activación y Aha Moment",
    body: "Identificamos el momento exacto en que un usuario entiende el valor del producto, y diseñamos cada pantalla anterior para llevarlo ahí más rápido.",
  },
  {
    num: "05",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="12" cy="18" r="3" /><line x1="8.5" y1="7.5" x2="15.5" y2="16" /><line x1="15.5" y1="7.5" x2="8.5" y2="16" />
      </svg>
    ),
    title: "Growth loops",
    body: "Diseñamos los puntos donde el uso de un usuario invita al siguiente — invitaciones, referidos, valor compartido — para que el producto crezca sin depender solo de marketing.",
  },
  {
    num: "06",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" /><path d="M3.5 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.65 4.36A9 9 0 0 0 20.5 15" />
      </svg>
    ),
    title: "Iteración basada en datos",
    body: "El diseño no termina en el lanzamiento. Medimos activación y retención reales, y ajustamos el producto contra el comportamiento, no contra la opinión.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    active: true,
    title: "Diagnóstico de fricción",
    body: "Mapeamos el viaje real del usuario y encontramos dónde se pierde la activación — antes de proponer ningún rediseño.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    num: "02",
    active: false,
    title: "Estrategia de activación",
    body: "Definimos el Aha Moment, las métricas que lo prueban y el flujo más corto posible para llegar a él.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "03",
    active: false,
    title: "Diseño del sistema",
    body: "Diseñamos en iteraciones visibles — prototipos que se prueban con usuarios reales, no una entrega a ciegas.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    num: "04",
    active: false,
    title: "Medición y ajuste",
    body: "Lanzamos, medimos activación y retención reales, y seguimos diseñando sobre lo que el comportamiento nos enseña.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

/* ---- Counter hook for case stats ---- */
function useCountUp(target, active) {
  const [count, setCount] = useState(0);
  const ran = useRef(false);

  useEffect(() => {
    if (!active || ran.current || !target) return;
    ran.current = true;
    let current = 0;
    const steps = 28;
    const increment = target / steps;
    const id = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(current));
      }
    }, 40);
    return () => clearInterval(id);
  }, [active, target]);

  return count;
}

/* ---- Stat card with count-up ---- */
function StatCard({ val, label, className, countTo, panelVisible }) {
  const count = useCountUp(countTo, panelVisible);
  return (
    <div className={`k-case-stat ${className}`}>
      <div className="k-case-stat-val">{countTo != null ? count : val}</div>
      <div className="k-case-stat-label">{label}</div>
    </div>
  );
}

/* ====================================================
   MAIN COMPONENT
   ==================================================== */
export default function KomerzeLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const panelRef = useRef(null);

  /* Nav scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll reveal — IntersectionObserver */
  useEffect(() => {
    const selectors = ".reveal, .reveal-group, .k-compare, .k-case-panel, .k-process-rail";
    const targets = document.querySelectorAll(selectors);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            if (entry.target.classList.contains("k-case-panel")) {
              setPanelVisible(true);
            }
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ====== NAV ====== */}
      <header className={`k-nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="k-wrap k-nav-inner">
          {/* Logo */}
          <a href="/" className="k-nav-logo">
            <img src="/images/Komerze-logo.svg" style={{ height: 30 }} alt="Komerze" />
          </a>

          {/* Desktop links */}
          <nav className="k-nav-links">
            <a href="#que-es">El principio</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#kardal">kardal.</a>
            <a href="#proceso">Proceso</a>
          </nav>

          <div className="k-nav-cta">
            <a href="#contacto" className="k-btn-nav">
              Conversemos
            </a>
            <button
              className="k-nav-toggle"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <IconHamburger />
            </button>
          </div>
        </div>
      </header>

      {/* ====== MOBILE MENU ====== */}
      {menuOpen && (
        <>
          <div className="k-mobile-overlay" onClick={() => setMenuOpen(false)} />
          <div className="k-mobile-panel">
            <div className="k-mobile-header">
              <img src="/images/Komerze-logo.svg" alt="Komerze" style={{ height: 20 }} />
              <button className="k-mobile-close" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
                <IconClose />
              </button>
            </div>
            <nav className="k-mobile-nav">
              <a href="#que-es" onClick={() => setMenuOpen(false)}>El principio</a>
              <a href="#capacidades" onClick={() => setMenuOpen(false)}>Capacidades</a>
              <a href="#kardal" onClick={() => setMenuOpen(false)}>kardal.</a>
              <a href="#proceso" onClick={() => setMenuOpen(false)}>Proceso</a>
            </nav>
            <div className="k-mobile-cta">
              <a href="#contacto" className="k-btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setMenuOpen(false)}>
                Conversemos <IconArrow />
              </a>
            </div>
          </div>
        </>
      )}

      {/* ====== HERO ====== */}
      <section className="k-hero">
        <div className="k-wrap k-hero-grid">
          {/* Left */}
          <div>
            <span className="k-eyebrow">Komerze Company LLC</span>
            <h1 className="k-hero-title">
              <span className="k-htl"><span>Construimos compañías</span></span>
              <span className="k-htl"><span>de producto <em>para LATAM</em>.</span></span>
            </h1>
            <p className="k-hero-sub">
              Komerze es una <span className="font-semibold italic">Product Led Company builder:</span> diseñamos, construimos y operamos compañías de producto propias. kardal. es la primera — una plataforma de Supplier Intelligence para comercio B2B en Latinoamérica.
            </p>
            <div className="k-hero-actions">
              <a href="https://calendly.com/alejo-kardal/30min" className="k-btn-primary">
                Conversemos <IconArrow />
              </a>
              <a href="#kardal" className="k-btn-secondary">
                <span className="k-btn-icon"><IconGrid /></span>
                Ver kardal., nuestra primera compañía
              </a>
            </div>
            <div className="k-hero-proof">
              <span className="k-hero-proof-label">Construido y operado por Komerze</span>
              <span className="k-hero-proof-mark">
                kardal<span className="k-green">.</span>
              </span>
            </div>
          </div>

          {/* Right — Spec card */}
          <div className="k-hero-visual">
            <div className="k-float-chip chip-1">
              <span className="k-chip-dot" />
              Operando desde 2026
            </div>
            <div className="k-spec-card">
              <div className="k-spec-head">
                <span className="k-spec-head-title">Ficha de Compañía · 001</span>
                <div className="k-spec-dots">
                  <span /><span /><span />
                </div>
              </div>
              <div className="k-spec-body">
                <div className="k-spec-row">
                  <span className="k-spec-row-label">Modelo</span>
                  <span className="k-spec-row-value">Compañía de producto<br />propia, operada por Komerze</span>
                </div>
                <div className="k-spec-row">
                  <span className="k-spec-row-label">Categoría</span>
                  <span className="k-spec-row-value">Supplier Intelligence para comercio B2B</span>
                </div>
                <div className="k-spec-row">
                  <span className="k-spec-row-label">Mercado</span>
                  <span className="k-spec-row-value">Latinoamérica, con foco inicial en Colombia</span>
                </div>
                <div className="k-spec-row">
                  <span className="k-spec-row-label">Estado</span>
                  <span className="k-spec-row-value">Producto en operación,<br />creciendo sin depender de ventas</span>
                </div>
              </div>
              <div className="k-spec-foot">
                <span className="k-pulse" />
                <span className="k-spec-foot-text">
                  Primera compañía: <strong>kardal.</strong> — kardal.so
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STRIP — El principio ====== */}
      <section className="k-strip" id="que-es">
        <div className="k-wrap">
          <div className="k-strip-head reveal">
            <span className="k-strip-kicker">El principio</span>
            <h2>Cada compañía que construimos parte del mismo principio: el producto es el vendedor.</h2>
          </div>
          <div className="k-compare">
            <div className="k-compare-col">
              <span className="k-compare-label">
                <span style={{ display: "flex", width: 15, height: 15 }}><IconMinus /></span>
                Producto con fricción
              </span>
              <ul className="k-compare-list">
                {[
                  "El valor se entiende después de una demo o una llamada de ventas",
                  "El onboarding pide configuración antes de mostrar resultados",
                  "Cada paso nuevo es una decisión que el usuario no sabía que tenía que tomar",
                  "El crecimiento depende de cuánta gente puede vender el equipo",
                ].map((item) => (
                  <li key={item}>
                    <span className="k-compare-ico">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="k-compare-col is-komerze">
              <span className="k-compare-label">
                <span style={{ display: "flex", width: 15, height: 15 }}><IconPlus /></span>
                Producto en flujo — diseño PLG
              </span>
              <ul className="k-compare-list">
                {[
                  "El usuario llega al Aha Moment solo, sin que nadie se lo explique",
                  "La activación ocurre antes de pedir nada a cambio",
                  "Cada pantalla elimina una decisión en vez de agregar una",
                  "El crecimiento viene del uso mismo: cada usuario activado trae al siguiente",
                ].map((item) => (
                  <li key={item}>
                    <span className="k-compare-ico">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CAPABILITIES ====== */}
      <section className="k-capabilities" id="capacidades">
        <div className="k-wrap">
          <div className="k-section-head reveal">
            <h2>De la fricción al flujo.</h2>
            <p>
              Aplicamos la misma disciplina a cada compañía que construimos — de entender por qué un producto no se vende solo, a diseñar el flujo que lo hace crecer.
            </p>
          </div>
          <div className="k-cap-grid reveal-group">
            {CAP_CARDS.map((card) => (
              <div className="k-cap-card" key={card.num}>
                <div className="k-cap-num">{card.num}</div>
                <div className="k-cap-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CASE STUDY — KARDAL. ====== */}
      <section className="k-case" id="kardal">
        <div className="k-wrap">
          <div className="k-case-top reveal">
            <div>
              <span className="k-case-kicker">Primera compañía</span>
              <h2>kardal. es la prueba de que una compañía de producto B2B también puede activarse sola.</h2>
            </div>
            <a
              href="https://kardal.so"
              target="_blank"
              rel="noopener noreferrer"
              className="k-case-link"
            >
              Visitar kardal.so <IconExternal />
            </a>
          </div>

          <div className="k-case-panel" ref={panelRef}>
            <div className="k-case-panel-top">
              <div>
                <div className="k-case-brand">
                  <span className="k-case-brand-mark">
                    kardal<span className="k-brand-dot" />
                  </span>
                  <span className="k-case-brand-tag">Supplier Intelligence</span>
                </div>
                <h3>Un flywheel bilateral diseñado para que cada usuario active al siguiente.</h3>
                <p>
                  Komerze construye y opera kardal. de extremo a extremo: dos interfaces — Seller Studio y Supplier Intelligence — construidas alrededor de un mismo Aha Moment medible y un flywheel donde comprador y proveedor se invitan mutuamente.
                </p>
              </div>
              <div className="k-case-stats">
                <StatCard
                  countTo={2}
                  label="Personas de usuario, cada una con su propio flujo de activación"
                  className="is-amber"
                  panelVisible={panelVisible}
                />
                <StatCard
                  countTo={1}
                  label="Aha Moment definido y medido como evento de producto"
                  className="is-green"
                  panelVisible={panelVisible}
                />
                <StatCard
                  val="0→1"
                  label="Desde la estrategia de categoría hasta la compañía operando"
                  panelVisible={panelVisible}
                />
                <StatCard
                  val="↻"
                  label="Flywheel inverso: el comprador invita al proveedor y crece la red"
                  panelVisible={panelVisible}
                />
              </div>
            </div>
            <div className="k-case-panel-bottom">
              <span className="k-case-built">
                <span style={{ display: "flex", width: 14, height: 14, color: "#666664" }}><IconWrench /></span>
                Construida y operada por <strong>Komerze Company LLC</strong>
              </span>
              <div className="k-case-tags">
                {["Producto propio", "Estrategia PLG", "Diseño de producto", "Operación continua"].map((tag) => (
                  <span className="k-case-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PROCESS ====== */}
      <section className="k-process" id="proceso">
        <div className="k-wrap">
          <div className="k-section-head reveal">
            <h2>Cómo construimos.</h2>
            <p>
              Sin intermediarios entre la investigación y el diseño final. El mismo equipo recorre cada compañía de principio a fin.
            </p>
          </div>
          <div className="k-process-rail">
            {PROCESS_STEPS.map((step, i) => {
              const isLast = i === PROCESS_STEPS.length - 1;
              return (
                <div key={step.num} className={`k-process-step${step.active ? " is-active" : ""}`}>
                  {/* Icon + connector row */}
                  <div className="k-process-node">
                    <div className="k-process-icon">{step.icon}</div>
                    {!isLast && (
                      <span className="k-process-flow">
                        <span className="k-process-flow-track" />
                        <span className="k-process-flow-fill" />
                        <svg
                          className="k-process-flow-tip"
                          width="8"
                          height="13"
                          viewBox="0 0 8 13"
                          fill="none"
                        >
                          <path
                            d="M1 1.5l5.5 4.75L1 11"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                  {/* Text */}
                  <span className="k-process-step-num">{step.num}</span>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="k-cta" id="contacto">
        <div className="k-wrap reveal-group">
          <span className="k-eyebrow" style={{ justifyContent: "center", animation: "none", opacity: 1, transform: "none" }}>
            Empecemos
          </span>
          <h2>
            ¿Tu producto necesita que alguien <em>lo explique</em> para que funcione?
          </h2>
          <p>
            Cuéntanos cómo se usa tu producto hoy. Te decimos, con honestidad, dónde está la fricción y qué tomaría diseñarla fuera.
          </p>
          <div className="k-cta-actions">
            <a href="mailto:hola@komerze.co" className="k-btn-primary">
              Escríbenos a hola@komerze.co <IconMail />
            </a>
            <a
              href="https://kardal.so"
              target="_blank"
              rel="noopener noreferrer"
              className="k-btn-secondary"
            >
              Explorar kardal. primero
            </a>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="k-footer">
        <div className="k-wrap">
          <div className="k-footer-top">
            <div className="k-footer-brand">
              <img src="/images/Komerze-logo.svg" alt="Komerze" />
              <p>
                Product Led Company builder para Latinoamérica. Diseñamos, construimos y operamos compañías de producto propias.
              </p>
            </div>
            <div className="k-footer-cols">
              <div className="k-footer-col">
                <h5>Compañía</h5>
                <a href="#que-es">El principio</a>
                <a href="#capacidades">Capacidades</a>
                <a href="#proceso">Proceso</a>
              </div>
              <div className="k-footer-col">
                <h5>Producto</h5>
                <a href="https://kardal.so" target="_blank" rel="noopener noreferrer">kardal.</a>
                <a href="#kardal">Caso de estudio</a>
              </div>
              <div className="k-footer-col">
                <h5>Contacto</h5>
                <a href="mailto:hola@komerze.co">hola@komerze.co</a>
                <a href="#contacto">Conversemos</a>
              </div>
            </div>
          </div>
          <div className="k-footer-bottom">
            <p>© 2026 Komerze Company LLC. Todos los derechos reservados.</p>
            <div className="k-footer-legal">
              <a href="#">Privacidad</a>
              <a href="#">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
