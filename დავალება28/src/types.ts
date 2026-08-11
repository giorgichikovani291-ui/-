export interface NavLinkItem {
  label: string
  path: string
}

export interface StepItem {
  icon: "locate" | "pick" | "enjoy"
  title: string
  description: string
}

export interface ValueItem {
  number: string
  title: string
  description: string
  image: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQColumnData {
  title: string
  items: FAQItem[]
}

export interface JobListing {
  title: string
  location: string
}

export interface LocationPin {
  city: string
  top: string
  left: string
  active?: boolean
}

export interface FeatureRowProps {
  heading: string
  description: string
  image: string
  imageAlt: string
  imageSide: "left" | "right"
  buttonLabel?: string
}

export interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export interface PageHeroProps {
  title: string
}
