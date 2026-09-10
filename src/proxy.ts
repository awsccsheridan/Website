import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  isVerificationEnabled,
  isVerifiedCookie,
  isVerifyPath,
  VERIFICATION_COOKIE,
} from "@/lib/verification";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isVerificationEnabled()) {
    return NextResponse.next();
  }

  if (isVerifyPath(pathname) || pathname.startsWith("/api/verify")) {
    return NextResponse.next();
  }

  if (isVerifiedCookie(request.cookies.get(VERIFICATION_COOKIE)?.value)) {
    return NextResponse.next();
  }

  const verifyUrl = request.nextUrl.clone();
  verifyUrl.pathname = "/verify";
  verifyUrl.searchParams.set("next", pathname);

  return NextResponse.redirect(verifyUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|ttf|woff2?)$).*)",
  ],
};
