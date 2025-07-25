import { useState } from 'react'
import { Eye, X, Brain, Lightbulb, Target, Users, Settings, ArrowRight, Zap, Users2, TrendingUp } from 'lucide-react'
import Modal from '../ui/Modal'

function About() {
    const [showStrengthsModal, setShowStrengthsModal] = useState(false)

    const strengthsData = [
        {
            id: 1,
            name: "Uczenie się",
            englishName: "Learner",
            domain: "Myślenie strategiczne",
            description: "Mam ogromną potrzebę nauki i nieustannie chcę się doskonalić. Bardziej ekscytuje mnie sam proces uczenia się niż jego rezultaty.",
            keyPoints: [
                "Szybko przyswajam nowe technologie",
                "Ciągłe poszerzanie wiedzy",
                "Naturalna ciekawość świata"
            ]
        },
        {
            id: 2,
            name: "Intelekt",
            englishName: "Intellection",
            domain: "Myślenie strategiczne",
            description: "Charakteryzuje mnie aktywność umysłowa. Wnikam w istotę rzeczy i cenię sobie intelektualne dyskusje.",
            keyPoints: [
                "Głębokie analizowanie problemów",
                "Logiczne podejście do wyzwań",
                "Przemyślane rozwiązania"
            ]
        },
        {
            id: 3,
            name: "Strateg",
            englishName: "Strategic",
            domain: "Myślenie strategiczne",
            description: "Tworzę alternatywne sposoby działania. W obliczu każdej sytuacji, potrafię szybko dostrzec istotne schematy oraz kwestie.",
            keyPoints: [
                "Widzę wiele ścieżek rozwiązania",
                "Przewidywanie konsekwencji",
                "Planowanie z wyprzedzeniem"
            ]
        },
        {
            id: 4,
            name: "Indywidualizacja",
            englishName: "Individualization",
            domain: "Budowanie relacji",
            description: "Intryguje mnie unikalność cech każdej osoby. Posiadam dar zrozumienia, dlaczego ludzie, którzy różnią się od siebie, potrafią wspólnie wydajnie pracować.",
            keyPoints: [
                "Rozumiem potrzeby każdego klienta",
                "Dostosowuję komunikację do odbiorcy",
                "Personalizowane podejście"
            ]
        },
        {
            id: 5,
            name: "Organizator",
            englishName: "Arranger",
            domain: "Wykonywanie",
            description: "Potrafię nie tylko organizować, ale mam także elastyczność, która uzupełnia tę umiejętność. Lubię określać, w jaki sposób użyć wszystkich elementów i zasobów tak, aby osiągnąć maksimum wydajności.",
            keyPoints: [
                "Efektywne zarządzanie projektami",
                "Elastyczność w działaniu",
                "Optymalizacja procesów"
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

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        O mnie
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Frontend Developer & Problem Solver
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Po ponad dziesięciu latach pracy w sprzedaży B2B zdecydowałem się na kierunek,
                                który od dawna rozwijałem po godzinach – programowanie frontendu.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Od kilku lat tworzę aplikacje webowe w JavaScript, głównie z wykorzystaniem React.
                                Programowanie traktuję jako przestrzeń, w której mogę łączyć analityczne myślenie z kreatywnością.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Zainteresowałem się również tematyką AI i wykorzystuję ją w swoich projektach.
                                Łączę kompetencje techniczne z umiejętnością komunikacji zdobytą w biznesie.
                            </p>

                            {/* CliftonStrengths Section */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        Moje naturalne talenty
                                    </h4>
                                    <button
                                        onClick={() => setShowStrengthsModal(true)}
                                        className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium border border-blue-600 rounded-md px-3 py-1 hover:bg-blue-50 transition duration-200"
                                    >
                                        <Eye className="w-4 h-4 mr-1" />
                                        Zobacz pełne wyniki CliftonStrengths
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    {strengthsData.slice(0, 3).map((strength) => (
                                        <div key={strength.id} className="flex items-center bg-blue-50 p-3 rounded-lg">
                                            <div className="text-blue-600 mr-3">
                                                {getStrengthIcon(strength.id)}
                                            </div>
                                            <div>
                                                <span className="font-medium text-blue-800">{strength.name}</span>
                                                <p className="text-sm text-blue-600">{strength.keyPoints[0]}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 text-center">
                                    <button
                                        onClick={() => setShowStrengthsModal(true)}
                                        className="flex items-center text-blue-600 hover:text-blue-700 text-sm mx-auto"
                                    >
                                        Zobacz wszystkie 5 talentów
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center overflow-hidden">
                                <span className="text-white text-6xl font-bold">ŁN</span>
                            </div>
                        </div>
                    </div>

                    {/* Value Proposition */}
                    <div className="mt-16 bg-gray-50 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                            Dlaczego warto ze mną pracować?
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Target className="w-6 h-6 text-blue-600" />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Strategiczne podejście</h4>
                                <p className="text-gray-600 text-sm">
                                    Analizuję twoje potrzeby i tworzę rozwiązania dopasowane do celów biznesowych
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <TrendingUp className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Ciągły rozwój</h4>
                                <p className="text-gray-600 text-sm">
                                    Śledzę najnowsze trendy i technologie, by oferować nowoczesne rozwiązania
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="bg-purple-100 p-3 rounded-full">
                                        <Users2 className="w-6 h-6 text-purple-600" />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Doświadczenie biznesowe</h4>
                                <p className="text-gray-600 text-sm">
                                    10+ lat w B2B - rozumiem potrzeby klientów i wiem jak komunikować się z biznesem
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal z pełnymi wynikami */}
            <Modal
                isOpen={showStrengthsModal}
                onClose={() => setShowStrengthsModal(false)}
                title="Moje wyniki CliftonStrengths® Assessment"
            >
                <div className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-800 mb-2">
                            <strong>CliftonStrengths®</strong> to naukowe narzędzie firmy Gallup do identyfikacji naturalnych talentów.
                        </p>
                        <p className="text-xs text-blue-600">
                            Dominująca domena: <strong>Myślenie strategiczne</strong> - pomagam innym w analizowaniu informacji i podejmowaniu świadomych decyzji.
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
                                <p className="text-xs font-medium text-gray-700">Jak to wykorzystuję w pracy:</p>
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
                            Kompletny raport dostępny na życzenie podczas rozmowy rekrutacyjnej
                        </p>
                        <p className="text-xs text-gray-500">
                            © 2025 Gallup, Inc. All rights reserved. CliftonStrengths® and the 34 CliftonStrengths theme names are trademarks of Gallup, Inc.
                        </p>
                    </div>
                </div>
            </Modal>
        </section>
    )
}

export default About