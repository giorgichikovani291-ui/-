import Button from "./Button"
import ArrowConnector from "./ArrowConnector"
import CarouselDots from "./CarouselDots"
import heroImg from "../assets/hero-rider.jpg"

export default function HomeHero() {
  return (
    <section
      className="relative min-h-[540px] flex items-center px-10 bg-dark-navy bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-dark-navy/55" />
      <div className="relative max-w-md py-16">
        <h1 className="font-heading font-bold text-h1 text-white mb-5">
          Scooter sharing made simple
        </h1>
        <p className="text-white/90 text-body mb-8">
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities, use our app to locate the
          nearest bike, unlock it with a tap, and you're away.
        </p>
        <Button href="#">Get Scootin</Button>
        <ArrowConnector className="absolute -right-24 top-1/2 hidden lg:block" />
      </div>
      <div className="absolute right-10 bottom-10">
        <CarouselDots light />
      </div>
    </section>
  )
}
