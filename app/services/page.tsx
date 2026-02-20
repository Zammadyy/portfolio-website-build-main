import type { Metadata } from "next"
import { ServicesContent } from "@/components/services/services-content"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore premium content writing and lead generation services tailored for ambitious brands that demand results.",
}

export default function ServicesPage() {
  return <ServicesContent />
}
