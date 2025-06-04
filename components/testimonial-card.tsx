import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

type TestimonialCardProps = {
  quote: string
  author: string
  location: string
  rating: number
}

export default function TestimonialCard({ quote, author, location, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-gray-900 text-white">
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-500 text-yellow-500" : "text-gray-600"}`} />
          ))}
        </div>
        <p className="mb-6 text-gray-300">"{quote}"</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </CardContent>
    </Card>
  )
}
