"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Globe, Menu, MessageCircle, Phone, X, ArrowRight, Sparkles } from "lucide-react";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n";
import { CONTACT } from "@/lib/contact";
import type { Dictionary } from "@/lib/dictionaries";
import { serviceIcons, courseIcons } from "@/components/icons";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

type MenuKey = "services" | "academy" | null;

export default function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);

  const L = (href: string) => `/${locale}${href}`;

  /** Swap the locale segment while preserving the current path. */
  const switchLocalePath = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  const isActive = (href: string) =>
    href === "" ? pathname === `/${locale}` : pathname.startsWith(`/${locale}${href}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null);
    setLangOpen(false);
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  const closeAll = () => {
    setOpenMenu(null);
    setLangOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-card" : ""
      }`}
      onMouseLeave={closeAll}
    >
      {/* ---------- Top utility bar ---------- */}
      <div className="bg-navy-950 text-navy-200 text-xs">
        <div className="container flex h-9 items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-gold-400" aria-hidden />
              <a href={CONTACT.phones[1].tel} className="hover:text-white transition-colors" dir="ltr">
                {CONTACT.phones[1].display}
              </a>
            </span>
            <a
              href={CONTACT.phones[1].whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 text-gold-400" aria-hidden />
              WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" aria-hidden />
            <span>{dict.brand.tagline}</span>
          </div>
        </div>
      </div>

      {/* ---------- Main navigation bar ---------- */}
      <div className="relative bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="container flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 shrink-0" onClick={closeAll}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-gold-400 font-bold text-lg shadow-card">
              TB
            </span>
            <span className="text-xl font-extrabold tracking-tight text-navy-900">
              Turkey<span className="text-gold-500">Bridge</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            <NavLink href={`/${locale}`} active={isActive("")} onClick={closeAll}>
              {dict.nav.home}
            </NavLink>

            {/* Services mega trigger */}
            <MegaTrigger
              label={dict.nav.services}
              open={openMenu === "services"}
              onEnter={() => {
                setOpenMenu("services");
                setLangOpen(false);
              }}
              onToggle={() => setOpenMenu(openMenu === "services" ? null : "services")}
            />

            {/* Academy mega trigger */}
            <MegaTrigger
              label={dict.nav.academy}
              open={openMenu === "academy"}
              onEnter={() => {
                setOpenMenu("academy");
                setLangOpen(false);
              }}
              onToggle={() => setOpenMenu(openMenu === "academy" ? null : "academy")}
            />

            <NavLink href={L("/about")} active={isActive("/about")} onClick={closeAll}>
              {dict.nav.about}
            </NavLink>
            <NavLink href={L("/contact")} active={isActive("/contact")} onClick={closeAll}>
              {dict.nav.contact}
            </NavLink>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative" onMouseEnter={() => setOpenMenu(null)}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-navy-800 hover:border-gold-400 hover:text-navy-950 transition-colors"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <Globe className="h-4 w-4 text-gold-500" aria-hidden />
                <span>{localeFlags[locale]}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {langOpen && (
                <ul
                  className="absolute end-0 top-full mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card-hover"
                  role="listbox"
                >
                  {locales.map((code) => (
                    <li key={code}>
                      <Link
                        href={switchLocalePath(code)}
                        onClick={() => setLangOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-navy-50 ${
                          code === locale ? "font-semibold text-navy-900 bg-gold-50" : "text-slate-600"
                        }`}
                        role="option"
                        aria-selected={code === locale}
                        dir={code === "fa" ? "rtl" : "ltr"}
                      >
                        <span>{localeNames[code]}</span>
                        <span className="text-xs text-slate-400">{localeFlags[code]}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* CTA */}
            <Link
              href={L("/consultation")}
              onClick={closeAll}
              className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gold-500 px-4 py-2.5 text-sm font-semibold text-navy-950 shadow-gold transition-all hover:bg-gold-400 hover:-translate-y-0.5"
            >
              {dict.nav.consultation}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-navy-900"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ---------- Desktop mega menus ---------- */}
        {openMenu === "services" && (
          <MegaPanel>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-2">
              {dict.nav.servicesMenu.map((item) => {
                const Icon = serviceIcons[item.key];
                return (
                  <Link
                    key={item.key}
                    href={L(item.href)}
                    onClick={closeAll}
                    className="group flex gap-4 rounded-xl p-4 transition-colors hover:bg-navy-50"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400 transition-transform group-hover:scale-105">
                      {Icon && <Icon className="h-5 w-5" aria-hidden />}
                    </span>
                    <span>
                      <span className="block font-semibold text-navy-900 group-hover:text-navy-950">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-sm text-slate-500 leading-snug">
                        {item.desc}
                      </span>
                    </span>
                  </Link>
                );
              })}
              <Link
                href={L("/services")}
                onClick={closeAll}
                className="group flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 p-4 font-semibold text-navy-700 transition-colors hover:border-gold-400 hover:text-navy-950"
              >
                {dict.nav.allServices}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden />
              </Link>
            </div>
          </MegaPanel>
        )}

        {openMenu === "academy" && (
          <MegaPanel>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
              {dict.nav.academyMenu.map((item) => {
                const Icon = courseIcons[item.key];
                return (
                  <Link
                    key={item.key}
                    href={L(item.href)}
                    onClick={closeAll}
                    className="group flex gap-3 rounded-xl p-3.5 transition-colors hover:bg-navy-50"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold-50 text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                      {Icon && <Icon className="h-5 w-5" aria-hidden />}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy-900 leading-snug">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-500 leading-snug">
                        {item.desc}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 border-t border-slate-100 pt-3">
              <Link
                href={L("/academy")}
                onClick={closeAll}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700"
              >
                {dict.nav.allCourses}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden />
              </Link>
            </div>
          </MegaPanel>
        )}
      </div>

      {/* ---------- Mobile menu ---------- */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white shadow-card max-h-[calc(100vh-7rem)] overflow-y-auto">
          <nav className="container py-4 space-y-1" aria-label="Mobile">
            <MobileLink href={`/${locale}`}>{dict.nav.home}</MobileLink>

            <MobileAccordion
              label={dict.nav.services}
              open={mobileSection === "services"}
              onToggle={() => setMobileSection(mobileSection === "services" ? null : "services")}
            >
              {dict.nav.servicesMenu.map((item) => (
                <MobileLink key={item.key} href={L(item.href)} sub>
                  {item.title}
                </MobileLink>
              ))}
            </MobileAccordion>

            <MobileAccordion
              label={dict.nav.academy}
              open={mobileSection === "academy"}
              onToggle={() => setMobileSection(mobileSection === "academy" ? null : "academy")}
            >
              {dict.nav.academyMenu.map((item) => (
                <MobileLink key={item.key} href={L(item.href)} sub>
                  {item.title}
                </MobileLink>
              ))}
            </MobileAccordion>

            <MobileLink href={L("/about")}>{dict.nav.about}</MobileLink>
            <MobileLink href={L("/contact")}>{dict.nav.contact}</MobileLink>

            <div className="pt-3">
              <Link
                href={L("/consultation")}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-4 py-3 font-semibold text-navy-950 shadow-gold"
              >
                {dict.nav.consultation}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ------------------------------ sub-components ------------------------------ */

function NavLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
        active ? "text-navy-950 bg-navy-50" : "text-slate-600 hover:text-navy-950 hover:bg-slate-50"
      }`}
    >
      {children}
    </Link>
  );
}

function MegaTrigger({
  label,
  open,
  onEnter,
  onToggle,
}: {
  label: string;
  open: boolean;
  onEnter: () => void;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onClick={onToggle}
      aria-expanded={open}
      className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
        open ? "text-navy-950 bg-navy-50" : "text-slate-600 hover:text-navy-950 hover:bg-slate-50"
      }`}
    >
      {label}
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180 text-gold-500" : ""}`}
        aria-hidden
      />
    </button>
  );
}

function MegaPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-x-0 top-full hidden lg:block border-b border-slate-200 bg-white shadow-card-hover animate-fade-in">
      <div className="container py-6">{children}</div>
    </div>
  );
}

function MobileLink({
  href,
  sub,
  children,
}: {
  href: string;
  sub?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-lg px-3 py-2.5 font-medium transition-colors hover:bg-navy-50 ${
        sub ? "ms-3 text-sm text-slate-600" : "text-navy-900"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-medium text-navy-900 hover:bg-navy-50"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180 text-gold-500" : ""}`}
          aria-hidden
        />
      </button>
      {open && <div className="space-y-0.5 pb-1">{children}</div>}
    </div>
  );
}
