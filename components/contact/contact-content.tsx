"use client"

import { useState } from "react"
import { Send, CheckCircle2, MessageSquare, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"

const projectTypes = [
  "Content Strategy",
  "Lead Generation",
  "Conversion Copywriting",
  "SEO Content",
  "Email Marketing",
  "Brand Messaging",
  "Other",
]

const budgetRanges = [
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "Not sure yet",
]

const processSteps = [
  {
    icon: MessageSquare,
    title: "Submit Your Brief",
    description: "Fill out the form with your project details and goals.",
  },
  {
    icon: Clock,
    title: "Consultation Call",
    description: "I'll review your brief and schedule a 30-minute strategy call.",
  },
  {
    icon: Shield,
    title: "Custom Proposal",
    description: "Receive a tailored proposal with scope, timeline, and pricing.",
  },
]

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  })

  function validate(): boolean {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (submitted) {
    return (
      <>
        <PageHeader label="Contact" title="Message Sent" />
        <Section className="pb-24">
          <div className="mx-auto max-w-md px-6 text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">
              Thank You!
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your message has been received. I typically respond within 24
              hours. In the meantime, feel free to check out my latest work.
            </p>
            <Button
              onClick={() => {
                setSubmitted(false)
                setFormData({
                  name: "",
                  email: "",
                  company: "",
                  projectType: "",
                  budget: "",
                  message: "",
                })
              }}
              variant="outline"
              className="mt-6"
            >
              Send Another Message
            </Button>
          </div>
        </Section>
      </>
    )
  }

  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's Start a Conversation"
        description="Tell me about your project and goals. I'll get back to you within 24 hours with next steps."
      />

      <Section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="mb-1.5 block text-sm font-medium text-foreground">
                    Company / Niche
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company or industry"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label className="mb-1.5 block text-sm font-medium text-foreground">
                      Project Type
                    </Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(v) => handleChange("projectType", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="mb-1.5 block text-sm font-medium text-foreground">
                      Budget Range
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(v) => handleChange("budget", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, goals, and timeline..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="gap-2 self-start">
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-6 font-serif text-lg font-bold text-foreground">
                  What Happens Next
                </h3>
                <div className="flex flex-col gap-6">
                  {processSteps.map((step, i) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <step.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="mb-0.5 text-sm font-semibold text-foreground">
                          {i + 1}. {step.title}
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Prefer email?
                  </p>
                  <a
                    href="mailto:hello@zammadkhan.com"
                    className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    hello@zammadkhan.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
