"use client"

import {
  BarChart3,
  Bookmark,
  Compass,
  Download,
  Heart,
  History,
  Settings,
  Star,
  Wallet,
  User2Icon,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar({ isMobile = false }) {
  const pathname = usePathname()

  const isActive = (href) => pathname === href

  const linkClass = (href) =>
    `flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-[#1E1E1E] ${
      isActive(href)
        ? "bg-[#1E1E1E] text-emerald-400 font-medium"
        : "text-white"
    }`

  return (
    <div className={`${isMobile ? "" : "hidden md:block"} w-64 ml-2 mt-4 shrink-0 bg-[#121212]`}>
      <div className="space-y-6">
        {/* Discover */}
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase text-gray-400">Discover</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/marketplace" className={linkClass("/marketplace")}>
                <Compass className="h-5 w-5 text-gray-400" />
                <span>Browse</span>
              </Link>
            </li>
            <li>
              <Link href="/popular" className={linkClass("/popular")}>
                <Star className="h-5 w-5 text-gray-400" />
                <span>Popular</span>
              </Link>
            </li>
            <li>
              <Link href="/upload" className={linkClass("/upload")}>
                <Star className="h-5 w-5 text-gray-400" />
                <span>Upload</span>
              </Link>
            </li>
            <li>
              <Link href="/trending" className={linkClass("/trending")}>
                <BarChart3 className="h-5 w-5 text-gray-400" />
                <span>Trending</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Filters */}
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase text-gray-400">Filters</h3>
          <div className="space-y-2">
            <div>
              <h4 className="mb-1 text-sm font-medium text-gray-300">Blockchain</h4>
              <select className="w-full rounded-md bg-[#1E1E1E] px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>All Networks</option>
                <option>Ethereum</option>
                <option>Polygon</option>
                <option>Solana</option>
              </select>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-medium text-gray-300">Model Type</h4>
              <select className="w-full rounded-md bg-[#1E1E1E] px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>All Types</option>
                <option>Vision</option>
                <option>NLP</option>
                <option>LLM</option>
                <option>Tabular</option>
              </select>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-medium text-gray-300">Price Range</h4>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 rounded-md bg-[#1E1E1E] px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 rounded-md bg-[#1E1E1E] px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* My Account */}
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase text-gray-400">My Account</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/dashboard" className={linkClass("/dashboard")}>
                <User2Icon className="h-5 w-5 text-gray-400" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/wallet" className={linkClass("/wallet")}>
                <Wallet className="h-5 w-5 text-gray-400" />
                <span>Wallet</span>
              </Link>
            </li>
            <li>
              <Link href="/favorites" className={linkClass("/favorites")}>
                <Heart className="h-5 w-5 text-gray-400" />
                <span>Favorites</span>
              </Link>
            </li>
            <li>
              <Link href="/watchlist" className={linkClass("/watchlist")}>
                <Bookmark className="h-5 w-5 text-gray-400" />
                <span>Watchlist</span>
              </Link>
            </li>
            <li>
              <Link href="/purchases" className={linkClass("/purchases")}>
                <Download className="h-5 w-5 text-gray-400" />
                <span>Purchases</span>
              </Link>
            </li>
            <li>
              <Link href="/history" className={linkClass("/history")}>
                <History className="h-5 w-5 text-gray-400" />
                <span>History</span>
              </Link>
            </li>
            <li>
              <Link href="/settings" className={linkClass("/settings")}>
                <Settings className="h-5 w-5 text-gray-400" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}