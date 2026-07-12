import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { academyIcons, courseIcons } from "@/components/icons";

export default function AcademyTeaser({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const L = (href: string) => `/${locale}${href}`;

  return (
    <section className="bg-white py-20" id="academy">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Copy + highlights */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-700">
              <GraduationCap className="h-4 w-4 text-gold-500" aria-hidden />
              {dict.academy.badge}
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              {dict.academy.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-500">{dict.academy.subheading}</p>

            <ul className="mt-8 space-y-5">
              {dict.academy.highlights.map((h) => {
                const Icon = academyIcons[h.key];
                return (
                  <li key={h.key} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-50 text-gold-600">
                      {Icon && <Icon className="h-5 w-5" aria-hidden />}
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-900">{h.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{h.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Link
              href={L(dict.academy.href)}
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 font-semibold text-white transition-all hover:bg-navy-800 hover:-translate-y-0.5"
            >
              {dict.academy.cta}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
            </Link>
          </div>

          {/* Course chips */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {dict.academy.coursesLabel}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {dict.nav.academyMenu.map((course) => {
                const Icon = courseIcons[course.key];
                return (
                  <Link
                    key={course.key}
                    href={L(course.href)}
                    className="group flex items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:bg-white hover:shadow-card"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                      {Icon && <Icon className="h-5 w-5" aria-hidden />}
                    </span>
                    <span className="text-sm font-semibold leading-snug text-navy-900">
                      {course.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
