export default function AppBadge({ store }: { store: "apple" | "google" }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-light-grey rounded-md px-3 py-2">
      {store === "apple" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#495567">
          <path d="M16.4 1.4c.1 1-.3 2-1 2.8-.7.8-1.8 1.4-2.9 1.3-.1-1 .4-2 1-2.7.8-.9 2-1.4 2.9-1.4ZM19.5 17.4c-.5 1.1-.8 1.6-1.4 2.6-.9 1.4-2.2 3.1-3.7 3.1-1.4 0-1.7-.9-3.6-.9-1.9 0-2.3.9-3.6.9-1.5 0-2.7-1.5-3.6-2.9-2.5-3.7-2.8-8.1-1.2-10.4 1.1-1.7 2.8-2.6 4.5-2.6 1.7 0 2.8 1 4.2 1 1.4 0 2.2-1 4.2-1 1.5 0 3.1.8 4.2 2.2-3.7 2-3.1 7.3.9 8.9Z" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#495567">
          <path d="M4 3.6c-.3.3-.5.7-.5 1.2v14.4c0 .5.2.9.5 1.2l.1.1L13 12 4.1 3.5 4 3.6Z" />
          <path d="M16 15l-3-3 3-3 3.5 2c1 .6 1 1.4 0 2L16 15Z" />
          <path d="M13 12 4.1 20.5c.3.3.9.4 1.5.1L16 15l-3-3Z" />
          <path d="M13 12l3-3 8.6-4.9c-.3-.3-.9-.4-1.5-.1L4.1 3.5 13 12Z" />
        </svg>
      )}
      <div className="leading-tight">
        <p className="text-[9px] text-dim-grey">
          {store === "apple" ? "Download on the" : "GET IT ON"}
        </p>
        <p className="text-xs font-heading font-bold text-dark-navy">
          {store === "apple" ? "App Store" : "Google Play"}
        </p>
      </div>
    </div>
  )
}
