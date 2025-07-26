import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function Navigation({ isMobile = false, onLinkClick }) {
    const { language } = useLanguage()
    const t = translations[language]

    const navItems = [
        { key: 'home', href: '#home', label: t.home },
        { key: 'about', href: '#about', label: t.about },
        { key: 'skills', href: '#skills', label: t.skills },
        { key: 'projects', href: '#projects', label: t.projects },
        { key: 'contact', href: '#contact', label: t.contact }
    ]

    const baseClasses = "text-gray-600 hover:text-blue-600 transition duration-300"
    const containerClasses = isMobile
        ? "flex flex-col space-y-4"
        : "hidden md:flex items-center space-x-8"

    return (
        <div className={containerClasses}>
            {navItems.map(({ key, href, label }) => (
                <a
                    key={key}
                    href={href}
                    className={baseClasses}
                    onClick={onLinkClick}
                >
                    {label}
                </a>
            ))}
        </div>
    )
}

export default Navigation