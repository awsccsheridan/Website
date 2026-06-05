import { NextResponse } from "next/server";
import {
  getTurnstileSecretKey,
  isVerificationEnabled,
  VERIFICATION_COOKIE,
  VERIFICATION_TTL_SECONDS,
} from "@/lib/verification";

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function POST(request: Request) {
  if (!isVerificationEnabled()) {
    return NextResponse.json(
      { error: "Human verification is not configured." },
      { status: 503 },
    );
  }

  const body = (await request.json()) as { token?: string };
  const token = body.token;

  if (!token) {
    return NextResponse.json({ error: "Missing verification token." }, { status: 400 });
  }

  const formData = new FormData();
  formData.append("secret", getTurnstileSecretKey());
  formData.append("response", token);

  const verifyResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    },
  );

  const outcome = (await verifyResponse.json()) as TurnstileVerifyResponse;

  if (!outcome.success) {
    return NextResponse.json(
      { error: "Verification failed.", codes: outcome["error-codes"] ?? [] },
      { status: 403 },
    );
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set(VERIFICATION_COOKIE, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: VERIFICATION_TTL_SECONDS,
    path: "/",
  });

  return response;
}
