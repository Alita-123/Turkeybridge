"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, Send, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

interface TradeQuoteFormProps {
  dict: Dictionary;
}

const inputClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-100";

export default function TradeQuoteForm({ dict }: TradeQuoteFormProps) {
  const t = dict.tradePage;
  const f = t.form;
  const shared = dict.contactPage;
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex h-full min-h-[28rem] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-card">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-gold-50 text-gold-600">
          <CheckCircle2 className="h-10 w-10" aria-hidden />
        </span>
        <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-navy-900">
          {shared.successTitle}
        </h3>
        <p className="mt-3 max-w-sm leading-relaxed text-slate-500">{shared.successDesc}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to your CRM / trade-desk endpoint
        setSubmitted(true);
      }}
      className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card"
    >
      <h3 className="text-2xl font-extrabold tracking-tight text-navy-900">{f.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.subtitle}</p>

      <div className="mt-7 space-y-5">
        {/* Name + Company */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="tq-name" className="block text-sm font-semibold text-navy-900">
              {shared.nameLabel}
            </label>
            <input
              id="tq-name"
              name="name"
              type="text"
              required
              placeholder={shared.namePlaceholder}
              className={`${inputClasses} mt-2`}
            />
          </div>
          <div>
            <label htmlFor="tq-company" className="block text-sm font-semibold text-navy-900">
              {f.companyLabel}
            </label>
            <input
              id="tq-company"
              name="company"
              type="text"
              required
              placeholder={f.companyPlaceholder}
              className={`${inputClasses} mt-2`}
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="tq-email" className="block text-sm font-semibold text-navy-900">
              {shared.emailLabel}
            </label>
            <input
              id="tq-email"
              name="email"
              type="email"
              required
              placeholder={shared.emailPlaceholder}
              className={`${inputClasses} mt-2`}
              dir="ltr"
            />
          </div>
          <div>
            <label htmlFor="tq-phone" className="block text-sm font-semibold text-navy-900">
              {shared.phoneLabel}
            </label>
            <input
              id="tq-phone"
              name="phone"
              type="tel"
              required
              placeholder={shared.phonePlaceholder}
              className={`${inputClasses} mt-2`}
              dir="ltr"
            />
          </div>
        </div>

        {/* Corridor + Cargo */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="tq-corridor" className="block text-sm font-semibold text-navy-900">
              {f.corridorLabel}
            </label>
            <div className="relative mt-2">
              <select
                id="tq-corridor"
                name="corridor"
                required
                defaultValue=""
                className={`${inputClasses} appearance-none pe-10`}
              >
                <option value="" disabled>
                  {f.corridorPlaceholder}
                </option>
                {t.corridors.map((corridor) => (
                  <option key={corridor.key} value={corridor.key}>
                    {corridor.title}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute end-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden
              />
            </div>
          </div>
          <div>
            <label htmlFor="tq-cargo" className="block text-sm font-semibold text-navy-900">
              {f.cargoLabel}
            </label>
            <input
              id="tq-cargo"
              name="cargo"
              type="text"
              required
              placeholder={f.cargoPlaceholder}
              className={`${inputClasses} mt-2`}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="tq-message" className="block text-sm font-semibold text-navy-900">
            {shared.messageLabel}
          </label>
          <textarea
            id="tq-message"
            name="message"
            required
            rows={4}
            placeholder={shared.messagePlaceholder}
            className={`${inputClasses} mt-2 resize-none`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-4 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
        >
          {f.submit}
          <Send className="h-5 w-5 rtl:-scale-x-100" aria-hidden />
        </button>

        <p className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="h-4 w-4 shrink-0 text-gold-500" aria-hidden />
          {shared.privacyNote}
        </p>
      </div>
    </form>
  );
}
