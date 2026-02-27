"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const allProjects = [
    // --- Trabajos nuevos ---
    {
        id: 1,
        image: "https://i.ibb.co/XZ7Gg3F1/portafolio1.png",
        title: "Limpieza de Sillones",
        subtitle: "Eliminación profunda de manchas y recuperación de tono original en sofá de microfibra.",
        categories: [
            { label: "Limpieza De Sillones", color: "bg-sky-100 text-sky-800" },
        ],
        placeholder: true,
    },
    {
        id: 2,
        image: "https://i.ibb.co/0pmQZRN9/portafolio2.png",
        title: "Limpieza Técnica de Alfombras",
        subtitle: "Limpieza técnica de alfombras con remoción de manchas difíciles.",
        categories: [
            { label: "Eliminacion de Manchas", color: "bg-green-100 text-green-800" },
        ],
        placeholder: true,
    },
    {
        id: 3,
        image: "https://i.ibb.co/gFF4SNLM/portafolio3.jpg",
        title: "Sanitización y Blanqueo de Colchón Doble",
        subtitle: "Desinfección y limpieza integral de superficies, eliminando rastro de suciedad y ácaros.",
        categories: [
            { label: "Desinfeccion", color: "bg-purple-100 text-purple-800" },
        ],
        placeholder: true,
    },
    {
        id: 4,
        image: "https://i.ibb.co/BKnNmsyq/portafolio4.jpg",
        title: "Renovación de Butacas de Diseño en Tela Clara",
        subtitle: "Revitalización de tapizados claros en sillones individuales, dejándolos como nuevos.",
        categories: [
            { label: "Renovacion", color: "bg-amber-100 text-amber-800" },
        ],
        placeholder: true,
    },
    {
        id: 5,
        image: "https://i.ibb.co/C5C7dNP7/portafolio5.jpg",
        title: "Detallado y Desinfección de Tapizado Vehicular",
        subtitle: "Detallado de interior vehicular con limpieza profunda de telas y texturas.",
        categories: [
            { label: "Cuidado Automotriz", color: "bg-rose-100 text-rose-800" },
        ],
        placeholder: true,
    },
]

export default function Portafolio() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [heroVisible, setHeroVisible] = useState(false)

    // Animación de scroll para tarjetas
    useEffect(() => {
        setHeroVisible(true)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in")
                    }
                })
            },
            { threshold: 0.1 },
        )

        const hiddenElements = document.querySelectorAll(".animate-hidden")
        hiddenElements.forEach((el) => observer.observe(el))

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el))
        }
    }, [])

    return (
        <div className="flex min-h-screen flex-col overflow-hidden">
            {/* ─── NAVBAR ─── */}
            <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group">
                        <div className="animate-bounce">
                            <Image
                                src="/macleanhero.jpeg"
                                alt="Maclean Logo"
                                width={40}
                                height={40}
                                className="rounded-md"
                            />
                        </div>
                        <Link href="/" className="text-sm sm:text-lg md:text-xl font-bold whitespace-nowrap hover:text-sky-600 transition-colors">
                            MACLEAN LIMPIEZA DE TAPIZADOS
                        </Link>
                    </div>

                    {/* Nav desktop */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="/#quienes-somos"
                            className="text-sm font-medium hover:text-sky-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-500 after:transition-all hover:after:w-full"
                        >
                            Quiénes Somos
                        </Link>
                        <Link
                            href="/#servicios"
                            className="text-sm font-medium hover:text-sky-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-500 after:transition-all hover:after:w-full"
                        >
                            Nuestros Servicios
                        </Link>
                        <Link
                            href="/#por-que-elegirnos"
                            className="text-sm font-medium hover:text-sky-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-500 after:transition-all hover:after:w-full"
                        >
                            Por Que Elegirnos
                        </Link>
                        <Link
                            href="/#contacto"
                            className="text-sm font-medium hover:text-sky-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-500 after:transition-all hover:after:w-full"
                        >
                            Nuestro Contacto
                        </Link>
                        {/* Portafolio — activo */}
                        <Link
                            href="/portafolio"
                            className="text-sm font-medium text-sky-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-sky-500"
                        >
                            Portafolio
                        </Link>
                    </nav>

                    {/* Botón WhatsApp */}
                    <Button
                        className="hidden md:inline-flex bg-green-600 hover:bg-green-700 flex items-center gap-2 transition-transform hover:scale-105"
                        asChild
                    >
                        <Link href="https://wa.me/5491138429873" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 animate-pulse">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Contáctanos
                        </Link>
                    </Button>

                    {/* Hamburger mobile */}
                    <button
                        className="md:hidden p-2 rounded-md border hover:bg-sky-100 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu dropdown */}
                {menuOpen && (
                    <div className="md:hidden border-t bg-white px-6 py-4 flex flex-col gap-4 animate-fade-in-down">
                        <Link href="/#quienes-somos" className="text-sm font-medium hover:text-sky-500" onClick={() => setMenuOpen(false)}>Quiénes Somos</Link>
                        <Link href="/#servicios" className="text-sm font-medium hover:text-sky-500" onClick={() => setMenuOpen(false)}>Nuestros Servicios</Link>
                        <Link href="/#por-que-elegirnos" className="text-sm font-medium hover:text-sky-500" onClick={() => setMenuOpen(false)}>Por Que Elegirnos</Link>
                        <Link href="/#contacto" className="text-sm font-medium hover:text-sky-500" onClick={() => setMenuOpen(false)}>Nuestro Contacto</Link>
                        <Link href="/portafolio" className="text-sm font-bold text-sky-600 border-b-2 border-sky-500 pb-1 w-fit" onClick={() => setMenuOpen(false)}>Portafolio</Link>
                        <Link href="https://wa.me/5491138429873" target="_blank" className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors w-fit">
                            Contáctanos
                        </Link>
                    </div>
                )}
            </header>

            <main className="flex-1">
                {/* ─── HERO ─── */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
                    {/* Fondo animado con blobs */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-10 left-10 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                        <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
                        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
                    </div>

                    {/* Grid pattern sutil */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)`,
                            backgroundSize: "60px 60px",
                        }}
                    />

                    {/* Partículas de luz flotantes */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-sky-400"
                                style={{
                                    width: `${4 + (i % 4) * 3}px`,
                                    height: `${4 + (i % 4) * 3}px`,
                                    left: `${(i * 11 + 5) % 95}%`,
                                    bottom: `-10px`,
                                    opacity: 0,
                                    animation: `floatParticle ${3 + i * 0.4}s ease-in-out infinite`,
                                    animationDelay: `${i * 0.35}s`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Líneas decorativas */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
                    </div>

                    {/* Contenido */}
                    <div
                        className={`relative z-10 text-center px-4 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/40 text-sky-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                            Maclean — Resultados Reales
                        </div>

                        {/* Título principal */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4 tracking-tight leading-none">
                            Nuestros{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                                    Trabajos
                                </span>
                                <span
                                    className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full"
                                    style={{
                                        animation: heroVisible
                                            ? "expandWidth 1.2s ease-out 0.5s forwards"
                                            : "none",
                                        width: 0,
                                    }}
                                />
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mt-6 mb-8 leading-relaxed">
                            Cada trabajo es una muestra de nuestra dedicación, precisión y amor por el detalle.
                            Aquí puede ver los resultados reales que entregamos a nuestros clientes.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mt-4">
                            {[
                                { value: "300+", label: "Clientes Satisfechos" },
                                { value: "5★", label: "Calificación Google" },
                                { value: "100%", label: "Garantía de Calidad" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-3xl font-black text-sky-400">{stat.value}</div>
                                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>

                {/* ─── GRID DE PROYECTOS ─── */}
                <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
                    </div>

                    <div className="container relative">
                        <div className="text-center mb-16 animate-hidden">
                            <h2 className="text-3xl font-bold tracking-tight">Galería Completa</h2>
                            <div className="w-20 h-1 bg-sky-500 mx-auto my-4 animate-width" />
                            <p className="max-w-2xl mx-auto text-lg text-gray-600">
                                Explorá todos nuestros trabajos, desde detailing automotriz hasta limpieza de hogar.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {allProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 animate-hidden group relative ${(project as any).placeholder ? "opacity-70" : ""
                                        }`}
                                    style={{ transitionDelay: `${(index % 6) * 0.1}s` }}
                                >
                                    {/* Badge placeholder */}
                                    {(project as any).placeholder && (
                                        <div className="absolute top-3 right-3 z-20 bg-amber-400 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full shadow">
                                            Próximamente
                                        </div>
                                    )}

                                    {/* Imagen */}
                                    <div className="relative h-80 overflow-hidden bg-gray-200">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Overlay hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end">
                                            <div className="p-4 text-white">
                                                <p className="font-semibold text-sm">Maclean Tapizados</p>
                                            </div>
                                        </div>
                                        {/* Número de proyecto */}
                                        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                                            #{String(project.id).padStart(2, "0")}
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div className="p-8">
                                        <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.subtitle}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.categories.map((cat) => (
                                                <span
                                                    key={cat.label}
                                                    className={`${cat.color} text-xs font-medium px-2.5 py-0.5 rounded-full`}
                                                >
                                                    {cat.label}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Borde inferior animado en hover */}
                                    <div className="h-1 bg-gradient-to-r from-sky-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── CTA ─── */}
                <section className="py-16 md:py-24 bg-sky-600 text-white relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -right-24 -top-24 w-96 h-96 bg-sky-400 rounded-full opacity-20 animate-pulse-slow" />
                        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-sky-400 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }} />
                    </div>
                    <div className="container relative text-center animate-hidden">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Te gustó lo que viste?</h2>
                        <p className="text-sky-100 text-lg mb-8 max-w-xl mx-auto">
                            Contactanos hoy y transformamos tu tapizado en algo que vas a amar.
                        </p>
                        <Button
                            size="lg"
                            className="bg-white text-sky-600 hover:bg-sky-50 transition-transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
                            asChild
                        >
                            <Link href="https://wa.me/5491138429873" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-600 animate-pulse">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                Pedir Presupuesto por WhatsApp
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>

            {/* ─── FOOTER ─── */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <Image src="/macleanhero.jpeg" alt="Maclean Logo" width={32} height={32} className="rounded-md" />
                            <span className="font-bold text-lg">Maclean</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Maclean. Todos los derechos reservados.
                        </p>
                        <Link href="/" className="text-sky-400 hover:text-sky-300 text-sm transition-colors">
                            ← Volver al inicio
                        </Link>
                    </div>
                </div>
            </footer>

            <style jsx>{`
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .animate-hidden {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease forwards;
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes floatParticle {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          15%  { opacity: 0.7; }
          85%  { opacity: 0.4; }
          100% { transform: translateY(-100vh) scale(0.4); opacity: 0; }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-width {
          animation: expandWidth 1s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    )
}
