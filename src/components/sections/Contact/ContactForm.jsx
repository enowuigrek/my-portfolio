import { useState } from 'react'
import { Send, Loader } from 'lucide-react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function ContactForm() {
    const { language } = useLanguage()
    const t = translations[language]

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Symulacja wysyłania (później możesz dodać prawdziwy backend)
        setTimeout(() => {
            setSubmitStatus('success')
            setIsSubmitting(false)
            setFormData({ name: '', email: '', subject: '', message: '' })

            setTimeout(() => setSubmitStatus(''), 5000)
        }, 1000)
    }

    const formFields = [
        {
            id: 'name',
            name: 'name',
            type: 'text',
            label: t.contactFormName,
            placeholder: t.contactFormNamePlaceholder,
            required: true
        },
        {
            id: 'email',
            name: 'email',
            type: 'email',
            label: t.contactFormEmail,
            placeholder: t.contactFormEmailPlaceholder,
            required: true
        },
        {
            id: 'subject',
            name: 'subject',
            type: 'text',
            label: t.contactFormSubject,
            placeholder: t.contactFormSubjectPlaceholder,
            required: false
        }
    ]

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Regular Input Fields */}
            {formFields.map(({ id, name, type, label, placeholder, required }) => (
                <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
                        {label} {required && '*'}
                    </label>
                    <input
                        type={type}
                        id={id}
                        name={name}
                        value={formData[name]}
                        onChange={handleInputChange}
                        required={required}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        placeholder={placeholder}
                    />
                </div>
            ))}

            {/* Message Textarea */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contactFormMessage} *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-vertical"
                    placeholder={t.contactFormMessagePlaceholder}
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition duration-300 flex items-center justify-center ${
                    isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
            >
                {isSubmitting ? (
                    <>
                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                        {t.contactFormSending}
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4 mr-2" />
                        {t.contactFormSend}
                    </>
                )}
            </button>

            {/* Success Message */}
            {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    {t.contactFormSuccess}
                </div>
            )}
        </form>
    )
}

export default ContactForm