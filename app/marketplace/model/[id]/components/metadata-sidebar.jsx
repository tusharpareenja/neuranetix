import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Download, Eye, Cpu, Database } from "lucide-react"

export function MetadataSidebar() {
  return (
    <div className="space-y-6 lg:sticky lg:top-8">
      <Card className="bg-[#1A1A1A] border-[#333] overflow-hidden">
        <div className="p-4 border-b border-[#333]">
          <h3 className="font-medium text-white">Model Information</h3>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <Cpu className="h-4 w-4 mr-2" />
              <span>Model Type</span>
            </div>
            <span className="text-white">Vision</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <Clock className="h-4 w-4 mr-2" />
              <span>Upload Date</span>
            </div>
            <span className="text-white">May 10, 2025</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <Download className="h-4 w-4 mr-2" />
              <span>Downloads</span>
            </div>
            <span className="text-white">2,547</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <Eye className="h-4 w-4 mr-2" />
              <span>Views</span>
            </div>
            <span className="text-white">12,893</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <Database className="h-4 w-4 mr-2" />
              <span>Blockchain</span>
            </div>
            <span className="text-white">Ethereum</span>
          </div>
        </div>
      </Card>

      <Card className="bg-[#1A1A1A] border-[#333] overflow-hidden">
        <div className="p-4 border-b border-[#333]">
          <h3 className="font-medium text-white">Technical Specifications</h3>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Architecture</span>
            <span className="text-white">Transformer</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">Parameters</span>
            <span className="text-white">1.2B</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">Input Resolution</span>
            <span className="text-white">640×640</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">Inference Time</span>
            <span className="text-white">~200ms</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">Model Size</span>
            <span className="text-white">4.8 GB</span>
          </div>
        </div>
      </Card>

      <Card className="bg-[#1A1A1A] border-[#333] overflow-hidden">
        <div className="p-4 border-b border-[#333]">
          <h3 className="font-medium text-white">Creator</h3>
        </div>

        <div className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white font-medium">
              AI
            </div>
            <div>
              <div className="text-white font-medium">0x7a86...f3c2</div>
              <div className="text-gray-400 text-sm">12 models published</div>
            </div>
          </div>

          <Button variant="outline" className="w-full mt-4 border-[#333] hover:bg-[#333] hover:text-white">
            View Profile
          </Button>
        </div>
      </Card>
    </div>
  )
}
