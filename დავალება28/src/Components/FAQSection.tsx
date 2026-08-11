import { useState } from "react"
import type { FAQColumnData } from "../types"

const columns: FAQColumnData[] = [
  {
    title: "How it works",
    items: [
      {
        question: "How do I download the app?",
        answer:
          "To download the Scoot app, you can search 'Scoot' on the App and Google Play stores. An even simpler way to do it is click on the relevant link at the bottom of this page and you'll be redirected to the correct page.",
      },
      {
        question: "Can I find a nearby Scoots?",
        answer:
          "Yes, open the app and every available scooter near you will show up on the map, updated in real time as you move around.",
      },
      {
        question: "So I need a license to ride?",
        answer:
          "No license is required to ride a Scoot, just a valid form of ID to sign up in the app.",
      },
    ],
  },
  {
    title: "Safe driving",
    items: [
      {
        question: "Should I wear a helmet?",
        answer:
          "Yes, please do! All cities have different laws, but we strongly recommend always wearing a helmet regardless of the local law. We like you and want you to be as safe as possible while Scooting.",
      },
      {
        question: "How about the rules & regulations?",
        answer:
          "Always follow local traffic laws, ride in bike lanes where they're available, and never ride on the sidewalk.",
      },
      {
        question: "What if I damage my Scoot?",
        answer:
          "Report any damage through the app right away so we can send a replacement and keep the next rider safe.",
      },
    ],
  },
]

function AccordionColumn({ column }: { column: FAQColumnData }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      <h4 className="font-heading font-bold text-h4 mb-5">{column.title}</h4>
      <div className="flex flex-col gap-3">
        {column.items.map((item, index) => {
          const isOpen = index === openIndex
          return (
            <div key={item.question} className="bg-snow">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-heading text-[13px] transition-colors hover:bg-light-yellow ${
                  isOpen ? "bg-light-yellow" : ""
                }`}
              >
                {item.question}
                <span className="text-yellow text-lg leading-none">{isOpen ? "-" : "+"}</span>
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-dim-grey text-body">{item.answer}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section className="px-10 py-16 max-w-6xl mx-auto">
      <h2 className="font-heading font-bold text-h3 text-center mb-14">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {columns.map((column) => (
          <AccordionColumn key={column.title} column={column} />
        ))}
      </div>
    </section>
  )
}
