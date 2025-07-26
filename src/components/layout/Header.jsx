import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'

function Header() {
    const [language, setLanguage] = useState('pl')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleLanguage = () => {
        setLanguage(language === 'pl' ? 'en' : 'pl')
    }

    const navigation = {
        pl: {
            home: 'Strona główna',
            about: 'O mnie',
            skills: 'Umiejętności',
            projects: 'Projekty',
            contact: 'Kontakt'
        },
        en: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        }
    }

    const nav = navigation[language]

    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800">
                        ŁN
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">
                            {nav.home}
                        </a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">
                            {nav.about}
                        </a>
                        <a href="#skills" className="text-gray-600 hover:text-blue-600 transition duration-300">
                            {nav.skills}
                        </a>
                        <a href="#projects" className="text-gray-600 hover:text-blue-600 transition duration-300">
                            {nav.projects}
                        </a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
                            {nav.contact}
                        </a>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition duration-300 border border-gray-300 rounded-md px-2 py-1"
                        >
                            <span className="text-sm font-medium">
                            {language.toUpperCase()}
                            </span>
                            <Globe className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* Mobile Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="text-gray-600 hover:text-blue-600 text-sm font-medium border border-gray-300 rounded px-2 py-1"
                        >
                            {language.toUpperCase()}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-600 hover:text-blue-600"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">
                                {nav.home}
                            </a>
                            <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">
                                {nav.about}
                            </a>
                            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition duration-300">
                                {nav.skills}
                            </a>
                            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition duration-300">
                                {nav.projects}
                            </a>
                            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
                                {nav.contact}
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header