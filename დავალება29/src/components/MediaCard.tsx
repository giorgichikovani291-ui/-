import { useBookmarks } from '../context/BookmarksContext'
import { BookmarkIcon, MoviesIcon, SeriesIcon, PlayIcon } from './icons/Icons'
import type { MediaItem } from '../types'

interface MediaCardProps {
  item: MediaItem
  variant?: 'standard' | 'large'
}

export default function MediaCard({ item, variant = 'standard' }: MediaCardProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const bookmarked = isBookmarked(item.id)

  return (
    <div className="flex flex-col gap-2 group">
      <div
        className={`relative rounded-lg overflow-hidden bg-semiDark ${
          variant === 'large' ? 'aspect-video' : 'aspect-[3/2]'
        }`}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-blueGrey">
            {item.category === 'movie' ? (
              <MoviesIcon className="w-8 h-8" />
            ) : (
              <SeriesIcon className="w-8 h-8" />
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => toggleBookmark(item)}
          aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-darkBlue/50 hover:bg-blueGrey/60 flex items-center justify-center transition-colors"
        >
          <BookmarkIcon
            filled={bookmarked}
            className={`w-3 h-3.5 ${bookmarked ? 'text-red' : 'text-white'}`}
          />
        </button>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-darkBlue/10">
          <div className="flex items-center gap-2 bg-white/90 rounded-full pl-3 pr-4 py-1.5">
            <PlayIcon className="w-3 h-3 text-darkBlue" />
            <span className="text-darkBlue text-sm font-medium">Play</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-blueGrey">
        <span>{item.year}</span>
        <span className="w-1 h-1 rounded-full bg-blueGrey" />
        <span className="flex items-center gap-1">
          {item.category === 'movie' ? (
            <MoviesIcon className="w-3 h-3" />
          ) : (
            <SeriesIcon className="w-3 h-3" />
          )}
          {item.category === 'movie' ? 'Movie' : 'TV Series'}
        </span>
        <span className="w-1 h-1 rounded-full bg-blueGrey" />
        <span>{item.rating ? `★ ${item.rating.toFixed(1)}` : 'N/A'}</span>
      </div>

      <h3 className="font-medium text-sm truncate">{item.name}</h3>
    </div>
  )
}
