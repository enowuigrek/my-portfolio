import { LanguageProvider } from './contexts/LanguageContext'
import SEOHead from './components/seo/SEOHead'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About/About'
import Skills from './components/sections/Skills/Skills'
import Projects from './components/sections/Projects/Projects'
import Contact from './components/sections/Contact/Contact'

function App() {
    return (
        <LanguageProvider>
            <SEOHead />
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