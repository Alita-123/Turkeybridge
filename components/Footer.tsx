import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Send, Linkedin, Instagram, Youtube } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { CONTACT } from "@/lib/contact";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const L = (href: string) => `/${locale}${href}`;
  const year = new Date().getFullYear();

  const socials = [
    { name: "Instagram — Main", href: CONTACT.instagrams[0].url, Icon: Instagram },
    { name: "Instagram — Business", href: CONTACT.instagrams[1].url, Icon: Instagram },
    { name: "WhatsApp", href: CONTACT.phones[1].whatsapp, Icon: MessageCircle },
    { name: "Telegram", href: CONTACT.phones[1].telegram, Icon: Send },
    { name: "LinkedIn", href: "https://linkedin.com/company/turkeybridge", Icon: Linkedin },
    { name: "YouTube", href: "https://youtube.com/@turkeybridge", Icon: Youtube },
  ];

  return (
    <footer className="bg-navy-950 text-navy-200">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="container flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-white">{dict.footer.newsletterTitle}</h3>
            <p className="mt-1.5 text-sm text-navy-300">{dict.footer.newsletterDesc}</p>
          </div>
          <form action="#" className="flex w-full max-w-md gap-2" aria-label="Newsletter">
            <label htmlFor="newsletter-email" className="sr-only">
              {dict.footer.emailPlaceholder}
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder={dict.footer.emailPlaceholder}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-navy-400 outline-none transition-colors focus:border-gold-400"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
            >
              {dict.footer.subscribe}
              <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
            </button>
          </form>
        </div>
      </div>

      {/* Main columns */}
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href={`/${locale}`} className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-gold-400 font-bold text-lg">
              TB
            </span>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Turkey<span className="text-gold-400">Bridge</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-navy-300">{dict.footer.about}</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
              <span>{dict.contact.address}</span>
            </li>
            {CONTACT.phones.map((p) => (
              <li key={p.display} className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                <a href={p.tel} className="hover:text-white transition-colors" dir="ltr">
                  {p.display}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                {CONTACT.email}
              </a>
            </li>
            {CONTACT.instagrams.map((ig) => (
              <li key={ig.handle} className="flex items-center gap-2.5">
                <Instagram className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                <a
                  href={ig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  dir="ltr"
                >
                  {ig.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <FooterColumn title={dict.footer.servicesTitle}>
          {dict.nav.servicesMenu.map((item) => (
            <FooterLink key={item.key} href={L(item.href)}>
              {item.title}
            </FooterLink>
          ))}
        </FooterColumn>

        {/* Academy */}
        <FooterColumn title={dict.footer.academyTitle}>
          {dict.nav.academyMenu.map((item) => (
            <FooterLink key={item.key} href={L(item.href)}>
              {item.title}
            </FooterLink>
          ))}
        </FooterColumn>

        {/* Company */}
        <FooterColumn title={dict.footer.companyTitle}>
          {dict.footer.companyLinks.map((item) => (
            <FooterLink key={item.key} href={L(item.href)}>
              {item.title}
            </FooterLink>
          ))}
        </FooterColumn>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-navy-400">
            © {year} {dict.brand.name}. {dict.footer.rights}
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-navy-300 transition-colors hover:bg-gold-500 hover:text-navy-950"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5 text-xs">
            <Link href={L("/privacy")} className="text-navy-400 hover:text-white transition-colors">
              {dict.footer.privacy}
            </Link>
            <Link href={L("/terms")} className="text-navy-400 hover:text-white transition-colors">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">{title}</h4>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-navy-300 transition-colors hover:text-white hover:underline underline-offset-4 decoration-gold-400"
      >
        {children}
      </Link>
    </li>
  );
}
