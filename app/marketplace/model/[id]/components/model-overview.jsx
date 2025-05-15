export function ModelOverview() {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">DeepVision Pro</h3>
        <p className="text-gray-300">
          DeepVision Pro is a state-of-the-art computer vision model that excels at object detection, image segmentation,
          and visual classification tasks. Built on a transformer-based architecture, it delivers exceptional accuracy
          across a wide range of visual recognition challenges.
        </p>
  
        <h4 className="text-lg font-medium text-white mt-6">Key Features</h4>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Real-time object detection with 98.7% accuracy</li>
          <li>Instance segmentation for precise object boundaries</li>
          <li>Multi-class classification across 1,000+ categories</li>
          <li>Low-latency inference optimized for edge devices</li>
          <li>Fine-tuning capabilities with minimal training data</li>
        </ul>
  
        <h4 className="text-lg font-medium text-white mt-6">Use Cases</h4>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Autonomous vehicles and robotics</li>
          <li>Medical imaging and diagnostics</li>
          <li>Retail analytics and inventory management</li>
          <li>Security and surveillance systems</li>
          <li>Augmented reality applications</li>
        </ul>
  
        <h4 className="text-lg font-medium text-white mt-6">Supported Data Types</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="px-3 py-1 bg-[#333] rounded-full text-sm">JPEG/PNG</div>
          <div className="px-3 py-1 bg-[#333] rounded-full text-sm">WebP</div>
          <div className="px-3 py-1 bg-[#333] rounded-full text-sm">GIF</div>
          <div className="px-3 py-1 bg-[#333] rounded-full text-sm">Video Frames</div>
          <div className="px-3 py-1 bg-[#333] rounded-full text-sm">Camera Feed</div>
        </div>
      </div>
    )
  }
  