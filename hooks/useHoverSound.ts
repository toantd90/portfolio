"use client"

import { useCallback } from "react"
import { useSoundContext } from "@/context/SoundContext"

// Reuse a single AudioContext across all calls
let audioCtx: AudioContext | null = null

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null
  try {
    if (!audioCtx || audioCtx.state === "closed") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      audioCtx = new AudioCtx()
    }
    return audioCtx
  } catch {
    return null
  }
}

export function useHoverSound() {
  const { enabled } = useSoundContext()

  const play = useCallback(() => {
    if (!enabled) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.type = "sine"
      oscillator.frequency.setValueAtTime(1000, ctx.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.06)

      gainNode.gain.setValueAtTime(0.06, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06)

      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + 0.06)
    } catch { /* silently fail */ }
  }, [enabled])

  return play
}
