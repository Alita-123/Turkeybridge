import type { Metadata } from "next";
import {
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Phone,
  Send,
} from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { CONTACT, MAPS_EMBED_URL } from "@/lib/contact";
import ContactForm from "@/components/contact/ContactForm";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return { title: dict.nav.contact, description: dict.contactPage.subheading };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const c = dict.contact;
  const p = dict.contactPage;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(201,162,39,0.15), transparent)",
          }}
        />
        <div className="container relative max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            <MessagesSquare className="h-4 w-4" aria-hidden />
            {p.badge}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">{p.heading}</h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-200">{p.subheading}</p>
        </div>
      </section>

      {/* ---------- Split layout: channels | lead form ---------- */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* ===== Left: contact channel cards ===== */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
              {p.channelsTitle}
            </h2>

            <div className="mt-5 space-y-4">
              {/* Phone cards — tel / WhatsApp / Telegram all clickable */}
              {CONTACT.phones.map((phone) => (
                <div
                  key={phone.display}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {c.phoneLabel}
                      </p>
                      <a
                        href={phone.tel}
                        className="mt-0.5 block text-lg font-extrabold text-navy-900 transition-colors hover:text-gold-600"
                        dir="ltr"
                      >
                        {phone.display}
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                    <a
                      href={phone.tel}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-navy-900 transition-colors hover:bg-gold-500 hover:text-navy-950"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden />
                      {p.callAction}
                    </a>
                    <a
                      href={phone.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-navy-900 transition-colors hover:bg-gold-500 hover:text-navy-950"
                    >
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                      {c.whatsapp}
                    </a>
                    <a
                      href={phone.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-navy-900 transition-colors hover:bg-gold-500 hover:text-navy-950"
                    >
                      <Send className="h-3.5 w-3.5 rtl:-scale-x-100" aria-hidden />
                      {c.telegram}
                    </a>
                  </div>
                </div>
              ))}

              {/* Email */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-card-hover"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {c.emailLabel}
                  </p>
                  <p className="mt-0.5 font-bold text-navy-900 group-hover:text-gold-600" dir="ltr">
                    {CONTACT.email}
                  </p>
                </div>
              </a>

              {/* Instagram — main & business accounts */}
              {CONTACT.instagrams.map((ig, i) => (
                <a
                  key={ig.handle}
                  href={ig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-card-hover"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Instagram className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {i === 0 ? c.instagramMain : c.instagramBusiness}
                    </p>
                    <p className="mt-0.5 font-bold text-navy-900 group-hover:text-gold-600" dir="ltr">
                      {ig.handle}
                    </p>
                  </div>
                </a>
              ))}

              {/* Address */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {c.addressLabel}
                  </p>
                  <p className="mt-0.5 font-bold text-navy-900">{c.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {c.hoursLabel}
                  </p>
                  <p className="mt-0.5 font-bold text-navy-900">{c.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right: lead generation form ===== */}
          <ContactForm dict={dict} />
        </div>
      </section>

      {/* ---------- Interactive Google Map — full width ---------- */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="relative h-[420px] overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            <iframe
              src={MAPS_EMBED_URL}
              title={`${p.mapTitle} — ${c.address}`}
              width="100%"
              height="100%"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-center text-sm text-slate-500">
            {p.mapTitle} — {c.address}
          </p>
        </div>
      </section>
    </>
  );
}
