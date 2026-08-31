import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ destination }) {
  const { name, country, coords, image, description, price } = destination;

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-ink/10 bg-mist shadow-sm transition hover:shadow-md">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name}, ${country}`}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="coord-tag absolute left-3 top-3 rounded-sm bg-ink/80 px-2 py-1 text-[11px] text-mist">
          {coords}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold text-ink">{name}</h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/50">
          {country}
        </p>
        <p className="mt-3 flex-1 text-sm text-ink/70">{description}</p>

        <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
          <p className="text-sm text-ink/80">
            Starting from{" "}
            <span className="font-mono font-semibold text-brassDark">
              ₹{price.toLocaleString("en-IN")}
            </span>
          </p>
          <Link
            href={{ pathname: "/contact", query: { destination: name } }}
            className="focus-brass rounded-sm px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-brassDark transition hover:bg-brass hover:text-ink"
          >
            Enquire →
          </Link>
        </div>
      </div>
    </article>
  );
}
