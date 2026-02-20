import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: "Zammad Khan | Content Writer & Lead Generation Specialist",
    template: "%s | Zammad Khan",
  },
  description:
    "Premium content writing and lead generation services that drive measurable results. Transform your brand voice and convert visitors into qualified leads.",
  openGraph: {
    title: "Zammad Khan | Content Writer & Lead Generation Specialist",
    description:
      "Premium content writing and lead generation services that drive measurable results.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zammad Khan | Content Writer & Lead Generation Specialist",
    description:
      "Premium content writing and lead generation services that drive measurable results.",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#f5efe6",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
