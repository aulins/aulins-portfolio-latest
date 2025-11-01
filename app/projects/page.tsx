"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Projects() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack online store dengan payment gateway integration, admin dashboard, dan inventory management system.",
            tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
            year: "2024",
            status: "Completed",
            link: "#",
        },
        {
            title: "Task Management App",
            description: "Real-time collaborative workspace dengan drag and drop interface, team collaboration features, dan notification system.",
            tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
            year: "2024",
            status: "In Progress",
            link: "#",
        },
        {
            title: "Analytics Dashboard",
            description: "Interactive data visualization dashboard dengan real-time updates, custom charts, dan export functionality.",
            tech: ["Next.js", "Chart.js", "API", "TypeScript"],
            year: "2023",
            status: "Completed",
            link: "#",
        },
        {
            title: "Portfolio Website",
            description: "Modern portfolio website dengan dark theme, smooth animations, dan contact form integration with Supabase.",
            tech: ["Next.js", "Supabase", "Tailwind", "Vercel"],
            year: "2024",
            status: "Live",
            link: "#",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl transition-all duration-1000" style={{ top: `${mousePosition.y / 10}px`, left: `${mousePosition.x / 10}px` }}></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* navigation */}
            <Navbar />

            <div className="relative z-10 pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl font-bold mb-6 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</span>
                    </h1>
                    <p className="text-center text-slate-400 text-lg mb-16 max-w-2xl mx-auto">A collection of projects I have worked on, showcasing my skills in web development and problem-solving.</p>

                    <div className="space-y-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/60 hover:bg-slate-900/70 transition-all duration-300 hover:translate-x-2">
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    project.status === "Live"
                                                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                                        : project.status === "Completed"
                                                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                                }`}
                                            >
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300 font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start lg:items-end gap-3">
                                        <span className="text-blue-400 font-semibold text-lg">{project.year}</span>
                                        <a
                                            href={project.link}
                                            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                                        >
                                            View Project
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-12">
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Have a project in mind?</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">Let us collaborate and bring your ideas to life!</p>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>

            {/* Enhanced Footer */}
            <footer className="relative border-t border-blue-500/20 py-16 bg-slate-900/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        {/* About/Bio Column */}
                        <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-4">Ulya A. ✨</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">Fullstack Developer passionate about crafting beautiful, responsive interfaces and diving into data to make experiences smarter and more impactful.</p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/aulins"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-800/80 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 group"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-6 h-6 fill-slate-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://linkedin.com/in/auliaintanshafira/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-800/80 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 group"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-6 h-6 fill-slate-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://instagram.com/aulia_intan12/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-800/80 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 group"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-6 h-6 fill-slate-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-blue-400">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                                        <span className="text-blue-500">▸</span> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                                        <span className="text-blue-500">▸</span> Meet Me
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                                        <span className="text-blue-500">▸</span> Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                                        <span className="text-blue-500">▸</span> Get in Touch
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info Column */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-blue-400">Contact Info</h4>
                            <ul className="space-y-4">
                                {/* Email */}
                                <li className="flex items-start gap-3">
                                    <span className="mt-0.5 text-blue-400" aria-hidden="true">
                                        {/* Icon: Envelope (SVG) */}
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                                            <path d="M3 7l9 6 9-6" />
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="text-sm text-slate-500 mb-1">Email</div>
                                        <a href="mailto:founder@ainash.my.id" className="text-slate-300 hover:text-blue-400 transition-colors">
                                            founder@ainash.my.id
                                        </a>
                                    </div>
                                </li>

                                {/* Location */}
                                <li className="flex items-start gap-3">
                                    <span className="mt-0.5 text-blue-400" aria-hidden="true">
                                        {/* Icon: Map Pin (SVG) */}
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 21s-6-5.4-6-10a6 6 0 1 1 12 0c0 4.6-6 10-6 10z" />
                                            <circle cx="12" cy="11" r="2.5" />
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="text-sm text-slate-500 mb-1">Location</div>
                                        <p className="text-slate-300">Bandung, Indonesia</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-blue-500/10 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-slate-500 text-sm">© 2025 By Ulya A.</p>
                            <p className="text-slate-500 text-sm flex items-center gap-2">
                                Made with <span className="text-red-500 animate-pulse">💙</span>u !
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            </footer>
        </div>
    );
}
