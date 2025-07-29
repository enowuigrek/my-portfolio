import { useState, useEffect } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'
import HamburgerButton from './HamburgerButton'
import MenuOverlay from './MenuOverlay'

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
        onMenuToggle && onMenuToggle(newState)
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

            {/* Hamburger Button */}
            <HamburgerButton
                isOpen={isOpen}
                onClick={toggleMenu}
                isScrolled={isScrolled}
            />

            {/* Menu Overlay */}
            <MenuOverlay
                isOpen={isOpen}
                navItems={navItems}
                onNavClick={handleNavClick}
                onLanguageToggle={toggleLanguage}
                language={language}
            />

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}

export default MobileMenu