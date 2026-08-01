import { useState } from "react"
import type { FormEvent } from "react"
import type { CardDetails, FormErrors } from "./types"
import CardPreview from "./components/CardPreview"
import CardForm from "./components/CardForm"
import ThankYou from "./components/ThankYou"

const emptyDetails: CardDetails = {
  cardholderName: "",
  cardNumber: "",
  expMonth: "",
  expYear: "",
  cvc: "",
}

const emptyErrors: FormErrors = {
  cardholderName: "",
  cardNumber: "",
  expMonth: "",
  expYear: "",
  cvc: "",
}

function validate(details: CardDetails): FormErrors {
  const errors: FormErrors = { ...emptyErrors }
  const digitsOnly = details.cardNumber.replace(/\s/g, "")

  if (!details.cardholderName.trim()) errors.cardholderName = "Can't be blank"
  if (!digitsOnly) errors.cardNumber = "Can't be blank"
  else if (!/^\d{16}$/.test(digitsOnly)) errors.cardNumber = "Wrong format, numbers only"
  if (!details.expMonth) errors.expMonth = "Can't be blank"
  if (!details.expYear) errors.expYear = "Can't be blank"
  if (!details.cvc) errors.cvc = "Can't be blank"

  return errors
}

export default function App() {
  const [details, setDetails] = useState<CardDetails>(emptyDetails)
  const [errors, setErrors] = useState<FormErrors>(emptyErrors)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof CardDetails, value: string) {
    setDetails((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const newErrors = validate(details)
    setErrors(newErrors)
    if (Object.values(newErrors).every((error) => !error)) {
      setSubmitted(true)
    }
  }

  function handleReset() {
    setDetails(emptyDetails)
    setErrors(emptyErrors)
    setSubmitted(false)
  }

  return (
    <div className="min-h-screen w-full bg-white lg:flex">
      <div className="relative h-[200px] w-full overflow-visible bg-[#0d0316] lg:h-auto lg:w-[400px] lg:shrink-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#6a3ff5_0%,transparent_70%)] opacity-40 blur-2xl" />
          <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,#d9469f_0%,transparent_70%)] opacity-25 blur-2xl" />
        </div>
        <CardPreview details={details} />
      </div>

      <div className="flex flex-1 items-center justify-center px-6 pb-16 pt-24 lg:px-24 lg:py-10">
        {submitted ? (
          <ThankYou onContinue={handleReset} />
        ) : (
          <CardForm details={details} errors={errors} onChange={handleChange} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  )
}
