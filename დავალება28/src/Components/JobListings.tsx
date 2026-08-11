import type { JobListing } from "../types"
import Button from "./Button"

const jobs: JobListing[] = [
  { title: "General Manager", location: "Jakarta, Indonesia" },
  { title: "UI/UX Designer", location: "Yokohama, Japan" },
  { title: "Blog Content Copywriter", location: "New York, United States" },
  { title: "Graphic Designer", location: "New York, United States" },
  { title: "Fleet Supervisor", location: "Jakarta, Indonesia" },
  { title: "UX Analyst", location: "London, United Kingdom" },
]

export default function JobListings() {
  return (
    <section className="px-10 py-10 max-w-6xl mx-auto flex flex-col gap-3">
      {jobs.map((job) => (
        <div
          key={job.title}
          className="flex items-center justify-between bg-snow px-6 py-5"
        >
          <div>
            <p className="font-heading font-bold text-[13px] mb-1">{job.title}</p>
            <p className="text-dim-grey text-[13px]">{job.location}</p>
          </div>
          <Button href="#" className="text-xs px-6 py-3">
            Apply
          </Button>
        </div>
      ))}
    </section>
  )
}
