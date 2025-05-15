"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Percent } from "lucide-react"

export function ModelPricing() {
  const [priceUSD, setPriceUSD] = useState("99.99")
  const [priceETH, setPriceETH] = useState("0.04")
  const [royaltyPercent, setRoyaltyPercent] = useState(10)
  const [isFree, setIsFree] = useState(false)

  // Simulate ETH conversion
  useEffect(() => {
    if (isFree) {
      setPriceETH("0")
      return
    }

    const usdValue = Number.parseFloat(priceUSD) || 0
    // Mock conversion rate: 1 ETH = 2500 USD
    const ethValue = usdValue / 2500
    setPriceETH(ethValue.toFixed(4))
  }, [priceUSD, isFree])

  const handlePriceChange = (e) => {
    setPriceUSD(e.target.value)
  }

  const handleFreeToggle = (checked) => {
    setIsFree(checked)
    if (checked) {
      setPriceUSD("0")
    } else {
      setPriceUSD("99.99")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Pricing</h2>
        <p className="text-gray-400 mb-6">Set your pricing model and define usage rights for your AI model.</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-3 mb-6">
          <Checkbox
            id="free-model"
            className="border-[#333] text-[#6366F1] mt-1"
            checked={isFree}
            onCheckedChange={handleFreeToggle}
          />
          <div className="space-y-1">
            <Label htmlFor="free-model" className="text-white cursor-pointer">
              Make this model available for free
            </Label>
            <p className="text-sm text-gray-400">
              Free models get more downloads but don't generate revenue. Good for building reputation.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="price-usd" className="text-white">
              Price (USD) {!isFree && <span className="text-red-500">*</span>}
            </Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="price-usd"
                type="number"
                value={priceUSD}
                onChange={handlePriceChange}
                disabled={isFree}
                className="bg-[#111] border-[#333] focus-visible:ring-[#6366F1] text-white pl-10"
                min="0"
                step="0.01"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 px-1">
              <span>Min: $0</span>
              <span>Recommended: $49-$499</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price-eth" className="text-white">
              Estimated Price (ETH)
            </Label>
            <Input id="price-eth" value={priceETH} disabled className="bg-[#111] border-[#333] text-gray-400" />
            <p className="text-xs text-gray-500">
              Automatically calculated based on current exchange rate. Updates daily.
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <Label className="text-white">License Duration</Label>

          <Select defaultValue="perpetual">
            <SelectTrigger className="bg-[#111] border-[#333] focus:ring-[#6366F1] text-white">
              <SelectValue placeholder="Select license duration" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1A1A] border-[#333] text-white">
              <SelectItem value="perpetual">Perpetual (one-time payment)</SelectItem>
              <SelectItem value="annual">Annual Subscription</SelectItem>
              <SelectItem value="monthly">Monthly Subscription</SelectItem>
              <SelectItem value="custom">Custom Term</SelectItem>
            </SelectContent>
          </Select>

          <p className="text-xs text-gray-500">Define how long the license is valid after purchase.</p>
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex justify-between items-center">
            <Label className="text-white">Royalty Percentage</Label>
            <Badge className="bg-[#333] text-white">{royaltyPercent}%</Badge>
          </div>

          <Slider
            defaultValue={[10]}
            max={30}
            step={1}
            className="py-4"
            onValueChange={(value) => setRoyaltyPercent(value[0])}
          />

          <p className="text-xs text-gray-500">
            Percentage of secondary sales you'll receive if your model is resold (only applies to exclusive licenses).
          </p>
        </div>

        <div className="space-y-3 pt-4">
          <Label className="text-white">
            Usage Rights <span className="text-red-500">*</span>
          </Label>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox id="commercial" className="border-[#333] text-[#6366F1] mt-1" defaultChecked />
              <div className="space-y-1">
                <Label htmlFor="commercial" className="text-white cursor-pointer">
                  Commercial Use
                </Label>
                <p className="text-sm text-gray-400">
                  Allow buyers to use your model in commercial products or services.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox id="modification" className="border-[#333] text-[#6366F1] mt-1" defaultChecked />
              <div className="space-y-1">
                <Label htmlFor="modification" className="text-white cursor-pointer">
                  Modification Rights
                </Label>
                <p className="text-sm text-gray-400">Allow buyers to modify, fine-tune, or adapt your model.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox id="attribution" className="border-[#333] text-[#6366F1] mt-1" defaultChecked />
              <div className="space-y-1">
                <Label htmlFor="attribution" className="text-white cursor-pointer">
                  Require Attribution
                </Label>
                <p className="text-sm text-gray-400">Require buyers to credit you when using your model.</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-[#111] border-[#333] p-4 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-medium">Earnings Estimate</h3>
            <Badge className="bg-[#6366F1]">
              <Percent className="h-3 w-3 mr-1" /> 85% Creator Share
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Your Price</span>
              <span className="text-white">${priceUSD}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Platform Fee (15%)</span>
              <span className="text-white">-${(Number.parseFloat(priceUSD) * 0.15).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-medium pt-2 border-t border-[#333]">
              <span className="text-gray-300">Your Earnings Per Sale</span>
              <span className="text-[#10B981]">${(Number.parseFloat(priceUSD) * 0.85).toFixed(2)}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
