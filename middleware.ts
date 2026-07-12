import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

/**
 * Locale middleware:
 * - `/`             → redirects to `/en`
 * - `/services/...` → redirects to `/en/services/...`
 * - `/fa/...`       → passes through untouched
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip internals and static files
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
