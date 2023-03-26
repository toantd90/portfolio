import Link from "./Link"
import { ArrowRightIcon } from "./Icons"

const MENUS = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/skills", text: "Skills" },
  { href: "/projects", text: "Projects" },
]

export default function Menu() {
  return (
    <nav className="md:flex md:flex-grow">
      <ul className="flex flex-grow justify-end flex-wrap items-center">
        {MENUS.map(({ href, text }) => (
          <li key={href}>
            <Link href={href} text={text} />
          </li>
        ))}
        <li>
          <a
            className="text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-blue-700 ml-3 dark:hover:bg-blue-600 py-2 px-4 rounded inline-flex items-center"
            href="/contact"
          >
            <span>Contact</span>
            <ArrowRightIcon />
          </a>
        </li>
      </ul>
    </nav>
  )
}

{/* <nav
  id="mobile-nav"
  className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white transition-all duration-300 backdrop-blur shadow-lg dark:bg-neutral-900/90 ease-in-out "
  >
  <ul className="px-5 py-2">
    {MENUS.map(({ href, text }) => (
      <li key={href}>
        <a
          className="flex text-neutral-600 hover:text-neutral-900 py-2 dark:text-neutral-300 dark:hover:text-neutral-400"
          href={href}
        >
          {text}
        </a>
      </li>
    ))}
    <li>
      <a
        className="btn-sm text-neutral-200 bg-neutral-900 hover:bg-neutral-800 w-full dark:bg-blue-700 dark:hover:bg-blue-800 my-2 py-2 px-4 rounded inline-flex items-center"
        href="/contact"
      >
        <span>Contact</span>
        <ArrowRightIcon />
      </a>
    </li>
  </ul>
</nav> */}
