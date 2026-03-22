"use client"

import { motion } from "framer-motion"

type Skill = { text: string; imageUrl?: string; core?: boolean }
type SkillSection = { section: string; technologies: Skill[] }

const skills: SkillSection[] = [
  {
    section: "Languages",
    technologies: [
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", text: "JavaScript", core: true },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", text: "TypeScript", core: true },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", text: "Go" },
    ],
  },
  {
    section: "Frameworks & Libraries",
    technologies: [
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", text: "React.js", core: true },
      { imageUrl: "https://cdn.simpleicons.org/nextdotjs/ffffff", text: "Next.js", core: true },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg", text: "Node.js", core: true },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", text: "TailwindCSS", core: true },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", text: "Redux" },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", text: "Material UI" },
      { text: "TanStack Query", imageUrl: "/icons/react-query.svg" },
      { text: "tRPC", imageUrl: "https://api.iconify.design/logos:trpc.svg" },
      { text: "Zustand", imageUrl: "/icons/zustand.svg" },
      { text: "Zod", imageUrl: "/icons/zod.svg" },
      { text: "react-hook-form", imageUrl: "/icons/react-hook-form.svg" },
      { text: "Formik", imageUrl: "/icons/formik.svg" },
      { text: "Yjs", imageUrl: "/icons/yjs.svg" },
      { text: "ShadCN", imageUrl: "/icons/shadcn.svg" },
      { text: "React Context" },
    ],
  },
  {
    section: "Tools",
    technologies: [
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", text: "Vite", core: true },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", text: "Webpack" },
      { text: "ESBuild", imageUrl: "https://api.iconify.design/logos:esbuild.svg" },
      { text: "Nx", imageUrl: "https://api.iconify.design/logos:nx.svg" },
      { text: "Module Federation", imageUrl: "/icons/module-federation.svg" },
    ],
  },
  {
    section: "Testing",
    technologies: [
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", text: "Jest", core: true },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg", text: "Cypress" },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg", text: "Playwright" },
      { text: "Vitest", imageUrl: "https://api.iconify.design/logos:vitest.svg" },
      { text: "React Testing Library", imageUrl: "https://api.iconify.design/logos:testing-library.svg", core: true },
      { text: "MSW", imageUrl: "https://api.iconify.design/logos:msw.svg" },
    ],
  },
  {
    section: "Cloud, CI/CD & Observability",
    technologies: [
      { imageUrl: "https://api.iconify.design/logos:aws.svg", text: "AWS", core: true },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", text: "Google Cloud" },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", text: "Docker", core: true },
      { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", text: "Grafana" },
      { text: "GitHub Actions", imageUrl: "https://api.iconify.design/logos:github-actions.svg", core: true },
      { text: "Sentry", imageUrl: "https://api.iconify.design/logos:sentry-icon.svg" },
      { text: "PostHog", imageUrl: "https://api.iconify.design/logos:posthog-icon.svg" },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0d0b14]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-24"
      >
        <h2 className="font-heading text-neutral-100 font-bold text-3xl sm:text-4xl tracking-tight mb-8 sm:mb-12">
          Skills
        </h2>

        <div className="space-y-6 sm:space-y-10">
          {skills.map(({ section, technologies }, sectionIndex) => (
            <div key={`section-${sectionIndex}`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
                {section}
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map(({ imageUrl, text, core }, index) => (
                  <div
                    key={`technology-${index}`}
                    title={text}
                    className={
                      core
                        ? "flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-indigo-800 bg-violet-950/20 hover:-translate-y-0.5 shadow-[0_0_8px_rgba(124,58,237,0.2)] transition-all duration-200 cursor-default"
                        : "flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    }
                  >
                    {imageUrl ? (
                      <div className="w-5 h-5 flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={text}
                          width={20}
                          height={20}
                          src={imageUrl}
                          className={core ? "w-5 h-5 object-contain" : "w-5 h-5 object-contain opacity-70"}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className={core
                        ? "w-5 h-5 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center"
                        : "w-5 h-5 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center opacity-60"
                      }>
                        <span className="text-[9px] font-bold text-white">{text[0]}</span>
                      </div>
                    )}
                    <span className={
                      core
                        ? "hidden sm:inline text-sm font-semibold text-violet-300"
                        : "hidden sm:inline text-sm font-normal text-neutral-500"
                    }>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
