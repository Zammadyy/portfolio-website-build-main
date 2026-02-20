import { Section } from "@/components/section"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep dive into your business, audience, and goals. I audit what exists and map opportunities.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "A custom content and lead gen blueprint built around your specific growth objectives.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "High-quality content and systems delivered on time, every time. No fluff, only assets that move the needle.",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Data-driven iteration. I analyze performance and refine for compounding results over time.",
  },
]

export function ProcessSection() {
  return (
    <Section className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            A Proven Process
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="mb-3 block font-mono text-3xl font-bold text-primary/20">
                {step.number}
              </span>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
