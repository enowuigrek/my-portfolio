import { Github, ExternalLink } from 'lucide-react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function ProjectCard({ project, index, isVisible }) {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <div
            className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 scale-in stagger-delay-${(index % 4) + 1} ${isVisible ? 'visible' : ''}`}
        >
            {/* Project Image */}
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{project.title}</span>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        {t.projectsFeatures}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition duration-300"
                    >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                    </a>

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
                        >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard