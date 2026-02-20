"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { cn } from "@/lib/utils"

const categories = ["All", "Content Strategy", "Lead Generation", "Conversion Copy", "SEO Content"]

const caseStudies = [
  {
    title: "Nexus SaaS Growth Engine",
    category: "Content Strategy",
    context:
      "Nexus is a B2B SaaS platform in the project management space with strong product-market fit but no content engine.",
    problem:
      "Zero organic traffic strategy. All growth was paid, making CAC unsustainable at scale.",
    strategy:
      "Built a pillar-cluster content architecture targeting high-intent keywords, launched a weekly thought leadership program, and created gated lead magnets for each funnel stage.",
    deliverables: [
      "12-month content strategy",
      "48 SEO-optimized articles",
      "4 gated whitepapers",
      "Email nurture sequences",
    ],
    results: [
      "+420% organic leads in 6 months",
      "12 Page 1 keyword rankings",
      "38% reduction in overall CAC",
    ],
  },
  {
    title: "Oakhaven E-commerce Rebrand",
    category: "Conversion Copy",
    context:
      "Oakhaven is a premium DTC home goods brand undergoing a full rebrand and website relaunch.",
    problem:
      "Existing copy was generic and didn't reflect the brand's premium positioning. Conversion rates were stagnant.",
    strategy:
      "Conducted voice-of-customer research, redefined brand messaging, and rewrote all key landing pages with conversion-optimized copy and clear CTAs.",
    deliverables: [
      "Brand messaging framework",
      "Homepage and 6 landing pages",
      "Product description templates",
      "A/B test variants",
    ],
    results: [
      "2x landing page conversion rate",
      "+65% average order value",
      "Brand voice consistency across 40+ pages",
    ],
  },
  {
    title: "Elevate Finance Lead Pipeline",
    category: "Lead Generation",
    context:
      "Elevate Finance is a fintech startup offering B2B lending solutions with a strong product but weak pipeline.",
    problem:
      "Lead generation was entirely dependent on referrals. No scalable system existed for consistent pipeline growth.",
    strategy:
      "Designed a full-funnel lead gen system with targeted content, gated resources, optimized landing pages, and automated email nurture flows.",
    deliverables: [
      "3 lead magnets",
      "Landing page copy for each",
      "5-part email nurture sequence",
      "LinkedIn content strategy",
    ],
    results: [
      "1,200+ qualified leads per month",
      "340% ROI within first quarter",
      "Sales cycle reduced by 22%",
    ],
  },
  {
    title: "Vertex Tech Blog Authority",
    category: "SEO Content",
    context:
      "Vertex is a cybersecurity company wanting to establish thought leadership through organic search.",
    problem:
      "No blog presence. Competitors dominated search for all key industry terms.",
    strategy:
      "Created a topic cluster strategy around 5 core pillars, produced long-form authoritative guides, and built internal linking architecture.",
    deliverables: [
      "Topic cluster strategy",
      "20 long-form articles (3,000+ words each)",
      "5 pillar pages",
      "Internal linking framework",
    ],
    results: [
      "Page 1 rankings for 35 keywords",
      "+280% organic traffic in 9 months",
      "Featured snippets for 8 queries",
    ],
  },
  {
    title: "Bloom Health Membership Launch",
    category: "Lead Generation",
    context:
      "Bloom Health is a wellness platform launching a new premium membership tier.",
    problem:
      "Needed to generate 500 founding members within 60 days of launch with no existing waitlist.",
    strategy:
      "Built a pre-launch waitlist funnel with urgency-driven copy, an email launch sequence, and social proof integration throughout the funnel.",
    deliverables: [
      "Waitlist landing page",
      "10-email launch sequence",
      "Social media copy",
      "Testimonial integration",
    ],
    results: [
      "672 founding members in 45 days",
      "58% email open rate on launch day",
      "$134K revenue at launch",
    ],
  },
  {
    title: "Atlas Consulting Brand Voice",
    category: "Content Strategy",
    context:
      "Atlas is a management consulting firm that needed unified messaging across a growing team of 30+ consultants.",
    problem:
      "Inconsistent brand voice across proposals, website, and client communications was eroding trust.",
    strategy:
      "Developed a comprehensive brand voice guide, messaging hierarchy, and content templates that the entire team could use consistently.",
    deliverables: [
      "Brand voice guide",
      "Messaging framework",
      "Email & proposal templates",
      "Team training workshop",
    ],
    results: [
      "100% team adoption in 6 weeks",
      "Client satisfaction up 24%",
      "Proposal win rate increased by 18%",
    ],
  },
]

export function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeCategory)

  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Work That Speaks for Itself"
        description="Real projects, real strategies, real results. Explore how I've helped brands grow through content and lead generation."
      />

      <Section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Case Studies */}
          <div className="flex flex-col gap-8">
            {filtered.map((cs) => (
              <div
                key={cs.title}
                className="rounded-lg border border-border bg-card p-6 md:p-8"
              >
                <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {cs.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground">
                      {cs.title}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Context
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {cs.context}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Problem
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {cs.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Strategy
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {cs.strategy}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Deliverables
                      </h4>
                      <ul className="flex flex-col gap-1.5">
                        {cs.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Results
                      </h4>
                      <ul className="flex flex-col gap-1.5">
                        {cs.results.map((r) => (
                          <li
                            key={r}
                            className="text-sm font-medium text-primary"
                          >
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <Button asChild variant="ghost" size="sm" className="gap-1.5 text-xs">
                    <Link href="/contact">
                      Discuss a Similar Project <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
