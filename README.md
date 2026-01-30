# 🏥 MediConnect - Plataforma de Salud

Una aplicación web moderna para conectar pacientes con doctores particulares y proporcionar información de salud. 

## 🌟 Características

- **100% Gratis para Pacientes**: Conecta con especialistas sin costo alguno
- **Directorio Médico Completo**: Encuentra doctores de todas las especialidades
- **Base de Datos de Salud**: Información sobre padecimientos comunes y señales de alerta
- **Navegación Intuitiva**: Interfaz limpia y fácil de usar
- **Diseño Moderno**: UI inspirada en apps móviles de salud con paleta verde vibrante

## 🎨 Características de Diseño

- ✨ Animaciones suaves y transiciones fluidas
- 🎨 Paleta de colores verde lima y verde salud
- 📱 Diseño responsivo (móvil, tablet, desktop)
- 💚 Iconografía personalizada
- 🌈 Gradientes modernos y efectos glassmorphism

## 🚀 Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Framework de estilos utility-first
- **Google Fonts (Inter)** - Tipografía moderna

## 📦 Instalación y Desarrollo

### Requisitos previos
- Node.js (v18 o superior)
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa del build de producción
npm run preview
```

## 🌐 Despliegue en GitHub Pages

### Pasos para publicar:

1. **Inicializar repositorio Git (si no está inicializado)**
```bash
git init
git add .
git commit -m "Initial commit - MediConnect Health Platform"
```

2. **Crear repositorio en GitHub**
   - Ve a [GitHub](https://github.com) y crea un nuevo repositorio
   - Nombre sugerido: `mediconnect-health-platform`
   - No agregues README, .gitignore ni licencia (ya están en el proyecto)

3. **Conectar con GitHub**
```bash
git remote add origin https://github.com/TU-USUARIO/mediconnect-health-platform.git
git branch -M main
git push -u origin main
```

4. **Desplegar a GitHub Pages**
```bash
npm run deploy
```

5. **Configurar GitHub Pages**
   - Ve a la configuración del repositorio en GitHub
   - Sección "Pages"
   - En "Source", selecciona la rama `gh-pages`
   - Guarda los cambios

6. **Acceder a tu aplicación**
   - Tu sitio estará disponible en: `https://TU-USUARIO.github.io/mediconnect-health-platform/`
   - Puede tardar unos minutos en estar disponible

## 📱 Pantallas Incluidas

1. **Landing Page** - Hero con explicación del servicio y llamadas a la acción
2. **Login** - Formulario de inicio de sesión
3. **Registro** - Formulario de creación de cuenta
4. **Dashboard** - Panel principal con 4 acciones principales
5. **Directorio Médico** - Lista de doctores con opción de contacto
6. **Base de Datos de Salud** - Información sobre enfermedades comunes

## 🎯 Modelo de Negocio

- **Pacientes**: Uso 100% gratuito
- **Doctores**: Modelo de suscripción mensual

## 💡 Notas Importantes

- Esta es una **demo interactiva** sin backend real
- Los datos de doctores y enfermedades son simulados
- La navegación es funcional mediante estados de React (useState)
- Todos los botones de navegación funcionan correctamente

## 🔄 Actualizar el sitio en GitHub Pages

Después de hacer cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
npm run deploy
```

## 📝 Licencia

Este proyecto es una demostración y es libre de usar para propósitos educativos.

## 👨‍💻 Desarrollador

Desarrollado como demo interactiva de una plataforma de salud moderna.

---

**¿PARA QUÉ SIRVE?**
- 🩺 Conecta con doctores particulares
- 🚨 Identifica situaciones críticas de salud
- 💚 Agenda citas para ti y tus beneficiarios

© 2026 MediConnect - Tu salud, nuestra prioridad
