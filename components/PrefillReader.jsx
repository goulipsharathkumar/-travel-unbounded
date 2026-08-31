"use client";

import { useSearchParams } from "next/navigation";
import BookingForm from "@/components/BookingForm";

export default function PrefillReader() {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination") || "";

  return (
    <>
      {destination && (
        <p className="coord-tag mb-6 inline-block rounded-sm bg-brass/15 px-3 py-1.5 text-xs uppercase tracking-[0.1em] text-brassDark">
          Enquiring about: {destination}
        </p>
      )}
      <BookingForm prefillDestination={destination} />
    </>
  );
}
