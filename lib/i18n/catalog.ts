import { mergeLocaleOverlay } from "@/lib/i18n/mergeLocale";
import { mergeMessageShards } from "@/lib/i18n/mergeShards";
import enNavFooterHome from "@/messages/merged/en/nav-footer-home.json";
import enGroupsExperiences from "@/messages/merged/en/groups-experiences.json";
import enCorporateSchools from "@/messages/merged/en/corporate-schools.json";
import enStoryContactLegal from "@/messages/merged/en/story-contact-legal.json";
import ruNavFooterHome from "@/messages/merged/ru/nav-footer-home.json";
import ruGroups from "@/messages/merged/ru/groups.json";
import ruExperiences from "@/messages/merged/ru/experiences.json";
import ruCorporateSchools from "@/messages/merged/ru/corporate-schools.json";
import ruStoryContactLegal from "@/messages/merged/ru/story-contact-legal.json";
import esNavFooterHome from "@/messages/merged/es/nav-footer-home.json";
import esGroupsExperiences from "@/messages/merged/es/groups-experiences.json";
import esCorporateSchools from "@/messages/merged/es/corporate-schools.json";
import esStoryContactLegal from "@/messages/merged/es/story-contact-legal.json";
import frNavFooterHome from "@/messages/merged/fr/nav-footer-home.json";
import frGroupsExperiences from "@/messages/merged/fr/groups-experiences.json";
import frCorporateSchools from "@/messages/merged/fr/corporate-schools.json";
import frStoryContactLegal from "@/messages/merged/fr/story-contact-legal.json";
import arNavFooterHome from "@/messages/merged/ar/nav-footer-home.json";
import arGroupsExperiences from "@/messages/merged/ar/groups-experiences.json";
import arCorporateSchools from "@/messages/merged/ar/corporate-schools.json";
import arStoryContactLegal from "@/messages/merged/ar/story-contact-legal.json";

export type Messages =
  typeof enNavFooterHome &
  typeof enGroupsExperiences &
  typeof enCorporateSchools &
  typeof enStoryContactLegal;

export const en = mergeMessageShards(
  enNavFooterHome as Record<string, unknown>,
  enGroupsExperiences as Record<string, unknown>,
  enCorporateSchools as Record<string, unknown>,
  enStoryContactLegal as Record<string, unknown>,
) as Messages;

export type Locale = "en" | "ru" | "ar" | "es" | "fr";

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALES: Locale[] = ["en", "ru", "ar", "es", "fr"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  ar: "العربية",
  es: "Español",
  fr: "Français",
};

/** Merge order: later files override earlier keys for the same locale. */
export const catalogs: Record<Locale, Messages> = {
  en,
  ru: mergeLocaleOverlay(
    en,
    ruNavFooterHome,
    ruGroups,
    ruExperiences,
    ruCorporateSchools,
    ruStoryContactLegal,
  ),
  es: mergeLocaleOverlay(
    en,
    esNavFooterHome,
    esGroupsExperiences,
    esCorporateSchools,
    esStoryContactLegal,
  ),
  fr: mergeLocaleOverlay(
    en,
    frNavFooterHome,
    frGroupsExperiences,
    frCorporateSchools,
    frStoryContactLegal,
  ),
  ar: mergeLocaleOverlay(
    en,
    arNavFooterHome,
    arGroupsExperiences,
    arCorporateSchools,
    arStoryContactLegal,
  ),
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "ru" || value === "ar" || value === "es" || value === "fr";
}
