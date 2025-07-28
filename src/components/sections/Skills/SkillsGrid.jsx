import React from 'react'

const getColorClasses = (color) => ({
    blue: { gradient: 'from-blue-400 to-blue-600' },
    green: { gradient: 'from-green-400 to-green-600' },
    purple: { gradient: 'from-purple-400 to-purple-600' },
    orange: { gradient: 'from-orange-400 to-orange-600' },
}[color] || { gradient: 'from-gray-400 to-gray-600' });

function SkillsGrid({ currentCategory, isVisible }) {
    if (!currentCategory || !currentCategory.skills) {
        return <div className="text-center p-8">Ładowanie...</div>
    }

    const colorClasses = getColorClasses(currentCategory.color);

    return (
        <>
            <div className={`text-center mb-8 fade-in-up ${isVisible ? 'visible' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {currentCategory.title}
                </h3>
                <p className="text-gray-600">
                    {currentCategory.description}
                </p>
            </div>

            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 fade-in-up ${isVisible ? 'visible' : ''}`}>
                {currentCategory.skills.map((skill, index) => {
                    // Bezpieczne renderowanie ikony z fallbackiem
                    const IconComponent = skill.icon;

                    return (
                        <div
                            key={skill.name || index}
                            className={`
                                flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-2xl
                                transition bg-gradient-to-br ${colorClasses.gradient} text-white
                            `}
                        >
                            {IconComponent ? (
                                <IconComponent className="w-12 h-12 mb-3" />
                            ) : (
                                <div className="w-12 h-12 mb-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">
                                        {skill.name.charAt(0)}
                                    </span>
                                </div>
                            )}
                            <h4 className="text-sm font-medium text-white">
                                {skill.name}
                            </h4>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SkillsGrid