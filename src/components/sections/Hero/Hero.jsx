import { useState, useEffect } from 'react'
import HeroContent from './HeroContent'
import HeroScrollArrow from './HeroScrollArrow'

function Hero() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrollY(window.scrollY)
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Calculate opacity and parallax values
    const arrowOpacity = Math.max(0, 1 - scrollY / 200)
    // Content fade out - starts fading at 150px, fully transparent at 600px
    const contentOpacity = Math.max(0, 1 - Math.max(0, scrollY - 150) / 450)
    const parallaxOffset = scrollY * 0.5

    return (
        <section
            id="home"
            className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative overflow-hidden"
            style={{
                transform: `translateY(${parallaxOffset}px)`,
            }}
        >
            <HeroContent contentOpacity={contentOpacity} />
            <HeroScrollArrow arrowOpacity={arrowOpacity} />

            {/* Gradient overlay to ensure smooth transition to next section */}
            <div
                className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"
                style={{
                    opacity: Math.min(1, scrollY / 100)
                }}
            />
        </section>
    )
}

export default Hero