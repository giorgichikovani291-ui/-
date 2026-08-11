import type { StepItem } from "../types"
import StepIcon from "./StepIcon"

const steps: StepItem[] = [
  {
    icon: "locate",
    title: "Locate with app",
    description:
      "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so use a scoot when you're on the go.",
  },
  {
    icon: "pick",
    title: "Pick your scooter",
    description:
      "We show the most important info for the scooter closest to you, so you know how much charge they have left and can see roughly how much it will cost.",
  },
  {
    icon: "enjoy",
    title: "Enjoy the ride",
    description:
      "Scan the QR code and the bike will unlock. Return the cable lock, put on a helmet, and you're off. Always look before you leave and avoid walkways and accessibility ramps.",
  },
]

export default function StepsSection() {
  return (
    <section className="relative px-10 py-20 max-w-6xl mx-auto">
      <div className="hidden md:block absolute top-7 left-24 right-24 border-t-2 border-dashed border-light-grey" />
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {steps.map((step) => (
          <div key={step.title}>
            <div className="relative w-14 h-14 mx-auto mb-5 rounded-full bg-yellow flex items-center justify-center">
              <StepIcon icon={step.icon} />
            </div>
            <h3 className="font-heading font-bold text-h4 mb-3">{step.title}</h3>
            <p className="text-dim-grey text-body">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
