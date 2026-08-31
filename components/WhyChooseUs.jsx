const REASONS = [
  {
    title: "Personally vetted",
    detail:
      "Every resort, guide, and activity we recommend has been experienced first-hand by our own team — not sourced from a brochure.",
  },
  {
    title: "Local guides, not scripts",
    detail:
      "We work with guides who grew up in the places we send you to, so the stories you hear are the real ones.",
  },
  {
    title: "Custom itineraries",
    detail:
      "No fixed packages by default. Every trip is built around your pace, your interests, and your travel dates.",
  },
  {
    title: "24×7 support",
    detail:
      "A dedicated travel expert stays reachable for the length of your trip — before, during, and after.",
  },
];

export default function WhyChooseUs() {
  return (
    <div>
      <p className="coord-tag text-xs uppercase tracking-[0.2em] text-brassDark">
        Why Choose Us
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        What sets a Travel Unbounded trip apart
      </h2>

      <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {REASONS.map((reason, i) => (
          <div key={reason.title} className="border-l-2 border-brass/60 pl-5">
            <dt className="flex items-baseline gap-2 font-display text-lg font-semibold text-ink">
              <span className="coord-tag text-sm text-brassDark">
                {String(i + 1).padStart(2, "0")}
              </span>
              {reason.title}
            </dt>
            <dd className="mt-2 text-sm text-ink/70">{reason.detail}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
