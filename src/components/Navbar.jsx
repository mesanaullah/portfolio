import { NavLink } from 'react-router-dom'
// import { cn } from "@/lib/utils";
// import { useEffect, useState } from "react";
// import { MdClose } from "react-icons/md";
// import { IoReorderThreeOutline } from "react-icons/io5";

// const Navbar = () => {
//     return (
//         <div className='flex items-center justify-between py-6 px-30 font-light '>

//             <div>
//                 <p className='px-4 font-medium cursor-pointer text-white'>IMSANAULLAH</p>
//                 {/* <hr className='w-[2px] border-none h-[2px] bg-white' /> */}
//             </div>

//             <ul className='hidden sm:flex gap-6 text-md text-white '>
//                 <NavLink to='/'>
//                     <p>Home</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
//                 </NavLink>

//                 <NavLink to='/about'>
//                     <p>About</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
//                 </NavLink>

//                 <NavLink to='/portfolio'>
//                     <p>Portfolio</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
//                 </NavLink>

//                 <NavLink to='/services'>
//                     <p>Services</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
//                 </NavLink>

//                 <NavLink to='/contact'>
//                     <p>Contact</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
//                 </NavLink>
//             </ul>

//         </div>
//     )
// }

// export default Navbar

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";

// const navItems = [
//     { name: "Home", href: "#hero" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
// ];
const Navbar = () => {


    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Sanaullah </span>{" "}
                        Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {/* {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))} */}

                    <NavLink to='/'>
                        <p className="text-foreground/80 hover:text-primary transition-colors duration-300">Home</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                    </NavLink>

                    <NavLink to='/about'>
                        <p className="text-foreground/80 hover:text-primary transition-colors duration-300">About</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                    </NavLink>

                    <NavLink to='/projects'>
                        <p className="text-foreground/80 hover:text-primary transition-colors duration-300">Projects</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                    </NavLink>

                    <NavLink to='/services'>
                        <p className="text-foreground/80 hover:text-primary transition-colors duration-300">Services</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                    </NavLink>

                    <NavLink to='/contact'>
                        <p className="text-foreground/80 hover:text-primary transition-colors duration-300">Contact</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                    </NavLink>
                </div>

                {/* mobile nav */}

                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <MdClose className='h-6 w-6' /> : <IoReorderThreeOutline className='h-6 w-6' />}{" "}
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {/* {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))} */}
                        

                        <NavLink onClick={() => setVisible(false)} to='/'>
                            <p className="text-foreground/80 hover:text-primary transition-colors duration-300">Home</p>
                        </NavLink>

                        <NavLink onClick={() => setVisible(false)} to='/about'>
                            <p className="text-foreground/80 hover:text-primary transition-colors duration-300">About</p>
                        </NavLink>

                        <NavLink onClick={() => setVisible(false)} to='/projects'>
                            <p className="text-foreground/80 hover:text-primary transition-colors duration-300">Projects</p>
                        </NavLink>

                        <NavLink onClick={() => setVisible(false)} to='/services'>
                            <p className="text-foreground/80 hover:text-primary transition-colors duration-300">Services</p>
                        </NavLink>

                        <NavLink onClick={() => setVisible(false)} to='/contact'>
                            <p className="text-foreground/80 hover:text-primary transition-colors duration-300">Contact</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar
