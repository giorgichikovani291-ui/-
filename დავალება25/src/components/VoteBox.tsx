import type { VoteBoxProps } from '../types'

export default function VoteBox({ score, onUpvote, onDownvote, className = '' }: VoteBoxProps) {
  return (
    <div className={`flex items-center justify-center bg-[#F5F6FA] rounded-lg ${className}`}>
      <button
        onClick={onUpvote}
        aria-label="Upvote"
        className="text-[#C5C6EC] hover:text-[#5457B0] cursor-pointer p-2"
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
          <rect x="5" y="0" width="2" height="12" />
          <rect x="0" y="5" width="12" height="2" />
        </svg>
      </button>
      <span className="text-[#5457B0] font-medium">{score}</span>
      <button
        onClick={onDownvote}
        aria-label="Downvote"
        className="text-[#C5C6EC] hover:text-[#5457B0] cursor-pointer p-2"
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
          <rect x="0" y="5" width="12" height="2" />
        </svg>
      </button>
    </div>
  )
}
