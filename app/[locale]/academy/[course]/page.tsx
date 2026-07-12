import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Languages,
  MessagesSquare,
  MonitorPlay,
  SignalHigh,
} from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getCourse, getAllCourses, courseSlugs } from "@/lib/courses";
import { courseIcons } from "@/components/icons";
import CourseTabs from "@/components/academy/CourseTabs";

export function generateStaticParams() {
  return courseSlugs.map((course) => ({ course }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; course: string };
}): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const course = getCourse(locale, params.course);
  return course ? { title: course.title, description: course.tagline } : {};
}

export default function CourseDetailPage({
  params,
}: {
  params: { locale: string; course: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const course = getCourse(locale, params.course);
  if (!course) notFound();

  const ui = dict.coursePage;
  const L = (href: string) => `/${locale}${href}`;
  const Icon = courseIcons[course.key];

  const glance = [
    { Icon: Clock3, label: ui.glanceDuration, value: course.glance.duration },
    { Icon: SignalHigh, label: ui.glanceLevel, value: course.glance.level },
    { Icon: MonitorPlay, label: ui.glanceFormat, value: course.glance.format },
    { Icon: Languages, label: ui.glanceLanguage, value: course.glance.language },
  ];

  const related = getAllCourses(locale).filter((c) => c.slug !== course.slug).slice(0, 4);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-white lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 45% at 85% 0%, rgba(201,162,39,0.15), transparent)",
          }}
        />
        <div className="container relative">
          <nav className="flex items-center gap-1.5 text-sm text-navy-300" aria-label="Breadcrumb">
            <Link href={L("/academy")} className="transition-colors hover:text-gold-400">
              {ui.breadcrumb}
            </Link>
            <ChevronRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
            <span className="line-clamp-1 font-medium text-white">{course.title}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="max-w-3xl">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-500 text-navy-950">
                {Icon && <Icon className="h-7 w-7" aria-hidden />}
              </span>
              <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>
              <p className="mt-3 text-lg font-medium text-gold-300">{course.tagline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={L("/consultation")}
                  className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
                >
                  {ui.enroll}
                  <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
                </Link>
                <Link
                  href={L("/contact")}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition-all hover:border-gold-400/60 hover:bg-white/10"
                >
                  <MessagesSquare className="h-5 w-5" aria-hidden />
                  {ui.ask}
                </Link>
              </div>
            </div>

            {/* At-a-glance card */}
            <dl className="grid w-full grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur lg:w-96">
              {glance.map(({ Icon: GIcon, label, value }) => (
                <div key={label}>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy-300">
                    <GIcon className="h-3.5 w-3.5 text-gold-400" aria-hidden />
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- Syllabus tabs ---------- */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="container">
          <CourseTabs dict={dict} course={course} />
        </div>
      </section>

      {/* ---------- Related courses ---------- */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-xl font-bold text-navy-900">{ui.relatedTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((c) => {
              const CIcon = courseIcons[c.key];
              return (
                <Link
                  key={c.slug}
                  href={L(`/academy/${c.slug}`)}
                  className="group flex items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition-all hover:-translate-y-0.5 hover:border-gold-300 hover:bg-white hover:shadow-card"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    {CIcon && <CIcon className="h-5 w-5" aria-hidden />}
                  </span>
                  <span className="text-sm font-semibold leading-snug text-navy-900">{c.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
