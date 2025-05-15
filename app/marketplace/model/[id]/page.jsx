"use client"

import { useState } from "react"
import { Menu, X, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModelPreview } from "./components/model-preview"
import { TestModel } from "./components/test-model"
import { ModelDocumentation } from "./components/model-document"
import { ModelOverview } from "./components/model-overview"
import { MetadataSidebar } from "./components/metadata-sidebar"
import Sidebar from "../../components/sidebar"
import Navbar from "../../components/navbar"

export default function ModelPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const closeSidebar = () => {
    if (sidebarOpen) setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-200 flex flex-col">
      {/* Navbar (always on top) */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 h-[calc(100vh-64px)] sticky top-[64px] border-r border-[#1F1F1F] bg-[#111] z-20">
          <Sidebar isMobile={false} />
        </aside>

        {/* Mobile Sidebar Backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed lg:hidden top-0 left-0 w-64 h-full bg-[#111] border-r border-[#1F1F1F] z-50 transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-[#1F1F1F]">
            <div className="flex justify-between items-center">
              <button onClick={closeSidebar} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="overflow-y-auto h-[calc(100%-60px)]">
            <Sidebar isMobile={true} />
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 bg-[#1A1A1A] p-2 rounded-md border border-[#333] text-white"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto" onClick={closeSidebar}>
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Center */}
              <div className="flex-1">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-3xl font-bold text-white">DeepVision Pro</h1>
                    <Badge className="bg-[#6366F1] hover:bg-[#6366F1]/80">
                      <CheckCircle className="h-3 w-3 mr-1" /> Verified
                    </Badge>
                  </div>
                  <p className="text-gray-400">
                    Created by <span className="text-white hover:text-[#6366F1] cursor-pointer">0x7a86...f3c2</span>
                  </p>
                </div>

                {/* Pricing */}
                <Card className="bg-[#1A1A1A] border-[#333] mb-8 p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-2">License</h2>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-white">$299.00</span>
                          <span className="text-gray-400 text-sm">(0.12 ETH)</span>
                        </div>
                        <Badge className="w-fit bg-[#10B981] hover:bg-[#10B981]/80">Non-Exclusive</Badge>
                      </div>
                    </div>
                    <Button className="bg-[#6366F1] hover:bg-[#6366F1]/80 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
                      Buy License
                    </Button>
                  </div>
                </Card>

                {/* Preview */}
                <div className="mb-8">
                  <ModelPreview />
                </div>

                {/* Tabs */}
                <Tabs defaultValue="overview" className="mb-8">
                  <TabsList className="bg-[#1A1A1A] border-b border-[#333]">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-[#333] text-white">Overview</TabsTrigger>
                    <TabsTrigger value="documentation" className="data-[state=active]:bg-[#333] text-white">Documentation</TabsTrigger>
                    <TabsTrigger value="test" className="data-[state=active]:bg-[#333] text-white">Test It</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="bg-[#1A1A1A] p-6 rounded-b-md border border-t-0 border-[#333]">
                    <ModelOverview />
                  </TabsContent>
                  <TabsContent value="documentation" className="bg-[#1A1A1A] p-6 rounded-b-md border border-t-0 border-[#333]">
                    <ModelDocumentation />
                  </TabsContent>
                  <TabsContent value="test" className="bg-[#1A1A1A] p-6 rounded-b-md border border-t-0 border-[#333]">
                    <TestModel />
                  </TabsContent>
                </Tabs>
              </div>

              {/* Metadata */}
              <div className="lg:w-80">
                <MetadataSidebar />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
