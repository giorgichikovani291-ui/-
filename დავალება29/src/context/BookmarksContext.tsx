import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { MediaItem, BookmarksContextValue } from '../types'

const STORAGE_KEY = 'entertainment-app-bookmarks'

const BookmarksContext = createContext<BookmarksContextValue | null>(null)

function loadBookmarks(): Record<number, MediaItem> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Record<number, MediaItem>>(loadBookmarks)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks))
  }, [bookmarks])

  function isBookmarked(id: number) {
    return Boolean(bookmarks[id])
  }

  function toggleBookmark(item: MediaItem) {
    setBookmarks((prev) => {
      const next = { ...prev }
      if (next[item.id]) {
        delete next[item.id]
      } else {
        next[item.id] = item
      }
      return next
    })
  }

  return (
    <BookmarksContext.Provider value={{ bookmarks, isBookmarked, toggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  )
}

export function useBookmarks() {
  const ctx = useContext(BookmarksContext)
  if (!ctx) throw new Error('useBookmarks must be used within BookmarksProvider')
  return ctx
}
