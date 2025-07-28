import { useState } from 'react'
import { getSkillCategories } from '../../../data/skills.js'
import SkillsNavigation from './SkillsNavigation'
import SkillsGrid from './SkillsCarousel'
import SoftSkills from './SoftSkills'
import SkillsStats from './SkillsStats'
import { useScrollAnimation } from '../../../utils/scrollAnimations'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function Skills() {
    const { language } = useLanguage()
    const t = translations[language]

    const [activeCategory, setActiveCategory] = useState(0)

    // Get skill categories with translations
    const skillCategories = getSkillCategories(language, translations)
    const currentCategory = skillCategories[activeCategory]

    // Scroll animations
    const [titleRef, titleVisible] = useScrollAnimation()
    const [tabsRef, tabsVisible] = useScrollAnimation()
    const [carouselRef, carouselVisible] = useScrollAnimation()
    const [softSkillsRef, softSkillsVisible] = useScrollAnimation()
    const [statsRef, statsVisible] = useScrollAnimation()

    const handleCategoryChange = (newIndex) => {
        setActiveCategory(newIndex)
    }

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <h2
                        ref={titleRef}
                        className={`text-4xl font-bold text-center text-gray-800 mb-4 fade-in-up ${titleVisible ? 'visible' : ''}`}
                    >
                        {t.skillsTitle}
                    </h2>
                    <p
                        className={`text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto fade-in-up ${titleVisible ? 'visible' : ''}`}
                    >
                        {t.skillsSubtitle}
                    </p>

                    {/* Category Navigation */}
                    <div ref={tabsRef}>
                        <SkillsNavigation
                            activeCategory={activeCategory}
                            onCategoryChange={handleCategoryChange}
                            isVisible={tabsVisible}
                            skillCategories={skillCategories}
                        />
                    </div>

                    {/* Skills Carousel */}
                    <div ref={carouselRef}>
                        <SkillsGrid
                            currentCategory={currentCategory}
                            isVisible={carouselVisible}
                        />
                    </div>

                    {/* Soft Skills */}
                    <div ref={softSkillsRef}>
                        <SoftSkills isVisible={softSkillsVisible} />
                    </div>

                    {/* Bottom Stats */}
                    <div ref={statsRef}>
                        <SkillsStats isVisible={statsVisible} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills