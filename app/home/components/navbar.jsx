import { Bell, Menu, User } from "lucide-react"
import Link from "next/link"
import logo2 from '../../../public/logo2.png'
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2A2A2A] bg-[#121212]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button className="rounded-md p-2 text-gray-400 hover:bg-[#1E1E1E] md:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <div className="w-56 h-12 mt-2  flex items-center justify-center">
        <Image
          src={logo2}
          alt="Neuranetix Logo"
          className="w-52 h-20"
        />

        </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium text-white hover:text-emerald-400">
            Explore
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:text-emerald-400">
            Creators
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:text-emerald-400">
            Collections
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:text-emerald-400">
            Community
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="rounded-full bg-[#1E1E1E] p-2 text-gray-400 hover:bg-[#2A2A2A] hover:text-white">
            <Bell className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-[#1E1E1E] p-2 text-gray-400 hover:bg-[#2A2A2A] hover:text-white">
            <User className="h-5 w-5" />
          </button>
          <button className="hidden rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 md:block">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  )
}
