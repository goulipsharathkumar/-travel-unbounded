const OFFICES = [
  {
    city: "Bengaluru",
    role: "Headquarters",
    coords: "12.9716° N, 77.5946° E",
    address: ["541, 7th Main Rd, HAL 2nd Stage", "Indiranagar, Bengaluru – 560008", "India"],
  },
  {
    city: "Kochi",
    role: "Kerala Office",
    coords: "09.9312° N, 76.2673° E",
    address: ["LR Towers, S Janatha Road", "Palavivatton, Kochi – 682025", "India"],
  },
  {
    city: "Nairobi",
    role: "Kenya Office",
    coords: "01.2921° S, 36.8219° E",
    address: ["Westpark Towers, Muthithi Road", "Nairobi, P.O. Box 6950", "Postal Code 00100, Kenya"],
  },
];

export default function OfficeLocations() {
  return (
    <div>
      <p className="coord-tag text-xs uppercase tracking-[0.2em] text-brassDark">
        Our Locations
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Where to find us
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {OFFICES.map((office) => (
          <div key={office.city} className="rounded-sm border border-ink/10 bg-mist p-6">
            <p className="coord-tag text-[11px] text-brassDark">{office.coords}</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink">
              {office.city}
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/50">
              {office.role}
            </p>
            <address className="mt-3 text-sm not-italic leading-relaxed text-ink/70">
              {office.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        ))}
      </div>
    </div>
  );
}
