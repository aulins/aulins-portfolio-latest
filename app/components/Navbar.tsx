"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/80 border-b border-blue-500/20 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Portfolio
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={`transition-colors ${pathname === link.href ? "text-blue-400" : "hover:text-blue-400"}`}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button onClick={toggleMenu} className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none" aria-label="Toggle menu">
                        <span className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden" onClick={closeMenu} />}

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-slate-900/95 backdrop-blur-md border-l border-blue-500/20 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col p-8 pt-24 space-y-6">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={closeMenu} className={`text-xl font-semibold transition-colors ${pathname === link.href ? "text-blue-400" : "text-slate-300 hover:text-blue-400"}`}>
                            {link.label}
                        </Link>
                    ))}

                    {/* Social Links in Mobile Menu */}
                    <div className="pt-8 border-t border-blue-500/20">
                        <p className="text-slate-400 text-sm mb-4">Connect</p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                🐙
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                💼
                            </a>
                            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                📷
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
