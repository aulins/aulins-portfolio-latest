"use client";

import { useState, useEffect } from "react";

export default function Home() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [loading, setLoading] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: "success", message: data.message });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus({ type: "error", message: data.error });
            }
        } catch (error) {
            setStatus({ type: "error", message: "Gagal mengirim pesan" });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack online store dengan payment integration dan admin dashboard",
            tech: ["Next.js", "Stripe", "PostgreSQL"],
            year: "2024",
        },
        {
            title: "Task Management",
            description: "Real-time collaborative workspace dengan drag & drop interface",
            tech: ["React", "Firebase", "Tailwind"],
            year: "2024",
        },
        {
            title: "Analytics Dashboard",
            description: "Interactive data visualization dengan real-time updates",
            tech: ["Next.js", "Chart.js", "API"],
            year: "2023",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                {/* Gradient Orbs */}
                <div
                    className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl transition-all duration-1000"
                    style={{
                        top: `${mousePosition.y / 10}px`,
                        left: `${mousePosition.x / 10}px`,
                    }}
                ></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Navigation */}
                <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/80 border-b border-blue-500/20 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Portfolio
                            </a>
                            <div className="hidden md:flex space-x-8">
                                <a href="#home" className="hover:text-blue-400 transition-colors">
                                    Home
                                </a>
                                <a href="#about" className="hover:text-blue-400 transition-colors">
                                    About
                                </a>
                                <a href="#skills" className="hover:text-blue-400 transition-colors">
                                    Skills
                                </a>
                                <a href="#projects" className="hover:text-blue-400 transition-colors">
                                    Projects
                                </a>
                                <a href="#contact" className="hover:text-blue-400 transition-colors">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-8 animate-fadeIn">
                            <img
                                src="/profil.png"
                                alt="Profile"
                                className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-5xl font-bold shadow-2xl shadow-blue-500/50 animate-float"
                            />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fadeIn">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Fullstack Developer</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto animate-fadeIn delay-200">Crafting beautiful web experiences with modern technologies</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-300">
                            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                                View Projects
                                <span className="inline-block group-hover:translate-x-1 transition-transform ml-2">→</span>
                            </a>
                            <a href="#contact" className="px-8 py-4 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-32 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl font-bold mb-12 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
                        </h2>
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
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-32 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-5xl font-bold mb-12 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills & Technologies</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="group backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/60 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className={`text-5xl mb-4 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent font-bold`}>{skill.icon}</div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{skill.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-32 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-5xl font-bold mb-12 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</span>
                        </h2>
                        <div className="space-y-8">
                            {projects.map((project, index) => (
                                <div key={index} className="group backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/60 hover:bg-slate-900/70 transition-all duration-300 hover:translate-x-2">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                            <p className="text-slate-400 mb-4 md:mb-0">{project.description}</p>
                                        </div>
                                        <span className="text-blue-400 font-semibold">{project.year}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300 font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-32 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl font-bold mb-12 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Get In Touch</span>
                        </h2>
                        <div className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-8 md:p-12 hover:border-blue-500/40 transition-all duration-300">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-slate-500"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-slate-500"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-slate-500"
                                        placeholder="Your message..."
                                    />
                                </div>

                                {status.message && (
                                    <div className={`p-4 rounded-xl border ${status.type === "success" ? "bg-green-500/10 text-green-400 border-green-500/30" : "bg-red-500/10 text-red-400 border-red-500/30"}`}>{status.message}</div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-blue-500/20 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-6 md:mb-0">
                                <p className="text-slate-400">© 2024 Portfolio. Built with Next.js & Supabase.</p>
                            </div>
                            <div className="flex space-x-6">
                                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    <span className="text-2xl">📧</span>
                                </a>
                                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    <span className="text-2xl">💼</span>
                                </a>
                                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
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
