import { Globe } from 'lucide-react'
import { useLanguage } from '../../../contexts/LanguageContext'

function LanguageToggle({ isMobile = false, isScrolled = false }) {
    const { language, toggleLanguage } = useLanguage()

    const buttonClasses = `flex items-center space-x-1 transition-all duration-300 border-2 rounded-md px-2 py-1 font-medium text-sm hover:scale-105 ${
        isScrolled
            ? 'text-gray-600 hover:text-blue-600 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
            : 'text-white hover:text-blue-400 border-white/30 hover:border-blue-400 hover:bg-white/10'
    }`

    return (
        <button
            onClick={toggleLanguage}
            className={buttonClasses}
            aria-label={`Switch to ${language === 'pl' ? 'English' : 'Polski'}`}
        >
            <span className="font-medium">
                {language.toUpperCase()}
            </span>
            {!isMobile && <Globe className="w-4 h-4" />}
        </button>
    )
}

export default LanguageToggle