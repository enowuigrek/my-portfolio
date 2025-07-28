import { useState, useEffect } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function MobileMenu({ isScrolled = false, onMenuToggle }) {
    const [isOpen, setIsOpen] = useState(false)
    const { language, toggleLanguage } = useLanguage()
    const t = translations[language]

    const navItems = [
        { key: 'home', href: '#home', label: t.home },
        { key: 'about', href: '#about', label: t.about },
        { key: 'skills', href: '#skills', label: t.skills },
        { key: 'projects', href: '#projects', label: t.projects },
        { key: 'contact', href: '#contact', label: t.contact }
    ]

    const toggleMenu = () => {
        const newState = !isOpen
        setIsOpen(newState)
        onMenuToggle && onMenuToggle(newState) // Powiadom header o zmianie stanu
    }

    const handleNavClick = (e, href, key) => {
        e.preventDefault()

        if (key === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        }

        // Zamknij menu z opóźnieniem dla płynności
        setTimeout(() => {
            setIsOpen(false)
            onMenuToggle && onMenuToggle(false)
        }, 100)
    }

    // Blokuj scroll gdy menu jest otwarte
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Toggle */}
            <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 transition-all duration-300 border-2 rounded-md px-2 py-1 font-medium text-sm hover:scale-105 ${
                    isScrolled
                        ? 'text-gray-600 hover:text-blue-600 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                        : 'text-white hover:text-blue-400 border-white/30 hover:border-blue-400 hover:bg-white/10'
                }`}
                aria-label={`Switch to ${language === 'pl' ? 'English' : 'Polski'}`}
            >
                <span className="font-medium">
                    {language.toUpperCase()}
                </span>
            </button>

            {/* Animated Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="relative w-8 h-8 flex flex-col justify-center items-center transition-all duration-300 z-50"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                type="button"
            >
                {/* Top line */}
                <span
                    className={`w-6 h-0.5 transition-all duration-300 transform origin-center ${
                        isOpen
                            ? 'rotate-45 translate-y-1.5 bg-white'
                            : `${isScrolled ? 'bg-gray-600' : 'bg-white'}`
                    }`}
                />

                {/* Middle line */}
                <span
                    className={`w-6 h-0.5 my-1 transition-all duration-300 ${
                        isOpen
                            ? 'opacity-0'
                            : `opacity-100 ${isScrolled ? 'bg-gray-600' : 'bg-white'}`
                    }`}
                />

                {/* Bottom line */}
                <span
                    className={`w-6 h-0.5 transition-all duration-300 transform origin-center ${
                        isOpen
                            ? '-rotate-45 -translate-y-1.5 bg-white'
                            : `${isScrolled ? 'bg-gray-600' : 'bg-white'}`
                    }`}
                />
            </button>

            {/* Fullscreen Mobile Navigation Menu */}
            {isOpen && (
                <div
                    className="fixed bg-gray-900 animate-slideDown"
                    style={{
                        zIndex: 45, // Wyższy niż header (z-50)
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100vw',
                        height: '100vh',
                        position: 'fixed'
                    }}
                >
                    {/* Header area - żeby header był widoczny */}
                    <div className="h-20 bg-gray-900"></div>

                    {/* Navigation items */}
                    <div className="flex flex-col justify-start px-8 h-full">
                        {navItems.map(({ key, href, label }, index) => (
                            <div key={key} className="w-full">
                                <button
                                    onClick={(e) => handleNavClick(e, href, key)}
                                    className="w-full text-left py-4 px-2 text-2xl font-medium text-white hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    {label}
                                </button>
                                {/* Równe kreski oddzielające */}
                                {index < navItems.length - 1 && (
                                    <div className="w-full border-b border-white/20 my-3"></div>
                                )}
                            </div>
                        ))}

                        {/* Language Toggle w menu */}
                        <div className="mt-8 pt-6 border-t border-white/20 flex justify-center">
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center space-x-1 transition-all duration-300 border-2 rounded-md px-3 py-2 font-medium text-sm hover:scale-105 text-white hover:text-blue-400 border-white/30 hover:border-blue-400 hover:bg-white/10"
                                aria-label={`Switch to ${language === 'pl' ? 'English' : 'Polski'}`}
                            >
                                <span className="font-medium">
                                    {language.toUpperCase()}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Backdrop - dla łatwiejszego zamykania */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Dodaj keyframes dla animacji w style tag */}
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                .animate-slideDown {
                    animation: slideDown 0.4s ease-out forwards;
                }
                
                @keyframes slideUp {
                    from {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default MobileMenu