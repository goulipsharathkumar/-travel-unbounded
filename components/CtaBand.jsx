import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="bg-topo-dark relative overflow-hidden text-mist">
      <div className="route-line absolute top-0 left-0 right-0" />
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="coord-tag text-xs uppercase tracking-[0.2em] text-brass">
            Next departure — wherever you choose
          </p>
          <h2 className="mt-3 max-w-md font-display text-3xl font-semibold sm:text-4xl">
            Tell us where. We&rsquo;ll handle the rest.
          </h2>
        </div>
        <Link
          href="/contact"
          className="focus-brass shrink-0 rounded-sm bg-brass px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition hover:bg-brassDark"
        >
          Plan Your Trip
        </Link>
      </div>
    </section>
  );
}
