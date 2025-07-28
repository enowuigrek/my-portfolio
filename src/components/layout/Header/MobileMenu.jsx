import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Navigation from './Navigation'
import LanguageToggle from './LanguageToggle'

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Toggle */}
            <LanguageToggle isMobile={true} />

            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white">
                    <Navigation isMobile={true} onLinkClick={closeMenu} />
                </div>
            )}
        </div>
    )
}

export default MobileMenu