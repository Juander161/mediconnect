import { useState } from 'react';
import { Toast } from './components/Toast';
import { SkeletonLoader } from './components/SkeletonLoader';
import { ProfileSelector } from './components/ProfileSelector';
import { Chatbot } from './components/Chatbot';
import { DoctorDashboard } from './components/DoctorDashboard';

// Página de demostración de todas las nuevas características
export default function DemoPage() {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showSkeleton, setShowSkeleton] = useState(false);
    const [showProfileSelector, setShowProfileSelector] = useState(false);
    const [showChatbot, setShowChatbot] = useState(false);
    const [showDoctorView, setShowDoctorView] = useState(false);

    const [profiles] = useState([
        { id: 1, name: 'Juan Pérez', relation: 'Mi Perfil (Titular)' },
        { id: 2, name: 'Mateo Pérez', relation: 'Hijo' },
        { id: 3, name: 'Elena Pérez', relation: 'Madre' }
    ]);
    const [currentProfile, setCurrentProfile] = useState(profiles[0]);

    const showNotification = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const showSkeletonDemo = () => {
        setShowSkeleton(true);
        setTimeout(() => setShowSkeleton(false), 2000);
    };

    if (showSkeleton) {
        return <SkeletonLoader />;
    }

    if (showDoctorView) {
        return (
            <DoctorDashboard
                onSwitchToPatient={() => setShowDoctorView(false)}
                onLogout={() => setShowDoctorView(false)}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🚀 Demo de Nuevas Características
                    </h1>
                    <p className="text-xl text-gray-700">
                        Prueba cada una de las 5 características implementadas
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Demo 1: Toast Notifications */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-3">
                                <span className="text-3xl">🔔</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Notificaciones Toast
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Notificaciones flotantes con animaciones
                            </p>
                        </div>

                        <div className="space-y-2">
                            <button
                                onClick={() => showNotification('✅ Cita agendada exitosamente')}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                            >
                                Éxito
                            </button>
                            <button
                                onClick={() => showNotification('⚠️ Tienes una cita pendiente mañana')}
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                            >
                                Recordatorio
                            </button>
                            <button
                                onClick={() => showNotification('📩 Solicitud enviada al doctor')}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                            >
                                Info
                            </button>
                        </div>
                    </div>

                    {/* Demo 2: Profile Selector */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-3">
                                <span className="text-3xl">👥</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Multi-Perfil
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Sistema de beneficiarios familiar
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-600 mb-1">Perfil Actual:</p>
                            <p className="text-lg font-bold text-gray-800">{currentProfile.name}</p>
                            <p className="text-sm text-gray-500">{currentProfile.relation}</p>
                        </div>

                        <button
                            onClick={() => setShowProfileSelector(true)}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-all"
                        >
                            Cambiar Perfil
                        </button>
                    </div>

                    {/* Demo 3: Chatbot */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mb-3">
                                <span className="text-3xl">🤖</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Sintomatólogo IA
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Chatbot de triaje médico
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700">
                                • Evalúa síntomas paso a paso<br />
                                • Recomienda especialista<br />
                                • Detecta casos urgentes
                            </p>
                        </div>

                        <button
                            onClick={() => setShowChatbot(true)}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all"
                        >
                            Iniciar Chat
                        </button>
                    </div>

                    {/* Demo 4: Skeleton Loader */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mb-3">
                                <span className="text-3xl">⏳</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Skeleton Loader
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Efecto de carga profesional
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700">
                                • Animación pulse<br />
                                • Simula estructura de página<br />
                                • Mejora experiencia de usuario
                            </p>
                        </div>

                        <button
                            onClick={showSkeletonDemo}
                            className="w-full bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition-all"
                        >
                            Ver Skeleton
                        </button>
                    </div>

                    {/* Demo 5: Doctor Dashboard */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full mb-3">
                                <span className="text-3xl">👨‍⚕️</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Vista de Doctor
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Dashboard médico completo
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700">
                                • Lista de pacientes<br />
                                • Estadísticas del mes<br />
                                • Gestión de suscripción
                            </p>
                        </div>

                        <button
                            onClick={() => setShowDoctorView(true)}
                            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all"
                        >
                            Ver Vista Doctor
                        </button>
                    </div>

                    {/* Info Card */}
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl p-6 text-white">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
                                <span className="text-3xl">💡</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">
                                ¡Todo Listo!
                            </h3>
                            <p className="mb-4">
                                Todas las características están implementadas y funcionando
                            </p>

                            <div className="bg-white/20 rounded-lg p-4 space-y-2 text-sm">
                                <p>✅ 5 Componentes creados</p>
                                <p>✅ Animaciones CSS</p>
                                <p>✅ Documentación completa</p>
                                <p>✅ Guía de integración</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer con instrucciones */}
                <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        📚 Documentación Disponible
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-left">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                            <h4 className="font-bold text-green-800 mb-2">FEATURES.md</h4>
                            <p className="text-sm text-green-700">
                                Descripción detallada de cada característica y cómo usarla
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                            <h4 className="font-bold text-blue-800 mb-2">INTEGRATION_GUIDE.md</h4>
                            <p className="text-sm text-blue-700">
                                Guía paso a paso para integrar en App.jsx con números de línea
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                            <h4 className="font-bold text-purple-800 mb-2">README_DEMO.md</h4>
                            <p className="text-sm text-purple-700">
                                Información general y opciones para continuar
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modales y componentes flotantes */}
            <Toast
                message={toastMessage}
                show={showToast}
                onClose={() => setShowToast(false)}
            />

            {showProfileSelector && (
                <ProfileSelector
                    profiles={profiles}
                    currentProfile={currentProfile}
                    onSelectProfile={(profile) => {
                        setCurrentProfile(profile);
                        setShowProfileSelector(false);
                        showNotification(`Perfil cambiado a: ${profile.name}`);
                    }}
                    onClose={() => setShowProfileSelector(false)}
                />
            )}

            {showChatbot && (
                <Chatbot
                    onClose={() => setShowChatbot(false)}
                    onConsultSpecialist={() => {
                        setShowChatbot(false);
                        showNotification('Redirigiendo al directorio de especialistas...');
                    }}
                />
            )}
        </div>
    );
}
