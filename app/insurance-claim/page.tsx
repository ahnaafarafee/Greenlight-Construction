import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, Phone, Clock, Shield, Star } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function InsuranceClaimPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW5zdXJhbmNlfGVufDB8fDB8fHwy"
          alt="Insurance Claim Services"
          fill
          className="object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/70"></div>
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Insurance Claim Assistance</h1>
            <p className="max-w-2xl text-xl text-gray-300">
              Expert guidance through the insurance claim process for storm and weather damage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Insurance Claim Specialists</h2>
              <p className="mb-6 text-gray-400">
                At GreenLight Construction Group, we understand that dealing with insurance claims for property damage
                can be overwhelming and time-consuming. Our team of insurance claim specialists is here to guide you
                through every step of the process.
              </p>
              <p className="mb-6 text-gray-400">
                We have extensive experience working with insurance companies and adjusters to ensure you receive the
                coverage you deserve for your property damage. Our goal is to make the claims process as smooth and
                stress-free as possible.
              </p>

              <h3 className="mb-4 text-xl font-bold text-white">Our Insurance Claim Services Include:</h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Free property damage inspections",
                  "Comprehensive damage documentation",
                  "Insurance claim filing assistance",
                  "Direct communication with insurance adjusters",
                  "Detailed scope of work preparation",
                  "Expert negotiation with insurance companies",
                  "Complete restoration and repairs",
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-green-500 hover:bg-green-600">
                <Link href="/contact">Schedule a Free Inspection</Link>
              </Button>
            </div>

            <div className="grid gap-6">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Insurance Claim Inspection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SW5zdXJhbmNlfGVufDB8fDB8fHwy"
                    alt="Storm Damage"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1732717566587-f5a155bd8dea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Insurance Claim Consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Insurance Claim Process</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We follow a comprehensive process to ensure your insurance claim is handled efficiently and effectively.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Free Inspection",
                description: "We thoroughly assess your property damage and document all findings.",
                icon: <Shield className="h-12 w-12 text-green-500" />,
              },
              {
                step: "2",
                title: "Claim Filing",
                description: "We help you file your insurance claim and prepare all necessary documentation.",
                icon: <FileText className="h-12 w-12 text-green-500" />,
              },
              {
                step: "3",
                title: "Adjuster Meeting",
                description: "We meet with your insurance adjuster to ensure all damage is properly assessed.",
                icon: <Phone className="h-12 w-12 text-green-500" />,
              },
              {
                step: "4",
                title: "Restoration",
                description: "Once your claim is approved, we complete all necessary repairs and restoration.",
                icon: <Clock className="h-12 w-12 text-green-500" />,
              },
            ].map((process, index) => (
              <div key={index} className="rounded-lg bg-black p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
                  {process.step}
                </div>
                <div className="mb-4">{process.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Insurance Claims */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Common Types of Insurance Claims</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We assist with a variety of property damage insurance claims, including:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Storm Damage",
                description: "Damage caused by high winds, hail, heavy rain, and severe storms.",
                image: "/placeholder.svg?height=400&width=600&query=storm damage on roof with fallen tree",
              },
              {
                title: "Hail Damage",
                description: "Damage to roofing, siding, windows, and other exterior surfaces caused by hail.",
                image: "/placeholder.svg?height=400&width=600&query=hail damage on roof shingles close up",
              },
              {
                title: "Wind Damage",
                description: "Missing or damaged shingles, siding, and structural damage caused by high winds.",
                image: "/placeholder.svg?height=400&width=600&query=wind damage on house with missing shingles",
              },
              {
                title: "Water Damage",
                description: "Interior damage caused by roof leaks, flooding, or plumbing issues.",
                image: "/placeholder.svg?height=400&width=600&query=water damage on ceiling from roof leak",
              },
              {
                title: "Fire Damage",
                description: "Structural and cosmetic damage caused by fires and smoke.",
                image: "/placeholder.svg?height=400&width=600&query=fire damage restoration on house",
              },
              {
                title: "Impact Damage",
                description: "Damage caused by falling trees, debris, or other objects striking your property.",
                image: "/placeholder.svg?height=400&width=600&query=fallen tree damage on house roof",
              },
            ].map((claim, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-gray-900">
                <div className="relative h-[200px]">
                  <Image
                    src={claim.image || "/placeholder.svg"}
                    alt={claim.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{claim.title}</h3>
                  <p className="text-gray-400">{claim.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Get answers to common questions about insurance claims and our services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "How do I know if I have a valid insurance claim?",
                answer:
                  "If your property has sustained damage from a covered peril such as wind, hail, fire, or water, you likely have a valid claim. Our team can provide a free inspection to assess the damage and help determine if you have a valid claim.",
              },
              {
                question: "Will filing an insurance claim increase my premiums?",
                answer:
                  "Insurance premiums may increase after filing a claim, but this depends on various factors including your insurance company's policies, your claim history, and the nature of the damage. Weather-related claims are often considered 'Acts of God' and may not impact your premiums as significantly.",
              },
              {
                question: "How long do I have to file an insurance claim after damage occurs?",
                answer:
                  "Most insurance policies require you to file a claim within a certain timeframe after the damage occurs, typically within one year. However, this can vary by policy and state, so it's best to file your claim as soon as possible after discovering the damage.",
              },
              {
                question: "What if my insurance claim is denied?",
                answer:
                  "If your claim is denied, we can help you understand the reason for the denial and assist with the appeals process. Our experienced team knows how to properly document damage and present evidence to support your claim.",
              },
              {
                question: "Do you work directly with my insurance company?",
                answer:
                  "Yes, we work directly with your insurance company throughout the entire claims process. We communicate with adjusters, provide documentation, and negotiate on your behalf to ensure you receive fair compensation for your damages.",
              },
              {
                question: "Is there a fee for your insurance claim assistance services?",
                answer:
                  "We provide free inspections and insurance claim assistance. Our payment comes from the insurance proceeds for the work we perform. There are no out-of-pocket expenses for our claim assistance services.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg bg-black p-6">
                <h3 className="mb-3 text-lg font-bold text-white">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Read testimonials from clients who have successfully navigated the insurance claim process with our help.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-900 p-6">
              <div className="mb-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="mb-6 text-gray-300">
                "GreenLight Construction Group made the insurance claim process so much easier. They handled everything
                from the inspection to the negotiations with my insurance company. My roof was replaced quickly and the
                quality of work was excellent."
              </p>
              <div>
                <p className="font-semibold text-white">Robert Johnson</p>
                <p className="text-sm text-gray-400">Glen Ellyn, IL</p>
              </div>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <div className="mb-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="mb-6 text-gray-300">
                "After a severe hailstorm damaged my roof, I was overwhelmed by the insurance claim process. GreenLight
                stepped in and guided me through every step. They got my claim approved for a full roof replacement when
                the insurance company initially only offered partial coverage."
              </p>
              <div>
                <p className="font-semibold text-white">Sarah Williams</p>
                <p className="text-sm text-gray-400">Chicago, IL</p>
              </div>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <div className="mb-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="mb-6 text-gray-300">
                "I can't thank GreenLight Construction Group enough for their help with my insurance claim. They found
                damage that I didn't even know existed and made sure it was included in my claim. The repairs were
                completed quickly and professionally."
              </p>
              <div>
                <p className="font-semibold text-white">Michael Thompson</p>
                <p className="text-sm text-gray-400">Naperville, IL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
