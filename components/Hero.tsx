"use client"

import { SplineScene } from "@/components/ui/splite"
import { AnimatedUnderlineText } from "@/components/ui/animated-underline-text-one"
import { TubesBackground } from "@/components/ui/neon-flow"
import { useHoverSound } from "@/hooks/useHoverSound"

type SocialLinkProps = {
  href: string
  label: string
  onMouseEnter?: () => void
  children: React.ReactNode
}

const SocialLink = ({ href, label, onMouseEnter, children }: SocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    title={label}
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={onMouseEnter}
    className="p-2 rounded-full text-neutral-400 hover:text-violet-400 hover:bg-violet-950/50 transition-all duration-200"
  >
    {children}
  </a>
)

const Hero = () => {
  const playSound = useHoverSound()
  return (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
    {/* Neon flow background */}
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <TubesBackground className="w-full h-full" enableClickInteraction={false} />
    </div>

    <div className="relative w-full px-5 py-24 mx-auto max-w-6xl sm:px-6 md:py-32 z-10">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">

        {/* Text content */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left max-w-xl">

          {/* Badge */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border border-indigo-800/60 bg-indigo-950/40 text-indigo-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              He/Him · Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer"
          >
            Toan Tran
          </h1>

          {/* Role */}
          <p
            className="text-xl sm:text-2xl font-semibold text-neutral-300 animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            <AnimatedUnderlineText delay={0.25} underlineClassName="text-indigo-400">
              Senior Software Engineer
            </AnimatedUnderlineText>
          </p>

          {/* Description */}
          <p
            className="text-neutral-400 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            13+ years designing and scaling high-performance web systems. Focused on frontend architecture, performance, and cross-team technical alignment that delivers measurable impact.
          </p>

          {/* Social links */}
          <div
            className="flex items-center gap-1 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            <SocialLink href="https://github.com/toantd90" label="Toan's GitHub" onMouseEnter={playSound}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2v3.5" />
              </svg>
            </SocialLink>

            <SocialLink href="https://twitter.com/toantd90" label="Toan's Twitter" onMouseEnter={playSound}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737s-2.643 2.06-2.62 3.737v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c-.002-.249 1.51-2.772 1.818-4.013z" />
              </svg>
            </SocialLink>

            <SocialLink href="https://leetcode.com/annietran/" label="Toan's LeetCode" onMouseEnter={playSound}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z" />
                <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z" />
              </svg>
            </SocialLink>

            <SocialLink href="https://dev.to/toantd90" label="Toan's Dev.to" onMouseEnter={playSound}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z" />
              </svg>
            </SocialLink>

            <SocialLink href="https://www.linkedin.com/in/toan-tran-duc/" label="Toan's LinkedIn" onMouseEnter={playSound}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </SocialLink>

            <SocialLink href="https://stackoverflow.com/users/3766872/toan-tran" label="Toan's Stack Overflow" onMouseEnter={playSound}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" />
                <path d="M8 16h8" />
                <path d="M8.322 12.582l7.956.836" />
                <path d="M8.787 9.168l7.826 1.664" />
                <path d="M10.046 5.764l7.608 2.472" />
              </svg>
            </SocialLink>
          </div>

          {/* CTAs */}
          <div
            className="flex items-center gap-3 flex-wrap justify-center md:justify-start animate-fade-in-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#projects"
              onMouseEnter={playSound}
              className="px-6 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 shadow-glow hover:shadow-glow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onMouseEnter={playSound}
              className="px-6 py-2.5 rounded-full font-medium text-sm border border-neutral-700 text-neutral-200 hover:border-violet-500 hover:text-violet-400 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div
          className="relative flex-shrink-0 animate-fade-in hidden md:block"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] rounded-3xl overflow-hidden">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
)
}

export default Hero
