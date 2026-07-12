import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Calculator,
  Check,
  Crown,
  Instagram,
  MessageCircle,
  Quote,
  Scale,
  Send,
  Users,
  type LucideIcon,
} from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { CONTACT } from "@/lib/contact";

const teamIcons: Record<string, LucideIcon> = {
  legal: Scale,
  finance: Calculator,
  consulting: Briefcase,
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return { title: dict.nav.about, description: dict.aboutPage.subheading };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const a = dict.aboutPage;
  const L = (href: string) => `/${locale}${href}`;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(201,162,39,0.16), transparent), radial-gradient(ellipse 40% 45% at 5% 100%, rgba(61,99,158,0.2), transparent)",
          }}
        />
        <div className="container relative max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            <Users className="h-4 w-4" aria-hidden />
            {a.badge}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">{a.heading}</h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-200">{a.subheading}</p>
        </div>

        {/* Stats */}
        <dl className="container relative mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 text-center lg:grid-cols-4">
          {a.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-3xl font-extrabold text-gold-400 sm:text-4xl">{stat.value}</dd>
              <dt className="mt-1.5 text-sm text-navy-300">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------- Vision ---------- */}
      <section className="bg-white py-20">
        <div className="container max-w-4xl">
          <div className="relative rounded-2xl border-s-4 border-gold-500 bg-slate-50 p-8 shadow-card sm:p-12">
            <Quote
              className="absolute top-8 end-8 h-10 w-10 text-gold-200 rtl:-scale-x-100"
              aria-hidden
            />
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
              {a.visionTitle}
            </h2>
            <p className="mt-4 text-xl font-medium leading-relaxed text-navy-900 sm:text-2xl">
              {a.visionText}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Leadership ---------- */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              {a.leadershipTitle}
            </h2>
            <p className="mt-3 text-slate-500">{a.leadershipSubtitle}</p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            {a.leaders.map((leader) => (
              <article
                key={leader.key}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-card-hover"
              >
                {/* Avatar */}
                <div className="flex items-center gap-5">
                  <span
                    className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-2xl font-extrabold text-gold-400 shadow-card transition-transform duration-300 group-hover:scale-105"
                    aria-hidden
                  >
                    {leader.initials}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-navy-900">{leader.name}</h3>
                    <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-gold-50 px-3 py-1 text-xs font-bold text-gold-700">
                      <Crown className="h-3.5 w-3.5" aria-hidden />
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Credentials */}
                <ul className="mt-7 space-y-3.5 border-t border-slate-100 pt-6">
                  {leader.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Specialized teams (luxury dark) ---------- */}
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{a.teamsTitle}</h2>
            <p className="mt-4 leading-relaxed text-navy-200">{a.teamsSubtitle}</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {a.teams.map((team) => {
              const Icon = teamIcons[team.key];
              return (
                <div
                  key={team.key}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:bg-white/[0.07]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold-500/40 bg-gold-500/10 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                    {Icon && <Icon className="h-6 w-6" aria-hidden />}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{team.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-300">{team.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- CTA + instant contact ---------- */}
      <section className="bg-white py-20">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            {a.ctaTitle}
          </h2>
          <p className="max-w-xl leading-relaxed text-slate-500">{a.ctaDesc}</p>
          <Link
            href={L("/consultation")}
            className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-4 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
          >
            {dict.nav.consultation}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
          </Link>

          {/* Instant channels */}
          <div className="mt-4 flex flex-col items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {a.reachUs}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={CONTACT.phones[1].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-400"
              >
                <MessageCircle className="h-4 w-4 text-gold-500" aria-hidden />
                {dict.contact.whatsapp}
              </a>
              <a
                href={CONTACT.phones[1].telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-400"
              >
                <Send className="h-4 w-4 text-gold-500 rtl:-scale-x-100" aria-hidden />
                {dict.contact.telegram}
              </a>
              {CONTACT.instagrams.map((ig) => (
                <a
                  key={ig.handle}
                  href={ig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-400"
                  dir="ltr"
                >
                  <Instagram className="h-4 w-4 text-gold-500" aria-hidden />
                  {ig.handle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
