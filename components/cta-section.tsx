import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Get Started?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
          Contact us today for a free consultation and quote on your roofing, solar, or construction project.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
