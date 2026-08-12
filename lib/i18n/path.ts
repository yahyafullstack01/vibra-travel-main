import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/lib/i18n/catalog";

/** Locales that appear as a URL prefix. English stays unprefixed (`/`, `/groups`). */
export const PREFIXED_LOCALES = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && isLocale(segment) && segment !== DEFAULT_LOCALE) {
    return segment;
  }
  return DEFAULT_LOCALE;
}

export function stripLocaleFromPathname(pathname: string): string {
  const parts = pathname.split("/");
  const maybeLocale = parts[1];
  if (maybeLocale && isLocale(maybeLocale) && maybeLocale !== DEFAULT_LOCALE) {
    const rest = parts.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function withLocalePrefix(path: string, locale: Locale): string {
  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const withoutHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;

  const queryIndex = withoutHash.indexOf("?");
  const query = queryIndex >= 0 ? withoutHash.slice(queryIndex) : "";
  const pathnameOnly = queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash;

  const bare = stripLocaleFromPathname(pathnameOnly || "/");
  const normalized = bare.startsWith("/") ? bare : `/${bare}`;

  if (locale === DEFAULT_LOCALE) {
    return `${normalized === "//" ? "/" : normalized}${query}${hash}`;
  }

  if (normalized === "/") {
    return `/${locale}${query}${hash}`;
  }

  return `/${locale}${normalized}${query}${hash}`;
}

export function pathWithoutLocaleEquals(pathname: string, target: string): boolean {
  return stripLocaleFromPathname(pathname) === target;
}
