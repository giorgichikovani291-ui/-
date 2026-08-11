import AppBadge from "./AppBadge"

export default function CTABanner() {
  return (
    <section className="bg-dark-navy px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
      <h2 className="font-heading font-bold text-h4 md:text-h3 text-white text-center md:text-left">
        Sign up and
        <br />
        Scoot off today
      </h2>
      <div className="flex gap-4">
        <AppBadge store="apple" />
        <AppBadge store="google" />
      </div>
    </section>
  )
}
