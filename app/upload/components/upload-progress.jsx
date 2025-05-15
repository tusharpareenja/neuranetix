import { CheckCircle } from "lucide-react"



export function UploadProgress({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="mt-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-400">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm text-gray-400">{Math.round(progress)}% Complete</span>
      </div>
      <div className="w-full h-2 bg-[#333] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#6366F1] transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex items-center mt-2">
        <CheckCircle className="h-4 w-4 text-[#10B981] mr-2" />
        <span className="text-sm text-gray-400">Your progress is automatically saved</span>
      </div>
    </div>
  )
}
