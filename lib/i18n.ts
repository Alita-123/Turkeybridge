export const locales = ["en", "tr", "fa"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  fa: "فارسی",
};

export const localeFlags: Record<Locale, string> = {
  en: "EN",
  tr: "TR",
  fa: "FA",
};

export type Direction = "ltr" | "rtl";

export function dirOf(locale: Locale): Direction {
  return locale === "fa" ? "rtl" : "ltr";
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
