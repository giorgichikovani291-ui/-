import DecorLines from "./DecorLines";
import { ArrowIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-4 md:px-10 lg:px-16">
      <DecorLines className="pointer-events-none absolute -right-2 top-0 hidden w-56 md:block lg:w-72" />

      <div className="grid gap-12 md:grid-cols-[1fr_240px] md:items-center lg:grid-cols-[1fr_340px] lg:gap-16">
        <div>
          <h1 className="text-[34px] font-bold leading-[38px] tracking-[-0.5px] md:text-heading-l lg:text-heading-xl">
            Nice to meet you!
            <br />
            I&apos;m <span className="border-b-4 border-accent">Chiko</span>.
          </h1>

          <p className="mt-6 max-w-md text-body-l font-medium text-accent">
            I&apos;m a computer science student who builds frontend apps, desktop
            tools with PyQt, and spends the rest of my time in Linux and
            networking labs.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent"
          >
            Contact me
            <ArrowIcon />
          </a>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -left-5 -top-5 h-[90%] w-[90%] rounded-full border border-muted/30" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface">
            <div className="flex h-full w-full items-center justify-center text-7xl font-bold text-muted/15">
              C
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
