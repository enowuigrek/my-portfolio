import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function SkillsCarousel({ currentCategory, isVisible }) {
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
    const skillsPerView = 4

    const visibleSkills = currentCategory.skills.slice(
        currentSkillIndex,
        currentSkillIndex + skillsPerView
    )

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkillIndex(prev =>
                (prev + 1) % Math.max(1, currentCategory.skills.length - skillsPerView + 1)
            )
        }, 4000)

        return () => clearInterval(interval)
    }, [currentCategory.skills.length])

    // Reset carousel when category changes
    useEffect(() => {
        setCurrentSkillIndex(0)
    }, [currentCategory.id])

    const nextSkills = () => {
        setCurrentSkillIndex(prev =>
            Math.min(prev + 1, currentCategory.skills.length - skillsPerView)
        )
    }

    const prevSkills = () => {
        setCurrentSkillIndex(prev => Math.max(prev - 1, 0))
    }

    const goToSlide = (index) => {
        setCurrentSkillIndex(index)
    }

    const getColorClasses = (color) => {
        const colors = {
            blue: { bg: 'bg-blue-50', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', border: 'border-blue-200' },
            green: { bg: 'bg-green-50', iconBg: 'bg-green-100', iconColor: 'text-green-600', border: 'border-green-200' },
            purple: { bg: 'bg-purple-50', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', border: 'border-purple-200' },
            orange: { bg: 'bg-orange-50', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', border: 'border-orange-200' }
        }
        return colors[color] || colors.blue
    }

    const colorClasses = getColorClasses(currentCategory.color)
    const maxSlides = Math.max(1, currentCategory.skills.length - skillsPerView + 1)

    return (
        <>
            {/* Active Category Info */}
            <div className={`text-center mb-8 fade-in-up ${isVisible ? 'visible' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {currentCategory.title}
                </h3>
                <p className="text-gray-600">
                    {currentCategory.description}
                </p>
            </div>

            {/* Skills Carousel */}
            <div className={`relative fade-in-up ${isVisible ? 'visible' : ''}`}>
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
                                    <div className={`p-6 rounded-xl border-2 h-full ${colorClasses.bg} ${colorClasses.border} hover:shadow-lg transition duration-300 scale-in stagger-delay-${(index % 4) + 1} ${isVisible ? 'visible' : ''}`}>
                                        <div className="text-center">
                                            <div className={`inline-flex p-4 rounded-full mb-4 ${colorClasses.iconBg}`}>
                                                <IconComponent className={`w-8 h-8 ${colorClasses.iconColor}`} />
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
                {Array.from({ length: maxSlides }).map((_, index) => {
                    const dotColor = currentSkillIndex === index
                        ? currentCategory.color === 'blue' ? 'bg-blue-600' :
                            currentCategory.color === 'green' ? 'bg-green-600' :
                                currentCategory.color === 'purple' ? 'bg-purple-600' :
                                    'bg-orange-600'
                        : 'bg-gray-300'

                    return (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition duration-300 ${dotColor}`}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default SkillsCarousel