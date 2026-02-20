import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="mx-auto max-w-md px-6 text-center">
        <p className="mb-4 font-mono text-6xl font-bold text-primary/30">
          404
        </p>
        <h1 className="mb-3 font-serif text-3xl font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Button asChild className="gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
