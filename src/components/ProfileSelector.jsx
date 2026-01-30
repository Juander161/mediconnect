// Componente de selector de perfiles (beneficiarios)
export const ProfileSelector = ({ profiles, currentProfile, onSelectProfile, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-scale-in">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold gradient-text">Cambiar Perfil</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-3">
                    {profiles.map((profile) => (
                        <button
                            key={profile.id}
                            onClick={() => onSelectProfile(profile)}
                            className={`w-full p-4 rounded-xl text-left transition-all ${currentProfile.id === profile.id
                                    ? 'bg-gradient-to-r from-health-green-500 to-lime-vibrant-500 text-white shadow-lg'
                                    : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${currentProfile.id === profile.id ? 'bg-white/20' : 'bg-health-green-100 text-health-green-600'
                                    }`}>
                                    {profile.name[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-lg">{profile.name}</p>
                                    <p className={`text-sm ${currentProfile.id === profile.id ? 'text-white/80' : 'text-gray-600'}`}>
                                        {profile.relation}
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
