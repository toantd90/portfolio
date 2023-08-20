import Script from "next/script"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

import "./globals.css"

export const metadata = {
  title: "Toan Tran - Senior Frontend Engineer",
  description: "Toan's portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Script src="/theme.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
