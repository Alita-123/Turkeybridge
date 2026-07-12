# TurkeyBridge — Corporate Website

Multi-lingual (FA/TR/EN) marketing site built with **Next.js 14 (App Router)**, **React 18**, **Tailwind CSS**, and **Lucide React**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en
```

## Architecture

```
middleware.ts                            # / → /en locale redirect
lib/i18n.ts                              # locale list, RTL/LTR direction helper
lib/dictionaries.ts                      # site-wide copy — FULLY translated EN/TR/FA
lib/services.ts                          # service detail content + registration wizard data (EN/TR/FA)
lib/courses.ts                           # 8 Academy course contents (EN/TR/FA)
app/[locale]/layout.tsx                  # root layout: <html lang dir>, fonts, Header/Footer
app/[locale]/page.tsx                    # Home page
app/[locale]/services/page.tsx           # Services index
app/[locale]/services/[service]/page.tsx # Business / Residency / Finance / Student detail pages
app/[locale]/services/company-registration/page.tsx  # interactive 5-step wizard
app/[locale]/academy/page.tsx            # Academy landing
app/[locale]/academy/[course]/page.tsx   # course pages with 3-tab syllabus system
app/[locale]/[...slug]/page.tsx          # catch-all for remaining routes (about, elite, consultation…)
components/Header.tsx                    # sticky nav, mega menus, language switcher, mobile menu
components/Footer.tsx                    # newsletter, sitemap columns, socials
components/home/*                        # Hero, TrustSignals, ServicesGrid, VipSection, AcademyTeaser, ContactSection
components/services/RegistrationWizard.tsx  # stepper + cost estimator + document checklist (client)
components/academy/CourseTabs.tsx        # Overview / Curriculum / Certification tabs (client)
components/icons.ts                      # icon maps (keeps content files serializable)
```

## i18n & RTL

- Routes are locale-prefixed: `/en`, `/tr`, `/fa/services/business`, …
- `fa` renders with `dir="rtl"` + the **Vazirmatn** font; `en`/`tr` use **Inter**.
- Layout uses Tailwind **logical utilities** (`ms-`, `me-`, `start-`, `end-`, `rtl:` variants) so it flips automatically.
- **All three languages are fully translated** across the home page, navigation, footer, service pages, wizard, and Academy. To edit copy: `lib/dictionaries.ts` (site-wide), `lib/services.ts` (service details), `lib/courses.ts` (courses).

## Design system (tailwind.config.ts)

- `navy-*` Deep Corporate Navy · `gold-*` Premium Gold (VIP/CTAs) · slate/white surfaces
- Shadows `shadow-card` / `shadow-card-hover` / `shadow-gold`; `animate-fade-up*` micro-interactions

## Next steps

1. Build dedicated pages for the remaining catch-all routes: `/about`, `/elite`, `/consultation`, `/contact`, `/careers`, `/faq`.
2. Replace the hero media and map placeholders with a real video and Google Maps embed.
3. Wire the newsletter and consultation forms to your backend/CRM.
4. Review the indicative USD figures in `REGISTRATION_COSTS` (`lib/services.ts`) against your current pricing.
