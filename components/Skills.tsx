import Image from "next/image"

const skills = [
  {
    section: "Programming Languages",
    technologies: [
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        text: "Javascript",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        text: "TypeScript",
      },
    ],
  },
  {
    section: "Web Development Frameworks & Libraries",
    technologies: [
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        text: "React",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
        text: "Next.js",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        text: "Tailwind",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
        text: "Node.js",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        text: "Express",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        text: "Redux",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        text: "HTML",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        text: "CSS",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        text: "Sass",
      },
    ],
  },
  {
    section: "Tools",
    technologies: [
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        text: "Jest",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        text: "Webpack",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        text: "VS Code",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        text: "Git",
      },
      {
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        text: "Github",
      },
    ],
  },
]

const Skills = () => (
  <div id="skills" className="text-white mx-auto max-w-screen-xl py-32 sm:py-8">
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      <h1 className="block bg-clip-text text-transparent font-bold text-2xl sm:text-3xl lg:text-3xl tracking-tight bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
        Skills
      </h1>
      {skills.map(({ section, technologies }, sectionIndex) => (
        <div key={`section-${sectionIndex}`} className="my-9">
          <p className="mt-2 tracking-tigh text-xl text-neutral-600 dark:text-neutral-200">{section}</p>
          <dl className="grid grid-cols-2 gap-8 mt-4 md:space-y-0 md:grid-cols-3 xl:grid-cols-5 md:gap-x-8 md:gap-y-10 md:mt-8">
            {technologies.map(({ imageUrl, text }, index) => (
              <div key={`technology-${index}`} className="relative">
                <dt className="flex items-center">
                  <div className="flex items-center justify-center absolute h-8 w-8 rounded-md bg-white text-white md:h-12 md:w-12">
                    <Image
                      className="rounded-md"
                      alt="javascript"
                      width={46}
                      height={46}
                      src={imageUrl}
                    />
                  </div>
                  <p className="ml-10 text-lg leading-6 font-medium text-neutral-600 dark:text-neutral-200 md:ml-16">
                    {text}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  </div>
)

export default Skills
