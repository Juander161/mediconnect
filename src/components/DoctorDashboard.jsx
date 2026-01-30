// Vista de Doctor - Dashboard
export const DoctorDashboard = ({ onSwitchToPatient, onLogout }) => {
    const patients = [
        { id: 1, name: 'Juan Pérez', age: 35, nextAppointment: '2026-02-01 10:00', status: 'Confirmada' },
        { id: 2, name: 'María García', age: 28, nextAppointment: '2026-02-01 14:00', status: 'Pendiente' },
        { id: 3, name: 'Carlos López', age: 42, nextAppointment: '2026-02-02 09:00', status: 'Confirmada' },
        { id: 4, name: 'Ana Martínez', age: 31, nextAppointment: '2026-02-02 16:00', status: 'Confirmada' },
    ];

    return (
        <div className="fade-in min-h-screen">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold">Panel de Doctor</h1>
                            <p className="text-white/90 mt-1">Dr. Roberto Silva - Cardiología</p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={onSwitchToPatient}
                                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all text-sm"
                            >
                                Ver como Paciente
                            </button>
                            <button
                                onClick={onLogout}
                                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span className="hidden sm:inline">Salir</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12">
                    <div className="card bg-white">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-blue-600">24</p>
                            <p className="text-gray-600 mt-1">Pacientes Este Mes</p>
                        </div>
                    </div>
                    <div className="card bg-white">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-green-600">8</p>
                            <p className="text-gray-600 mt-1">Citas Esta Semana</p>
                        </div>
                    </div>
                    <div className="card bg-white">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-purple-600">$450</p>
                            <p className="text-gray-600 mt-1">Suscripción Mensual</p>
                        </div>
                    </div>
                    <div className="card bg-white">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-yellow-600">4.8</p>
                            <p className="text-gray-600 mt-1">Calificación</p>
                        </div>
                    </div>
                </div>

                {/* Patient List */}
                <div className="card">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Mis Pacientes</h2>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            + Nuevo Paciente
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Paciente</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Edad</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Próxima Cita</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Estado</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {patients.map(patient => (
                                    <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-4 font-medium text-gray-800">{patient.name}</td>
                                        <td className="px-4 py-4 text-gray-600">{patient.age}</td>
                                        <td className="px-4 py-4 text-gray-600">{patient.nextAppointment}</td>
                                        <td className="px-4 py-4">
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${patient.status === 'Confirmada'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {patient.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <button className="text-blue-600 hover:text-blue-800 font-medium">
                                                Ver Historial
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Subscription Info */}
                <div className="card bg-gradient-to-r from-purple-600 to-pink-600 text-white mt-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Plan Profesional</h3>
                            <p className="text-white/90">Acceso ilimitado a pacientes • Cobro automático</p>
                        </div>
                        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Gestionar Suscripción
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};
