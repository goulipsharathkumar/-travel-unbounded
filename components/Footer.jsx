import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-topo-dark border-t border-ink/40 text-mist">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold">
              Travel <span className="italic text-brass">Unbounded</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-mist/70">
              Journeys built around the people taking them — not sold from a
              catalogue.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-brass">
              Navigate
            </p>
            <ul className="mt-3 space-y-2 text-sm text-mist/80">
              <li>
                <Link href="/" className="focus-brass rounded hover:text-brass">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="focus-brass rounded hover:text-brass">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="focus-brass rounded hover:text-brass">
                  Plan a Trip
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-brass">
              Headquarters
            </p>
            <p className="mt-3 text-sm text-mist/80">
              541, 7th Main Rd, HAL 2nd Stage
              <br />
              Indiranagar, Bengaluru – 560008, India
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-mist/15 pt-6 text-xs text-mist/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Travel Unbounded. All rights reserved.</p>
          <p className="coord-tag">12.9716° N, 77.5946° E</p>
        </div>
      </div>
    </footer>
  );
}
