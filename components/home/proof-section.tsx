import { Section } from "@/components/section"
import { Quote } from "lucide-react"

const metrics = [
  { value: "50+", label: "Brands Served" },
  { value: "2.4M", label: "Leads Generated" },
  { value: "340%", label: "Avg. ROI Increase" },
  { value: "98%", label: "Client Retention" },
]

const testimonials = [
  {
    quote:
      "Zammad transformed our content strategy from scratch. Within 6 months, organic leads increased by 420%. She's a rare blend of creative and strategic.",
    name: "Sarah Chen",
    role: "VP of Marketing, Nexus SaaS",
  },
  {
    quote:
      "Working with Zammad was a turning point. Her copy didn't just read well - it converted. Our landing page conversion rate doubled in 8 weeks.",
    name: "Marcus Webb",
    role: "Founder, Oakhaven Commerce",
  },
  {
    quote:
      "She doesn't just write content. She builds systems. Our lead gen pipeline is now our most reliable growth channel, and it all started with Zammad.",
    name: "Priya Nair",
    role: "CMO, Elevate Finance",
  },
]

export function ProofSection() {
  return (
    <Section className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Metrics */}
        <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-4 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Client Testimonials
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Results That Speak
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-border bg-background p-6"
            >
              <Quote className="mb-4 h-5 w-5 text-primary/40" />
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {t.quote}
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
