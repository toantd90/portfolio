"use client"

import { useState } from "react"
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
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="mb-3 sm:mb-6 last:mb-0 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 sm:p-5 hover:border-violet-800/60 hover:shadow-glow transition-all duration-300">
      <div className="flex items-start justify-between gap-2 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="font-heading font-semibold text-neutral-100 text-base leading-snug">
            {job.title}
          </h4>
          <p className="text-violet-400 text-sm font-medium mt-0.5">{job.company}</p>
          <div className="flex flex-wrap gap-x-3 mt-1">
            <p className="text-neutral-400 text-xs">{job.period}</p>
            <p className="text-neutral-500 text-xs">{job.location}</p>
          </div>
        </div>

        {/* Expand toggle — mobile only */}
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? "Collapse details" : "Expand details"}
          className="sm:hidden shrink-0 mt-0.5 p-1.5 rounded-full border border-neutral-700 text-neutral-400 hover:border-violet-600 hover:text-violet-400 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Highlights — collapsible on mobile, always visible on desktop */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out sm:max-h-none sm:opacity-100 ${
          expanded ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 sm:mt-3"
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
        <h2 className="font-heading text-neutral-100 font-bold text-3xl sm:text-4xl tracking-tight mb-2">
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
