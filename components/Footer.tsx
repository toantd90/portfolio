"use client"

import { useHoverSound } from "@/hooks/useHoverSound"

const Footer = () => {
  const playSound = useHoverSound()
  return (
  <footer className="border-t border-neutral-800">
    <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          © 2026 Toan Tran. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-sm text-neutral-500">
          <a
            href="https://github.com/toantd90"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playSound}
            className="hover:text-violet-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/toan-tran-duc/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playSound}
            className="hover:text-violet-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://dev.to/toantd90"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playSound}
            className="hover:text-violet-400 transition-colors"
          >
            Dev.to
          </a>
        </div>
      </div>
    </div>
  </footer>
)

}

export default Footer
