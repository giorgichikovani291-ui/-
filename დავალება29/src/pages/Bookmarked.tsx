import { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MediaGrid from '../components/MediaGrid'
import { useBookmarks } from '../context/BookmarksContext'

export default function Bookmarked() {
  const { bookmarks } = useBookmarks()
  const [query, setQuery] = useState('')

  const all = useMemo(() => Object.values(bookmarks), [bookmarks])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return all
    return all.filter((item) => item.name.toLowerCase().includes(q))
  }, [all, query])

  const movies = filtered.filter((item) => item.category === 'movie')
  const series = filtered.filter((item) => item.category === 'series')

  return (
    <div className="flex flex-col gap-10">
      <SearchBar value={query} onChange={setQuery} placeholder="Search for bookmarked shows" />
      <MediaGrid
        title="Bookmarked Movies"
        items={movies}
        emptyMessage="You haven't bookmarked any movies yet."
      />
      <MediaGrid
        title="Bookmarked TV Series"
        items={series}
        emptyMessage="You haven't bookmarked any TV series yet."
      />
    </div>
  )
}
