import CliftonStrengths from './CliftonStrengths'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function AboutContent({ isVisible, strengthsVisible }) {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <div className={`grid lg:grid-cols-2 gap-12 items-center fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {t.aboutSubtitle}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {t.aboutParagraph1}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {t.aboutParagraph2}
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    {t.aboutParagraph3}
                </p>

                <CliftonStrengths isVisible={`fade-in-left ${isVisible ? 'visible' : ''}`} />
            </div>

            <div className={`flex justify-center fade-in-right ${isVisible ? 'visible' : ''}`}>
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center overflow-hidden">
                    <span className="text-white text-6xl font-bold">ŁN</span>
                </div>
            </div>
        </div>
    )
}

export default AboutContent