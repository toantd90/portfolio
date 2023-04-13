import Link from "./Link"
import { ArrowRightIcon } from "./Icons"

import useDarkMode from "@/hooks/useDarkMode"

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
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <nav
      id="mobile-nav"
      className={`${isMenuActive ? styles.active : ""} ${
        styles.nav
      } absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white transition-all duration-300 backdrop-blur shadow-lg dark:bg-neutral-900/90 ease-in-out md:flex-grow md:opacity-100 md:visible md:pb-0 md:w-auto md:overflow-hidden md:h-auto md:static md:bg-transparent md:shadow-none`}
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
        <li>
          {colorTheme === "light" ? (
            <svg
              onClick={() => setTheme("light")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setTheme("dark")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </li>
      </ul>
    </nav>
  )
}
