import PageHero from "./PageHero"
import LocationsMap from "./LocationsMap"
import Button from "./Button"

export default function Locations() {
  return (
    <main>
      <PageHero title="Locations" />
      <LocationsMap />
      <section className="px-10 py-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="font-heading font-bold text-h3 max-w-xs">
          Your city not listed?
        </h2>
        <p className="text-dim-grey text-body max-w-sm">
          If you'd like to see Scoot in your hometown, be sure to let us know. We
          track requests and plan launches based on demand. Feel free to message
          us by clicking the link or messaging us on social.
        </p>
        <Button href="#">Message Us</Button>
      </section>
    </main>
  )
}
