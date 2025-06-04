import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sun, Battery, DollarSign, Leaf } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function SolarPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Solar Services"
          fill
          className="object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/70"></div>
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <div>
            <div className="mb-4 h-6 w-6 rounded-full bg-yellow-500"></div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Solar Services</h1>
            <p className="max-w-2xl text-xl text-gray-300">
              Sustainable energy solutions for residential and commercial properties in the Chicago area.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Sustainable Solar Solutions</h2>
              <p className="mb-6 text-gray-400">
                At GreenLight Construction Group, we provide comprehensive solar energy solutions for both residential
                and commercial properties. Our experienced team delivers high-quality installations and exceptional
                customer service.
              </p>
              <p className="mb-6 text-gray-400">
                Whether you're looking to reduce your carbon footprint, lower your energy bills, or increase your
                property value, our solar solutions can help you achieve your goals. We use only the finest materials
                and latest technologies to ensure your solar system is efficient, reliable, and built to last.
              </p>

              <h3 className="mb-4 text-xl font-bold text-white">Our Solar Services Include:</h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Solar panel installation",
                  "Solar system design and engineering",
                  "Battery storage solutions",
                  "Solar monitoring systems",
                  "Solar maintenance and repairs",
                  "Solar financing options",
                  "Solar incentive and rebate assistance",
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-yellow-500" />
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/quote">Get a Free Solar Quote</Link>
              </Button>
            </div>

            <div className="grid gap-6">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Residential Solar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Commercial Solar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Battery Storage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Benefits of Going Solar</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Investing in solar energy offers numerous advantages for your home, business, and the environment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-black p-6 text-center">
              <DollarSign className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Lower Energy Bills</h3>
              <p className="text-gray-400">
                Reduce or eliminate your monthly electricity costs by generating your own clean energy.
              </p>
            </div>

            <div className="rounded-lg bg-black p-6 text-center">
              <Leaf className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Environmental Impact</h3>
              <p className="text-gray-400">
                Reduce your carbon footprint and help combat climate change with clean, renewable energy.
              </p>
            </div>

            <div className="rounded-lg bg-black p-6 text-center">
              <Sun className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Energy Independence</h3>
              <p className="text-gray-400">
                Gain energy security and protection from rising utility rates and power outages.
              </p>
            </div>

            <div className="rounded-lg bg-black p-6 text-center">
              <Battery className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Increased Property Value</h3>
              <p className="text-gray-400">
                Homes with solar energy systems typically sell for more than homes without them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Process */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Solar Installation Process</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We follow a comprehensive process to ensure your solar project is completed efficiently and to the highest
              standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Consultation & Site Assessment",
                description: "We evaluate your property, energy needs, and goals to design the optimal solar solution.",
              },
              {
                step: "2",
                title: "Custom Design & Proposal",
                description:
                  "We create a tailored solar system design and provide a detailed proposal with financing options.",
              },
              {
                step: "3",
                title: "Permitting & Installation",
                description: "We handle all necessary permits and professionally install your solar system.",
              },
              {
                step: "4",
                title: "Activation & Monitoring",
                description:
                  "We activate your system, provide training, and set up monitoring for optimal performance.",
              },
            ].map((process, index) => (
              <div key={index} className="rounded-lg bg-gray-900 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-black">
                  {process.step}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Incentives */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHNvbGFyfGVufDB8fDB8fHwy"
                alt="Solar Incentives"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Solar Incentives & Tax Credits</h2>
              <p className="mb-6 text-gray-400">
                Going solar is more affordable than ever thanks to various incentives, rebates, and tax credits
                available to homeowners and businesses in Illinois.
              </p>
              <p className="mb-6 text-gray-400">
                Our team will help you navigate the available incentives to maximize your savings and return on
                investment.
              </p>

              <h3 className="mb-4 text-xl font-bold text-white">Available Solar Incentives:</h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Federal Solar Investment Tax Credit (ITC)",
                  "Illinois Shines Solar Renewable Energy Credits (SRECs)",
                  "Net Metering Programs",
                  "Property Tax Exemptions",
                  "Local Utility Rebates",
                  "Accelerated Depreciation for Businesses",
                ].map((incentive, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-yellow-500" />
                    <span className="text-gray-300">{incentive}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/contact">Schedule a Consultation</Link>
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
