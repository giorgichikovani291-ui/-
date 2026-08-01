import type { CardFormProps } from "../types"

const inputClass =
  "w-full rounded-md border px-4 py-2.5 text-base text-[#1c1c1c] outline-none placeholder:text-gray-300 focus:border-[#6a3ff5] focus:ring-1 focus:ring-[#6a3ff5]"

const labelClass = "text-xs font-medium uppercase tracking-widest text-[#57505f]"

const errorClass = "mt-1 text-xs text-[#ff5252]"

function formatCardNumber(value: string) {
  const stripped = value.replace(/\s/g, "").slice(0, 16)
  return stripped.replace(/(.{4})/g, "$1 ").trim()
}

function onlyDigits(value: string, maxLength: number) {
  return value.replace(/\D/g, "").slice(0, maxLength)
}

export default function CardForm({ details, errors, onChange, onSubmit }: CardFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="cardholderName">
          Cardholder Name
        </label>
        <input
          id="cardholderName"
          type="text"
          placeholder="e.g. Jane Appleseed"
          className={`${inputClass} ${errors.cardholderName ? "border-[#ff5252]" : "border-gray-300"}`}
          value={details.cardholderName}
          onChange={(e) => onChange("cardholderName", e.target.value)}
        />
        {errors.cardholderName && <span className={errorClass}>{errors.cardholderName}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="cardNumber">
          Card Number
        </label>
        <input
          id="cardNumber"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={19}
          className={`${inputClass} ${errors.cardNumber ? "border-[#ff5252]" : "border-gray-300"}`}
          value={details.cardNumber}
          onChange={(e) => onChange("cardNumber", formatCardNumber(e.target.value))}
        />
        {errors.cardNumber && <span className={errorClass}>{errors.cardNumber}</span>}
      </div>

      <div className="flex gap-3">
        <div className="flex flex-1 flex-col gap-1.5">
          <label className={labelClass}>Exp. Date (MM/YY)</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="MM"
              maxLength={2}
              className={`${inputClass} ${errors.expMonth ? "border-[#ff5252]" : "border-gray-300"}`}
              value={details.expMonth}
              onChange={(e) => onChange("expMonth", onlyDigits(e.target.value, 2))}
            />
            <input
              type="text"
              placeholder="YY"
              maxLength={2}
              className={`${inputClass} ${errors.expYear ? "border-[#ff5252]" : "border-gray-300"}`}
              value={details.expYear}
              onChange={(e) => onChange("expYear", onlyDigits(e.target.value, 2))}
            />
          </div>
          {(errors.expMonth || errors.expYear) && (
            <span className={errorClass}>{errors.expMonth || errors.expYear}</span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-1.5">
          <label className={labelClass} htmlFor="cvc">
            CVC
          </label>
          <input
            id="cvc"
            type="text"
            placeholder="e.g. 123"
            maxLength={3}
            className={`${inputClass} ${errors.cvc ? "border-[#ff5252]" : "border-gray-300"}`}
            value={details.cvc}
            onChange={(e) => onChange("cvc", onlyDigits(e.target.value, 3))}
          />
          {errors.cvc && <span className={errorClass}>{errors.cvc}</span>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 rounded-md bg-[#21092f] py-3 font-medium text-white outline-none transition hover:opacity-90"
      >
        Confirm
      </button>
    </form>
  )
}
