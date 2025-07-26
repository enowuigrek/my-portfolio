import { BookOpen, TrendingUp } from 'lucide-react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function SkillsStats({ isVisible }) {
    const { language } = useLanguage()
    const t = translations[language]

    const stats = [
        {
            value: '4+',
            label: t.skillsProjects,
            delay: 1
        },
        {
            value: '2+',
            label: t.skillsReactYears,
            delay: 2
        },
        {
            icon: TrendingUp,
            label: t.skillsGrowth,
            delay: 3
        }
    ]

    return (
        <div className={`mt-16 text-center fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-2xl font-bold text-gray-800">
                        {t.skillsApproach}
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center scale-in stagger-delay-${stat.delay} ${isVisible ? 'visible' : ''}`}
                        >
                            {stat.icon ? (
                                <div className="flex items-center justify-center mb-2">
                                    <stat.icon className="w-8 h-8 text-blue-600" />
                                </div>
                            ) : (
                                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                            )}
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    {t.skillsApproachDesc}
                </p>
            </div>
        </div>
    )
}

export default SkillsStats