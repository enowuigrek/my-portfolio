import Navigation from './Navigation'
import LanguageToggle from './LanguageToggle'
import MobileMenu from './MobileMenu'

function Header() {
    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800">
                        Łukasz Nowak
                    </div>

                    {/* Desktop Navigation + Language Toggle */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Navigation />
                        <LanguageToggle />
                    </div>

                    {/* Mobile Menu */}
                    <MobileMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header