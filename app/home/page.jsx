"use client"

import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import FeaturedModels from "./components/featured-model"
import ModelCard from "./components/model-card"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-4 md:px-6 pb-12 overflow-x-hidden">
          <div className="py-6">
            <div className="relative mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search models, creators, or datasets..."
                  className="h-12 w-full rounded-lg bg-[#1E1E1E] pl-10 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Models</h2>
              <FeaturedModels />
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              <button className="rounded-full bg-[#1E1E1E] px-4 py-2 text-sm font-medium text-white hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-emerald-500">
                All
              </button>
              <button className="rounded-full bg-[#1E1E1E] px-4 py-2 text-sm font-medium text-white hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-emerald-500">
                Vision
              </button>
              <button className="rounded-full bg-[#1E1E1E] px-4 py-2 text-sm font-medium text-white hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-emerald-500">
                NLP
              </button>
              <button className="rounded-full bg-[#1E1E1E] px-4 py-2 text-sm font-medium text-white hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-emerald-500">
                Tabular
              </button>
              <button className="rounded-full bg-[#1E1E1E] px-4 py-2 text-sm font-medium text-white hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-emerald-500">
                LLM
              </button>
              <button className="rounded-full bg-[#1E1E1E] px-4 py-2 text-sm font-medium text-white hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-emerald-500">
                Dataset
              </button>
            </div>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">License:</span>
                <select className="rounded-md bg-[#1E1E1E] px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>All</option>
                  <option>Exclusive</option>
                  <option>Non-Exclusive</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Verification:</span>
                <select className="rounded-md bg-[#1E1E1E] px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>All</option>
                  <option>Verified</option>
                  <option>Unverified</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Price Range:</span>
                <select className="rounded-md bg-[#1E1E1E] px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>All</option>
                  <option>Free</option>
                  <option>$1 - $50</option>
                  <option>$50 - $200</option>
                  <option>$200+</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">All Models</h2>
                <div className="flex gap-2">
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2A2A2A] text-white hover:bg-emerald-500"
                    aria-label="Scroll left"
                    onClick={() => {
                      const container = document.getElementById("all-models-container")
                      if (container) {
                        container.scrollBy({ left: -300, behavior: "smooth" })
                      }
                    }}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2A2A2A] text-white hover:bg-emerald-500"
                    aria-label="Scroll right"
                    onClick={() => {
                      const container = document.getElementById("all-models-container")
                      if (container) {
                        container.scrollBy({ left: 300, behavior: "smooth" })
                      }
                    }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div id="all-models-container" className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                <div className="min-w-[280px] max-w-[320px] flex-shrink-0">
                  <ModelCard
                    id="1"
                    name="VisionFormer Pro"
                    creator="AI Labs"
                    tags={["Vision", "Image Recognition"]}
                    price={149.99}
                    verified={true}
                    views={2456}
                    downloads={789}
                    license="Exclusive"
                    image="/placeholder.svg?height=300&width=400"
                  />
                </div>
                <div className="min-w-[280px] max-w-[320px] flex-shrink-0">
                  <ModelCard
                    id="2"
                    name="TextGenius LLM"
                    creator="NLP Masters"
                    tags={["LLM", "Text Generation"]}
                    price={99.99}
                    verified={true}
                    views={1890}
                    downloads={542}
                    license="Non-Exclusive"
                    image="/placeholder.svg?height=300&width=400"
                  />
                </div>
                <div className="min-w-[280px] max-w-[320px] flex-shrink-0">
                  <ModelCard
                    id="3"
                    name="TabularWizard"
                    creator="DataCrunchers"
                    tags={["Tabular", "Prediction"]}
                    price={79.99}
                    verified={false}
                    views={1245}
                    downloads={321}
                    license="Non-Exclusive"
                    image="/placeholder.svg?height=300&width=400"
                  />
                </div>
                <div className="min-w-[280px] max-w-[320px] flex-shrink-0">
                  <ModelCard
                    id="4"
                    name="SpeechMaster"
                    creator="AudioAI"
                    tags={["Audio", "Speech Recognition"]}
                    price={129.99}
                    verified={true}
                    views={1678}
                    downloads={456}
                    license="Exclusive"
                    image="/placeholder.svg?height=300&width=400"
                  />
                </div>
                <div className="min-w-[280px] max-w-[320px] flex-shrink-0">
                  <ModelCard
                    id="5"
                    name="ImageDreamer"
                    creator="VisualArtists"
                    tags={["Vision", "Image Generation"]}
                    price={199.99}
                    verified={true}
                    views={3210}
                    downloads={987}
                    license="Exclusive"
                    image="/placeholder.svg?height=300&width=400"
                  />
                </div>
                <div className="min-w-[280px] max-w-[320px] flex-shrink-0">
                  <ModelCard
                    id="6"
                    name="CodeAssistant"
                    creator="DevTools"
                    tags={["LLM", "Code Generation"]}
                    price={149.99}
                    verified={false}
                    views={2345}
                    downloads={678}
                    license="Non-Exclusive"
                    image="/placeholder.svg?height=300&width=400"
                  />
                </div>
                <div className="min-w-[280px] max-w-[320px] flex-shrink-0">
                  <ModelCard
                    id="7"
                    name="MedicalVision"
                    creator="HealthAI"
                    tags={["Vision", "Medical"]}
                    price={299.99}
                    verified={true}
                    views={1567}
                    downloads={345}
                    license="Exclusive"
                    image="/placeholder.svg?height=300&width=400"
                  />
                </div>
                <div className="min-w-[280px] max-w-[320px] flex-shrink-0">
                  <ModelCard
                    id="8"
                    name="FinancialPredictor"
                    creator="FinTech Solutions"
                    tags={["Tabular", "Finance"]}
                    price={249.99}
                    verified={true}
                    views={1890}
                    downloads={432}
                    license="Non-Exclusive"
                    image="/placeholder.svg?height=300&width=400"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
