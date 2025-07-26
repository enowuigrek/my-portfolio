import { MapPin } from 'lucide-react'
import { useLanguage } from '../../../contexts/LanguageContext'

function FooterLocation() {
    const { language } = useLanguage()

    return (
        <div>
            <h4 className="text-lg font-semibold mb-4">
                {language === 'pl' ? 'Lokalizacja' : 'Location'}
            </h4>
            <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                {language === 'pl' ? 'Częstochowa, Polska' : 'Częstochowa, Poland'}
            </div>
        </div>
    )
}

export default FooterLocation