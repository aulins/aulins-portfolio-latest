"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div
                    className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl transition-all duration-1000"
                    style={{
                        top: `${mousePosition.y / 10}px`,
                        left: `${mousePosition.x / 10}px`,
                    }}
                ></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/80 border-b border-blue-500/20 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Portfolio
                        </Link>
                        <div className="hidden md:flex space-x-8">
                            <Link href="/" className="hover:text-blue-400 transition-colors">
                                Home
                            </Link>
                            <Link href="/about" className="hover:text-blue-400 transition-colors">
                                About
                            </Link>
                            <Link href="/projects" className="hover:text-blue-400 transition-colors">
                                Projects
                            </Link>
                            <Link href="/contact" className="hover:text-blue-400 transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative z-10">
                <section className="min-h-screen flex items-center justify-center px-4 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <img
                            src="/profil.png"
                            alt="Profile"
                            className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-5xl font-bold shadow-2xl shadow-blue-500/50 animate-float"
                        />
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fadeIn">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Hi. I&apos;m Ulya. <br />A Developer
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto animate-fadeIn delay-200">
                            I&apos;m an Informatics graduate passionate about developing modern web systems that integrate data, AI, and DevOps for smarter solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-300">
                            <Link href="/projects" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                                View Projects
                                <span className="inline-block group-hover:translate-x-1 transition-transform ml-2">→</span>
                            </Link>
                            <Link href="/contact" className="px-8 py-4 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-blue-500/20 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-6 md:mb-0">
                                <p className="text-slate-400">© 2025 By Aulia</p>
                            </div>
                            <div className="flex space-x-6">
                                <a href="mailto:your@email.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    <span className="text-2xl">📧</span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    <span className="text-2xl">💼</span>
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    <span className="text-2xl">🐙</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .delay-200 {
                    animation-delay: 200ms;
                }
                .delay-300 {
                    animation-delay: 300ms;
                }
                .delay-1000 {
                    animation-delay: 1000ms;
                }
            `}</style>
        </div>
    );
}
