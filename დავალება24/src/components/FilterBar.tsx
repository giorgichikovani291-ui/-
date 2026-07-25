import type { FilterBarProps } from '../types'
import iconRemove from '../assets/icon-remove.svg'

export default function FilterBar({ filters, onRemove, onClear }: FilterBarProps) {
  if (filters.length === 0) return null

  return (
    <div className="mx-4 md:mx-0 -mt-8 md:-mt-10 mb-8 md:mb-12 bg-white rounded-md md:rounded-lg shadow-lg p-6 flex flex-wrap items-center gap-3">
      <div className="flex flex-wrap gap-3 flex-1">
        {filters.map((filter) => (
          <div key={filter} className="flex bg-[#effafa] rounded overflow-hidden">
            <span className="px-3 py-2 text-[#5ba4a4] font-bold text-sm">{filter}</span>
            <button
              type="button"
              onClick={() => onRemove(filter)}
              className="w-8 h-full bg-[#5ba4a4] hover:bg-[#2b3939] flex items-center justify-center text-white transition-colors"
              aria-label={`Remove ${filter} filter`}
            >
              <img src={iconRemove} alt="" className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onClear}
        className="text-[#5ba4a4] font-bold text-sm underline hover:text-[#2b3939] whitespace-nowrap"
      >
        Clear
      </button>
    </div>
  )
}
