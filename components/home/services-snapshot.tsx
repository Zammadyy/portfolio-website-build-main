import Link from "next/link"
import { ArrowRight, PenLine, Target, BarChart3, Search } from "lucide-react"
import { Section } from "@/components/section"

const services = [
  {
    icon: PenLine,
    title: "Content Strategy",
    description:
      "Data-driven content plans that align with your audience and business goals.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "Full-funnel systems that capture, nurture, and convert qualified leads.",
  },
  {
    icon: BarChart3,
    title: "Conversion Copy",
    description:
      "High-impact copy for landing pages, emails, and sales assets that drive action.",
  },
  {
    icon: Search,
    title: "SEO Content",
    description:
      "Search-optimized long-form content that ranks, educates, and converts.",
  },
]

export function ServicesSnapshot() {
  return (
    <Section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            What I Do
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Services Built for Growth
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all services <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
