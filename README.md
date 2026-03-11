# Shofly 🚀

## Descripción
**Shofly** es una plataforma web para la venta y visualización de productos relacionados con motocicletas. Permite a los usuarios explorar productos, agregar favoritos, iniciar sesión y gestionar su experiencia de manera sencilla e intuitiva.  
El proyecto está desarrollado con **React** y **Material-UI**, garantizando una interfaz moderna, interactiva y responsiva.

## Características principales
- Registro e inicio de sesión de usuarios.
- Visualización de productos de motos con imágenes y detalles.
- Funcionalidad de favoritos para guardar productos.
- Interactividad con hooks de React (`useState`, `useEffect`, `useContext`, `useMemo`).
- Diseño responsivo y moderno usando Material-UI.
- Íconos y elementos gráficos adaptados al estilo de Shofly.
- Posible integración futura con carrito de compras y pagos online.

## Interfaz gráfica
- Barra de navegación con acceso a categorías y perfil de usuario.
- Listado de productos en tarjetas interactivas con botones de acción.
- Formulario de inicio de sesión con validación de campos y íconos.
- Diseño adaptado a dispositivos móviles y escritorio.
- Temas y colores consistentes con la identidad visual de Shofly.

## Arquitectura del Proyecto
- **Frontend:** React + Material-UI
- **Gestión de estado:** Hooks de React (`useState`, `useContext`, `useMemo`)
- **Routing:** React Router
- **Estilos:** Material-UI + CSS modular
- **Estructura de carpetas recomendada:**

- Shofly/
├─ dist/ # Archivos de producción generados por Vite
├─ node_modules/ # Dependencias del proyecto
├─ public/ # Archivos estáticos (íconos, favicon, etc.)
├─ src/
│ ├─ components/ # Componentes reutilizables de UI
│ │ ├─ Content.jsx
│ │ ├─ Footer.jsx
│ │ ├─ Header.jsx
│ │ └─ StatusBar.jsx
│ ├─ features/ # Funcionalidades específicas
│ │ └─ auth/ # Componentes de autenticación
│ │ ├─ Myaccount.jsx
│ │ ├─ Mybuys.jsx
│ │ └─ Myfavorities.jsx
│ ├─ hooks/ # Hooks personalizados
│ ├─ layout/ # Componentes de layout (por ejemplo contenedores)
│ ├─ pages/ # Vistas principales de la aplicación
│ │ ├─ Views/
│ │ │ ├─ components/
│ │ │ │ ├─ Article.jsx
│ │ │ │ └─ Offers.jsx
│ │ │ └─ hooks/
│ │ └─ shared/ # Elementos compartidos entre páginas
│ ├─ App.jsx # Componente principal
│ ├─ main.jsx # Entrada de la aplicación
│ └─ routes.jsx # Configuración de rutas
├─ .gitignore # Archivos ignorados por Git
├─ eslint.config.js # Configuración de ESLint
├─ index.html # Página principal
├─ package.json # Dependencias y scripts del proyecto
├─ package-lock.json # Registro de versiones exactas de dependencias
├─ README.md # Documentación del proyecto
└─ vite.config.js # Configuración de Vite

## Datos importantes del Autor
- **Nombre:** Daniel Cardona
- **Proyecto:** Shofly – Tienda de productos de motos
- **Contacto:** stiv2021@gmail.com
- **Año:** 2026
