function Header() {
    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800">
                        ŁN
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">
                            Home
                        </a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">
                            About
                        </a>
                        <a href="#skills" className="text-gray-600 hover:text-blue-600 transition duration-300">
                            Skills
                        </a>
                        <a href="#projects" className="text-gray-600 hover:text-blue-600 transition duration-300">
                            Projects
                        </a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
                            Contact
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-600 hover:text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header