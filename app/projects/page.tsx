"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Projects() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [expandedProject, setExpandedProject] = useState<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const projects = [
        {
            title: "Batik Image Classification",
            shortDescription: "Deep learning model untuk klasifikasi pola batik Indonesia",
            fullDescription:
                "Machine learning project menggunakan Convolutional Neural Networks (CNN) untuk mengklasifikasikan berbagai jenis pola batik Indonesia. Model ini dilatih dengan dataset batik yang mencakup berbagai motif dan dapat mengidentifikasi pola dengan akurasi tinggi.",
            type: "Machine Learning",
            tech: ["Python", "TensorFlow", "CNN", "Keras"],
            image: "/skripsi.jpg",
            year: "2025",
            status: "Completed",
            github: "https://github.com/aulins/batik-classification",
            live: null,
        },
        {
            title: "Analytics Dashboard",
            shortDescription: "Real-time monitoring dashboard dengan Grafana dan Prometheus",
            fullDescription:
                "Dashboard monitoring sistem real-time yang menampilkan metrics performa server, penggunaan resource, dan visualisasi data secara interaktif. Terintegrasi dengan Prometheus untuk data collection dan Grafana untuk visualization.",
            type: "Fullstack",
            tech: ["Python", "Grafana", "Prometheus", "Docker"],
            image: "/dashboard.png",
            year: "2025",
            status: "Live",
            github: "https://github.com/aulins/analytics-dashboard",
            live: "https://dashboard-demo.vercel.app",
        },
        {
            title: "Sales Prediction Model",
            shortDescription: "ML model untuk forecasting penjualan menggunakan time series analysis",
            fullDescription: "Sistem prediksi penjualan menggunakan algoritma machine learning untuk forecasting. Model ini menganalisis historical data dan menghasilkan prediksi yang akurat untuk membantu business planning.",
            type: "Machine Learning",
            tech: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
            image: "/prediksi.png",
            year: "2025",
            status: "Completed",
            github: "https://github.com/aulins/sales-prediction",
            live: null,
        },
        {
            title: "E-Commerce Platform",
            shortDescription: "Full-stack online store dengan payment gateway integration",
            fullDescription: "Platform e-commerce lengkap dengan fitur shopping cart, payment gateway (Midtrans), admin dashboard, inventory management, dan order tracking system. Dibangun dengan arsitektur MVC menggunakan CodeIgniter.",
            type: "Fullstack",
            tech: ["CodeIgniter", "PHP", "MySQL", "Bootstrap"],
            image: "/ecommerce.png",
            year: "2024",
            status: "Completed",
            github: "https://github.com/aulins/ecommerce-platform",
            live: "https://shop-demo.vercel.app",
        },
        {
            title: "Portfolio Website Design",
            shortDescription: "Modern portfolio design dengan dark theme dan smooth animations",
            fullDescription: "Desain portfolio website modern dengan fokus pada user experience, animasi yang smooth, dan responsive layout. Menggunakan Figma untuk prototyping dan design system.",
            type: "UI/UX Design",
            tech: ["Figma", "UI/UX", "Prototyping"],
            image: "/portfolio-design.png",
            year: "2024",
            status: "Completed",
            github: null,
            live: "https://figma.com/portfolio-design",
        },
        {
            title: "Task Management Web App",
            shortDescription: "Collaborative task management dengan real-time updates",
            fullDescription: "Aplikasi manajemen tugas kolaboratif dengan fitur real-time synchronization, drag-and-drop interface, team collaboration, dan notification system. Perfect untuk project management.",
            type: "Web App",
            tech: ["React", "Firebase", "Tailwind CSS"],
            image: "/task-app.png",
            year: "2024",
            status: "In Progress",
            github: "https://github.com/aulins/task-manager",
            live: "https://task-app-demo.vercel.app",
        },
    ];

    const toggleExpand = (index: number) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case "Machine Learning":
                return "bg-purple-500/20 text-purple-400 border-purple-500/30";
            case "Fullstack":
                return "bg-blue-500/20 text-blue-400 border-blue-500/30";
            case "Web App":
                return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
            case "UI/UX Design":
                return "bg-pink-500/20 text-pink-400 border-pink-500/30";
            default:
                return "bg-slate-500/20 text-slate-400 border-slate-500/30";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Live":
                return "bg-green-500/20 text-green-400 border-green-500/30";
            case "Completed":
                return "bg-blue-500/20 text-blue-400 border-blue-500/30";
            case "In Progress":
                return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
            default:
                return "bg-slate-500/20 text-slate-400 border-slate-500/30";
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl transition-all duration-1000" style={{ top: `${mousePosition.y / 10}px`, left: `${mousePosition.x / 10}px` }}></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <Navbar />

            <div className="relative z-10 pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</span>
                    </h1>
                    <p className="text-center text-slate-400 text-lg mb-16 max-w-2xl mx-auto">A collection of projects showcasing my expertise in web development, machine learning, and design.</p>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {projects.map((project, index) => (
                            <div key={index} className="group backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/60 transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden bg-slate-800">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

                                    {/* Type Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(project.type)}`}>{project.type}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Title & Status */}
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors flex-1">{project.title}</h3>
                                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>{project.status}</span>
                                    </div>

                                    {/* Short Description */}
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                                            <span key={techIndex} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-400">+{project.tech.length - 3}</span>}
                                    </div>

                                    {/* Details Button */}
                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="w-full px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg font-semibold text-blue-400 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        {expandedProject === index ? "Hide Details" : "View Details"}
                                        <span className={`transition-transform duration-300 ${expandedProject === index ? "rotate-180" : ""}`}>▼</span>
                                    </button>
                                </div>

                                {/* Expanded Content */}
                                {expandedProject === index && (
                                    <div className="border-t border-blue-500/20 p-6 bg-slate-900/70 animate-fade-in">
                                        {/* Project Overview */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Project Overview
                                            </h4>
                                            <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>
                                        </div>

                                        {/* All Technologies */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-slate-400 mb-3">Technologies Used:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, techIndex) => (
                                                    <span key={techIndex} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-3">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 min-w-[140px] px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                                                >
                                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    GitHub
                                                </a>
                                            )}
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 min-w-[140px] px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                                                >
                                                    Visit Live
                                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-12">
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Have a project in mind?</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">Let&apos;s collaborate and bring your ideas to life!</p>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="relative border-t border-blue-500/20 py-16 bg-slate-900/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
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
                                    <svg className="w-6 h-6 fill-slate-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
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
                                    <svg className="w-6 h-6 fill-slate-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
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
                                    <svg className="w-6 h-6 fill-slate-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

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

                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-blue-400">Contact Info</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-0.5 text-blue-400">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                                            <path d="M3 7l9 6 9-6" />
                                        </svg>
                                    </span>
                                    <div>
                                        <div className="text-sm text-slate-500 mb-1">Email</div>
                                        <a href="mailto:secretary@ainash.my.id" className="text-slate-300 hover:text-blue-400 transition-colors">
                                            secretary@ainash.my.id
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-0.5 text-blue-400">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
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

                    <div className="border-t border-blue-500/10 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-slate-500 text-sm">© 2025 By Ulya A.</p>
                            <p className="text-slate-500 text-sm flex items-center gap-2">
                                Made with <span className="text-red-500 animate-pulse">💙</span>u !
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
