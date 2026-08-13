export interface TVMazeImage {
  medium: string
  original: string
}

export interface TVMazeShow {
  id: number
  name: string
  type: string
  language: string | null
  genres: string[]
  status: string
  premiered: string | null
  ended: string | null
  rating: {
    average: number | null
  }
  weight: number
  image: TVMazeImage | null
  summary: string | null
}

export type ContentCategory = 'movie' | 'series'

export interface MediaItem {
  id: number
  name: string
  category: ContentCategory
  year: string
  rating: number | null
  weight: number
  image: string | null
  summary: string
}

export interface BookmarksContextValue {
  bookmarks: Record<number, MediaItem>
  isBookmarked: (id: number) => boolean
  toggleBookmark: (item: MediaItem) => void
}

export interface NavLink {
  to: string
  label: string
  icon: 'home' | 'movies' | 'series' | 'bookmark'
}
