export function ModelDocumentation() {
    return (
      <div className="prose prose-invert max-w-none">
        <h2>DeepVision Pro Documentation</h2>
  
        <h3>Getting Started</h3>
        <p>
          To use DeepVision Pro in your application, you'll need to initialize the model and prepare your input data
          correctly. Follow the steps below to integrate the model.
        </p>
  
        <h4>Installation</h4>
        <pre className="bg-[#111] p-4 rounded-md overflow-x-auto">
          <code>{`npm install @deepvision/pro
  # or
  yarn add @deepvision/pro`}</code>
        </pre>
  
        <h4>Basic Usage</h4>
        <pre className="bg-[#111] p-4 rounded-md overflow-x-auto">
          <code>{`import { DeepVisionPro } from '@deepvision/pro';
  
  // Initialize the model
  const model = new DeepVisionPro({
    apiKey: 'your_api_key',
    modelVersion: 'v1.2',
  });
  
  // Process an image
  async function detectObjects(imageUrl) {
    const results = await model.detect(imageUrl);
    
    // Results contain bounding boxes, classes, and confidence scores
    console.log(results);
    
    return results;
  }`}</code>
        </pre>
  
        <h3>API Reference</h3>
  
        <h4>Configuration Options</h4>
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="border border-[#333] p-2 text-left">Parameter</th>
              <th className="border border-[#333] p-2 text-left">Type</th>
              <th className="border border-[#333] p-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#333] p-2">apiKey</td>
              <td className="border border-[#333] p-2">string</td>
              <td className="border border-[#333] p-2">Your API key for authentication</td>
            </tr>
            <tr>
              <td className="border border-[#333] p-2">modelVersion</td>
              <td className="border border-[#333] p-2">string</td>
              <td className="border border-[#333] p-2">Version of the model to use</td>
            </tr>
            <tr>
              <td className="border border-[#333] p-2">threshold</td>
              <td className="border border-[#333] p-2">number</td>
              <td className="border border-[#333] p-2">Confidence threshold (0-1)</td>
            </tr>
          </tbody>
        </table>
  
        <h4>Methods</h4>
        <div className="mt-4 space-y-4">
          <div>
            <h5 className="font-bold">detect(input)</h5>
            <p>Detects objects in the provided image.</p>
            <ul>
              <li>
                <strong>input:</strong> URL, File, or Base64 encoded image
              </li>
              <li>
                <strong>returns:</strong> Promise with detection results
              </li>
            </ul>
          </div>
  
          <div>
            <h5 className="font-bold">segment(input)</h5>
            <p>Performs instance segmentation on the provided image.</p>
            <ul>
              <li>
                <strong>input:</strong> URL, File, or Base64 encoded image
              </li>
              <li>
                <strong>returns:</strong> Promise with segmentation masks
              </li>
            </ul>
          </div>
  
          <div>
            <h5 className="font-bold">classify(input)</h5>
            <p>Classifies the main subject of the provided image.</p>
            <ul>
              <li>
                <strong>input:</strong> URL, File, or Base64 encoded image
              </li>
              <li>
                <strong>returns:</strong> Promise with classification results
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  