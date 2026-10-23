/* =========================================================================
   TurkeyBridge — Official contact information (single source of truth)
   Numbers, links, and handles are locale-independent; localized LABELS
   live in lib/dictionaries.ts.
   ========================================================================= */

export interface PhoneEntry {
  display: string;
  tel: string;
  whatsapp: string;
  telegram: string;
}

export interface InstagramEntry {
  key: "main" | "business";
  handle: string;
  url: string;
}

export const CONTACT = {
  email: "info@turkeybridge.com",
  address: "Maslak, Olive Plaza, Sarıyer, İstanbul, Turkey",
  instagrams: [
    { key: "main", handle: "@turkiye_bridge", url: "https://instagram.com/turkiye_bridge" },
    { key: "business", handle: "@turkey_bridge_business", url: "https://instagram.com/turkey_bridge_business" },
  ] as InstagramEntry[],
  phones: [
    {
      display: "+90 (553) 940-4699",
      tel: "tel:+905539404699",
      whatsapp: "https://wa.me/905539404699",
      telegram: "https://t.me/+905539404699",
    },
    {
      display: "+90 (507) 840-9306",
      tel: "tel:+905078409306",
      whatsapp: "https://wa.me/905078409306",
      telegram: "https://t.me/+905078409306",
    },
  ] as PhoneEntry[],
} as const;

/** Official Google Maps location — Olive Plaza, Maslak, Sarıyer */
export const MAPS_LINK = "https://maps.app.goo.gl/7D3LEKDKoaaQi1qi6";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.474668853761!2d29.0205562!3d41.1131707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5c3639d67e7%3A0xcba87dca16e6dcf9!2sOlive%20Plaza%2C%20Maslak%2C%20Sarıyer%2C%20İstanbul%2C%20Turkey!5e0!3m2!1sen!2str!4v1721134783077!5m2!1sen!2str";
