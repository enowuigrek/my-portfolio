import { Github, Linkedin, Mail } from 'lucide-react'

function FooterBrand() {
    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/enowuigrek',
            icon: Github,
            label: 'GitHub Profile'
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/the-lukasz-nowak85',
            icon: Linkedin,
            label: 'LinkedIn Profile'
        },
        {
            name: 'Email',
            href: 'mailto:theLukaszNowak85@gmail.com',
            icon: Mail,
            label: 'Send Email'
        }
    ]

    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Łukasz Nowak</h3>
            <p className="text-gray-400 text-sm mb-4">Frontend Developer</p>
            <div className="flex space-x-4">
                {socialLinks.map(({ name, href, icon: IconComponent, label }) => (
                    <a
                        key={name}
                        href={href}
                        target={name !== 'Email' ? '_blank' : undefined}
                        rel={name !== 'Email' ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-white transition duration-300"
                        aria-label={label}
                    >
                        <IconComponent className="w-6 h-6" />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default FooterBrand