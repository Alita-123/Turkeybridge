"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Building2,
  CalendarClock,
  Check,
  FileCheck2,
  Landmark,
  Minus,
  Plus,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { REGISTRATION_COSTS, type RegistrationContent } from "@/lib/services";

interface WizardProps {
  locale: Locale;
  dict: Dictionary;
  content: RegistrationContent;
}

type Entity = "llc" | "jsc";

const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function RegistrationWizard({ locale, dict, content }: WizardProps) {
  const ui = dict.wizard;
  const [active, setActive] = useState(0);

  /* ---- Cost estimator state ---- */
  const [entity, setEntity] = useState<Entity>("llc");
  const [shareholders, setShareholders] = useState(1);
  const [addons, setAddons] = useState<Record<string, boolean>>({
    permit: false,
    accounting: false,
    office: false,
  });

  /* ---- Checklist state ---- */
  const [checked, setChecked] = useState<boolean[]>(() => content.checklist.map(() => false));
  const readyCount = checked.filter(Boolean).length;

  const officialTotal = REGISTRATION_COSTS.officialPerStep.reduce((a, b) => a + b, 0);
  const total = useMemo(() => {
    let sum = REGISTRATION_COSTS.serviceFee[entity] + officialTotal;
    sum += (shareholders - 1) * REGISTRATION_COSTS.extraShareholder;
    if (addons.permit) sum += REGISTRATION_COSTS.addons.permit;
    if (addons.accounting) sum += REGISTRATION_COSTS.addons.accounting;
    if (addons.office) sum += REGISTRATION_COSTS.addons.office;
    return sum;
  }, [entity, shareholders, addons, officialTotal]);

  const step = content.steps[active];
  const stepCost = REGISTRATION_COSTS.officialPerStep[active];

  const addonRows: { key: keyof typeof REGISTRATION_COSTS.addons; label: string }[] = [
    { key: "permit", label: ui.addonPermit },
    { key: "accounting", label: ui.addonAccounting },
    { key: "office", label: ui.addonOffice },
  ];

  return (
    <div className="space-y-16">
      {/* ============ Interactive step wizard ============ */}
      <div>
        {/* Stepper rail */}
        <ol className="flex items-start justify-between gap-1">
          {content.steps.map((s, i) => {
            const done = i < active;
            const current = i === active;
            return (
              <li key={s.title} className="flex flex-1 flex-col items-center text-center">
                <div className="flex w-full items-center">
                  <span
                    className={`h-0.5 flex-1 ${i === 0 ? "opacity-0" : ""} ${
                      i <= active ? "bg-gold-500" : "bg-slate-200"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={current ? "step" : undefined}
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 text-sm font-extrabold transition-all ${
                      current
                        ? "border-gold-500 bg-gold-500 text-navy-950 shadow-gold scale-110"
                        : done
                          ? "border-gold-500 bg-white text-gold-600"
                          : "border-slate-200 bg-white text-slate-400 hover:border-gold-300"
                    }`}
                  >
                    {done ? <Check className="h-5 w-5" aria-hidden /> : i + 1}
                  </button>
                  <span
                    className={`h-0.5 flex-1 ${i === content.steps.length - 1 ? "opacity-0" : ""} ${
                      i < active ? "bg-gold-500" : "bg-slate-200"
                    }`}
                  />
                </div>
                <span
                  className={`mt-3 hidden max-w-[9rem] text-xs font-semibold leading-snug md:block ${
                    current ? "text-navy-950" : "text-slate-400"
                  }`}
                >
                  {s.title}
                </span>
              </li>
            );
          })}
        </ol>

        {/* Active step card */}
        <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-8 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            {ui.stepWord} {active + 1} {ui.ofWord} {content.steps.length}
          </p>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-900">{step.title}</h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-500">{step.desc}</p>

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <CalendarClock className="h-4 w-4 text-gold-500" aria-hidden />
                {ui.durationLabel}
              </div>
              <p className="mt-2 text-lg font-extrabold text-navy-900">{step.duration}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <Banknote className="h-4 w-4 text-gold-500" aria-hidden />
                {ui.costLabel}
              </div>
              <p className="mt-2 text-lg font-extrabold text-navy-900">{fmt(stepCost)}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-5 md:row-span-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <FileCheck2 className="h-4 w-4 text-gold-500" aria-hidden />
                {ui.docsLabel}
              </div>
              <ul className="mt-2 space-y-1.5">
                {step.documents.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              disabled={active === 0}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-400 disabled:opacity-40 disabled:hover:border-slate-200"
            >
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden />
              {ui.prev}
            </button>
            {active < content.steps.length - 1 ? (
              <button
                type="button"
                onClick={() => setActive((a) => Math.min(content.steps.length - 1, a + 1))}
                className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                {ui.next}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
              </button>
            ) : (
              <Link
                href={`/${locale}/consultation`}
                className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400"
              >
                {ui.cta}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ============ Cost estimator + Checklist ============ */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* ---- Cost estimator ---- */}
        <div className="rounded-2xl bg-navy-950 p-8 text-white">
          <h3 className="text-2xl font-extrabold tracking-tight">{ui.estimatorTitle}</h3>
          <p className="mt-2 text-sm text-navy-300">{ui.estimatorSubtitle}</p>

          {/* Entity type */}
          <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-navy-300">{ui.entityLabel}</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {(
              [
                { id: "llc" as Entity, label: ui.llc, note: ui.llcNote, Icon: Building2 },
                { id: "jsc" as Entity, label: ui.jsc, note: ui.jscNote, Icon: Landmark },
              ]
            ).map(({ id, label, note, Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setEntity(id)}
                aria-pressed={entity === id}
                className={`rounded-xl border p-4 text-start transition-all ${
                  entity === id
                    ? "border-gold-500 bg-gold-500/10"
                    : "border-white/15 bg-white/5 hover:border-white/30"
                }`}
              >
                <Icon className={`h-5 w-5 ${entity === id ? "text-gold-400" : "text-navy-300"}`} aria-hidden />
                <p className="mt-2 text-sm font-bold">{label}</p>
                <p className="mt-0.5 text-xs text-navy-300">{note}</p>
              </button>
            ))}
          </div>

          {/* Shareholders */}
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-navy-300">
            {ui.shareholdersLabel}
          </p>
          <div className="mt-3 inline-flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5">
            <button
              type="button"
              onClick={() => setShareholders((s) => Math.max(1, s - 1))}
              className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-gold-500 hover:text-navy-950"
              aria-label="decrease"
            >
              <Minus className="h-4 w-4" aria-hidden />
            </button>
            <span className="w-8 text-center text-xl font-extrabold text-gold-400">{shareholders}</span>
            <button
              type="button"
              onClick={() => setShareholders((s) => Math.min(10, s + 1))}
              className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-gold-500 hover:text-navy-950"
              aria-label="increase"
            >
              <Plus className="h-4 w-4" aria-hidden />
            </button>
          </div>

          {/* Add-ons */}
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-navy-300">{ui.addonsLabel}</p>
          <div className="mt-3 space-y-2.5">
            {addonRows.map(({ key, label }) => (
              <label
                key={key}
                className={`flex cursor-pointer items-center justify-between rounded-xl border p-3.5 transition-all ${
                  addons[key]
                    ? "border-gold-500 bg-gold-500/10"
                    : "border-white/15 bg-white/5 hover:border-white/30"
                }`}
              >
                <span className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={addons[key]}
                    onChange={() => setAddons((a) => ({ ...a, [key]: !a[key] }))}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={`grid h-5 w-5 place-items-center rounded border ${
                      addons[key] ? "border-gold-500 bg-gold-500 text-navy-950" : "border-white/30"
                    }`}
                  >
                    {addons[key] && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </span>
                <span className="text-sm font-bold text-gold-400" dir="ltr">
                  +{fmt(REGISTRATION_COSTS.addons[key])}
                </span>
              </label>
            ))}
          </div>

          {/* Totals */}
          <dl className="mt-7 space-y-2 border-t border-white/10 pt-5 text-sm">
            <div className="flex justify-between text-navy-200">
              <dt>{ui.serviceFee}</dt>
              <dd dir="ltr">{fmt(REGISTRATION_COSTS.serviceFee[entity])}</dd>
            </div>
            <div className="flex justify-between text-navy-200">
              <dt>{ui.officialFees}</dt>
              <dd dir="ltr">{fmt(officialTotal)}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-3">
              <dt className="text-base font-bold">{ui.totalLabel}</dt>
              <dd className="text-3xl font-extrabold text-gold-400" dir="ltr">
                {fmt(total)}
              </dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-navy-400">{ui.totalNote}</p>
        </div>

        {/* ---- Master checklist ---- */}
        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-navy-900">{ui.checklistTitle}</h3>
              <p className="mt-2 text-sm text-slate-500">{ui.checklistSubtitle}</p>
            </div>
            <span className="shrink-0 rounded-full bg-navy-50 px-3.5 py-1.5 text-sm font-bold text-navy-900">
              {readyCount}/{content.checklist.length} {ui.readyLabel}
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar"
            aria-valuenow={readyCount} aria-valuemin={0} aria-valuemax={content.checklist.length}>
            <div
              className="h-full rounded-full bg-gold-500 transition-all duration-500"
              style={{ width: `${(readyCount / content.checklist.length) * 100}%` }}
            />
          </div>

          <ul className="mt-6 space-y-2">
            {content.checklist.map((item, i) => (
              <li key={item}>
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition-all ${
                    checked[i]
                      ? "border-gold-300 bg-gold-50"
                      : "border-slate-100 bg-slate-50/60 hover:border-gold-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked[i]}
                    onChange={() =>
                      setChecked((c) => c.map((v, idx) => (idx === i ? !v : v)))
                    }
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={`grid h-5 w-5 shrink-0 place-items-center rounded border transition-colors ${
                      checked[i] ? "border-gold-500 bg-gold-500 text-white" : "border-slate-300 bg-white"
                    }`}
                  >
                    {checked[i] && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      checked[i] ? "text-navy-900 line-through decoration-gold-500/60" : "text-navy-900"
                    }`}
                  >
                    {item}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
