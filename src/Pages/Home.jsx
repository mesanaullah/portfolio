import React from 'react'
import Hero from '../components/Hero'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'

const Home = () => {
    return (
        <div className='min-h-screen container'>
            <Hero />
            {/* Them toggle */}
            <ThemeToggle />

            {/* Backgroyund effect */}
            <StarBackground />

            {/* Navbar */}
            {/* main content */}

            {/* footer */}
        </div>
    )
}

export default Home
