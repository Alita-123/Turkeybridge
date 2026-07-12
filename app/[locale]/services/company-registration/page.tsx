import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getRegistration } from "@/lib/services";
import RegistrationWizard from "@/components/services/RegistrationWizard";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const content = getRegistration(locale);
  return { title: content.title, description: content.tagline };
}

export default function CompanyRegistrationPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const content = getRegistration(locale);
  const L = (href: string) => `/${locale}${href}`;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 45% at 20% 0%, rgba(201,162,39,0.14), transparent)",
          }}
        />
        <div className="container relative max-w-4xl">
          <nav className="flex items-center gap-1.5 text-sm text-navy-300" aria-label="Breadcrumb">
            <Link href={L("/services")} className="transition-colors hover:text-gold-400">
              {dict.servicePage.breadcrumb}
            </Link>
            <ChevronRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
            <span className="font-medium text-white">{content.title}</span>
          </nav>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {content.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-gold-300">{content.tagline}</p>
          <p className="mt-5 max-w-3xl leading-relaxed text-navy-200">{content.intro}</p>
        </div>
      </section>

      {/* ---------- Interactive wizard ---------- */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="container">
          <RegistrationWizard locale={locale} dict={dict} content={content} />
        </div>
      </section>
    </>
  );
}
