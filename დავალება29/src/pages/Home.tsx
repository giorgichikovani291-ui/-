import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import TrendingRow from '../components/TrendingRow'
import MediaGrid from '../components/MediaGrid'
import { fetchShowsPage, searchShows } from '../api/tvmaze'
import { useDebounce } from '../hooks/useDebounce'
import type { MediaItem } from '../types'

export default function Home() {
  const [catalog, setCatalog] = useState<MediaItem[]>([])
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState<MediaItem[]>([])
  const debouncedQuery = useDebounce(query, 400)

  useEffect(() => {
    fetchShowsPage(0).then(setCatalog).catch(() => setCatalog([]))
  }, [])

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSearchResults([])
      return
    }
    searchShows(debouncedQuery).then(setSearchResults).catch(() => setSearchResults([]))
  }, [debouncedQuery])

  const trending = useMemo(
    () => [...catalog].sort((a, b) => b.weight - a.weight).slice(0, 8),
    [catalog],
  )

  const recommended = useMemo(() => {
    const trendingIds = new Set(trending.map((item) => item.id))
    return [...catalog]
      .filter((item) => !trendingIds.has(item.id))
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 12)
  }, [catalog, trending])

  const isSearching = debouncedQuery.trim().length > 0

  return (
    <div className="flex flex-col gap-10">
      <SearchBar value={query} onChange={setQuery} placeholder="Search for movies or TV series" />

      {isSearching ? (
        <MediaGrid
          title={`Found ${searchResults.length} results for '${debouncedQuery}'`}
          items={searchResults}
          emptyMessage="No results found."
        />
      ) : (
        <>
          <TrendingRow items={trending} />
          <MediaGrid title="Recommended for you" items={recommended} />
        </>
      )}
    </div>
  )
}
