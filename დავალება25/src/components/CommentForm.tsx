import { useState } from 'react'
import type { CommentFormProps } from '../types'

export default function CommentForm({ avatar, buttonLabel, initialValue = '', autoFocus = false, hideAvatar = false, onSubmit }: CommentFormProps) {
  const [value, setValue] = useState(initialValue)

  function handleSubmit() {
    if (!value.trim()) return
    onSubmit(value)
    setValue(initialValue)
  }

  if (hideAvatar) {
    return (
      <div className="bg-white rounded-lg p-4 md:p-6 flex flex-col gap-3 items-end">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus={autoFocus}
          rows={3}
          className="w-full border border-[#E9EBF3] rounded-lg p-3 text-[#364251] resize-none focus:outline-none focus:border-[#5457B0]"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#5457B0] text-white font-medium uppercase px-6 py-3 rounded-lg cursor-pointer hover:bg-[#C5C6EC] transition-colors"
        >
          {buttonLabel}
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus={autoFocus}
        rows={3}
        placeholder="Add a comment..."
        className="order-1 md:order-2 flex-1 w-full border border-[#E9EBF3] rounded-lg p-3 text-[#364251] placeholder:text-[#9DA5B0] resize-none focus:outline-none focus:border-[#5457B0]"
      />
      <div className="order-2 md:contents flex items-center justify-between">
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full md:order-1" />
        <button
          onClick={handleSubmit}
          className="md:order-3 bg-[#5457B0] text-white font-medium uppercase px-6 py-3 rounded-lg cursor-pointer hover:bg-[#C5C6EC] transition-colors"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
