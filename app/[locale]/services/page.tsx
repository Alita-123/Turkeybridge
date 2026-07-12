import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import ServicesGrid from "@/components/home/ServicesGrid";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return { title: dict.nav.services, description: dict.servicePage.indexSubtitle };
}

export default function ServicesIndexPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  return (
    <>
      {/* Page hero */}
      <section className="bg-navy-950 py-16 text-white">
        <div className="container max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            {dict.servicePage.breadcrumb}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {dict.servicePage.indexTitle}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-200">
            {dict.servicePage.indexSubtitle}
          </p>
        </div>
      </section>

      <ServicesGrid locale={locale} dict={dict} />
    </>
  );
}
