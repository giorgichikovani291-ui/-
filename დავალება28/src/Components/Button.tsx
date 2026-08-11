import type { ButtonProps } from "../types"

export default function Button({ children, href, onClick, className = "" }: ButtonProps) {
  const classes = `inline-block font-heading font-bold text-[13px] tracking-wide px-8 py-4 border-2 border-yellow bg-yellow text-white transition-colors duration-200 hover:bg-transparent hover:text-yellow cursor-pointer ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
