import { skillCategories, softSkills } from '../../data/skills'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, BookOpen, TrendingUp } from 'lucide-react'

function Skills() {
    const [activeCategory, setActiveCategory] = useState(0)
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

    const currentCategory = skillCategories[activeCategory]
    const skillsPerView = 4

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkillIndex(prev =>
                (prev + 1) % Math.max(1, currentCategory.skills.length - skillsPerView + 1)
            )
        }, 4000)

        return () => clearInterval(interval)
    }, [activeCategory, currentCategory.skills.length])

    const nextSkills = () => {
        setCurrentSkillIndex(prev =>
            Math.min(prev + 1, currentCategory.skills.length - skillsPerView)
        )
    }

    const prevSkills = () => {
        setCurrentSkillIndex(prev => Math.max(prev - 1, 0))
    }

    const visibleSkills = currentCategory.skills.slice(
        currentSkillIndex,
        currentSkillIndex + skillsPerView
    )

    const getColorClasses = (color, variant = 'default') => {
        const colors = {
            blue: {
                default: 'border-blue-200 bg-blue-50',
                active: 'bg-blue-600 text-white',
                inactive: 'border-blue-200 text-blue-600 hover:bg-blue-50'
            },
            green: {
                default: 'border-green-200 bg-green-50',
                active: 'bg-green-600 text-white',
                inactive: 'border-green-200 text-green-600 hover:bg-green-50'
            },
            purple: {
                default: 'border-purple-200 bg-purple-50',
                active: 'bg-purple-600 text-white',
                inactive: 'border-purple-200 text-purple-600 hover:bg-purple-50'
            },
            orange: {
                default: 'border-orange-200 bg-orange-50',
                active: 'bg-orange-600 text-white',
                inactive: 'border-orange-200 text-orange-600 hover:bg-orange-50'
            }
        }
        return colors[color]?.[variant] || colors.blue[variant]
    }

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                        Umiejętności
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        Technologie i narzędzia, z którymi pracuję oraz kompetencje zdobyte przez lata doświadczenia
                    </p>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {skillCategories.map((category, index) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(index)
                                    setCurrentSkillIndex(0)
                                }}
                                className={`px-6 py-3 rounded-lg border-2 font-medium transition duration-300 ${
                                    activeCategory === index
                                        ? getColorClasses(category.color, 'active')
                                        : getColorClasses(category.color, 'inactive')
                                }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>

                    {/* Active Category Info */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {currentCategory.title}
                        </h3>
                        <p className="text-gray-600">
                            {currentCategory.description}
                        </p>
                    </div>

                    {/* Skills Carousel */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSkillIndex * (100 / skillsPerView)}%)` }}
                            >
                                {currentCategory.skills.map((skill, index) => {
                                    const IconComponent = skill.icon
                                    return (
                                        <div
                                            key={index}
                                            className="w-1/4 flex-shrink-0 px-3"
                                        >
                                            <div className={`p-6 rounded-xl border-2 h-full ${getColorClasses(currentCategory.color)} hover:shadow-lg transition duration-300`}>
                                                <div className="text-center">
                                                    <div className={`inline-flex p-4 rounded-full mb-4 ${
                                                        currentCategory.color === 'blue' ? 'bg-blue-100' :
                                                            currentCategory.color === 'green' ? 'bg-green-100' :
                                                                currentCategory.color === 'purple' ? 'bg-purple-100' :
                                                                    'bg-orange-100'
                                                    }`}>
                                                        <IconComponent className={`w-8 h-8 ${
                                                            currentCategory.color === 'blue' ? 'text-blue-600' :
                                                                currentCategory.color === 'green' ? 'text-green-600' :
                                                                    currentCategory.color === 'purple' ? 'text-purple-600' :
                                                                        'text-orange-600'
                                                        }`} />
                                                    </div>
                                                    <h4 className="font-bold text-gray-800 mb-2">{skill.name}</h4>
                                                    <p className="text-sm text-gray-600">{skill.experience}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSkills}
                            disabled={currentSkillIndex === 0}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>

                        <button
                            onClick={nextSkills}
                            disabled={currentSkillIndex >= currentCategory.skills.length - skillsPerView}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({
                            length: Math.max(1, currentCategory.skills.length - skillsPerView + 1)
                        }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSkillIndex(index)}
                                className={`w-3 h-3 rounded-full transition duration-300 ${
                                    currentSkillIndex === index
                                        ? `${
                                            currentCategory.color === 'blue' ? 'bg-blue-600' :
                                                currentCategory.color === 'green' ? 'bg-green-600' :
                                                    currentCategory.color === 'purple' ? 'bg-purple-600' :
                                                        'bg-orange-600'
                                        }`
                                        : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Soft Skills */}
                    <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                            Umiejętności miękkie
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {softSkills.map((skill, index) => {
                                const IconComponent = skill.icon
                                return (
                                    <div key={index} className="bg-white rounded-lg p-4 hover:shadow-md transition duration-300">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-3 mt-1">
                                                <IconComponent className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">{skill.name}</h4>
                                                <p className="text-sm text-gray-600">{skill.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="mt-16 text-center">
                        <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
                            <div className="flex items-center justify-center mb-4">
                                <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                                <h3 className="text-2xl font-bold text-gray-800">
                                    Moje podejście do technologii
                                </h3>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                                    <div className="text-gray-600">projekty w portfolio</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                                    <div className="text-gray-600">lata z React</div>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-2">
                                        <TrendingUp className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div className="text-gray-600">ciągły rozwój</div>
                                </div>
                            </div>
                            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
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