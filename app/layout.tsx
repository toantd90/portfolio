import Script from "next/script"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { SoundProvider } from "@/context/SoundContext"

import "./globals.css"

export const metadata = {
  title: "Toan Tran - Senior Frontend Engineer",
  description: "Toan's portfolio",
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
