"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export function ModelBasics() {
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState("")

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault()
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()])
      }
      setTagInput("")
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Model Basics</h2>
        <p className="text-gray-400 mb-6">
          Provide essential information about your AI model to help users understand its purpose and capabilities.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="model-name" className="text-white">
            Model Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="model-name"
            placeholder="Enter a clear, descriptive name"
            className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
          />
          <p className="text-xs text-gray-500">Choose a name that clearly describes what your model does</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="model-description" className="text-white">
            Description <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="model-description"
            placeholder="Describe what your model does, its key features, and use cases"
            className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white min-h-[120px]"
          />
          <p className="text-xs text-gray-500">
            Minimum 100 characters. Include key features, use cases, and what makes your model unique.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="model-category" className="text-white">
            Category <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="bg-[#111] border-[#333] focus:ring-[#6366F1] text-white">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1A1A] border-[#333] text-white">
              <SelectItem value="image-classification">Image Classification</SelectItem>
              <SelectItem value="object-detection">Object Detection</SelectItem>
              <SelectItem value="nlp">Natural Language Processing</SelectItem>
              <SelectItem value="text-generation">Text Generation</SelectItem>
              <SelectItem value="image-generation">Image Generation</SelectItem>
              <SelectItem value="audio-processing">Audio Processing</SelectItem>
              <SelectItem value="time-series">Time Series Analysis</SelectItem>
              <SelectItem value="reinforcement-learning">Reinforcement Learning</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500">Select the category that best describes your model's primary function</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="model-tags" className="text-white">
            Tags <span className="text-red-500">*</span>
          </Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <Badge key={tag} className="bg-[#333] hover:bg-[#444] text-white flex items-center gap-1 py-1 px-2">
                {tag}
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
              </Badge>
            ))}
          </div>
          <Input
            id="model-tags"
            placeholder="Add tags (press Enter after each tag)"
            className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
          />
          <p className="text-xs text-gray-500">
            Add at least 3 tags to help users find your model. Press Enter after each tag.
          </p>
        </div>
      </div>
    </div>
  )
}
