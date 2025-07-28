import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function Navigation({ isMobile = false, onLinkClick, isScrolled = false }) {
    const { language } = useLanguage()
    const t = translations[language]

    const navItems = [
        { key: 'home', href: '#home', label: t.home },
        { key: 'about', href: '#about', label: t.about },
        { key: 'skills', href: '#skills', label: t.skills },
        { key: 'projects', href: '#projects', label: t.projects },
        { key: 'contact', href: '#contact', label: t.contact }
    ]

    const handleNavClick = (e, href, key) => {
        e.preventDefault()

        if (key === 'home') {
            // Scroll to top for home
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            // Scroll to specific section
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        }

        // Close mobile menu if provided
        if (onLinkClick) {
            onLinkClick()
        }
    }

    const baseClasses = isMobile
        ? `block py-3 px-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
            isScrolled ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-400 hover:bg-white/10'
        }`
        : `font-medium transition-all duration-300 transform hover:scale-110 hover:tracking-wide ${
            isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-white hover:text-blue-400'
        }`

    const containerClasses = isMobile
        ? "flex flex-col space-y-2 px-4 py-6"
        : "hidden md:flex items-center space-x-8"

    return (
        <div className={containerClasses}>
            {navItems.map(({ key, href, label }) => (
                <a
                    key={key}
                    href={href}
                    className={baseClasses}
                    onClick={(e) => handleNavClick(e, href, key)}
                >
                    {label}
                </a>
            ))}
        </div>
    )
}

export default Navigation