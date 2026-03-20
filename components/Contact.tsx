"use client"

import { useReducer } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useHoverSound } from "@/hooks/useHoverSound"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
  isSubmitted: boolean
}

type Action = {
  type: string
  payload?: { [key: string]: string | boolean }
}

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  isSubmitted: false,
}

const formReducer = (state: FormState, action: Action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return { ...state, ...action.payload }
    case "RESET_FORM":
      return { ...initialForm, isSubmitted: true }
    default:
      return state
  }
}

const inputClass =
  "w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"

const Contact = () => {
  const [formState, dispatch] = useReducer(formReducer, initialForm)
  const playSound = useHoverSound()

  const { name, email, subject, message, isSubmitted } = formState

  const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    }).then((res) => {
      if (res.status === 200) {
        dispatch({ type: "RESET_FORM" })
      }
    })
  }

  return (
    <section id="contact" className="bg-neutral-950">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-5 sm:px-6 py-24"
      >
        <h2 className="bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-600 bg-clip-text text-transparent font-bold text-3xl sm:text-4xl tracking-tight mb-12">
          Contact
        </h2>

        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-start">
          {/* Form */}
          <div className="w-full md:max-w-lg">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-100">Message sent!</h3>
                <p className="text-neutral-400 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form action="#" className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-1.5 text-sm font-medium text-neutral-300">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={inputClass}
                    placeholder="How should I call you?"
                    value={name}
                    onChange={(e) =>
                      dispatch({ type: "UPDATE_FORM", payload: { name: e.target.value } })
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-neutral-300">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={inputClass}
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) =>
                      dispatch({ type: "UPDATE_FORM", payload: { email: e.target.value } })
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-1.5 text-sm font-medium text-neutral-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className={inputClass}
                    placeholder="How can I help you?"
                    value={subject}
                    onChange={(e) =>
                      dispatch({ type: "UPDATE_FORM", payload: { subject: e.target.value } })
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-neutral-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={inputClass}
                    placeholder="Tell me what's on your mind..."
                    value={message}
                    onChange={(e) =>
                      dispatch({ type: "UPDATE_FORM", payload: { message: e.target.value } })
                    }
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleOnSubmit}
                  onMouseEnter={playSound}
                  className="w-full sm:w-auto px-8 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 shadow-glow hover:shadow-glow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Illustration */}
          <div className="flex-shrink-0 opacity-80">
            <Image
              src="/images/get-in-touch.png"
              alt="Get in touch"
              width={400}
              height={400}
              className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
