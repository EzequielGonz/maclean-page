"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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

  return (
    <Button
      size="lg"
      className="bg-green-600 hover:bg-green-700 flex items-center gap-2 transition-transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
      asChild
      onClick={handleConversion}
    >
      <Link href={`https://wa.me/${whatsappNumber}`} target="_blank">
        {children}
      </Link>
    </Button>
  )
}
