"use client"



import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Upload, Eye, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function ModelPreview() {
  const [coverImage, setCoverImage] = useState(null)
  const [outputPreview, setOutputPreview] = useState(null)

  const handleCoverImageUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        setCoverImage(event.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleOutputPreviewUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        setOutputPreview(event.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Preview & Submit</h2>
        <p className="text-gray-400 mb-6">Upload preview images and review your model details before submission.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="text-white">
            Cover Image <span className="text-red-500">*</span>
          </Label>

          {!coverImage ? (
            <div
              className="border-2 border-dashed border-[#333] rounded-lg p-6 text-center cursor-pointer hover:border-[#6366F1] transition-colors"
              onClick={() => document.getElementById("cover-image-upload")?.click()}
            >
              <Upload className="h-10 w-10 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-400 mb-2">Upload a cover image for your model</p>
              <p className="text-xs text-gray-500">Recommended size: 1200 x 630 pixels (16:9 ratio)</p>
              <input
                id="cover-image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleCoverImageUpload}
              />
            </div>
          ) : (
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={coverImage || "/placeholder.svg"}
                alt="Cover Preview"
                className="w-full h-auto object-cover rounded-lg"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2 bg-[#1A1A1A]/80 hover:bg-[#1A1A1A] border-[#333]"
                onClick={() => setCoverImage(null)}
              >
                Change
              </Button>
            </div>
          )}

          <p className="text-xs text-gray-500">This image will be displayed on the marketplace and search results.</p>
        </div>

        <div className="space-y-3">
          <Label className="text-white">Output Preview (Optional)</Label>

          {!outputPreview ? (
            <div
              className="border-2 border-dashed border-[#333] rounded-lg p-6 text-center cursor-pointer hover:border-[#6366F1] transition-colors"
              onClick={() => document.getElementById("output-preview-upload")?.click()}
            >
              <Upload className="h-10 w-10 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-400 mb-2">Upload an example of your model's output</p>
              <p className="text-xs text-gray-500">This helps users understand what your model can produce</p>
              <input
                id="output-preview-upload"
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={handleOutputPreviewUpload}
              />
            </div>
          ) : (
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={outputPreview || "/placeholder.svg"}
                alt="Output Preview"
                className="w-full h-auto object-cover rounded-lg"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2 bg-[#1A1A1A]/80 hover:bg-[#1A1A1A] border-[#333]"
                onClick={() => setOutputPreview(null)}
              >
                Change
              </Button>
            </div>
          )}

          <p className="text-xs text-gray-500">Show potential buyers what your model can do with a sample output.</p>
        </div>

        <Separator className="my-6 bg-[#333]" />

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white">Model Summary</h3>

          <Card className="bg-[#111] border-[#333] p-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Model Name</span>
                <span className="text-white font-medium">DeepVision Pro</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Category</span>
                <span className="text-white">Computer Vision</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">License Type</span>
                <Badge className="bg-[#10B981] hover:bg-[#10B981]/80">Non-Exclusive</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Price</span>
                <span className="text-white">$99.99 (0.04 ETH)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Files Uploaded</span>
                <span className="text-white">3 of 3 required</span>
              </div>
            </div>
          </Card>

          <Alert className="bg-[#111] border-[#6366F1]/30 text-[#6366F1]">
            <Eye className="h-4 w-4" />
            <AlertDescription className="text-gray-300">
              Your model will be reviewed by our team before being published to the marketplace. This typically takes
              1-2 business days.
            </AlertDescription>
          </Alert>

          <div className="space-y-2 mt-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[#10B981] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-400">All required information has been provided</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[#10B981] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-400">Model files have been uploaded and validated</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[#10B981] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-400">Legal declarations have been confirmed</p>
            </div>
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-[#6366F1] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-400">Your model will be reviewed by our team before being published</p>
            </div>
          </div>

          <div className="pt-6">
            <Button className="w-full bg-[#6366F1] hover:bg-[#6366F1]/80 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all py-6 text-lg">
              Submit Model for Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
