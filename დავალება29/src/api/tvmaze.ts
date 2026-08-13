import type { TVMazeShow, MediaItem, ContentCategory } from '../types'

const BASE_URL = 'https://api.tvmaze.com'

function getCategory(id: number): ContentCategory {
  return id % 2 === 0 ? 'movie' : 'series'
}

function stripHtml(html: string | null): string {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '')
}

export function normalizeShow(show: TVMazeShow): MediaItem {
  return {
    id: show.id,
    name: show.name,
    category: getCategory(show.id),
    year: show.premiered ? show.premiered.slice(0, 4) : '—',
    rating: show.rating?.average ?? null,
    weight: show.weight,
    image: show.image?.original ?? show.image?.medium ?? null,
    summary: stripHtml(show.summary),
  }
}

export async function fetchShowsPage(page: number): Promise<MediaItem[]> {
  const res = await fetch(`${BASE_URL}/shows?page=${page}`)
  if (!res.ok) throw new Error('Failed to fetch shows')
  const data: TVMazeShow[] = await res.json()
  return data.map(normalizeShow)
}

export async function fetchCatalog(pageCount: number): Promise<MediaItem[]> {
  const pages = Array.from({ length: pageCount }, (_, i) => i)
  const results = await Promise.all(pages.map(fetchShowsPage))
  return results.flat()
}

export async function searchShows(query: string): Promise<MediaItem[]> {
  const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error('Failed to search shows')
  const data: { score: number; show: TVMazeShow }[] = await res.json()
  return data.map((entry) => normalizeShow(entry.show))
}
