import Hero from "@/components/Hero";
import DestinationSection from "@/components/DestinationSection";
import CtaBand from "@/components/CtaBand";
import { indiaDestinations, internationalDestinations } from "@/data/destinations";

export const metadata = {
  title: "Travel Unbounded | Experiential Travel Experts",
  description:
    "Curated journeys across India and beyond — Kerala to Ladakh, the Masai Mara to Ha Long Bay. Every trip personally vetted by our team.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="destinations" className="bg-topo-light mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <DestinationSection
          eyebrow="01 — Within India"
          title="India Destinations"
          destinations={indiaDestinations}
        />
      </section>

      <section className="route-line mx-5 sm:mx-8" />

      <section className="bg-topo-light mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <DestinationSection
          eyebrow="02 — Beyond India"
          title="International Destinations"
          destinations={internationalDestinations}
        />
      </section>

      <CtaBand />
    </>
  );
}
