import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function RoofingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1605450099279-533bd3ce379a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9vZmluZ3xlbnwwfHwwfHx8Mg%3D%3D"
          alt="Roofing Services"
          fill
          className="object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/70"></div>
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <div>
            <div className="mb-4 h-6 w-6 rounded-full bg-red-500"></div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Roofing Services</h1>
            <p className="max-w-2xl text-xl text-gray-300">
              Professional roofing solutions for residential and commercial properties in the Chicago area.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Expert Roofing Solutions</h2>
              <p className="mb-6 text-gray-400">
                At GreenLight Construction Group, we provide comprehensive roofing services for both residential and
                commercial properties. Our experienced team delivers high-quality workmanship and exceptional customer
                service.
              </p>
              <p className="mb-6 text-gray-400">
                Whether you need a roof repair, replacement, or new installation, we have the expertise to handle
                projects of any size. We use only the finest materials and latest techniques to ensure your roof is
                durable, beautiful, and built to last.
              </p>

              <h3 className="mb-4 text-xl font-bold text-white">Our Roofing Services Include:</h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Roof inspections and assessments",
                  "Roof repairs and maintenance",
                  "Complete roof replacements",
                  "New roof installations",
                  "Emergency roof repairs",
                  "Gutter installation and repair",
                  "Skylight installation",
                  "Insurance claim assistance",
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-red-500" />
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-red-500 hover:bg-red-600">
                <Link href="/quote">Get a Free Roofing Quote</Link>
              </Button>
            </div>

            <div className="grid gap-6">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1635424824800-692767998d07?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Residential Roofing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Commercial Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Roof Repair"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Types */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Roofing Materials We Work With</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We offer a wide range of roofing materials to suit your specific needs, preferences, and budget.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Asphalt Shingles",
                description: "Affordable, versatile, and available in various colors and styles.",
                image: "/placeholder.svg?height=400&width=600&query=asphalt shingle roof",
              },
              {
                title: "Metal Roofing",
                description: "Durable, energy-efficient, and environmentally friendly option with a long lifespan.",
                image: "/placeholder.svg?height=400&width=600&query=metal roof installation",
              },
              {
                title: "Flat Roofing",
                description: "Ideal for commercial buildings, offering excellent durability and weather resistance.",
                image: "/placeholder.svg?height=400&width=600&query=commercial flat roof",
              },
              {
                title: "Tile Roofing",
                description: "Beautiful, long-lasting option that adds character and value to your property.",
                image: "/placeholder.svg?height=400&width=600&query=tile roof installation",
              },
              {
                title: "Slate Roofing",
                description: "Premium, natural stone roofing that offers unmatched beauty and longevity.",
                image: "/placeholder.svg?height=400&width=600&query=slate roof close up",
              },
              {
                title: "Green Roofing",
                description: "Environmentally friendly option that improves energy efficiency and reduces runoff.",
                image: "/placeholder.svg?height=400&width=600&query=green roof with plants",
              },
            ].map((material, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-black">
                <div className="relative h-[200px]">
                  <Image
                    src={material.image || "/placeholder.svg"}
                    alt={material.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{material.title}</h3>
                  <p className="text-gray-400">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Roofing Process</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We follow a comprehensive process to ensure your roofing project is completed efficiently and to the
              highest standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Inspection & Consultation",
                description: "We thoroughly assess your roof and discuss your needs and preferences.",
              },
              {
                step: "2",
                title: "Detailed Proposal",
                description: "We provide a comprehensive proposal with transparent pricing and timeline.",
              },
              {
                step: "3",
                title: "Professional Installation",
                description: "Our skilled team completes the installation with attention to detail and quality.",
              },
              {
                step: "4",
                title: "Final Inspection & Cleanup",
                description: "We inspect the completed work and ensure your property is clean and debris-free.",
              },
            ].map((process, index) => (
              <div key={index} className="rounded-lg bg-gray-900 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-xl font-bold text-white">
                  {process.step}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Claims */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Insurance Claim Assistance"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Insurance Claim Assistance</h2>
              <p className="mb-6 text-gray-400">
                Dealing with insurance claims for roof damage can be complicated and time-consuming. At GreenLight
                Construction Group, we specialize in helping homeowners navigate the insurance claim process.
              </p>
              <p className="mb-6 text-gray-400">
                Our experienced team will work directly with your insurance company to ensure you receive the coverage
                you deserve for your roof repair or replacement.
              </p>

              <h3 className="mb-4 text-xl font-bold text-white">Our Insurance Claim Services Include:</h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Free roof inspections",
                  "Damage documentation",
                  "Insurance claim filing assistance",
                  "Direct communication with insurance adjusters",
                  "Detailed scope of work preparation",
                  "Expert negotiation with insurance companies",
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-red-500" />
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-red-500 hover:bg-red-600">
                <Link href="/insurance-claim">Learn More About Insurance Claims</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
