import PageHero from "./PageHero"
import FeatureRow from "./FeatureRow"
import ValuesSection from "./ValuesSection"
import JobListings from "./JobListings"
import teamImg from "../assets/careers-team.jpg"

export default function Careers() {
  return (
    <main>
      <PageHero title="Careers" />
      <FeatureRow
        heading="Care to join our mission?"
        description="We're always looking for ambitious individuals to help us on our journey. If you're passionate about our mission, to provide clean, accessible transport to improve urban living, we want to hear from you."
        image={teamImg}
        imageAlt="Team members talking in a workshop"
        imageSide="right"
        buttonLabel="Say Hello"
      />
      <ValuesSection title="Why join us?" />
      <JobListings />
    </main>
  )
}
