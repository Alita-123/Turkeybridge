"use client";

import { useState } from "react";
import { CalendarCheck, CheckCircle2, ChevronDown, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

interface ConsultationFormProps {
  dict: Dictionary;
}

const inputClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-100";

export default function ConsultationForm({ dict }: ConsultationFormProps) {
  const k = dict.consultationPage;
  const shared = dict.contactPage;
  const [submitted, setSubmitted] = useState(false);

  /* ---- Success state ---- */
  if (submitted) {
    return (
      <div className="flex h-full min-h-[30rem] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-card">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-gold-50 text-gold-600">
          <CheckCircle2 className="h-10 w-10" aria-hidden />
        </span>
        <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-navy-900">
          {k.successTitle}
        </h3>
        <p className="mt-3 max-w-sm leading-relaxed text-slate-500">{k.successDesc}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to your CRM / booking endpoint
        setSubmitted(true);
      }}
      className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card"
    >
      <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">{k.formTitle}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{k.formSubtitle}</p>

      <div className="mt-7 space-y-5">
        {/* Full name */}
        <div>
          <label htmlFor="cs-name" className="block text-sm font-semibold text-navy-900">
            {shared.nameLabel}
          </label>
          <input
            id="cs-name"
            name="name"
            type="text"
            required
            placeholder={shared.namePlaceholder}
            className={`${inputClasses} mt-2`}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cs-email" className="block text-sm font-semibold text-navy-900">
            {shared.emailLabel}
          </label>
          <input
            id="cs-email"
            name="email"
            type="email"
            required
            placeholder={shared.emailPlaceholder}
            className={`${inputClasses} mt-2`}
            dir="ltr"
          />
        </div>

        {/* Phone / WhatsApp with country-code helper */}
        <div>
          <label htmlFor="cs-phone" className="block text-sm font-semibold text-navy-900">
            {shared.phoneLabel}
          </label>
          <input
            id="cs-phone"
            name="phone"
            type="tel"
            required
            placeholder={shared.phonePlaceholder}
            className={`${inputClasses} mt-2`}
            dir="ltr"
            aria-describedby="cs-phone-hint"
          />
          <p id="cs-phone-hint" className="mt-1.5 text-xs text-slate-400">
            {k.phoneHint}
          </p>
        </div>

        {/* Service / interest category */}
        <div>
          <label htmlFor="cs-service" className="block text-sm font-semibold text-navy-900">
            {shared.serviceLabel}
          </label>
          <div className="relative mt-2">
            <select
              id="cs-service"
              name="service"
              required
              defaultValue=""
              className={`${inputClasses} appearance-none pe-10`}
            >
              <option value="" disabled>
                {shared.servicePlaceholder}
              </option>
              {k.serviceOptions.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute end-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden
            />
          </div>
        </div>

        {/* Message / requirements */}
        <div>
          <label htmlFor="cs-message" className="block text-sm font-semibold text-navy-900">
            {shared.messageLabel}
          </label>
          <textarea
            id="cs-message"
            name="message"
            required
            rows={4}
            placeholder={shared.messagePlaceholder}
            className={`${inputClasses} mt-2 resize-none`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-4 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden />
          {k.submit}
        </button>

        <p className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="h-4 w-4 shrink-0 text-gold-500" aria-hidden />
          {shared.privacyNote}
        </p>
      </div>
    </form>
  );
}
