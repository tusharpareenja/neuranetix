import { CheckCircle, Download, Eye, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



export default function ModelCard({
  id,
  name,
  creator,
  tags,
  price,
  verified,
  views,
  downloads,
  license,
  image,
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] transition-all duration-300 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10">
      <Link href={`/model/${id}`} className="block">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <Link href={`/model/${id}`} className="block">
            <h3 className="font-bold text-white hover:text-emerald-400">{name}</h3>
          </Link>
          <button className="rounded-full p-1 text-gray-400 hover:bg-[#2A2A2A] hover:text-white">
            <Heart className="h-4 w-4" />
          </button>
        </div>
        <div className="mb-3 flex items-center gap-1">
          <Link
            href={`/creator/${creator.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-sm text-gray-400 hover:text-emerald-400"
          >
            {creator}
          </Link>
          {verified && <CheckCircle className="h-4 w-4 fill-emerald-500 text-white" />}
        </div>
        <div className="mb-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#2A2A2A] px-2 py-0.5 text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-3 flex items-center justify-between">
          <div className="text-lg font-bold text-white">${price}</div>
          <div className="text-xs text-gray-400">{license}</div>
        </div>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            <span>{views.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="h-3.5 w-3.5" />
            <span>{downloads.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
