# Travel Unbounded

A travel company website built with Next.js, showcasing curated India and international destinations, with a working enquiry system backed by MongoDB.

**Live site:** https://travel-unbounded-two.vercel.app

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** MongoDB Atlas (Mongoose)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Features

- **Home page** — Hero section, India and International destination cards with coordinate tags
- **About page** — Company story, office locations, why-choose-us section
- **Contact page** — Enquiry form with client-side and server-side validation, loading/success/error states
- **Enquiry API** (`POST /api/enquiry`) — Validates and saves enquiries to MongoDB, returns proper status codes (201 success, 400 validation error, 500 server error)
- Fully responsive design
- Per-page SEO metadata

## Getting Started

### 1. Clone and install

\`\`\`bash
git clone https://github.com/goulipsharathkumar/-travel-unbounded.git
cd -travel-unbounded
npm install
\`\`\`

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and add your MongoDB connection string:

\`\`\`
MONGODB_URI=your_mongodb_connection_string
\`\`\`

> **Note:** If you're on a network that blocks SRV DNS records, use the standard (non-SRV) connection string format instead of `mongodb+srv://` — list all three shard hosts directly, e.g.:
> \`mongodb://user:pass@host1:27017,host2:27017,host3:27017/dbname?ssl=true&authSource=admin&retryWrites=true&w=majority\`

### 3. Run locally

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000).

## API Reference

### POST /api/enquiry

Submits a travel enquiry.

**Request body:**
\`\`\`json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "destination": "string",
  "message": "string"
}
\`\`\`

**Responses:**
- `201` — Enquiry saved successfully
- `400` — Validation failed (missing/invalid fields)
- `500` — Server/database error

## Project Structure

\`\`\`
app/            → Pages (Home, About, Contact) and API routes
components/     → Reusable UI components
data/           → Static destination data
lib/            → MongoDB connection and shared validation logic
models/         → Mongoose schema for enquiries
\`\`\`

## Assumptions

- Destination images are sourced via LoremFlickr (keyword-matched real photos) rather than manually curated stock photography, given the assignment's time constraints.
- Enquiry data is stored with a `createdAt` timestamp but no authentication/admin panel, as this was out of scope for Phase 1.
