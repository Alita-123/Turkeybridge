import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock3, GraduationCap, SignalHigh } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getAllCourses } from "@/lib/courses";
import { academyIcons, courseIcons } from "@/components/icons";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return { title: dict.nav.academy, description: dict.academy.subheading };
}

export default function AcademyPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const courses = getAllCourses(locale);
  const L = (href: string) => `/${locale}${href}`;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(201,162,39,0.16), transparent), radial-gradient(ellipse 40% 45% at 90% 100%, rgba(61,99,158,0.2), transparent)",
          }}
        />
        <div className="container relative max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            <GraduationCap className="h-4 w-4" aria-hidden />
            {dict.academy.badge}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {dict.academy.heading}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-200">{dict.academy.subheading}</p>
        </div>

        {/* Highlights */}
        <div className="container relative mt-12 grid gap-5 md:grid-cols-3">
          {dict.academy.highlights.map((h) => {
            const Icon = academyIcons[h.key];
            return (
              <div
                key={h.key}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-500/15 text-gold-400">
                  {Icon && <Icon className="h-5 w-5" aria-hidden />}
                </span>
                <h2 className="mt-4 font-bold text-white">{h.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-300">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- Course grid ---------- */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900">
              {dict.academyLanding.gridTitle}
            </h2>
            <p className="mt-3 text-slate-500">{dict.academyLanding.gridSubtitle}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {courses.map((course) => {
              const Icon = courseIcons[course.key];
              return (
                <Link
                  key={course.slug}
                  href={L(`/academy/${course.slug}`)}
                  className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-card-hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                      {Icon && <Icon className="h-6 w-6" aria-hidden />}
                    </span>
                    <ArrowRight
                      className="h-5 w-5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-gold-500 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-5 font-bold leading-snug text-navy-900">{course.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{course.tagline}</p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
                      <Clock3 className="h-3.5 w-3.5 text-gold-500" aria-hidden />
                      {course.glance.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
                      <SignalHigh className="h-3.5 w-3.5 text-gold-500" aria-hidden />
                      {course.glance.level}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Certification banner + CTA ---------- */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-navy-950 p-10 text-center text-white lg:p-14">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-500 text-navy-950">
              <BadgeCheck className="h-7 w-7" aria-hidden />
            </span>
            <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight">
              {dict.academyLanding.ctaTitle}
            </h2>
            <p className="max-w-xl text-navy-200">{dict.academyLanding.ctaDesc}</p>
            <Link
              href={L("/consultation")}
              className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-4 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
            >
              {dict.academyLanding.ctaButton}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
