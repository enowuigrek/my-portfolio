import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import LanguageToggle from './LanguageToggle'
import MobileMenu from './MobileMenu'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Header zmienia styl po 100px scroll
                    setIsScrolled(window.scrollY > 100)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Header jest czarny gdy menu mobile jest otwarte LUB gdy jest scrolled
    const isHeaderDark = isMobileMenuOpen || isScrolled

    return (
        <header
            className={`fixed top-0 w-full transition-all duration-500 ${
                isMobileMenuOpen
                    ? 'bg-gray-900 z-50' // Wyższy z-index gdy menu otwarte
                    : isScrolled
                        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50'
                        : 'bg-transparent z-50'
            }`}
        >
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo - clickable - zawsze widoczny */}
                    <button
                        onClick={scrollToTop}
                        className={`text-2xl font-bold transition-all duration-300 hover:scale-105 relative z-50 ${
                            isMobileMenuOpen
                                ? 'text-white'
                                : isScrolled
                                    ? 'text-gray-800'
                                    : 'text-white'
                        }`}
                    >
                        Łukasz Nowak
                    </button>

                    {/* Desktop Navigation + Language Toggle */}
                    <div className="hidden md:flex items-center space-x-8 relative z-50">
                        <Navigation isScrolled={isHeaderDark} />
                        <LanguageToggle isScrolled={isHeaderDark} />
                    </div>

                    {/* Mobile Menu - zawsze widoczny na mobile */}
                    <div className="relative z-50">
                        <MobileMenu
                            isScrolled={isHeaderDark}
                            onMenuToggle={setIsMobileMenuOpen}
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header