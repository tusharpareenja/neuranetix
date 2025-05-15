import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function UploadHeader() {
  return (
    <div className="mb-8">
      <Link href="/marketplace" className="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Marketplace
      </Link>
      <h1 className="text-3xl font-bold text-white">Upload Your AI Model</h1>
      <p className="text-gray-400 mt-2">
        Complete the form below to list your model on the marketplace. All fields marked with * are required.
      </p>
    </div>
  )
}
