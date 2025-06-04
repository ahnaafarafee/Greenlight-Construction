"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "SOLAR", href: "/solar" },
  { name: "ROOFING", href: "/roofing" },
  { name: "CONSTRUCTION", href: "/construction" },
  { name: "INSURANCE CLAIM", href: "/insurance-claim" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://i.ibb.co/s9RDkT2c/logo-white-text.png"
            alt="Logo"
            width={120}
            height={120}
            className="h-auto w-24"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href ? "text-green-500" : "text-gray-200 hover:text-green-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-green-500 hover:bg-green-600">GET A QUOTE</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 z-50 bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href ? "text-green-500" : "text-gray-200 hover:text-green-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-green-500 hover:bg-green-600">GET A QUOTE</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
