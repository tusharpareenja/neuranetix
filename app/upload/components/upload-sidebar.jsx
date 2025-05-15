"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FileText, Upload, BookOpen, Shield, DollarSign, Eye, CheckCircle2 } from "lucide-react"



export function UploadSidebar({ currentStep, steps, onStepClick }) {
  // Map step names to icons
  const getStepIcon = (stepId) => {
    switch (stepId) {
      case 1:
        return <FileText className="h-5 w-5" />
      case 2:
        return <Upload className="h-5 w-5" />
      case 3:
        return <BookOpen className="h-5 w-5" />
      case 4:
        return <Shield className="h-5 w-5" />
      case 5:
        return <DollarSign className="h-5 w-5" />
      case 6:
        return <Eye className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-xl font-bold text-white">Upload Process</h2>
      </div>

      <Separator className="mb-6 bg-[#333]" />

      <div className="space-y-2">
        {steps.map((step) => (
          <Button
            key={step.id}
            variant="ghost"
            className={`w-full justify-start ${
              currentStep === step.id ? "bg-[#333] text-white" : "text-gray-400 hover:bg-[#222] hover:text-white"
            } ${currentStep > step.id ? "text-[#10B981]" : ""}`}
            onClick={() => onStepClick(step.id)}
          >
            <div className="flex items-center w-full">
              <div className="mr-3">
                {currentStep > step.id ? <CheckCircle2 className="h-5 w-5 text-[#10B981]" /> : getStepIcon(step.id)}
              </div>
              <span>{step.name}</span>
              {currentStep > step.id && <CheckCircle2 className="h-4 w-4 ml-auto text-[#10B981]" />}
            </div>
          </Button>
        ))}
      </div>

      <Separator className="my-6 bg-[#333]" />

      <div className="space-y-4">
        <div className="text-sm text-gray-400">
          <p className="mb-2">Need help?</p>
          <ul className="space-y-1">
            <li className="hover:text-white cursor-pointer transition-colors">• Documentation</li>
            <li className="hover:text-white cursor-pointer transition-colors">• Model Guidelines</li>
            <li className="hover:text-white cursor-pointer transition-colors">• Contact Support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
