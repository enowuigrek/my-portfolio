function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
                    Moje Portfolio
                </h1>
                <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
                    Witaj w moim portfolio! Tutaj znajdziesz moje projekty i umiejętności.
                </p>
                <div className="flex justify-center mt-8">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                        Zobacz moje projekty
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App