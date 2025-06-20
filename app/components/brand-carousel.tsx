"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface BrandCarouselProps {
  brands: {
    name: string
    imageUrl: string
  }[]
}

interface ContactConversionProps {
  whatsappNumber: string
  children: React.ReactNode
}

export default function ContactConversion({ whatsappNumber, children }: ContactConversionProps) {
  const handleConversion = () => {
    // Google Ads conversion tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", { send_to: "AW-16450971236/bM5zCIOHzs8ZEOTMt6Q9" })
    }
  }


export default function BrandCarousel({ brands }: BrandCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const totalBrands = brands.length
  const visibleBrands = 4 // Número de marcas visibles a la vez en desktop

  // Función para avanzar al siguiente conjunto de marcas
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalBrands - visibleBrands + 1))
  }

  // Función para retroceder al conjunto anterior de marcas
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalBrands - visibleBrands : prevIndex - 1))
  }

  // Configurar autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  // Pausar autoplay al interactuar con el carrusel
  const handleInteraction = () => {
    setIsAutoPlaying(false)

    // Reanudar autoplay después de 5 segundos de inactividad
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carrusel de marcas */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleBrands)}%)` }}
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="w-1/2 md:w-1/4 flex-shrink-0 p-4"
            onClick={handleInteraction}
            onMouseEnter={handleInteraction}
          >
            <div className="bg-white rounded-lg shadow-sm p-4 h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <Image
                src={brand.imageUrl || "/placeholder.svg"}
                alt={`Logo de ${brand.name}`}
                width={120}
                height={60}
                className="object-contain max-h-16"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <button
        onClick={() => {
          prevSlide()
          handleInteraction()
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 z-10 transition-all duration-300 hover:scale-110 focus:outline-none"
        aria-label="Marca anterior"
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
          className="h-5 w-5"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={() => {
          nextSlide()
          handleInteraction()
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 z-10 transition-all duration-300 hover:scale-110 focus:outline-none"
        aria-label="Marca siguiente"
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
          className="h-5 w-5"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalBrands - visibleBrands + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              handleInteraction()
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-sky-500 w-4" : "bg-gray-300"
            }`}
            aria-label={`Ir a grupo de marcas ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
