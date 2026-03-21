import lazy from "next/dynamic"
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"

export const dynamic = "force-static"

import Hero from "../components/Hero"

// Code-split below-fold sections — JS loaded only when needed
const About = lazy(() => import("../components/About"))
const Skills = lazy(() => import("../components/Skills"))
const Experience = lazy(() => import("../components/Experience"))
const Projects = lazy(() => import("../components/Projects"))
const Testimonials = lazy(() => import("../components/Testimonials"))
const Contact = lazy(() => import("@/components/Contact"))

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={inter.className}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Analytics />
    </div>
  )
}
