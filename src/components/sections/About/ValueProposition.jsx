import { Target, TrendingUp, Users2 } from 'lucide-react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function ValueProposition({ isVisible }) {
    const { language } = useLanguage()
    const t = translations[language]

    const valueProps = [
        {
            icon: Target,
            title: t.aboutStrategic,
            description: t.aboutStrategicDesc,
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-600',
            delay: 1
        },
        {
            icon: TrendingUp,
            title: t.aboutDevelopment,
            description: t.aboutDevelopmentDesc,
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            delay: 2
        },
        {
            icon: Users2,
            title: t.aboutBusiness,
            description: t.aboutBusinessDesc,
            bgColor: 'bg-purple-100',
            iconColor: 'text-purple-600',
            delay: 3
        }
    ]

    return (
        <div className={`mt-16 bg-gray-50 rounded-xl p-8 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                {t.aboutWhyWork}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
                {valueProps.map((prop, index) => {
                    const IconComponent = prop.icon
                    return (
                        <div
                            key={index}
                            className={`text-center scale-in stagger-delay-${prop.delay} ${isVisible ? 'visible' : ''}`}
                        >
                            <div className="flex justify-center mb-3">
                                <div className={`${prop.bgColor} p-3 rounded-full`}>
                                    <IconComponent className={`w-6 h-6 ${prop.iconColor}`} />
                                </div>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">{prop.title}</h4>
                            <p className="text-gray-600 text-sm">
                                {prop.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ValueProposition