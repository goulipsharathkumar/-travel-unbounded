import mongoose from "mongoose";

const HOTEL_CATEGORIES = ["Standard", "Deluxe", "Luxury"];

const EnquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    countryCode: { type: String, required: true, trim: true },
    contactNumber: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    dateOfTravel: { type: Date, required: true },
    numberOfPeople: { type: Number, required: true, min: 1 },
    numberOfChildren: { type: Number, required: true, min: 0, default: 0 },
    hotelCategory: { type: String, required: true, enum: HOTEL_CATEGORIES },
    destination: { type: String, trim: true, default: "" },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const HOTEL_CATEGORY_OPTIONS = HOTEL_CATEGORIES;

// Prevent "OverwriteModelError" from Next.js hot-reloading this module.
export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", EnquirySchema);
