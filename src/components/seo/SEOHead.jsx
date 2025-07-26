import { useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

function SEOHead() {
    const { language } = useLanguage()

    // SEO data for both languages
    const seoData = {
        pl: {
            title: 'Łukasz Nowak - Frontend Developer | React | JavaScript | Portfolio',
            description: 'Frontend Developer z 10+ letnim doświadczeniem biznesowym. Specjalizuję się w React, JavaScript i AI. Zobacz moje projekty i skontaktuj się ze mną.',
            keywords: 'frontend developer, react developer, javascript, częstochowa, portfolio, web development, AI, programista',
            ogTitle: 'Łukasz Nowak - Frontend Developer | React Portfolio',
            ogDescription: 'Profesjonalne portfolio Frontend Developera. React, JavaScript, AI. 10+ lat doświadczenia biznesowego.',
            twitterTitle: 'Łukasz Nowak - Frontend Developer Portfolio',
            twitterDescription: 'Frontend Developer z React i JavaScript. Zobacz moje projekty!'
        },
        en: {
            title: 'Łukasz Nowak - Frontend Developer | React | JavaScript | Portfolio',
            description: 'Frontend Developer with 10+ years of business experience. Specializing in React, JavaScript and AI. View my projects and get in touch.',
            keywords: 'frontend developer, react developer, javascript, częstochowa, poland, portfolio, web development, AI, programmer',
            ogTitle: 'Łukasz Nowak - Frontend Developer | React Portfolio',
            ogDescription: 'Professional Frontend Developer portfolio. React, JavaScript, AI. 10+ years of business experience.',
            twitterTitle: 'Łukasz Nowak - Frontend Developer Portfolio',
            twitterDescription: 'Frontend Developer with React and JavaScript. Check out my projects!'
        }
    }

    const currentSEO = seoData[language]
    const baseUrl = 'https://lukasznowak.dev'
    const currentUrl = `${baseUrl}/?lang=${language}`
    const alternateUrl = `${baseUrl}/?lang=${language === 'pl' ? 'en' : 'pl'}`
    const ogImageUrl = `${baseUrl}/og-image.jpg`

    useEffect(() => {
        // Update document title
        document.title = currentSEO.title

        // Update or create meta tags
        const updateMetaTag = (name, content, property = false) => {
            const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
            let tag = document.querySelector(selector)

            if (!tag) {
                tag = document.createElement('meta')
                if (property) {
                    tag.setAttribute('property', name)
                } else {
                    tag.setAttribute('name', name)
                }
                document.head.appendChild(tag)
            }
            tag.setAttribute('content', content)
        }

        // Update basic meta tags
        updateMetaTag('description', currentSEO.description)
        updateMetaTag('keywords', currentSEO.keywords)
        updateMetaTag('author', 'Łukasz Nowak')
        updateMetaTag('robots', 'index, follow')

        // Update Open Graph tags (Facebook, LinkedIn)
        updateMetaTag('og:type', 'website', true)
        updateMetaTag('og:url', currentUrl, true)
        updateMetaTag('og:title', currentSEO.ogTitle, true)
        updateMetaTag('og:description', currentSEO.ogDescription, true)
        updateMetaTag('og:image', ogImageUrl, true)
        updateMetaTag('og:locale', language === 'pl' ? 'pl_PL' : 'en_US', true)
        updateMetaTag('og:site_name', 'Łukasz Nowak Portfolio', true)

        // Update Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image')
        updateMetaTag('twitter:url', currentUrl)
        updateMetaTag('twitter:title', currentSEO.twitterTitle)
        updateMetaTag('twitter:description', currentSEO.twitterDescription)
        updateMetaTag('twitter:image', ogImageUrl)
        updateMetaTag('twitter:creator', '@LukaszNowakDev')

        // Update canonical URL
        let canonicalLink = document.querySelector('link[rel="canonical"]')
        if (!canonicalLink) {
            canonicalLink = document.createElement('link')
            canonicalLink.setAttribute('rel', 'canonical')
            document.head.appendChild(canonicalLink)
        }
        canonicalLink.setAttribute('href', currentUrl)

        // Update language alternates (hreflang)
        const updateHreflang = (lang, url) => {
            let hrefLangLink = document.querySelector(`link[hreflang="${lang}"]`)
            if (!hrefLangLink) {
                hrefLangLink = document.createElement('link')
                hrefLangLink.setAttribute('rel', 'alternate')
                hrefLangLink.setAttribute('hreflang', lang)
                document.head.appendChild(hrefLangLink)
            }
            hrefLangLink.setAttribute('href', url)
        }

        updateHreflang('pl', `${baseUrl}/?lang=pl`)
        updateHreflang('en', `${baseUrl}/?lang=en`)
        updateHreflang('x-default', baseUrl)

        // Add JSON-LD structured data
        const addStructuredData = () => {
            // Remove existing structured data
            const existingScript = document.querySelector('script[type="application/ld+json"]')
            if (existingScript) {
                existingScript.remove()
            }

            // Create new structured data
            const structuredData = {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Łukasz Nowak",
                "alternateName": "enowuigrek",
                "jobTitle": language === 'pl' ? "Frontend Developer" : "Frontend Developer",
                "description": currentSEO.description,
                "url": baseUrl,
                "image": `${baseUrl}/profile-photo.jpg`,
                "sameAs": [
                    "https://github.com/enowuigrek",
                    "https://linkedin.com/in/the-lukasz-nowak85"
                ],
                "worksFor": {
                    "@type": "Organization",
                    "name": "Freelancer"
                },
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Częstochowa",
                    "addressCountry": "PL"
                },
                "email": "theLukaszNowak85@gmail.com",
                "telephone": "+48509266079",
                "knowsAbout": [
                    "React",
                    "JavaScript",
                    "Frontend Development",
                    "Web Development",
                    "AI Integration",
                    "Tailwind CSS",
                    "Firebase"
                ],
                "alumniOf": {
                    "@type": "EducationalOrganization",
                    "name": "Business Experience 10+ years"
                }
            }

            const script = document.createElement('script')
            script.type = 'application/ld+json'
            script.textContent = JSON.stringify(structuredData, null, 2)
            document.head.appendChild(script)
        }

        addStructuredData()

    }, [language, currentSEO, currentUrl, alternateUrl, ogImageUrl, baseUrl])

    // This component doesn't render anything visible
    return null
}

export default SEOHead