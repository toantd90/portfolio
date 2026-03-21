import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { SoundProvider } from "@/context/SoundContext"

import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://toantran.dev"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Toan Tran - Senior Frontend Engineer",
  description:
    "Senior Software Engineer with 13+ years building high-performance web applications. Focused on frontend architecture, React, and TypeScript.",
  openGraph: {
    title: "Toan Tran - Senior Frontend Engineer",
    description:
      "Senior Software Engineer with 13+ years building high-performance web applications. Focused on frontend architecture, React, and TypeScript.",
    url: siteUrl,
    siteName: "Toan Tran",
    images: [
      {
        url: "/images/joy-developer.png",
        width: 530,
        height: 530,
        alt: "Toan Tran - Senior Frontend Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toan Tran - Senior Frontend Engineer",
    description:
      "Senior Software Engineer with 13+ years building high-performance web applications.",
    images: ["/images/joy-developer.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SoundProvider>
          <Header />
          {children}
          <Footer />
        </SoundProvider>
        <Script src="/theme.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
