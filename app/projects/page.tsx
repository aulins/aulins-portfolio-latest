"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
                            <Link href="/projects" className="text-blue-400">
                                Projects
                            </Link>
                            <Link href="/contact" className="hover:text-blue-400 transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

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

            <footer className="border-t border-blue-500/20 py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 mb-6 md:mb-0">© 2024 Portfolio. Built with Next.js and Supabase.</p>
                        <div className="flex space-x-6">
                            <a href="mailto:your@email.com" className="text-slate-400 hover:text-blue-400 transition-colors text-2xl">
                                📧
                            </a>
                            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-2xl">
                                💼
                            </a>
                            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-2xl">
                                🐙
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
