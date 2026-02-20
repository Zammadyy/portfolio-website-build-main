import type { Metadata } from "next"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for premium content writing and lead generation services. Book a consultation call today.",
}

export default function ContactPage() {
  return <ContactContent />
}
