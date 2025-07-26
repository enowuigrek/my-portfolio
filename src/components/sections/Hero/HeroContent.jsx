import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function HeroContent({ contentOpacity }) {
    const { language } = useLanguage()
    const t = translations[language]

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div
            className="container mx-auto px-4 py-16 transition-opacity duration-300"
            style={{ opacity: contentOpacity }}
        >
            <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                    {t.heroGreeting} <span className="text-blue-600">Łukasz</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
                    {t.heroTitle}
                </p>
                <p className="text-lg text-gray-500 mb-6 max-w-3xl mx-auto">
                    {t.heroSubtitle}
                </p>
                <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                    {t.heroSubtitle2}
                </p>

                {/* Hero CTA Button */}
                <button
                    onClick={scrollToContact}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    {language === 'pl' ? 'Napisz do mnie' : 'Contact me'}
                </button>
            </div>
        </div>
    )
}

export default HeroContent