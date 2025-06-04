import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">
              <span className="text-green-500">GREEN</span>LIGHT CONSTRUCTION GROUP
            </h3>
            <p className="mb-4 text-sm text-gray-400">
              Your trusted contractor for roofing, solar, and construction services in the Chicago area.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-green-500">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-green-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="mailto:info@greenlightconstructiongroup.com" className="text-gray-400 hover:text-green-500">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/solar" className="hover:text-green-500">
                  Solar
                </Link>
              </li>
              <li>
                <Link href="/roofing" className="hover:text-green-500">
                  Roofing
                </Link>
              </li>
              <li>
                <Link href="/construction" className="hover:text-green-500">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/insurance-claim" className="hover:text-green-500">
                  Insurance Claims
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-green-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-green-500">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-green-500" />
                <span>
                  800 Roosevelt Rd
                  <br />
                  Building E Suite 112
                  <br />
                  Glen Ellyn, IL 60137
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-green-500" />
                <Link href="tel:+18475547536" className="hover:text-green-500">
                  (847) 554-7536
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-green-500" />
                <Link href="mailto:info@greenlightconstructiongroup.com" className="hover:text-green-500">
                  info@greenlightconstructiongroup.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GreenLight Construction Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
