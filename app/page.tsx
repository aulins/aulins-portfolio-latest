"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const technologies = [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
        { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
        { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
        { name: "Kaggle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ];

    const stats = [
        { label: "Years Experience", value: "2+", icon: "" },
        { label: "Projects Completed", value: "5+", icon: "" },
        { label: "Technologies", value: "10+", icon: "" },
    ];

    const services = [
        {
            title: "Web Development",
            description: "Building responsive and modern web applications with latest technologies",
            skills: ["React", "Next.js", "CodeIgniter"],
        },
        {
            title: "Backend Development",
            description: "Creating robust REST APIs and server-side applications",
            skills: ["Python", "SQL", "REST API"],
        },
        {
            title: "Data Analysis",
            description: "Analyzing data and building ML models for insights",
            skills: ["Python", "Pandas", "TensorFlow"],
        },
        {
            title: "DevOps & Monitoring",
            description: "Setting up monitoring systems and server management",
            skills: ["Linux", "Grafana", "Prometheus"],
        },
    ];

    const latestProjects = [
        {
            title: "Batik Image Classification",
            description: "Machine learning model for batik pattern classification",
            tech: ["Python", "TensorFlow", "CNN"],
            image: "/skripsi.png",
            year: "2025",
        },
        {
            title: "Analytics Dashboard",
            description: "Real-time data visualization with Grafana",
            tech: ["Python", "Grafana", "Prometheus"],
            image: "/dashboard.png",
            year: "2025",
        },
        {
            title: "ML Prediction Model",
            description: "Machine learning model for sales forecasting",
            tech: ["Python", "TensorFlow", "Pandas"],
            image: "/prediksi.png",
            year: "2025",
        },
    ];

    // Generate random stars untuk animasi
    const generateStars = (count: number) => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 3,
            duration: Math.random() * 3 + 2,
        }));
    };

    const [stars] = useState(() => generateStars(50));

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
            {/* Animated Background with Stars */}
            <div className="fixed inset-0 z-0">
                {/* Gradient Orbs */}
                <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl transition-all duration-1000" style={{ top: `${mousePosition.y / 10}px`, left: `${mousePosition.x / 10}px` }}></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

                {/* Stars/Sparkles */}
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute rounded-full bg-blue-300/40 animate-twinkle"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            animationDelay: `${star.delay}s`,
                            animationDuration: `${star.duration}s`,
                        }}
                    ></div>
                ))}

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>
            {/* Navigation */}
            <Navbar />
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-4 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="relative inline-block mb-6">
                            <img src="/profil.png" alt="Profile" className="w-64 h-64 mx-auto rounded-full shadow-2xl shadow-blue-500/50 animate-float object-cover border-4 border-blue-500/30" />
                            {/* Sparkle around image */}
                            <div className="absolute -top-2 -right-2 text-2xl animate-spin-slow">𓇼</div>
                            <div className="absolute -bottom-2 -left-2 text-xl animate-bounce-slow">.˚</div>
                            <div className="absolute top-1/2 -right-4 text-lg animate-pulse">✧</div>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                                Hi. I&apos;m Ulya. <br /> A Developer.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">I&apos;m passionate about developing modern web systems that integrate data, AI, and DevOps for smarter solutions.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

                {/* Stats Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-500/60 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                                >
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    <div className="text-5xl mb-4 animate-bounce-slow">{stat.icon}</div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                                    <div className="text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies Carousel Section */}
                <section className="py-20 px-4 bg-slate-900/30 overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Technologies I <span className="text-blue-500">💙</span>
                            </span>
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">Tools and technologies I use to build amazing projects</p>

                        {/* wrapper overflow-hidden sudah benar */}
                        <div className="relative overflow-hidden">
                            {/* tambahkan class penanda utk pause-on-hover (opsional) */}
                            <div className="carousel">
                                {/* track yang bergerak: duplikasi array 2x */}
                                <div className="flex gap-4 animate-scroll will-change-transform">
                                    {[...technologies, ...technologies].map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0 w-32 mx-4 backdrop-blur-md bg-slate-900/50 border border-blue-500/0 rounded-2xl p-6 text-center hover:border-blue-500/60 transition-all duration-300 hover:scale-100 hover:shadow-xl hover:shadow-blue-500/20"
                                        >
                                            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mx-auto mb-3" />
                                            <div className="text-sm font-semibold text-slate-300 group-hover:text-blue-400 transition-colors">{tech.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What I Can Offer Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">What I Can Offer</span>
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">Professional services I provide to bring your ideas to life</p>
                        <div className="grid md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/60 hover:bg-slate-900/70 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                    <p className="text-slate-400 mb-4 leading-relaxed">{service.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Latest Work Section */}
                <section className="py-20 px-4 bg-slate-900/30">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Latest Work</span>
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">Check out some of my recent projects</p>
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {latestProjects.map((project, index) => (
                                <div key={index} className="group backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/60 transition-all duration-300 hover:scale-105">
                                    <div className="h-48 relative overflow-hidden bg-slate-800">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                            <span className="text-xs text-blue-400 font-semibold">{project.year}</span>
                                        </div>
                                        <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <Link
                                href="/projects"
                                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                            >
                                View All Projects →
                            </Link>
                        </div>
                    </div>
                </section>

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
            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                @keyframes twinkle {
                    0%,
                    100% {
                        opacity: 0.2;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.2);
                    }
                }
                @keyframes shimmer {
                    0% {
                        background-position: -1000px 0;
                    }
                    100% {
                        background-position: 1000px 0;
                    }
                }
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                @keyframes bounce-slow {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-twinkle {
                    animation: twinkle 2s ease-in-out infinite;
                }
                .animate-shimmer {
                    background-size: 1000px 100%;
                    animation: shimmer 3s linear infinite;
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
                /* Gerakkan track ke kiri sejauh 50% (karena item diduplikasi 2×) */
                @keyframes scroll-x {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(-50%, 0, 0);
                    }
                }
                .animate-scroll {
                    animation: scroll-x 25s linear infinite;
                }

                /* Pause saat hover/focus di area carousel */
                .carousel:is(:hover, :focus-within) .animate-scroll {
                    animation-play-state: paused !important;
                }

                /* Prefer-reduced-motion */
                @media (prefers-reduced-motion: reduce) {
                    .animate-scroll {
                        animation: none;
                    }
                }
            `}</style>
        </div>
    );
}
