"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useHoverSound } from "@/hooks/useHoverSound"

const projects = [
  {
    title: "Rakuten Travel — Supplier Site",
    description:
      "A user-friendly platform that streamlines travel bookings, offering tools for inventory management, booking tracking, and performance insights all in one place.",
    image: "/images/supplier.png",
    href: "https://manage.travel.rakuten.com/",
  },
  {
    title: "Rakuten Travel — Traveler Site",
    description:
      "Japan's leading hotel booking platform. Find and book quality accommodations for your next trip. Rakuten Travel makes it easy to find the perfect stay.",
    image: "/images/traveler.png",
    href: "https://travel.rakuten.com/",
  },
]

const Projects = () => {
  const playSound = useHoverSound()
  return (
    <section id="projects" className="bg-neutral-950">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-5 sm:px-6 py-24"
      >
        <h2 className="bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-600 bg-clip-text text-transparent font-bold text-3xl sm:text-4xl tracking-tight mb-12">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(({ title, description, image, href }) => (
            <article
              key={href}
              className="group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-800/50 overflow-hidden hover:border-violet-800/60 hover:shadow-glow transition-all duration-300"
            >
              {/* Image */}
              <a
                href={href}
                className="block overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
                onMouseEnter={playSound}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-800">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={title}
                    src={image}
                    width={600}
                    height={338}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="font-semibold text-lg text-neutral-100 leading-snug group-hover:text-violet-400 transition-colors duration-200">
                  <a href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={playSound}>
                    {title}
                  </a>
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed flex-1">
                  {description}
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playSound}
                  className="self-start inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors mt-1"
                >
                  Visit site
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17L17 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
