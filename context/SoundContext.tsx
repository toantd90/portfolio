"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"

type SoundContextType = {
  enabled: boolean
  toggle: () => void
}

const SoundContext = createContext<SoundContextType>({ enabled: true, toggle: () => {} })

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-sound")
    if (stored !== null) setEnabled(stored === "true")
  }, [])

  const toggle = useCallback(() => {
    setEnabled(prev => {
      const next = !prev
      localStorage.setItem("portfolio-sound", String(next))
      return next
    })
  }, [])

  return (
    <SoundContext.Provider value={{ enabled, toggle }}>
      {children}
    </SoundContext.Provider>
  )
}

export const useSoundContext = () => useContext(SoundContext)
