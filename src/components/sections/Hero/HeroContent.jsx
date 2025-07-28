import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function HeroContent({ contentOpacity = 1 }) {
    const { language } = useLanguage()
    const t = translations[language]

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div
            className="container mx-auto px-4 py-16"
            style={{ opacity: contentOpacity }}
        >
            <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    {t.heroGreeting} <span className="text-blue-400">Łukasz</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto">
                    {t.heroTitle}
                </p>
                <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                    {t.heroSubtitle}
                </p>
                <button
                    onClick={scrollToContact}
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-transparent"
                >
                    {language === 'pl' ? 'Napisz do mnie' : 'Contact me'}
                </button>
            </div>
        </div>
    )
}

export default HeroContent