import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEFAULT_LOCALE = "en";
const PREFIXED_LOCALES = new Set(["es", "fr", "ru", "ar"]);

const PUBLIC_FILE = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/").filter(Boolean)[0];

  // /en/... → redirect to unprefixed English path
  if (segment === DEFAULT_LOCALE) {
    const rest = pathname.slice(`/${DEFAULT_LOCALE}`.length) || "/";
    const url = request.nextUrl.clone();
    url.pathname = rest;
    return NextResponse.redirect(url);
  }

  if (segment && PREFIXED_LOCALES.has(segment)) {
    const locale = segment;
    const rest = pathname.slice(`/${locale}`.length) || "/";
    const url = request.nextUrl.clone();
    url.pathname = rest;

    const response = NextResponse.rewrite(url);
    response.cookies.set("vibra-locale", locale, { path: "/", sameSite: "lax" });
    response.headers.set("x-vibra-locale", locale);
    return response;
  }

  const response = NextResponse.next();
  response.cookies.set("vibra-locale", DEFAULT_LOCALE, { path: "/", sameSite: "lax" });
  response.headers.set("x-vibra-locale", DEFAULT_LOCALE);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
