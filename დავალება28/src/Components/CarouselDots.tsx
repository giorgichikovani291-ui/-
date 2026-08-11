export default function CarouselDots({ light = false }: { light?: boolean }) {
  const border = light ? "border-white" : "border-dark-navy"
  const fill = light ? "bg-white" : "bg-dark-navy"

  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full border-2 ${border}`} />
      <span className={`w-3 h-3 rounded-full border-2 ${border}`} />
      <span className={`w-3 h-3 rounded-full ${fill}`} />
    </div>
  )
}
