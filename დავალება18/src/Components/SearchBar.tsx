import type { SearchBarProps } from "./types";

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  error,
}: SearchBarProps) {
  return (
    <form
      className="search-bar"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder="Search GitHub username…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className="search-error">{error}</span>}
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}
