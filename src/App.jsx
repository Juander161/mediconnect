import { useState } from 'react'
import './index.css'

// Icons components (simples SVG)
const IconCalendar = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const IconDoctors = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const IconMedicine = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const IconHealth = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const IconClose = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const IconBack = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
)

const IconLogout = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
)

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Datos simulados
  const doctors = [
    { id: 1, name: 'Dr. María González', specialty: 'Cardiología', rating: 4.9, image: '👩‍⚕️' },
    { id: 2, name: 'Dr. Carlos Ramírez', specialty: 'Pediatría', rating: 4.8, image: '👨‍⚕️' },
    { id: 3, name: 'Dra. Ana López', specialty: 'Dermatología', rating: 4.7, image: '👩‍⚕️' },
    { id: 4, name: 'Dr. Roberto Martínez', specialty: 'Neurocirugía', rating: 5.0, image: '👨‍⚕️' },
    { id: 5, name: 'Dra. Laura Hernández', specialty: 'Ginecología', rating: 4.9, image: '👩‍⚕️' },
    { id: 6, name: 'Dr. José Silva', specialty: 'Traumatología', rating: 4.6, image: '👨‍⚕️' },
  ]

  const healthInfo = [
    {
      id: 1,
      name: 'Gripe Común',
      symptoms: 'Fiebre, tos, dolor de garganta, congestión nasal',
      treatment: 'Descanso, hidratación abundante, paracetamol para la fiebre',
      warning: 'Consulta inmediata si: Fiebre superior a 39°C por más de 3 días, dificultad para respirar'
    },
    {
      id: 2,
      name: 'Dolor de Cabeza Tensional',
      symptoms: 'Presión en frente y sienes, dolor leve a moderado',
      treatment: 'Descanso en lugar oscuro, compresas frías, analgésicos leves',
      warning: 'Consulta inmediata si: Dolor súbito e intenso, acompañado de rigidez de cuello'
    },
    {
      id: 3,
      name: 'Gastritis Leve',
      symptoms: 'Ardor estomacal, náuseas, sensación de hinchazón',
      treatment: 'Dieta blanda, evitar picantes y grasas, antiácidos',
      warning: 'Consulta inmediata si: Vómito con sangre, dolor abdominal intenso'
    },
    {
      id: 4,
      name: 'Insomnio',
      symptoms: 'Dificultad para conciliar el sueño, despertares frecuentes',
      treatment: 'Higiene del sueño, evitar pantallas antes de dormir, rutina relajante',
      warning: 'Consulta si persiste por más de 2 semanas o afecta tu vida diaria'
    },
    {
      id: 5,
      name: 'Ansiedad Leve',
      symptoms: 'Nerviosismo, preocupación excesiva, tensión muscular',
      treatment: 'Técnicas de respiración, ejercicio regular, meditación',
      warning: 'Consulta inmediata si: Ataques de pánico, pensamientos de autolesión'
    },
  ]

  // Funciones de navegación
  const goToLogin = () => setCurrentScreen('login')
  const goToRegister = () => setCurrentScreen('register')
  const goToDashboard = () => {
    setIsLoggedIn(true)
    setCurrentScreen('dashboard')
  }
  const goToLanding = () => {
    setIsLoggedIn(false)
    setCurrentScreen('landing')
  }
  const goToDirectory = () => setCurrentScreen('directory')
  const goToHealthInfo = () => setCurrentScreen('healthInfo')

  // Landing Page
  const LandingScreen = () => (
    <div className="fade-in min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🏥</div>
            <h1 className="text-2xl font-bold gradient-text">MediConnect</h1>
          </div>
          <div className="flex gap-3">
            <button onClick={goToLogin} className="btn-secondary text-sm sm:text-base">
              Entrar
            </button>
            <button onClick={goToRegister} className="btn-primary text-sm sm:text-base">
              Unirse
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12">
            <div className="mb-8 text-8xl animate-bounce">💚</div>
            <h2 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
              Agenda citas para ti<br />y tus beneficiarios
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Conecta con doctores particulares de manera gratuita y recibe orientación
              sobre tu salud en cualquier momento
            </p>
          </div>

          {/* ¿Para qué sirve? */}
          <div className="card mb-8 pulse-glow">
            <h3 className="text-3xl font-bold text-health-green-700 mb-4 text-center">
              ¿PARA QUÉ SIRVE?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-lime-vibrant-50 to-health-green-50 p-6 rounded-xl">
                <div className="text-4xl mb-3">🩺</div>
                <h4 className="font-bold text-xl text-health-green-800 mb-2">
                  Conecta con Especialistas
                </h4>
                <p className="text-gray-700">
                  Encuentra y agenda citas con doctores particulares de todas las especialidades.
                  100% gratis para pacientes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-lime-vibrant-50 to-health-green-50 p-6 rounded-xl">
                <div className="text-4xl mb-3">🚨</div>
                <h4 className="font-bold text-xl text-health-green-800 mb-2">
                  Identifica Situaciones Críticas
                </h4>
                <p className="text-gray-700">
                  Accede a información de salud que te ayuda a determinar si tu situación
                  requiere atención médica inmediata.
                </p>
              </div>
            </div>
          </div>

          {/* Monetización */}
          <div className="card bg-gradient-to-r from-health-green-600 to-lime-vibrant-600 text-white">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-3">💎 Modelo de Negocio</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                  <div className="text-3xl mb-2">👤</div>
                  <p className="font-semibold text-lg">Para Pacientes</p>
                  <p className="text-sm opacity-90">100% Gratis - Sin cargos ocultos</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                  <div className="text-3xl mb-2">⚕️</div>
                  <p className="font-semibold text-lg">Para Doctores</p>
                  <p className="text-sm opacity-90">Suscripción mensual - Acceso a pacientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md shadow-md py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2026 MediConnect - Tu salud, nuestra prioridad</p>
        </div>
      </footer>
    </div>
  )

  // Login Screen
  const LoginScreen = () => (
    <div className="fade-in min-h-screen flex items-center justify-center p-4">
      <div className="card max-w-md w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold gradient-text">Iniciar Sesión</h2>
          <button onClick={goToLanding} className="text-gray-500 hover:text-health-green-600 transition-colors">
            <IconClose />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-field"
            />
          </div>
          <button onClick={goToDashboard} className="btn-primary w-full mt-6">
            Acceder
          </button>
          <p className="text-center text-gray-600 text-sm mt-4">
            ¿No tienes cuenta?{' '}
            <button onClick={goToRegister} className="text-health-green-600 font-semibold hover:underline">
              Regístrate aquí
            </button>
          </p>
        </div>
      </div>
    </div>
  )

  // Register Screen
  const RegisterScreen = () => (
    <div className="fade-in min-h-screen flex items-center justify-center p-4">
      <div className="card max-w-md w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold gradient-text">Únete Ahora</h2>
          <button onClick={goToLanding} className="text-gray-500 hover:text-health-green-600 transition-colors">
            <IconClose />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              placeholder="Juan Pérez"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              placeholder="+52 123 456 7890"
              className="input-field"
            />
          </div>
          <button onClick={goToDashboard} className="btn-primary w-full mt-6">
            Crear Cuenta Gratis
          </button>
          <p className="text-center text-gray-600 text-sm mt-4">
            ¿Ya tienes cuenta?{' '}
            <button onClick={goToLogin} className="text-health-green-600 font-semibold hover:underline">
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  )

  // Dashboard Screen
  const DashboardScreen = () => (
    <div className="fade-in min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-health-green-600 to-lime-vibrant-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">¡Bienvenido de vuelta! 👋</h1>
              <p className="text-white/90 mt-1">Gestiona tu salud y la de tus beneficiarios</p>
            </div>
            <button
              onClick={goToLanding}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
            >
              <IconLogout />
              <span className="hidden sm:inline">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <button
            onClick={goToDirectory}
            className="card bg-gradient-to-br from-lime-vibrant-400 to-health-green-500 text-white hover:shadow-2xl group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <IconCalendar />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-1">Agendar Cita</h3>
                <p className="text-white/90">Encuentra y contacta especialistas</p>
              </div>
            </div>
          </button>

          <button
            onClick={goToDirectory}
            className="card bg-gradient-to-br from-health-green-500 to-lime-vibrant-400 text-white hover:shadow-2xl group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <IconDoctors />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-1">Mis Doctores</h3>
                <p className="text-white/90">Ver especialistas contactados</p>
              </div>
            </div>
          </button>

          <button
            onClick={goToHealthInfo}
            className="card bg-gradient-to-br from-health-green-600 to-health-green-400 text-white hover:shadow-2xl group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <IconMedicine />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-1">Tratamientos Comunes</h3>
                <p className="text-white/90">Consejos para padecimientos leves</p>
              </div>
            </div>
          </button>

          <button
            onClick={goToHealthInfo}
            className="card bg-gradient-to-br from-lime-vibrant-500 to-lime-vibrant-300 text-white hover:shadow-2xl group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <IconHealth />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-1">Información de Salud</h3>
                <p className="text-white/90">Identifica situaciones críticas</p>
              </div>
            </div>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="card bg-white">
            <div className="text-center">
              <div className="text-4xl mb-2">📅</div>
              <p className="text-3xl font-bold text-health-green-600">0</p>
              <p className="text-gray-600">Citas Programadas</p>
            </div>
          </div>
          <div className="card bg-white">
            <div className="text-center">
              <div className="text-4xl mb-2">👨‍⚕️</div>
              <p className="text-3xl font-bold text-health-green-600">0</p>
              <p className="text-gray-600">Doctores Contactados</p>
            </div>
          </div>
          <div className="card bg-white">
            <div className="text-center">
              <div className="text-4xl mb-2">👥</div>
              <p className="text-3xl font-bold text-health-green-600">1</p>
              <p className="text-gray-600">Beneficiarios</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )

  // Directory Screen
  const DirectoryScreen = () => (
    <div className="fade-in min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-health-green-600 to-lime-vibrant-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={goToDashboard}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all"
            >
              <IconBack />
            </button>
            <div>
              <h1 className="text-3xl font-bold">Directorio Médico 🩺</h1>
              <p className="text-white/90 mt-1">Encuentra especialistas y agenda tu cita gratis</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Buscar por especialidad, nombre..."
            className="input-field text-lg max-w-2xl mx-auto block"
          />
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map(doctor => (
            <div key={doctor.id} className="card group">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{doctor.image}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-health-green-600 font-semibold">{doctor.specialty}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-semibold">{doctor.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>📍</span>
                  <span>Consultorio disponible</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>💰</span>
                  <span className="font-semibold text-health-green-600">Contacto Gratis</span>
                </div>
              </div>

              <button className="btn-primary w-full mt-4 text-sm">
                Contactar Ahora
              </button>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="card bg-gradient-to-r from-lime-vibrant-500 to-health-green-500 text-white mt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">✨ 100% Gratis para Pacientes</h3>
            <p className="text-white/90">
              Contacta a todos los especialistas que necesites sin ningún cargo.
              Tu salud es nuestra prioridad.
            </p>
          </div>
        </div>
      </main>
    </div>
  )

  // Health Info Screen
  const HealthInfoScreen = () => (
    <div className="fade-in min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-health-green-600 to-lime-vibrant-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={goToDashboard}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all"
            >
              <IconBack />
            </button>
            <div>
              <h1 className="text-3xl font-bold">Base de Datos de Salud 💊</h1>
              <p className="text-white/90 mt-1">Información sobre padecimientos comunes</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Warning Banner */}
        <div className="card bg-yellow-50 border-2 border-yellow-400 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">⚠️</span>
            <div>
              <h3 className="font-bold text-yellow-800 text-lg mb-1">Nota Importante</h3>
              <p className="text-yellow-700">
                Los tratamientos aquí descritos son <strong>consejos generales para padecimientos comunes</strong>
                y tienen como objetivo ayudarte a <strong>identificar problemas mayores</strong> que requieren
                atención médica inmediata. No sustituyen la consulta con un profesional de la salud.
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Buscar padecimiento..."
            className="input-field text-lg max-w-2xl mx-auto block"
          />
        </div>

        {/* Health Info Cards */}
        <div className="space-y-6">
          {healthInfo.map(info => (
            <div key={info.id} className="card">
              <h3 className="text-2xl font-bold text-health-green-700 mb-4 flex items-center gap-2">
                <span>📋</span> {info.name}
              </h3>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <span>🩺</span> Síntomas
                  </h4>
                  <p className="text-blue-800">{info.symptoms}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <span>💊</span> Tratamiento Recomendado
                  </h4>
                  <p className="text-green-800">{info.treatment}</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
                  <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <span>🚨</span> Señales de Alerta
                  </h4>
                  <p className="text-red-800 font-semibold">{info.warning}</p>
                </div>
              </div>

              <button
                onClick={goToDirectory}
                className="btn-primary w-full mt-4"
              >
                Consultar con un Especialista
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen />
      case 'register':
        return <RegisterScreen />
      case 'dashboard':
        return <DashboardScreen />
      case 'directory':
        return <DirectoryScreen />
      case 'healthInfo':
        return <HealthInfoScreen />
      default:
        return <LandingScreen />
    }
  }

  return (
    <div className="min-h-screen">
      {renderScreen()}
    </div>
  )
}

export default App
