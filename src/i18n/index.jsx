import { createContext, useContext, useState, useEffect } from "react";

/* ====================================================
   TRANSLATIONS
   ==================================================== */
export const translations = {
  es: {
    nav: {
      principle: "El principio",
      capabilities: "Capacidades",
      process: "Proceso",
      cta: "Conversemos",
      ariaOpen: "Abrir menú",
      ariaClose: "Cerrar menú",
    },
    hero: {
      eyebrow: "Komerze Company LLC",
      line1: "Construimos compañías",
      line2: "de producto",
      line2em: "para LATAM",
      sub: "Komerze es una Product Led Company builder: diseñamos, construimos y operamos compañías de producto propias. kardal. es la primera — una plataforma de Supplier Intelligence para comercio B2B en Latinoamérica.",
      ctaMain: "Conversemos",
      ctaSecondary: "Ver kardal., nuestra primera compañía",
      proofLabel: "Construido y operado por Komerze",
    },
    spec: {
      cardTitle: "Ficha de Compañía · 001",
      chip: "Operando desde 2026",
      rows: [
        { label: "Modelo",    value: "Compañía de producto propia, operada por Komerze" },
        { label: "Categoría", value: "Supplier Intelligence para comercio B2B" },
        { label: "Mercado",   value: "Latinoamérica, con foco inicial en Colombia" },
        { label: "Estado",    value: "Producto en operación, creciendo sin depender de ventas" },
      ],
      footText: "Primera compañía:",
    },
    strip: {
      kicker: "El principio",
      heading: "Cada compañía que construimos parte del mismo principio: el producto es el vendedor.",
      badLabel: "Producto con fricción",
      badItems: [
        "El valor se entiende después de una demo o una llamada de ventas",
        "El onboarding pide configuración antes de mostrar resultados",
        "Cada paso nuevo es una decisión que el usuario no sabía que tenía que tomar",
        "El crecimiento depende de cuánta gente puede vender el equipo",
      ],
      goodLabel: "Producto en flujo — diseño PLG",
      goodItems: [
        "El usuario llega al Aha Moment solo, sin que nadie se lo explique",
        "La activación ocurre antes de pedir nada a cambio",
        "Cada pantalla elimina una decisión en vez de agregar una",
        "El crecimiento viene del uso mismo: cada usuario activado trae al siguiente",
      ],
    },
    caps: {
      heading: "De la fricción al flujo.",
      sub: "Aplicamos la misma disciplina a cada compañía que construimos — de entender por qué un producto no se vende solo, a diseñar el flujo que lo hace crecer.",
      cards: [
        { title: "Estrategia PLG",         body: "Mapeamos el viaje real del usuario — dónde se frustra, dónde abandona, dónde llega al valor sin ayuda — y definimos qué debe sentir el producto en cada paso." },
        { title: "Diseño de producto",     body: "Sistemas de diseño propios, pensados para cada rol que toca el producto — no una interfaz genérica que le sirve a nadie del todo." },
        { title: "Onboarding sin fricción",body: "Rediseñamos el primer minuto del producto para que el usuario llegue al valor antes de tener que configurar, pedir permiso o leer un manual." },
        { title: "Activación y Aha Moment",body: "Identificamos el momento exacto en que un usuario entiende el valor del producto, y diseñamos cada pantalla anterior para llevarlo ahí más rápido." },
        { title: "Growth loops",           body: "Diseñamos los puntos donde el uso de un usuario invita al siguiente — invitaciones, referidos, valor compartido — para que el producto crezca sin depender solo de marketing." },
        { title: "Iteración basada en datos", body: "El diseño no termina en el lanzamiento. Medimos activación y retención reales, y ajustamos el producto contra el comportamiento, no contra la opinión." },
      ],
    },
    case: {
      kicker: "Primera compañía",
      heading: "kardal. es la prueba de que una compañía de producto B2B también puede activarse sola.",
      visitLabel: "Visitar kardal.so",
      brandTag: "Supplier Intelligence",
      panelH3: "Un flywheel bilateral diseñado para que cada usuario active al siguiente.",
      panelP: "Komerze construye y opera kardal. de extremo a extremo: dos interfaces — Seller Studio y Supplier Intelligence — construidas alrededor de un mismo Aha Moment medible y un flywheel donde comprador y proveedor se invitan mutuamente.",
      stats: [
        { label: "Personas de usuario, cada una con su propio flujo de activación" },
        { label: "Aha Moment definido y medido como evento de producto" },
        { label: "Desde la estrategia de categoría hasta la compañía operando" },
        { label: "Flywheel inverso: el comprador invita al proveedor y crece la red" },
      ],
      builtText: "Construida y operada por",
      tags: ["Producto propio", "Estrategia PLG", "Diseño de producto", "Operación continua"],
    },
    process: {
      heading: "Cómo construimos.",
      sub: "Sin intermediarios entre la investigación y el diseño final. El mismo equipo recorre cada compañía de principio a fin.",
      steps: [
        { title: "Diagnóstico de fricción", body: "Mapeamos el viaje real del usuario y encontramos dónde se pierde la activación — antes de proponer ningún rediseño." },
        { title: "Estrategia de activación", body: "Definimos el Aha Moment, las métricas que lo prueban y el flujo más corto posible para llegar a él." },
        { title: "Diseño del sistema", body: "Diseñamos en iteraciones visibles — prototipos que se prueban con usuarios reales, no una entrega a ciegas." },
        { title: "Medición y ajuste", body: "Lanzamos, medimos activación y retención reales, y seguimos diseñando sobre lo que el comportamiento nos enseña." },
      ],
    },
    cta: {
      eyebrow: "Empecemos",
      headingPre: "¿Tu producto necesita que alguien ",
      headingEm: "lo explique",
      headingPost: " para que funcione?",
      sub: "Cuéntanos cómo se usa tu producto hoy. Te decimos, con honestidad, dónde está la fricción y qué tomaría diseñarla fuera.",
      ctaMain: "Escríbenos a hola@komerze.co",
      ctaSecondary: "Explorar kardal. primero",
    },
    footer: {
      brandText: "Product Led Company builder para Latinoamérica. Diseñamos, construimos y operamos compañías de producto propias.",
      col1Title: "Compañía",
      col1: [
        { label: "El principio", href: "#que-es" },
        { label: "Capacidades",  href: "#capacidades" },
        { label: "Proceso",      href: "#proceso" },
      ],
      col2Title: "Producto",
      col2: [
        { label: "kardal.",         href: "https://kardal.so", external: true },
        { label: "Caso de estudio", href: "#kardal" },
      ],
      col3Title: "Contacto",
      col3: [
        { label: "hola@komerze.co", href: "mailto:hola@komerze.co" },
        { label: "Conversemos",     href: "#contacto" },
      ],
      copyright: "© 2026 Komerze Company LLC. Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos",
    },
  },

  en: {
    nav: {
      principle: "The principle",
      capabilities: "Capabilities",
      process: "Process",
      cta: "Let's talk",
      ariaOpen: "Open menu",
      ariaClose: "Close menu",
    },
    hero: {
      eyebrow: "Komerze Company LLC",
      line1: "We build product",
      line2: "companies",
      line2em: "for LATAM",
      sub: "Komerze is a Product Led Company builder: we design, build, and operate our own product companies. kardal. is the first — a Supplier Intelligence platform for B2B commerce in Latin America.",
      ctaMain: "Let's talk",
      ctaSecondary: "See kardal., our first company",
      proofLabel: "Built and operated by Komerze",
    },
    spec: {
      cardTitle: "Company Profile · 001",
      chip: "Operating since 2026",
      rows: [
        { label: "Model",    value: "Own product company, operated by Komerze" },
        { label: "Category", value: "Supplier Intelligence for B2B commerce" },
        { label: "Market",   value: "Latin America, with initial focus on Colombia" },
        { label: "Status",   value: "Product in operation, growing without depending on sales" },
      ],
      footText: "First company:",
    },
    strip: {
      kicker: "The principle",
      heading: "Every company we build starts from the same principle: the product is the salesperson.",
      badLabel: "Product with friction",
      badItems: [
        "Value is only understood after a demo or a sales call",
        "Onboarding asks for configuration before showing results",
        "Every new step is a decision the user didn't know they had to make",
        "Growth depends on how many people the team can sell to",
      ],
      goodLabel: "Product in flow — PLG design",
      goodItems: [
        "The user reaches the Aha Moment alone, without anyone explaining it",
        "Activation happens before asking for anything in return",
        "Every screen removes a decision instead of adding one",
        "Growth comes from usage itself: every activated user brings the next",
      ],
    },
    caps: {
      heading: "From friction to flow.",
      sub: "We apply the same discipline to every company we build — from understanding why a product doesn't sell itself, to designing the flow that makes it grow.",
      cards: [
        { title: "PLG Strategy",         body: "We map the real user journey — where they get frustrated, where they drop off, where they reach value on their own — and define what the product should feel like at each step." },
        { title: "Product design",       body: "Custom design systems tailored to each role that touches the product — not a generic interface that works for nobody completely." },
        { title: "Frictionless onboarding", body: "We redesign the product's first minute so users reach value before having to configure anything, ask permission, or read a manual." },
        { title: "Activation & Aha Moment", body: "We identify the exact moment a user understands the product's value, and design every prior screen to get them there faster." },
        { title: "Growth loops",         body: "We design the points where one user's usage invites the next — referrals, invitations, shared value — so the product grows without relying solely on marketing." },
        { title: "Data-driven iteration",body: "Design doesn't end at launch. We measure real activation and retention, and keep designing based on behavior, not opinion." },
      ],
    },
    case: {
      kicker: "First company",
      heading: "kardal. proves that a B2B product company can also activate on its own.",
      visitLabel: "Visit kardal.so",
      brandTag: "Supplier Intelligence",
      panelH3: "A bilateral flywheel designed so every user activates the next.",
      panelP: "Komerze builds and operates kardal. end-to-end: two interfaces — Seller Studio and Supplier Intelligence — built around a single measurable Aha Moment and a flywheel where buyer and supplier mutually invite each other.",
      stats: [
        { label: "User personas, each with their own activation flow" },
        { label: "Aha Moment defined and measured as a product event" },
        { label: "From category strategy to operating company" },
        { label: "Inverse flywheel: the buyer invites the supplier and the network grows" },
      ],
      builtText: "Built and operated by",
      tags: ["Own product", "PLG strategy", "Product design", "Continuous operation"],
    },
    process: {
      heading: "How we build.",
      sub: "No intermediaries between research and final design. The same team carries each company from start to finish.",
      steps: [
        { title: "Friction diagnosis",    body: "We map the real user journey and find where activation breaks down — before proposing any redesign." },
        { title: "Activation strategy",   body: "We define the Aha Moment, the metrics that prove it, and the shortest possible flow to get there." },
        { title: "System design",         body: "We design in visible iterations — prototypes tested with real users, not a blind delivery." },
        { title: "Measurement & adjustment", body: "We launch, measure real activation and retention, and keep designing based on what behavior teaches us." },
      ],
    },
    cta: {
      eyebrow: "Let's start",
      headingPre: "Does your product need someone to ",
      headingEm: "explain it",
      headingPost: " for it to work?",
      sub: "Tell us how your product is used today. We'll tell you, honestly, where the friction is and what it would take to design it away.",
      ctaMain: "Write us at hola@komerze.co",
      ctaSecondary: "Explore kardal. first",
    },
    footer: {
      brandText: "Product Led Company builder for Latin America. We design, build, and operate our own product companies.",
      col1Title: "Company",
      col1: [
        { label: "The principle", href: "#que-es" },
        { label: "Capabilities",  href: "#capacidades" },
        { label: "Process",       href: "#proceso" },
      ],
      col2Title: "Product",
      col2: [
        { label: "kardal.",    href: "https://kardal.so", external: true },
        { label: "Case study", href: "#kardal" },
      ],
      col3Title: "Contact",
      col3: [
        { label: "hola@komerze.co", href: "mailto:hola@komerze.co" },
        { label: "Let's talk",      href: "#contacto" },
      ],
      copyright: "© 2026 Komerze Company LLC. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
};

/* ====================================================
   CONTEXT + HOOK
   ==================================================== */
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== "undefined" && localStorage.getItem("k-lang");
    return saved === "en" ? "en" : "es";
  });

  useEffect(() => {
    localStorage.setItem("k-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
