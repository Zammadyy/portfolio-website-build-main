"use client"

import Link from "next/link"
import { ArrowRight, PenLine, Target, BarChart3, Search, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const services = [
  {
    icon: PenLine,
    title: "Content Strategy & Planning",
    description:
      "A data-driven content roadmap tailored to your audience, SEO opportunities, and business goals.",
    includes: [
      "Audience & competitor research",
      "Content audit & gap analysis",
      "Editorial calendar",
      "KPI framework",
    ],
    idealFor: "Brands building long-term organic growth",
    price: "Starting at $2,500",
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
    description:
      "Full-funnel systems designed to capture, nurture, and convert your ideal customers.",
    includes: [
      "Lead magnet creation",
      "Landing page copy",
      "Email nurture sequences",
      "Funnel optimization",
    ],
    idealFor: "SaaS and B2B companies scaling revenue",
    price: "Starting at $4,000",
  },
  {
    icon: BarChart3,
    title: "Conversion Copywriting",
    description:
      "High-impact copy for landing pages, sales pages, and product descriptions that drive action.",
    includes: [
      "Customer research & voice-of-customer analysis",
      "Landing page copy",
      "A/B test variants",
      "CTA optimization",
    ],
    idealFor: "Brands launching products or campaigns",
    price: "Starting at $1,800",
  },
  {
    icon: Search,
    title: "SEO Long-Form Content",
    description:
      "Search-optimized articles and guides that rank, educate, and convert organic traffic.",
    includes: [
      "Keyword research & topic mapping",
      "2,000-4,000 word articles",
      "On-page SEO optimization",
      "Internal linking strategy",
    ],
    idealFor: "Companies investing in organic search",
    price: "Starting at $800/article",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Strategic email campaigns and sequences that nurture subscribers and drive revenue.",
    includes: [
      "Welcome sequences",
      "Promotional campaigns",
      "Re-engagement flows",
      "Performance reporting",
    ],
    idealFor: "E-commerce and subscription businesses",
    price: "Starting at $1,500/month",
  },
  {
    icon: FileText,
    title: "Brand Messaging & Voice",
    description:
      "Clarify your brand voice, positioning, and core messaging for consistency across all channels.",
    includes: [
      "Brand voice guide",
      "Messaging framework",
      "Tagline & value propositions",
      "Tone-of-voice documentation",
    ],
    idealFor: "Startups and brands undergoing rebrand",
    price: "Starting at $3,000",
  },
]

const faqs = [
  {
    question: "How do you determine pricing for a project?",
    answer:
      "Pricing is based on scope, complexity, and timeline. After our initial consultation, I provide a detailed proposal with transparent pricing. No hidden fees, ever.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Most projects are delivered within 2-4 weeks depending on scope. Rush delivery is available for an additional fee. I always set clear timelines upfront.",
  },
  {
    question: "Do you offer retainer packages?",
    answer:
      "Yes. For clients who need ongoing content and strategy support, I offer monthly retainer packages with priority scheduling and discounted rates.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I work primarily with SaaS, e-commerce, finance, and B2B professional services. My approach adapts to any industry, but these are where I deliver the strongest results.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Every engagement starts with clear KPIs. Whether it's organic traffic, lead volume, conversion rate, or revenue impact, I track and report on the metrics that matter to your business.",
  },
  {
    question: "What does the collaboration process look like?",
    answer:
      "We start with a discovery call, then I deliver a strategy proposal. Once approved, I execute with regular check-ins and revisions included. Communication is clear and consistent throughout.",
  },
]

export function ServicesContent() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Expertise That Drives Results"
        description="Every service is designed with one goal: measurable growth for your brand. No fluff. No filler. Only strategy-driven execution."
      />

      {/* Service Cards */}
      <Section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Includes
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mb-1 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Ideal for:</span>{" "}
                    {service.idealFor}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-semibold text-primary">
                    {service.price}
                  </span>
                  <Button asChild variant="ghost" size="sm" className="gap-1 text-xs">
                    <Link href="/contact">
                      Inquire <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-card py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              FAQ
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Common Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm font-medium text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Book a free consultation call and let&apos;s map out a strategy
            tailored to your growth goals.
          </p>
          <Button asChild size="lg" className="mt-8 gap-2">
            <Link href="/contact">
              Book a Call <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
