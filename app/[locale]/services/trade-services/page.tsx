import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Check,
  ChevronRight,
  FileCheck2,
  Globe,
  Handshake,
  Network,
  PackageSearch,
  Ship,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import TradeQuoteForm from "@/components/services/TradeQuoteForm";

const corridorIcons: Record<string, LucideIcon> = {
  "tr-ir": Truck,
  "tr-world": Ship,
  "ir-world": Globe,
};

const deliverableIcons: Record<string, LucideIcon> = {
  freight: Truck,
  customs: FileCheck2,
  sourcing: PackageSearch,
};

const b2bIcons: Record<string, LucideIcon> = {
  consulting: Briefcase,
  contracts: Handshake,
  compliance: ShieldCheck,
  network: Network,
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return { title: dict.tradePage.heading, description: dict.tradePage.tagline };
}

export default function TradeServicesPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const t = dict.tradePage;
  const L = (href: string) => `/${locale}${href}`;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-white lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 45% at 80% 0%, rgba(201,162,39,0.16), transparent), radial-gradient(ellipse 40% 45% at 10% 100%, rgba(61,99,158,0.2), transparent)",
          }}
        />
        <div className="container relative">
          <nav className="flex items-center gap-1.5 text-sm text-navy-300" aria-label="Breadcrumb">
            <Link href={L("/services")} className="transition-colors hover:text-gold-400">
              {dict.servicePage.breadcrumb}
            </Link>
            <ChevronRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
            <span className="font-medium text-white">{t.heading}</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              <Globe className="h-4 w-4" aria-hidden />
              {t.badge}
            </p>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {t.heading}
            </h1>
            <p className="mt-3 text-lg font-medium text-gold-300">{t.tagline}</p>
            <p className="mt-5 leading-relaxed text-navy-200">{t.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
              >
                {t.ctaQuote}
                <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
              </a>
              <Link
                href={L("/consultation")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition-all hover:border-gold-400/60 hover:bg-white/10"
              >
                {dict.nav.consultation}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Core corridors: interactive grid ---------- */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              {t.corridorsTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-500">{t.corridorsSubtitle}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.corridors.map((corridor) => {
              const Icon = corridorIcons[corridor.key];
              return (
                <div
                  key={corridor.key}
                  className="group flex flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:bg-white hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                      {Icon && <Icon className="h-6 w-6" aria-hidden />}
                    </span>
                    <h3 className="text-xl font-extrabold text-navy-900" dir="ltr">
                      {corridor.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">{corridor.desc}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                    {corridor.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Core deliverables ---------- */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              {t.deliverablesTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-500">{t.deliverablesSubtitle}</p>
          </div>

          <div className="mt-12 space-y-5">
            {t.deliverables.map((item, i) => {
              const Icon = deliverableIcons[item.key];
              return (
                <div
                  key={item.key}
                  className="group flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:border-gold-300 hover:shadow-card-hover sm:flex-row sm:items-start"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-900 text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                    {Icon && <Icon className="h-7 w-7" aria-hidden />}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                      0{i + 1}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-2 max-w-3xl leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Strategic B2B consulting block (luxury dark) ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(201,162,39,0.15), transparent)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent"
        />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              <Handshake className="h-4 w-4" aria-hidden />
              {t.b2bBadge}
            </p>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.b2bTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-200">{t.b2bDesc}</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.b2bPoints.map((point) => {
              const Icon = b2bIcons[point.key];
              return (
                <div
                  key={point.key}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:bg-white/[0.07]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold-500/40 bg-gold-500/10 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                    {Icon && <Icon className="h-6 w-6" aria-hidden />}
                  </span>
                  <h3 className="mt-5 font-bold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-300">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Step-by-step logistics flow ---------- */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              {t.flowTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-500">{t.flowSubtitle}</p>
          </div>

          <ol className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-4">
            {t.flow.map((step, i) => (
              <li key={step.title} className="relative flex gap-5 lg:flex-col lg:gap-0 lg:text-center">
                {/* Connector (desktop) */}
                {i < t.flow.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-6 hidden h-0.5 w-full bg-gradient-to-r from-gold-400 to-slate-200 lg:block ltr:left-1/2 rtl:right-1/2"
                  />
                )}
                {/* Connector (mobile, vertical) */}
                {i < t.flow.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-14 bottom-0 w-0.5 bg-slate-200 lg:hidden ltr:left-6 rtl:right-6"
                  />
                )}
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-900 text-lg font-extrabold text-gold-400 shadow-card lg:mx-auto">
                  {i + 1}
                </span>
                <div className="pb-2 lg:mt-5 lg:pb-0">
                  <h3 className="font-bold leading-snug text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Quote / inquiry form ---------- */}
      <section className="bg-slate-50 py-20 scroll-mt-24" id="quote">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              {t.ctaQuote}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-500">{t.corridorsSubtitle}</p>
            <ul className="mt-8 space-y-4">
              {t.deliverables.map((item) => {
                const Icon = deliverableIcons[item.key];
                return (
                  <li key={item.key} className="flex items-center gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400">
                      {Icon && <Icon className="h-5 w-5" aria-hidden />}
                    </span>
                    <span className="text-sm font-semibold text-navy-900">{item.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <TradeQuoteForm dict={dict} />
        </div>
      </section>
    </>
  );
}
