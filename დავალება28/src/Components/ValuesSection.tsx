import type { ValueItem } from "../types"
import techImg from "../assets/value-tech.jpg"
import integrityImg from "../assets/value-integrity.jpg"
import communityImg from "../assets/value-community.jpg"

const values: ValueItem[] = [
  {
    number: "01",
    title: "Our tech",
    description:
      "We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride.",
    image: techImg,
  },
  {
    number: "02",
    title: "Our integrity",
    description:
      "We are fully committed to deliver a great and safe, sustainable experience in every city we serve.",
    image: integrityImg,
  },
  {
    number: "03",
    title: "Our community",
    description:
      "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
    image: communityImg,
  },
]

export default function ValuesSection({ title }: { title: string }) {
  return (
    <section className="px-10 py-16 max-w-6xl mx-auto text-center">
      <h2 className="font-heading font-bold text-h3 mb-14">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {values.map((value) => (
          <div key={value.number}>
            <div className="relative w-24 h-24 mx-auto mb-5">
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-full rounded-full object-cover"
              />
              <span className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-yellow text-white text-[11px] font-heading font-bold flex items-center justify-center">
                {value.number}
              </span>
            </div>
            <h4 className="font-heading font-bold text-h4 mb-3">{value.title}</h4>
            <p className="text-dim-grey text-body">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
