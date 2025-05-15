"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

export function ModelPreview() {
  const [isPlaying, setIsPlaying] = useState(false)

  // Simulate animation playback
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setIsPlaying(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isPlaying])

  return (
    <Card className="bg-[#1A1A1A] border-[#333] overflow-hidden relative">
      <div className="aspect-video bg-[#0D0D0D] flex items-center justify-center">
        <img src="/placeholder.svg?height=400&width=800" alt="Model Preview" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 hover:bg-black/20 transition-all"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying && (
            <div className="w-16 h-16 rounded-full bg-[#6366F1]/80 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          )}
          {isPlaying && <div className="text-white text-lg font-medium">Playing preview...</div>}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-white">Model Preview</h3>
        <p className="text-gray-400 text-sm mt-1">
          This AI model specializes in computer vision tasks with state-of-the-art accuracy. Click on the preview to see
          it in action.
        </p>
      </div>
    </Card>
  )
}
