import { mkdir, appendFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { site } from "../../site-data";

type InquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  country?: string;
  productRequirement?: string;
  message?: string;
  website?: string;
  startedAt?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9][0-9\s().-]{6,24}$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

export async function POST(request: NextRequest) {
  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const website = clean(payload.website);
  if (website) {
    return NextResponse.json({ ok: false, message: "Spam detected." }, { status: 400 });
  }

  const startedAt = Number(payload.startedAt || 0);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1200) {
    return NextResponse.json({ ok: false, message: "Please try again." }, { status: 400 });
  }

  const inquiry = {
    name: clean(payload.name),
    email: clean(payload.email),
    phone: clean(payload.phone),
    company: clean(payload.company),
    country: clean(payload.country),
    productRequirement: clean(payload.productRequirement),
    message: clean(payload.message),
    recipient: site.email,
    source: "website-inquiry-form",
    createdAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") || "",
  };

  if (!inquiry.name || !inquiry.email || !inquiry.phone) {
    return NextResponse.json({ ok: false, message: "Name, email, and phone are required." }, { status: 400 });
  }

  if (!emailPattern.test(inquiry.email)) {
    return NextResponse.json({ ok: false, message: "Invalid email address." }, { status: 400 });
  }

  if (!phonePattern.test(inquiry.phone)) {
    return NextResponse.json({ ok: false, message: "Invalid phone number." }, { status: 400 });
  }

  try {
    const dataDir = join(process.cwd(), ".data");
    await mkdir(dataDir, { recursive: true });
    await appendFile(join(dataDir, "inquiries.jsonl"), `${JSON.stringify(inquiry)}\n`, "utf8");
  } catch {
    return NextResponse.json({ ok: false, message: "Could not store inquiry." }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    message: "Inquiry submitted successfully.",
  });
}
