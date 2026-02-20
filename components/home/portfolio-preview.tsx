import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Nexus SaaS Growth Engine",
    category: "Content Strategy",
    result: "+420% organic leads in 6 months",
    tags: ["SaaS", "Content Strategy", "SEO"],
  },
  {
    title: "Oakhaven E-commerce Rebrand",
    category: "Conversion Copy",
    result: "2x landing page conversion rate",
    tags: ["E-commerce", "Copy", "Landing Pages"],
  },
  {
    title: "Elevate Finance Lead Pipeline",
    category: "Lead Generation",
    result: "1,200+ qualified leads per month",
    tags: ["Finance", "Lead Gen", "Automation"],
  },
  {
    title: "Vertex Tech Blog Authority",
    category: "SEO Content",
    result: "Page 1 rankings for 35 keywords",
    tags: ["Tech", "SEO", "Long-form"],
  },
]

export function PortfolioPreview() {
  return (
    <Section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Selected Work
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Case Studies
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="/portfolio"
              className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <p className="text-xs font-medium uppercase tracking-widest text-primary">
                    {project.category}
                  </p>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-primary/80">
                  {project.result}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all case studies <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
