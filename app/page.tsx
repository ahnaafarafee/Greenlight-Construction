import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, Award, Shield, Users, ThumbsUp } from "lucide-react"
import VideoHero from "@/components/video-hero"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Video */}
      <VideoHero />

      {/* Services Overview */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              GreenLight Construction Group provides top-quality roofing, solar, and construction services for both
              residential and commercial properties in the Chicago area.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              title="Roofing"
              description="Expert roofing solutions for residential and commercial properties. We handle repairs, replacements, and new installations."
              icon="roof"
              link="/roofing"
              color="red"
            />
            <ServiceCard
              title="Solar"
              description="Sustainable energy solutions with professional solar panel installation. Reduce your carbon footprint and energy bills."
              icon="sun"
              link="/solar"
              color="yellow"
            />
            <ServiceCard
              title="Construction"
              description="Full-service construction for new builds, renovations, and remodels. Quality craftsmanship for every project."
              icon="building"
              link="/construction"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">We're Here To Serve You!</h2>
              <p className="mb-6 text-gray-400">
                Welcome to GreenLight Construction Group, your trusted partner for roofing, solar, and construction
                services in the Chicago area. With years of experience and a commitment to excellence, we deliver
                high-quality workmanship and exceptional customer service.
              </p>
              <p className="mb-6 text-gray-400">
                Our team of skilled professionals are dedicated to bringing your vision to life, whether it's a new
                roof, solar installation, or construction project. We take pride in our attention to detail and
                commitment to your complete satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-green-500 hover:bg-green-600">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2574&auto=format&fit=crop"
                alt="GreenLight Construction Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Core Values</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              At GreenLight Construction Group, our values guide everything we do. We're committed to excellence,
              integrity, and customer satisfaction.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-900 text-white">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="mb-4 h-12 w-12 text-green-500" />
                <h3 className="mb-2 text-xl font-bold">People First</h3>
                <p className="text-gray-400">Our customers and team are our top priority in everything we do.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 text-white">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
                <h3 className="mb-2 text-xl font-bold">Accountability</h3>
                <p className="text-gray-400">We stand by our work and take responsibility for our actions.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 text-white">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Award className="mb-4 h-12 w-12 text-green-500" />
                <h3 className="mb-2 text-xl font-bold">Excellence</h3>
                <p className="text-gray-400">We strive for the highest quality in every project we undertake.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 text-white">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Shield className="mb-4 h-12 w-12 text-green-500" />
                <h3 className="mb-2 text-xl font-bold">Integrity</h3>
                <p className="text-gray-400">We do what we say and maintain honest relationships with our clients.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="GreenLight Construction did an amazing job on our new roof. Professional, efficient, and the quality is outstanding!"
              author="Michael Johnson"
              location="Glen Ellyn, IL"
              rating={5}
            />
            <TestimonialCard
              quote="We couldn't be happier with our solar panel installation. The team was knowledgeable and the energy savings have been substantial."
              author="Sarah Williams"
              location="Chicago, IL"
              rating={5}
            />
            <TestimonialCard
              quote="From start to finish, GreenLight handled our insurance claim and roof replacement with expertise. Highly recommend!"
              author="David Thompson"
              location="Naperville, IL"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We take pride in our work to make sure it's exceptional. We go the extra mile to build meaningful
              relationships with customers, which is why you can always depend on us to get the job done right.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-gray-900 p-6 text-center">
              <ThumbsUp className="mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold">Quality Workmanship</h3>
              <p className="text-gray-400">Our experienced team delivers superior results on every project.</p>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-gray-900 p-6 text-center">
              <Shield className="mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold">Licensed & Insured</h3>
              <p className="text-gray-400">We're fully licensed and insured for your peace of mind.</p>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-gray-900 p-6 text-center">
              <Star className="mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold">5-Star Service</h3>
              <p className="text-gray-400">Our customers consistently rate us 5 stars for our exceptional service.</p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="h-12 w-32 relative">
                <Image src="/google-reviews-5-stars.png" alt="Google 5-Star Reviews" fill className="object-contain" />
              </div>
              <p className="mt-2 text-sm text-gray-400">Google Reviews</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-12 w-32 relative">
                <Image src="/bbb-a-rating.png" alt="BBB A+ Rating" fill className="object-contain" />
              </div>
              <p className="mt-2 text-sm text-gray-400">BBB A+ Rating</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-12 w-32 relative">
                <Image src="/placeholder-qg7sk.png" alt="Facebook Reviews" fill className="object-contain" />
              </div>
              <p className="mt-2 text-sm text-gray-400">Facebook Reviews</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-12 w-32 relative">
                <Image src="/angies-list-award.png" alt="Angie's List Award" fill className="object-contain" />
              </div>
              <p className="mt-2 text-sm text-gray-400">Angie's List Award</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
