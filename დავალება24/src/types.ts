export interface Job {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

export interface FilterBarProps {
  filters: string[]
  onRemove: (filter: string) => void
  onClear: () => void
}

export interface JobCardProps {
  job: Job
  activeFilters: string[]
  onTagClick: (tag: string) => void
}

export interface JobListProps {
  jobs: Job[]
  activeFilters: string[]
  onTagClick: (tag: string) => void
}
