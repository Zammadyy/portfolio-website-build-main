import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Premium Content & Lead Generation
            </span>
          </div>

          <h1 className="animate-fade-up animation-delay-100 max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Words that{" "}
            <span className="text-primary">Convert</span>.{" "}
            <br className="hidden md:block" />
            Strategy that{" "}
            <span className="text-primary">Scales</span>.
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I help ambitious brands craft high-converting content and build lead
            generation systems that turn attention into revenue.
          </p>

          <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Book a Call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">View My Work</Link>
            </Button>
          </div>

          {/* Trust line */}
          <p className="animate-fade-up animation-delay-400 mt-16 text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by 20+ brands across SaaS, E-commerce & Finance
          </p>
        </div>
      </div>
    </section>
  )
}
