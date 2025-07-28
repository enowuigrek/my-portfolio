import {
    Puzzle, Users, Target, BookOpen, Eye, Settings
} from 'lucide-react'

// Importy brand ikon z react-icons - TYLKO SPRAWDZONE IKONY
import {
    FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaSass,
    FaNodeJs, FaCode
} from 'react-icons/fa'
import {
    SiJavascript, SiTailwindcss, SiVite, SiFirebase, SiWebpack,
    SiRedux, SiNextdotjs, SiStyledcomponents, SiReactquery,
    SiOpenai, SiTypescript
} from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import { TbBrain, TbMessageChatbot, TbSparkles, TbDatabase, TbLink } from 'react-icons/tb'

// Function to get skill categories with translations
export const getSkillCategories = (language, translations) => {
    const t = translations[language]

    return [
        {
            id: 'frontend',
            title: t.skillsCategoryFrontend,
            description: t.skillsCategoryFrontendDesc,
            color: "blue",
            skills: [
                {
                    name: "JavaScript",
                    icon: SiJavascript,
                    experience: t.skillsDaily
                },
                {
                    name: "React",
                    icon: FaReact,
                    experience: t.skillsYearsPlus
                },
                {
                    name: "HTML5",
                    icon: FaHtml5,
                    experience: t.skillsAdvanced
                },
                {
                    name: "CSS3",
                    icon: FaCss3Alt,
                    experience: t.skillsAdvanced
                },
                {
                    name: "TailwindCSS",
                    icon: SiTailwindcss,
                    experience: t.skillsPreferred
                },
                {
                    name: "Sass",
                    icon: FaSass,
                    experience: t.skillsComfortable
                }
            ]
        },
        {
            id: 'tools',
            title: t.skillsCategoryTools,
            description: t.skillsCategoryToolsDesc,
            color: "green",
            skills: [
                {
                    name: "Git",
                    icon: FaGitAlt,
                    experience: t.skillsDaily
                },
                {
                    name: "Vite",
                    icon: SiVite,
                    experience: t.skillsPreferred
                },
                {
                    name: "Figma",
                    icon: FaFigma,
                    experience: t.skillsDesign
                },
                {
                    name: "VS Code",
                    icon: FaCode,
                    experience: t.skillsIDE
                },
                {
                    name: "Firebase",
                    icon: SiFirebase,
                    experience: t.skillsBackend
                },
                {
                    name: "Webpack",
                    icon: SiWebpack,
                    experience: t.skillsBasics
                }
            ]
        },
        {
            id: 'react',
            title: t.skillsCategoryReact,
            description: t.skillsCategoryReactDesc,
            color: "purple",
            skills: [
                {
                    name: "React Router",
                    icon: DiReact,
                    experience: t.skillsSPA
                },
                {
                    name: "Redux",
                    icon: SiRedux,
                    experience: t.skillsStateManagement
                },
                {
                    name: "Next.js",
                    icon: SiNextdotjs,
                    experience: t.skillsLearning
                },
                {
                    name: "Styled Components",
                    icon: SiStyledcomponents,
                    experience: t.skillsCSSinJS
                },
                {
                    name: "React Query",
                    icon: SiReactquery,
                    experience: t.skillsDataFetching
                },
                {
                    name: "TypeScript",
                    icon: SiTypescript,
                    experience: t.skillsBasics
                }
            ]
        },
        {
            id: 'ai',
            title: t.skillsCategoryAI,
            description: t.skillsCategoryAIDesc,
            color: "orange",
            skills: [
                {
                    name: "OpenAI API",
                    icon: SiOpenai,
                    experience: t.skillsExperimenting
                },
                {
                    name: "AI Agents",
                    icon: TbBrain,
                    experience: t.skillsOwnBots
                },
                {
                    name: "Prompt Engineering",
                    icon: TbMessageChatbot,
                    experience: t.skillsAdvanced
                },
                {
                    name: "Claude API",
                    icon: TbSparkles,
                    experience: t.skillsIntegrations
                },
                {
                    name: "Langchain",
                    icon: TbLink,
                    experience: t.skillsBasics
                },
                {
                    name: "Vector Databases",
                    icon: TbDatabase,
                    experience: t.skillsExperimenting
                }
            ]
        }
    ]
}

// Static soft skills array
export const softSkills = [
    { name: "Rozwiązywanie problemów", icon: Puzzle, description: "10+ lat doświadczenia biznesowego" },
    { name: "Komunikacja z klientem", icon: Users, description: "Jasne tłumaczenie technicznych rozwiązań" },
    { name: "Myślenie strategiczne", icon: Target, description: "CliftonStrengths: Strateg" },
    { name: "Ciągła nauka", icon: BookOpen, description: "CliftonStrengths: Uczenie się" },
    { name: "Analityczne podejście", icon: Eye, description: "CliftonStrengths: Intelekt" },
    { name: "Organizacja pracy", icon: Settings, description: "CliftonStrengths: Organizator" }
]

// Function to get soft skills with translations
export const getSoftSkills = (language, translations) => {
    const t = translations[language]

    return [
        {
            name: t.softSkillProblemSolving,
            icon: Puzzle,
            description: t.softSkillProblemSolvingDesc
        },
        {
            name: t.softSkillClientCommunication,
            icon: Users,
            description: t.softSkillClientCommunicationDesc
        },
        {
            name: t.softSkillStrategicThinking,
            icon: Target,
            description: t.softSkillStrategicThinkingDesc
        },
        {
            name: t.softSkillContinuousLearning,
            icon: BookOpen,
            description: t.softSkillContinuousLearningDesc
        },
        {
            name: t.softSkillAnalyticalApproach,
            icon: Eye,
            description: t.softSkillAnalyticalApproachDesc
        },
        {
            name: t.softSkillWorkOrganization,
            icon: Settings,
            description: t.softSkillWorkOrganizationDesc
        }
    ]
}

// Keep original export for backward compatibility
export const skillCategories = [
    {
        id: 'frontend',
        title: "Frontend & Core",
        description: "Technologie które używam codziennie",
        color: "blue",
        skills: [
            { name: "JavaScript", icon: SiJavascript, experience: "Codziennie" },
            { name: "React", icon: FaReact, experience: "2+ lata" },
            { name: "HTML5", icon: FaHtml5, experience: "Zaawansowany" },
            { name: "CSS3", icon: FaCss3Alt, experience: "Zaawansowany" },
            { name: "TailwindCSS", icon: SiTailwindcss, experience: "Preferowane" },
            { name: "Sass", icon: FaSass, experience: "Komfortowo" }
        ]
    },
    {
        id: 'tools',
        title: "Narzędzia & Workflow",
        description: "Moje codzienne narzędzia pracy",
        color: "green",
        skills: [
            { name: "Git", icon: FaGitAlt, experience: "Codziennie" },
            { name: "Vite", icon: SiVite, experience: "Preferowane" },
            { name: "Figma", icon: FaFigma, experience: "Design" },
            { name: "VS Code", icon: FaCode, experience: "IDE" },
            { name: "Firebase", icon: SiFirebase, experience: "Backend" },
            { name: "Webpack", icon: SiWebpack, experience: "Podstawy" }
        ]
    },
    {
        id: 'react',
        title: "React Ecosystem",
        description: "Rozszerzone możliwości React",
        color: "purple",
        skills: [
            { name: "React Router", icon: DiReact, experience: "SPA routing" },
            { name: "Redux", icon: SiRedux, experience: "State management" },
            { name: "Next.js", icon: SiNextdotjs, experience: "Uczę się" },
            { name: "Styled Components", icon: SiStyledcomponents, experience: "CSS-in-JS" },
            { name: "React Query", icon: SiReactquery, experience: "Data fetching" },
            { name: "TypeScript", icon: SiTypescript, experience: "Podstawy" }
        ]
    },
    {
        id: 'ai',
        title: "AI & Emerging Tech",
        description: "Eksperymentuję i implementuję w projektach",
        color: "orange",
        skills: [
            { name: "OpenAI API", icon: SiOpenai, experience: "Eksperymentuje" },
            { name: "AI Agents", icon: TbBrain, experience: "Własne boty" },
            { name: "Prompt Engineering", icon: TbMessageChatbot, experience: "Zaawansowany" },
            { name: "Claude API", icon: TbSparkles, experience: "Integracje" },
            { name: "Node.js", icon: FaNodeJs, experience: "Backend" }
        ]
    }
]