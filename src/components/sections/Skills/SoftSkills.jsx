import { softSkills } from '../../../data/skills'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function SoftSkills({ isVisible }) {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <div className={`mt-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                {t.skillsSoftTitle}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softSkills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                        <div
                            key={index}
                            className={`bg-white rounded-lg p-4 hover:shadow-md transition duration-300 scale-in stagger-delay-${(index % 4) + 1} ${isVisible ? 'visible' : ''}`}
                        >
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-2 rounded-lg mr-3 mt-1">
                                    <IconComponent className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">{skill.name}</h4>
                                    <p className="text-sm text-gray-600">{skill.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SoftSkills