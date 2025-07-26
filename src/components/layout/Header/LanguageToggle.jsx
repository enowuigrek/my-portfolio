import { Globe } from 'lucide-react'
import { useLanguage } from '../../../contexts/LanguageContext'

function LanguageToggle({ isMobile = false }) {
    const { language, toggleLanguage } = useLanguage()

    return (
        <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition duration-300 border border-gray-300 rounded-md px-2 py-1 ${
                isMobile ? 'text-sm font-medium' : 'text-sm font-medium'
            }`}
            aria-label={`Switch to ${language === 'pl' ? 'English' : 'Polski'}`}
        >
            <span className="text-sm font-medium">
                {language.toUpperCase()}
            </span>
            {!isMobile && <Globe className="w-4 h-4" />}
        </button>
    )
}

export default LanguageToggle