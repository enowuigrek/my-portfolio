import { useLanguage } from '../../../contexts/LanguageContext'

function MenuOverlay({ isOpen, navItems, onNavClick, onLanguageToggle, language }) {
    if (!isOpen) return null

    return (
        <>
            {/* Fullscreen Mobile Navigation Menu */}
            <div
                className="fixed bg-gray-900 animate-slideDown"
                style={{
                    zIndex: 45,
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
                                onClick={(e) => onNavClick(e, href, key)}
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
                            onClick={onLanguageToggle}
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

            {/* Animations Styles */}
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
            `}</style>
        </>
    )
}

export default MenuOverlay