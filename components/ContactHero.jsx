export default function ContactHero() {
  return (
    <section className="bg-topo-dark relative overflow-hidden text-mist">
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="coord-tag text-xs uppercase tracking-[0.2em] text-brass">
          03 — Plan Your Trip
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Tell us where you&rsquo;re headed.
        </h1>
        <p className="mt-3 text-sm text-mist/70 sm:text-base">
          Share a few details and a Travel Unbounded expert will reach out
          within 24 hours with an itinerary built around your dates.
        </p>
      </div>
      <div className="route-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
