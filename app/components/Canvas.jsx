"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Plus, ArrowRight } from 'lucide-react'
import logo from '../../public/neuronetix.png'
import Image from "next/image"
import logo2 from '../../public/logo2.png'


export default function VantaWaves() {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Dynamically load Three.js and Vanta Waves scripts
    const loadVanta = async () => {
      if (typeof window !== "undefined" && !window.VANTA) {
        // Load Three.js
        const threeScript = document.createElement("script")
        threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        threeScript.async = true
        document.head.appendChild(threeScript)

        // Once Three.js is loaded, load Vanta Waves
        threeScript.onload = () => {
          const vantaScript = document.createElement("script")
          vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js"
          vantaScript.async = true
          vantaScript.onload = () => {
            if (!vantaEffect && window.VANTA) {
              setVantaEffect(
                window.VANTA.WAVES({
                  el: vantaRef.current,
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200.00,
                  minWidth: 200.00,
                  scale: 1.00,
                  scaleMobile: 1.00,
                  color: 0x0,
                  shininess: 106.00,
                  waveHeight: 20.50,
                  waveSpeed: 0.60,
                  zoom: 1.29
                }),
              )
            }
          }
          document.head.appendChild(vantaScript)
        }
      }
    }

    loadVanta()

    return () => {
      if (vantaEffect) vantaEffect.destroy() // Cleanup Vanta effect on unmount
    }
  }, [vantaEffect])

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div ref={vantaRef} className="relative w-screen h-screen bg-black overflow-hidden font-rubik">
      {/* Navigation Bar */}
      <nav className="relative z-20 flex justify-between items-center px-4 sm:px-8 py-6">
      <div className="flex items-center">
        <div className="w-56 h-12 mt-2  flex items-center justify-center">
        <Image
          src={logo2}
          alt="Neuranetix Logo"
          className="w-52 h-20"
        />

        </div>

  <div className="ml-4 sm:ml-8 text-white">
    
  </div>
</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <div className="relative group">
            <Link href="/resources" className="text-white hover:text-gray-300">
              Resources
              <span className="absolute -top-2 -right-4 text-xs bg-white/20 px-1 rounded">74</span>
            </Link>
          </div>
          <Link href="/pricing" className="text-white hover:text-gray-300">
            Pricing
          </Link>
          <Link href="/faq" className="text-white hover:text-gray-300">
            FAQ
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-white hover:text-gray-300">
            Log in
          </Link>
          <Link href="/get-started" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center space-x-2 text-white" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {!mobileMenuOpen && <div className=" w-20 h-8 text-center flex justify-center items-center bg-white text-black"><p className="text-sm">LogIn</p></div>}
          <div className={`relative w-8 h-8 flex items-center justify-center transition-transform duration-500 ${mobileMenuOpen ? 'rotate-45' : ''}`}>
            <Plus size={24} className="absolute" />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-30 transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-sm font-medium text-black">MENU</span>
          <button 
            onClick={toggleMobileMenu}
            className="w-8 h-8 bg-black flex items-center justify-center"
            aria-label="Close menu"
          >
            <Plus size={24} className="text-white rotate-45" />
          </button>
        </div>

        <div className="px-4 py-8 text-black">
          <nav className="space-y-6">
            <Link href="/" className="flex justify-between items-center py-4 border-b border-gray-200">
              <span className="text-xl font-medium">Home</span>
              <ArrowRight size={20} />
            </Link>
            
            <Link href="/resources" className="flex justify-between items-center py-4 border-b border-gray-200">
              <div className="flex items-center">
                <span className="text-xl font-medium">Resources</span>
                <span className="ml-1 text-xs align-top">74</span>
              </div>
              <ArrowRight size={20} />
            </Link>
            
            <Link href="/pricing" className="flex justify-between items-center py-4 border-b border-gray-200">
              <span className="text-xl font-medium">Pricing</span>
              <ArrowRight size={20} />
            </Link>
            
            <Link href="/faq" className="flex justify-between items-center py-4 border-b border-gray-200">
              <span className="text-xl font-medium">FAQ</span>
              <ArrowRight size={20} />
            </Link>
          </nav>

          <div className="mt-12 space-y-4">
            <Link href="/marketplace" className="block w-full bg-black text-white text-center py-4 rounded">
              Marketplace
            </Link>
            <Link href="/login" className="block w-full border border-black text-center py-4 rounded">
              Log In
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-gray-600 text-sm">
        Blockchain-backed licensing and verification for AI developers and enterprises.
        </div>
      </div>

      {/* Desktop Sidebar */}
 

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 -mt-16 md:mt-0">
        <h2 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold text-center max-w-5xl leading-tight">
        Secure Your AI. Prove Its Integrity. Get Paid.
        </h2>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 sm:mt-12">
          <Link
           href='/marketplace'
          >
          <button className="bg-white hover:cursor-pointer text-black px-6 py-3 rounded hover:bg-gray-200 w-full sm:w-auto">
            Marketplace
          </button>
          </Link>
          
          <button className="bg-black/50 text-white border border-white/20 px-6 py-3 rounded hover:bg-black/70 flex items-center justify-center sm:justify-start w-full sm:w-auto">
            <div className="flex -space-x-2 mr-2">
              <div className="w-6 h-6 rounded-full bg-gray-400"></div>
              <div className="w-6 h-6 rounded-full bg-gray-600"></div>
            </div>
            Get Started
          </button>
        </div>

        <p className="text-white/80 max-w-2xl text-center mt-12 sm:mt-24 text-sm sm:text-base">
        Blockchain-backed licensing and verification for AI developers and enterprises.
        </p>
      </div>
    </div>
  )
}
