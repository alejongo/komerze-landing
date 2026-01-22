# Role
Act as a Senior Frontend Architect and Copywriter specialized in high-conversion B2B SaaS websites.

# Project
Build the high-fidelity landing page for "Komerze", a Smart Supplier Hub.
Target Audience: CFOs and Operations Managers in LATAM (ES), Brazil (PT), and Global (EN).

# Tech Stack & Strategy
- **Core:** Astro (Latest) - for 100/100 performance and SEO.
- **Interactivity:** React Islands (for specific components like the Hero and Bento Grid).
- **Animation:** Framer Motion (inside React components).
- **Styling:** Tailwind CSS.
- **I18n:** Astro Native Routing (`/es` (default), `/pt`, `/en`).

# Design System ("The 2026 Neo-SaaS Look")
- **Palette:** Deep Midnight Navy (#0f172a) base, White text, accents in "Electric Indigo" (#6366f1) & "Mint Teal" (#2dd4bf).
- **Vibe:** "Spatial Glassmorphism". Clean, dark mode, subtle depth, premium feel.
- **Tone:** Human, direct, anti-bureaucracy. NO corporate jargon.

# Content Dictionary (The Truth Source)
Create a file `src/i18n/ui.ts` (or similar) and use EXACTLY this content structure. Do not invent text.

```typescript
export const languages = {
  es: 'Español',
  pt: 'Português',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    nav: {
      product: "Producto",
      pricing: "Precios",
      login: "Entrar",
      demo: "Ver Demo",
    },
    hero: {
      headline: "Descentraliza las compras. Centraliza el control.",
      subheadline: "La libertad de un E-commerce. La rigurosidad de un ERP.",
      cta: "Iniciar Piloto",
      notification: "✅ Solicitud aprobada automáticamente (Presupuesto OK)",
    },
    ticker: {
      processed: "$4.2M procesados hoy",
      time: "Aprobación prom: 12 min",
      companies: "150+ Empresas felices",
    },
    problem: {
      title: "El caos manual",
      text: "Tu equipo no odia comprar. Odia la burocracia. Correos perdidos, PDFs infinitos y '¿quién aprueba esto?'",
    },
    solution: {
      title: "La claridad Komerze",
      text: "Todo conectado. Todo fluye.",
    },
    bento: {
      budget_title: "Smart Budget",
      budget_desc: "Presupuestos pre-cargados. Si hay saldo, no hay espera.",
      market_title: "Marketplace B2B",
      market_desc: "Tus proveedores, experiencia tipo Amazon.",
      compliance_title: "Compliance Auto",
      compliance_desc: "Sin facturas perdidas. Cruce automático.",
      speed_title: "Velocidad",
      speed_desc: "De 3 días a 3 minutos.",
    },
    roles: {
      finance_btn: "Soy Finanzas",
      finance_msg: "Deja de ser el policía. Cuida la caja, no los recibos.",
      buyer_btn: "Soy Comprador",
      buyer_msg: "Compra en 3 clicks. Sin papeleo, sin dramas.",
    },
    cta_final: {
      title: "¿Listo para soltar el Excel?",
      btn: "Hablemos",
    },
  },
  pt: {
    nav: {
      product: "Produto",
      pricing: "Preços",
      login: "Entrar",
      demo: "Ver Demo",
    },
    hero: {
      headline: "Descentralize as compras. Centralize o controle.",
      subheadline: "A liberdade do E-commerce. O rigor do ERP.",
      cta: "Começar Piloto",
      notification: "✅ Solicitação aprovada automaticamente (Budget OK)",
    },
    ticker: {
      processed: "$4.2M processados hoje",
      time: "Aprovação média: 12 min",
      companies: "150+ Empresas ativas",
    },
    problem: {
      title: "O caos manual",
      text: "Seu time não odeia comprar. Odeia a burocracia. E-mails perdidos, PDFs infinitos e 'quem aprova isso?'",
    },
    solution: {
      title: "A clareza Komerze",
      text: "Tudo conectado. Tudo flui.",
    },
    bento: {
      budget_title: "Smart Budget",
      budget_desc: "Orçamentos pré-carregados. Tem saldo? Passou.",
      market_title: "Marketplace B2B",
      market_desc: "Seus fornecedores, experiência tipo Amazon.",
      compliance_title: "Compliance Auto",
      compliance_desc: "Sem notas fiscais perdidas. Cruzamento automático.",
      speed_title: "Velocidade",
      speed_desc: "De 3 dias para 3 minutos.",
    },
    roles: {
      finance_btn: "Sou Financeiro",
      finance_msg: "Pare de ser o 'policial'. Cuide do caixa, não dos recibos.",
      buyer_btn: "Sou Comprador",
      buyer_msg: "Compre em 3 cliques. Sem papelada, sem drama.",
    },
    cta_final: {
      title: "Pronto para largar o Excel?",
      btn: "Vamos conversar",
    },
  },
  en: {
    nav: {
      product: "Product",
      pricing: "Pricing",
      login: "Log in",
      demo: "Watch Demo",
    },
    hero: {
      headline: "Decentralize buying. Centralize control.",
      subheadline: "E-commerce freedom. ERP rigor.",
      cta: "Start Pilot",
      notification: "✅ Request auto-approved (Budget OK)",
    },
    ticker: {
      processed: "$4.2M processed today",
      time: "Avg approval: 12 min",
      companies: "150+ Happy companies",
    },
    problem: {
      title: "Manual Chaos",
      text: "Your team doesn't hate buying. They hate red tape. Lost emails, endless PDFs, and the 'who approves this?' game.",
    },
    solution: {
      title: "Komerze Clarity",
      text: "Everything connected. Everything flows.",
    },
    bento: {
      budget_title: "Smart Budget",
      budget_desc: "Pre-loaded budgets. Funds available? It goes through.",
      market_title: "B2B Marketplace",
      market_desc: "Your suppliers, Amazon-like experience.",
      compliance_title: "Auto Compliance",
      compliance_desc: "No lost invoices. Automatic 3-way matching.",
      speed_title: "Speed",
      speed_desc: "From 3 days to 3 minutes.",
    },
    roles: {
      finance_btn: "I'm Finance",
      finance_msg: "Stop being the police. Guard the bank, not the receipts.",
      buyer_btn: "I'm a Buyer",
      buyer_msg: "Buy in 3 clicks. No paperwork, no drama.",
    },
    cta_final: {
      title: "Ready to ditch the spreadsheets?",
      btn: "Let's talk",
    },
  },
};
