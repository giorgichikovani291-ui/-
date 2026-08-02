import type { DeleteModalProps } from '../types'

export default function DeleteModal({ onCancel, onConfirm }: DeleteModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 md:p-8 max-w-sm w-full">
        <h2 className="text-lg font-medium text-[#364251] mb-3">Delete comment</h2>
        <p className="text-[#69727D] mb-5">
          Are you sure you want to delete this comment? This will remove the comment and can't be undone.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 bg-[#69727D] text-white font-medium uppercase py-3 rounded-lg cursor-pointer hover:opacity-80"
          >
            No, Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-[#DC6C6C] text-white font-medium uppercase py-3 rounded-lg cursor-pointer hover:opacity-80"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  )
}
