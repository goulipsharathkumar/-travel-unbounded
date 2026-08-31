import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { validateEnquiry } from "@/lib/validateEnquiry";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  // Never trust the client — re-run full validation server-side even
  // though the form already validated this.
  const { valid, errors } = validateEnquiry(body);
  if (!valid) {
    return NextResponse.json(
      { success: false, message: "Invalid enquiry data.", errors },
      { status: 400 }
    );
  }

  const normalized = {
    fullName: String(body.fullName).trim(),
    countryCode: String(body.countryCode).trim(),
    contactNumber: String(body.contactNumber).trim(),
    email: String(body.email).trim().toLowerCase(),
    dateOfTravel: new Date(body.dateOfTravel),
    numberOfPeople: Number(body.numberOfPeople),
    numberOfChildren: body.numberOfChildren ? Number(body.numberOfChildren) : 0,
    hotelCategory: body.hotelCategory,
    destination: body.destination ? String(body.destination).trim() : "",
  };

  try {
    await connectToDatabase();
    const enquiry = await Enquiry.create(normalized);
    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        id: enquiry._id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Failed to save enquiry:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}

// Bonus (optional per assignment): list submitted enquiries, e.g. to power
// a simple /admin view. Not linked from the UI.
export async function GET() {
  try {
    await connectToDatabase();
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, enquiries }, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch enquiries:", err);
    return NextResponse.json(
      { success: false, message: "Could not load enquiries." },
      { status: 500 }
    );
  }
}
