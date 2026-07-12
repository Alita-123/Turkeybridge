import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, dirOf, isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Inter for EN/TR — Vazirmatn for FA (RTL) */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return {
    title: {
      default: `${dict.brand.name} — ${dict.brand.tagline}`,
      template: `%s | ${dict.brand.name}`,
    },
    description: dict.hero.subtitle,
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const dir = dirOf(locale);

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${vazirmatn.variable}`}>
      <body className={locale === "fa" ? "font-fa" : "font-sans"}>
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
