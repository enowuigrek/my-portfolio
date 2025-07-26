import { Brain, Lightbulb, Target, Users, Settings } from 'lucide-react'
import Modal from '../../ui/Modal'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function StrengthsModal({ isOpen, onClose }) {
    const { language } = useLanguage()
    const t = translations[language]

    const strengthsData = [
        {
            id: 1,
            name: language === 'pl' ? "Uczenie się" : "Learner",
            englishName: "Learner",
            domain: language === 'pl' ? "Myślenie strategiczne" : "Strategic Thinking",
            description: language === 'pl'
                ? "Mam ogromną potrzebę nauki i nieustannie chcę się doskonalić. Bardziej ekscytuje mnie sam proces uczenia się niż jego rezultaty."
                : "I have a great need to learn and constantly want to improve. The learning process itself excites me more than its results.",
            keyPoints: language === 'pl'
                ? [
                    "Szybko przyswajam nowe technologie",
                    "Ciągłe poszerzanie wiedzy",
                    "Naturalna ciekawość świata"
                ]
                : [
                    "Quickly absorb new technologies",
                    "Continuous knowledge expansion",
                    "Natural curiosity about the world"
                ]
        },
        {
            id: 2,
            name: language === 'pl' ? "Intelekt" : "Intellection",
            englishName: "Intellection",
            domain: language === 'pl' ? "Myślenie strategiczne" : "Strategic Thinking",
            description: language === 'pl'
                ? "Charakteryzuje mnie aktywność umysłowa. Wnikam w istotę rzeczy i cenię sobie intelektualne dyskusje."
                : "I am characterized by mental activity. I delve into the essence of things and value intellectual discussions.",
            keyPoints: language === 'pl'
                ? [
                    "Głębokie analizowanie problemów",
                    "Logiczne podejście do wyzwań",
                    "Przemyślane rozwiązania"
                ]
                : [
                    "Deep problem analysis",
                    "Logical approach to challenges",
                    "Thoughtful solutions"
                ]
        },
        {
            id: 3,
            name: language === 'pl' ? "Strateg" : "Strategic",
            englishName: "Strategic",
            domain: language === 'pl' ? "Myślenie strategiczne" : "Strategic Thinking",
            description: language === 'pl'
                ? "Tworzę alternatywne sposoby działania. W obliczu każdej sytuacji, potrafię szybko dostrzec istotne schematy oraz kwestie."
                : "I create alternative ways of action. Faced with any situation, I can quickly spot relevant patterns and issues.",
            keyPoints: language === 'pl'
                ? [
                    "Widzę wiele ścieżek rozwiązania",
                    "Przewidywanie konsekwencji",
                    "Planowanie z wyprzedzeniem"
                ]
                : [
                    "See multiple solution paths",
                    "Predicting consequences",
                    "Planning ahead"
                ]
        },
        {
            id: 4,
            name: language === 'pl' ? "Indywidualizacja" : "Individualization",
            englishName: "Individualization",
            domain: language === 'pl' ? "Budowanie relacji" : "Relationship Building",
            description: language === 'pl'
                ? "Intryguje mnie unikalność cech każdej osoby. Posiadam dar zrozumienia, dlaczego ludzie, którzy różnią się od siebie, potrafią wspólnie wydajnie pracować."
                : "I'm intrigued by the uniqueness of each person's traits. I have the gift of understanding why people who differ from each other can work together efficiently.",
            keyPoints: language === 'pl'
                ? [
                    "Rozumiem potrzeby każdego klienta",
                    "Dostosowuję komunikację do odbiorcy",
                    "Personalizowane podejście"
                ]
                : [
                    "Understand each client's needs",
                    "Adapt communication to the audience",
                    "Personalized approach"
                ]
        },
        {
            id: 5,
            name: language === 'pl' ? "Organizator" : "Arranger",
            englishName: "Arranger",
            domain: language === 'pl' ? "Wykonywanie" : "Executing",
            description: language === 'pl'
                ? "Potrafię nie tylko organizować, ale mam także elastyczność, która uzupełnia tę umiejętność. Lubię określać, w jaki sposób użyć wszystkich elementów i zasobów tak, aby osiągnąć maksimum wydajności."
                : "I can not only organize, but I also have flexibility that complements this skill. I like to determine how to use all elements and resources to achieve maximum efficiency.",
            keyPoints: language === 'pl'
                ? [
                    "Efektywne zarządzanie projektami",
                    "Elastyczność w działaniu",
                    "Optymalizacja procesów"
                ]
                : [
                    "Effective project management",
                    "Flexibility in action",
                    "Process optimization"
                ]
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

    const modalTitle = language === 'pl'
        ? "Moje wyniki CliftonStrengths® Assessment"
        : "My CliftonStrengths® Assessment Results"

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={modalTitle}
        >
            <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 mb-2">
                        <strong>CliftonStrengths®</strong> {language === 'pl'
                        ? 'to naukowe narzędzie firmy Gallup do identyfikacji naturalnych talentów.'
                        : 'is a scientific tool by Gallup to identify natural talents.'
                    }
                    </p>
                    <p className="text-xs text-blue-600">
                        {language === 'pl' ? 'Dominująca domena: ' : 'Dominant domain: '}
                        <strong>{language === 'pl' ? 'Myślenie strategiczne' : 'Strategic Thinking'}</strong> - {language === 'pl'
                        ? 'pomagam innym w analizowaniu informacji i podejmowaniu świadomych decyzji.'
                        : 'I help others analyze information and make informed decisions.'
                    }
                    </p>
                </div>

                {strengthsData.map((strength, index) => (
                    <div key={strength.id} className="border-l-4 border-blue-500 pl-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <div className="text-blue-600 mr-2">
                                    {getStrengthIcon(strength.id)}
                                </div>
                                <h4 className="font-bold text-gray-800">
                                    {index + 1}. {strength.name}
                                </h4>
                            </div>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                {strength.domain}
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3 italic">
                            "{strength.description}"
                        </p>
                        <div className="space-y-1">
                            <p className="text-xs font-medium text-gray-700">
                                {language === 'pl' ? 'Jak to wykorzystuję w pracy:' : 'How I use this at work:'}
                            </p>
                            <ul className="text-xs text-gray-600 space-y-1">
                                {strength.keyPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-xs text-gray-600 mb-2">
                        {language === 'pl'
                            ? 'Kompletny raport dostępny na życzenie podczas rozmowy rekrutacyjnej'
                            : 'Complete report available upon request during job interview'
                        }
                    </p>
                    <p className="text-xs text-gray-500">
                        © 2025 Gallup, Inc. All rights reserved. CliftonStrengths® and the 34 CliftonStrengths theme names are trademarks of Gallup, Inc.
                    </p>
                </div>
            </div>
        </Modal>
    )
}

export default StrengthsModal