"use client";

import { useState } from "react";
import { Award, BadgeCheck, BookOpen, Check, Target, Users } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import type { CourseContent } from "@/lib/courses";

interface CourseTabsProps {
  dict: Dictionary;
  course: CourseContent;
}

type TabId = "overview" | "curriculum" | "certification";

export default function CourseTabs({ dict, course }: CourseTabsProps) {
  const ui = dict.coursePage;
  const [tab, setTab] = useState<TabId>("overview");
  const [openModule, setOpenModule] = useState(0);

  const tabs: { id: TabId; label: string; Icon: typeof Users }[] = [
    { id: "overview", label: ui.tabOverview, Icon: Users },
    { id: "curriculum", label: ui.tabCurriculum, Icon: BookOpen },
    { id: "certification", label: ui.tabCertification, Icon: Award },
  ];

  return (
    <div>
      {/* ---------- Tab bar ---------- */}
      <div
        role="tablist"
        aria-label={course.title}
        className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-2 shadow-card sm:flex-row"
      >
        {tabs.map(({ id, label, Icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all ${
              tab === id
                ? "bg-navy-900 text-white shadow-card"
                : "text-slate-500 hover:bg-slate-50 hover:text-navy-900"
            }`}
          >
            <Icon className={`h-4 w-4 ${tab === id ? "text-gold-400" : ""}`} aria-hidden />
            {label}
          </button>
        ))}
      </div>

      {/* ---------- Tab panels ---------- */}
      <div className="mt-8">
        {/* ===== Tab 1: Overview & Audience ===== */}
        {tab === "overview" && (
          <div role="tabpanel" className="animate-fade-in space-y-8">
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">{course.intro}</p>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-400">
                    <Users className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold text-navy-900">{ui.audienceTitle}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {course.audience.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-500 text-navy-950">
                    <Target className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold text-navy-900">{ui.outcomesTitle}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {course.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ===== Tab 2: Curriculum modules ===== */}
        {tab === "curriculum" && (
          <div role="tabpanel" className="animate-fade-in space-y-3">
            {course.modules.map((mod, i) => {
              const open = openModule === i;
              return (
                <div
                  key={mod.title}
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    open ? "border-gold-300 bg-white shadow-card" : "border-slate-100 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenModule(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-4 p-5 text-start"
                  >
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-extrabold transition-colors ${
                        open ? "bg-gold-500 text-navy-950" : "bg-navy-900 text-gold-400"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {ui.moduleWord} {i + 1}
                      </span>
                      <span className="block font-bold text-navy-900">{mod.title}</span>
                    </span>
                    <span
                      className={`text-2xl font-light text-slate-300 transition-transform ${open ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {open && (
                    <ul className="space-y-2.5 border-t border-slate-100 p-5 ps-[4.75rem]">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ===== Tab 3: Certification & validity ===== */}
        {tab === "certification" && (
          <div role="tabpanel" className="animate-fade-in space-y-8">
            <h3 className="max-w-2xl text-2xl font-extrabold tracking-tight text-navy-900">
              {ui.certTitle}
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              {ui.certPoints.map((point) => (
                <div key={point.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-50 text-gold-600">
                    <BadgeCheck className="h-5 w-5" aria-hidden />
                  </span>
                  <h4 className="mt-4 font-bold text-navy-900">{point.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{point.desc}</p>
                </div>
              ))}
            </div>

            {/* Credential card */}
            <div className="flex flex-col items-start gap-4 rounded-2xl bg-navy-950 p-8 text-white sm:flex-row sm:items-center">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold-500 text-navy-950">
                <Award className="h-7 w-7" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  {ui.credentialLabel}
                </p>
                <p className="mt-1 text-xl font-extrabold">{course.credential}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
