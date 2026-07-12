import Link from "next/link";
import { ArrowRight, Crown } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { vipIcons } from "@/components/icons";

export default function VipSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white">
      {/* Luxury glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(201,162,39,0.18), transparent), radial-gradient(ellipse 40% 40% at 90% 100%, rgba(61,99,158,0.2), transparent)",
        }}
      />
      {/* Fine gold line top */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            <Crown className="h-4 w-4" aria-hidden />
            {dict.vip.badge}
          </p>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {dict.vip.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-200">{dict.vip.subheading}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.vip.points.map((point) => {
            const Icon = vipIcons[point.key];
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

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}${dict.vip.href}`}
            className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-4 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
          >
            {dict.vip.cta}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
