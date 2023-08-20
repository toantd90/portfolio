import Link from "./Link"
import { ArrowRightIcon } from "./Icons"

import styles from "./menu.module.css"

const MENUS = [
  { href: "/", text: "Home" },
  { href: "#about-me", text: "About" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
]

type Props = {
  isMenuActive: boolean
  onMenuClick: () => void
}

export default function Menu({ isMenuActive, onMenuClick }: Props) {
  return (
    <nav
      id="mobile-nav"
      className={`backdrop-blur md:opacity-100 md:visible ${isMenuActive ? styles.active : ""} ${
        styles.nav
      } absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll transition-all duration-300 ease-in-out md:flex-grow  md:pb-0 md:w-auto md:overflow-hidden md:h-auto md:static`}
    >
      <ul className="px-5 py-2 md:flex flex-grow justify-end flex-wrap items-center">
        {MENUS.map(({ href, text }) => (
          <li key={href}>
            <Link href={href} text={text} onClick={onMenuClick} />
          </li>
        ))}
        <li>
          <a
            className="btn-sm text-neutral-200 bg-neutral-900 hover:bg-neutral-800 w-full dark:bg-blue-700 dark:hover:bg-blue-800 my-2 py-2 px-4 rounded inline-flex items-center"
            href="#contact"
            onClick={onMenuClick}
          >
            <span>Contact</span>
            <ArrowRightIcon />
          </a>
        </li>
      </ul>
    </nav>
  )
}
