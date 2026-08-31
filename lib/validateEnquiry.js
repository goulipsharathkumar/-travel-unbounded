// Shared between the client form (components/BookingForm.jsx) and the
// server route (app/api/enquiry/route.js) so validation rules can't drift
// out of sync between the two layers.

export const HOTEL_CATEGORIES = ["Standard", "Deluxe", "Luxury"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\d{6,14}$/;

/**
 * Validates a raw enquiry payload.
 * Returns { valid: boolean, errors: { field: message } }
 */
export function validateEnquiry(data) {
  const errors = {};

  if (!data.fullName || !String(data.fullName).trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.countryCode || !String(data.countryCode).trim()) {
    errors.countryCode = "Country code is required.";
  }

  if (!data.contactNumber || !PHONE_RE.test(String(data.contactNumber).trim())) {
    errors.contactNumber = "Enter a valid contact number (digits only).";
  }

  if (!data.email || !EMAIL_RE.test(String(data.email).trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.dateOfTravel) {
    errors.dateOfTravel = "Travel date is required.";
  } else {
    const chosen = new Date(data.dateOfTravel);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(chosen.getTime())) {
      errors.dateOfTravel = "Enter a valid date.";
    } else if (chosen < today) {
      errors.dateOfTravel = "Travel date cannot be in the past.";
    }
  }

  const people = Number(data.numberOfPeople);
  if (!Number.isFinite(people) || people < 1) {
    errors.numberOfPeople = "At least 1 traveller is required.";
  }

  const children =
    data.numberOfChildren === "" || data.numberOfChildren === undefined
      ? 0
      : Number(data.numberOfChildren);
  if (!Number.isFinite(children) || children < 0) {
    errors.numberOfChildren = "Number of children can't be negative.";
  }

  if (!data.hotelCategory || !HOTEL_CATEGORIES.includes(data.hotelCategory)) {
    errors.hotelCategory = "Choose a hotel category.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
