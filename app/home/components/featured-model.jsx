"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
import ModelCard from "./model-card"

export default function FeaturedModels() {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = container.clientWidth * 0.75
    const newScrollLeft =
      direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })

    // Update arrow visibility after scrolling
    setTimeout(() => {
      if (!container) return
      setShowLeftArrow(container.scrollLeft > 0)
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }, 300)
  }

  const featuredModels = [
    {
      id: "featured-1",
      name: "SuperVision X",
      creator: "AI Visionaries",
      tags: ["Vision", "Premium"],
      price: 499.99,
      verified: true,
      views: 12456,
      downloads: 3789,
      license: "Exclusive",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "featured-2",
      name: "UltraLLM Pro",
      creator: "Language Masters",
      tags: ["LLM", "Enterprise"],
      price: 899.99,
      verified: true,
      views: 9890,
      downloads: 2142,
      license: "Exclusive",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "featured-3",
      name: "DataAnalyzer Elite",
      creator: "AnalyticsAI",
      tags: ["Tabular", "Premium"],
      price: 349.99,
      verified: true,
      views: 7245,
      downloads: 1821,
      license: "Non-Exclusive",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "featured-4",
      name: "VoiceGenius",
      creator: "SoundAI",
      tags: ["Audio", "Enterprise"],
      price: 599.99,
      verified: true,
      views: 8678,
      downloads: 2456,
      license: "Exclusive",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "featured-5",
      name: "MegaVision Pro",
      creator: "Vision Experts",
      tags: ["Vision", "Premium"],
      price: 449.99,
      verified: true,
      views: 10210,
      downloads: 2987,
      license: "Exclusive",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="relative">
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute overflow:hidden -left-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#2A2A2A] text-white shadow-lg hover:bg-emerald-500"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#2A2A2A] text-white shadow-lg hover:bg-emerald-500"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}
      <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide w-full">
        {featuredModels.map((model) => (
          <div key={model.id} className="min-w-[280px] max-w-[320px] flex-shrink-0">
            <ModelCard {...model} />
          </div>
        ))}
      </div>
    </div>
  )
}
