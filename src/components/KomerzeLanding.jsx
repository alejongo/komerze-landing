import React, { useState, useEffect, useRef } from "react";
import { useLanguage, translations } from "../i18n";

/* ====================================================
   SVG ICONS
   ==================================================== */
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

/* ====================================================
   PROCESS ICONS (language-independent)
   ==================================================== */
const PROCESS_ICONS = [
  /* 01 — Diagnóstico: magnifying glass with plus */
  <svg key="p1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
  </svg>,
  /* 02 — Estrategia: bullseye */
  <svg key="p2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>,
  /* 03 — Diseño: compass/pen */
  <svg key="p3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
  </svg>,
  /* 04 — Medición: pulse / EKG */
  <svg key="p4" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>,
];

/* CAP CARD ICONS (language-independent) */
const CAP_ICONS = [
  <svg key="c1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" />
  </svg>,
  <IconGrid key="c2" />,
  <svg key="c3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>,
  <svg key="c4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" /><path d="M19 14l.7 2.1L22 17l-2.1.7L19 20l-.7-2.1L16 17l2.1-.7L19 14z" />
  </svg>,
  <svg key="c5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="12" cy="18" r="3" /><line x1="8.5" y1="7.5" x2="15.5" y2="16" /><line x1="15.5" y1="7.5" x2="8.5" y2="16" />
  </svg>,
  <svg key="c6" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" /><path d="M3.5 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.65 4.36A9 9 0 0 0 20.5 15" />
  </svg>,
];

/* ====================================================
   LANGUAGE TOGGLE
   ==================================================== */
function LangToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="k-lang-toggle" role="group" aria-label="Idioma / Language">
      <button
        className={`k-lang-btn${lang === "es" ? " is-active" : ""}`}
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
      <button
        className={`k-lang-btn${lang === "en" ? " is-active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

/* ====================================================
   COUNT-UP HOOK
   ==================================================== */
function useCountUp(target, active) {
  const [count, setCount] = useState(0);
  const ran = useRef(false);
  useEffect(() => {
    if (!active || ran.current || !target) return;
    ran.current = true;
    let current = 0;
    const inc = target / 28;
    const id = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(current));
    }, 40);
    return () => clearInterval(id);
  }, [active, target]);
  return count;
}

function StatCard({ val, label, className = "", countTo, panelVisible }) {
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
  const { lang } = useLanguage();
  const t = translations[lang];

  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const panelRef = useRef(null);

  /* Nav scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Scroll reveal */
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          if (e.target.classList.contains("k-case-panel")) setPanelVisible(true);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal, .reveal-group, .k-compare, .k-case-panel, .k-process-rail")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ====== NAV ====== */}
      <header className={`k-nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="k-wrap k-nav-inner">
          <a href="/" className="k-nav-logo">
            <img src="/images/Komerze-logo.svg" style={{ height: 30 }} alt="Komerze" />
          </a>

          <nav className="k-nav-links">
            <a href="#que-es">{t.nav.principle}</a>
            <a href="#capacidades">{t.nav.capabilities}</a>
            <a href="#kardal">kardal.</a>
            <a href="#proceso">{t.nav.process}</a>
          </nav>

          <div className="k-nav-cta">
            <LangToggle />
            <a href="https://calendly.com/alejo-kardal/30min" className="k-btn-nav">
              {t.nav.cta}
            </a>
            <button className="k-nav-toggle" onClick={() => setMenuOpen(true)} aria-label={t.nav.ariaOpen}>
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
              <button className="k-mobile-close" onClick={() => setMenuOpen(false)} aria-label={t.nav.ariaClose}>
                <IconClose />
              </button>
            </div>
            <nav className="k-mobile-nav">
              <a href="#que-es"     onClick={() => setMenuOpen(false)}>{t.nav.principle}</a>
              <a href="#capacidades" onClick={() => setMenuOpen(false)}>{t.nav.capabilities}</a>
              <a href="#kardal"     onClick={() => setMenuOpen(false)}>kardal.</a>
              <a href="#proceso"    onClick={() => setMenuOpen(false)}>{t.nav.process}</a>
            </nav>
            <div className="k-mobile-cta">
              <div style={{ marginBottom: 12 }}><LangToggle /></div>
              <a href="https://calendly.com/alejo-kardal/30min" className="k-btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setMenuOpen(false)}>
                {t.nav.cta} <IconArrow />
              </a>
            </div>
          </div>
        </>
      )}

      {/* ====== HERO ====== */}
      <section className="k-hero">
        <div className="k-wrap k-hero-grid">
          <div>
            <span className="k-eyebrow">{t.hero.eyebrow}</span>
            <h1 className="k-hero-title">
              <span className="k-htl"><span>{t.hero.line1}</span></span>
              <span className="k-htl"><span>{t.hero.line2} <em>{t.hero.line2em}</em>.</span></span>
            </h1>
            <p className="k-hero-sub">{t.hero.sub}</p>
            <div className="k-hero-actions">
              <a href="https://calendly.com/alejo-kardal/30min" className="k-btn-primary">
                {t.hero.ctaMain} <IconArrow />
              </a>
              <a href="#kardal" className="k-btn-secondary">
                <span className="k-btn-icon"><IconGrid /></span>
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="k-hero-proof">
              <span className="k-hero-proof-label">{t.hero.proofLabel}</span>
              <span className="k-hero-proof-mark">kardal<span className="k-green">.</span></span>
            </div>
          </div>

          {/* Spec card */}
          <div className="k-hero-visual">
            <div className="k-float-chip chip-1">
              <span className="k-chip-dot" />
              {t.spec.chip}
            </div>
            <div className="k-spec-card">
              <div className="k-spec-head">
                <span className="k-spec-head-title">{t.spec.cardTitle}</span>
                <div className="k-spec-dots"><span /><span /><span /></div>
              </div>
              <div className="k-spec-body">
                {t.spec.rows.map((row) => (
                  <div className="k-spec-row" key={row.label}>
                    <span className="k-spec-row-label">{row.label}</span>
                    <span className="k-spec-row-value">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="k-spec-foot">
                <span className="k-pulse" />
                <span className="k-spec-foot-text">
                  {t.spec.footText} <strong>kardal.</strong> — kardal.so
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
            <span className="k-strip-kicker">{t.strip.kicker}</span>
            <h2>{t.strip.heading}</h2>
          </div>
          <div className="k-compare">
            <div className="k-compare-col">
              <span className="k-compare-label">
                <span style={{ display: "flex", width: 15, height: 15 }}><IconMinus /></span>
                {t.strip.badLabel}
              </span>
              <ul className="k-compare-list">
                {t.strip.badItems.map((item) => (
                  <li key={item}><span className="k-compare-ico">✕</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="k-compare-col is-komerze">
              <span className="k-compare-label">
                <span style={{ display: "flex", width: 15, height: 15 }}><IconPlus /></span>
                {t.strip.goodLabel}
              </span>
              <ul className="k-compare-list">
                {t.strip.goodItems.map((item) => (
                  <li key={item}><span className="k-compare-ico">✓</span>{item}</li>
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
            <h2>{t.caps.heading}</h2>
            <p>{t.caps.sub}</p>
          </div>
          <div className="k-cap-grid reveal-group">
            {t.caps.cards.map((card, i) => (
              <div className="k-cap-card" key={card.title}>
                <div className="k-cap-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="k-cap-icon">{CAP_ICONS[i]}</div>
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
              <span className="k-case-kicker">{t.case.kicker}</span>
              <h2>{t.case.heading}</h2>
            </div>
            <a href="https://kardal.so" target="_blank" rel="noopener noreferrer" className="k-case-link">
              {t.case.visitLabel} <IconExternal />
            </a>
          </div>

          <div className="k-case-panel" ref={panelRef}>
            <div className="k-case-panel-top">
              <div>
                <div className="k-case-brand">
                  <span className="k-case-brand-mark">kardal<span className="k-brand-dot" /></span>
                  <span className="k-case-brand-tag">{t.case.brandTag}</span>
                </div>
                <h3>{t.case.panelH3}</h3>
                <p>{t.case.panelP}</p>
              </div>
              <div className="k-case-stats">
                <StatCard countTo={2}  label={t.case.stats[0].label} className="is-amber" panelVisible={panelVisible} />
                <StatCard countTo={1}  label={t.case.stats[1].label} className="is-green" panelVisible={panelVisible} />
                <StatCard val="0→1"   label={t.case.stats[2].label} panelVisible={panelVisible} />
                <StatCard val="↻"     label={t.case.stats[3].label} panelVisible={panelVisible} />
              </div>
            </div>
            <div className="k-case-panel-bottom">
              <span className="k-case-built">
                <span style={{ display: "flex", width: 14, height: 14, color: "#666664" }}><IconWrench /></span>
                {t.case.builtText} <strong>Komerze Company LLC</strong>
              </span>
              <div className="k-case-tags">
                {t.case.tags.map((tag) => <span className="k-case-tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PROCESS ====== */}
      <section className="k-process" id="proceso">
        <div className="k-wrap">
          <div className="k-section-head reveal">
            <h2>{t.process.heading}</h2>
            <p>{t.process.sub}</p>
          </div>
          <div className="k-process-rail">
            {t.process.steps.map((step, i) => {
              const isFirst = i === 0;
              const isLast  = i === t.process.steps.length - 1;
              const num     = String(i + 1).padStart(2, "0");
              return (
                <div key={num} className={`k-process-step${isFirst ? " is-active" : ""}`}>
                  {/* Icon circle + curved dashed connector */}
                  <div className="k-process-node">
                    <div className="k-process-icon">{PROCESS_ICONS[i]}</div>
                    {!isLast && (
                      <svg
                        className="k-process-flow"
                        viewBox="0 0 200 28"
                        preserveAspectRatio="none"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M 0 14 Q 100 5 200 14"
                          stroke="#D4D4CE"
                          strokeWidth="1.5"
                          strokeDasharray="5 5"
                          strokeLinecap="round"
                          vectorEffect="non-scaling-stroke"
                        />
                        <polyline
                          points="193,10 200,14 193,18"
                          stroke="#D4D4CE"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="k-process-step-num">{num}</span>
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
            {t.cta.eyebrow}
          </span>
          <h2>
            {t.cta.headingPre}<em>{t.cta.headingEm}</em>{t.cta.headingPost}
          </h2>
          <p>{t.cta.sub}</p>
          <div className="k-cta-actions">
            <a href="mailto:hola@komerze.co" className="k-btn-primary">
              {t.cta.ctaMain} <IconMail />
            </a>
            <a href="https://kardal.so" target="_blank" rel="noopener noreferrer" className="k-btn-secondary">
              {t.cta.ctaSecondary}
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
              <p>{t.footer.brandText}</p>
            </div>
            <div className="k-footer-cols">
              <div className="k-footer-col">
                <h5>{t.footer.col1Title}</h5>
                {t.footer.col1.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
              </div>
              <div className="k-footer-col">
                <h5>{t.footer.col2Title}</h5>
                {t.footer.col2.map((l) => (
                  <a key={l.label} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{l.label}</a>
                ))}
              </div>
              <div className="k-footer-col">
                <h5>{t.footer.col3Title}</h5>
                {t.footer.col3.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
              </div>
            </div>
          </div>
          <div className="k-footer-bottom">
            <p>{t.footer.copyright}</p>
            <div className="k-footer-legal">
              <a href="#">{t.footer.privacy}</a>
              <a href="#">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
