import React from 'react'
import Hero from '../components/Hero'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import About from './About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Home = () => {
    return (
        <div className='min-h-screen w-full container'>
            {/* Them toggle */}
            <ThemeToggle />

            {/* Backgroyund effect */}
            <StarBackground />

            {/* main content */}
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
            </main>
            {/* footer */}
        </div>
    )
}

export default Home
