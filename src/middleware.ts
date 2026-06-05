import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  isVerificationEnabled,
  isVerifiedCookie,
  isVerifyPath,
  VERIFICATION_COOKIE,
} from "@/lib/verification";

function withPathname(request: NextRequest, pathname: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isVerificationEnabled()) {
    return withPathname(request, pathname);
  }

  if (isVerifyPath(pathname) || pathname.startsWith("/api/verify")) {
    return withPathname(request, pathname);
  }

  if (isVerifiedCookie(request.cookies.get(VERIFICATION_COOKIE)?.value)) {
    return withPathname(request, pathname);
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
