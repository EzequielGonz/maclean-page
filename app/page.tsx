"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Sparkles, Timer, Wrench, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import VideoTestimonial from "./components/video-testimonial"
import ContactConversion from "./components/contact-conversion"


export default function Home() {
  // Componente de carrusel para el hero en móvil
  const CarouselHero = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slides: string[] = [
      "/videoparamaclean.mp4"
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);

      return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index: number) => {
      setCurrentSlide(index);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              src={slide}
              autoPlay
              loop
              muted
              className="object-cover brightness-[0.7] w-full h-full"
            />
          </div>
        ))}

        {/* Flechas de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 transition-all duration-300 hover:scale-110"
          aria-label="Imagen anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 transition-all duration-300 hover:scale-110"
          aria-label="Imagen siguiente"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    )
  }
  // Animación de aparición al hacer scroll
  useEffect(() => {
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
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <div className="animate-bounce">
              <Image
                src="https://i.ibb.co/LhpNL5GQ/Imagen-de-Whats-App-2025-03-07-a-las-21-19-11-767019f8-Photoroom.png"
                alt="Maclean Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <span className="text-xl font-bold relative overflow-hidden">
              <span className="inline-block animate-wave">M</span>
              <span className="inline-block animate-wave" style={{ animationDelay: "0.05s" }}>
                a
              </span>
              <span className="inline-block animate-wave" style={{ animationDelay: "0.1s" }}>
                c
              </span>
              <span className="inline-block animate-wave" style={{ animationDelay: "0.15s" }}>
                l
              </span>
              <span className="inline-block animate-wave" style={{ animationDelay: "0.2s" }}>
                e
              </span>
              <span className="inline-block animate-wave" style={{ animationDelay: "0.25s" }}>
                a
              </span>
              <span className="inline-block animate-wave" style={{ animationDelay: "0.25s" }}>
                n
              </span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#quienes-somos"
              className="text-sm font-medium hover:text-sky-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-500 after:transition-all hover:after:w-full"
            >
              Quiénes Somos
            </Link>
            <Link
              href="#servicios"
              className="text-sm font-medium hover:text-sky-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-500 after:transition-all hover:after:w-full"
            >
              Nuestros Servicios
            </Link>
            <Link
              href="#por-que-elegirnos"
              className="text-sm font-medium hover:text-sky-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-500 after:transition-all hover:after:w-full"
            >
              Por Qué Elegirnos
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium hover:text-sky-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-500 after:transition-all hover:after:w-full"
            >
              Contacto
            </Link>
          </nav>
          <Button
            className="hidden md:inline-flex bg-green-600 hover:bg-green-700 flex items-center gap-2 transition-transform hover:scale-105"
            asChild
          >
            <Link href="https://wa.me/5491138429873" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 animate-pulse"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contáctanos
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden hover:bg-sky-100 transition-colors">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          {/* Video para desktop */}
          <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
            <video autoPlay muted loop playsInline className="object-cover w-full h-full brightness-[0.7]">
              <source
                src="/videoparamaclean.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta videos HTML5.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/30 to-blue-900/30"></div>

            {/* Flechas decorativas para desktop */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 transition-all duration-300 hover:scale-110"
              aria-label="Decorativo"
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 transition-all duration-300 hover:scale-110"
              aria-label="Decorativo"
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Carrusel para móvil */}
          <div className="absolute inset-0 z-0 overflow-hidden md:hidden">
            <CarouselHero />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/30 to-blue-900/30"></div>
          </div>

          <div className="container relative z-10 flex flex-col items-center justify-center py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in-down">
              Servicio de limpieza, desinfección y blindaje de tapizados de hogar y automotriz
            </h1>
            <p className="mt-6 max-w-2xl text-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              En Maclean nos dedicamos a dejar su vehículo impecable con los mejores productos y técnicas profesionales.
            </p>
            <div
              className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2 transition-transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
                asChild
              >
                <Link href="https://wa.me/5491138429873" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 animate-pulse"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Contáctanos
                </Link>
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="animate-bounce mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Quienes Somos */}
        <section id="quienes-somos" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 animate-hidden">
                <Image
                  src="https://i.ibb.co/rKb08F81/Quienes-somos.jpg"
                  alt="Equipo Maclean"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-[1.01] transition-transform"
                />
              </div>
              <div className="md:w-1/2 space-y-4 animate-hidden" style={{ transitionDelay: "0.2s" }}>
                <h2 className="text-3xl font-bold tracking-tight">Quiénes Somos</h2>
                <div className="w-20 h-1 bg-sky-500 animate-width"></div>
                <p className="text-lg text-gray-600">
                  Maclean nació en 2021 con una misión clara: revolucionar la forma en que las personas cuidan sus
                  vehículos. Somos un equipo de profesionales apasionados por los autos y obsesionados con la limpieza y
                  el detalle.
                </p>
                <p className="text-lg text-gray-600">
                  Nuestra filosofía se basa en tres pilares fundamentales: calidad en los productos que utilizamos,
                  excelencia en el servicio que brindamos y respeto por el medio ambiente en cada uno de nuestros
                  procesos.
                </p>
                <p className="text-lg text-gray-600">
                  Hemos atendido miles de vehículos, desde autos familiares hasta vehículos de lujo y colección, siempre
                  con el mismo nivel de dedicación y profesionalismo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Servicios */}
        <section id="servicios" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container relative">
            <div className="text-center mb-16 animate-hidden">
              <h2 className="text-3xl font-bold tracking-tight">Nuestros Servicios</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto my-4 animate-width"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Ofrecemos una amplia gama de servicios diseñados para mantener su tapizado de hogar y automotriz en
                perfectas condiciones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="animate-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-sky-400 group">
                <CardHeader>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-sky-500 mb-2 group-hover:animate-pulse"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                    <path d="M4 12h16" />
                    <path d="M12 4v16" />
                  </svg>
                  <CardTitle>Limpieza de Muebles</CardTitle>
                  <CardDescription>Restauración y limpieza profesional</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Limpieza profunda de tapizados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Eliminación de manchas difíciles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Tratamiento anti-ácaros y desinfección con vapor</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Impermeabilizacion de todo tipo de telas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="animate-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-sky-400 group"
                style={{ transitionDelay: "0.1s" }}
              >
                <CardHeader>
                  <Sparkles className="h-10 w-10 text-sky-500 mb-2 group-hover:animate-spin" />
                  <CardTitle>Limpieza basica de Tapizados</CardTitle>
                  <CardDescription>Interior y exterior impecables</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Limpieza de butacas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Aspirado de alfombras</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Limpieza de techo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Limpieza superficial por los plasticos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="animate-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-sky-400 group"
                style={{ transitionDelay: "0.2s" }}
              >
                <CardHeader>
                  <Shield className="h-10 w-10 text-sky-500 mb-2 group-hover:animate-pulse" />
                  <CardTitle>Limpieza de tapizados Al Detalle</CardTitle>
                  <CardDescription>Tratamiento profesional integral</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Limpieza de butacas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Limpieza de techos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Limpieza de alfombra al detalle</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Limpieza de plasticos al detalle</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="animate-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-sky-400 group"
                style={{ transitionDelay: "0.3s" }}
              >
                <CardHeader>
                  <Wrench className="h-10 w-10 text-sky-500 mb-2 group-hover:animate-wiggle" />
                  <CardTitle>Servicios Especializados</CardTitle>
                  <CardDescription>Soluciones para necesidades específicas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Restauración de faros</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Limpieza de motor</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Tratamiento de cuero</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="animate-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-sky-400 group"
                style={{ transitionDelay: "0.4s" }}
              >
                <CardHeader>
                  <Timer className="h-10 w-10 text-sky-500 mb-2 group-hover:animate-spin-slow" />
                  <CardTitle>Planes de Mantenimiento</CardTitle>
                  <CardDescription>Cuidado continuo para su vehículo</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Planes mensuales personalizados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Descuentos exclusivos para miembros</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Servicio a domicilio disponible</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Horarios flexibles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card
                className="animate-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-sky-400 group"
                style={{ transitionDelay: "0.5s" }}
              >
                <CardHeader>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-sky-500 mb-2 group-hover:animate-wiggle"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <CardTitle>Asesoramiento Personalizado</CardTitle>
                  <CardDescription>Soluciones adaptadas a sus necesidades</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Diagnóstico completo del estado del vehículo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Recomendaciones de productos específicos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Plan de mantenimiento a medida</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Seguimiento post-servicio</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Por Qué Elegirnos */}
        <section id="por-que-elegirnos" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16 animate-hidden">
              <h2 className="text-3xl font-bold tracking-tight">Por Qué Elegirnos</h2>
              <div className="w-20 h-1 bg-sky-500 mx-auto my-4 animate-width"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                En Maclean nos diferenciamos por nuestra dedicación a la excelencia y nuestro compromiso con la
                satisfacción del cliente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden">
                <div className="bg-sky-100 p-3 rounded-full mb-4 animate-float">
                  <Sparkles className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
                <p className="text-gray-600">
                  Utilizamos exclusivamente productos de la más alta calidad que no dañan la pintura ni los materiales
                  de su vehículo.
                </p>
              </div>

              <div
                className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="bg-sky-100 p-3 rounded-full mb-4 animate-float" style={{ animationDelay: "0.1s" }}>
                  <Timer className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Eficiencia</h3>
                <p className="text-gray-600">
                  Nuestros procesos están optimizados para ofrecer resultados excepcionales en el menor tiempo posible,
                  respetando su agenda.
                </p>
              </div>

              <div
                className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="bg-sky-100 p-3 rounded-full mb-4 animate-float" style={{ animationDelay: "0.2s" }}>
                  <Shield className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Garantía Total</h3>
                <p className="text-gray-600">
                  Todos nuestros servicios cuentan con garantía de satisfacción. Si no está conforme, lo solucionamos
                  sin costo adicional.
                </p>
              </div>

              <div
                className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden"
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="bg-sky-100 p-3 rounded-full mb-4 animate-float" style={{ animationDelay: "0.3s" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Personal Capacitado</h3>
                <p className="text-gray-600">
                  Nuestro equipo recibe formación continua sobre las últimas técnicas y productos para el cuidado
                  automotriz.
                </p>
              </div>

              <div
                className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden"
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="bg-sky-100 p-3 rounded-full mb-4 animate-float" style={{ animationDelay: "0.4s" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tecnología Avanzada</h3>
                <p className="text-gray-600">
                  Contamos con equipamiento de última generación para garantizar resultados profesionales en cada
                  servicio.
                </p>
              </div>

              <div
                className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden"
                style={{ transitionDelay: "0.5s" }}
              >
                <div className="bg-sky-100 p-3 rounded-full mb-4 animate-float" style={{ animationDelay: "0.5s" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Comprometidos con el medio ambiente, utilizamos productos biodegradables y sistemas de ahorro de agua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Proyectos */}
        <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-40 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
          <div className="container relative">
            <div className="text-center mb-16 animate-hidden">
              <h2 className="text-3xl font-bold tracking-tight">Nuestros Proyectos</h2>
              <div className="w-20 h-1 bg-sky-500 mx-auto my-4 animate-width"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Algunos de nuestros trabajos más destacados que demuestran la calidad y dedicación que ponemos en cada
                vehículo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Nuevo Proyecto - Impermeabilización */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/4ZQn2n4S/proyecto.jpg"
                    alt="Impermeabilización de tapizados"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Maclean - Impermeabilización</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Impermeabilización</h3>
                  <p className="text-gray-600 mb-4">
                    Protección avanzada contra líquidos y manchas para todo tipo de tapizados.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Protección Premium
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Impermeabilización
                    </span>
                    <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Larga Duración
                    </span>
                  </div>
                </div>
              </div>

              {/* Proyecto 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/kgQtYLt8/Restauracion-1.jpg"
                    alt="Ferrari 458 Detailing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Maclean - Limpieza</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Pulido de Opticas</h3>
                  <p className="text-gray-600 mb-4">Detailing completo con tratamiento cerámico de alta duración.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Detailing Premium
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Pulido de Opticas
                    </span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Corrección
                    </span>
                  </div>
                </div>
              </div>

              {/* Proyecto 2 */}
              <div
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-hidden group"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/KzhqHbPp/restauracion-2.jpg"
                    alt="Range Rover Detailing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Maclean - Limpieza</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Restauracion de Limpieza (Muebles - Sillon)</h3>
                  <p className="text-gray-600 mb-4">Limpieza integral con tratamiento delicado y protección.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Limpieza Premium
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Tratamiento y Cuidados
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Muebles
                    </span>
                  </div>
                </div>
              </div>

              {/* Proyecto 3 */}
              <div
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-hidden group"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/ksBwZJ8N/restauracion-3.jpg"
                    alt="Porsche 911 Detailing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Maclean - Limpieza</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Limpieza de Asiento</h3>
                  <p className="text-gray-600 mb-4">
                    Limpieza completa con un Detailing Premium, y limpieza a profundidad.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Restauración
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Asiento de Auto
                    </span>
                    <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Limpieza
                    </span>
                  </div>
                </div>
              </div>

              {/* Proyecto 4 */}
              <div
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-hidden group"
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/tMcH4yR5/Pulido-de-Auto.jpg"
                    alt="Mercedes AMG Detailing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Maclean - Limpieza</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Limpieza a detalle de automovil con productos premium
                  </h3>
                  <p className="text-gray-600 mb-4">Limpieza con productos premium para un auto en perfecto estado</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-zinc-100 text-zinc-800 text-xs font-medium px-2.5 py-0.5 rounded">Auto</span>
                    <span className="bg-rose-100 text-rose-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Limpieza
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Interior Profundo
                    </span>
                  </div>
                </div>
              </div>

              {/* Proyecto 5 */}
              <div
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-hidden group"
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/VYqx2CT9/Restauracion-de-Alfombras.jpg"
                    alt="BMW M4 Detailing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Maclean - Limpieza</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Restauracion y Limpieza de Alfombras</h3>
                  <p className="text-gray-600 mb-4">
                    Restauramos alfombras de manera excelente. Dejandolas en perfecto y en su original estado.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded">Alfombras</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Reparacion
                    </span>
                    <span className="bg-violet-100 text-violet-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Restauracion
                    </span>
                  </div>
                </div>
              </div>

              {/* Proyecto 6 */}
              <div
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-hidden group"
                style={{ transitionDelay: "0.5s" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/RkYXV8yx/Limpieza-de-motor.jpg"
                    alt="Audi RS6 Detailing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Maclean - Limpieza</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Limpieza de Motor</h3>
                  <p className="text-gray-600 mb-4">Restauración y Limpieza de Motor.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">Motor</span>
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Limpieza
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      ¡Como nuevo!
                    </span>
                  </div>
                </div>
              </div>

            {/* Proyecto 7 */}
              <div
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-hidden group"
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/9HrCxbNW/Imagen-de-Whats-App-2025-05-01-a-las-21-36-44-50b62d25.jpg"
                    alt="BMW M4 Detailing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Maclean - Limpieza</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Limpieza Anti Acaros</h3>
                  <p className="text-gray-600 mb-4">
                    Eliminación de Ácaros y Tratamiento Antialérgico
Eliminamos ácaros y alérgenos de tapizados, alfombras y colchones, aplicando productos especiales que previenen su reaparición. Ideal para personas alérgicas o con sensibilidad respiratoria.

                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded">Salud</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Anti-Alergico
                    </span>
                    <span className="bg-violet-100 text-violet-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Limpieza Profunda
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-sky-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sky-500 to-transparent opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sky-700 to-transparent opacity-30"></div>
            <div className="absolute -right-24 -top-24 w-96 h-96 bg-sky-400 rounded-full opacity-20 animate-pulse-slow"></div>
            <div
              className="absolute -left-24 -bottom-24 w-96 h-96 bg-sky-400 rounded-full opacity-20 animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="container relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3 animate-hidden">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  ¡Atendemos a flotas de colectivos larga distancia! ¡Generamos Facturas!
                </h2>
                <p className="text-lg text-sky-100">
                  ¡Ademas de atender a combis, a concesionarios para su mantenimiento de estetica de los autos!
                </p>
              </div>
              <div className="animate-hidden" style={{ transitionDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-white text-sky-600 hover:bg-sky-50 transition-transform hover:scale-105 shadow-lg hover:shadow-white/20"
                  asChild
                >
                  <Link href="https://wa.me/5491138429873" target="_blank" className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-600 animate-pulse"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Contáctanos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Lo Que Limpiamos */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
          <div className="container relative">
            <div className="text-center mb-16 animate-hidden">
              <h2 className="text-3xl font-bold tracking-tight">Lo Que Limpiamos</h2>
              <div className="w-20 h-1 bg-sky-500 mx-auto my-4 animate-width"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                Ofrecemos servicios de limpieza profesional para una amplia variedad de elementos en su hogar
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden text-center">
                <div className="bg-sky-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M4 12h16" />
                    <path d="M12 4v16" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">Sillones</h3>
                <p className="text-gray-600 text-sm">
                  Limpieza profunda y restauración - Impermeabilizacion de Tapizados de hogar
                </p>
              </div>

              <div
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden text-center"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="bg-sky-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <path d="M18 2v2" />
                    <path d="M18 20v2" />
                    <path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" />
                    <path d="M5 16v3c0 1 1 2 2 2h10c1 0 2-1 2-2v-3" />
                    <rect x="2" y="8" width="20" height="8" rx="1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">Sillas</h3>
                <p className="text-gray-600 text-sm">
                  Eliminación de manchas y suciedad - Impermeabilizacion de Tapizados de hogar
                </p>
              </div>

              <div
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden text-center"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="bg-sky-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <path d="M2 4v16" />
                    <path d="M22 4v16" />
                    <path d="M2 12h20" />
                    <path d="M4 9v6" />
                    <path d="M20 9v6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">Colchones</h3>
                <p className="text-gray-600 text-sm">Desinfección y Limpieza</p>
              </div>

              <div
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden text-center"
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="bg-sky-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                    <path d="M12 3v6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">Respaldos de cama</h3>
                <p className="text-gray-600 text-sm">Limpieza especializada</p>
              </div>

              <div
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden text-center"
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="bg-sky-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">Alfombras</h3>
                <p className="text-gray-600 text-sm">Fijas y móviles</p>
              </div>

              <div
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden text-center"
                style={{ transitionDelay: "0.5s" }}
              >
                <div className="bg-sky-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">Practicunas</h3>
                <p className="text-gray-600 text-sm">Limpieza segura para bebés</p>
              </div>

              <div
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden text-center"
                style={{ transitionDelay: "0.6s" }}
              >
                <div className="bg-sky-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">Cochecitos de bebé</h3>
                <p className="text-gray-600 text-sm">Desinfección completa</p>
              </div>

              <div
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden text-center"
                style={{ transitionDelay: "0.7s" }}
              >
                <div className="bg-sky-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M3 12h18" />
                    <path d="M12 3v18" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">Cortinas y Toldos</h3>
                <p className="text-gray-600 text-sm">Black out y exteriores</p>
              </div>
              <div
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-hidden text-center"
                style={{ transitionDelay: "0.8s" }}
              >
                <div className="bg-sky-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-sky-600"
                  >
                    <path d="M2 12h20" />
                    <path d="M12 2v20" />
                    <path d="m4.93 4.93 14.14 14.14" />
                    <path d="m19.07 4.93-14.14 14.14" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">Eliminación de Olores</h3>
                <p className="text-gray-600 text-sm">Tratamiento profesional anti-olores</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Reseñas */}
        <section id="resenas" className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container relative">
            <div className="text-center mb-16 animate-hidden">
              <h2 className="text-3xl font-bold tracking-tight">Reseñas de Nuestros Clientes</h2>
              <div className="w-20 h-1 bg-sky-500 mx-auto my-4 animate-width"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                Escucha lo que nuestros clientes tienen que decir sobre nuestros servicios
              </p>
              <div className="max-w-4xl mx-auto">
                <VideoTestimonial
                  videoUrls={[
                    "https://media-hosting.imagekit.io//6af45552ce6f49f4/202503082312%20(1).mp4?Expires=1836094594&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Hm1ddXth3TM9GFBt2wpdAWgBFdCF6sAGYFL15WLRujH3KNWIFsWsr~mWdLzKcg2rZ-Z~bIcK3yZ9j5tlHESi-ahsgWBy19F-QNxC80Glk0dgC0PqRwlLh8QXaDWmsdcyEmZj0fLMmlS-ohsqxfKy9rDScPptG~1qhGGxDQq3AAxK0D7y9LsN0SuWVY7ZGkOawuLR3PXIvZQPqZjXkHe9xGFZpmbXKqYQuKQXDm4QoNOOpqtfFNDsbCEpTpIWLOEy-9ZfekuP5Otw4FgWLnJKj6SynCPZSGCHzA-RPPM-57-wJugQYGhSPwKmF4YRb1vV4yCmUT8xr3my2r01WqjOPg__",
                    "https://media-hosting.imagekit.io//d4c2458d2ef94163/rese%C3%B1acompleta2%20(1).mp4?Expires=1836006915&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bhLCgMFvZCKm0HIVNkYa1i~98~3rzrXvjAeiWDUXtLbU2UhWph6xcAolmqOoSlI9Xd2ORNmhnjsLv2U2tWERx~TAbF8xDE3-1E6k65V-OKZNuOW47nUpzsUo5hAi2BgBiPN0ZFSM58nGSh-Dz3Eze7AckcXmHwIvL9O18pHvwtxoxggLnALafI0aH0UthSJWy4p1N0EqtUv97Wt1Pn2ZILmUWvmgkSDEOtPp5eTjhnLyaHo8ncK7RD1iMw4x5lA4mBCdHBq1mToRf7pNjtMQhTDADSbzLENhNLRmNQw3aBrP7PuGsN9TWZtRWHzOVRmCcOt328eovc5Ppv-zwRFjvw__",
                    "https://media-hosting.imagekit.io//1df6c20c78ab4dfe/202503072114%20(1).mp4?Expires=1836007057&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=T9CEvhr3ZRkhvUxdeTivcwIn9f2GweLboTxCgGFJdUnzpUlVoQarG6zQ1tRFP887SpL7ANy8CzC1cjHpDNMS5Ip7pPveOJ-flnftf4WNJo~rZ-EvPnduAHJd-57539wXLGzUL9gxDsh~SnQdcUbdHXj8jMgfy4RhVOL3trWWClyuy8vOTy1QCDRX873qvD5cLmMUb~32gg8ZcykdwEzWLz-T7ltwedp9Yem1~EJSRWx5Ef4YKy8J0NhK0hgkk3~xl8nLiqUHDgpJjVczFSDZm3u2d--4LoUwtMnFP5JPwUmjru5AWA5WOx4ML4qcLMaYt1-~YJ97B2vU6-3V77b25w__",
                  ]}
                />
              </div>
              <div className="mt-8 text-center">
                <blockquote className="italic text-xl text-gray-700 max-w-3xl mx-auto">
                  "El servicio de Maclean superó todas mis expectativas. Mi auto quedó como nuevo y el equipo fue
                  extremadamente profesional."
                </blockquote>
                <p className="mt-4 font-semibold">— Matias - Clientes Satisfechos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Productos que Utilizamos */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-40 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
          <div className="container relative">
            <div className="text-center mb-16 animate-hidden">
              <h2 className="text-3xl font-bold tracking-tight">Productos que Utilizamos</h2>
              <div className="w-20 h-1 bg-sky-500 mx-auto my-4 animate-width"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                Trabajamos con productos de la más alta calidad para garantizar resultados profesionales en cada
                servicio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-hidden">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/zhwhvBg4/Imagen-de-Whats-App-2025-03-08-a-las-15-00-05-77f67890.jpg"
                    alt="Producto de limpieza profesional"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Productos Premium</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Limpiadores Especializados</h3>
                  <p className="text-gray-600 mt-2">Productos de alta calidad para resultados profesionales</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/7JqhM6RG/Imagen-de-Whats-App-2025-03-08-a-las-15-00-04-9d6a0874.jpg"
                    alt="Producto de limpieza profesional"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Calidad Garantizada</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Vonix</h3>
                  <p className="text-gray-600 mt-2">Productos alemanes de alta tecnología para el cuidado automotriz</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/JW3h47Rb/Imagen-de-Whats-App-2025-03-08-a-las-15-00-05-146aae37.jpg"
                    alt="Producto de limpieza profesional"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Soluciones Efectivas</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Tratamientos Especiales</h3>
                  <p className="text-gray-600 mt-2">Productos específicos para cada tipo de superficie y material</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://i.ibb.co/k6zrWbSn/Imagen-de-Whats-App-2025-03-08-a-las-15-00-05-390e1c6b.jpg"
                    alt="Producto de limpieza profesional"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Resultados Duraderos</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Protectores Avanzados</h3>
                  <p className="text-gray-600 mt-2">
                    Selladores y protectores para mantener los resultados por más tiempo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container relative">
            <div className="text-center mb-16 animate-hidden">
              <h2 className="text-3xl font-bold tracking-tight">Contacto</h2>
              <div className="w-20 h-1 bg-sky-500 mx-auto my-4 animate-width"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Póngase en contacto con nosotros para solicitar un presupuesto o para resolver cualquier duda que tenga.
              </p>
            </div>
            <div className="flex justify-center animate-hidden">
              <ContactConversion whatsappNumber="5491138429873">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 animate-pulse"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Contáctanos por WhatsApp
              </ContactConversion>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Image
                  src="https://i.ibb.co/LhpNL5GQ/Imagen-de-Whats-App-2025-03-07-a-las-21-19-11-767019f8-Photoroom.png"
                  alt="Maclean Logo"
                  width={24}
                  height={24}
                  className="mr-2 rounded-md"
                />
                Maclean
              </h3>
              <p className="text-gray-400 mb-4">
                Servicio premium de limpieza y detailing para automóviles y tapizados de hogar.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 23 3z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-sky-400 mr-2 mt-0.5 shrink-0" />
                  <span>Del Viso Pilar, Argentina</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-sky-400 mr-2 mt-0.5 shrink-0" />
                  <span>+54 9 11 3842-9873</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-sky-400 mr-2 mt-0.5 shrink-0"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>info@maclean.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horarios</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados:</span>
                  <span>9:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Maclean. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
