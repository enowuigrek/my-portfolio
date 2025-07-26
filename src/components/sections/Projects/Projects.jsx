import { getProjects } from '../../../data/projects'
import ProjectCard from './ProjectCard'
import { useScrollAnimation } from '../../../utils/scrollAnimations'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function Projects() {
    const { language } = useLanguage()
    const t = translations[language]

    // Get projects with translations
    const projects = getProjects(language, translations)

    // Scroll animations
    const [titleRef, titleVisible] = useScrollAnimation()
    const [gridRef, gridVisible] = useScrollAnimation()

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2
                        ref={titleRef}
                        className={`text-4xl font-bold text-center text-gray-800 mb-4 fade-in-up ${titleVisible ? 'visible' : ''}`}
                    >
                        {t.projectsTitle}
                    </h2>
                    <p
                        className={`text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto fade-in-up ${titleVisible ? 'visible' : ''}`}
                    >
                        {t.projectsSubtitle}
                    </p>

                    <div
                        ref={gridRef}
                        className={`grid md:grid-cols-2 gap-8 fade-in-up ${gridVisible ? 'visible' : ''}`}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isVisible={gridVisible}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects