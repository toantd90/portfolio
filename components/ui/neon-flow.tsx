"use client"

import React, { useEffect, useRef, useState } from 'react'
import { cn } from "@/lib/utils"

const randomColors = (count: number) => {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'))
}

interface TubesBackgroundProps {
  children?: React.ReactNode
  className?: string
  enableClickInteraction?: boolean
}

export function TubesBackground({
  children,
  className,
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const tubesRef = useRef<any>(null)

  useEffect(() => {
    let mounted = true
    let timerId: ReturnType<typeof setTimeout>

    const initTubes = async () => {
      if (!mounted || !canvasRef.current) return
      try {
        // Use new Function to bypass webpack's static import analysis so the
        // browser's native dynamic import handles the https:// URL at runtime.
        // eslint-disable-next-line no-new-func
        const module = await new Function('u', 'return import(u)')('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')
        const TubesCursor = module.default
        if (!mounted) return

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#f967fb", "#53bc28", "#6958d5"],
            lights: {
              intensity: 200,
              colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
            },
          },
        })

        tubesRef.current = app
      } catch (error) {
        console.error("Failed to load TubesCursor:", error)
      }
    }

    // Defer loading the heavy Three.js CDN library until after the page is
    // interactive — keeps it off the critical path and reduces TBT.
    timerId = setTimeout(() => {
      const ric = (window as any).requestIdleCallback
      ric ? ric(() => initTubes()) : initTubes()
    }, 1500)

    return () => {
      mounted = false
      clearTimeout(timerId)
    }
  }, [])

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return
    tubesRef.current.tubes.setColors(randomColors(3))
    tubesRef.current.tubes.setLightsColors(randomColors(4))
  }

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden", className)}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />
      {children != null ? (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      ) : null}
    </div>
  )
}

export default TubesBackground
