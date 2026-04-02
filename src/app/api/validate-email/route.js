import { NextResponse } from "next/server";

const apiKey = "aa56a11c3bf04cb28fcb49a630b0769e";

const BLOCKED_EMAIL_DOMAINS = [
  "suijiyou.net",
  "yopmail.com",
  "yopmail.fr",
  "yopmail.net",
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamailblock.com",
  "10minutemail.com",
  "tempmail.com",
  "throwaway.email",
  "temp-mail.org",
  "mohmal.com",
  "trashmail.com",
  "maildrop.cc",
  "tempail.com",
  "getnada.com",
  "mintemail.com",
  "mytrashmail.com",
  "sharklasers.com",
  "spamgourmet.com",
  "mailnesia.com",
  "meltmail.com",
  "mailcatch.com",
  "emailondeck.com",
  "fakeinbox.com",
  "dispostable.com",
  "emailfake.com",
  "getairmail.com",
  "mailin8r.com",
  "mailme.lv",
  "tempr.email",
  "tmpmail.org",
  "mail.tm",
  "emailnator.com",
];

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { valid: false, reason: "Email is required" },
        { status: 400 }
      );
    }

    const emailLower = email.toLowerCase();
    const domain = emailLower.split("@").pop();

    // 1. Block disposable domains
    if (BLOCKED_EMAIL_DOMAINS.includes(domain)) {
      return NextResponse.json(
        { valid: false, reason: "blocked_domain" },
        { status: 200 }
      );
    }

    // 2. ZeroBounce validation
    const url = `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${emailLower}`;
    const response = await fetch(url);
    const data = await response.json();

    // 3. Accept only valid
    if (data.status === "valid") {
      return NextResponse.json(
        { valid: true, reason: "zerobounce_valid" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { valid: false, reason: data.status || "invalid" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email validation error:", error);
    return NextResponse.json(
      { valid: false, reason: "validation_error", error: error.message },
      { status: 500 }
    );
  }
}

