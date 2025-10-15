import React from 'react'
import Hero from '../components/Hero'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import About from './About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContectUs from '../components/ContectUs'

const Home = () => {
    return (
        <div className='min-h-screen container'>
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
                <ContectUs />
            </main>
            {/* footer */}
        </div>
    )
}

export default Home
