# Komerze Landing Page 🛍️

Landing page moderno y responsivo para Komerze, una plataforma B2B que automatiza la gestión de compras a proveedores por diferentes centros de costos.

## 🌟 Características

- **Diseño Moderno**: Interface limpia y profesional con gradientes y animaciones suaves
- **Totalmente Responsivo**: Optimizado para móvil y desktop con navegación adaptativa
- **Performance Optimizada**: Construido con React + Vite para carga rápida
- **SEO Optimizado**: Meta tags y estructura HTML semántica
- **Formulario de Contacto**: Sistema de contacto interactivo para leads
- **Navegación Móvil**: Menú lateral deslizable para dispositivos móviles

## 🛠️ Tecnologías Utilizadas

- **React 19.1.0** - Biblioteca de interfaz de usuario
- **Vite 7.0.6** - Bundler y servidor de desarrollo ultra-rápido
- **Tailwind CSS** - Framework de CSS utilitario (con implementación custom)
- **CSS Custom** - Gradientes y animaciones personalizadas
- **Heroicons** - Iconografía moderna y consistente

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:5173
```

### Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Preview del build de producción
npm run lint         # Ejecutar ESLint
```

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── KomerzeLanding.jsx   # Componente principal del landing
│   ├── MobileMenu.jsx       # Navegación móvil
│   ├── ContactForm.jsx      # Formulario de contacto
│   └── StatsSection.jsx     # Sección de estadísticas animadas
├── App.jsx              # Componente raíz de la aplicación
├── main.jsx             # Punto de entrada de React
├── index.css            # Estilos globales y custom CSS
└── App.css              # Estilos específicos de App

public/
├── komerze-icon.svg     # Favicon personalizado
└── vite.svg             # Logo de Vite (original)
```

## 🎨 Características de Diseño

### Paleta de Colores

- **Primario**: Gradiente azul a púrpura (`#2563eb` → `#7c3aed`)
- **Secundario**: Gradiente cyan (`#06b6d4`)
- **Fondo**: Gradientes suaves azul/cyan claro
- **Texto**: Grises balanceados para óptima legibilidad

### Componentes Destacados

#### Hero Section

- Título con gradiente de texto
- Badges informativos sobre el estado del producto
- CTAs prominentes con efectos hover
- Sección de preview con íconos descriptivos

#### Features Grid

- Cards con efectos hover 3D
- Iconografía consistente
- Información organizada por categorías
- Responsive grid adaptativo

#### Technology Stack

- Visualización de tecnologías utilizadas
- Badges circulares con identificadores
- Grid responsivo

#### Statistics Section

- Contadores animados
- Métricas destacadas
- Fondo oscuro para contraste

#### Contact Form

- Validación en tiempo real
- Diseño accesible
- Información de contacto integrada

### Animaciones

- **Fade In**: Para elementos que aparecen
- **Slide Up**: Para contenido que entra desde abajo
- **Float**: Animación suave para elementos destacados
- **Hover Effects**: Transformaciones en cards y botones

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 640px
- **Desktop**: ≥ 640px (sm:)

### Características Móviles

- Menú hamburguesa con overlay
- Navigation drawer lateral
- Botones y formularios optimizados para touch
- Tipografía escalada apropiadamente

---

<div align="center">
  <strong>🛍️ Komerze Landing Page</strong><br>
  <em>Construido con React + Vite para máximo rendimiento</em><br><br>
  
  ![Status](https://img.shields.io/badge/Status-Production_Ready-green.svg)
  ![React](https://img.shields.io/badge/React-19.1.0-blue.svg)
  ![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF.svg)
  
  <br><br>
  <small>© 2025 Komerze - Landing page moderno y escalable</small>
</div>+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
