"use client";

import { useState } from "react";
import { HOTEL_CATEGORIES, validateEnquiry } from "@/lib/validateEnquiry";

const COUNTRY_CODES = ["+91", "+1", "+44", "+61", "+971", "+254"];

const initialForm = {
  fullName: "",
  countryCode: "+91",
  contactNumber: "",
  email: "",
  dateOfTravel: "",
  numberOfPeople: 1,
  numberOfChildren: 0,
  hotelCategory: "",
};

// status: "idle" | "submitting" | "success" | "error"
export default function BookingForm({ prefillDestination = "" }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the field's error as soon as the person edits it.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { valid, errors: validationErrors } = validateEnquiry(form);
    if (!valid) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, destination: prefillDestination }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
        setServerMessage(
          data?.message || "Something went wrong while submitting your enquiry. Please try again."
        );
        if (data?.errors) setErrors(data.errors);
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "Couldn't reach the server. Check your connection and try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-sm border border-brass/40 bg-mist p-8 text-center"
      >
        <p className="coord-tag text-xs uppercase tracking-[0.2em] text-brassDark">
          Enquiry received
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
          Thank you! Our travel expert will contact you within 24 hours.
        </h3>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="focus-brass mt-6 rounded-sm border border-ink/20 px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-ink/70 hover:border-brass hover:text-brassDark"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const fieldClass = (name) =>
    `focus-brass w-full rounded-sm border bg-mist px-3 py-2.5 text-sm text-ink placeholder:text-ink/40 ${
      errors[name] ? "border-rust" : "border-ink/15"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && serverMessage && (
        <div
          role="alert"
          className="rounded-sm border border-rust/40 bg-rust/5 px-4 py-3 text-sm text-rust"
        >
          {serverMessage}
        </div>
      )}

      <Field label="Full Name" htmlFor="fullName" error={errors.fullName}>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Anjali Rao"
          className={fieldClass("fullName")}
        />
      </Field>

      <div className="grid grid-cols-3 gap-3">
        <Field label="Code" htmlFor="countryCode" error={errors.countryCode}>
          <select
            id="countryCode"
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className={fieldClass("countryCode")}
          >
            {COUNTRY_CODES.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </Field>

        <div className="col-span-2">
          <Field label="Contact Number" htmlFor="contactNumber" error={errors.contactNumber}>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              inputMode="numeric"
              value={form.contactNumber}
              onChange={handleChange}
              placeholder="9886012345"
              className={fieldClass("contactNumber")}
            />
          </Field>
        </div>
      </div>

      <Field label="Email" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={fieldClass("email")}
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Date of Travel" htmlFor="dateOfTravel" error={errors.dateOfTravel}>
          <input
            id="dateOfTravel"
            name="dateOfTravel"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={form.dateOfTravel}
            onChange={handleChange}
            className={fieldClass("dateOfTravel")}
          />
        </Field>

        <Field label="Hotel Category" htmlFor="hotelCategory" error={errors.hotelCategory}>
          <select
            id="hotelCategory"
            name="hotelCategory"
            value={form.hotelCategory}
            onChange={handleChange}
            className={fieldClass("hotelCategory")}
          >
            <option value="">Select category</option>
            {HOTEL_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Number of People" htmlFor="numberOfPeople" error={errors.numberOfPeople}>
          <input
            id="numberOfPeople"
            name="numberOfPeople"
            type="number"
            min={1}
            value={form.numberOfPeople}
            onChange={handleChange}
            className={fieldClass("numberOfPeople")}
          />
        </Field>

        <Field
          label="Number of Children"
          htmlFor="numberOfChildren"
          error={errors.numberOfChildren}
          hint="Optional"
        >
          <input
            id="numberOfChildren"
            name="numberOfChildren"
            type="number"
            min={0}
            value={form.numberOfChildren}
            onChange={handleChange}
            className={fieldClass("numberOfChildren")}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-brass w-full rounded-sm bg-brass py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition hover:bg-brassDark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "submitting" ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  );
}

function Field({ label, htmlFor, error, hint, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-ink/60"
      >
        <span>{label}</span>
        {hint && <span className="normal-case text-ink/35">{hint}</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p className="mt-1.5 text-xs text-rust" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
