import { default as NextLink } from "next/link"

type LinkProps = {
  href: string
  text: string
  onClick: () => void
  onMouseEnter?: () => void
}

export default function Link({ href, text, onClick, onMouseEnter }: LinkProps) {
  return (
    <NextLink
      className="flex text-neutral-400 hover:text-violet-400 py-2 md:py-3 md:px-3 transition-colors duration-200"
      href={href}
      onClick={() => onClick()}
      onMouseEnter={onMouseEnter}
    >
      {text}
    </NextLink>
  )
}
