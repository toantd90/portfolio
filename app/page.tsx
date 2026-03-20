import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"

export const dynamic = "force-static"

import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "@/components/Contact"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={inter.className}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Analytics />
    </div>
  )
}
