import Link from "next/link";
import { ArrowRight, Clock, Instagram, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { CONTACT, MAPS_EMBED_URL } from "@/lib/contact";

export default function ContactSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const c = dict.contact;

  return (
    <section className="bg-slate-50 py-20" id="contact">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-stretch">
        {/* Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            {c.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-slate-500">{c.subheading}</p>

          <dl className="mt-8 space-y-4">
            {/* Address */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-card">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {c.addressLabel}
                </dt>
                <dd className="mt-0.5 font-semibold text-navy-900">{c.address}</dd>
              </div>
            </div>

            {/* Phones with WhatsApp / Telegram quick actions */}
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-card">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {c.phoneLabel}
                </dt>
              </div>
              <dd className="mt-3 space-y-2.5 ps-[3.75rem]">
                {CONTACT.phones.map((p) => (
                  <div key={p.display} className="flex flex-wrap items-center gap-2">
                    <a
                      href={p.tel}
                      className="font-semibold text-navy-900 transition-colors hover:text-gold-600"
                      dir="ltr"
                    >
                      {p.display}
                    </a>
                    <span className="flex items-center gap-1.5">
                      <a
                        href={p.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${c.whatsapp} — ${p.display}`}
                        title={c.whatsapp}
                        className="grid h-7 w-7 place-items-center rounded-md bg-slate-100 text-slate-500 transition-colors hover:bg-gold-500 hover:text-navy-950"
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden />
                      </a>
                      <a
                        href={p.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${c.telegram} — ${p.display}`}
                        title={c.telegram}
                        className="grid h-7 w-7 place-items-center rounded-md bg-slate-100 text-slate-500 transition-colors hover:bg-gold-500 hover:text-navy-950"
                      >
                        <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
                      </a>
                    </span>
                  </div>
                ))}
              </dd>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-card">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {c.emailLabel}
                </dt>
                <dd className="mt-0.5">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-semibold text-navy-900 transition-colors hover:text-gold-600"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
            </div>

            {/* Instagram — main & business accounts */}
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-card">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400">
                  <Instagram className="h-5 w-5" aria-hidden />
                </span>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {c.instagramLabel}
                </dt>
              </div>
              <dd className="mt-3 space-y-2 ps-[3.75rem]">
                {CONTACT.instagrams.map((ig, i) => (
                  <div key={ig.handle}>
                    <a
                      href={ig.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-navy-900 transition-colors hover:text-gold-600"
                      dir="ltr"
                    >
                      {ig.handle}
                    </a>
                    <span className="ms-2 text-xs text-slate-400">
                      {i === 0 ? c.instagramMain : c.instagramBusiness}
                    </span>
                  </div>
                ))}
              </dd>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-card">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {c.hoursLabel}
                </dt>
                <dd className="mt-0.5 font-semibold text-navy-900">{c.hours}</dd>
              </div>
            </div>
          </dl>

          <Link
            href={`/${locale}${c.href}`}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
          >
            {c.cta}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
          </Link>
        </div>

        {/* Interactive Google Map — Olive Plaza, Maslak */}
        <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-slate-200 shadow-card">
          <iframe
            src={MAPS_EMBED_URL}
            title={c.mapLabel}
            width="100%"
            height="100%"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
