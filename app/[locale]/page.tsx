import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import Hero from "@/components/home/Hero";
import TrustSignals from "@/components/home/TrustSignals";
import ServicesGrid from "@/components/home/ServicesGrid";
import VipSection from "@/components/home/VipSection";
import AcademyTeaser from "@/components/home/AcademyTeaser";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <TrustSignals dict={dict} />
      <ServicesGrid locale={locale} dict={dict} />
      <VipSection locale={locale} dict={dict} />
      <AcademyTeaser locale={locale} dict={dict} />
      <ContactSection locale={locale} dict={dict} />
    </>
  );
}
