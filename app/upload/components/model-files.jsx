"use client"


import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, File, X, AlertCircle, Check } from "lucide-react"


function FileUpload({ label, description, acceptedFormats, required = false }) {
  const [file, setFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const removeFile = () => {
    setFile(null)
  }

  return (
    <div className="space-y-2">
      <Label className="text-white">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>

      {!file ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragging ? "border-[#6366F1] bg-[#6366F1]/10" : "border-[#333] hover:border-[#6366F1]"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById(`file-upload-${label}`)?.click()}
        >
          <Upload className="h-10 w-10 mx-auto mb-2 text-gray-400" />
          <p className="text-gray-400 mb-2">Drag and drop your file here, or click to browse</p>
          <p className="text-xs text-gray-500">Accepted formats: {acceptedFormats}</p>
          <Input id={`file-upload-${label}`} type="file" className="hidden" onChange={handleFileChange} />
        </div>
      ) : (
        <div className="border border-[#333] rounded-lg p-4 bg-[#111]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <File className="h-8 w-8 mr-3 text-[#6366F1]" />
              <div>
                <p className="text-white font-medium truncate max-w-[200px] sm:max-w-xs">{file.name}</p>
                <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-white hover:bg-[#333]"
              onClick={removeFile}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <p className="text-xs text-gray-500">{description}</p>
    </div>
  )
}

export function ModelFiles() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Model Files</h2>
        <p className="text-gray-400 mb-6">
          Upload your model files and supporting documentation. These files will be used to run your model on our
          platform.
        </p>
      </div>

      <Alert className="bg-[#111] border-[#6366F1]/30 text-[#6366F1]">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription className="text-gray-300">
          All uploaded files will be scanned for viruses and validated before being published.
        </AlertDescription>
      </Alert>

      <div className="space-y-6 mt-6">
        <FileUpload
          label="Model File"
          description="Upload your trained model file. Maximum size: 5GB."
          acceptedFormats=".pt, .h5, .onnx, .pb, .tflite, .pkl"
          required
        />

        <FileUpload
          label="Inference Script"
          description="Upload a Python script that demonstrates how to use your model for inference."
          acceptedFormats=".py"
          required
        />

        <FileUpload
          label="Requirements File"
          description="Upload a requirements.txt file listing all dependencies needed to run your model."
          acceptedFormats=".txt"
          required
        />

        <FileUpload
          label="Sample Dataset (Optional)"
          description="Upload a small sample dataset to help users test your model."
          acceptedFormats=".zip, .csv, .json, .npy"
        />
      </div>

      <div className="mt-6 pt-6 border-t border-[#333]">
        <div className="flex items-start">
          <Check className="h-5 w-5 text-[#10B981] mt-0.5 mr-2 flex-shrink-0" />
          <p className="text-sm text-gray-400">
            Your files will be securely stored and only accessible to users who have purchased a license to your model,
            according to the terms you set.
          </p>
        </div>
      </div>
    </div>
  )
}
