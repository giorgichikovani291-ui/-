export interface User {
  image: string
  username: string
}

export interface Comment {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
  replyingTo?: string
  replies?: Comment[]
}

export interface VoteBoxProps {
  score: number
  onUpvote: () => void
  onDownvote: () => void
  className?: string
}

export interface CommentFormProps {
  avatar: string
  buttonLabel: string
  initialValue?: string
  autoFocus?: boolean
  hideAvatar?: boolean
  onSubmit: (content: string) => void
}

export interface CommentActionsProps {
  isOwn: boolean
  onReply: () => void
  onEdit: () => void
  onDelete: () => void
  className?: string
}

export interface DeleteModalProps {
  onCancel: () => void
  onConfirm: () => void
}

export interface CommentCardProps {
  comment: Comment
  threadId: number
  isReply?: boolean
  onUpvote: (threadId: number, commentId: number) => void
  onDownvote: (threadId: number, commentId: number) => void
  onDelete: (threadId: number, commentId: number) => void
  onEdit: (threadId: number, commentId: number, content: string) => void
  onReply: (threadId: number, content: string, replyingTo: string) => void
}

export interface CommentListProps {
  comments: Comment[]
  onUpvote: (threadId: number, commentId: number) => void
  onDownvote: (threadId: number, commentId: number) => void
  onDelete: (threadId: number, commentId: number) => void
  onEdit: (threadId: number, commentId: number, content: string) => void
  onReply: (threadId: number, content: string, replyingTo: string) => void
}
