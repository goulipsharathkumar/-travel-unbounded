import WhyChooseUs from "@/components/WhyChooseUs";
import OfficeLocations from "@/components/OfficeLocations";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "About Travel Unbounded",
  description:
    "Headquartered in Bengaluru with offices in Kochi and Nairobi — the story behind Travel Unbounded and the team that builds every trip.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-topo-dark relative overflow-hidden text-mist">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="coord-tag text-xs uppercase tracking-[0.2em] text-brass">
            Our Story
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Journeys built around the people taking them.
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-mist/80 sm:text-lg">
            <p>
              Travel Unbounded was born from a simple belief — that the best
              journeys aren&rsquo;t sold from a catalogue. They&rsquo;re built
              around the people taking them.
            </p>
            <p>
              Headquartered in Bengaluru with offices in Kochi and Nairobi, we
              design trips that blend comfort, culture, and raw nature. Every
              destination, resort, and activity we recommend has been
              personally experienced by our team.
            </p>
            <p>
              From spotting the Big Five at dawn in the Masai Mara to cruising
              Ha Long Bay at sunset — we go where real stories are written,
              and we bring you along.
            </p>
          </div>
        </div>
        <div className="route-line absolute bottom-0 left-0 right-0" />
      </section>

      <section className="bg-topo-light mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <OfficeLocations />
      </section>

      <section className="route-line mx-5 sm:mx-8" />

      <section className="bg-topo-light mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <WhyChooseUs />
      </section>

      <CtaBand />
    </>
  );
}
