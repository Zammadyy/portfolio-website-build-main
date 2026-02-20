import { Hero } from "@/components/home/hero"
import { ServicesSnapshot } from "@/components/home/services-snapshot"
import { ProofSection } from "@/components/home/proof-section"
import { PortfolioPreview } from "@/components/home/portfolio-preview"
import { ProcessSection } from "@/components/home/process-section"
import { CtaSection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSnapshot />
      <ProofSection />
      <PortfolioPreview />
      <ProcessSection />
      <CtaSection />
    </>
  )
}
