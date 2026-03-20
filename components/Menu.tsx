"use client"

import Link from "./Link"
import { ArrowRightIcon } from "./Icons"
import { useHoverSound } from "@/hooks/useHoverSound"

import styles from "./menu.module.css"

const MENUS = [
  { href: "/", text: "Home" },
  { href: "#about-me", text: "About" },
  { href: "#skills", text: "Skills" },
  { href: "#experience", text: "Experience" },
  { href: "#projects", text: "Projects" },
  { href: "#testimonials", text: "Recommendations" },
]

type Props = {
  isMenuActive: boolean
  onMenuClick: () => void
}

export default function Menu({ isMenuActive, onMenuClick }: Props) {
  const playSound = useHoverSound()
  return (
    <nav
      id="mobile-nav"
      className={`md:opacity-100 md:visible ${isMenuActive ? styles.active : ""} ${
        isMenuActive ? "bg-neutral-950/95" : ""
      } ${
        styles.nav
      } absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll transition-all duration-300 ease-in-out md:flex-grow  md:pb-0 md:w-auto md:overflow-hidden md:h-auto md:static`}
    >
      <ul className="px-5 py-2 md:flex flex-grow justify-end flex-wrap items-center">
        {MENUS.map(({ href, text }) => (
          <li key={href}>
            <Link href={href} text={text} onClick={onMenuClick} onMouseEnter={playSound} />
          </li>
        ))}
        <li>
          <a
            className="btn-sm text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 w-full my-2 py-2 px-4 rounded-full inline-flex items-center shadow-glow transition-all duration-200"
            href="#contact"
            onClick={onMenuClick}
            onMouseEnter={playSound}
          >
            <span>Contact</span>
            <ArrowRightIcon />
          </a>
        </li>
      </ul>
    </nav>
  )
}
