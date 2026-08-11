import type { FeatureRowProps } from "../types"
import Button from "./Button"
import ArrowConnector from "./ArrowConnector"

export default function FeatureRow({
  heading,
  description,
  image,
  imageAlt,
  imageSide,
  buttonLabel,
}: FeatureRowProps) {
  const textBlock = (
    <div className="max-w-sm">
      <h3 className="font-heading font-bold text-h3 mb-4">{heading}</h3>
      <p className="text-dim-grey text-body mb-7">{description}</p>
      {buttonLabel && <Button href="#">{buttonLabel}</Button>}
    </div>
  )

  const imageBlock = (
    <div className="relative w-72 h-72 shrink-0">
      <div className="absolute -inset-6 rounded-full bg-light-grey/60 -z-10 hidden lg:block" />
      <div className="w-full h-full rounded-full overflow-hidden">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
      </div>
    </div>
  )

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-14 md:gap-24 px-10 py-16 max-w-6xl mx-auto">
      {imageSide === "left" ? (
        <>
          {imageBlock}
          <ArrowConnector className="hidden lg:block" />
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          <ArrowConnector className="hidden lg:block" flip />
          {imageBlock}
        </>
      )}
    </div>
  )
}
