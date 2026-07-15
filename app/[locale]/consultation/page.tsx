import type { Metadata } from "next";
import { CalendarCheck, Check, Instagram, MessageCircle, Phone } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { CONTACT } from "@/lib/contact";
import ConsultationForm from "@/components/consultation/ConsultationForm";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return { title: dict.consultationPage.heading, description: dict.consultationPage.subheading };
}

export default function ConsultationPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const k = dict.consultationPage;
  const c = dict.contact;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(201,162,39,0.16), transparent)",
          }}
        />
        <div className="container relative max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            <CalendarCheck className="h-4 w-4" aria-hidden />
            {k.badge}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">{k.heading}</h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-200">{k.subheading}</p>
        </div>
      </section>

      {/* ---------- Form + side panel ---------- */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* ===== Consultation request form ===== */}
          <ConsultationForm dict={dict} />

          {/* ===== Side panel: expectations + instant contact ===== */}
          <div className="space-y-6">
            {/* What to expect */}
            <div className="rounded-2xl bg-navy-950 p-8 text-white">
              <h2 className="text-xl font-extrabold tracking-tight">{k.benefitsTitle}</h2>
              <ul className="mt-6 space-y-4">
                {k.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-navy-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instant contact fallback */}
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card">
              <h2 className="text-xl font-extrabold tracking-tight text-navy-900">{k.altTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{k.altDesc}</p>

              {/* WhatsApp — both numbers */}
              <div className="mt-6 space-y-2.5">
                {CONTACT.phones.map((phone) => (
                  <a
                    key={phone.display}
                    href={phone.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-gold-300 hover:bg-white hover:shadow-card"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                        <MessageCircle className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-sm font-semibold text-navy-900" dir="ltr">
                        {phone.display}
                      </span>
                    </span>
                    <span className="text-xs font-semibold text-gold-600">{c.whatsapp}</span>
                  </a>
                ))}
              </div>

              {/* Instagram — both accounts */}
              <div className="mt-2.5 space-y-2.5">
                {CONTACT.instagrams.map((ig, i) => (
                  <a
                    key={ig.handle}
                    href={ig.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-gold-300 hover:bg-white hover:shadow-card"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                        <Instagram className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-sm font-semibold text-navy-900" dir="ltr">
                        {ig.handle}
                      </span>
                    </span>
                    <span className="text-xs font-semibold text-gold-600">
                      {i === 0 ? c.instagramMain : c.instagramBusiness}
                    </span>
                  </a>
                ))}
              </div>

              {/* Direct call */}
              <a
                href={CONTACT.phones[1].tel}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                <Phone className="h-4 w-4 text-gold-400" aria-hidden />
                <span dir="ltr">{CONTACT.phones[1].display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
