import { CircleIcon } from "./Icons"

const AboutMeContents: React.ReactNode[] = [
  <>
    Experienced software engineer with{" "}
    <span className="relative inline-block mx-3">
      10+ years
      <CircleIcon />
    </span>{" "}
    in web, desktop, mobile.
  </>,
  "Most recently a Front-end developer at Rakuten, creating modern, responsive and highly interactive web apps.",
  "Passionate about Javascript programming for web, mobile, desktop apps.",
]

const FunFacts: React.ReactNode[] = [
  "🌱 Growth mindset, 🧠 Lifelong learner.",
  "📚 Books lover.",
  <>
    🎓 Online courses learner with{" "}
    <a
      className="underline underline-offset-2 decoration-sky-400 decoration-2"
      href="https://frontendmasters.com/u/toantd/"
    >
      Frontend Masters
    </a>
    , Udemy, Coursera
  </>,
  <>
    🤓 Doing{" "}
    <a
      className="underline underline-offset-2 decoration-sky-400 decoration-2"
      href="https://leetcode.com/annietran/"
    >
      algorithm
    </a>{" "}
    almost everyday for fun.
  </>,
  "🏋️‍♂️ 🏃‍♂️ Mediocre weight lifter and runner.",
  "📈 Obsessed with productivity improve: 🧘‍♂️ Meditation, 🚿❄️ Cold shower, 🌅 Sunlight exposure, 🍅⏰ Pomodoro technique",
]

const About = () => (
  <div
    id="about-me"
    className="text-white mx-auto max-w-screen-xl py-32 sm:py-8"
  >
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      <h1 className="block bg-clip-text text-transparent font-bold text-2xl sm:text-3xl lg:text-3xl tracking-tight pb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        About Me
      </h1>
      <ul className="marker:text-slate-400 list-disc  pl-5 space-y-3 mb-8">
        {AboutMeContents.map((content, index) => (
          <li
            key={`about-me-${index}`}
            className="text-xl text-neutral-600 dark:text-neutral-200"
          >
            {content}
          </li>
        ))}
      </ul>
      <h2 className="text-xl mb-3 text-neutral-600 dark:text-neutral-200">⚡ Fun fact</h2>
      <ul className="marker:text-slate-400 list-disc  pl-5 space-y-3 mb-8">
        {FunFacts.map((fact, index) => (
          <li
            key={`about-me-fact-${index}`}
            className="text-l text-neutral-600 dark:text-neutral-200"
          >
            {fact}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default About
