"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Kemudian di render:
    <div
        className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl transition-all duration-1000"
        style={{
            top: mounted ? `${mousePosition.y / 10}px` : "0px",
            left: mounted ? `${mousePosition.x / 10}px` : "0px",
        }}
    />;

    // Education Data
    const education = [
        {
            degree: "Bachelor of Informatics",
            school: "Gunadarma University",
            year: "2021 - 2025",
            description: "Focus on Software Engineering and Data Science",
        },
        {
            degree: "Senior High School",
            school: "MAN 2 Garut",
            year: "",
            description: "Science Major",
        },
    ];

    // Skills Data (CV Style - kategorisasi)
    const skillsCategories = [
        {
            category: "Frontend Development",
            skills: [
                { name: "React/Next.js", level: 60 },
                { name: "HTML/CSS", level: 95 },
                { name: "Tailwind CSS", level: 70 },
                { name: "JavaScript/TypeScript", level: 65 },
            ],
        },
        {
            category: "Backend Development",
            skills: [
                { name: "Python", level: 85 },
                { name: "CodeIgniter/PHP", level: 80 },
                { name: "REST API", level: 80 },
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
                { name: "Figma", level: 90 },
                { name: "UI/UX Design", level: 95 },
            ],
        },
    ];

    // Certifications
    const certifications = [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            year: "2024",
            linkedinUrl: "https://www.linkedin.com/in/auliaintanshafira/details/certifications/",
        },
        {
            title: "TensorFlow Developer Certificate",
            issuer: "Google",
            year: "2023",
            linkedinUrl: "https://www.linkedin.com/in/auliaintanshafira/details/certifications/",
        },
        {
            title: "Python for Data Science",
            issuer: "IBM",
            year: "2023",
            linkedinUrl: "https://www.linkedin.com/in/auliaintanshafira/details/certifications/",
        },
        {
            title: "React - The Complete Guide",
            issuer: "Udemy",
            year: "2023",
            linkedinUrl: "https://www.linkedin.com/in/auliaintanshafira/details/certifications/",
        },
        {
            title: "Grafana Fundamentals",
            issuer: "Grafana Labs",
            year: "2024",
            linkedinUrl: "https://www.linkedin.com/in/auliaintanshafira/details/certifications/",
        },
    ];

    // Languages
    const languages = [
        { name: "Indonesian", level: "Native", percentage: 100, flag: "🇮🇩" },
        { name: "English", level: "Intermediate", percentage: 60, flag: "🇬🇧" },
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

    const certScrollerRef = useRef<HTMLDivElement | null>(null);
    const [certPaused, setCertPaused] = useState(false);

    useEffect(() => {
        const el = certScrollerRef.current;
        if (!el) return;

        let rafId: number;
        let isDragging = false;
        const speed = 0.6;

        const tick = () => {
            if (!certPaused && !isDragging) {
                el.scrollLeft += speed;
                const half = el.scrollWidth / 2;
                if (el.scrollLeft >= half) el.scrollLeft -= half;
            }
            rafId = requestAnimationFrame(tick);
        };

        const onPointerDown = () => (isDragging = true);
        const onPointerUp = () => (isDragging = false);

        el.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("pointerup", onPointerUp);
        rafId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(rafId);
            el.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp);
        };
    }, [certPaused]);

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

            <Navbar />

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
                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text ">About Me 👋🏻</span>
                                </h1>

                                {/* Bio Paragraphs */}
                                <div className="space-y-6 mb-12">
                                    <p className="text-lg text-slate-300 leading-relaxed">
                                        Hello! I am Aulia Intan Shafira, a passionate fullstack developer with a strong interest in creating modern web applications that integrate data science, artificial intelligence, and DevOps practices.
                                        I love turning complex problems into elegant, scalable solutions.
                                    </p>
                                    <p className="text-lg text-slate-300 leading-relaxed">
                                        With over 2 years of experience in software development, I have worked on various projects ranging from e-commerce platforms to machine learning applications. I am constantly learning new technologies
                                        and best practices to deliver high-quality solutions that make a real impact.
                                    </p>
                                </div>

                                {/* Education */}
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">
                                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education 🎓</span>
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

                        <div className="relative overflow-hidden">
                            <div
                                ref={certScrollerRef}
                                className="hide-scrollbar overflow-x-auto"
                                style={{ WebkitOverflowScrolling: "touch" }}
                                onMouseEnter={() => setCertPaused(true)}
                                onMouseLeave={() => setCertPaused(false)}
                                onTouchStart={() => setCertPaused(true)}
                                onTouchEnd={() => setCertPaused(false)}
                                onFocus={() => setCertPaused(true)}
                                onBlur={() => setCertPaused(false)}
                            >
                                <div className="flex gap-3 sm:gap-4">
                                    {[...certifications, ...certifications].map((cert, idx) => (
                                        <a
                                            key={idx}
                                            href={cert.linkedinUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-none basis-[70%] xs:basis-[55%] sm:basis-60 md:basis-64 backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                                            aria-label={`Open certificate: ${cert.title}`}
                                        >
                                            <div className="w-full">
                                                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 text-slate-100 line-clamp-2">{cert.title}</h3>
                                                <p className="text-xs sm:text-sm text-slate-400">{cert.issuer}</p>
                                                <p className="text-xs sm:text-sm text-blue-400 font-semibold mt-1">{cert.year}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
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

                {/* Part-time Teaching Assistant */}
                {/* Part-time Teaching Assistant */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Part-time Teaching Assistant</span>
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">
                            I worked part-time as an assistant in the Informatics Laboratory—teaching lab sessions, preparing learning materials, creating assessment rubrics, assisting students during practicums, and coordinating grading &
                            recap each semester.
                        </p>

                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            {/* Description */}
                            <div className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                                <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        />
                                    </svg>
                                    What I Did
                                </h3>
                                <ul className="space-y-4 text-slate-300">
                                    <li className="flex gap-3 items-start group">
                                        <span className="mt-1 text-blue-400 group-hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        <span className="leading-relaxed">Teaching and facilitating weekly practicum classes (intro, demo, mentoring).</span>
                                    </li>
                                    <li className="flex gap-3 items-start group">
                                        <span className="mt-1 text-blue-400 group-hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="4" width="18" height="16" rx="2" />
                                                <path d="M7 8h10M7 12h6" />
                                            </svg>
                                        </span>
                                        <span className="leading-relaxed">Designing teaching materials: slides, lab sheets, and coding exercises.</span>
                                    </li>
                                    <li className="flex gap-3 items-start group">
                                        <span className="mt-1 text-blue-400 group-hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 11l3 3L22 4" />
                                                <path d="M21 12v7a2 2 0 0 1-2 2H5l-2-2V5a2 2 0 0 1 2-2h11" />
                                            </svg>
                                        </span>
                                        <span className="leading-relaxed">Creating rubrics, grading assignments, and recapping scores efficiently.</span>
                                    </li>
                                    <li className="flex gap-3 items-start group">
                                        <span className="mt-1 text-blue-400 group-hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M8 6h13M8 12h13M8 18h13" />
                                                <path d="M3 6h.01M3 12h.01M3 18h.01" />
                                            </svg>
                                        </span>
                                        <span className="leading-relaxed">Coordinating lab schedules and helping students debug during sessions.</span>
                                    </li>
                                </ul>

                                {/* Duration Badge */}
                                <div className="mt-6 pt-6 border-t border-blue-500/20">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 6v6l4 2" />
                                        </svg>
                                        <span className="text-sm">2022 - Present</span>
                                    </div>
                                </div>
                            </div>

                            {/* Photo Collage with Glass Blur Effect */}
                            <div className="w-full">
                                <div className="grid grid-cols-6 gap-3">
                                    {/* Large Photo 1 */}
                                    <div className="col-span-6 sm:col-span-3 aspect-[4/3] rounded-2xl overflow-hidden relative group">
                                        <img src="/lab1.jpeg" alt="Teaching materials preparation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/30" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                                    </div>

                                    {/* Large Photo 2 */}
                                    <div className="col-span-6 sm:col-span-3 aspect-[4/3] rounded-2xl overflow-hidden relative group">
                                        <img src="/lab2.jpeg" alt="Teaching materials preparation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/40 backdrop-blur-[2px] transition-all duration-300 group-hover:backdrop-blur-[1px]" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                                    </div>

                                    {/* Medium Photo 1 */}
                                    <div className="col-span-3 sm:col-span-2 aspect-square rounded-2xl overflow-hidden relative group">
                                        <img src="/lab3.jpeg" alt="Student mentoring" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/40 backdrop-blur-[2px] transition-all duration-300 group-hover:backdrop-blur-[1px]" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                                    </div>

                                    {/* Medium Photo 2 */}
                                    <div className="col-span-3 sm:col-span-2 aspect-square rounded-2xl overflow-hidden relative group">
                                        <img src="/lab4.jpeg" alt="Lab coordination" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/40 backdrop-blur-[2px] transition-all duration-300 group-hover:backdrop-blur-[1px]" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                                    </div>

                                    {/* Small Photo */}
                                    <div className="col-span-6 sm:col-span-2 aspect-square rounded-2xl overflow-hidden relative group">
                                        <img src="/lab5.jpeg" alt="Grading sessions" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/40 backdrop-blur-[2px] transition-all duration-300 group-hover:backdrop-blur-[1px]" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                                    </div>
                                </div>

                                {/* Privacy Note */}
                                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 justify-center">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0110 0v4" />
                                    </svg>
                                    <span>Photos are slightly blurred for privacy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Infrastructure Administrator Internship */}
                <section className="py-20 px-4 bg-slate-900/30">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 text-center">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Infrastructure Administrator Internship</span>
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">
                            Gained hands-on experience in DevOps practices, server management, and monitoring systems. Worked with cutting-edge infrastructure tools and technologies.
                        </p>

                        {/* 2 kolom: kiri = company + tech + learnings + achievement, kanan = documentation */}
                        <div className="grid lg:grid-cols-2 gap-10">
                            {/* LEFT COLUMN */}
                            <div className="space-y-6">
                                {/* Company Info Card (DIPINDAHKAN KE KIRI) */}
                                <div className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-blue-400 mb-1">Infrastructure Administrator</h3>
                                            <p className="text-slate-300 mb-2">Company Name</p>
                                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 6v6l4 2" />
                                                </svg>
                                                <span>Sep 2024 - Dec 2024 · 4 months</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed">
                                        Collaborated with the infrastructure team to maintain and optimize server systems, implement monitoring solutions, and ensure high availability of critical services.
                                    </p>
                                </div>

                                {/* Technologies & Tools */}
                                <div className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-5 text-blue-400 flex items-center gap-3">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                        Technologies &amp; Tools
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-400 mb-3">DevOps &amp; Infrastructure</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300 font-medium">Linux</span>
                                                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300 font-medium">Ubuntu</span>
                                                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300 font-medium">Nginx</span>
                                                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300 font-medium">Docker</span>
                                                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300 font-medium">Bash</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-400 mb-3">Monitoring &amp; Observability</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm text-cyan-300 font-medium">Grafana</span>
                                                <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm text-cyan-300 font-medium">Prometheus</span>
                                                <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm text-cyan-300 font-medium">Node Exporter</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Key Learnings */}
                                <div className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-5 text-blue-400 flex items-center gap-3">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                        Key Learnings
                                    </h3>
                                    <ul className="space-y-3 text-slate-300">
                                        <li className="flex gap-3 items-start">
                                            <span className="text-yellow-400 mt-0.5">✨</span>
                                            <span>Understanding of DevOps culture and CI/CD principles</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-yellow-400 mt-0.5">✨</span>
                                            <span>Server performance optimization and resource management</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-yellow-400 mt-0.5">✨</span>
                                            <span>Monitoring best practices and incident response procedures</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-yellow-400 mt-0.5">✨</span>
                                            <span>Collaboration with cross-functional teams in production environment</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Successfully Completed */}
                                <div className="backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-blue-300 mb-1">Successfully Completed</h4>
                                            <p className="text-sm text-slate-400">Internship program with excellent performance evaluation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN — Documentation only */}
                            <div className="space-y-6">
                                <div className="backdrop-blur-md bg-slate-900/50 border border-blue-500/20 rounded-2xl p-4 hover:border-blue-500/50 transition-all duration-300">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="col-span-2 aspect-video rounded-xl overflow-hidden relative group">
                                            <img src="/internship.jpeg" alt="Infrastructure internship workspace" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/50 backdrop-blur-[2.5px] transition-all duration-300 group-hover:backdrop-blur-[2px]" />
                                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
                                        </div>

                                        <div className="aspect-square rounded-xl overflow-hidden relative group">
                                            <img src="/internship2.jpeg" alt="Team collaboration" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/50 backdrop-blur-[2.5px] transition-all duration-300 group-hover:backdrop-blur-[2px]" />
                                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
                                        </div>

                                        <div className="aspect-square rounded-xl overflow-hidden relative group">
                                            <img src="/internship3.jpeg" alt="Server monitoring dashboard" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/50 backdrop-blur-[2.5px] transition-all duration-300 group-hover:backdrop-blur-[2px]" />
                                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
                                        </div>
                                    </div>

                                    <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
                                        {/* Privacy Note */}
                                        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 justify-center">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                                <path d="M7 11V7a5 5 0 0110 0v4" />
                                            </svg>
                                            <span>Photos are slightly blurred for privacy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outside of Work / Florist Section */}
                <section className="py-20 px-4 bg-slate-900/30">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 text-center">
                            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Outside of Work</span>
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">When I am not coding, you will find me creating beautiful flower arrangements</p>

                        <div className="backdrop-blur-md bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-pink-500/30 rounded-3xl p-8 md:p-12 hover:border-pink-500/50 transition-all duration-300">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* Left Column - Text Content */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-pink-500/30">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 22C12 22 20 18 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 18 12 22 12 22Z"
                                                    stroke="url(#gradient1)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <circle cx="12" cy="12" r="3" stroke="url(#gradient1)" strokeWidth="2" />
                                                <defs>
                                                    <linearGradient id="gradient1" x1="4" y1="4" x2="20" y2="20">
                                                        <stop offset="0%" stopColor="#ec4899" />
                                                        <stop offset="100%" stopColor="#a855f7" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Florist & Bouquet Designer</h3>
                                    </div>

                                    <p className="text-lg text-slate-300 leading-relaxed">
                                        I have a deep passion for flowers and floral design. Creating beautiful bouquets and arrangements brings me joy and allows me to express my creativity in a different way. Each bouquet tells a story
                                        and conveys emotions that words cannot express.
                                    </p>

                                    <p className="text-lg text-slate-300 leading-relaxed">
                                        Whether it is for weddings, birthdays, anniversaries, or just because - I love crafting custom bouquets that bring smiles to people. Every arrangement is made with love and attention to detail.
                                    </p>

                                    {/* Services Tags */}
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm text-pink-300 font-medium hover:bg-pink-500/20 transition-colors">Wedding Bouquets</span>
                                        <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 font-medium hover:bg-purple-500/20 transition-colors">Custom Arrangements</span>
                                        <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 font-medium hover:bg-blue-500/20 transition-colors">Event Florals</span>
                                        <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm text-pink-300 font-medium hover:bg-pink-500/20 transition-colors">Gift Bouquets</span>
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href="https://www.instagram.com/aulia_intan12/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 group"
                                    >
                                        <svg className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <span>Check My Flower Gallery</span>
                                    </a>
                                </div>

                                {/* Right Column - Image Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-square rounded-2xl overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 group">
                                        <img src="/flower1.jpeg" alt="Flower arrangement 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="aspect-square rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group">
                                        <img src="/flower2.jpeg" alt="Flower arrangement 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="aspect-square rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group">
                                        <img src="/flower3.jpg" alt="Flower arrangement 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="aspect-square rounded-2xl overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 group">
                                        <img src="/flower4.jpeg" alt="Flower arrangement 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                            <a href="mailto:founder@ainash.my.id" className="text-slate-300 hover:text-blue-400 transition-colors">
                                                founder@ainash.my.id
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
                                    Made with <span className="text-red-500 animate-pulse">💙</span> Love u!
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
                .hide-scrollbar {
                    scrollbar-width: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                /* Smooth blur transition on hover */
                @media (hover: hover) {
                    .group:hover .backdrop-blur-\[2px\] {
                        backdrop-filter: blur(1px);
                    }
                }
            `}</style>
        </div>
    );
}
