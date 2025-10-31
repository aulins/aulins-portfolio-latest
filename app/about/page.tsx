"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const skills = [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
        { name: "Next.js", icon: "▲", color: "from-slate-400 to-zinc-400" },
        { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-600" },
        { name: "Tailwind", icon: "🎨", color: "from-cyan-400 to-teal-400" },
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-400" },
        { name: "Supabase", icon: "🔥", color: "from-emerald-400 to-green-500" },
        { name: "Git", icon: "📦", color: "from-orange-400 to-red-400" },
        { name: "API", icon: "🔌", color: "from-purple-400 to-pink-400" },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl transition-all duration-1000" style={{ top: `${mousePosition.y / 10}px`, left: `${mousePosition.x / 10}px` }}></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
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

            {/* Content */}
            <div className="relative z-10 pt-32 pb-20 px-4">
                {/* About Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h1 className="text-5xl font-bold mb-12 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
                    </h1>
                    <div className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-8 md:p-12 hover:border-blue-500/40 transition-all duration-300">
                        <p className="text-lg text-slate-300 leading-relaxed mb-6">
                            Hi! Saya adalah seorang fullstack developer yang passionate dalam menciptakan aplikasi web yang modern, responsif, dan user-friendly. Dengan pengalaman dalam berbagai teknologi web terkini, saya fokus pada
                            pengembangan solusi yang tidak hanya terlihat bagus, tetapi juga berfungsi dengan sempurna.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Saya percaya bahwa kode yang baik adalah kode yang clean, maintainable, dan scalable. Mari berkolaborasi untuk mewujudkan ide Anda menjadi kenyataan digital yang menakjubkan!
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills & Technologies</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/60 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                            >
                                <div className={`text-5xl mb-4 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent font-bold`}>{skill.icon}</div>
                                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-blue-500/20 py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 mb-6 md:mb-0">© 2024 Portfolio. Built with Next.js & Supabase.</p>
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
