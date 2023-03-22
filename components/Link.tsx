import { default as NextLink } from 'next/link';

type LinkProps = {
  href: string;
  text: string;
};

export default function Link({ href, text }: LinkProps) {
  return (
    <NextLink
      className="font-medium text-neutral-600 hover:text-neutral-900 px-3 py-3 flex items-center transition duration-150 ease-in-out dark:text-neutral-400 dark:hover:text-neutral-500 active:ring active:ring-blue-600 active:rounded-md"
      href={href}
    >
      {text}
    </NextLink>
  );
}
