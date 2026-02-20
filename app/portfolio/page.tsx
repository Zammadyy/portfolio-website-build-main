import type { Metadata } from "next"
import { PortfolioContent } from "@/components/portfolio/portfolio-content"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore case studies and projects showcasing content strategy, lead generation, and conversion optimization results.",
}

export default function PortfolioPage() {
  return <PortfolioContent />
}
