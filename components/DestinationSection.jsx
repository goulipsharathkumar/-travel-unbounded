import DestinationCard from "@/components/DestinationCard";

export default function DestinationSection({ eyebrow, title, destinations }) {
  return (
    <div>
      <p className="coord-tag text-xs uppercase tracking-[0.2em] text-brassDark">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}
