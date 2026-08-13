import MediaCard from './MediaCard'
import type { MediaItem } from '../types'

interface TrendingRowProps {
  items: MediaItem[]
}

export default function TrendingRow({ items }: TrendingRowProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-light">Trending</h2>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {items.map((item) => (
          <div key={item.id} className="w-64 sm:w-72 shrink-0">
            <MediaCard item={item} variant="large" />
          </div>
        ))}
      </div>
    </section>
  )
}
