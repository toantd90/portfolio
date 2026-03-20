"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Timeline } from "@/components/ui/timeline"

type Job = {
  title: string
  company: string
  period: string
  location: string
  highlights: string[]
}

const experienceData: { title: string; jobs: Job[] }[] = [
  {
    title: "2024 — Now",
    jobs: [
      {
        title: "Senior Software Engineer",
        company: "Woven by Toyota",
        period: "Nov 2024 – Present",
        location: "Tokyo, Japan",
        highlights: [
          "Building software for next-generation mobility platforms at Toyota's advanced R&D subsidiary.",
        ],
      },
    ],
  },
  {
    title: "2023 — 2024",
    jobs: [
      {
        title: "Technical Lead",
        company: "ZEALS",
        period: "Apr 2024 – Nov 2024",
        location: "Tokyo, Japan",
        highlights: [
          "Directed teams of 4–8 engineers across multiple frontend initiatives.",
          "Optimized critical features through targeted data structure improvements, reducing bottlenecks and improving overall system performance.",
        ],
      },
      {
        title: "Frontend Architect & Frontend Lead",
        company: "ZEALS",
        period: "Apr 2023 – Apr 2024",
        location: "Tokyo, Japan",
        highlights: [
          "Architected real-time collaboration tools using React, Yjs, and WebSocket technology.",
          "Established frontend architecture standards and led the engineering guild.",
        ],
      },
    ],
  },
  {
    title: "2018 — 2023",
    jobs: [
      {
        title: "Senior Frontend Developer",
        company: "Rakuten",
        period: "Aug 2018 – Apr 2023",
        location: "Tokyo, Japan",
        highlights: [
          "Strengthened and scaled Rakuten Travel — Japan's leading hotel booking platform — using React.js, Redux, Next.js, and TypeScript.",
          "Contributed to both the traveler-facing site and the supplier management platform serving thousands of hotels.",
        ],
      },
    ],
  },
  {
    title: "2016 — 2018",
    jobs: [
      {
        title: "Freelancer / Full Stack Developer",
        company: "Pangara AB",
        period: "Nov 2016 – Dec 2018",
        location: "Remote",
        highlights: [
          "Built single-page applications and RESTful APIs for various clients using Angular, React, Node.js, and Express.js.",
        ],
      },
      {
        title: "Senior Full Stack Developer",
        company: "FPT Software",
        period: "Oct 2017 – Jul 2018",
        location: "Hanoi, Vietnam",
        highlights: [
          "Led JavaScript developer teams delivering enterprise web solutions.",
          "Built serverless APIs and established CI/CD pipelines to streamline deployments.",
        ],
      },
    ],
  },
  {
    title: "2015 — 2017",
    jobs: [
      {
        title: "Full Stack Developer",
        company: "Panasonic",
        period: "Oct 2015 – Sep 2017",
        location: "Hanoi, Vietnam",
        highlights: [
          "Developed WebRTC-based streaming applications for real-time video communication.",
          "Built and maintained RESTful APIs for internal enterprise systems.",
        ],
      },
    ],
  },
  {
    title: "2012 — 2015",
    jobs: [
      {
        title: "Developer",
        company: "VietIS Corporation",
        period: "Jan 2014 – Sep 2015",
        location: "Hanoi, Vietnam",
        highlights: [
          "Created Android applications and contributed to game development projects.",
        ],
      },
      {
        title: "Software Developer",
        company: "FPT Software",
        period: "Feb 2012 – Apr 2013",
        location: "Hanoi, Vietnam",
        highlights: [
          "Developed software solutions as part of cross-functional engineering teams.",
        ],
      },
    ],
  },
]

function JobCard({ job }: { job: Job }) {
  const ref = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)")
    if (!mq.matches) return // desktop: always expanded

    setExpanded(false)
    const observer = new IntersectionObserver(
      ([entry]) => setExpanded(entry.isIntersecting),
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="mb-3 sm:mb-6 last:mb-0 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 sm:p-5 hover:border-violet-800/60 hover:shadow-glow transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-0 sm:mb-3">
        <div>
          <h4 className="font-semibold text-neutral-100 text-base leading-snug">
            {job.title}
          </h4>
          <p className="text-violet-400 text-sm font-medium mt-0.5">{job.company}</p>
        </div>
        <div className="sm:text-right shrink-0">
          <p className="text-neutral-400 text-xs mt-0.5 sm:mt-0">{job.period}</p>
          <p className="text-neutral-500 text-xs mt-0.5">{job.location}</p>
        </div>
      </div>

      {/* Highlights — animated on mobile, always visible on desktop */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out sm:max-h-none sm:opacity-100 ${
          expanded ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1.5">
          {job.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-sm text-neutral-400 leading-relaxed">
              <span className="text-violet-500 shrink-0" style={{ lineHeight: "inherit" }}>▸</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Experience = () => {
  const timelineData = experienceData.map(({ title, jobs }) => ({
    title,
    content: (
      <div>
        {jobs.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>
    ),
  }))

  return (
    <section id="experience" className="bg-neutral-950">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-5 sm:px-6 pt-14 sm:pt-24"
      >
        <h2 className="bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-600 bg-clip-text text-transparent font-bold text-3xl sm:text-4xl tracking-tight mb-2">
          Experience
        </h2>
        <p className="text-neutral-400 text-sm mb-0">
          Over 10 years building products across Vietnam, remote, and Japan.
        </p>
      </motion.div>
      <Timeline data={timelineData} />
    </section>
  )
}

export default Experience
