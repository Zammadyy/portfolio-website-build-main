import Link from "next/link"
import { ArrowRight, Briefcase, Award, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"

const strengths = [
  {
    icon: Briefcase,
    title: "Strategic Thinking",
    description:
      "Every piece of content serves a purpose in a larger growth strategy. No filler, only fuel.",
  },
  {
    icon: Award,
    title: "Conversion Focus",
    description:
      "My copy doesn't just read well - it drives action. Measurable results are the standard, not the exception.",
  },
  {
    icon: Layers,
    title: "Full-Funnel Expertise",
    description:
      "From awareness content to bottom-of-funnel sales copy, I build complete content ecosystems.",
  },
  {
    icon: Zap,
    title: "Speed & Reliability",
    description:
      "Deadlines are sacred. I deliver polished, high-quality work on time, every single time.",
  },
]

const industries = [
  "SaaS & Technology",
  "E-commerce & DTC",
  "Financial Services",
  "B2B Professional Services",
  "Health & Wellness",
  "Education & EdTech",
]

const tools = [
  "Google Analytics",
  "SEMrush",
  "Ahrefs",
  "HubSpot",
  "Mailchimp",
  "Webflow",
  "WordPress",
  "Notion",
  "Figma",
  "Clearscope",
]

export function AboutContent() {
  return (
    <>
      <PageHeader
        label="About Me"
        title="The Person Behind the Strategy"
        description="I'm Zammad Khan - a content strategist and lead generation specialist with 3+ years of experience helping brands turn words into revenue."
      />

      {/* Story */}
      <Section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
              My Story
            </h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                I started my career in Freelancing, where I learned that every
                word carries weight. After transitioning into digital marketing,
                I discovered the intersection where compelling storytelling meets
                strategic business growth.
              </p>
              <p>
                Over the past 3 years, I&apos;ve worked with over 20 brands
                across SaaS, e-commerce, and finance - helping them build content
                engines that generate real, measurable results. My approach is
                never about volume. It&apos;s about precision, authority, and
                conversion.
              </p>
              <p>
                Today, I work exclusively with ambitious brands that understand
                the value of premium content. If you&apos;re looking for a
                partner who treats your growth like their own, we should talk.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Strengths */}
      <Section className="bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">
            Core Strengths
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-border bg-background p-6"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <s.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries & Tools */}
      <Section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Industries I Serve
              </h2>
              <ul className="flex flex-col gap-3">
                {industries.map((ind) => (
                  <li
                    key={ind}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {ind}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Tools & Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Let&apos;s Build Something Together
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Ready to work with someone who genuinely cares about your growth?
          </p>
          <Button asChild size="lg" className="mt-8 gap-2">
            <Link href="/contact">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
