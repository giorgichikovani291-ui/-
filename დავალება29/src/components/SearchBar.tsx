import { SearchIcon } from './icons/Icons'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="flex items-center gap-4 border-b border-blueGrey/40 pb-3">
      <SearchIcon className="w-5 h-5 text-blueGrey shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-lg placeholder:text-blueGrey"
      />
    </div>
  )
}
