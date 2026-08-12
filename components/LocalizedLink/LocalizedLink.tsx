"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import { withLocalePrefix } from "@/lib/i18n/path";

type LocalizedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    children?: ReactNode;
  };

export function LocalizedLink({ href, children, ...props }: LocalizedLinkProps) {
  const { locale } = useLocale();
  const localizedHref =
    typeof href === "string"
      ? withLocalePrefix(href, locale)
      : { ...href, pathname: withLocalePrefix(href.pathname || "/", locale) };

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}

export function useLocalizedHref(path: string) {
  const { locale } = useLocale();
  return withLocalePrefix(path, locale);
}
