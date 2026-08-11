import type { PageHeroProps } from "../types"
import bannerBg from "../assets/page-banner-bg.jpg"
import CarouselDots from "./CarouselDots"

export default function PageHero({ title }: PageHeroProps) {
  return (
    <section
      className="relative h-64 flex items-center px-10 bg-dark-navy bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="absolute inset-0 bg-dark-navy/75" />
      <h1 className="relative font-heading font-bold text-h2 text-white">{title}</h1>
      <div className="absolute right-10 bottom-6">
        <CarouselDots light />
      </div>
    </section>
  )
}
