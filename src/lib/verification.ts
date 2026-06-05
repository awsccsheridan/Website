export const VERIFICATION_COOKIE = "sbg_verified";
export const VERIFICATION_TTL_SECONDS = 15 * 60;

/** Cloudflare test keys for local dev when production keys are not configured. */
export const TURNSTILE_TEST_SITE_KEY = "3x00000000000000000000FF";
export const TURNSTILE_TEST_SECRET_KEY = "3x0000000000000000000000000000000AA";

function hasProductionKeys() {
  return Boolean(
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY,
  );
}

export function useTurnstileTestKeys() {
  return process.env.NODE_ENV === "development" && !hasProductionKeys();
}

export function getTurnstileSiteKey() {
  if (useTurnstileTestKeys()) {
    return TURNSTILE_TEST_SITE_KEY;
  }

  return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
}

export function getTurnstileSecretKey() {
  if (useTurnstileTestKeys()) {
    return TURNSTILE_TEST_SECRET_KEY;
  }

  return process.env.TURNSTILE_SECRET_KEY ?? "";
}

export function isVerificationEnabled() {
  return Boolean(getTurnstileSiteKey() && getTurnstileSecretKey());
}

export function isVerifyPath(pathname: string) {
  return pathname === "/verify" || pathname.startsWith("/verify/");
}

export function isVerifiedCookie(value: string | undefined) {
  return value === "1";
}

export function getSafeRedirectPath(path: string | null | undefined) {
  if (!path || !path.startsWith("/") || path.startsWith("//")) {
    return "/";
  }

  if (path.startsWith("/verify")) {
    return "/";
  }

  return path;
}
