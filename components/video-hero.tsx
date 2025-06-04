"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function VideoHero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <iframe
          className="absolute left-0 top-0 h-[calc(100%+120px)] w-full scale-110 object-cover"
          src="https://www.youtube-nocookie.com/embed/iLhYtTbnO0o?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&mute=1&playlist=iLhYtTbnO0o&playsinline=1&enablejsapi=1&disablekb=1&modestbranding=1&iv_load_policy=3"
          title="Construction Promo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ pointerEvents: "none" }}
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="absolute left-0 top-0 h-full w-full bg-black/70"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full items-center px-4">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center space-x-4">
            <div className="h-6 w-6 rounded-full bg-red-500"></div>
            <div className="h-6 w-6 rounded-full bg-yellow-500"></div>
            <div className="h-6 w-6 rounded-full bg-green-500"></div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            <span className="text-green-500">GREEN</span>LIGHT
            <br />
            CONSTRUCTION GROUP
          </h1>

          <p className="mb-8 text-xl text-gray-300">
            Your trusted contractor for roofing, solar, and construction services in the Chicago area.
          </p>

          <h2 className="mb-8 text-2xl font-semibold text-white">"YOUR CONTRACTOR FOR LIFE"</h2>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <Link href="/quote">
                GET A FREE QUOTE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/services">EXPLORE OUR SERVICES</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
