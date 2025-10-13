import { NavLink, Link } from 'react-router-dom'
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];
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
                "w-full z-40 transition-all duration-300",
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

                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* <a href="#home" className="text-foreground/80 hover:text-primary transition-colors duration-300">Home</a>
                    <a href="#about" className="text-foreground/80 hover:text-primary transition-colors duration-300">About</a>
                    <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors duration-300">Projects</a>
                    <a href="#services" className="text-foreground/80 hover:text-primary transition-colors duration-300">Services</a>
                    <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors duration-300">Contact</a> */}
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
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}


                        {/* <a onClick={() => setVisible(false)} href="home" className="text-foreground/80 hover:text-primary transition-colors duration-300">Home</a>
                        <a onClick={() => setVisible(false)} href="about" className="text-foreground/80 hover:text-primary transition-colors duration-300">About</a>
                        <a onClick={() => setVisible(false)} href="projects" className="text-foreground/80 hover:text-primary transition-colors duration-300">Projects</a>
                        <a onClick={() => setVisible(false)} href="services" className="text-foreground/80 hover:text-primary transition-colors duration-300">Services</a>
                        <a onClick={() => setVisible(false)} href="contact" className="text-foreground/80 hover:text-primary transition-colors duration-300">Contact</a> */}

                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar
