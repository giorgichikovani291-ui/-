import { useState } from 'react'
import type { Comment } from './types'
import { initialComments, currentUser } from './data'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'

export default function App() {
  const [comments, setComments] = useState<Comment[]>(initialComments)

  function updateScore(threadId: number, commentId: number, delta: number) {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id !== threadId) return c
        if (c.id === commentId) return { ...c, score: c.score + delta }
        return {
          ...c,
          replies: c.replies?.map((r) => (r.id === commentId ? { ...r, score: r.score + delta } : r)),
        }
      })
    )
  }

  function handleUpvote(threadId: number, commentId: number) {
    updateScore(threadId, commentId, 1)
  }

  function handleDownvote(threadId: number, commentId: number) {
    updateScore(threadId, commentId, -1)
  }

  function handleDelete(threadId: number, commentId: number) {
    setComments((prev) => {
      if (threadId === commentId) return prev.filter((c) => c.id !== threadId)
      return prev.map((c) =>
        c.id === threadId ? { ...c, replies: c.replies?.filter((r) => r.id !== commentId) } : c
      )
    })
  }

  function handleEdit(threadId: number, commentId: number, content: string) {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id !== threadId) return c
        if (c.id === commentId) return { ...c, content }
        return {
          ...c,
          replies: c.replies?.map((r) => (r.id === commentId ? { ...r, content } : r)),
        }
      })
    )
  }

  function handleReply(threadId: number, rawContent: string, replyingTo: string) {
    const prefix = `@${replyingTo} `
    const content = rawContent.startsWith(prefix) ? rawContent.slice(prefix.length).trim() : rawContent.trim()
    if (!content) return

    const newReply: Comment = {
      id: Date.now(),
      content,
      createdAt: 'Just now',
      score: 0,
      user: currentUser,
      replyingTo,
    }

    setComments((prev) =>
      prev.map((c) => (c.id === threadId ? { ...c, replies: [...(c.replies ?? []), newReply] } : c))
    )
  }

  function handleAddComment(content: string) {
    const newComment: Comment = {
      id: Date.now(),
      content: content.trim(),
      createdAt: 'Just now',
      score: 0,
      user: currentUser,
      replies: [],
    }
    setComments((prev) => [...prev, newComment])
  }

  return (
    <main className="min-h-screen bg-[#F5F6FA] py-8 px-4 md:py-12">
      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        <CommentList
          comments={comments}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReply={handleReply}
        />
        <CommentForm avatar={currentUser.image} buttonLabel="Send" onSubmit={handleAddComment} />
      </div>
    </main>
  )
}
