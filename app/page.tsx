"use client";

import { useState } from "react";

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

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce dengan payment gateway integration",
            tech: ["Next.js", "Stripe", "PostgreSQL"],
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "Task Management App",
            description: "Real-time collaborative task management dengan drag & drop",
            tech: ["React", "Firebase", "Tailwind"],
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: "Analytics Dashboard",
            description: "Interactive dashboard dengan data visualization",
            tech: ["Next.js", "Chart.js", "API"],
            gradient: "from-orange-500 to-red-500",
        },
    ];

    const skills = [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "Supabase", level: 70 },
        { name: "Git", level: 85 },
        { name: "API Development", level: 80 },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header/Navbar */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">MyPortfolio</h1>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                                About
                            </a>
                            <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                                Skills
                            </a>
                            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                                Projects
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <div className="inline-block animate-bounce">
                            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">A</div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">Fullstack Developer</h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">Membangun aplikasi web modern dengan React, Next.js, dan teknologi terkini</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                                Lihat Projects
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold border-2 border-indigo-600 hover:bg-indigo-50 hover:scale-105 transition-all duration-300">
                                Hubungi Saya
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Saya</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Saya adalah seorang fullstack developer yang passionate dalam menciptakan pengalaman digital yang menarik dan fungsional. Dengan pengalaman dalam berbagai teknologi modern, saya fokus pada pengembangan aplikasi
                            web yang scalable dan user-friendly.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Saya percaya bahwa kode yang baik adalah kode yang bersih, maintainable, dan memberikan nilai nyata bagi pengguna. Mari berkolaborasi untuk mewujudkan ide Anda menjadi kenyataan!
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Keahlian</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4"></div>
                        <p className="text-gray-600">Teknologi yang saya kuasai</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-semibold text-gray-900 text-lg">{skill.name}</h3>
                                    <span className="text-indigo-600 font-bold">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Projects</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4"></div>
                        <p className="text-gray-600">Beberapa project yang telah saya kerjakan</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-6xl font-bold`}>{project.title[0]}</div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Hubungi Saya</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4"></div>
                        <p className="text-gray-600">Punya project atau pertanyaan? Mari diskusi!</p>
                    </div>

                    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Pesan
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tulis pesan Anda di sini..."
                                />
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-xl ${status.type === "success" ? "bg-green-50 text-green-800 border-2 border-green-200" : "bg-red-50 text-red-800 border-2 border-red-200"} animate-pulse`}>{status.message}</div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Mengirim...
                                    </span>
                                ) : (
                                    "Kirim Pesan"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">MyPortfolio</h3>
                            <p className="text-gray-400">Fullstack Developer passionate tentang teknologi dan inovasi.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Connect</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                                    <span className="text-xl">G</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                                    <span className="text-xl">L</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                                    <span className="text-xl">T</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        <p>© 2024 MyPortfolio. Built with Next.js & Supabase.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
