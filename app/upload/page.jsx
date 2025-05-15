"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { UploadSidebar } from "./components/upload-sidebar"
import { ModelBasics } from "./components/model-basics"
import { ModelFiles } from "./components/model-files"
import { ModelDocumentation } from "./components/model-documentation"
import { LicensingLegal } from "./components/licensing-legal"
import { ModelPricing } from "./components/model-pricing"
import { ModelPreview } from "./components/model-preview"
import { UploadHeader } from "./components/upload-header"
import { UploadProgress } from "./components/upload-progress"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function UploadPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 6

  const steps = [
    { id: 1, name: "Model Basics" },
    { id: 2, name: "Model Files" },
    { id: 3, name: "Documentation" },
    { id: 4, name: "Licensing & Legal" },
    { id: 5, name: "Pricing" },
    { id: 6, name: "Preview" },
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleStepClick = (step) => {
    setCurrentStep(step)
    window.scrollTo(0, 0)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ModelBasics />
      case 2:
        return <ModelFiles />
      case 3:
        return <ModelDocumentation />
      case 4:
        return <LicensingLegal />
      case 5:
        return <ModelPricing />
      case 6:
        return <ModelPreview />
      default:
        return <ModelBasics />
    }
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-200">
      <div className="flex">
        {/* Mobile Menu */}
        <div className="md:hidden fixed top-4 left-4 z-50">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="bg-[#1A1A1A] border-[#333]">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-[#1A1A1A] border-[#333] p-0">
              <div className="py-4">
                <UploadSidebar currentStep={currentStep} steps={steps} onStepClick={handleStepClick} />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Sidebar - Hidden on mobile */}
        <div className="hidden md:block w-64 fixed h-screen bg-[#1A1A1A] border-r border-[#333] overflow-y-auto">
          <UploadSidebar currentStep={currentStep} steps={steps} onStepClick={handleStepClick} />
        </div>

        {/* Main Content */}
        <div className="w-full md:ml-64 min-h-screen">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <UploadHeader />

            <UploadProgress currentStep={currentStep} totalSteps={totalSteps} />

            <Card className="bg-[#1A1A1A] border-[#333] p-6 mt-6">{renderStep()}</Card>

            <div className="flex justify-between mt-8 mb-16">
              <Button
                variant="outline"
                className="border-[#333] hover:bg-[#333] hover:text-white"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>

              {currentStep === totalSteps ? (
                <Button className="bg-[#6366F1] hover:bg-[#6366F1]/80 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
                  Upload Model
                </Button>
              ) : (
                <Button className="bg-[#6366F1] hover:bg-[#6366F1]/80 text-white" onClick={handleNext}>
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
