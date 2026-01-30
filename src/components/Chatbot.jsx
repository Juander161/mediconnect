import { useState } from 'react';

// Sintomatólogo - Chatbot de Triaje
export const Chatbot = ({ onClose, onConsultSpecialist }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});

    const questions = [
        {
            id: 'symptom',
            question: '¿Qué síntoma principal presentas?',
            options: [
                { label: 'Dolor de cabeza', value: 'headache', next: 1 },
                { label: 'Fiebre', value: 'fever', next: 2 },
                { label: 'Dolor abdominal', value: 'stomach', next: 3 },
                { label: 'Dificultad respiratoria', value: 'breathing', next: 4 }
            ]
        },
        {
            id: 'headache_intensity',
            question: '¿Qué tan intenso es el dolor de cabeza?',
            options: [
                { label: 'Leve', value: 'mild', specialist: 'Medicina General', urgent: false },
                { label: 'Moderado', value: 'moderate', specialist: 'Medicina General', urgent: false },
                { label: 'Intenso/Súbito', value: 'severe', specialist: 'Neurólogo', urgent: true }
            ]
        },
        {
            id: 'fever_temp',
            question: '¿Cuál es tu temperatura aproximada?',
            options: [
                { label: 'Menos de 38°C', value: 'low', specialist: 'Medicina General', urgent: false },
                { label: '38-39°C', value: 'medium', specialist: 'Medicina General', urgent: false },
                { label: 'Más de 39°C', value: 'high', specialist: 'Medicina General', urgent: true }
            ]
        },
        {
            id: 'stomach_severity',
            question: '¿El dolor abdominal es muy intenso?',
            options: [
                { label: 'Leve/Moderado', value: 'mild', specialist: 'Gastroenterólogo', urgent: false },
                { label: 'Intenso con vómito', value: 'severe', specialist: 'Gastroenterólogo', urgent: true }
            ]
        },
        {
            id: 'breathing_severity',
            question: '¿Tienes dificultad significativa para respirar?',
            options: [
                { label: 'Leve', value: 'mild', specialist: 'Neumólogo', urgent: false },
                { label: 'Severa', value: 'severe', specialist: 'Urgencias', urgent: true }
            ]
        }
    ];

    const currentQuestion = questions[step];

    const handleAnswer = (option) => {
        setAnswers({ ...answers, [currentQuestion.id]: option.value });

        if (option.specialist) {
            showResult(option.specialist, option.urgent);
        } else if (option.next !== undefined) {
            setStep(option.next);
        }
    };

    const [result, setResult] = useState(null);

    const showResult = (specialist, urgent) => {
        setResult({ specialist, urgent });
    };

    const resetChat = () => {
        setStep(0);
        setAnswers({});
        setResult(null);
    };

    if (result) {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 animate-scale-in">
                    <div className={`p-6 rounded-xl mb-6 ${result.urgent ? 'bg-red-50 border-2 border-red-500' : 'bg-green-50'}`}>
                        {result.urgent && (
                            <div className="flex items-center gap-2 mb-4 text-red-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <h3 className="text-xl font-bold">¡Atención Urgente!</h3>
                            </div>
                        )}

                        <h3 className={`text-2xl font-bold mb-3 ${result.urgent ? 'text-red-800' : 'text-green-800'}`}>
                            Recomendación
                        </h3>
                        <p className={`text-lg ${result.urgent ? 'text-red-700' : 'text-green-700'}`}>
                            {result.urgent
                                ? `Te recomendamos contactar de inmediato a un ${result.specialist} o acudir a urgencias.`
                                : `Basado en tus síntomas, te sugerimos consultar con: ${result.specialist}`
                            }
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={onConsultSpecialist} className="btn-primary flex-1">
                            Buscar Especialista
                        </button>
                        <button onClick={resetChat} className="btn-secondary flex-1">
                            Nueva Consulta
                        </button>
                    </div>

                    <button onClick={onClose} className="w-full mt-3 text-gray-600 hover:text-gray-800">
                        Cerrar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 animate-scale-in">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-health-green-500 to-lime-vibrant-500 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold gradient-text">Sintomatólogo</h2>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="bg-gradient-to-br from-lime-vibrant-50 to-health-green-50 p-4 rounded-xl mb-6">
                    <p className="text-lg font-semibold text-gray-800 mb-4">{currentQuestion.question}</p>

                    <div className="space-y-2">
                        {currentQuestion.options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(option)}
                                className="w-full p-4 bg-white hover:bg-health-green-50 rounded-lg text-left transition-all border-2 border-transparent hover:border-health-green-500 shadow-sm"
                            >
                                <span className="font-medium text-gray-800">{option.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Paso {step + 1} de {questions.length}</span>
                    {step > 0 && (
                        <button onClick={resetChat} className="text-health-green-600 hover:underline">
                            Reiniciar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
