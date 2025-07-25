function Hero() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center pt-20">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                        Cześć, jestem <span className="text-blue-600">Łukasz</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
                        Frontend Developer
                    </p>
                    <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
                        Tworzę nowoczesne aplikacje webowe w React. Łączę doświadczenie biznesowe z pasją do kodowania.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={scrollToProjects}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
                        >
                            Zobacz moje projekty
                        </button>
                        <button
                            onClick={scrollToContact}
                            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                        >
                            Skontaktuj się
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero