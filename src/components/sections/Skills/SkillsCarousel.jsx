import React from 'react'
import { Sparkles, Zap, Star, Trophy } from 'lucide-react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiVite, SiOpenai } from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'

const getColorClasses = (color) => ({
  blue: { gradient: 'from-blue-400 to-blue-600' },
  green: { gradient: 'from-green-400 to-green-600' },
  purple: { gradient: 'from-purple-400 to-purple-600' },
  orange: { gradient: 'from-orange-400 to-orange-600' },
}[color] || { gradient: 'from-gray-400 to-gray-600' });

const LogoComponents = {
  React: FaReact,
  NodeJS: FaNodeJs,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  JavaScript: DiJavascript1,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  Vite: SiVite,
  'OpenAI API': SiOpenai,
};

function SkillsCarousel({ currentCategory, isVisible }) {
    const colorClasses = getColorClasses(currentCategory.color);

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

            {/* 3D Skills Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {currentCategory.skills.map((skill, index) => {
                  const Logo = LogoComponents[skill.name] || skill.icon;
                  return (
                    <div
                      key={index}
                      className={`
                        flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-2xl
                        transition bg-gradient-to-br ${colorClasses.gradient} text-white
                      `}
                    >
                      <Logo className="w-12 h-12 mb-3" />
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

export default SkillsCarousel