import { skills, softSkills } from '../../data/skills'
import { useState, useEffect } from 'react'

function Skills() {
    const [activeCarousel, setActiveCarousel] = useState({})

    // Auto-scroll dla karuzeli
    useEffect(() => {
        const intervals = {}

        Object.keys(skills).forEach(category => {
            intervals[category] = setInterval(() => {
                setActiveCarousel(prev => ({
                    ...prev,
                    [category]: (prev[category] || 0) + 1
                }))
            }, 3000)
        })

        return () => {
            Object.values(intervals).forEach(clearInterval)
        }
    }, [])

    const SkillCarousel = ({ category, skillSet }) => {
        const currentIndex = activeCarousel[category] || 0
        const skillsToShow = 4 // Ile skills pokazać jednocześnie
        const startIndex = currentIndex % skillSet.skills.length

        const visibleSkills = []
        for (let i = 0; i < skillsToShow; i++) {
            const index = (startIndex + i) % skillSet.skills.length
            visibleSkills.push(skillSet.skills[index])
        }

        return (
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{skillSet.title}</h3>
                    <p className="text-gray-600 text-sm">{skillSet.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {visibleSkills.map((skill, index) => (
                        <div key={`${category}-${startIndex + index}`} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition duration-300">
                            <span className="text-3xl mb-2">{skill.icon}</span>
                            <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: Math.ceil(skillSet.skills.length / skillsToShow) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCarousel(prev => ({ ...prev, [category]: index * skillsToShow }))}
                            className={`w-2 h-2 rounded-full transition duration-300 ${
                                Math.floor(currentIndex / skillsToShow) === index
                                    ? 'bg-blue-600'
                                    : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                        Umiejętności
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                        Technologie i narzędzia, z którymi pracuję oraz kompetencje zdobyte przez lata doświadczenia
                    </p>

                    {/* Tech Skills Carousels */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {Object.entries(skills).map(([category, skillSet]) => (
                            <SkillCarousel key={category} category={category} skillSet={skillSet} />
                        ))}
                    </div>

                    {/* Soft Skills */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                            Umiejętności miękkie
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 hover:shadow-md transition duration-300">
                                    <div className="flex items-start">
                                        <span className="text-2xl mr-3 mt-1">{skill.icon}</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">{skill.name}</h4>
                                            <p className="text-sm text-gray-600">{skill.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="mt-16 text-center">
                        <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Moje podejście do technologii
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                                    <div className="text-gray-600">projekty w portfolio</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                                    <div className="text-gray-600">lata z React</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                                    <div className="text-gray-600">chęć do nauki</div>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                                Nie liczę procentów znajomości technologii - zamiast tego skupiam się na tym,
                                żeby każdy projekt był lepszy od poprzedniego i żeby kod rozwiązywał rzeczywiste problemy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills