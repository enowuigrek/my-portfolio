// Function to get projects with translations
export const getProjects = (language, translations) => {
    const t = translations[language]

    return [
        {
            id: 1,
            title: "x-tool",
            description: t.projectXToolDesc,
            tech: ["JavaScript", "HTML", "CSS"],
            github: "https://github.com/enowuigrek/x-tool",
            image: "/api/placeholder/400/250",
            highlights: [
                t.projectXToolFeature1,
                t.projectXToolFeature2,
                t.projectXToolFeature3
            ]
        },
        {
            id: 2,
            title: language === 'pl' ? "Miejska Ankieta" : "Urban Survey",
            description: t.projectAnkietaDesc,
            tech: ["React", "Firebase", "JavaScript"],
            github: "https://github.com/enowuigrek/Miejska-Ankieta",
            live: "https://miejska-ankieta.czest.pl",
            demo: "https://miejska-ankieta.czest.pl/pomidorowa",
            image: "/api/placeholder/400/250",
            highlights: [
                t.projectAnkietaFeature1,
                t.projectAnkietaFeature2,
                t.projectAnkietaFeature3
            ]
        },
        {
            id: 3,
            title: "Daily AI Assistant",
            description: t.projectAIDesc,
            tech: ["React", "OpenAI API", "JavaScript"],
            github: "https://github.com/enowuigrek/AI-Daily-Assistant",
            image: "/api/placeholder/400/250",
            highlights: [
                t.projectAIFeature1,
                t.projectAIFeature2,
                t.projectAIFeature3
            ]
        },
        {
            id: 4,
            title: "Uknuta Magia",
            description: t.projectMagiaDesc,
            tech: ["React", "Figma", "Supabase"],
            github: "https://github.com/enowuigrek/uknuta-magia",
            live: "https://uknutamagia.pl",
            image: "/api/placeholder/400/250",
            highlights: [
                t.projectMagiaFeature1,
                t.projectMagiaFeature2,
                t.projectMagiaFeature3
            ]
        }
    ]
}

// Keep original export for backward compatibility
export const projects = [
    {
        id: 1,
        title: "x-tool",
        description: "Lekka aplikacja webowa, która wyszukuje numery SKU z treści wiadomości od klienta i umożliwia ich zbiorcze dodanie do oferty. Realnie przyspiesza proces i redukuje błędy.",
        tech: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/enowuigrek/x-tool",
        image: "/api/placeholder/400/250",
        highlights: [
            "Pierwszy projekt realnie dodający wartość",
            "Wciąż używany przez byłych współpracowników",
            "Eliminuje ręczne przepisywanie danych"
        ]
    },
    {
        id: 2,
        title: "Miejska Ankieta",
        description: "Aplikacja webowa dla mieszkańców Częstochowy do odpowiadania na pytania rozmieszczone w przestrzeni miejskiej. Po zeskanowaniu QR użytkownik odpowiada i otrzymuje ciekawostkę.",
        tech: ["React", "Firebase", "JavaScript"],
        github: "https://github.com/enowuigrek/Miejska-Ankieta",
        live: "https://miejska-ankieta.czest.pl",
        demo: "https://miejska-ankieta.czest.pl/pomidorowa",
        image: "/api/placeholder/400/250",
        highlights: [
            "Lokalny twist z QR kodami w mieście",
            "Anonimowe odpowiedzi w Firebase",
            "Aktywnie testowana w Częstochowie"
        ]
    },
    {
        id: 3,
        title: "Daily AI Assistant",
        description: "To-do aplikacja z AI agentem. Zamiast ręcznie wpisywać zadania, można chaotycznie wylać swoje plany na czacie, a AI sam ułoży z nich uporządkowaną listę.",
        tech: ["React", "OpenAI API", "JavaScript"],
        github: "https://github.com/enowuigrek/AI-Daily-Assistant",
        image: "/api/placeholder/400/250",
        highlights: [
            "Eksperyment z agentami AI",
            "Zamienia chaos na uporządkowaną listę",
            "Klasyczna funkcjonalność + AI twist"
        ]
    },
    {
        id: 4,
        title: "Uknuta Magia",
        description: "Komercyjna strona książki dla dzieci. Można przeczytać opis, poznać autora, kupić książkę... a" +
            " w przyszłości porozmawiać z jej bohaterami przez AI chat.",
        tech: ["React", "Figma", "Supabase"],
        github: "https://github.com/enowuigrek/uknuta-magia",
        live: "https://uknutamagia.pl",
        image: "/api/placeholder/400/250",
        highlights: [
            "Pełny projekt komercyjny",
            "Design zaplanowany od zera w Figmie",
            "W realizacji - Interaktywny chat z postaciami z książki"
        ]
    }
]