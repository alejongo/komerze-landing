# Komerze v0.9 - Alpha 🛍️

<div align="center">
  <img src="public/images/Komerze-logo.png" alt="Komerze Logo" width="200"/>
  
  **Plataforma de comercio electrónico B2B moderna y escalable**
  
  ![Status](https://img.shields.io/badge/Status-Alpha-orange.svg)
  ![Version](https://img.shields.io/badge/Version-0.9--alpha-red.svg)
  ![License](https://img.shields.io/badge/License-Proprietary-red.svg)
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.3-646CFF.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.16-38B2AC.svg)](https://tailwindcss.com/)
  [![Supabase](https://img.shields.io/badge/Supabase-2.48.0-3ECF8E.svg)](https://supabase.com/)
</div>

---

## ⚠️ AVISO IMPORTANTE

**Este es un software propietario en fase Alpha.**

- 🔒 **Acceso restringido** - Solo para desarrollo interno y testing autorizado
- 🧪 **En desarrollo activo** - Funcionalidades pueden cambiar sin previo aviso
- 🚧 **No apto para producción** - Úsese únicamente en entornos de desarrollo
- 📝 **Confidencial** - No distribuir sin autorización expresa

## 📋 Descripción

Komerze es una plataforma propietaria de comercio electrónico B2B en fase de desarrollo alpha, diseñada para facilitar las transacciones entre empresas. Ofrece un sistema completo de gestión de catálogos, pedidos, usuarios y vendedores con una interfaz moderna y totalmente responsiva.

> **Nota Alpha**: Esta versión está en desarrollo activo. Algunas funcionalidades pueden estar incompletas o sujetas a cambios significativos.

## ✨ Características Principales (Alpha)

> **Estado**: En desarrollo activo - Funcionalidades marcadas con 🧪 están en testing

### 🏪 Gestión de Catálogo

- **Catálogo de productos completo** con imágenes optimizadas automáticamente ✅
- **Compresión inteligente de imágenes** (máximo 500KB, conversión automática a JPEG) ✅
- **Búsqueda avanzada** por nombre, SKU y categoría 🧪
- **Gestión de inventario** en tiempo real 🧪
- **Soporte para múltiples categorías** y descuentos ✅

### 🛒 Sistema de Pedidos

- **Carrito de compras intuitivo** con persistencia de datos ✅
- **Checkout simplificado** con validación de formularios ✅
- **Gestión de estados de pedidos** (Pendiente, Confirmado, Enviado, Entregado, Cancelado) 🧪
- **Generación automática de PDFs** para órdenes de compra ✅
- **Sistema de notificaciones** por email automático 🧪

### 👥 Gestión de Usuarios

- **Autenticación segura** con Supabase Auth ✅
- **Roles diferenciados**: Administradores, Vendedores, Compradores ✅
- **Gestión de perfiles** con avatares personalizados 🧪
- **Activación de cuentas** por email 🧪
- **Recuperación de contraseñas** segura 🧪

### 📊 Panel de Control

- **Dashboard interactivo** con métricas clave 🧪
- **Vistas responsivas** optimizadas para móvil y desktop ✅
- **Gestión de vendedores** con asignación de negocios 🧪
- **Panel de control administrativo** completo 🧪
- **Reportes de ventas** y estadísticas 🚧

### 📱 Experiencia Responsiva

- **Diseño mobile-first** con breakpoints consistentes ✅
- **Componentes adaptativos** que cambian según el dispositivo ✅
- **Navegación optimizada** para móviles con sidebar colapsable ✅
- **Skeletons responsivos** para mejor UX durante la carga ✅

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 18.3.1** - Biblioteca de interfaz de usuario
- **TypeScript 5.6.2** - Tipado estático
- **Vite 6.2.3** - Bundler y servidor de desarrollo
- **Tailwind CSS 3.4.16** - Framework de CSS utilitario
- **Headless UI** - Componentes accesibles sin estilos

### Backend & Base de Datos

- **Supabase** - Backend como servicio
- **PostgreSQL** - Base de datos relacional
- **Supabase Auth** - Autenticación
- **Row Level Security** - Seguridad a nivel de filas

### Utilidades & Bibliotecas

- **React Hook Form** - Gestión de formularios
- **React Hot Toast** - Notificaciones
- **Heroicons** - Iconografía
- **jsPDF & html2canvas** - Generación de PDFs
- **browser-image-compression** - Optimización de imágenes
- **Resend** - Servicio de emails transaccionales

## 🚀 Instalación y Configuración (Desarrollo)

> **⚠️ Importante**: Este setup es únicamente para entornos de desarrollo autorizado. No instalar en servidores de producción.

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Cuenta en Supabase (configuración específica del proyecto)
- **Acceso autorizado** al repositorio privado

### 1. Acceso al código

```bash
# Solo para desarrolladores autorizados
# Contactar al equipo de desarrollo para acceso
git clone [REPOSITORIO_PRIVADO]
cd komerze
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno (Desarrollo)

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Variables de desarrollo - NO usar en producción
VITE_SUPABASE_URL=https://[proyecto-dev].supabase.co
VITE_SUPABASE_ANON_KEY=[clave_anonima_dev]
VITE_RESEND_API_KEY=[clave_resend_dev]
```

> **🔐 Seguridad**: Las credenciales de desarrollo son proporcionadas por el equipo técnico. Nunca commitas archivos .env.

### 4. Configurar Supabase (Desarrollo)

1. **Acceso a proyecto de desarrollo** en Supabase (contactar administrador)
2. Ejecuta las migraciones desde `supabase/migrations/`
3. Configura las políticas RLS según el entorno de desarrollo

### 5. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

> **📝 Nota**: El servidor de desarrollo incluye hot-reload y debugging habilitado.

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── atoms/          # Componentes básicos
│   ├── molecules/      # Componentes compuestos
│   └── organisms/      # Componentes complejos
├── pages/              # Páginas de la aplicación
├── lib/                # Utilidades y configuraciones
│   ├── helpers/        # Funciones auxiliares
│   ├── hooks/          # Custom hooks
│   ├── store/          # Estado global
│   └── types/          # Definiciones TypeScript
├── supabase/           # Configuración de Supabase
└── utils/              # Utilidades generales
```

## 🎯 Componentes Clave

### ResponsiveSkeleton

Componente unificado que muestra diferentes estados de carga según el dispositivo:

- **Móvil**: Cards skeleton en layout vertical
- **Desktop**: Tabla skeleton tradicional

### AddProductsModal

Modal inteligente para creación y edición de productos con:

- Validación de formularios
- Compresión automática de imágenes
- Feedback visual de progreso

### Dashboard Responsivo

Sistema de navegación adaptativo:

- Sidebar colapsable en móvil
- Dropdown de perfil contextual
- Navegación táctil optimizada

## 🔧 Scripts Disponibles (Desarrollo)

```bash
npm run dev          # Servidor de desarrollo con hot-reload
npm run build        # Build de desarrollo (NO usar para producción)
npm run preview      # Preview del build de desarrollo
npm run lint         # Linting con ESLint
npm run type-check   # Verificación de tipos TypeScript
```

> **📌 Importante**: El comando `build` genera una versión de desarrollo. No está optimizada para producción.

## 📱 Breakpoints Responsivos

El sistema utiliza breakpoints consistentes en toda la aplicación:

```css
/* Móvil */
block sm:hidden

/* Desktop */
hidden sm:block

/* Breakpoint principal */
sm: 640px
```

## 🔐 Seguridad

- **Row Level Security (RLS)** habilitado en todas las tablas
- **Autenticación JWT** con Supabase Auth
- **Validación de formularios** tanto cliente como servidor
- **Sanitización de inputs** para prevenir XSS
- **Políticas de acceso** basadas en roles

## 🚀 Optimizaciones de Rendimiento

- **Lazy loading** de componentes y rutas
- **Compresión automática** de imágenes subidas
- **Memoización** de componentes costosos
- **Debouncing** en búsquedas
- **Skeletons** para mejor UX durante cargas

## 📧 Sistema de Emails

Integración completa con Resend para:

- Emails de bienvenida
- Activación de cuentas
- Recuperación de contraseñas
- Notificaciones de pedidos

Templates disponibles en `emails/templates/`

## 🐛 Debugging y Testing (Alpha)

### Logs de Debug

Para habilitar logs detallados durante el desarrollo:

```typescript
// Variables de debug en localStorage
localStorage.setItem("DEBUG_MODE", "true");

// Los componentes tienen logs de debug habilitados en desarrollo
// Por ejemplo, en CatalogueView.tsx y CostCentersManagementView.tsx
console.log("[DEBUG]", "Estado del componente:", data);
```

### Testing en Alpha

- **🧪 Testing manual**: Todas las funcionalidades requieren testing manual
- **🔍 Bug reporting**: Reportar bugs al equipo de desarrollo inmediatamente
- **📋 Test cases**: Seguir los casos de prueba definidos en la documentación interna
- **⚠️ Limitaciones conocidas**: Ver sección de Issues Conocidos más abajo

### Issues Conocidos (v0.9-alpha)

- **Búsqueda de centros de costos**: En optimización para mejor rendimiento
- **Notificaciones por email**: En testing con Resend
- **Dashboard de métricas**: Datos ficticios durante el desarrollo
- **Gestión de inventario**: Validaciones en desarrollo

> **📝 Reporte de Bugs**: Usar el template interno de reporte de bugs para cualquier issue encontrado.

## 📄 Licencia y Derechos

**Software Propietario - Todos los derechos reservados**

Este software es propiedad exclusiva de [NOMBRE_EMPRESA] y está protegido por las leyes de derechos de autor y propiedad intelectual.

### Restricciones:

- ❌ **Prohibida la distribución** sin autorización expresa
- ❌ **Prohibida la modificación** no autorizada del código fuente
- ❌ **Prohibido el uso comercial** sin licencia específica
- ❌ **Prohibida la ingeniería inversa** o descompilación
- ❌ **Prohibido el acceso** a personal no autorizado

### Uso Autorizado:

- ✅ **Desarrollo interno** por el equipo autorizado
- ✅ **Testing en entornos controlados** bajo supervisión
- ✅ **Documentación** para propósitos de desarrollo interno

> **⚖️ Aviso Legal**: El uso no autorizado de este software puede resultar en acciones legales. Para licencias comerciales o permisos especiales, contactar al departamento legal.

## 🤝 Desarrollo y Contribución (Interno)

### Para Desarrolladores Autorizados:

1. **Solicitar acceso** al repositorio privado
2. **Seguir el workflow** de desarrollo establecido
3. **Crear branch** para cada feature (`git checkout -b feature/nombre-feature`)
4. **Commit con formato estándar** (`git commit -m 'feat: descripción del cambio'`)
5. **Push y solicitar code review** (`git push origin feature/nombre-feature`)
6. **Merge** solo después de aprobación del equipo técnico

### Convenciones de Desarrollo:

- **Nomenclatura**: Seguir convenciones de TypeScript y React
- **Comentarios**: Documentar lógica compleja en español
- **Testing**: Probar manualmente cada cambio antes del commit
- **Debug**: Mantener logs de debug para troubleshooting

### Code Review Process:

- ✅ **Revisión obligatoria** por al menos un senior developer
- ✅ **Testing manual** de funcionalidades afectadas
- ✅ **Verificación de seguridad** para cambios críticos
- ✅ **Documentación actualizada** si es necesario

## 📞 Soporte y Contacto (Interno)

### Para Equipo de Desarrollo:

- **🔧 Soporte Técnico**: [email-interno]@empresa.com
- **📋 Documentación Interna**: [URL-documentacion-interna]
- **🐛 Reporte de Bugs**: [sistema-interno-bugs]
- **💬 Chat del Equipo**: [canal-slack/teams]

### Escalación de Issues:

1. **Bugs menores**: Reportar en el sistema interno
2. **Bugs críticos**: Notificar inmediatamente al tech lead
3. **Problemas de seguridad**: Escalación directa al CTO
4. **Dudas de desarrollo**: Consultar en el canal del equipo

### Horarios de Soporte:

- **Soporte general**: Lunes a Viernes, 9:00 - 18:00
- **Emergencias**: Disponible 24/7 para issues críticos
- **Code reviews**: Martes y Jueves, 14:00 - 16:00

## 🎉 Changelog v0.9-alpha

### ✅ Funcionalidades Implementadas

- **Sistema responsivo unificado** en todas las vistas principales ✅
- **Componente ResponsiveSkeleton** para mejor UX durante cargas ✅
- **Profile dropdown móvil** con navegación intuitiva ✅
- **Optimización automática de imágenes** con compresión inteligente ✅
- **Gestión de centros de costos** con búsqueda optimizada ✅
- **ComboBox de búsqueda** para centros de costos con debouncing ✅

### 🔧 Mejoras Técnicas

- **Breakpoints consistentes** en 640px (sm:) para responsive design
- **Componentes más modulares** y reutilizables
- **Mayor feedback visual** para el usuario durante las operaciones
- **Mejor manejo de errores** y estados de carga
- **Optimización de re-renders** en búsquedas y filtros

### 🐛 Correcciones

- **Flujo de edición de productos** completamente funcional
- **Limpieza de formularios** unificada después de operaciones
- **Mejor manejo de errores** en subida de imágenes
- **Modal de vista/edición** de centros de costos corregido
- **Prevención de búsquedas vacías** que causaban re-renders innecesarios

### 🚧 En Desarrollo (Próximas Iteraciones)

- **Dashboard con métricas reales** (actualmente con datos de prueba)
- **Sistema de notificaciones por email** (en testing con Resend)
- **Gestión avanzada de inventario** con validaciones
- **Reportes de ventas** y analytics
- **Testing automatizado** y suite de pruebas

### 🧪 Testing Pendiente

- **Flujo completo de pedidos** end-to-end
- **Gestión de usuarios** y roles
- **Performance en dispositivos móviles** con datasets grandes
- **Seguridad y validaciones** de inputs
- **Integración con APIs externas**

---

> **📋 Nota para Developers**: Esta es una versión alpha activa. Priorizar testing manual exhaustivo antes de cualquier demo o presentación.

---

<div align="center">
  <strong>🔒 Komerze v0.9-alpha - Software Propietario</strong><br>
  <em>Desarrollado internamente para revolucionar el comercio B2B</em><br><br>
  
  ![Status](https://img.shields.io/badge/Status-Alpha_Development-orange.svg)
  ![Confidential](https://img.shields.io/badge/🔒-Confidencial-red.svg)
  
  <br><br>
  <small>© 2025 - Todos los derechos reservados | Solo para uso interno autorizado</small>
</div>
