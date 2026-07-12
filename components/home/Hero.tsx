import Link from "next/link";
import { ArrowRight, GraduationCap, MapPin, Play } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const L = (href: string) => `/${locale}${href}`;

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(201,162,39,0.15), transparent), radial-gradient(ellipse 50% 60% at 20% 90%, rgba(61,99,158,0.25), transparent), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 56px 56px, 56px 56px",
        }}
      />

      <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        {/* Copy */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-medium text-gold-300 animate-fade-up">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {dict.hero.badge}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl xl:text-6xl animate-fade-up-delay-1">
            {dict.hero.title1}{" "}
            <span className="relative whitespace-nowrap text-gold-400">
              {dict.hero.titleHighlight}
              <svg
                aria-hidden
                viewBox="0 0 120 8"
                className="absolute -bottom-1.5 start-0 w-full text-gold-500/60"
                preserveAspectRatio="none"
              >
                <path d="M2 6 Q 60 -2 118 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            {dict.hero.title2}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200 animate-fade-up-delay-2">
            {dict.hero.subtitle}
          </p>

          {/* Dual CTA */}
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-3">
            <Link
              href={L("/services")}
              className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
            >
              {dict.hero.ctaPrimary}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
            </Link>
            <Link
              href={L("/academy")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition-all hover:border-gold-400/60 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <GraduationCap className="h-5 w-5" aria-hidden />
              {dict.hero.ctaSecondary}
            </Link>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4 animate-fade-up-delay-3">
            {dict.hero.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-2xl font-extrabold text-gold-400 sm:text-3xl">{stat.value}</dd>
                <dt className="mt-1 text-xs text-navy-300">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Premium media placeholder */}
        <div className="relative hidden animate-fade-in lg:block lg:justify-self-end">
          <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 shadow-card-hover">
            {/* Skyline silhouette placeholder */}
            <svg
              aria-hidden
              viewBox="0 0 400 300"
              className="absolute inset-0 h-full w-full text-navy-700/60"
              preserveAspectRatio="xMidYMax slice"
            >
              <path
                fill="currentColor"
                d="M0 300V220h20v-40h15v40h25v-70h10l5-20 5 20h10v70h20V150h30v150zM140 300V180h20v-30h10v-15l8-25 8 25v15h10v30h18v120zM220 300V200h25v-60h12l6-18 6 18h12v60h22v-90h25v190z"
              />
              <circle cx="330" cy="70" r="26" fill="rgba(201,162,39,0.35)" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent" />

            {/* Play button */}
            <button
              type="button"
              className="group absolute inset-0 grid place-items-center"
              aria-label={dict.hero.videoLabel}
            >
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gold-500 text-navy-950 shadow-gold transition-transform group-hover:scale-110">
                <Play className="h-8 w-8 fill-current rtl:-scale-x-100" aria-hidden />
              </span>
            </button>

            <p className="absolute bottom-4 start-0 end-0 text-center text-sm font-medium text-navy-200">
              {dict.hero.videoLabel}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
