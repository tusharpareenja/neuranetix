"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function LicensingLegal() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Licensing & Legal</h2>
        <p className="text-gray-400 mb-6">Define how your model can be used and confirm your ownership rights.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center">
            <Label className="text-white">
              License Type <span className="text-red-500">*</span>
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-gray-400 ml-2 cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="bg-[#1A1A1A] border-[#333] text-white max-w-xs">
                  <p>The license type determines how users can use your model:</p>
                  <ul className="list-disc pl-4 mt-1 text-sm">
                    <li>Exclusive: Only one buyer can use the model</li>
                    <li>Non-Exclusive: Multiple buyers can use the model</li>
                    <li>Open: Free for anyone to use with attribution</li>
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <RadioGroup defaultValue="non-exclusive" className="space-y-3">
            <div className="flex items-start space-x-3 p-3 rounded-md border border-[#333] bg-[#111]">
              <RadioGroupItem value="exclusive" id="exclusive" className="border-[#333] text-[#6366F1]" />
              <div className="space-y-1">
                <Label htmlFor="exclusive" className="text-white font-medium cursor-pointer">
                  Exclusive License
                </Label>
                <p className="text-sm text-gray-400">
                  Sell to a single buyer who will have exclusive rights to use your model. Higher pricing recommended.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-md border border-[#333] bg-[#111]">
              <RadioGroupItem value="non-exclusive" id="non-exclusive" className="border-[#333] text-[#6366F1]" />
              <div className="space-y-1">
                <Label htmlFor="non-exclusive" className="text-white font-medium cursor-pointer">
                  Non-Exclusive License
                </Label>
                <p className="text-sm text-gray-400">
                  Sell to multiple buyers who can use your model according to the terms you set.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-md border border-[#333] bg-[#111]">
              <RadioGroupItem value="open" id="open" className="border-[#333] text-[#6366F1]" />
              <div className="space-y-1">
                <Label htmlFor="open" className="text-white font-medium cursor-pointer">
                  Open License
                </Label>
                <p className="text-sm text-gray-400">
                  Make your model freely available with attribution requirements. Good for building reputation.
                </p>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label className="text-white">
            Dataset Origin <span className="text-red-500">*</span>
          </Label>

          <RadioGroup defaultValue="public" className="space-y-3">
            <div className="flex items-start space-x-3 p-3 rounded-md border border-[#333] bg-[#111]">
              <RadioGroupItem value="public" id="public" className="border-[#333] text-[#6366F1]" />
              <div className="space-y-1">
                <Label htmlFor="public" className="text-white font-medium cursor-pointer">
                  Trained on Public Dataset
                </Label>
                <p className="text-sm text-gray-400">
                  Model was trained using publicly available datasets with appropriate licenses.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-md border border-[#333] bg-[#111]">
              <RadioGroupItem value="private" id="private" className="border-[#333] text-[#6366F1]" />
              <div className="space-y-1">
                <Label htmlFor="private" className="text-white font-medium cursor-pointer">
                  Trained on Private Dataset
                </Label>
                <p className="text-sm text-gray-400">
                  Model was trained using private data that you have rights to use for this purpose.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-md border border-[#333] bg-[#111]">
              <RadioGroupItem value="mixed" id="mixed" className="border-[#333] text-[#6366F1]" />
              <div className="space-y-1">
                <Label htmlFor="mixed" className="text-white font-medium cursor-pointer">
                  Mixed Sources
                </Label>
                <p className="text-sm text-gray-400">
                  Model was trained using a combination of public and private data sources.
                </p>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label className="text-white">
            Legal Declarations <span className="text-red-500">*</span>
          </Label>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox id="ownership" className="border-[#333] text-[#6366F1] mt-1" />
              <div className="space-y-1">
                <Label htmlFor="ownership" className="text-white cursor-pointer">
                  I confirm that I am the owner of this model or have the rights to distribute it.
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox id="infringement" className="border-[#333] text-[#6366F1] mt-1" />
              <div className="space-y-1">
                <Label htmlFor="infringement" className="text-white cursor-pointer">
                  I confirm that this model does not infringe on any third-party intellectual property rights.
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox id="terms" className="border-[#333] text-[#6366F1] mt-1" />
              <div className="space-y-1">
                <Label htmlFor="terms" className="text-white cursor-pointer">
                  I agree to the Marketplace Terms of Service and Model Publishing Guidelines.
                </Label>
              </div>
            </div>
          </div>
        </div>

        <Alert className="bg-[#111] border-[#333] text-gray-300">
          <AlertCircle className="h-4 w-4 text-[#6366F1]" />
          <AlertDescription>
            You are responsible for ensuring you have the necessary rights to publish this model. Violations may result
            in removal from the marketplace.
          </AlertDescription>
        </Alert>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="legal" className="border-[#333]">
            <AccordionTrigger className="text-white hover:text-white hover:no-underline py-2">
              Additional Legal Information
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-sm space-y-2">
              <p>
                When you publish a model on our marketplace, you retain ownership of your intellectual property. Our
                platform simply facilitates the licensing of your model to users according to the terms you set.
              </p>
              <p>
                You should ensure that all components of your model, including any libraries or datasets used during
                training, comply with their respective licenses and can be redistributed under your chosen license type.
              </p>
              <p>
                For models trained on public datasets, please provide attribution to the original dataset creators where
                required by their licenses.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
