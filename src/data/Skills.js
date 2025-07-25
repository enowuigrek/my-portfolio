import {
    Zap, Code, Palette, Wind, Brush,
    GitBranch, Figma, Monitor, Flame, Package,
    Route, RotateCcw, Triangle, Paintbrush, Search, Archive,
    Bot, Brain, Braces, MessageSquare, Sparkles, Link, Database,
    Puzzle, Users, Target, BookOpen, Eye, Settings
} from 'lucide-react'

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

export const softSkills = [
    { name: "Rozwiązywanie problemów", icon: Puzzle, description: "10+ lat doświadczenia biznesowego" },
    { name: "Komunikacja z klientem", icon: Users, description: "Jasne tłumaczenie technicznych rozwiązań" },
    { name: "Myślenie strategiczne", icon: Target, description: "CliftonStrengths: Strateg" },
    { name: "Ciągła nauka", icon: BookOpen, description: "CliftonStrengths: Uczenie się" },
    { name: "Analityczne podejście", icon: Eye, description: "CliftonStrengths: Intelekt" },
    { name: "Organizacja pracy", icon: Settings, description: "CliftonStrengths: Organizator" }
]