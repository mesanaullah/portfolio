import React from 'react'
import Hero from '../components/Hero'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import About from './About'

const Home = () => {
    return (
        <div className='min-h-screen container'>
            {/* Them toggle */}
            <ThemeToggle />

            {/* Backgroyund effect */}
            <StarBackground />

            {/* main content */}
            <Hero />
            <About />
            {/* footer */}
        </div>
    )
}

export default Home
