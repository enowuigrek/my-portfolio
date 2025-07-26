import { useState } from 'react'
import { Eye, ArrowRight, Brain, Lightbulb, Target, Users, Settings } from 'lucide-react'
import StrengthsModal from './StrengthsModal'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function CliftonStrengths({ isVisible }) {
    const [showStrengthsModal, setShowStrengthsModal] = useState(false)
    const { language } = useLanguage()
    const t = translations[language]

    const strengthsData = [
        {
            id: 1,
            name: language === 'pl' ? "Uczenie się" : "Learner",
            keyPoint: language === 'pl'
                ? "Szybko przyswajam nowe technologie"
                : "Quickly absorb new technologies"
        },
        {
            id: 2,
            name: language === 'pl' ? "Intelekt" : "Intellection",
            keyPoint: language === 'pl'
                ? "Głębokie analizowanie problemów"
                : "Deep problem analysis"
        },
        {
            id: 3,
            name: language === 'pl' ? "Strateg" : "Strategic",
            keyPoint: language === 'pl'
                ? "Widzę wiele ścieżek rozwiązania"
                : "See multiple solution paths"
        },
        {
            id: 4,
            name: language === 'pl' ? "Indywidualizacja" : "Individualization",
            keyPoint: language === 'pl'
                ? "Rozumiem potrzeby każdego klienta"
                : "Understand each client's needs"
        },
        {
            id: 5,
            name: language === 'pl' ? "Organizator" : "Arranger",
            keyPoint: language === 'pl'
                ? "Efektywne zarządzanie projektami"
                : "Effective project management"
        }
    ]

    const getStrengthIcon = (id) => {
        switch(id) {
            case 1: return <Brain className="w-6 h-6" />
            case 2: return <Lightbulb className="w-6 h-6" />
            case 3: return <Target className="w-6 h-6" />
            case 4: return <Users className="w-6 h-6" />
            case 5: return <Settings className="w-6 h-6" />
            default: return <Brain className="w-6 h-6" />
        }
    }

    return (
        <>
            <div className={`mb-8 fade-in-left ${isVisible ? 'visible' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                        {t.aboutTalents}
                    </h4>
                    <button
                        onClick={() => setShowStrengthsModal(true)}
                        className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium border border-blue-600 rounded-md px-3 py-1 hover:bg-blue-50 transition duration-200"
                    >
                        <Eye className="w-4 h-4 mr-1" />
                        {t.aboutStrengthsButton}
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    {strengthsData.slice(0, 5).map((strength, index) => (
                        <div
                            key={strength.id}
                            className={`flex items-center bg-blue-50 p-3 rounded-lg fade-in-up stagger-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
                        >
                            <div className="text-blue-600 mr-3">
                                {getStrengthIcon(strength.id)}
                            </div>
                            <div>
                                <span className="font-medium text-blue-800">{strength.name}</span>
                                <p className="text-sm text-blue-600">{strength.keyPoint}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <StrengthsModal
                isOpen={showStrengthsModal}
                onClose={() => setShowStrengthsModal(false)}
            />
        </>
    )
}

export default CliftonStrengths