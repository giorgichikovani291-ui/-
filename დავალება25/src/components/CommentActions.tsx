import type { CommentActionsProps } from '../types'

function ReplyIcon() {
  return (
    <svg width="14" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 14 4 9 9 4" />
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  )
}

function PencilIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}

export default function CommentActions({ isOwn, onReply, onEdit, onDelete, className = '' }: CommentActionsProps) {
  if (isOwn) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <button
          onClick={onDelete}
          className="flex items-center gap-1.5 text-[#DC6C6C] font-medium cursor-pointer hover:opacity-60"
        >
          <TrashIcon />
          Delete
        </button>
        <button
          onClick={onEdit}
          className="flex items-center gap-1.5 text-[#5457B0] font-medium cursor-pointer hover:opacity-60"
        >
          <PencilIcon />
          Edit
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={onReply}
      className={`flex items-center gap-1.5 text-[#5457B0] font-medium cursor-pointer hover:opacity-60 ${className}`}
    >
      <ReplyIcon />
      Reply
    </button>
  )
}
