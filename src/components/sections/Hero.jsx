import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'

function Hero() {
    const { language } = useLanguage()
    const t = translations[language]

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center pt-20">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                        {t.heroGreeting} <span className="text-blue-600">Łukasz</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
                        {t.heroTitle}
                    </p>
                    <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
                        {t.heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={scrollToProjects}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
                        >
                            {t.heroButtonProjects}
                        </button>
                        <button
                            onClick={scrollToContact}
                            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                        >
                            {t.heroButtonContact}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero