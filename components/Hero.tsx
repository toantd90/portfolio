import Image from "next/image"
import { UnderlineIcon } from "./Icons"

const Hero = () => (
  <div className="flex flex-col-reverse justify-between items-center  px-5 py-24 mx-auto max-w-6xl md:flex-row md:py-32 sm:pb-32 sm:pt-24 ">
    <div className="flex justify-center flex-col place-items-center">
      <div className="flex place-items-center">
        <h1 className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-left animate-text">
          Toan Tran
        </h1>
        <span className="ml-2 mt-2">(He/Him)</span>
      </div>

      <ul role="list" className="grid gap-4 grid-flow-col items-center max-w-md">
        <li>
          <a
            href="https://github.com/toantd90"
            className="px-2"
            aria-label="Toan's github"
            title="Toan's github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-black hover:stroke-black dark:hover:fill-current dark:hover:stroke-current stroke-2 stroke-black dark:stroke-gray-500 fill-none w-9 h-9"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/toantd90"
            className="px-2"
            aria-label="Toan's twitter"
            title="Toan's twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-black hover:stroke-black dark:hover:fill-current dark:hover:stroke-current stroke-2 stroke-black dark:stroke-gray-500 fill-none w-9 h-9"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/annietran/"
            className="px-2"
            aria-label="Toan's leetcode"
            title="Toan's leetcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-black hover:stroke-black dark:hover:fill-current dark:hover:stroke-current stroke-1 stroke-black dark:stroke-gray-500 fill-none w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path>
              <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/toantd90"
            className="icon-button"
            aria-label="Toan's dev.to page"
            title="Toan's dev.to page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-current hover:stroke-current stroke-1 stroke-gray-500 fill-none w-9 h-9"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z"
                fill="none"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/toan-tran-duc/"
            className="px-2"
            aria-label="Toan's LinkedIn"
            title="Toan's LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-current hover:stroke-current stroke-2 stroke-gray-500 fill-none w-9 h-9"
              viewBox="0 0 50 50"
            >
              <path d="M 8 3.0117188 C 6.3243556 3.0117186 4.8517223 3.4556501 3.7636719 4.3105469 C 2.6756214 5.1654436 2.0117188 6.4640138 2.0117188 7.9003906 C 2.0117188 10.773144 4.6048 12.988281 8 12.988281 C 9.7412258 12.988281 11.234704 12.477413 12.304688 11.5625 C 13.374671 10.647587 13.988281 9.3224486 13.988281 7.9003906 A 0.98809878 0.98809878 0 0 0 13.986328 7.8554688 C 13.861647 5.1114423 11.373244 3.0117188 8 3.0117188 z M 8 4.9882812 C 10.612452 4.9882814 11.919564 6.27684 12.007812 7.9199219 C 12.002386 8.7882363 11.669223 9.5069667 11.019531 10.0625 C 10.364515 10.622587 9.3587742 11.011719 8 11.011719 C 5.3952 11.011719 3.9882813 9.627637 3.9882812 7.9003906 C 3.9882812 7.0367674 4.3243786 6.3853376 4.9863281 5.8652344 C 5.6482777 5.3451311 6.6756444 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.699219 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45.099609 A 1.0001 1.0001 0 0 0 18 46.099609 L 28 46.099609 A 1.0001 1.0001 0 0 0 29 45.099609 L 29 29.099609 L 29 28.800781 L 29 28.5 C 29 26.533333 30.533333 25 32.5 25 C 34.466667 25 36 26.533333 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.855907 46.781684 20.586343 44.736328 18.361328 C 42.690972 16.136313 39.844829 15 36.800781 15 C 32.892578 15 30.522592 16.421774 29 17.583984 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.699219 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.599609 A 1.0001 1.0001 0 0 0 28.736328 20.275391 C 28.736328 20.275391 31.737145 17 36.800781 17 C 39.356734 17 41.609028 17.914859 43.263672 19.714844 C 44.918316 21.514828 46 24.244093 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.6949 25.257915 35.387842 23 32.5 23 C 29.466667 23 27 25.466667 27 28.5 L 27 28.800781 L 27 29.099609 L 27 44.099609 L 19 44.099609 L 19 17 z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/3766872/toan-tran"
            className="px-2"
            aria-label="Toan's StackOverflow"
            title="Toan's StackOverflow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-current hover:stroke-current stroke-2 stroke-gray-500 fill-none w-9 h-9"
              viewBox="0 0 120 120"
            >
              <path d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z" />
              <path d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z" />
            </svg>
          </a>
        </li>
      </ul>
        <strong
          id="patterns-headline"
          className="text-xl text-center text-neutral-600 mb-8 dark:text-neutral-200"
        >
          Front-End <span className="relative">Software Engineer <UnderlineIcon className="absolute"/></span>
        </strong>
    </div>
    <Image
      className="mb-5"
      src="/images/joy-developer.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  </div>
)

export default Hero
