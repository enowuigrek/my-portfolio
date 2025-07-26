import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function Contact() {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                        {t.contactTitle}
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                        {t.contactSubtitle}
                    </p>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact