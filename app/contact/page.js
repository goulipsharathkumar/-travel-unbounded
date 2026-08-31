import { Suspense } from "react";
import ContactHero from "@/components/ContactHero";
import PrefillReader from "@/components/PrefillReader";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Plan Your Trip | Travel Unbounded",
  description:
    "Send us your travel dates and party size — a Travel Unbounded expert will get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-topo-light mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <Suspense fallback={<BookingForm />}>
          <PrefillReader />
        </Suspense>
      </section>
    </>
  );
}
