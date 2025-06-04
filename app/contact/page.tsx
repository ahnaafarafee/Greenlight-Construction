import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-400">
              Get in touch with our team for a free consultation or quote on your roofing, solar, or construction
              project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-black p-6 text-center">
              <MapPin className="mx-auto mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Office Location</h3>
              <p className="text-gray-400">
                800 Roosevelt Rd
                <br />
                Building E Suite 112
                <br />
                Glen Ellyn, IL 60137
              </p>
            </div>

            <div className="rounded-lg bg-black p-6 text-center">
              <Phone className="mx-auto mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Phone</h3>
              <p className="text-gray-400">
                <a href="tel:+18475547536" className="hover:text-green-500">
                  (847) 554-7536
                </a>
              </p>
            </div>

            <div className="rounded-lg bg-black p-6 text-center">
              <Mail className="mx-auto mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Email</h3>
              <p className="text-gray-400">
                <a href="mailto:info@greenlightconstructiongroup.com" className="hover:text-green-500">
                  info@greenlightconstructiongroup.com
                </a>
              </p>
            </div>

            <div className="rounded-lg bg-black p-6 text-center">
              <Clock className="mx-auto mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold text-white">Business Hours</h3>
              <p className="text-gray-400">
                Monday - Friday: 8am - 6pm
                <br />
                Saturday: 9am - 2pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Get In Touch</h2>
              <p className="mb-8 text-gray-400">
                Fill out the form below and one of our representatives will contact you shortly. We look forward to
                hearing from you!
              </p>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="border-gray-700 bg-gray-900 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="border-gray-700 bg-gray-900 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="Your Phone"
                      className="border-gray-700 bg-gray-900 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-white">
                      Service Interested In
                    </label>
                    <Select>
                      <SelectTrigger className="border-gray-700 bg-gray-900 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="border-gray-700 bg-gray-900 text-white">
                        <SelectItem value="roofing">Roofing</SelectItem>
                        <SelectItem value="solar">Solar</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="insurance">Insurance Claim</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    className="min-h-[150px] border-gray-700 bg-gray-900 text-white"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Our Location</h2>
              <p className="mb-8 text-gray-400">
                We serve the entire Chicago area and surrounding suburbs. Visit our office in Glen Ellyn or contact us
                for a free on-site consultation.
              </p>

              <div className="h-[400px] overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.7923051983466!2d-88.07742232412567!3d41.87220747124884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e53f8c8d8b4e7%3A0x4a3f1d24e5252e77!2s800%20Roosevelt%20Rd%2C%20Glen%20Ellyn%2C%20IL%2060137!5e0!3m2!1sen!2sus!4v1684345678901!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GreenLight Construction Group Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Areas We Serve</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              GreenLight Construction Group proudly serves the following areas in and around Chicago:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Chicago",
              "Glen Ellyn",
              "Naperville",
              "Wheaton",
              "Oak Park",
              "Evanston",
              "Schaumburg",
              "Arlington Heights",
              "Downers Grove",
              "Elmhurst",
              "Lombard",
              "Oak Brook",
              "Hinsdale",
              "Aurora",
              "Elgin",
              "St. Charles",
            ].map((area, index) => (
              <div key={index} className="rounded-lg bg-black p-4 text-center">
                <p className="text-white">{area}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-400">
            Don't see your area listed? Contact us to see if we serve your location.
          </p>
        </div>
      </section>
    </div>
  )
}
