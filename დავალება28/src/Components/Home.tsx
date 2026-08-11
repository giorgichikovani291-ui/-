import HomeHero from "./HomeHero"
import StepsSection from "./StepsSection"
import FeatureRow from "./FeatureRow"
import telemetryImg from "../assets/telemetry-app.jpg"
import cityImg from "../assets/city-skyline.jpg"
import paymentImg from "../assets/payment-tap.jpg"

export default function Home() {
  return (
    <main>
      <HomeHero />
      <StepsSection />
      <FeatureRow
        heading="Easy to use riding telemetry"
        description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your travelling distance, and many other things all in an easy to use app."
        image={telemetryImg}
        imageAlt="Person checking the Scoot app on their phone"
        imageSide="right"
        buttonLabel="Learn More"
      />
      <FeatureRow
        heading="Coming to a city near you"
        description="Scoot is available in a few major cities so far. We're expanding rapidly, so be sure to let us know if you want to see us in your hometown. We're aiming to let our scooters loose on 25 cities over the coming year."
        image={cityImg}
        imageAlt="Looking up at tall city buildings"
        imageSide="left"
        buttonLabel="Learn More"
      />
      <FeatureRow
        heading="Zero hassle payments"
        description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay for your ride? You can settle payment for up to a month."
        image={paymentImg}
        imageAlt="Paying for a ride by tapping a card"
        imageSide="right"
        buttonLabel="Learn More"
      />
    </main>
  )
}
