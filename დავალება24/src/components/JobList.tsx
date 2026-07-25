import type { JobListProps } from '../types'
import JobCard from './JobCard'

export default function JobList({ jobs, activeFilters, onTagClick }: JobListProps) {
  return (
    <div className="flex flex-col gap-6 md:gap-4 px-4 md:px-0 pb-16">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} activeFilters={activeFilters} onTagClick={onTagClick} />
      ))}
    </div>
  )
}
