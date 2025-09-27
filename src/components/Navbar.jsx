import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-6 px-30 font-light '>

            <div>
                <p className='px-4 font-medium cursor-pointer text-white'>IMSANAULLAH</p>
                {/* <hr className='w-[2px] border-none h-[2px] bg-white' /> */}
            </div>

            <ul className='hidden sm:flex gap-6 text-md text-white '>
                <NavLink to='/'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                </NavLink>

                <NavLink to='/about'>
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                </NavLink>

                <NavLink to='/portfolio'>
                    <p>Portfolio</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                </NavLink>

                <NavLink to='/services'>
                    <p>Services</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                </NavLink>

                <NavLink to='/contact'>
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                </NavLink>
            </ul>

        </div>
    )
}

export default Navbar
