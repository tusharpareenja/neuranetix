import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import StatusBadge from "./status-badge"
import { formatDistanceToNow } from "date-fns"



// Sample data
const models = [
  {
    id: "1",
    name: "NeuralVision Pro",
    status: "verified",
    price: { amount: 499, currency: "USDT" },
    views: 1245,
    soldCount: 32,
    dateSubmitted: new Date(2024, 3, 15),
  },
  {
    id: "2",
    name: "TextGenius GPT",
    status: "in-progress",
    price: { amount: 299, currency: "USDT" },
    views: 876,
    soldCount: 0,
    dateSubmitted: new Date(2024, 4, 2),
  },
  {
    id: "3",
    name: "AudioSynth AI",
    status: "rejected",
    price: { amount: 199, currency: "USDT" },
    views: 432,
    soldCount: 0,
    dateSubmitted: new Date(2024, 3, 28),
  },
  {
    id: "4",
    name: "ImageCraft 3000",
    status: "verified",
    price: { amount: 599, currency: "USDT" },
    views: 2134,
    soldCount: 45,
    dateSubmitted: new Date(2024, 3, 10),
  },
  {
    id: "5",
    name: "CodeAssist AI",
    status: "in-progress",
    price: { amount: 349, currency: "TON" },
    views: 987,
    soldCount: 0,
    dateSubmitted: new Date(2024, 4, 5),
  },
]



export default function ModelsTable({ filter }) {
  // Filter models based on the selected tab
  const filteredModels = filter === "all" ? models : models.filter((model) => model.status === filter)

  return (
    <div className="rounded-md border border-zinc-800">
      <Table>
        <TableHeader className="bg-zinc-900">
          <TableRow className="hover:bg-zinc-900/80 border-zinc-800">
            <TableHead className="text-zinc-400">Model Name</TableHead>
            <TableHead className="text-zinc-400">Status</TableHead>
            <TableHead className="text-zinc-400">Price</TableHead>
            <TableHead className="text-zinc-400 text-right">Views</TableHead>
            <TableHead className="text-zinc-400 text-right">Sold</TableHead>
            <TableHead className="text-zinc-400 text-right">Date Submitted</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredModels.length === 0 ? (
            <TableRow className="hover:bg-zinc-900/20 border-zinc-800">
              <TableCell colSpan={6} className="text-center py-6 text-zinc-500">
                No models found
              </TableCell>
            </TableRow>
          ) : (
            filteredModels.map((model) => (
              <TableRow key={model.id} className="hover:bg-zinc-900/20 border-zinc-800">
                <TableCell className="font-medium">{model.name}</TableCell>
                <TableCell>
                  <StatusBadge status={model.status} />
                </TableCell>
                <TableCell>
                  {model.price.amount} {model.price.currency}
                </TableCell>
                <TableCell className="text-right">{model.views.toLocaleString()}</TableCell>
                <TableCell className="text-right">{model.soldCount.toLocaleString()}</TableCell>
                <TableCell className="text-right text-zinc-400">
                  {formatDistanceToNow(model.dateSubmitted, { addSuffix: true })}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
