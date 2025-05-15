"use client"
import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { PlusIcon, SearchIcon, FolderIcon, ChevronDownIcon } from "lucide-react"

export default function Platforms() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-4 py-20 md:py-32">
        <AnimatedHeading />
        <AnimatedFeatureGrid />
      </section>
    </main>
  )
}

function AnimatedHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}
      className="text-center max-w-3xl mx-auto mb-20"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        The platform we wish we had, <span>so we built it for you</span>
      </h1>
      <p className="text-sm md:text-base text-gray-300">
      NeuroTrust is a blockchain-powered platform that lets AI developers and companies register, license, and verify their models with cryptographic trust.
      Easily prove model ownership, ensure compliance, and enable secure monetization — all on-chain.


      </p>
    </motion.div>
  )
}

function AnimatedFeatureGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const features = [
    {
      id: 1,
      title: "Glowing Interactive Dots Grid",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-green-500",
    },
    {
      id: 2,
      title: "Scaling Element on Scroll With Flip",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-orange-300",
    },
    {
      id: 3,
      title: "Copy Email to Clipboard Button",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-blue-300",
    },
    {
      id: 4,
      title: "Falling 3D Objects Material",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-pink-300",
    },
    {
      id: 5,
      title: "Scaling Hamburger Navigation",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-gray-300",
    },
    {
      id: 6,
      title: "Text Scramble (Load, Hover)",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-gray-200",
    },
    {
      id: 7,
      title: "Image Trail Following Cursor",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-yellow-300",
    },
    {
      id: 8,
      title: "Button with CSS Character Stagger",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-gray-400",
    },
    {
      id: 9,
      title: "Custom Video Player (Advanced)",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-blue-200",
    },
  ]

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="relative p-8 rounded-xl border border-gray-800 bg-black"
    >
      {/* Top bar */}
      <div className="flex items-center mb-6 pl-4">
        <div className="text-xl font-semibold mr-4">Osmo</div>
        <button className="p-1 rounded-full border border-gray-700">
          <PlusIcon />
        </button>
        <div className="ml-auto relative">
          <div className="flex items-center bg-gray-900 rounded-md px-3 py-1.5">
            <SearchIcon />
            <span className="text-sm text-gray-400">Search</span>
            <span className="ml-4 text-xs bg-gray-800 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>
      </div>

{/* Sidebar + Grid */}
<div className="flex mb-8">
  {/* Sidebar Motion Div */}
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },  // Start with opacity 0 and translate downwards
      show: {
        opacity: 1,
        y: 0,
        scale: 1.05,  // Scale up slightly when in view
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }}
    initial="hidden"
    animate="show"
    className="w-48 pr-4"
  >
    <nav className="space-y-4">
      {["The Vault", "Videos", "Osmo Basics", "Icons"].map((item, i) => (
        <div
          key={i}
          className={`flex items-center py-1.5 px-2 rounded-md ${i === 2 ? "bg-gray-800" : ""}`}
        >
          <FolderIcon />
          <span className="text-sm">{item}</span>
        </div>
      ))}
    </nav>
  </motion.div>

  {/* Grid */}
  <div className="flex-1">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((feature) => (
        <AnimatedFeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  </div>
</div>


      {/* Bottom user bar */}
      <div className="flex items-center pl-4 mt-4">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-red-500 mr-2"></div>
          <span className="text-sm">Ira von Eck</span>
        </div>
        <button className="ml-2">
          <ChevronDownIcon />
        </button>
      </div>
    </motion.div>
  )
}

function AnimatedFeatureCard({ feature }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          scale: 0.95,  // Adding a scaling effect when in view
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      whileHover={{ scale: 1.1 }}  // Scale effect on hover
      className="feature-card overflow-hidden rounded-lg transition-transform duration-700"
    >
      <div className="relative bg-gray-900 aspect-square overflow-hidden">
        <div className={`absolute inset-0 opacity-20 ${feature.color}`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={feature.image || "/placeholder.svg"}
            alt={feature.title}
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
      </div>
      <div className="py-2 px-1 text-xs text-gray-300">{feature.title}</div>
    </motion.div>
  )
}
