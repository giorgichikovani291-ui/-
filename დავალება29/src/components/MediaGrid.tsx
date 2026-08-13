import MediaCard from './MediaCard'
import type { MediaItem } from '../types'

interface MediaGridProps {
  title?: string
  items: MediaItem[]
  emptyMessage?: string
}

export default function MediaGrid({ title, items, emptyMessage }: MediaGridProps) {
  return (
    <section className="flex flex-col gap-4">
      {title && <h2 className="text-xl font-light">{title}</h2>}
      {items.length === 0 && emptyMessage ? (
        <p className="text-blueGrey">{emptyMessage}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
          {items.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}
