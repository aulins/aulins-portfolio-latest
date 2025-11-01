"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Education Data
    const education = [
        {
            degree: "Bachelor of Computer Science",
            school: "Gunadarma University",
            year: "2021 - 2025",
            description: "Focus on Software Engineering and Data Science",
        },
        {
            degree: "High School",
            school: "MAN 2 Garut",
            year: "2017 - 2020",
            description: "Science Major",
        },
    ];

    // Skills Data (CV Style - kategorisasi)
    const skillsCategories = [
        {
            category: "Frontend Development",
            skills: [
                { name: "React/Next.js", level: 90 },
                { name: "HTML/CSS", level: 95 },
                { name: "Tailwind CSS", level: 90 },
                { name: "JavaScript/TypeScript", level: 85 },
            ],
        },
        {
            category: "Backend Development",
            skills: [
                { name: "Python", level: 85 },
                { name: "CodeIgniter/PHP", level: 80 },
                { name: "REST API", level: 85 },
                { name: "SQL/Database", level: 80 },
            ],
        },
        {
            category: "Data & AI",
            skills: [
                { name: "Pandas", level: 80 },
                { name: "TensorFlow", level: 75 },
                { name: "Data Analysis", level: 85 },
                { name: "Machine Learning", level: 75 },
            ],
        },
        {
            category: "DevOps & Tools",
            skills: [
                { name: "Linux", level: 80 },
                { name: "Grafana", level: 75 },
                { name: "Prometheus", level: 70 },
                { name: "Git/GitHub", level: 85 },
            ],
        },
        {
            category: "Design",
            skills: [
                { name: "Figma", level: 85 },
                { name: "UI/UX Design", level: 80 },
            ],
        },
    ];

    // Certifications
    const certifications = [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            year: "2024",
            icon: "☁️",
        },
        {
            title: "TensorFlow Developer Certificate",
            issuer: "Google",
            year: "2023",
            icon: "🧠",
        },
        {
            title: "Python for Data Science",
            issuer: "IBM",
            year: "2023",
            icon: "🐍",
        },
        {
            title: "React - The Complete Guide",
            issuer: "Udemy",
            year: "2023",
            icon: "⚛️",
        },
        {
            title: "Grafana Fundamentals",
            issuer: "Grafana Labs",
            year: "2024",
            icon: "📊",
        },
    ];

    // Languages
    const languages = [
        { name: "Indonesian", level: "Native", percentage: 100, flag: "🇮🇩" },
        { name: "English", level: "Intermediet", percentage: 85, flag: "🇬🇧" },
    ];

    // Generate stars
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
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl transition-all duration-1000" style={{ top: `${mousePosition.y / 10}px`, left: `${mousePosition.x / 10}px` }}></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

                {/* Stars */}
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
                            <Link href="/about" className="text-blue-400">
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
                {/* Hero Section - Photo + Bio */}
                <section className="pt-32 pb-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Left - Photo */}
                            <div className="relative">
                                <div className="sticky top-32">
                                    <div className="relative inline-block">
                                        <img src="/fullbody.png" alt="Full Body Photo" className="w-full max-w-md mx-auto rounded-3xl shadow-2xl shadow-blue-500/30 border-4 border-blue-500/20" />
                                        <div className="absolute -top-4 -right-4 text-3xl animate-spin-slow">𓇼</div>
                                        <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce-slow">✧</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Bio + Education */}
                            <div>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Meet Me 👋</span>
                                </h1>

                                {/* Bio Paragraphs */}
                                <div className="space-y-6 mb-12">
                                    <p className="text-lg text-slate-300 leading-relaxed">
                                        Hello! I am Ulya Aulia, a passionate fullstack developer with a strong interest in creating modern web applications that integrate data science, artificial intelligence, and DevOps practices. I love
                                        turning complex problems into elegant, scalable solutions.
                                    </p>
                                    <p className="text-lg text-slate-300 leading-relaxed">
                                        With over 2 years of experience in software development, I have worked on various projects ranging from e-commerce platforms to machine learning applications. I am constantly learning new technologies
                                        and best practices to deliver high-quality solutions that make a real impact.
                                    </p>
                                </div>

                                {/* Education */}
                                <div>
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                        <span className="text-4xl">🎓</span>
                                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
                                    </h2>
                                    <div className="space-y-6">
                                        {education.map((edu, index) => (
                                            <div key={index} className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/60 transition-all duration-300">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-xl font-bold text-blue-400">{edu.degree}</h3>
                                                    <span className="text-sm text-slate-400">{edu.year}</span>
                                                </div>
                                                <p className="text-lg text-slate-300 mb-2">{edu.school}</p>
                                                <p className="text-slate-400">{edu.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-20 px-4 bg-slate-900/30">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills & Expertise</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {skillsCategories.map((category, index) => (
                                <div key={index} className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/60 transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-6 text-blue-400">{category.category}</h3>
                                    <div className="space-y-4">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex}>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-slate-300">{skill.name}</span>
                                                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certifications.map((cert, index) => (
                                <div key={index} className="group backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/60 hover:scale-105 transition-all duration-300">
                                    <div className="text-5xl mb-4">{cert.icon}</div>
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                                    <p className="text-slate-400 text-sm mb-2">{cert.issuer}</p>
                                    <p className="text-blue-400 font-semibold text-sm">{cert.year}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Languages Section */}
                <section className="py-20 px-4 bg-slate-900/30">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Languages</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {languages.map((lang, index) => (
                                <div key={index} className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/60 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-5xl">{lang.flag}</span>
                                        <div>
                                            <h3 className="text-2xl font-bold">{lang.name}</h3>
                                            <p className="text-blue-400">{lang.level}</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{ width: `${lang.percentage}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Outside of Work / Florist Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Outside of Work 🌸</span>
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">When I am not coding, you will find me creating beautiful flower arrangements</p>

                        <div className="backdrop-blur-md bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-pink-500/30 rounded-3xl p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                        <span className="text-4xl">💐</span>
                                        <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Florist & Bouquet Designer</span>
                                    </h3>
                                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                        I have a deep passion for flowers and floral design. Creating beautiful bouquets and arrangements brings me joy and allows me to express my creativity in a different way. Each bouquet tells a story
                                        and conveys emotions that words cannot express.
                                    </p>
                                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                        Whether it is for weddings, birthdays, anniversaries, or just because - I love crafting custom bouquets that bring smiles to people. Every arrangement is made with love and attention to detail.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-sm text-pink-300">🌹 Wedding Bouquets</span>
                                        <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">🌷 Custom Arrangements</span>
                                        <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300">💐 Event Florals</span>
                                        <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-sm text-pink-300">🎁 Gift Bouquets</span>
                                    </div>
                                    <a
                                        href="https://instagram.com/yourbouquetshop"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <span className="text-2xl">📷</span>
                                        Check My Flower Gallery
                                    </a>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Placeholder for flower images - replace with actual images */}
                                    <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-6xl">🌹</div>
                                    <div className="aspect-square bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-6xl">🌸</div>
                                    <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-6xl">💐</div>
                                    <div className="aspect-square bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center text-6xl">🌷</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enhanced Footer */}
                <footer className="relative border-t border-blue-500/20 py-16 bg-slate-900/50 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-12 mb-12">
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">Ulya A. ✨</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">Fullstack Developer passionate about crafting beautiful, responsive interfaces and diving into data to make experiences smarter and more impactful.</p>
                                <div className="flex space-x-4">
                                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                        🐙
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                                    >
                                        💼
                                    </a>
                                    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                        📷
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
                                        <span className="text-2xl">📧</span>
                                        <div>
                                            <div className="text-sm text-slate-500 mb-1">Email</div>
                                            <a href="mailto:your@email.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                                                your@email.com
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

                        <div className="border-t border-blue-500/10 pt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-slate-500 text-sm">© 2024 By Ulya Aulia</p>
                                <p className="text-slate-500 text-sm flex items-center gap-2">
                                    Made with <span className="text-red-500 animate-pulse">❤️</span> Love u!
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <style jsx>{`
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

                .animate-twinkle {
                    animation: twinkle 2s ease-in-out infinite;
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
