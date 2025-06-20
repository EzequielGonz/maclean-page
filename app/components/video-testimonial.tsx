"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, AlertCircle } from "lucide-react"

// Actualizar la interfaz para aceptar un array de URLs de video
interface VideoTestimonialProps {
  videoUrls: string[]
}

export default function VideoTestimonial({ videoUrls }: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        // Intentar reproducir y capturar cualquier error
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Error playing video:", error)
            setVideoError(true)
          })
        }
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Cambiar al video anterior
  const prevVideo = () => {
    setIsPlaying(false)
    setVideoError(false)
    setCurrentVideoIndex((prev) => (prev === 0 ? videoUrls.length - 1 : prev - 1))
  }

  // Cambiar al siguiente video
  const nextVideo = () => {
    setIsPlaying(false)
    setVideoError(false)
    setCurrentVideoIndex((prev) => (prev === videoUrls.length - 1 ? 0 : prev + 1))
  }

  // Manejar errores de carga de video
  const handleVideoError = () => {
    console.error("Error loading video:", videoUrls[currentVideoIndex])
    setVideoError(true)
    setIsPlaying(false)
  }

  // Reiniciar el estado de error al cambiar de video
  useEffect(() => {
    setVideoError(false)
  }, [currentVideoIndex])

  // Sincronizar el estado de reproducción con eventos del video
  useEffect(() => {
    const videoElement = videoRef.current

    if (!videoElement) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)
    const handleError = () => handleVideoError()

    videoElement.addEventListener("play", handlePlay)
    videoElement.addEventListener("pause", handlePause)
    videoElement.addEventListener("ended", handleEnded)
    videoElement.addEventListener("error", handleError)

    return () => {
      videoElement.removeEventListener("play", handlePlay)
      videoElement.removeEventListener("pause", handlePause)
      videoElement.removeEventListener("ended", handleEnded)
      videoElement.removeEventListener("error", handleError)
    }
  }, [currentVideoIndex])

  return (
    <div className="relative w-full">
      <div className="aspect-video relative bg-black rounded-lg overflow-hidden shadow-xl">
        {!videoError ? (
          <video
            ref={videoRef}
            src={videoUrls[currentVideoIndex]}
            className="w-full h-full object-contain"
            playsInline
            preload="metadata"
            onClick={togglePlay}
            onError={handleVideoError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
            <div className="text-center p-4">
              <AlertCircle className="h-12 w-12 mx-auto mb-2 text-red-500" />
              <p className="text-lg font-medium">No se pudo cargar el video</p>
              <p className="text-sm text-gray-400 mt-1">Intente con otro video o vuelva más tarde</p>
            </div>
          </div>
        )}

        {/* Botón de reproducción grande */}
        {!videoError && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
            style={{ display: isPlaying ? "none" : "flex" }}
            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
          >
            <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center shadow-lg hover:bg-sky-600 transition-transform hover:scale-110">
              <Play className="h-10 w-10 text-white" />
            </div>
          </button>
        )}

        {/* Controles personalizados */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex items-center">
          {!videoError && (
            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
            >
              {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
            </button>
          )}
          <div className="ml-4 text-white text-sm">Reseña de cliente {currentVideoIndex + 1}</div>
        </div>
      </div>

      {/* Controles de navegación */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevVideo}
          className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
          aria-label="Video anterior"
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

        <div className="flex gap-2 items-center">
          {videoUrls.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsPlaying(false)
                setVideoError(false)
                setCurrentVideoIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentVideoIndex ? "bg-sky-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir a reseña ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextVideo}
          className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
          aria-label="Video siguiente"
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
      </div>
    </div>
  )
}
