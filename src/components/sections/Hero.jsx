import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'
import { useState, useEffect } from 'react'

function Hero() {
    const { language } = useLanguage()
    const t = translations[language]
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    // Calculate opacity based on scroll position (fade out after 100px scroll)
    const arrowOpacity = Math.max(0, 1 - scrollY / 200)

    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
            <div className="container mx-auto px-4 py-16">
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
                    <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
                        {t.heroSubtitle2}
                    </p>
                </div>
            </div>

            {/* Animated scroll down arrow with fade on scroll */}
            <div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
                style={{ opacity: arrowOpacity }}
            >
                <button
                    onClick={scrollToAbout}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                    aria-label={language === 'pl' ? 'Przewiń w dół' : 'Scroll down'}
                >
                    <ChevronDown className="w-24 h-24 animate-bounce opacity-60 hover:opacity-80" />
                </button>
            </div>
        </section>
    )
}

export default Hero