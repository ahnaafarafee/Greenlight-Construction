import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Sun, Home, Building } from "lucide-react"

type ServiceCardProps = {
  title: string
  description: string
  icon: "roof" | "sun" | "building"
  link: string
  color: "red" | "yellow" | "green"
}

export default function ServiceCard({ title, description, icon, link, color }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "roof":
        return (
          <Home
            className={`h-12 w-12 ${color === "red" ? "text-red-500" : color === "yellow" ? "text-yellow-500" : "text-green-500"}`}
          />
        )
      case "sun":
        return (
          <Sun
            className={`h-12 w-12 ${color === "red" ? "text-red-500" : color === "yellow" ? "text-yellow-500" : "text-green-500"}`}
          />
        )
      case "building":
        return (
          <Building
            className={`h-12 w-12 ${color === "red" ? "text-red-500" : color === "yellow" ? "text-yellow-500" : "text-green-500"}`}
          />
        )
      default:
        return (
          <Building
            className={`h-12 w-12 ${color === "red" ? "text-red-500" : color === "yellow" ? "text-yellow-500" : "text-green-500"}`}
          />
        )
    }
  }

  const getBgColor = () => {
    switch (color) {
      case "red":
        return "hover:bg-red-500/10"
      case "yellow":
        return "hover:bg-yellow-500/10"
      case "green":
        return "hover:bg-green-500/10"
      default:
        return "hover:bg-green-500/10"
    }
  }

  const getButtonColor = () => {
    switch (color) {
      case "red":
        return "bg-red-500 hover:bg-red-600"
      case "yellow":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "green":
        return "bg-green-500 hover:bg-green-600"
      default:
        return "bg-green-500 hover:bg-green-600"
    }
  }

  return (
    <Card className={`bg-gray-900 text-white transition-all duration-300 ${getBgColor()}`}>
      <CardContent className="p-6">
        <div className="mb-4">{getIcon()}</div>
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className={getButtonColor()}>
          <Link href={link}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
