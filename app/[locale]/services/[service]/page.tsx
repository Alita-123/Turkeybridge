import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Banknote,
  CalendarClock,
  ChevronRight,
  FileCheck2,
  Languages,
  Scale,
} from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getService, getAllServices, serviceSlugs } from "@/lib/services";
import { serviceIcons } from "@/components/icons";

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; service: string };
}): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const service = getService(locale, params.service);
  return service ? { title: service.title, description: service.tagline } : {};
}

export default function ServiceDetailPage({
  params,
}: {
  params: { locale: string; service: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const service = getService(locale, params.service);
  if (!service) notFound();

  const ui = dict.servicePage;
  const L = (href: string) => `/${locale}${href}`;
  const Icon = serviceIcons[service.key];

  const glance = [
    { Icon: CalendarClock, label: ui.glanceDuration, value: service.glance.duration },
    { Icon: Banknote, label: ui.glanceBudget, value: service.glance.budget },
    { Icon: Languages, label: ui.glanceLanguages, value: service.glance.languages },
  ];

  const otherServices = getAllServices(locale).filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-white lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 45% at 80% 0%, rgba(201,162,39,0.14), transparent)",
          }}
        />
        <div className="container relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-navy-300" aria-label="Breadcrumb">
            <Link href={L("/services")} className="transition-colors hover:text-gold-400">
              {ui.breadcrumb}
            </Link>
            <ChevronRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
            <span className="font-medium text-white">{service.title}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="max-w-3xl">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-500 text-navy-950">
                {Icon && <Icon className="h-7 w-7" aria-hidden />}
              </span>
              <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-3 text-lg font-medium text-gold-300">{service.tagline}</p>
              <p className="mt-5 leading-relaxed text-navy-200">{service.intro}</p>
            </div>

            {/* At-a-glance card */}
            <dl className="w-full space-y-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur lg:w-80">
              {glance.map(({ Icon: GIcon, label, value }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold-500/15 text-gold-400">
                    <GIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-navy-300">{label}</dt>
                    <dd className="mt-0.5 font-bold text-white">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- Process steps ---------- */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900">{ui.stepsTitle}</h2>
            <p className="mt-3 text-slate-500">{ui.stepsSubtitle}</p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {service.steps.map((step, i) => (
              <li
                key={step.title}
                className="group relative rounded-2xl border border-slate-100 bg-slate-50/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:bg-white hover:shadow-card-hover"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-lg font-extrabold text-gold-400 transition-transform group-hover:scale-105">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Documents + Legal framework ---------- */}
      <section className="bg-slate-50 py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          {/* Documents */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">{ui.documentsTitle}</h2>
            <p className="mt-2 text-slate-500">{ui.documentsSubtitle}</p>
            <ul className="mt-7 space-y-3">
              {service.documents.map((doc) => (
                <li
                  key={doc}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-card"
                >
                  <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden />
                  <span className="text-sm font-medium text-navy-900">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal framework */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">{ui.legalTitle}</h2>
            <p className="mt-2 text-slate-500">{ui.legalSubtitle}</p>
            <ul className="mt-7 space-y-4">
              {service.legal.map((law) => (
                <li key={law.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400">
                      <Scale className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="font-bold text-navy-900">{law.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{law.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="bg-navy-950 py-16 text-white">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">{ui.ctaTitle}</h2>
          <p className="max-w-xl text-navy-200">{ui.ctaDesc}</p>
          <Link
            href={L("/consultation")}
            className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-4 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
          >
            {ui.ctaButton}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
          </Link>
        </div>
      </section>

      {/* ---------- Other services ---------- */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-xl font-bold text-navy-900">{ui.otherServices}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {otherServices.map((s) => {
              const SIcon = serviceIcons[s.key];
              return (
                <Link
                  key={s.slug}
                  href={L(`/services/${s.slug}`)}
                  className="group flex items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition-all hover:-translate-y-0.5 hover:border-gold-300 hover:bg-white hover:shadow-card"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    {SIcon && <SIcon className="h-5 w-5" aria-hidden />}
                  </span>
                  <span className="text-sm font-semibold leading-snug text-navy-900">{s.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
