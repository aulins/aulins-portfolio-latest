"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Contact() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
                            <Link href="/about" className="hover:text-blue-400 transition-colors">
                                About
                            </Link>
                            <Link href="/projects" className="hover:text-blue-400 transition-colors">
                                Projects
                            </Link>
                            <Link href="/contact" className="text-blue-400">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="relative z-10 pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-6 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Get In Touch</span>
                    </h1>
                    <p className="text-center text-slate-400 text-lg mb-16 max-w-2xl mx-auto">Have a question or want to work together? Drop me a message and I&apos;ll get back to you as soon as possible!</p>

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

                    {/* Contact Info */}
                    <div className="mt-16 grid md:grid-cols-3 gap-6">
                        <div className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/40 transition-all duration-300">
                            <div className="text-4xl mb-3">📧</div>
                            <h3 className="font-semibold mb-2">Email</h3>
                            <a href="mailto:your@email.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                                your@email.com
                            </a>
                        </div>
                        <div className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/40 transition-all duration-300">
                            <div className="text-4xl mb-3">💼</div>
                            <h3 className="font-semibold mb-2">LinkedIn</h3>
                            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                /in/yourprofile
                            </a>
                        </div>
                        <div className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/40 transition-all duration-300">
                            <div className="text-4xl mb-3">🐙</div>
                            <h3 className="font-semibold mb-2">GitHub</h3>
                            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                /yourusername
                            </a>
                        </div>
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
