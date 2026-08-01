import type { ThankYouProps } from "../types"

export default function ThankYou({ onContinue }: ThankYouProps) {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#6a3ff5_0%,#d9469f_50%,#ff9466_100%)]">
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L8.5 16.5L23 1" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold uppercase tracking-widest text-[#1c1c1c]">Thank you!</h1>
      <p className="text-gray-500">We've added your card details</p>
      <button
        type="button"
        onClick={onContinue}
        className="mt-4 w-full rounded-md bg-[#21092f] py-3 font-medium text-white outline-none transition hover:opacity-90"
      >
        Continue
      </button>
    </div>
  )
}
