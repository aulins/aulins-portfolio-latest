"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Data teknologi
    const technologies = [
        { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-500" },
        { name: "CodeIgniter", icon: "🔥", color: "from-red-500 to-orange-500" },
        { name: "SQL", icon: "🗄️", color: "from-blue-400 to-cyan-500" },
        { name: "REST API", icon: "🔌", color: "from-green-400 to-emerald-500" },
        { name: "TensorFlow", icon: "🧠", color: "from-orange-400 to-red-500" },
        { name: "Pandas", icon: "🐼", color: "from-blue-400 to-indigo-500" },
        { name: "Grafana", icon: "📊", color: "from-orange-500 to-red-600" },
        { name: "Prometheus", icon: "📈", color: "from-red-500 to-pink-500" },
        { name: "Linux", icon: "🐧", color: "from-yellow-400 to-orange-500" },
        { name: "Figma", icon: "🎨", color: "from-purple-400 to-pink-500" },
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
            icon: "💻",
            skills: ["React", "Next.js", "CodeIgniter"],
        },
        {
            title: "Backend Development",
            description: "Creating robust REST APIs and server-side applications",
            icon: "⚙️",
            skills: ["Python", "SQL", "REST API"],
        },
        {
            title: "Data Analysis",
            description: "Analyzing data and building ML models for insights",
            icon: "📊",
            skills: ["Python", "Pandas", "TensorFlow"],
        },
        {
            title: "DevOps & Monitoring",
            description: "Setting up monitoring systems and server management",
            icon: "🔧",
            skills: ["Linux", "Grafana", "Prometheus"],
        },
    ];

    const latestProjects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack online store with payment integration",
            tech: ["Next.js", "Stripe", "PostgreSQL"],
            image: "🛒",
            year: "2024",
        },
        {
            title: "Analytics Dashboard",
            description: "Real-time data visualization with Grafana",
            tech: ["Python", "Grafana", "Prometheus"],
            image: "📊",
            year: "2024",
        },
        {
            title: "ML Prediction Model",
            description: "Machine learning model for sales forecasting",
            tech: ["Python", "TensorFlow", "Pandas"],
            image: "🤖",
            year: "2023",
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
            <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/80 border-b border-blue-500/20 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-shimmer">
                            Portfolio
                        </Link>
                        <div className="hidden md:flex space-x-8">
                            <Link href="/" className="text-blue-400">
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

                {/* Technologies Section */}
                <section className="py-20 px-4 bg-slate-900/30">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technologies I Love</span>
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">Tools and technologies I use to build amazing projects</p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            {technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="group backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6 text-center hover:border-blue-500/60 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                    <div className={`text-5xl mb-3 bg-gradient-to-br ${tech.color} bg-clip-text text-transparent`}>{tech.icon}</div>
                                    <div className="text-sm font-semibold group-hover:text-blue-400 transition-colors">{tech.name}</div>
                                </div>
                            ))}
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
                                    <div className="text-5xl mb-4">{service.icon}</div>
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
                                    <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-8xl relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                                        <span className="relative z-10">{project.image}</span>
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
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">Ulya A. ✨</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">Fullstack Developer passionate about crafting beautiful, responsive interfaces and diving into data to make experiences smarter and more impactful.</p>
                                <div className="flex space-x-4">
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                        🐙
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                        💼
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                        📷
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
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">📧</span>
                                        <div>
                                            <div className="text-sm text-slate-500 mb-1">Email</div>
                                            <a href="mailto:your@email.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                                                your@email.com
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">📱</span>
                                        <div>
                                            <div className="text-sm text-slate-500 mb-1">Phone</div>
                                            <a href="tel:+62123456789" className="text-slate-300 hover:text-blue-400 transition-colors">
                                                +62 123 456 789
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">📍</span>
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
                                <p className="text-slate-500 text-sm">© 2024 By Ulya Aulia</p>
                                <p className="text-slate-500 text-sm flex items-center gap-2">
                                    Made with <span className="text-red-500 animate-pulse">❤️</span> Love u!
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
            `}</style>
        </div>
    );
}
