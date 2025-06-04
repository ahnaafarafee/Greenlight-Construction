import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Building, Home, Warehouse, Store } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function ConstructionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1624547929144-2823db426cfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENvbnN0cnVjdGlvbiUyMFNlcnZpY2VzfGVufDB8fDB8fHwy"
          alt="Construction Services"
          fill
          className="object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/70"></div>
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <div>
            <div className="mb-4 h-6 w-6 rounded-full bg-green-500"></div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Construction Services</h1>
            <p className="max-w-2xl text-xl text-gray-300">
              Quality construction solutions for residential and commercial properties in the Chicago area.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Comprehensive Construction Solutions</h2>
              <p className="mb-6 text-gray-400">
                At GreenLight Construction Group, we provide a wide range of construction services for both residential
                and commercial properties. Our experienced team delivers high-quality workmanship and exceptional
                customer service.
              </p>
              <p className="mb-6 text-gray-400">
                Whether you're planning a new build, renovation, or remodel, we have the expertise to bring your vision
                to life. We use only the finest materials and latest techniques to ensure your project is completed to
                the highest standards.
              </p>

              <h3 className="mb-4 text-xl font-bold text-white">Our Construction Services Include:</h3>
              <ul className="mb-8 space-y-3">
                {[
                  "New home construction",
                  "Commercial building construction",
                  "Renovations and remodels",
                  "Additions and extensions",
                  "Kitchen and bathroom remodels",
                  "Basement finishing",
                  "Deck and patio construction",
                  "Interior and exterior renovations",
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-green-500 hover:bg-green-600">
                <Link href="/quote">Get a Free Construction Quote</Link>
              </Button>
            </div>

            <div className="grid gap-6">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Residential Construction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1489514354504-1653aa90e34e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Commercial Construction"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1553760844-46bed5c3143f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Renovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Construction Projects</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We specialize in a variety of construction projects for both residential and commercial clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-black p-6 text-center">
              <Home className="mx-auto mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Residential</h3>
              <p className="text-gray-400">
                Custom homes, renovations, and additions for homeowners throughout the Chicago area.
              </p>
            </div>

            <div className="rounded-lg bg-black p-6 text-center">
              <Building className="mx-auto mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Commercial</h3>
              <p className="text-gray-400">
                Office buildings, retail spaces, and commercial facilities built to your specifications.
              </p>
            </div>

            <div className="rounded-lg bg-black p-6 text-center">
              <Store className="mx-auto mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Retail</h3>
              <p className="text-gray-400">
                Retail stores, restaurants, and shopping centers designed for optimal customer experience.
              </p>
            </div>

            <div className="rounded-lg bg-black p-6 text-center">
              <Warehouse className="mx-auto mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Industrial</h3>
              <p className="text-gray-400">
                Warehouses, manufacturing facilities, and industrial buildings built for efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Take a look at some of our recent construction projects in the Chicago area.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Modern Residential Home",
                location: "Glen Ellyn, IL",
                description: "Custom-built 3,500 sq ft modern home with energy-efficient features.",
                image: "/placeholder.svg?height=600&width=800&query=modern residential home exterior",
              },
              {
                title: "Commercial Office Building",
                location: "Chicago, IL",
                description: "Three-story office building with contemporary design and sustainable features.",
                image: "/placeholder.svg?height=600&width=800&query=modern commercial office building",
              },
              {
                title: "Retail Store Renovation",
                location: "Naperville, IL",
                description: "Complete renovation of a 5,000 sq ft retail space with custom fixtures.",
                image: "/placeholder.svg?height=600&width=800&query=modern retail store interior",
              },
              {
                title: "Luxury Kitchen Remodel",
                location: "Oak Park, IL",
                description: "High-end kitchen renovation with custom cabinetry and premium appliances.",
                image: "/placeholder.svg?height=600&width=800&query=luxury kitchen remodel",
              },
              {
                title: "Industrial Warehouse",
                location: "Schaumburg, IL",
                description: "20,000 sq ft warehouse with modern logistics facilities and office space.",
                image: "/placeholder.svg?height=600&width=800&query=modern industrial warehouse",
              },
              {
                title: "Residential Addition",
                location: "Evanston, IL",
                description: "Two-story addition to an existing home, including a master suite and family room.",
                image: "/placeholder.svg?height=600&width=800&query=residential home addition",
              },
            ].map((project, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-gray-900">
                <div className="relative h-[250px]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                  <p className="mb-2 text-sm text-green-500">{project.location}</p>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-green-500 hover:bg-green-600">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Construction Process</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We follow a comprehensive process to ensure your construction project is completed efficiently and to the
              highest standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Consultation & Planning",
                description: "We discuss your vision, requirements, and budget to develop a comprehensive plan.",
              },
              {
                step: "2",
                title: "Design & Estimation",
                description: "We create detailed designs and provide accurate cost estimates for your project.",
              },
              {
                step: "3",
                title: "Construction & Management",
                description: "Our skilled team executes the project with careful attention to quality and timeline.",
              },
              {
                step: "4",
                title: "Final Inspection & Handover",
                description: "We conduct thorough inspections and ensure your complete satisfaction before handover.",
              },
            ].map((process, index) => (
              <div key={index} className="rounded-lg bg-black p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
                  {process.step}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
