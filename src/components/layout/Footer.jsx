import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* About */}
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-bold mb-4">Łukasz Nowak</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Frontend Developer z 10+ letnim doświadczeniem biznesowym.
                                Tworzę nowoczesne aplikacje webowe w React i eksperymentuję z AI.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/enowuigrek"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition duration-300"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/the-lukasz-nowak85"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="mailto:theLukaszNowak85@gmail.com"
                                    className="text-gray-400 hover:text-white transition duration-300"
                                    aria-label="Email"
                                >
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Nawigacja</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#home" className="text-gray-300 hover:text-white transition duration-300">
                                        Strona główna
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="text-gray-300 hover:text-white transition duration-300">
                                        O mnie
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="text-gray-300 hover:text-white transition duration-300">
                                        Umiejętności
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className="text-gray-300 hover:text-white transition duration-300">
                                        Projekty
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">
                                        Kontakt
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
                            <div className="space-y-2 text-gray-300">
                                <div className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <a href="mailto:theLukaszNowak85@gmail.com" className="hover:text-white">
                                        theLukaszNowak85@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <a href="tel:509266079" className="hover:text-white">
                                        509 266 079
                                    </a>
                                </div>
                                <div className="flex items-center text-sm text-gray-400 mt-4">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    Częstochowa, Polska
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Łukasz Nowak. Wszystkie prawa zastrzeżone.
                        </div>
                        <div className="text-gray-400 text-sm mt-4 md:mt-0">
                            Zbudowane z ❤️ przy użyciu React + Tailwind CSS
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer