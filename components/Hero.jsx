import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-topo-dark relative overflow-hidden text-mist">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="coord-tag text-xs uppercase tracking-[0.2em] text-brass">
          Field notes — since 2014
        </p>

        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] sm:text-6xl">
          India&rsquo;s most trusted{" "}
          <span className="italic text-brass">experiential</span> travel
          experts.
        </h1>

        <p className="mt-6 max-w-xl text-base text-mist/75 sm:text-lg">
          Travel Unbounded was born from a simple belief — that the best
          journeys aren&rsquo;t sold from a catalogue. They&rsquo;re built
          around the people taking them.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="focus-brass rounded-sm bg-brass px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition hover:bg-brassDark"
          >
            Plan Your Trip
          </Link>
          <Link
            href="#destinations"
            className="focus-brass rounded-sm border border-mist/30 px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-mist/90 transition hover:border-brass hover:text-brass"
          >
            See Destinations
          </Link>
        </div>
      </div>

      <div className="route-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
