"use client"

import { useEffect, useState } from "react"

export default function CleaningLoader() {
    const [visible, setVisible] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFadeOut(true), 2000)
        const hideTimer = setTimeout(() => setVisible(false), 2700)
        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(hideTimer)
        }
    }, [])

    if (!visible) return null

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950 transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            {/* Partículas de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(18)].map((_, i) => (
                    <span
                        key={i}
                        className="loader-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2.5 + Math.random() * 3}s`,
                            width: `${6 + Math.random() * 10}px`,
                            height: `${6 + Math.random() * 10}px`,
                            opacity: 0.15 + Math.random() * 0.25,
                        }}
                    />
                ))}
            </div>

            {/* Contenedor principal */}
            <div className="relative flex flex-col items-center gap-8">

                {/* Burbuja de jabón central */}
                <div className="relative w-36 h-36 flex items-center justify-center">
                    {/* Anillo exterior pulsante */}
                    <div className="absolute inset-0 rounded-full border-2 border-sky-400/30 animate-ping" />
                    {/* Anillo medio giratorio */}
                    <div className="absolute inset-2 rounded-full border-2 border-dashed border-sky-500/50 animate-spin-slow" />
                    {/* Esfera de burbuja */}
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-sky-400/20 via-cyan-300/10 to-blue-500/20 backdrop-blur-sm border border-sky-400/40 shadow-[0_0_40px_rgba(56,189,248,0.3)] flex items-center justify-center">
                        {/* Brillo interno */}
                        <div className="absolute top-3 left-4 w-5 h-5 bg-white/40 rounded-full blur-sm" />
                        <div className="absolute top-5 left-6 w-2 h-2 bg-white/60 rounded-full" />
                        {/* Ícono de gota */}
                        <svg
                            viewBox="0 0 24 24"
                            className="w-10 h-10 text-sky-300 drop-shadow-[0_0_8px_rgba(125,211,252,0.9)]"
                            fill="currentColor"
                        >
                            <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0 0 14 0c0-4.5-7-13-7-13z" />
                        </svg>
                    </div>

                    {/* Gotas orbitando */}
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="absolute w-3 h-3"
                            style={{
                                animation: `orbit 2.4s linear infinite`,
                                animationDelay: `${i * 0.6}s`,
                                transformOrigin: "68px 68px",
                                top: "calc(50% - 6px)",
                                left: "calc(50% - 6px)",
                            }}
                        >
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{
                                    background: i % 2 === 0
                                        ? "radial-gradient(circle, #38bdf8, #0ea5e9)"
                                        : "radial-gradient(circle, #67e8f9, #22d3ee)",
                                    boxShadow: "0 0 6px rgba(56,189,248,0.8)",
                                    transform: `translateX(${52 * Math.cos((i * Math.PI) / 2)}px) translateY(${52 * Math.sin((i * Math.PI) / 2)}px)`,
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Logo y texto */}
                <div className="text-center flex flex-col items-center gap-3">
                    <p className="text-sky-300 text-xs font-semibold tracking-[0.35em] uppercase opacity-80 animate-pulse">
                        Limpieza Premium
                    </p>
                    <h1 className="text-4xl font-black text-white tracking-tight">
                        MAC<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">LEAN</span>
                    </h1>

                    {/* Barra de progreso animada */}
                    <div className="mt-2 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full animate-progress" />
                    </div>

                    {/* Texto rotativo */}
                    <p className="text-gray-400 text-xs mt-1 animate-pulse tracking-wider">
                        Preparando experiencia...
                    </p>
                </div>
            </div>

            <style jsx>{`
        /* Partículas flotantes */
        .loader-particle {
          position: absolute;
          bottom: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56,189,248,0.6), rgba(14,165,233,0.2));
          animation: floatUp linear infinite;
          box-shadow: 0 0 6px rgba(56,189,248,0.4);
        }
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-110vh) scale(0.5); opacity: 0; }
        }

        /* Spin lento */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        /* Órbita de gotas */
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(52px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(52px) rotate(-360deg); }
        }

        /* Barra de progreso */
        @keyframes progress {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
        </div>
    )
}
