import { cn } from "@/lib/utils"



export default function StatusBadge({ status, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        status === "verified" && "bg-green-950/50 text-green-400 border border-green-800/50",
        status === "in-progress" && "bg-yellow-950/50 text-yellow-400 border border-yellow-800/50",
        status === "rejected" && "bg-red-950/50 text-red-400 border border-red-800/50",
        className,
      )}
    >
      {status === "verified" && "Verified"}
      {status === "in-progress" && "In Progress"}
      {status === "rejected" && "Rejected"}
    </span>
  )
}
