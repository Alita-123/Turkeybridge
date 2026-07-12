import Link from "next/link";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { serviceIcons } from "@/components/icons";

export default function ServicesGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const L = (href: string) => `/${locale}${href}`;

  return (
    <section className="bg-slate-50 py-20" id="services">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            {dict.services.heading}
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">{dict.services.subheading}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service) => {
            const Icon = serviceIcons[service.key];
            return (
              <Link
                key={service.key}
                href={L(service.href)}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                    {Icon && <Icon className="h-6 w-6" aria-hidden />}
                  </span>
                  <ArrowRight
                    className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-500 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                    aria-hidden
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-navy-900 group-hover:text-navy-950">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{service.desc}</p>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto pt-5 text-sm font-semibold text-gold-600 group-hover:text-gold-700">
                  {dict.services.learnMore} →
                </span>
              </Link>
            );
          })}

          {/* Consultation CTA card */}
          <div className="flex flex-col justify-center rounded-2xl bg-navy-900 p-7 text-white shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-500 text-navy-950">
              <MessageSquare className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-bold">{dict.services.ctaCard.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-navy-200">{dict.services.ctaCard.desc}</p>
            <Link
              href={L(dict.services.ctaCard.href)}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
            >
              {dict.services.ctaCard.cta}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
