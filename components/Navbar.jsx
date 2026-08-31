"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Plan a Trip" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-parchment/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="focus-brass rounded font-display text-lg font-semibold tracking-tight text-ink"
        >
          Travel <span className="italic text-brassDark">Unbounded</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-brass rounded font-mono text-xs uppercase tracking-[0.15em] text-ink/70 transition hover:text-brassDark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="focus-brass rounded p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-parchment px-5 pb-4 md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-brass rounded px-1 py-3 font-mono text-sm uppercase tracking-[0.15em] text-ink/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
