import { useState } from 'react'
import type { CommentCardProps } from '../types'
import { currentUser } from '../data'
import VoteBox from './VoteBox'
import CommentActions from './CommentActions'
import CommentForm from './CommentForm'
import DeleteModal from './DeleteModal'

export default function CommentCard({ comment, threadId, isReply = false, onUpvote, onDownvote, onDelete, onEdit, onReply }: CommentCardProps) {
  const [isReplying, setIsReplying] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const isOwn = comment.user.username === currentUser.username

  function handleReplySubmit(content: string) {
    onReply(threadId, content, comment.user.username)
    setIsReplying(false)
  }

  function handleEditSubmit(content: string) {
    onEdit(threadId, comment.id, content)
    setIsEditing(false)
  }

  return (
    <div>
      <article className="bg-white rounded-lg p-4 md:p-6 flex flex-col gap-4 md:flex-row md:gap-6">
        <VoteBox
          score={comment.score}
          onUpvote={() => onUpvote(threadId, comment.id)}
          onDownvote={() => onDownvote(threadId, comment.id)}
          className="hidden md:flex flex-col gap-3 px-1 py-3 w-10"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4">
            <img src={comment.user.image} alt={comment.user.username} className="w-8 h-8 rounded-full" />
            <span className="font-medium text-[#364251]">{comment.user.username}</span>
            {isOwn && (
              <span className="bg-[#5457B0] text-white text-xs font-medium px-1.5 py-0.5 rounded-sm">you</span>
            )}
            <span className="text-[#9DA5B0]">{comment.createdAt}</span>
            <CommentActions
              isOwn={isOwn}
              onReply={() => setIsReplying((v) => !v)}
              onEdit={() => setIsEditing(true)}
              onDelete={() => setShowDeleteModal(true)}
              className="hidden md:flex ml-auto"
            />
          </div>

          <div className="mt-3">
            {isEditing ? (
              <CommentForm
                avatar={comment.user.image}
                buttonLabel="Update"
                initialValue={comment.content}
                autoFocus
                hideAvatar
                onSubmit={handleEditSubmit}
              />
            ) : (
              <p className="text-[#69727D] break-words">
                {comment.replyingTo && <span className="text-[#5457B0] font-medium">@{comment.replyingTo} </span>}
                {comment.content}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between mt-3 md:hidden">
            <VoteBox
              score={comment.score}
              onUpvote={() => onUpvote(threadId, comment.id)}
              onDownvote={() => onDownvote(threadId, comment.id)}
              className="gap-4 px-3 py-2"
            />
            <CommentActions
              isOwn={isOwn}
              onReply={() => setIsReplying((v) => !v)}
              onEdit={() => setIsEditing(true)}
              onDelete={() => setShowDeleteModal(true)}
            />
          </div>
        </div>
      </article>

      {isReplying && (
        <div className="mt-4">
          <CommentForm
            avatar={currentUser.image}
            buttonLabel="Reply"
            initialValue={`@${comment.user.username} `}
            autoFocus
            onSubmit={handleReplySubmit}
          />
        </div>
      )}

      {!isReply && comment.replies && comment.replies.length > 0 && (
        <div className="mt-4 pl-4 md:pl-8 border-l-2 border-[#E9EBF3] flex flex-col gap-4">
          {comment.replies.map((reply) => (
            <CommentCard
              key={reply.id}
              comment={reply}
              threadId={threadId}
              isReply
              onUpvote={onUpvote}
              onDownvote={onDownvote}
              onDelete={onDelete}
              onEdit={onEdit}
              onReply={onReply}
            />
          ))}
        </div>
      )}

      {showDeleteModal && (
        <DeleteModal
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => {
            onDelete(threadId, comment.id)
            setShowDeleteModal(false)
          }}
        />
      )}
    </div>
  )
}
