function HamburgerButton({ isOpen, onClick, isScrolled }) {
    return (
        <button
            onClick={onClick}
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
    )
}

export default HamburgerButton