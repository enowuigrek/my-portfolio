import { Brain, Lightbulb, Target, Users, Settings } from 'lucide-react'

function StrengthCard({ strength, index, language }) {
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
        <div className="border-l-4 border-blue-500 pl-4">
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
    )
}

export default StrengthCard