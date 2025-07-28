import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../../../contexts/LanguageContext'

function HeroScrollArrow({ arrowOpacity }) {
    const { language } = useLanguage()

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
            style={{ opacity: arrowOpacity }}
        >
            <button
                onClick={scrollToAbout}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label={language === 'pl' ? 'Przewiń w dół' : 'Scroll down'}
            >
                <ChevronDown className="w-14 h-14 animate-bounce opacity-80 hover:opacity-100" />
            </button>
        </div>
    )
}

export default HeroScrollArrow