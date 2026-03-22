"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useHoverSound } from "@/hooks/useHoverSound"

type Project = {
  title: string
  description: string
  image?: string
  href: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Rakuten Travel — Traveler Site",
    description:
      "Japan's leading hotel booking platform. Find and book quality accommodations for your next trip. Rakuten Travel makes it easy to find the perfect stay.",
    image: "/images/traveler.png",
    href: "https://travel.rakuten.com/",
    featured: true,
  },
  {
    title: "Rakuten Travel — Supplier Site",
    description:
      "A user-friendly platform that streamlines travel bookings, offering tools for inventory management, booking tracking, and performance insights all in one place.",
    image: "/images/supplier.png",
    href: "https://manage.travel.rakuten.com/",
  },
  {
    title: "This Portfolio",
    description:
      "Personal portfolio built with Next.js 15, Spline 3D, Tailwind CSS, and Framer Motion.",
    href: "https://github.com/toantd90/portfolio",
  },
]

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" />
    <path d="M7 17L17 7" />
  </svg>
)

const Projects = () => {
  const playSound = useHoverSound()
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="bg-[#0d0b14]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-24"
      >
        <h2 className="font-heading text-neutral-100 font-bold text-3xl sm:text-4xl tracking-tight mb-8 sm:mb-12">
          Projects
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {/* Featured card */}
          {featured && (
            <article className="group rounded-2xl border border-indigo-900/60 bg-violet-950/10 overflow-hidden hover:border-violet-700/60 hover:shadow-glow transition-all duration-300 flex flex-col sm:flex-row">
              {/* Image */}
              <a
                href={featured.href}
                className="block overflow-hidden shrink-0 sm:w-[42%]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={featured.title}
                onMouseEnter={playSound}
              >
                <div className="relative h-48 sm:h-full overflow-hidden bg-neutral-800">
                  {featured.image && (
                    <Image
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={featured.title}
                      src={featured.image}
                      width={600}
                      height={400}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-7 gap-3 min-w-0 justify-center">
                <span className="inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-semibold border border-violet-700/50 bg-violet-950/40 text-violet-300">
                  Featured
                </span>
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-neutral-100 leading-snug group-hover:text-violet-400 transition-colors duration-200">
                  <a href={featured.href} target="_blank" rel="noopener noreferrer" onMouseEnter={playSound}>
                    {featured.title}
                  </a>
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {featured.description}
                </p>
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playSound}
                  className="self-start inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Visit site
                  <ExternalIcon />
                </a>
              </div>
            </article>
          )}

          {/* Mini grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {rest.map(({ title, description, image, href }) => (
              <article
                key={href}
                className="group flex flex-row sm:flex-col rounded-2xl border border-neutral-800 bg-neutral-800/50 overflow-hidden hover:border-violet-800/60 hover:shadow-glow transition-all duration-300"
              >
                {/* Image / placeholder */}
                <a
                  href={href}
                  className="block overflow-hidden shrink-0 w-28 sm:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  onMouseEnter={playSound}
                >
                  <div className="relative h-full sm:h-auto sm:aspect-[16/9] overflow-hidden bg-neutral-800">
                    {image ? (
                      <Image
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        alt={title}
                        src={image}
                        width={600}
                        height={338}
                      />
                    ) : (
                      <div className="w-full h-full min-h-[80px] sm:min-h-0 bg-gradient-to-br from-indigo-950 to-violet-950 flex items-center justify-center">
                        <span className="text-violet-600 text-xs font-semibold tracking-wide uppercase">Project</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 sm:p-5 gap-2 sm:gap-3 min-w-0">
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-neutral-100 leading-snug group-hover:text-violet-400 transition-colors duration-200">
                    <a href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={playSound}>
                      {title}
                    </a>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed flex-1 line-clamp-3 sm:line-clamp-none">
                    {description}
                  </p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={playSound}
                    className="self-start inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Visit site
                    <ExternalIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
