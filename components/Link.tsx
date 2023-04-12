import { default as NextLink } from "next/link"

type LinkProps = {
  href: string
  text: string
  onClick: () => void
}

export default function Link({ href, text, onClick }: LinkProps) {
  return (
    <NextLink
      className="flex text-neutral-600 hover:text-neutral-900 py-2 dark:text-neutral-300 dark:hover:text-neutral-400 md:py-3 md:px-3"
      href={href}
      onClick={() => onClick()}
    >
      {text}
    </NextLink>
  )
}
