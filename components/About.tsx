"use client"

import { motion } from "framer-motion"
import { CircleIcon } from "./Icons"
import { AnimatedLink } from "@/components/ui/animated-underline-text-one"

const FunFacts: React.ReactNode[] = [
  "Growth mindset · Lifelong learner",
  <>
    Books lover —{" "}
    <AnimatedLink href="https://puffy-anchovy-013.notion.site/546e2ca8394243faa5808b2995a1bbe2">
      see what I&apos;m reading
    </AnimatedLink>
  </>,
  <>
    Learning on{" "}
    <AnimatedLink href="https://frontendmasters.com/u/toantd/">
      Frontend Masters
    </AnimatedLink>
    , Udemy, and Coursera
  </>,
  <>
    Solving{" "}
    <AnimatedLink href="https://leetcode.com/annietran/">
      LeetCode problems
    </AnimatedLink>{" "}
    occasionally
  </>,
  "Mediocre weightlifter and runner",
  "Obsessed with productivity: meditation, cold showers, sunlight, Pomodoro",
]



const About = () => {
  return (
    <section id="about-me" className="bg-neutral-950">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-5 sm:px-6 py-24"
      >
        <h2 className="bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-600 bg-clip-text text-transparent font-bold text-3xl sm:text-4xl tracking-tight mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>
              Senior Software Engineer at{" "}
              <span className="font-semibold text-violet-400">Woven by Toyota</span>{" "}
              with{" "}
              <span className="relative inline-block mx-0.5 font-semibold text-violet-400">
                13+ years
                <CircleIcon />
              </span>{" "}
              building and evolving large-scale web applications.
            </p>
            <p>
              Core focus on <span className="text-neutral-200">frontend architecture and performance</span> — especially in React and TypeScript — helping teams build UIs that stay fast and maintainable as complexity grows.
            </p>
            <p>
              Beyond code, I care about <span className="text-neutral-200">developer experience</span>: fast feedback loops, clear standards, and mentoring engineers on design tradeoffs.
            </p>
          </div>

          {/* Fun Facts */}
          <div>
            <h3 className="text-base font-semibold text-neutral-200 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center text-white text-xs">
                ⚡
              </span>
              Fun Facts
            </h3>
            <ul className="space-y-2.5">
              {FunFacts.map((fact, index) => (
                <li
                  key={`fun-fact-${index}`}
                  className="flex items-start gap-2 text-sm text-neutral-400"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
