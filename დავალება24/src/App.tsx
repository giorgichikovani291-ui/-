import { useState } from 'react'
import type { Job } from './types'
import jobsData from './data.json'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import JobList from './components/JobList'

export default function App() {
  const [jobs] = useState<Job[]>(jobsData as Job[])
  const [filters, setFilters] = useState<string[]>([])

  const addFilter = (tag: string) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag])
    }
  }

  const removeFilter = (tag: string) => {
    setFilters(filters.filter((f) => f !== tag))
  }

  const clearFilters = () => setFilters([])

  const filteredJobs =
    filters.length === 0
      ? jobs
      : jobs.filter((job) => filters.every((f) => job.languages.includes(f)))

  return (
    <div className="min-h-screen bg-[#effafa]">
      <Header />
      <div className="max-w-5xl mx-auto pt-8 md:pt-14">
        <FilterBar filters={filters} onRemove={removeFilter} onClear={clearFilters} />
        <JobList jobs={filteredJobs} activeFilters={filters} onTagClick={addFilter} />
      </div>
    </div>
  )
}
