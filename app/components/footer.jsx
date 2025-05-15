"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Set visible after component mounts to trigger animation
    setIsVisible(true)
  }, [])

  return (
    <footer className="bg-black font-rubik text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}
        <div className="text-center mb-8 overflow-hidden">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
          >
            Let&apos;s make this official, sign up
          </motion.h2>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
          >
            and access the vault
          </motion.h2>
        </div>

        {/* Members */}
        <div className="flex justify-center items-center gap-1 mb-8">
          <div className="flex -space-x-2 mr-2">
            <Avatar className="border-2 border-black w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-black w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-black w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-gray-400 text-sm">850+ paid members</span>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-20">
          <Button variant="outline" className="bg-white text-black hover:bg-gray-200 px-6 py-5 rounded-md text-base">
            Become a member
          </Button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-gray-800">
          {/* SITEMAP */}
          <div>
            <h3 className="text-gray-500 mb-4 text-sm">SITEMAP</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Pricing
                </a>
              </li>
              <li className="flex items-center">
                <a href="#" className="hover:text-gray-300">
                  Resources
                </a>
                <span className="ml-2 text-xs bg-gray-800 px-1.5 py-0.5 rounded text-gray-400">74</span>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Log In
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-gray-500 mb-4 text-sm">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-gray-500 mb-4 text-sm">CONTACT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-gray-500 mb-4 text-sm">NEWSLETTER</h3>
            <p className="mb-4">You read this far, might as well sign up.</p>
            <div className="flex flex-col space-y-2">
              <Input
                type="text"
                placeholder="First name"
                className="bg-transparent border-gray-700 focus:border-gray-500"
              />
              <Input
                type="email"
                placeholder="john.doe@osmo.supply"
                className="bg-transparent border-gray-700 focus:border-gray-500"
              />
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
