import type { CommentListProps } from '../types'
import CommentCard from './CommentCard'

export default function CommentList({ comments, onUpvote, onDownvote, onDelete, onEdit, onReply }: CommentListProps) {
  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          threadId={comment.id}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
          onDelete={onDelete}
          onEdit={onEdit}
          onReply={onReply}
        />
      ))}
    </div>
  )
}
