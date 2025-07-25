import { projects } from '../../data/projects'
import { Github, ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '../../utils/scrollAnimations'

function Projects() {
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
                        Moje Projekty
                    </h2>
                    <p
                        className={`text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto fade-in-up ${titleVisible ? 'visible' : ''}`}
                    >
                        Oto kilka projektów, które stworzyłem - od narzędzi biznesowych po eksperymenty z AI
                    </p>

                    <div
                        ref={gridRef}
                        className={`grid md:grid-cols-2 gap-8 fade-in-up ${gridVisible ? 'visible' : ''}`}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 scale-in stagger-delay-${(index % 4) + 1} ${gridVisible ? 'visible' : ''}`}
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
                                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Kluczowe cechy:</h4>
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
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects