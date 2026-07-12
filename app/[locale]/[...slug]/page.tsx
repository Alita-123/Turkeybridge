import Link from "next/link";
import { ArrowLeft, Construction, MessageSquare } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

/**
 * Temporary catch-all so every navigation link routes correctly today.
 * Replace with dedicated pages (e.g. app/[locale]/services/business/page.tsx)
 * as each detail page is built.
 */
export default function PlaceholderPage({
  params,
}: {
  params: { locale: string; slug: string[] };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  const title = params.slug
    .map((s) => s.replace(/-/g, " "))
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" / ");

  return (
    <section className="bg-slate-50 py-28">
      <div className="container max-w-2xl text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-navy-900 text-gold-400">
          <Construction className="h-8 w-8" aria-hidden />
        </span>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold-600">{title}</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          {dict.misc.underConstructionTitle}
        </h1>
        <p className="mt-4 leading-relaxed text-slate-500">{dict.misc.underConstructionDesc}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={`/${locale}/consultation`}
            className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400"
          >
            <MessageSquare className="h-5 w-5" aria-hidden />
            {dict.nav.consultation}
          </Link>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-navy-900 transition-colors hover:border-gold-400"
          >
            <ArrowLeft className="h-5 w-5 rtl:rotate-180" aria-hidden />
            {dict.misc.backHome}
          </Link>
        </div>
      </div>
    </section>
  );
}
