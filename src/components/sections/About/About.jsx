import AboutContent from './AboutContent'
import ValueProposition from './ValueProposition'
import { useScrollAnimation } from '../../../utils/scrollAnimations'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function About() {
    const { language } = useLanguage()
    const t = translations[language]

    // Scroll animations
    const [titleRef, titleVisible] = useScrollAnimation()
    const [contentRef, contentVisible] = useScrollAnimation()
    const [strengthsRef, strengthsVisible] = useScrollAnimation()
    const [valueRef, valueVisible] = useScrollAnimation()

    return (
        <section
            id="about"
            className="relative py-20 bg-white z-10"
        >
            {/* Background insurance */}
            <div className="absolute inset-0 bg-white -z-10"></div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <h2
                        ref={titleRef}
                        className={`text-4xl font-bold text-center text-gray-800 mb-12 fade-in-up ${titleVisible ? 'visible' : ''}`}
                    >
                        {t.aboutTitle}
                    </h2>

                    <div ref={contentRef}>
                        <AboutContent
                            isVisible={contentVisible}
                            strengthsVisible={strengthsVisible}
                        />
                    </div>

                    <div ref={strengthsRef}>
                        {/* CliftonStrengths is now inside AboutContent */}
                    </div>

                    <div ref={valueRef}>
                        <ValueProposition isVisible={valueVisible} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About