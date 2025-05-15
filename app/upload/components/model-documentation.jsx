"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ModelDocumentation() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Documentation</h2>
        <p className="text-gray-400 mb-6">
          Provide detailed documentation to help users understand how to use your model effectively.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="input-format" className="text-white">
            Input Format <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="input-format"
            placeholder="Describe the expected input format (e.g., image dimensions, text format, etc.)"
            className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white min-h-[100px]"
          />
          <p className="text-xs text-gray-500">
            Be specific about data types, dimensions, and any preprocessing required.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="output-format" className="text-white">
            Output Format <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="output-format"
            placeholder="Describe the model's output format (e.g., class probabilities, bounding boxes, generated text)"
            className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white min-h-[100px]"
          />
          <p className="text-xs text-gray-500">Explain what the model returns and how to interpret the results.</p>
        </div>

        <div className="space-y-2">
          <Label className="text-white">
            Usage Instructions <span className="text-red-500">*</span>
          </Label>

          <Tabs defaultValue="write" className="w-full">
            <TabsList className="bg-[#111] border border-[#333]">
              <TabsTrigger value="write" className="data-[state=active]:bg-[#333] data-[state=active]:text-white">
                Write
              </TabsTrigger>
              <TabsTrigger value="preview" className="data-[state=active]:bg-[#333] data-[state=active]:text-white">
                Preview
              </TabsTrigger>
            </TabsList>
            <TabsContent value="write" className="mt-2">
              <Textarea
                placeholder="Provide step-by-step instructions on how to use your model. You can use markdown for formatting."
                className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white min-h-[200px]"
              />
            </TabsContent>
            <TabsContent
              value="preview"
              className="mt-2 p-4 bg-[#111] border border-[#333] rounded-md min-h-[200px] prose prose-invert max-w-none"
            >
              <p className="text-gray-400 italic">Markdown preview will appear here...</p>
            </TabsContent>
          </Tabs>

          <p className="text-xs text-gray-500">
            You can use Markdown for formatting. Include code examples where appropriate.
          </p>
        </div>

        <div className="space-y-2">
          <Label className="text-white">
            Performance Metrics <span className="text-red-500">*</span>
          </Label>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="accuracy" className="border-[#333]">
              <AccordionTrigger className="text-white hover:text-white hover:no-underline py-2">
                Accuracy Metrics
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="accuracy" className="text-sm text-gray-300">
                      Accuracy (%)
                    </Label>
                    <Input
                      id="accuracy"
                      type="number"
                      placeholder="e.g., 95.5"
                      className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="precision" className="text-sm text-gray-300">
                      Precision
                    </Label>
                    <Input
                      id="precision"
                      type="number"
                      placeholder="e.g., 0.92"
                      className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recall" className="text-sm text-gray-300">
                      Recall
                    </Label>
                    <Input
                      id="recall"
                      type="number"
                      placeholder="e.g., 0.89"
                      className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="f1" className="text-sm text-gray-300">
                      F1 Score
                    </Label>
                    <Input
                      id="f1"
                      type="number"
                      placeholder="e.g., 0.90"
                      className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="performance" className="border-[#333]">
              <AccordionTrigger className="text-white hover:text-white hover:no-underline py-2">
                Performance Characteristics
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="inference-time" className="text-sm text-gray-300">
                      Avg. Inference Time (ms)
                    </Label>
                    <Input
                      id="inference-time"
                      type="number"
                      placeholder="e.g., 150"
                      className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model-size" className="text-sm text-gray-300">
                      Model Size (MB)
                    </Label>
                    <Input
                      id="model-size"
                      type="number"
                      placeholder="e.g., 250"
                      className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="memory-usage" className="text-sm text-gray-300">
                      Memory Usage (MB)
                    </Label>
                    <Input
                      id="memory-usage"
                      type="number"
                      placeholder="e.g., 512"
                      className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="throughput" className="text-sm text-gray-300">
                      Throughput (samples/sec)
                    </Label>
                    <Input
                      id="throughput"
                      type="number"
                      placeholder="e.g., 100"
                      className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dataset" className="border-[#333]">
              <AccordionTrigger className="text-white hover:text-white hover:no-underline py-2">
                Dataset Information
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="dataset-description" className="text-sm text-gray-300">
                      Dataset Description
                    </Label>
                    <Textarea
                      id="dataset-description"
                      placeholder="Describe the dataset used to train and evaluate your model"
                      className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white min-h-[100px]"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="training-samples" className="text-sm text-gray-300">
                        Training Samples
                      </Label>
                      <Input
                        id="training-samples"
                        type="number"
                        placeholder="e.g., 50000"
                        className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="validation-samples" className="text-sm text-gray-300">
                        Validation Samples
                      </Label>
                      <Input
                        id="validation-samples"
                        type="number"
                        placeholder="e.g., 10000"
                        className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white"
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="text-xs text-gray-500 mt-2">
            Provide performance metrics to help users understand the capabilities and limitations of your model.
          </p>
        </div>
      </div>
    </div>
  )
}
