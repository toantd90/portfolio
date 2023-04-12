import { Inter } from "next/font/google"

import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={inter.className}>
      <Hero />
      <About />
      <Skills />
    </div>
  )
}
