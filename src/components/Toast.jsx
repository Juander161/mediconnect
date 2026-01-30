// Componente de notificaciones Toast
export const Toast = ({ message, show, onClose }) => {
    return (
        <div
            className={`fixed top-4 right-4 z-50 transition-all duration-300 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                }`}
        >
            <div className="bg-health-green-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 max-w-md">
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="flex-1">{message}</p>
                <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};
