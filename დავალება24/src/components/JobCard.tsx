import type { JobCardProps } from '../types'

export default function JobCard({ job, activeFilters, onTagClick }: JobCardProps) {
  const logo = new URL(`../assets/${job.logo}`, import.meta.url).href
  const cardBase =
    'bg-white rounded-md md:rounded-lg shadow-lg p-6 md:p-8 border-l-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-6'
  const cardBorder = job.featured ? 'border-[#5ba4a4]' : 'border-transparent'
  const tagBase = 'font-bold text-sm px-3 py-2 rounded transition-colors'
  const tagInactive = 'bg-[#effafa] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-white'
  const tagActive = 'bg-[#5ba4a4] text-white'

  return (
    <div className={`${cardBase} ${cardBorder}`}>
      <img
        src={logo}
        alt={job.company}
        className="w-12 h-12 md:w-[88px] md:h-[88px] -mt-10 md:mt-0 self-start"
      />

      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-[#5ba4a4] font-bold text-sm">{job.company}</span>
          {job.new && (
            <span className="bg-[#5ba4a4] text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
              New!
            </span>
          )}
          {job.featured && (
            <span className="bg-[#2b3939] text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
              Featured
            </span>
          )}
        </div>

        <h2 className="text-[#2b3939] font-bold text-lg hover:text-[#5ba4a4] cursor-pointer mb-2">
          {job.position}
        </h2>

        <div className="flex items-center gap-3 text-[#7c8f8a] text-sm">
          <span>{job.postedAt}</span>
          <span>•</span>
          <span>{job.contract}</span>
          <span>•</span>
          <span>{job.location}</span>
        </div>
      </div>

      <div className="hidden md:block w-px self-stretch bg-[#effafa]" />

      <div className="flex flex-wrap gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-[#effafa]">
        {job.languages.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onTagClick(tag)}
            className={`${tagBase} ${activeFilters.includes(tag) ? tagActive : tagInactive}`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
