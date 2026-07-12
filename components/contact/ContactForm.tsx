"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, Send, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

interface ContactFormProps {
  dict: Dictionary;
}

const inputClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-100";

export default function ContactForm({ dict }: ContactFormProps) {
  const f = dict.contactPage;
  const [submitted, setSubmitted] = useState(false);

  /* Success state */
  if (submitted) {
    return (
      <div className="flex h-full min-h-[28rem] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-card">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-gold-50 text-gold-600">
          <CheckCircle2 className="h-10 w-10" aria-hidden />
        </span>
        <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-navy-900">
          {f.successTitle}
        </h3>
        <p className="mt-3 max-w-sm leading-relaxed text-slate-500">{f.successDesc}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to your CRM / backend endpoint
        setSubmitted(true);
      }}
      className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card"
    >
      <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">{f.formTitle}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.formSubtitle}</p>

      <div className="mt-7 space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="block text-sm font-semibold text-navy-900">
            {f.nameLabel}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder={f.namePlaceholder}
            className={`${inputClasses} mt-2`}
          />
        </div>

        {/* Email + Phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-email" className="block text-sm font-semibold text-navy-900">
              {f.emailLabel}
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              placeholder={f.emailPlaceholder}
              className={`${inputClasses} mt-2`}
              dir="ltr"
            />
          </div>
          <div>
            <label htmlFor="cf-phone" className="block text-sm font-semibold text-navy-900">
              {f.phoneLabel}
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              required
              placeholder={f.phonePlaceholder}
              className={`${inputClasses} mt-2`}
              dir="ltr"
            />
          </div>
        </div>

        {/* Service selection */}
        <div>
          <label htmlFor="cf-service" className="block text-sm font-semibold text-navy-900">
            {f.serviceLabel}
          </label>
          <div className="relative mt-2">
            <select
              id="cf-service"
              name="service"
              required
              defaultValue=""
              className={`${inputClasses} appearance-none pe-10`}
            >
              <option value="" disabled>
                {f.servicePlaceholder}
              </option>
              {dict.nav.servicesMenu.map((service) => (
                <option key={service.key} value={service.key}>
                  {service.title}
                </option>
              ))}
              <option value="academy">{f.academyOption}</option>
              <option value="other">{f.otherOption}</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute end-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" className="block text-sm font-semibold text-navy-900">
            {f.messageLabel}
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            placeholder={f.messagePlaceholder}
            className={`${inputClasses} mt-2 resize-none`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-4 font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
        >
          {f.submit}
          <Send className="h-5 w-5 rtl:-scale-x-100" aria-hidden />
        </button>

        <p className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="h-4 w-4 shrink-0 text-gold-500" aria-hidden />
          {f.privacyNote}
        </p>
      </div>
    </form>
  );
}
