import { useEffect, useMemo, useState } from 'react'
import SearchBar from './SearchBar'
import MediaGrid from './MediaGrid'
import { fetchCatalog, searchShows } from '../api/tvmaze'
import { useDebounce } from '../hooks/useDebounce'
import type { ContentCategory, MediaItem } from '../types'

interface CategoryPageProps {
  category: ContentCategory
  title: string
  searchPlaceholder: string
}

export default function CategoryPage({ category, title, searchPlaceholder }: CategoryPageProps) {
  const [catalog, setCatalog] = useState<MediaItem[]>([])
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState<MediaItem[]>([])
  const debouncedQuery = useDebounce(query, 400)

  useEffect(() => {
    fetchCatalog(3).then(setCatalog).catch(() => setCatalog([]))
  }, [])

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSearchResults([])
      return
    }
    searchShows(debouncedQuery).then(setSearchResults).catch(() => setSearchResults([]))
  }, [debouncedQuery])

  const filteredCatalog = useMemo(
    () => catalog.filter((item) => item.category === category),
    [catalog, category],
  )

  const filteredSearch = useMemo(
    () => searchResults.filter((item) => item.category === category),
    [searchResults, category],
  )

  const isSearching = debouncedQuery.trim().length > 0

  return (
    <div className="flex flex-col gap-10">
      <SearchBar value={query} onChange={setQuery} placeholder={searchPlaceholder} />
      <MediaGrid
        title={isSearching ? `Found ${filteredSearch.length} results for '${debouncedQuery}'` : title}
        items={isSearching ? filteredSearch : filteredCatalog}
        emptyMessage="No results found."
      />
    </div>
  )
}
