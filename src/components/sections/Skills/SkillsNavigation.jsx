import { getSkillCategories } from '../../../data/skills.js'
import { useLanguage } from '../../../contexts/LanguageContext'
import { translations } from '../../../data/translations'

function SkillsNavigation({ activeCategory, onCategoryChange, isVisible, skillCategories }) {
    const { language } = useLanguage()

    // Use passed skillCategories or get them with translations
    const categories = skillCategories || getSkillCategories(language, translations)
    const getColorClasses = (color, isActive) => {
        const colors = {
            blue: {
                active: 'bg-blue-600 text-white',
                inactive: 'border-blue-200 text-blue-600 hover:bg-blue-50'
            },
            green: {
                active: 'bg-green-600 text-white',
                inactive: 'border-green-200 text-green-600 hover:bg-green-50'
            },
            purple: {
                active: 'bg-purple-600 text-white',
                inactive: 'border-purple-200 text-purple-600 hover:bg-purple-50'
            },
            orange: {
                active: 'bg-orange-600 text-white',
                inactive: 'border-orange-200 text-orange-600 hover:bg-orange-50'
            }
        }
        return colors[color]?.[isActive ? 'active' : 'inactive'] || colors.blue[isActive ? 'active' : 'inactive']
    }

    return (
        <div className={`flex flex-wrap justify-center gap-3 mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
            {categories.map((category, index) => (
                <button
                    key={category.id}
                    onClick={() => onCategoryChange(index)}
                    className={`px-6 py-3 rounded-lg border-2 font-medium transition duration-300 scale-in stagger-delay-${(index % 4) + 1} ${isVisible ? 'visible' : ''} ${
                        activeCategory === index
                            ? getColorClasses(category.color, true)
                            : getColorClasses(category.color, false)
                    }`}
                >
                    {category.title}
                </button>
            ))}
        </div>
    )
}

export default SkillsNavigation