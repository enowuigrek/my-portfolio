import FooterBrand from './FooterBrand'
import FooterNavigation from './FooterNavigation'
import FooterLocation from './FooterLocation'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function Footer() {
    const { language } = useLanguage()
    const t = translations[language]
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <FooterBrand />
                        <FooterNavigation />
                        <FooterLocation />
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Łukasz Nowak. {t.footerRights}
                        </div>
                        <div className="text-gray-400 text-sm mt-4 md:mt-0">
                            {t.footerBuiltWith}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer