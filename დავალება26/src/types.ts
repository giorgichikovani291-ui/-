import type { FormEvent } from "react"

export interface CardDetails {
  cardholderName: string
  cardNumber: string
  expMonth: string
  expYear: string
  cvc: string
}

export interface FormErrors {
  cardholderName: string
  cardNumber: string
  expMonth: string
  expYear: string
  cvc: string
}

export interface CardPreviewProps {
  details: CardDetails
}

export interface CardFormProps {
  details: CardDetails
  errors: FormErrors
  onChange: (field: keyof CardDetails, value: string) => void
  onSubmit: (e: FormEvent) => void
}

export interface ThankYouProps {
  onContinue: () => void
}
