import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function ContactInfo() {
    const { language } = useLanguage()
    const t = translations[language]

    const contactMethods = [
        {
            icon: Mail,
            title: t.contactEmail,
            value: 'theLukaszNowak85@gmail.com',
            href: 'mailto:theLukaszNowak85@gmail.com'
        },
        {
            icon: Phone,
            title: t.contactPhone,
            value: '509 266 079',
            href: 'tel:509266079'
        },
        {
            icon: Github,
            title: 'GitHub',
            value: 'github.com/enowuigrek',
            href: 'https://github.com/enowuigrek',
            external: true
        },
        {
            icon: Linkedin,
            title: 'LinkedIn',
            value: 'linkedin.com/in/the-lukasz-nowak85',
            href: 'https://linkedin.com/in/the-lukasz-nowak85',
            external: true
        }
    ]

    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {t.contactGetInTouch}
            </h3>

            <div className="space-y-6">
                {contactMethods.map(({ icon: IconComponent, title, value, href, external }) => (
                    <div key={title} className="flex items-center">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">{title}</h4>
                            <a
                                href={href}
                                target={external ? '_blank' : undefined}
                                rel={external ? 'noopener noreferrer' : undefined}
                                className="text-blue-600 hover:text-blue-700 transition duration-300"
                            >
                                {value}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Response Info */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    {t.contactQuickResponse}
                </h4>
                <p className="text-gray-600 text-sm">
                    {t.contactQuickResponseDesc}
                </p>
            </div>
        </div>
    )
}

export default ContactInfo