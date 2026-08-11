import PageHero from "./PageHero"
import FeatureRow from "./FeatureRow"
import ValuesSection from "./ValuesSection"
import FAQSection from "./FAQSection"
import mobilityImg from "../assets/mobility-app.jpg"
import cityTramImg from "../assets/city-tram.jpg"

export default function About() {
  return (
    <main>
      <PageHero title="About" />
      <FeatureRow
        heading="Mobility for the digital era"
        description="Getting around should be simple and even faster for everyone. We embrace technology to provide the best, smart access to scooters at your fingertips."
        image={mobilityImg}
        imageAlt="Person holding a phone outdoors"
        imageSide="right"
      />
      <FeatureRow
        heading="Better urban living"
        description="We're helping connect cities and bring people closer together. Our scooters are also fully electric and we offset the minimal carbon footprint for each ride."
        image={cityTramImg}
        imageAlt="City street with a tram going past"
        imageSide="left"
      />
      <ValuesSection title="Our values" />
      <FAQSection />
    </main>
  )
}
