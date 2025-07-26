import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About/About.jsx'
import Skills from './components/sections/Skills/Skills.jsx'
import Projects from './components/sections/Projects/Projects.jsx'
import Contact from './components/sections/Contact/Contact.jsx'

function App() {
    return (
        <LanguageProvider>
            <Layout>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </Layout>
        </LanguageProvider>
    )
}

export default App