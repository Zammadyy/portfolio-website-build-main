import type { Metadata } from "next"
import { AboutContent } from "@/components/about/about-content"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Zammad Khan - a content writer and lead generation specialist helping ambitious brands grow.",
}

export default function AboutPage() {
  return <AboutContent />
}
