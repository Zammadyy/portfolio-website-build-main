import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"

export function CtaSection() {
  return (
    <Section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-8 py-16 text-center md:px-16 md:py-20">
          {/* Glow */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-lg font-serif text-3xl font-bold text-foreground md:text-4xl">
              Ready to Turn Content Into Your Strongest Growth Channel?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
              Let&apos;s discuss your goals and build a strategy that delivers
              real, measurable results.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
