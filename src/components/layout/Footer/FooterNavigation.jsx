import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function FooterNavigation() {
    const { language } = useLanguage()
    const t = translations[language]

    const navigationItems = [
        { key: 'home', href: '#home', label: t.home },
        { key: 'about', href: '#about', label: t.about },
        { key: 'skills', href: '#skills', label: t.skills },
        { key: 'projects', href: '#projects', label: t.projects },
        { key: 'contact', href: '#contact', label: t.contact }
    ]

    return (
        <div>
            <h4 className="text-lg font-semibold mb-4">{t.footerNavigation}</h4>
            <ul className="space-y-2">
                {navigationItems.map(({ key, href, label }) => (
                    <li key={key}>
                        <a
                            href={href}
                            className="text-gray-300 hover:text-white transition duration-300 text-sm"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterNavigation