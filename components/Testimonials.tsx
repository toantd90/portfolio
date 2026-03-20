"use client"

import { useRef, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { AnimatedLink } from "@/components/ui/animated-underline-text-one"

type Testimonial = {
  quote: string
  name: string
  title: string
  relationship: string
  date: string
  linkedIn: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Toan is one of the rare types of talent that a manager can come across in a workplace, a combination of both technical skills as well as soft skills. Showing passion and care towards both product as well as architecture. In his time at Zeals, Toan didn't shy away from challenges and strict timelines, always doing his at most best to match the expectations as well as showing care to the people he interacted with or the stakeholders he represented. I would highly recommend him for any company who would consider him as a potential hire.",
    name: "Or Perlman",
    title: "CTO · Omakase.ai",
    relationship: "Managed Toan directly",
    date: "Jan 2025",
    linkedIn: "https://www.linkedin.com/in/or-perlman/",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQFrSBYHsoFsWA/profile-displayphoto-shrink_100_100/B56ZVmU.ljGQAU-/0/1741178531028?e=1775692800&v=beta&t=wFNyqsbynS_AjlGVqtclz8vyayFuF-jlFX-2NLw-MEY",
  },
  {
    quote: "I had the pleasure of working closely with Toan, who served as our Tech Lead and Senior Frontend Developer. He was always willing to assist team members and took the time to review code thoroughly, ensuring both functionality and high-quality standards. What stood out the most was his proactive approach to resolving critical issues — he not only took ownership of complex challenges but also documented his solutions, allowing the entire team to follow his steps and learn from it. I highly recommend Toan for any role that values technical excellence and team-oriented leadership.",
    name: "Yu-Wen Huang",
    title: "Project Manager · Rakuten",
    relationship: "Worked on the same team",
    date: "Sep 2024",
    linkedIn: "https://www.linkedin.com/in/yuwen-huang-tw/",
    avatar: "https://media.licdn.com/dms/image/v2/C5103AQGM79OIej-CqA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1563325624622?e=1775692800&v=beta&t=sfA3H-nurJepmutRghet4Icvl1j0QhWnGcnA-zE_TF4",
  },
  {
    quote: "Toan joined my team as a fellow Frontend lead at Zeals midway through a complete rewrite of our application. Faced with an impending deadline, Toan quickly took ownership of key features, leading a team of seven frontend developers with keen project management, milestone creation, code review, and technical guidance. At the same time, he spearheaded an architectural rewrite that saved our application from severe performance issues. With Toan, you are getting a high performer who is still hungry to learn and contribute. I give my highest recommendation to anyone who has the opportunity to work with him.",
    name: "Micah Fukazawa",
    title: "Sr. Frontend Dev & Engineering Manager",
    relationship: "Worked on the same team",
    date: "Dec 2023",
    linkedIn: "https://www.linkedin.com/in/micah-fukazawa/",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQEvPXqjUKgOPA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1634549771073?e=1775692800&v=beta&t=Qq5jsuTFT1z4_qKlcU9jIUKph_4IJFYQG4TLqPNf4a0",
  },
  {
    quote: "Toan and I have had the privilege of collaborating on several projects, and I consider myself fortunate to have had him as my coworker. He consistently poured 100% effort into our team's endeavours. Toan also possesses a remarkable talent for creating top-notch technical articles that are instrumental in elevating the quality of our products. He is not just an individual contributor but a valuable team member across multiple projects, offering valuable insights into technology and contributing to the overall architectural design.",
    name: "Nguyen Le",
    title: "Senior SE & Tech Lead · GenAI/LLM",
    relationship: "Worked on the same team",
    date: "Oct 2023",
    linkedIn: "https://www.linkedin.com/in/nguyen-le-87170a1a9/",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQF5_g4GuabB1w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1670775555189?e=1775692800&v=beta&t=vaqqJ40QYwvIQWMZ_U0MT1y79CDyrB_kV_NjWh6GV5k",
  },
  {
    quote: "Toan and I had worked in the same team in 2 different projects. He is one of the persons who always thinks out of the box and tries to optimize things in a simple and reasonable way. Apart from the work, he is also a good friend and a good advisor who has experience in a lot of variant areas. Having him in the team will not only give you the work results but he could also be a good friend.",
    name: "Woravan Suthatar",
    title: "Manager · Rakuten",
    relationship: "Worked on the same team",
    date: "May 2023",
    linkedIn: "https://www.linkedin.com/in/anchvy/",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQEsDZtvXJ4psQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1680934561760?e=1775692800&v=beta&t=te0oeKwtwf1QPnmXZ127iY7qANidKVC2GRxyZvcYBJY",
  },
  {
    quote: "Toan and I worked on several projects, and I was lucky to call him my coworker. He consistently gave 100% effort to the team and played a significant role in ensuring that we completed assignments on time. He had excellent time management skills and a knack for keeping everyone calm and productive during challenging periods. Any team would be lucky to have Toan, and I couldn't recommend him more for any tech team looking for new talent.",
    name: "Quyen Do",
    title: "Head of TPO · GEM",
    relationship: "Worked on the same team",
    date: "Mar 2023",
    linkedIn: "https://www.linkedin.com/in/quyen-do/",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQGeh9jOamKswQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722398526397?e=1775692800&v=beta&t=V9tzqTVkbbWB3eHfGWxkTsK71JsN1xJtNJ55W2jHLlE",
  },
  {
    quote: "Toan is a loyal and hard working developer with great skills. He delivers as promised, always shows up on time and is easy to communicate with.",
    name: "Sebastian Österberg",
    title: "Developer & Partner · Codebrain",
    relationship: "Managed Toan directly",
    date: "Aug 2019",
    linkedIn: "https://www.linkedin.com/in/s7n/",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQEsiGel4ZLVbQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722546167032?e=1775692800&v=beta&t=hg6R0CxcDFTWAzALA8HPsBGGQ1WSxEBIrENgXftyh0w",
  },
  {
    quote: "Toan is a distinguished developer that I have worked with. His outstanding coding skills, coupled with his dedication and expert consultation skills did impress many clients. No matter if it's a large-scale project or a small one, Toan is always full of energy; he can focus on coding for hours. If you have an urgent project with strict requirements, this guy will be the best fit.",
    name: "An (Annie) Tran",
    title: "Tech Recruiter · Pangara",
    relationship: "Toan's client",
    date: "Nov 2018",
    linkedIn: "https://www.linkedin.com/in/traan07/",
    avatar: "https://media.licdn.com/dms/image/v2/D5635AQEUaY4DHha02Q/profile-framedphoto-shrink_100_100/B56Z0ETbb.HkAo-/0/1773893696134?e=1774652400&v=beta&t=yCeh90KIcqrB1VX0srn2E5f0VaZUcN8GoymrVUrChd4",
  },
  {
    quote: "A highly competent webapp developer! Conscientious to work! A good self-learner and organized person!",
    name: "Thanh Bui",
    title: "JavaScript/TypeScript Developer",
    relationship: "Worked on the same team",
    date: "Jan 2019",
    linkedIn: "https://www.linkedin.com/in/thanh-bui-6518ba54/",
    avatar: "https://media.licdn.com/dms/image/v2/C5103AQFjKR2UsG6wjQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1547384765252?e=1775692800&v=beta&t=_qvQlGMdC4NLaurqItimitBi2gPUbGMQe9XIdqxHIZU",
  },
]

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <div className="group relative flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-violet-800/60 hover:shadow-glow transition-all duration-300 h-full">
    {/* Decorative quote mark */}
    <span className="absolute top-4 right-5 text-7xl leading-none text-violet-500/10 font-serif select-none pointer-events-none">
      "
    </span>

    {/* Quote */}
    <p className="text-neutral-300 text-sm leading-relaxed relative z-10 flex-1">
      &ldquo;{t.quote}&rdquo;
    </p>

    {/* Divider */}
    <div className="h-px bg-neutral-800 group-hover:bg-violet-900/40 transition-colors duration-300" />

    {/* Author */}
    <div className="flex items-center gap-3">
      <a href={t.linkedIn} target="_blank" rel="noopener noreferrer" aria-label={`${t.name} on LinkedIn`} className="shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={t.avatar} alt={t.name} width={40} height={40}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-neutral-700 group-hover:ring-violet-700/60 transition-all duration-300" />
      </a>
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <AnimatedLink href={t.linkedIn} className="font-semibold text-neutral-100 text-sm truncate">
            {t.name}
          </AnimatedLink>
          <span className="text-xs text-neutral-600 shrink-0">{t.date}</span>
        </div>
        <span className="text-xs text-neutral-400 truncate">{t.title}</span>
        <span className="text-xs text-neutral-600">{t.relationship}</span>
      </div>
      <a href={t.linkedIn} target="_blank" rel="noopener noreferrer" aria-label={`${t.name} on LinkedIn`}
        className="shrink-0 text-neutral-600 hover:text-violet-400 transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
    </div>
  </div>
)

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: (i % 2) * 0.1 },
  }),
}

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const scrollTo = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[index] as HTMLElement
    if (!card) return
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" })
    setCurrent(index)
  }

  const prev = () => scrollTo(Math.max(0, current - 1))
  const next = () => scrollTo(Math.min(testimonials.length - 1, current + 1))

  return (
    <section id="testimonials" className="bg-neutral-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-600 bg-clip-text text-transparent font-bold text-3xl sm:text-4xl tracking-tight">
            Recommendations
          </h2>
          <p className="mt-3 text-neutral-400 text-sm">
            Kind words from colleagues and managers on{" "}
            <AnimatedLink href="https://www.linkedin.com/in/toan-tran-duc/">
              LinkedIn
            </AnimatedLink>
          </p>
        </motion.div>

        {/* Mobile: horizontal snap scroll */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            className="-mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {testimonials.map((t, i) => (
              <div key={i} className="snap-center shrink-0 w-[85vw]">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-4 px-1">
            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to recommendation ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-4 h-1.5 bg-violet-500"
                      : "w-1.5 h-1.5 bg-neutral-700 hover:bg-neutral-500"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                disabled={current === 0}
                aria-label="Previous recommendation"
                className="p-2 rounded-full border border-neutral-700 text-neutral-400 hover:border-violet-600 hover:text-violet-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <span className="text-xs text-neutral-600 tabular-nums w-10 text-center">
                {current + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                disabled={current === testimonials.length - 1}
                aria-label="Next recommendation"
                className="p-2 rounded-full border border-neutral-700 text-neutral-400 hover:border-violet-600 hover:text-violet-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop: masonry grid */}
        <div className="hidden sm:block columns-2 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="break-inside-avoid"
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
