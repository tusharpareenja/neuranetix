"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Play, Loader2 } from "lucide-react"

export function TestModel() {
  const [inputImage, setInputImage] = useState(null)
  const [outputImage, setOutputImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [uploadLabel, setUploadLabel] = useState("Upload an image to test")

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setInputImage(event.target?.result)
        setUploadLabel(file.name)
        setOutputImage(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const processImage = () => {
    if (!inputImage) return

    setIsProcessing(true)

    // Simulate processing delay
    setTimeout(() => {
      // In a real app, this would call the actual model API
      setOutputImage("/placeholder.svg?height=400&width=400")
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Test DeepVision Pro</h3>
        <p className="text-gray-300 mb-6">
          Upload an image to see how DeepVision Pro performs. The model will process your image and return the results
          with detected objects, segmentation masks, or classifications.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Input Section */}
        <Card className="flex-1 bg-[#1A1A1A] border-[#333]">
          <div className="p-4 border-b border-[#333]">
            <h4 className="font-medium text-white">Input</h4>
          </div>

          <div className="p-6 flex flex-col items-center justify-center">
            {!inputImage ? (
              <label className="w-full h-48 border-2 border-dashed border-[#333] rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-[#6366F1] transition-colors">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <span className="text-gray-400 text-sm">{uploadLabel}</span>
                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              </label>
            ) : (
              <div className="relative w-full">
                <img src={inputImage || "/placeholder.svg"} alt="Input" className="w-full h-auto rounded-md" />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2 bg-[#1A1A1A]/80 hover:bg-[#1A1A1A] border-[#333]"
                  onClick={() => {
                    setInputImage(null)
                    setOutputImage(null)
                    setUploadLabel("Upload an image to test")
                  }}
                >
                  Change
                </Button>
              </div>
            )}

            <Button
              className="mt-4 bg-[#6366F1] hover:bg-[#6366F1]/80 w-full"
              disabled={!inputImage || isProcessing}
              onClick={processImage}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Run Model
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Output Section */}
        <Card className="flex-1 bg-[#1A1A1A] border-[#333]">
          <div className="p-4 border-b border-[#333]">
            <h4 className="font-medium text-white">Output</h4>
          </div>

          <div className="p-6 flex flex-col items-center justify-center">
            {outputImage ? (
              <div className="w-full">
                <img src={outputImage || "/placeholder.svg"} alt="Output" className="w-full h-auto rounded-md" />
                <div className="mt-4 bg-[#111] p-3 rounded-md text-xs font-mono overflow-x-auto">
                  <pre>
                    {JSON.stringify(
                      {
                        objects: [
                          { class: "person", confidence: 0.98, bbox: [10, 20, 100, 200] },
                          { class: "car", confidence: 0.95, bbox: [150, 30, 250, 150] },
                          { class: "dog", confidence: 0.87, bbox: [300, 200, 400, 300] },
                        ],
                        processingTime: "0.23s",
                      },
                      null,
                      2,
                    )}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="w-full h-48 border-2 border-dashed border-[#333] rounded-md flex flex-col items-center justify-center">
                <span className="text-gray-400 text-sm">
                  {isProcessing ? "Processing..." : "Output will appear here"}
                </span>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
