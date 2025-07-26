import {
    Zap, Code, Palette, Wind, Brush,
    GitBranch, Figma, Monitor, Flame, Package,
    Route, RotateCcw, Triangle, Paintbrush, Search, Archive,
    Bot, Brain, Braces, MessageSquare, Sparkles, Link, Database,
    Puzzle, Users, Target, BookOpen, Eye, Settings
} from 'lucide-react'

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
                    name: "JavaScript ES6+",
                    icon: Braces,
                    experience: t.skillsDaily
                },
                {
                    name: "React",
                    icon: Code,
                    experience: t.skillsYearsPlus
                },
                {
                    name: "HTML5",
                    icon: Code,
                    experience: t.skillsAdvanced
                },
                {
                    name: "CSS3",
                    icon: Palette,
                    experience: t.skillsAdvanced
                },
                {
                    name: "Tailwind CSS",
                    icon: Wind,
                    experience: t.skillsPreferred
                },
                {
                    name: "Sass/SCSS",
                    icon: Brush,
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
                    name: "Git & GitHub",
                    icon: GitBranch,
                    experience: t.skillsDaily
                },
                {
                    name: "Vite",
                    icon: Zap,
                    experience: t.skillsPreferred
                },
                {
                    name: "Figma",
                    icon: Figma,
                    experience: t.skillsDesign
                },
                {
                    name: "VS Code / WebStorm",
                    icon: Monitor,
                    experience: t.skillsIDE
                },
                {
                    name: "Firebase",
                    icon: Flame,
                    experience: t.skillsBackend
                },
                {
                    name: "Webpack",
                    icon: Package,
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
                    icon: Route,
                    experience: t.skillsSPA
                },
                {
                    name: "Redux",
                    icon: RotateCcw,
                    experience: t.skillsStateManagement
                },
                {
                    name: "Next.js",
                    icon: Triangle,
                    experience: t.skillsLearning
                },
                {
                    name: "Styled Components",
                    icon: Paintbrush,
                    experience: t.skillsCSSinJS
                },
                {
                    name: "React Query",
                    icon: Search,
                    experience: t.skillsDataFetching
                },
                {
                    name: "Local Storage",
                    icon: Archive,
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
                    icon: Bot,
                    experience: t.skillsExperimenting
                },
                {
                    name: "AI Agents",
                    icon: Brain,
                    experience: t.skillsOwnBots
                },
                {
                    name: "Prompt Engineering",
                    icon: MessageSquare,
                    experience: t.skillsAdvanced
                },
                {
                    name: "Claude API",
                    icon: Sparkles,
                    experience: t.skillsIntegrations
                },
                {
                    name: "Langchain",
                    icon: Link,
                    experience: t.skillsBasics
                },
                {
                    name: "Vector Databases",
                    icon: Database,
                    experience: t.skillsExperimenting
                }
            ]
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
            { name: "JavaScript ES6+", icon: Braces, experience: "Codziennie" },
            { name: "React", icon: Code, experience: "2+ lata" },
            { name: "HTML5", icon: Code, experience: "Zaawansowany" },
            { name: "CSS3", icon: Palette, experience: "Zaawansowany" },
            { name: "Tailwind CSS", icon: Wind, experience: "Preferowane" },
            { name: "Sass/SCSS", icon: Brush, experience: "Komfortowo" }
        ]
    },
    {
        id: 'tools',
        title: "Narzędzia & Workflow",
        description: "Moje codzienne narzędzia pracy",
        color: "green",
        skills: [
            { name: "Git & GitHub", icon: GitBranch, experience: "Codziennie" },
            { name: "Vite", icon: Zap, experience: "Preferowane" },
            { name: "Figma", icon: Figma, experience: "Design" },
            { name: "VS Code / WebStorm", icon: Monitor, experience: "IDE" },
            { name: "Firebase", icon: Flame, experience: "Backend" },
            { name: "Webpack", icon: Package, experience: "Podstawy" }
        ]
    },
    {
        id: 'react',
        title: "React Ecosystem",
        description: "Rozszerzone możliwości React",
        color: "purple",
        skills: [
            { name: "React Router", icon: Route, experience: "SPA routing" },
            { name: "Redux", icon: RotateCcw, experience: "State management" },
            { name: "Next.js", icon: Triangle, experience: "Uczę się" },
            { name: "Styled Components", icon: Paintbrush, experience: "CSS-in-JS" },
            { name: "React Query", icon: Search, experience: "Data fetching" },
            { name: "Local Storage", icon: Archive, experience: "Podstawy" }
        ]
    },
    {
        id: 'ai',
        title: "AI & Emerging Tech",
        description: "Eksperymentuję i implementuję w projektach",
        color: "orange",
        skills: [
            { name: "OpenAI API", icon: Bot, experience: "Eksperymentuje" },
            { name: "AI Agents", icon: Brain, experience: "Własne boty" },
            { name: "Prompt Engineering", icon: MessageSquare, experience: "Zaawansowany" },
            { name: "Claude API", icon: Sparkles, experience: "Integracje" },
            { name: "Langchain", icon: Link, experience: "Podstawy" },
            { name: "Vector Databases", icon: Database, experience: "Eksperymentuję" }
        ]
    }
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

export const softSkills = [
    { name: "Rozwiązywanie problemów", icon: Puzzle, description: "10+ lat doświadczenia biznesowego" },
    { name: "Komunikacja z klientem", icon: Users, description: "Jasne tłumaczenie technicznych rozwiązań" },
    { name: "Myślenie strategiczne", icon: Target, description: "CliftonStrengths: Strateg" },
    { name: "Ciągła nauka", icon: BookOpen, description: "CliftonStrengths: Uczenie się" },
    { name: "Analityczne podejście", icon: Eye, description: "CliftonStrengths: Intelekt" },
    { name: "Organizacja pracy", icon: Settings, description: "CliftonStrengths: Organizator" }
]