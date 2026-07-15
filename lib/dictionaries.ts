import type { Locale } from "./i18n";

/* =========================================================================
   TurkeyBridge — Content Dictionaries
   Fully localized: English (master), Turkish, and Persian.
   Detail-page CONTENT (services, courses) lives in lib/services.ts and
   lib/courses.ts — this file holds site-wide copy and shared UI labels.
   ========================================================================= */

export interface MenuItem {
  key: string;
  title: string;
  desc?: string;
  href: string;
}

/* ============================== ENGLISH ============================== */

const en = {
  brand: {
    name: "TurkeyBridge",
    tagline: "Empowering your journey in Turkey and beyond.",
  },

  nav: {
    home: "Home",
    services: "Services",
    academy: "Academy",
    about: "About Us",
    contact: "Contact",
    consultation: "Get a Consultation",
    allCourses: "View All Courses",
    allServices: "Explore All Services",
    servicesMenu: [
      { key: "business", title: "Business & Management Consulting", desc: "Market entry, strategy, and operational excellence for companies scaling into Turkey.", href: "/services/business" },
      { key: "residency", title: "Residency & Immigration", desc: "Residence permits, citizenship by investment, and full relocation support.", href: "/services/residency" },
      { key: "finance", title: "Financial & Tax Consulting", desc: "Tax optimization, accounting, banking, and cross-border wealth structuring.", href: "/services/finance" },
      { key: "student", title: "Student Consulting & Admissions", desc: "University placement, scholarships, and student visa guidance end-to-end.", href: "/services/student" },
      { key: "company", title: "Company Registration", desc: "A guided, step-by-step workflow to incorporate your Turkish company.", href: "/services/company-registration" },
      { key: "trade", title: "Trade Services", desc: "Cross-border freight, customs, import/export, and B2B commodity sourcing.", href: "/services/trade-services" },
    ] as MenuItem[],
    academyMenu: [
      { key: "ai", title: "Artificial Intelligence", desc: "AI automation, engineering & SEO", href: "/academy/artificial-intelligence" },
      { key: "software", title: "Software Development", desc: "Modern coding, from zero to production", href: "/academy/software-development" },
      { key: "web", title: "Website Creation & Architecture", desc: "Design, build & ship real websites", href: "/academy/website-creation" },
      { key: "marketing", title: "Digital Marketing & Growth", desc: "Growth hacking that moves the numbers", href: "/academy/digital-marketing" },
      { key: "videography", title: "Videography & Photography", desc: "Professional camera craft & lighting", href: "/academy/videography" },
      { key: "editing", title: "Video Editing & Post-Production", desc: "Cut, grade, and finish like a pro", href: "/academy/video-editing" },
      { key: "social", title: "Social Media Strategy", desc: "Build audiences and manage brands", href: "/academy/social-media" },
      { key: "turkish", title: "Turkish Language (İstanbul Türkçesi)", desc: "For business & daily life — taught by a native instructor fluent in Persian", href: "/academy/turkish-language" },
    ] as MenuItem[],
  },

  hero: {
    badge: "Trusted in Istanbul since day one — Maslak, İstanbul",
    title1: "Empowering your journey in",
    titleHighlight: "Turkey",
    title2: "and beyond.",
    subtitle:
      "Affordable solutions for individuals, elite strategies for enterprises. From your first residence permit to your company's heavy-industry expansion — one bridge carries you across.",
    ctaPrimary: "Explore Services",
    ctaSecondary: "Join Academy",
    videoLabel: "Watch our story",
    stats: [
      { value: "40k+", label: "Community Members" },
      { value: "5+", label: "Years of Experience" },
      { value: "24/7", label: "VIP Support" },
      { value: "3", label: "Languages, One Team" },
    ],
  },

  trust: {
    heading: "Why clients cross the bridge with us",
    subheading:
      "Every engagement — from a single student visa to a nine-figure market entry — is backed by the same standards of rigor, transparency, and care.",
    items: [
      { key: "certified", title: "Internationally Certified", desc: "Accredited processes and internationally recognized certifications across our consulting and training divisions." },
      { key: "support", title: "24/7 Support", desc: "Round-the-clock assistance in Persian, Turkish, and English — because deadlines and emergencies don't keep office hours." },
      { key: "legal", title: "Expert Legal Team", desc: "Top-tier Turkish lawyers and sworn advisors reviewing every filing, contract, and application before it leaves our office." },
      { key: "multilingual", title: "Truly Multilingual", desc: "Native-level advisors in all three languages, so nothing is ever lost in translation — legally or culturally." },
    ],
  },

  services: {
    heading: "Services built for every stage of your journey",
    subheading:
      "Flexible entry points for every budget — from streamlined self-service packages to fully managed, white-glove engagements.",
    learnMore: "Learn more",
    items: [
      {
        key: "business",
        title: "Business & Management Consulting",
        desc: "Market-entry strategy, feasibility studies, partner due diligence, and operational restructuring for companies entering or scaling in the Turkish market.",
        href: "/services/business",
        features: ["Market entry & feasibility analysis", "Partner & supplier due diligence", "Operational strategy & restructuring"],
      },
      {
        key: "residency",
        title: "Residency & Immigration Consulting",
        desc: "Complete guidance through Turkish residence permits, citizenship by investment, work permits, and family reunification — handled start to finish.",
        href: "/services/residency",
        features: ["Short & long-term residence permits", "Citizenship by investment programs", "Work permits & family reunification"],
      },
      {
        key: "finance",
        title: "Financial & Tax Consulting",
        desc: "Turkish tax planning, bookkeeping, banking setup, and cross-border wealth structuring designed by licensed financial advisors.",
        href: "/services/finance",
        features: ["Corporate & personal tax planning", "Bank account setup & compliance", "Cross-border wealth structuring"],
      },
      {
        key: "student",
        title: "Student Consulting & University Admissions",
        desc: "From choosing the right Turkish university to scholarship applications, YÖS preparation, student visas, and settling into campus life.",
        href: "/services/student",
        features: ["University selection & applications", "Scholarship & exam preparation", "Student visas & arrival support"],
      },
      {
        key: "company",
        title: "Company Registration",
        desc: "An interactive, step-by-step incorporation workflow: entity selection, notarization, tax registration, bank accounts, and your first invoice.",
        href: "/services/company-registration",
        features: ["LLC & JSC entity formation", "Notary, tax & chamber registration", "Corporate banking & accounting setup"],
      },
      {
        key: "trade",
        title: "Trade Services",
        desc: "International freight, customs brokerage, import/export operations, and strategic B2B sourcing across the Turkey–Iran–Worldwide corridors.",
        href: "/services/trade-services",
        features: ["Cross-border freight & logistics", "End-to-end customs & import/export", "B2B commodity & product sourcing"],
      },
    ],
    ctaCard: {
      title: "Not sure where to start?",
      desc: "Book a free discovery call and we'll map the exact path — and budget — for your situation.",
      cta: "Get a Free Consultation",
      href: "/consultation",
    },
  },

  vip: {
    badge: "TurkeyBridge Elite",
    heading: "Elite strategies for enterprises and high-net-worth individuals",
    subheading:
      "When the stakes are measured in millions, you need more than advice — you need a standing team. TurkeyBridge Elite pairs you with dedicated senior counsel across law, finance, and industry.",
    points: [
      { key: "lawyers", title: "Top-Tier Turkish Lawyers", desc: "Dedicated senior attorneys for M&A, real estate, litigation, and regulatory affairs." },
      { key: "finance", title: "Private Financial Advisory", desc: "Licensed advisors structuring investments, holdings, and cross-border capital flows." },
      { key: "industry", title: "Heavy Industry Expertise", desc: "Site selection, licensing, and government relations for manufacturing and energy projects." },
      { key: "vip", title: "24/7 VIP Concierge", desc: "A single point of contact, reachable around the clock, in your language." },
    ],
    cta: "Request Elite Access",
    href: "/elite",
  },

  academy: {
    badge: "TurkeyBridge Academy",
    heading: "Learn the skills. Earn the certificate. Own your future.",
    subheading:
      "Our professional training division delivers career-grade courses with internationally verifiable certificates of completion — taught live, in your language.",
    highlights: [
      { key: "certificate", title: "International Certification", desc: "Every course ends with a verifiable certificate and course-completion validation recognized internationally." },
      { key: "instructor", title: "Native Turkish Instructor, Fluent in Persian", desc: "Our Turkish Language program is led by a native İstanbul-Turkish instructor who teaches fluently in Persian." },
      { key: "practical", title: "Career-First Curriculum", desc: "Project-based learning designed around what employers and clients actually pay for." },
    ],
    coursesLabel: "Available Courses",
    cta: "Explore the Academy",
    href: "/academy",
  },

  contact: {
    heading: "Visit us in the heart of Istanbul",
    subheading:
      "Our office is at Olive Plaza in Maslak — the heart of Istanbul's business district. Walk in, call, or message us on WhatsApp or Telegram.",
    addressLabel: "Office",
    address: "Maslak, Olive Plaza, Sarıyer, İstanbul, Turkey",
    phoneLabel: "Phone / WhatsApp / Telegram",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    emailLabel: "Email",
    email: "info@turkeybridge.com",
    instagramLabel: "Instagram",
    instagramMain: "Instagram (Main)",
    instagramBusiness: "Instagram (Business)",
    hoursLabel: "Hours",
    hours: "Mon–Sat, 09:00 – 19:00 (VIP: 24/7)",
    mapLabel: "Interactive Map — Maslak, Istanbul",
    mapHint: "Google Maps embed placeholder",
    cta: "Book Your Visit",
    href: "/contact",
  },

  footer: {
    about:
      "TurkeyBridge is a full-service consulting and training firm based at Olive Plaza, Maslak, Istanbul — bridging individuals, students, and enterprises to opportunity in Turkey and beyond.",
    newsletterTitle: "Stay ahead of the market",
    newsletterDesc: "Monthly insights on Turkish residency, business, and investment — no spam, ever.",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    servicesTitle: "Services",
    academyTitle: "Academy",
    companyTitle: "Company",
    companyLinks: [
      { key: "about", title: "About Us", href: "/about" },
      { key: "contact", title: "Contact", href: "/contact" },
    ] as MenuItem[],
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },

  misc: {
    underConstructionTitle: "This page is on its way",
    underConstructionDesc:
      "We're crafting comprehensive content for this section. In the meantime, our advisors are one click away.",
    backHome: "Back to Home",
  },

  aboutPage: {
    badge: "About TurkeyBridge",
    heading: "A solid bridge between you and success in Turkey",
    subheading:
      "TurkeyBridge, in collaboration with top native Turkish experts, builds a solid bridge between you and success in Turkey. Our core value is built upon 5 years of honest service delivery and verified success within Turkey.",
    stats: [
      { value: "5+", label: "Years of Honest Service" },
      { value: "7", label: "Countries of Business Experience" },
      { value: "3", label: "Languages, One Team" },
      { value: "24/7", label: "Client Support" },
    ],
    visionTitle: "Our Vision",
    visionText:
      "Success in a new country is never an accident — it is engineered. We pair top native Turkish experts with advisors who speak your language and understand your world, so every permit, company, investment, and career we touch stands on verified local expertise and five years of honest, documented results.",
    leadershipTitle: "Leadership & Management",
    leadershipSubtitle: "Two founders, one standard: every client file is handled at director level.",
    leaders: [
      {
        key: "ali",
        name: "Ali Omer Tortuk",
        initials: "AT",
        role: "Co-Founder & Director",
        points: [
          "Expert in Political Science and Middle Eastern Studies, with a focus on Iranian Studies",
          "Specialist in İstanbul Turkish language and Persian literature",
          "Native command of both worlds — bridging Turkish institutions and Persian-speaking clients",
        ],
      },
      {
        key: "mohsen",
        name: "Mohsen Kabiri",
        initials: "MK",
        role: "Co-Founder & Director",
        points: [
          "Graduate in Business Management and International Economics",
          "Specialist in IT, Artificial Intelligence (AI), and Digital Marketing",
          "8 years of launching startups and managing businesses across 7 countries worldwide",
        ],
      },
    ],
    teamsTitle: "Our Specialized Teams",
    teamsSubtitle:
      "TurkeyBridge leads and manages multiple highly specialized teams, so every file lands on the desk of the exact expert it needs — from individual permits to enterprise-level operations and VIP clients.",
    teams: [
      { key: "legal", title: "Top-Tier Corporate Lawyers", desc: "Senior Turkish attorneys actively handling contracts, M&A, real estate, and regulatory affairs for enterprise-level operations." },
      { key: "finance", title: "Sworn Financial Advisors (Mali Müşavir)", desc: "Licensed sworn advisors managing tax, accounting, and audit-grade compliance for companies and private clients." },
      { key: "consulting", title: "Elite Business Consultants", desc: "Senior consultants who run enterprise engagements and VIP client portfolios end to end — from strategy through execution." },
    ],
    ctaTitle: "Let's build your bridge",
    ctaDesc:
      "Tell us where you want to be in Turkey — we'll bring the experts, the plan, and the honest advice to get you there.",
    reachUs: "Reach us instantly",
  },

  contactPage: {
    badge: "Contact",
    heading: "Let's talk about your journey",
    subheading:
      "Call, message, or walk in — our advisors respond within one business hour, in Persian, Turkish, or English.",
    channelsTitle: "Direct channels",
    callAction: "Call",
    formTitle: "Request a free consultation",
    formSubtitle: "Tell us what you need — we'll reply within 24 hours with a concrete next step.",
    nameLabel: "Full name",
    namePlaceholder: "e.g., Sara Ahmadi",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Phone / WhatsApp",
    phonePlaceholder: "+90 5xx xxx xx xx",
    serviceLabel: "Service of interest",
    servicePlaceholder: "Select a service…",
    academyOption: "TurkeyBridge Academy (courses)",
    otherOption: "Other / General inquiry",
    messageLabel: "Your message",
    messagePlaceholder: "Briefly describe your situation and goals…",
    submit: "Send Request",
    privacyNote: "Your information stays confidential — we never share client data.",
    successTitle: "Request received!",
    successDesc: "Thank you — an advisor will contact you within 24 hours.",
    mapTitle: "Olive Plaza, Maslak, Sarıyer",
    mapSubtitle: "Interactive map placeholder — Google Maps embed goes here.",
  },

  tradePage: {
    badge: "TurkeyBridge Trade",
    heading: "Trade Services",
    tagline: "Cross-border trade, engineered end to end.",
    intro:
      "From a factory gate in Istanbul to a warehouse in Tehran or a port on the other side of the world — we run the entire trade operation: sourcing, contracts, customs, freight, and settlement. One accountable desk, three corridors, zero guesswork.",
    ctaQuote: "Request a Trade Quote",
    corridorsTitle: "Three corridors, one operations desk",
    corridorsSubtitle:
      "We maintain active carrier networks, customs partners, and banking channels across every corridor we serve — so your cargo moves on schedule and your paperwork clears the first time.",
    corridors: [
      {
        key: "tr-ir",
        title: "Turkey ↔ Iran",
        desc: "The corridor we know street by street. Land, rail, and combined transport with full documentation in Turkish and Persian on both sides of the border.",
        points: ["Land & rail freight via Gürbulak–Bazargan and Kapıköy–Razi", "Bilingual customs documentation on both sides", "Sanctions-aware compliance and payment structuring"],
      },
      {
        key: "tr-world",
        title: "Turkey ↔ Worldwide",
        desc: "Export Turkish goods to global markets or import worldwide supply into Turkey — sea, air, and road freight with door-to-door management.",
        points: ["FCL/LCL sea freight from Turkish ports", "Air cargo via Istanbul's global hub", "Export incentives and duty optimization"],
      },
      {
        key: "ir-world",
        title: "Iran ↔ Worldwide",
        desc: "Facilitated trade between Iranian buyers and sellers and global markets through compliant transit, re-export, and intermediary structures via Turkey.",
        points: ["Transit and re-export structures via Turkey", "Third-party contracting and escrow mechanics", "End-to-end documentation and inspection"],
      },
    ],
    deliverablesTitle: "Core deliverables",
    deliverablesSubtitle: "Every engagement is scoped around three operational pillars — commissioned separately or as one managed pipeline.",
    deliverables: [
      { key: "freight", title: "Cross-Border Freight & Logistics", desc: "Multi-modal transport planning — road, rail, sea, and air — with carrier selection, cargo insurance, real-time tracking, and delivery-time guarantees written into the contract." },
      { key: "customs", title: "Customs Brokerage & Import/Export Operations", desc: "Licensed customs partners handle HS classification, declarations, inspections, and duty payments, while our desk manages licenses, certificates of origin, and standards compliance end to end." },
      { key: "sourcing", title: "Strategic Commodity & Product Sourcing", desc: "We locate, vet, and negotiate with manufacturers and suppliers — from raw commodities to finished goods — with factory audits, sample control, and price benchmarking before you commit." },
    ],
    b2bBadge: "B2B Trading Desk",
    b2bTitle: "Built for business-to-business trade",
    b2bDesc:
      "Our specialty is not parcels — it's contracts. We represent enterprises on both sides of the table, structuring bulk trade agreements that survive audits, border crossings, and currency swings.",
    b2bPoints: [
      { key: "consulting", title: "Executive Corporate Consulting", desc: "Senior advisors structure your trade strategy: market selection, pricing, Incoterms, and risk allocation." },
      { key: "contracts", title: "Bulk Trade Contract Facilitation", desc: "Drafting and negotiating enterprise supply agreements with vetted counterparties and enforceable terms." },
      { key: "compliance", title: "Compliance & Risk Management", desc: "Sanctions screening, letters of credit, inspection regimes, and insurance — engineered before goods move." },
      { key: "network", title: "Vetted Enterprise Network", desc: "Direct access to manufacturers, wholesalers, and logistics operators across our three corridors." },
    ],
    flowTitle: "How a shipment moves with us",
    flowSubtitle: "A five-stage managed pipeline — you see the status of every stage, in your language.",
    flow: [
      { title: "Inquiry & Feasibility", desc: "We scope the product, corridor, volumes, and regulatory picture — and give you a written go/no-go with a landed-cost estimate." },
      { title: "Sourcing & Contracting", desc: "Supplier vetting, samples, price negotiation, and a bilingual contract with Incoterms and penalties defined." },
      { title: "Customs & Documentation", desc: "Licenses, certificates of origin, HS codes, and declarations prepared and pre-cleared before the cargo moves." },
      { title: "Freight & Insurance", desc: "Carrier booking, cargo insurance, loading supervision, and live tracking across the corridor." },
      { title: "Delivery & Settlement", desc: "Final-mile delivery, inspection sign-off, payment settlement, and complete document archive handover." },
    ],
    form: {
      title: "Request a trade quote",
      subtitle: "Tell us the cargo and the corridor — our trade desk responds within one business day with routing and indicative costs.",
      companyLabel: "Company",
      companyPlaceholder: "Your company name",
      corridorLabel: "Trade corridor",
      corridorPlaceholder: "Select a corridor…",
      cargoLabel: "Cargo / commodity",
      cargoPlaceholder: "e.g., industrial machinery, foodstuffs, textiles…",
      submit: "Send Inquiry",
    },
  },

  consultationPage: {
    badge: "Free Consultation",
    heading: "Book Your Professional Consultation",
    subheading:
      "Thirty minutes with a senior TurkeyBridge advisor — honest answers, a clear next step, and zero obligation. Available in Persian, Turkish, and English.",
    formTitle: "Tell us about your goal",
    formSubtitle: "Fill in the form and our advisory desk will confirm your session within one business day.",
    phoneHint: "Include your country code — e.g., +90 5xx xxx xx xx",
    serviceOptions: [
      { key: "company", label: "Company & Business Registration" },
      { key: "business", label: "Business & Management Consulting" },
      { key: "residency", label: "Residency & Immigration" },
      { key: "investment", label: "Investment & Financial Planning" },
      { key: "trade", label: "Trade Services (Import/Export)" },
      { key: "academy", label: "TurkeyBridge Academy (Courses)" },
      { key: "other", label: "Other / Not sure yet" },
    ],
    submit: "Request My Consultation",
    successTitle: "Thank you! Your request is in.",
    successDesc: "Our advisors will reach out via WhatsApp or email shortly to confirm your consultation time.",
    benefitsTitle: "What you can expect",
    benefits: [
      "Free first assessment — honest advice, no obligation",
      "Senior advisors in Persian, Turkish, and English",
      "A written next-step summary after your session",
    ],
    altTitle: "Prefer instant contact?",
    altDesc: "Message us directly — we answer on WhatsApp and Instagram every day.",
  },

  servicePage: {
    breadcrumb: "Services",
    indexTitle: "Consulting services, end to end",
    indexSubtitle:
      "Five practice areas, one accountable team. Every engagement is scoped in writing, priced transparently, and delivered by senior advisors — never juniors learning on your file.",
    glanceDuration: "Typical Timeline",
    glanceBudget: "Engagements From",
    glanceLanguages: "Service Languages",
    stepsTitle: "How the engagement works",
    stepsSubtitle: "A transparent, milestone-based process — you always know what happens next.",
    documentsTitle: "Required documents",
    documentsSubtitle: "We prepare, translate, and notarize alongside you.",
    legalTitle: "Legal & regulatory framework",
    legalSubtitle: "The Turkish legislation governing this service.",
    ctaTitle: "Ready to take the first step?",
    ctaDesc: "Book a consultation and receive a personalized roadmap within 48 hours.",
    ctaButton: "Get a Consultation",
    otherServices: "Explore other services",
  },

  wizard: {
    stepWord: "Step",
    ofWord: "of",
    durationLabel: "Estimated duration",
    docsLabel: "Documents at this step",
    costLabel: "Official fees (approx.)",
    prev: "Previous",
    next: "Next Step",
    estimatorTitle: "Instant cost estimator",
    estimatorSubtitle: "Indicative figures in USD. Your exact quote is confirmed in a free consultation.",
    entityLabel: "Company type",
    llc: "Limited Liability (LTD)",
    jsc: "Joint-Stock (A.Ş.)",
    llcNote: "Min. capital ₺50,000",
    jscNote: "Min. capital ₺250,000",
    shareholdersLabel: "Number of shareholders",
    addonsLabel: "Optional add-ons",
    addonPermit: "Work permit application",
    addonAccounting: "First-year accounting (SMMM)",
    addonOffice: "Virtual office address (1 year)",
    serviceFee: "TurkeyBridge service fee",
    officialFees: "Official fees & notary",
    totalLabel: "Estimated total",
    totalNote: "Excludes minimum share capital, which remains your company's own asset.",
    checklistTitle: "Master document checklist",
    checklistSubtitle: "Tick items off as you gather them — we handle the rest together.",
    readyLabel: "ready",
    cta: "Start My Registration",
  },

  coursePage: {
    breadcrumb: "Academy",
    tabOverview: "Overview & Audience",
    tabCurriculum: "Curriculum Modules",
    tabCertification: "Certification & Validity",
    audienceTitle: "Who this course is for",
    outcomesTitle: "What you'll walk away with",
    moduleWord: "Module",
    glanceDuration: "Duration",
    glanceLevel: "Level",
    glanceFormat: "Format",
    glanceLanguage: "Languages",
    enroll: "Enroll Now",
    ask: "Ask About This Course",
    certTitle: "Internationally verifiable, career-grade certification",
    certPoints: [
      { title: "Verified Certificate of Completion", desc: "Issued with a unique ID and QR code — verifiable online by any employer or institution, worldwide." },
      { title: "International Recognition", desc: "Certificates are issued bilingually (English & Turkish) and aligned with European diploma-supplement conventions." },
      { title: "Portfolio Over Paper", desc: "You graduate with real, shipped projects. The certificate opens the door; your portfolio closes the deal." },
      { title: "Lifetime Validation", desc: "Verification remains permanently active on our validation portal — no renewals, no expiry, ever." },
    ],
    credentialLabel: "Credential awarded",
    relatedTitle: "Explore more courses",
  },

  academyLanding: {
    gridTitle: "All courses",
    gridSubtitle: "Live cohorts in Persian, Turkish, and English — online or at our Maslak campus.",
    ctaTitle: "Not sure which course fits your goals?",
    ctaDesc: "Talk to an academy advisor — we'll map your background to the right track in a free 15-minute call.",
    ctaButton: "Talk to an Advisor",
  },
};

export type Dictionary = typeof en;

/* ============================== TURKISH ============================== */

const tr: Dictionary = {
  brand: {
    name: "TurkeyBridge",
    tagline: "Türkiye'de ve ötesinde yolculuğunuza güç katıyoruz.",
  },

  nav: {
    home: "Ana Sayfa",
    services: "Hizmetler",
    academy: "Akademi",
    about: "Hakkımızda",
    contact: "İletişim",
    consultation: "Danışmanlık Alın",
    allCourses: "Tüm Kursları Görüntüle",
    allServices: "Tüm Hizmetleri Keşfedin",
    servicesMenu: [
      { key: "business", title: "İş ve Yönetim Danışmanlığı", desc: "Türkiye'ye açılan şirketler için pazara giriş, strateji ve operasyonel mükemmellik.", href: "/services/business" },
      { key: "residency", title: "Oturma İzni ve Göçmenlik", desc: "Oturma izinleri, yatırım yoluyla vatandaşlık ve eksiksiz taşınma desteği.", href: "/services/residency" },
      { key: "finance", title: "Finans ve Vergi Danışmanlığı", desc: "Vergi optimizasyonu, muhasebe, bankacılık ve sınır ötesi varlık yapılandırması.", href: "/services/finance" },
      { key: "student", title: "Öğrenci Danışmanlığı ve Üniversite Kabulü", desc: "Üniversite yerleştirme, burslar ve öğrenci vizesi — baştan sona rehberlik.", href: "/services/student" },
      { key: "company", title: "Şirket Kuruluşu", desc: "Türk şirketinizi kurmak için adım adım rehberli bir süreç.", href: "/services/company-registration" },
      { key: "trade", title: "Ticari Hizmetler", desc: "Sınır ötesi lojistik, gümrük, ithalat/ihracat ve B2B ürün tedariki.", href: "/services/trade-services" },
    ],
    academyMenu: [
      { key: "ai", title: "Yapay Zeka", desc: "Yapay zeka otomasyonu, mühendislik ve SEO", href: "/academy/artificial-intelligence" },
      { key: "software", title: "Yazılım Geliştirme", desc: "Sıfırdan üretime modern kodlama", href: "/academy/software-development" },
      { key: "web", title: "Web Sitesi Tasarımı ve Mimarisi", desc: "Gerçek web siteleri tasarlayın, geliştirin, yayınlayın", href: "/academy/website-creation" },
      { key: "marketing", title: "Dijital Pazarlama ve Büyüme", desc: "Rakamları gerçekten hareket ettiren growth hacking", href: "/academy/digital-marketing" },
      { key: "videography", title: "Videografi ve Fotoğrafçılık", desc: "Profesyonel kamera ve ışık teknikleri", href: "/academy/videography" },
      { key: "editing", title: "Video Kurgu ve Post-Prodüksiyon", desc: "Profesyonel kurgu, renk ve final", href: "/academy/video-editing" },
      { key: "social", title: "Sosyal Medya Stratejisi", desc: "Kitle oluşturun, markaları yönetin", href: "/academy/social-media" },
      { key: "turkish", title: "İstanbul Türkçesi", desc: "İş ve günlük yaşam için — Farsça bilen Türk eğitmenle", href: "/academy/turkish-language" },
    ],
  },

  hero: {
    badge: "İlk günden beri İstanbul'da güvenilir — Maslak, İstanbul",
    title1: "Türkiye'ye ve ötesine açılan",
    titleHighlight: "köprünüz",
    title2: "burada.",
    subtitle:
      "Bireyler için erişilebilir çözümler, kurumlar için elit stratejiler. İlk oturma izninizden şirketinizin ağır sanayi yatırımına kadar — tek köprü, tüm yolculuk.",
    ctaPrimary: "Hizmetleri Keşfedin",
    ctaSecondary: "Akademiye Katılın",
    videoLabel: "Hikayemizi izleyin",
    stats: [
      { value: "40.000+", label: "Takipçi ve Topluluk" },
      { value: "5+", label: "Yıllık Deneyim" },
      { value: "7/24", label: "VIP Destek" },
      { value: "3", label: "Dil, Tek Ekip" },
    ],
  },

  trust: {
    heading: "Müşteriler köprüyü neden bizimle geçiyor?",
    subheading:
      "Tek bir öğrenci vizesinden dokuz haneli bir pazar girişine kadar her iş; aynı titizlik, şeffaflık ve özen standartlarıyla yürütülür.",
    items: [
      { key: "certified", title: "Uluslararası Sertifikalı", desc: "Danışmanlık ve eğitim birimlerimizde akredite süreçler ve uluslararası geçerliliğe sahip sertifikalar." },
      { key: "support", title: "7/24 Destek", desc: "Farsça, Türkçe ve İngilizce kesintisiz destek — çünkü son başvuru tarihleri ve acil durumlar mesai saati tanımaz." },
      { key: "legal", title: "Uzman Hukuk Ekibi", desc: "Her başvuru, sözleşme ve dosya; ofisimizden çıkmadan önce Türkiye'nin önde gelen avukatları tarafından incelenir." },
      { key: "multilingual", title: "Gerçek Anlamda Çok Dilli", desc: "Üç dilde ana dil seviyesinde danışmanlar — hukuki ya da kültürel hiçbir ayrıntı çeviride kaybolmaz." },
    ],
  },

  services: {
    heading: "Yolculuğunuzun her aşaması için tasarlanmış hizmetler",
    subheading:
      "Her bütçeye uygun esnek başlangıç noktaları — pratik self-servis paketlerden uçtan uca yönetilen VIP hizmetlere kadar.",
    learnMore: "Detayları inceleyin",
    items: [
      {
        key: "business",
        title: "İş ve Yönetim Danışmanlığı",
        desc: "Türkiye pazarına giren veya büyüyen şirketler için pazara giriş stratejisi, fizibilite çalışmaları, iş ortağı durum tespiti ve operasyonel yeniden yapılandırma.",
        href: "/services/business",
        features: ["Pazara giriş ve fizibilite analizi", "İş ortağı ve tedarikçi durum tespiti", "Operasyonel strateji ve yeniden yapılandırma"],
      },
      {
        key: "residency",
        title: "Oturma İzni ve Göçmenlik Danışmanlığı",
        desc: "Oturma izinleri, yatırım yoluyla vatandaşlık, çalışma izinleri ve aile birleşimi — baştan sona eksiksiz rehberlik.",
        href: "/services/residency",
        features: ["Kısa ve uzun dönem oturma izinleri", "Yatırım yoluyla vatandaşlık programları", "Çalışma izinleri ve aile birleşimi"],
      },
      {
        key: "finance",
        title: "Finans ve Vergi Danışmanlığı",
        desc: "Lisanslı mali müşavirlerce tasarlanan vergi planlaması, muhasebe, bankacılık kurulumu ve sınır ötesi varlık yapılandırması.",
        href: "/services/finance",
        features: ["Kurumsal ve bireysel vergi planlaması", "Banka hesabı kurulumu ve uyum", "Sınır ötesi varlık yapılandırması"],
      },
      {
        key: "student",
        title: "Öğrenci Danışmanlığı ve Üniversite Kabulü",
        desc: "Doğru üniversiteyi seçmekten burs başvurularına, YÖS hazırlığından öğrenci vizesine ve kampüs yaşamına yerleşmeye kadar.",
        href: "/services/student",
        features: ["Üniversite seçimi ve başvurular", "Burs ve sınav hazırlığı", "Öğrenci vizesi ve karşılama desteği"],
      },
      {
        key: "company",
        title: "Şirket Kuruluşu",
        desc: "İnteraktif, adım adım kuruluş süreci: şirket türü seçimi, noter işlemleri, vergi kaydı, banka hesapları ve ilk faturanız.",
        href: "/services/company-registration",
        features: ["LTD ve A.Ş. kuruluşu", "Noter, vergi ve oda kayıtları", "Kurumsal bankacılık ve muhasebe kurulumu"],
      },
      {
        key: "trade",
        title: "Ticari Hizmetler",
        desc: "Türkiye–İran–Dünya koridorlarında uluslararası lojistik, gümrük müşavirliği, ithalat/ihracat operasyonları ve stratejik B2B tedarik.",
        href: "/services/trade-services",
        features: ["Sınır ötesi lojistik ve taşımacılık", "Uçtan uca gümrük ve ithalat/ihracat", "B2B emtia ve ürün tedariki"],
      },
    ],
    ctaCard: {
      title: "Nereden başlayacağınızdan emin değil misiniz?",
      desc: "Ücretsiz bir tanışma görüşmesi planlayın; durumunuza en uygun yolu ve bütçeyi birlikte belirleyelim.",
      cta: "Ücretsiz Danışmanlık Alın",
      href: "/consultation",
    },
  },

  vip: {
    badge: "TurkeyBridge Elite",
    heading: "Kurumlar ve yüksek varlıklı bireyler için elit stratejiler",
    subheading:
      "Söz konusu milyonlar olduğunda tavsiyeden fazlasına ihtiyacınız vardır: daimi bir ekibe. TurkeyBridge Elite; hukuk, finans ve sanayi alanlarında size özel kıdemli danışmanlar atar.",
    points: [
      { key: "lawyers", title: "Türkiye'nin Önde Gelen Avukatları", desc: "Birleşme & devralma, gayrimenkul, dava ve mevzuat işleri için özel kıdemli avukatlar." },
      { key: "finance", title: "Özel Finansal Danışmanlık", desc: "Yatırımları, holding yapılarını ve sınır ötesi sermaye akışlarını yapılandıran lisanslı danışmanlar." },
      { key: "industry", title: "Ağır Sanayi Uzmanlığı", desc: "İmalat ve enerji projeleri için yer seçimi, ruhsatlandırma ve kamu ilişkileri." },
      { key: "vip", title: "7/24 VIP Concierge", desc: "Kendi dilinizde, günün her saati ulaşabileceğiniz tek bir irtibat noktası." },
    ],
    cta: "Elite Erişim Talep Edin",
    href: "/elite",
  },

  academy: {
    badge: "TurkeyBridge Akademi",
    heading: "Beceriyi öğrenin. Sertifikayı kazanın. Geleceğinize sahip çıkın.",
    subheading:
      "Profesyonel eğitim birimimiz, uluslararası düzeyde doğrulanabilir bitirme sertifikalarıyla kariyer odaklı kurslar sunar — canlı ve kendi dilinizde.",
    highlights: [
      { key: "certificate", title: "Uluslararası Sertifikasyon", desc: "Her kurs, uluslararası geçerliliğe sahip, doğrulanabilir bir sertifika ve kurs tamamlama onayıyla sona erer." },
      { key: "instructor", title: "Farsça Bilen Türk Eğitmen", desc: "Türkçe dil programımız, Farsçayı akıcı konuşan İstanbullu bir ana dil eğitmeni tarafından yürütülür." },
      { key: "practical", title: "Kariyer Odaklı Müfredat", desc: "İşverenlerin ve müşterilerin gerçekten değer verdiği becerilere dayalı, proje temelli öğrenme." },
    ],
    coursesLabel: "Mevcut Kurslar",
    cta: "Akademiyi Keşfedin",
    href: "/academy",
  },

  contact: {
    heading: "İstanbul'un kalbinde bizi ziyaret edin",
    subheading:
      "Ofisimiz Maslak'ta, Olive Plaza'da — İstanbul iş dünyasının tam kalbinde. Uğrayın, arayın ya da WhatsApp veya Telegram'dan yazın.",
    addressLabel: "Ofis",
    address: "Maslak, Olive Plaza, Sarıyer, İstanbul, Türkiye",
    phoneLabel: "Telefon / WhatsApp / Telegram",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    emailLabel: "E-posta",
    email: "info@turkeybridge.com",
    instagramLabel: "Instagram",
    instagramMain: "Instagram (Ana Hesap)",
    instagramBusiness: "Instagram (İşletme)",
    hoursLabel: "Çalışma Saatleri",
    hours: "Pzt–Cmt, 09:00 – 19:00 (VIP: 7/24)",
    mapLabel: "İnteraktif Harita — Maslak, İstanbul",
    mapHint: "Google Haritalar yer tutucusu",
    cta: "Ziyaretinizi Planlayın",
    href: "/contact",
  },

  footer: {
    about:
      "TurkeyBridge; merkezi Olive Plaza, Maslak/İstanbul'da bulunan, bireyleri, öğrencileri ve kurumları Türkiye'deki ve ötesindeki fırsatlarla buluşturan tam kapsamlı bir danışmanlık ve eğitim şirketidir.",
    newsletterTitle: "Piyasanın bir adım önünde olun",
    newsletterDesc: "Oturma izni, iş dünyası ve yatırım üzerine aylık analizler — asla spam yok.",
    emailPlaceholder: "E-posta adresiniz",
    subscribe: "Abone Ol",
    servicesTitle: "Hizmetler",
    academyTitle: "Akademi",
    companyTitle: "Kurumsal",
    companyLinks: [
      { key: "about", title: "Hakkımızda", href: "/about" },
      { key: "contact", title: "İletişim", href: "/contact" },
    ],
    rights: "Tüm hakları saklıdır.",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
  },

  misc: {
    underConstructionTitle: "Bu sayfa çok yakında",
    underConstructionDesc:
      "Bu bölüm için kapsamlı içerik hazırlıyoruz. Bu sırada danışmanlarımız yalnızca bir tık uzağınızda.",
    backHome: "Ana Sayfaya Dön",
  },

  aboutPage: {
    badge: "TurkeyBridge Hakkında",
    heading: "Sizinle Türkiye'deki başarınız arasında sağlam bir köprü",
    subheading:
      "TurkeyBridge, Türkiye'nin önde gelen yerli uzmanlarıyla iş birliği içinde, sizinle Türkiye'deki başarınız arasında sağlam bir köprü kurar. Temel değerimiz; Türkiye'de 5 yıllık dürüst hizmet ve doğrulanmış başarı üzerine inşa edilmiştir.",
    stats: [
      { value: "5+", label: "Yıllık Dürüst Hizmet" },
      { value: "7", label: "Ülkede İş Deneyimi" },
      { value: "3", label: "Dil, Tek Ekip" },
      { value: "7/24", label: "Müşteri Desteği" },
    ],
    visionTitle: "Vizyonumuz",
    visionText:
      "Yeni bir ülkede başarı asla tesadüf değildir; mühendislik işidir. Türkiye'nin en iyi yerli uzmanlarını, dilinizi konuşan ve dünyanızı anlayan danışmanlarla bir araya getiriyoruz. Böylece dokunduğumuz her izin, şirket, yatırım ve kariyer; doğrulanmış yerel uzmanlığa ve beş yıllık dürüst, belgelenmiş sonuçlara dayanır.",
    leadershipTitle: "Liderlik ve Yönetim",
    leadershipSubtitle: "İki kurucu, tek standart: her müşteri dosyası direktör seviyesinde yürütülür.",
    leaders: [
      {
        key: "ali",
        name: "Ali Ömer Tortuk",
        initials: "AT",
        role: "Kurucu Ortak ve Direktör",
        points: [
          "Siyaset Bilimi ve Orta Doğu Çalışmaları uzmanı — İran Araştırmaları odaklı",
          "İstanbul Türkçesi ve Fars edebiyatı uzmanı",
          "İki dünyaya da ana dil düzeyinde hakim — Türk kurumları ile Farsça konuşan müşteriler arasında köprü",
        ],
      },
      {
        key: "mohsen",
        name: "Mohsen Kabiri",
        initials: "MK",
        role: "Kurucu Ortak ve Direktör",
        points: [
          "İşletme Yönetimi ve Uluslararası Ekonomi mezunu",
          "Bilişim, Yapay Zeka (AI) ve Dijital Pazarlama uzmanı",
          "Dünya genelinde 7 ülkede 8 yıllık startup kurma ve işletme yönetme deneyimi",
        ],
      },
    ],
    teamsTitle: "Uzman Ekiplerimiz",
    teamsSubtitle:
      "TurkeyBridge, birden fazla yüksek uzmanlıklı ekibi yönetir; böylece her dosya — bireysel izinlerden kurumsal operasyonlara ve VIP müşterilere kadar — tam da ihtiyaç duyduğu uzmanın masasına ulaşır.",
    teams: [
      { key: "legal", title: "Önde Gelen Kurumsal Avukatlar", desc: "Kurumsal düzeydeki operasyonlar için sözleşmeler, birleşme & devralma, gayrimenkul ve mevzuat işlerini aktif olarak yürüten kıdemli Türk avukatlar." },
      { key: "finance", title: "Yeminli Mali Müşavirler", desc: "Şirketler ve özel müşteriler için vergi, muhasebe ve denetim düzeyinde uyumu yöneten lisanslı yeminli danışmanlar." },
      { key: "consulting", title: "Elit İş Danışmanları", desc: "Kurumsal projeleri ve VIP müşteri portföylerini stratejiden uygulamaya uçtan uca yöneten kıdemli danışmanlar." },
    ],
    ctaTitle: "Köprünüzü birlikte kuralım",
    ctaDesc:
      "Türkiye'de nerede olmak istediğinizi söyleyin; sizi oraya ulaştıracak uzmanları, planı ve dürüst tavsiyeyi biz getirelim.",
    reachUs: "Bize anında ulaşın",
  },

  contactPage: {
    badge: "İletişim",
    heading: "Yolculuğunuzu birlikte konuşalım",
    subheading:
      "Arayın, yazın ya da uğrayın — danışmanlarımız Farsça, Türkçe veya İngilizce olarak bir iş saati içinde yanıt verir.",
    channelsTitle: "Doğrudan iletişim kanalları",
    callAction: "Ara",
    formTitle: "Ücretsiz danışmanlık talep edin",
    formSubtitle: "İhtiyacınızı anlatın — 24 saat içinde somut bir sonraki adımla dönelim.",
    nameLabel: "Ad Soyad",
    namePlaceholder: "örn. Elif Yılmaz",
    emailLabel: "E-posta",
    emailPlaceholder: "siz@ornek.com",
    phoneLabel: "Telefon / WhatsApp",
    phonePlaceholder: "+90 5xx xxx xx xx",
    serviceLabel: "İlgilendiğiniz hizmet",
    servicePlaceholder: "Bir hizmet seçin…",
    academyOption: "TurkeyBridge Akademi (kurslar)",
    otherOption: "Diğer / Genel soru",
    messageLabel: "Mesajınız",
    messagePlaceholder: "Durumunuzu ve hedeflerinizi kısaca anlatın…",
    submit: "Talebi Gönder",
    privacyNote: "Bilgileriniz gizli kalır — müşteri verilerini asla paylaşmayız.",
    successTitle: "Talebiniz alındı!",
    successDesc: "Teşekkürler — bir danışmanımız 24 saat içinde sizinle iletişime geçecek.",
    mapTitle: "Olive Plaza, Maslak, Sarıyer",
    mapSubtitle: "İnteraktif harita yer tutucusu — Google Haritalar buraya eklenecek.",
  },

  tradePage: {
    badge: "TurkeyBridge Ticaret",
    heading: "Ticari Hizmetler",
    tagline: "Sınır ötesi ticaret, uçtan uca kurgulanır.",
    intro:
      "İstanbul'daki fabrika kapısından Tahran'daki depoya ya da dünyanın öbür ucundaki limana — tüm ticaret operasyonunu biz yürütürüz: tedarik, sözleşmeler, gümrük, lojistik ve tahsilat. Tek sorumlu masa, üç koridor, sıfır belirsizlik.",
    ctaQuote: "Ticari Teklif Alın",
    corridorsTitle: "Üç koridor, tek operasyon masası",
    corridorsSubtitle:
      "Hizmet verdiğimiz her koridorda aktif taşıyıcı ağları, gümrük ortakları ve bankacılık kanalları işletiyoruz — kargonuz zamanında hareket eder, evraklarınız ilk seferde onaylanır.",
    corridors: [
      {
        key: "tr-ir",
        title: "Türkiye ↔ İran",
        desc: "Sokak sokak bildiğimiz koridor. Sınırın iki yakasında Türkçe ve Farsça eksiksiz dokümantasyonla kara, demir yolu ve kombine taşımacılık.",
        points: ["Gürbulak–Bazargan ve Kapıköy–Razi üzerinden kara ve demir yolu taşımacılığı", "Sınırın iki tarafında iki dilli gümrük dokümantasyonu", "Yaptırım bilinciyle uyum ve ödeme yapılandırması"],
      },
      {
        key: "tr-world",
        title: "Türkiye ↔ Dünya",
        desc: "Türk mallarını küresel pazarlara ihraç edin ya da dünya tedarikini Türkiye'ye taşıyın — kapıdan kapıya yönetilen deniz, hava ve kara taşımacılığı.",
        points: ["Türk limanlarından FCL/LCL deniz taşımacılığı", "İstanbul'un küresel merkezi üzerinden hava kargo", "İhracat teşvikleri ve vergi optimizasyonu"],
      },
      {
        key: "ir-world",
        title: "İran ↔ Dünya",
        desc: "Türkiye üzerinden uyumlu transit, re-export ve aracı yapılarla İranlı alıcı ve satıcılar ile küresel pazarlar arasında ticaretin kolaylaştırılması.",
        points: ["Türkiye üzerinden transit ve re-export yapıları", "Üçüncü taraf sözleşme ve emanet (escrow) mekanizmaları", "Uçtan uca dokümantasyon ve gözetim"],
      },
    ],
    deliverablesTitle: "Temel hizmet kalemleri",
    deliverablesSubtitle: "Her iş üç operasyonel sütun etrafında kapsamlanır — ayrı ayrı ya da tek yönetilen hat olarak.",
    deliverables: [
      { key: "freight", title: "Sınır Ötesi Taşımacılık ve Lojistik", desc: "Çok modlu taşıma planlaması — kara, demir yolu, deniz ve hava — taşıyıcı seçimi, yük sigortası, canlı takip ve sözleşmeye yazılı teslim süresi garantileriyle." },
      { key: "customs", title: "Gümrük Müşavirliği ve İthalat/İhracat Operasyonları", desc: "Lisanslı gümrük ortaklarımız GTİP sınıflandırması, beyannameler, muayeneler ve vergi ödemelerini yürütür; masamız lisansları, menşe şahadetnamelerini ve standart uyumunu uçtan uca yönetir." },
      { key: "sourcing", title: "Stratejik Emtia ve Ürün Tedariki", desc: "Ham emtiadan bitmiş ürüne; üretici ve tedarikçileri buluyor, denetliyor ve pazarlığı yürütüyoruz — fabrika denetimi, numune kontrolü ve fiyat kıyaslamasıyla." },
    ],
    b2bBadge: "B2B Ticaret Masası",
    b2bTitle: "İşletmeden işletmeye ticaret için kuruldu",
    b2bDesc:
      "Uzmanlığımız koli değil, sözleşmedir. Masanın iki tarafındaki kurumları temsil ediyor; denetimlere, sınır geçişlerine ve kur dalgalanmalarına dayanıklı toplu ticaret anlaşmaları kurguluyoruz.",
    b2bPoints: [
      { key: "consulting", title: "Üst Düzey Kurumsal Danışmanlık", desc: "Kıdemli danışmanlar ticaret stratejinizi yapılandırır: pazar seçimi, fiyatlama, Incoterms ve risk dağılımı." },
      { key: "contracts", title: "Toplu Ticaret Sözleşmesi Aracılığı", desc: "Doğrulanmış muhataplarla, uygulanabilir şartlarla kurumsal tedarik anlaşmalarının hazırlanması ve müzakeresi." },
      { key: "compliance", title: "Uyum ve Risk Yönetimi", desc: "Yaptırım taraması, akreditifler, gözetim rejimleri ve sigorta — mallar hareket etmeden önce kurgulanır." },
      { key: "network", title: "Doğrulanmış Kurumsal Ağ", desc: "Üç koridorumuzda üreticilere, toptancılara ve lojistik operatörlerine doğrudan erişim." },
    ],
    flowTitle: "Bir sevkiyat bizimle nasıl ilerler?",
    flowSubtitle: "Beş aşamalı yönetilen hat — her aşamanın durumunu kendi dilinizde görürsünüz.",
    flow: [
      { title: "Talep ve Fizibilite", desc: "Ürünü, koridoru, hacimleri ve mevzuat tablosunu kapsamlıyor; yazılı bir devam/dur kararı ve maliyet tahmini sunuyoruz." },
      { title: "Tedarik ve Sözleşme", desc: "Tedarikçi doğrulama, numuneler, fiyat pazarlığı ve Incoterms ile cezaların tanımlandığı iki dilli sözleşme." },
      { title: "Gümrük ve Dokümantasyon", desc: "Lisanslar, menşe şahadetnameleri, GTİP kodları ve beyannameler kargo hareket etmeden hazırlanır ve ön onaydan geçirilir." },
      { title: "Taşıma ve Sigorta", desc: "Taşıyıcı rezervasyonu, yük sigortası, yükleme gözetimi ve koridor boyunca canlı takip." },
      { title: "Teslimat ve Tahsilat", desc: "Son kilometre teslimatı, muayene onayı, ödeme tahsilatı ve eksiksiz evrak arşivinin devri." },
    ],
    form: {
      title: "Ticari teklif talep edin",
      subtitle: "Kargoyu ve koridoru söyleyin — ticaret masamız bir iş günü içinde rota ve gösterge maliyetlerle dönüş yapar.",
      companyLabel: "Şirket",
      companyPlaceholder: "Şirket adınız",
      corridorLabel: "Ticaret koridoru",
      corridorPlaceholder: "Bir koridor seçin…",
      cargoLabel: "Yük / emtia",
      cargoPlaceholder: "örn. endüstriyel makine, gıda, tekstil…",
      submit: "Talebi Gönder",
    },
  },

  consultationPage: {
    badge: "Ücretsiz Danışmanlık",
    heading: "Profesyonel Danışmanlığınızı Planlayın",
    subheading:
      "Kıdemli bir TurkeyBridge danışmanıyla 30 dakika — dürüst yanıtlar, net bir sonraki adım ve sıfır yükümlülük. Farsça, Türkçe ve İngilizce olarak.",
    formTitle: "Bize hedefinizden bahsedin",
    formSubtitle: "Formu doldurun; danışma masamız randevunuzu bir iş günü içinde onaylasın.",
    phoneHint: "Ülke kodunu ekleyin — örn. +90 5xx xxx xx xx",
    serviceOptions: [
      { key: "company", label: "Şirket Kuruluşu ve Ticari Kayıt" },
      { key: "business", label: "İş ve Yönetim Danışmanlığı" },
      { key: "residency", label: "Oturma İzni ve Göçmenlik" },
      { key: "investment", label: "Yatırım ve Finansal Planlama" },
      { key: "trade", label: "Ticari Hizmetler (İthalat/İhracat)" },
      { key: "academy", label: "TurkeyBridge Akademi (Kurslar)" },
      { key: "other", label: "Diğer / Henüz emin değilim" },
    ],
    submit: "Danışmanlık Talep Et",
    successTitle: "Teşekkürler! Talebiniz alındı.",
    successDesc: "Danışmanlarımız randevu saatinizi onaylamak için kısa süre içinde WhatsApp veya e-posta ile ulaşacak.",
    benefitsTitle: "Sizi neler bekliyor?",
    benefits: [
      "Ücretsiz ilk değerlendirme — dürüst tavsiye, yükümlülük yok",
      "Farsça, Türkçe ve İngilizce kıdemli danışmanlar",
      "Görüşme sonrası yazılı bir sonraki adım özeti",
    ],
    altTitle: "Anında iletişim mi tercih edersiniz?",
    altDesc: "Bize doğrudan yazın — WhatsApp ve Instagram'da her gün yanıtlıyoruz.",
  },

  servicePage: {
    breadcrumb: "Hizmetler",
    indexTitle: "Uçtan uca danışmanlık hizmetleri",
    indexSubtitle:
      "Beş uzmanlık alanı, tek sorumlu ekip. Her iş yazılı olarak kapsamlanır, şeffaf fiyatlandırılır ve kıdemli danışmanlar tarafından yürütülür — dosyanız üzerinde öğrenen stajyerler tarafından değil.",
    glanceDuration: "Ortalama Süre",
    glanceBudget: "Başlangıç Ücreti",
    glanceLanguages: "Hizmet Dilleri",
    stepsTitle: "Süreç nasıl işliyor?",
    stepsSubtitle: "Şeffaf, kilometre taşı bazlı bir süreç — bir sonraki adımı her zaman bilirsiniz.",
    documentsTitle: "Gerekli belgeler",
    documentsSubtitle: "Belgeleri sizinle birlikte hazırlıyor, çeviriyor ve noter onayından geçiriyoruz.",
    legalTitle: "Hukuki ve düzenleyici çerçeve",
    legalSubtitle: "Bu hizmeti düzenleyen Türk mevzuatı.",
    ctaTitle: "İlk adımı atmaya hazır mısınız?",
    ctaDesc: "Danışmanlık randevusu alın, 48 saat içinde size özel yol haritanızı edinin.",
    ctaButton: "Danışmanlık Alın",
    otherServices: "Diğer hizmetleri keşfedin",
  },

  wizard: {
    stepWord: "Adım",
    ofWord: "/",
    durationLabel: "Tahmini süre",
    docsLabel: "Bu adımdaki belgeler",
    costLabel: "Resmi ücretler (yaklaşık)",
    prev: "Önceki",
    next: "Sonraki Adım",
    estimatorTitle: "Anında maliyet hesaplayıcı",
    estimatorSubtitle: "USD cinsinden gösterge niteliğinde rakamlar. Kesin teklifiniz ücretsiz görüşmede netleşir.",
    entityLabel: "Şirket türü",
    llc: "Limited Şirket (LTD)",
    jsc: "Anonim Şirket (A.Ş.)",
    llcNote: "Asgari sermaye ₺50.000",
    jscNote: "Asgari sermaye ₺250.000",
    shareholdersLabel: "Ortak sayısı",
    addonsLabel: "İsteğe bağlı ek hizmetler",
    addonPermit: "Çalışma izni başvurusu",
    addonAccounting: "İlk yıl muhasebe (SMMM)",
    addonOffice: "Sanal ofis adresi (1 yıl)",
    serviceFee: "TurkeyBridge hizmet bedeli",
    officialFees: "Resmi ücretler ve noter",
    totalLabel: "Tahmini toplam",
    totalNote: "Şirketinizin öz varlığı olarak kalan asgari sermaye tutarı hariçtir.",
    checklistTitle: "Ana belge kontrol listesi",
    checklistSubtitle: "Topladıkça işaretleyin — gerisini birlikte hallederiz.",
    readyLabel: "hazır",
    cta: "Kuruluşumu Başlat",
  },

  coursePage: {
    breadcrumb: "Akademi",
    tabOverview: "Genel Bakış ve Hedef Kitle",
    tabCurriculum: "Müfredat Modülleri",
    tabCertification: "Sertifikasyon ve Geçerlilik",
    audienceTitle: "Bu kurs kimler için?",
    outcomesTitle: "Kurs sonunda neler kazanacaksınız?",
    moduleWord: "Modül",
    glanceDuration: "Süre",
    glanceLevel: "Seviye",
    glanceFormat: "Format",
    glanceLanguage: "Diller",
    enroll: "Hemen Kaydolun",
    ask: "Bu Kursu Sorun",
    certTitle: "Uluslararası düzeyde doğrulanabilir, kariyer odaklı sertifikasyon",
    certPoints: [
      { title: "Doğrulanmış Bitirme Sertifikası", desc: "Benzersiz kimlik numarası ve QR koduyla düzenlenir — dünyanın her yerinden işveren ve kurumlar tarafından çevrimiçi doğrulanabilir." },
      { title: "Uluslararası Tanınırlık", desc: "Sertifikalar iki dilde (İngilizce ve Türkçe) düzenlenir ve Avrupa diploma eki standartlarıyla uyumludur." },
      { title: "Kağıttan Önce Portfolyo", desc: "Gerçek, tamamlanmış projelerle mezun olursunuz. Sertifika kapıyı açar; portfolyonuz işi bitirir." },
      { title: "Ömür Boyu Doğrulama", desc: "Doğrulama, onay portalımızda kalıcı olarak aktif kalır — yenileme yok, son kullanma tarihi yok." },
    ],
    credentialLabel: "Verilen unvan",
    relatedTitle: "Diğer kursları keşfedin",
  },

  academyLanding: {
    gridTitle: "Tüm kurslar",
    gridSubtitle: "Farsça, Türkçe ve İngilizce canlı gruplar — online veya Maslak kampüsümüzde.",
    ctaTitle: "Hangi kursun size uygun olduğundan emin değil misiniz?",
    ctaDesc: "Bir akademi danışmanıyla görüşün — ücretsiz 15 dakikalık görüşmede geçmişinizi doğru programla eşleştirelim.",
    ctaButton: "Danışmanla Görüşün",
  },
};

/* ============================== PERSIAN ============================== */

const fa: Dictionary = {
  brand: {
    name: "TurkeyBridge",
    tagline: "همراه شما در مسیر ترکیه و فراتر از آن.",
  },

  nav: {
    home: "خانه",
    services: "خدمات",
    academy: "آکادمی",
    about: "درباره ما",
    contact: "تماس با ما",
    consultation: "دریافت مشاوره",
    allCourses: "مشاهده همه دوره‌ها",
    allServices: "مشاهده همه خدمات",
    servicesMenu: [
      { key: "business", title: "مشاوره کسب‌وکار و مدیریت", desc: "استراتژی ورود به بازار، امکان‌سنجی و تعالی عملیاتی برای شرکت‌هایی که در ترکیه رشد می‌کنند.", href: "/services/business" },
      { key: "residency", title: "مشاوره اقامت و مهاجرت", desc: "اجازه اقامت، شهروندی از طریق سرمایه‌گذاری و پشتیبانی کامل جابه‌جایی.", href: "/services/residency" },
      { key: "finance", title: "مشاوره مالی و مالیاتی", desc: "بهینه‌سازی مالیات، حسابداری، امور بانکی و ساختاردهی دارایی بین‌المللی.", href: "/services/finance" },
      { key: "student", title: "مشاوره تحصیلی و پذیرش دانشگاه", desc: "انتخاب دانشگاه، بورسیه و ویزای دانشجویی — از ابتدا تا انتها.", href: "/services/student" },
      { key: "company", title: "ثبت شرکت", desc: "فرایندی گام‌به‌گام و راهنمایی‌شده برای ثبت شرکت شما در ترکیه.", href: "/services/company-registration" },
      { key: "trade", title: "خدمات بازرگانی", desc: "حمل‌ونقل بین‌المللی، امور گمرکی، واردات و صادرات و تأمین کالای B2B.", href: "/services/trade-services" },
    ],
    academyMenu: [
      { key: "ai", title: "هوش مصنوعی", desc: "اتوماسیون، مهندسی هوش مصنوعی و سئو", href: "/academy/artificial-intelligence" },
      { key: "software", title: "برنامه‌نویسی و توسعه نرم‌افزار", desc: "کدنویسی مدرن، از صفر تا محصول نهایی", href: "/academy/software-development" },
      { key: "web", title: "طراحی و معماری وب‌سایت", desc: "طراحی، ساخت و راه‌اندازی وب‌سایت واقعی", href: "/academy/website-creation" },
      { key: "marketing", title: "دیجیتال مارکتینگ و رشد", desc: "هک رشد که اعداد را واقعاً جابه‌جا می‌کند", href: "/academy/digital-marketing" },
      { key: "videography", title: "فیلم‌برداری و عکاسی حرفه‌ای", desc: "فن دوربین و نورپردازی حرفه‌ای", href: "/academy/videography" },
      { key: "editing", title: "تدوین ویدیو و پس‌تولید", desc: "برش، اصلاح رنگ و خروجی حرفه‌ای", href: "/academy/video-editing" },
      { key: "social", title: "استراتژی شبکه‌های اجتماعی", desc: "مخاطب بسازید و برندها را مدیریت کنید", href: "/academy/social-media" },
      { key: "turkish", title: "زبان ترکی (ترکی استانبولی)", desc: "برای کار و زندگی روزمره — با مدرس ترک مسلط به فارسی", href: "/academy/turkish-language" },
    ],
  },

  hero: {
    badge: "دفتر مرکزی: ماسلاک، استانبول، ترکیه",
    title1: "پل شما به سوی",
    titleHighlight: "ترکیه",
    title2: "و فراتر از آن.",
    subtitle:
      "راهکارهای مقرون‌به‌صرفه برای اشخاص، استراتژی‌های ویژه برای سازمان‌ها. از نخستین اجازه اقامت شما تا توسعه صنعتی شرکت‌تان — یک پل، تمام مسیر.",
    ctaPrimary: "مشاهده خدمات",
    ctaSecondary: "عضویت در آکادمی",
    videoLabel: "داستان ما را ببینید",
    stats: [
      { value: "+۴۰ هزار", label: "جامعه همراه ما" },
      { value: "۵+", label: "سال سابقه فعالیت" },
      { value: "۲۴/۷", label: "پشتیبانی VIP" },
      { value: "۳", label: "زبان، یک تیم" },
    ],
  },

  trust: {
    heading: "چرا مشتریان با ما از پل عبور می‌کنند؟",
    subheading:
      "هر پروژه — از یک ویزای دانشجویی تا ورود چندمیلیون دلاری به بازار — با همان استانداردهای دقت، شفافیت و تعهد انجام می‌شود.",
    items: [
      { key: "certified", title: "دارای اعتبار بین‌المللی", desc: "فرایندهای معتبر و گواهینامه‌های شناخته‌شده بین‌المللی در هر دو بخش مشاوره و آموزش." },
      { key: "support", title: "پشتیبانی ۲۴/۷", desc: "پشتیبانی شبانه‌روزی به زبان‌های فارسی، ترکی و انگلیسی — چون مهلت‌ها و شرایط اضطراری ساعت اداری نمی‌شناسند." },
      { key: "legal", title: "تیم حقوقی متخصص", desc: "وکلای برجسته ترکیه و مشاوران رسمی، هر پرونده، قرارداد و درخواست را پیش از ارسال بررسی می‌کنند." },
      { key: "multilingual", title: "چندزبانه واقعی", desc: "مشاورانی در سطح زبان مادری در هر سه زبان؛ هیچ نکته حقوقی یا فرهنگی در ترجمه گم نمی‌شود." },
    ],
  },

  services: {
    heading: "خدماتی برای هر مرحله از مسیر شما",
    subheading:
      "نقاط شروع منعطف برای هر بودجه — از بسته‌های اقتصادی و سریع تا خدمات کاملاً مدیریت‌شده و VIP.",
    learnMore: "اطلاعات بیشتر",
    items: [
      {
        key: "business",
        title: "مشاوره کسب‌وکار و مدیریت",
        desc: "استراتژی ورود به بازار، مطالعات امکان‌سنجی، راستی‌آزمایی شرکا و بازطراحی عملیات برای شرکت‌هایی که وارد بازار ترکیه می‌شوند یا در آن رشد می‌کنند.",
        href: "/services/business",
        features: ["تحلیل ورود به بازار و امکان‌سنجی", "راستی‌آزمایی شرکا و تأمین‌کنندگان", "استراتژی عملیاتی و بازساختاردهی"],
      },
      {
        key: "residency",
        title: "مشاوره اقامت و مهاجرت",
        desc: "راهنمایی کامل در مسیر اجازه اقامت ترکیه، شهروندی از طریق سرمایه‌گذاری، اجازه کار و الحاق خانواده — از ابتدا تا انتها.",
        href: "/services/residency",
        features: ["اقامت کوتاه‌مدت و بلندمدت", "برنامه‌های شهروندی از طریق سرمایه‌گذاری", "اجازه کار و الحاق خانواده"],
      },
      {
        key: "finance",
        title: "مشاوره مالی و مالیاتی",
        desc: "برنامه‌ریزی مالیاتی، حسابداری، راه‌اندازی امور بانکی و ساختاردهی دارایی بین‌المللی توسط مشاوران مالی دارای مجوز رسمی.",
        href: "/services/finance",
        features: ["برنامه‌ریزی مالیاتی شرکتی و شخصی", "افتتاح حساب بانکی و انطباق قانونی", "ساختاردهی دارایی بین‌المللی"],
      },
      {
        key: "student",
        title: "مشاوره تحصیلی و پذیرش دانشگاه",
        desc: "از انتخاب دانشگاه مناسب در ترکیه تا درخواست بورسیه، آمادگی آزمون YÖS، ویزای دانشجویی و جاگیرشدن در زندگی دانشگاهی.",
        href: "/services/student",
        features: ["انتخاب دانشگاه و ثبت درخواست", "بورسیه و آمادگی آزمون", "ویزای دانشجویی و پشتیبانی بدو ورود"],
      },
      {
        key: "company",
        title: "ثبت شرکت",
        desc: "فرایند ثبت تعاملی و گام‌به‌گام: انتخاب نوع شرکت، امور محضری، ثبت مالیاتی، حساب بانکی و صدور نخستین فاکتور شما.",
        href: "/services/company-registration",
        features: ["تأسیس شرکت با مسئولیت محدود و سهامی", "ثبت محضری، مالیاتی و اتاق بازرگانی", "راه‌اندازی بانکداری شرکتی و حسابداری"],
      },
      {
        key: "trade",
        title: "خدمات بازرگانی",
        desc: "حمل‌ونقل بین‌المللی، ترخیص گمرکی، عملیات واردات و صادرات و تأمین استراتژیک B2B در کریدورهای ترکیه–ایران–جهان.",
        href: "/services/trade-services",
        features: ["حمل‌ونقل و لجستیک بین‌المللی", "گمرک و واردات/صادرات از ابتدا تا انتها", "تأمین کالا و محصول B2B"],
      },
    ],
    ctaCard: {
      title: "نمی‌دانید از کجا شروع کنید؟",
      desc: "یک جلسه مشاوره رایگان رزرو کنید تا مسیر دقیق — و بودجه — متناسب با شرایط شما را ترسیم کنیم.",
      cta: "مشاوره رایگان بگیرید",
      href: "/consultation",
    },
  },

  vip: {
    badge: "TurkeyBridge Elite",
    heading: "استراتژی‌های ویژه برای سازمان‌ها و افراد با سرمایه بالا",
    subheading:
      "وقتی پای میلیون‌ها در میان است، به چیزی بیش از مشاوره نیاز دارید — به یک تیم همیشگی. TurkeyBridge Elite شما را با مشاوران ارشد اختصاصی در حوزه‌های حقوق، مالی و صنعت همراه می‌کند.",
    points: [
      { key: "lawyers", title: "وکلای طراز اول ترکیه", desc: "وکلای ارشد اختصاصی برای ادغام و تملیک، املاک، دعاوی و امور نظارتی." },
      { key: "finance", title: "مشاوره مالی اختصاصی", desc: "مشاوران دارای مجوز برای ساختاردهی سرمایه‌گذاری‌ها، هلدینگ‌ها و جریان سرمایه بین‌المللی." },
      { key: "industry", title: "تخصص در صنایع سنگین", desc: "انتخاب سایت، اخذ مجوزها و روابط دولتی برای پروژه‌های تولیدی و انرژی." },
      { key: "vip", title: "پشتیبانی VIP شبانه‌روزی", desc: "یک نقطه تماس واحد، در دسترس در هر ساعت شبانه‌روز، به زبان شما." },
    ],
    cta: "درخواست عضویت Elite",
    href: "/elite",
  },

  academy: {
    badge: "آکادمی TurkeyBridge",
    heading: "مهارت را بیاموزید. مدرک را بگیرید. آینده‌تان را بسازید.",
    subheading:
      "بخش آموزش حرفه‌ای ما دوره‌هایی در سطح بازار کار با گواهی پایان دوره قابل استعلام بین‌المللی ارائه می‌دهد — به‌صورت زنده و به زبان شما.",
    highlights: [
      { key: "certificate", title: "گواهینامه بین‌المللی", desc: "هر دوره با گواهی قابل راستی‌آزمایی و تأییدیه پایان دوره با اعتبار بین‌المللی به پایان می‌رسد." },
      { key: "instructor", title: "مدرس ترک مسلط به فارسی", desc: "دوره زبان ترکی توسط مدرس بومیِ ترکی استانبولی برگزار می‌شود که به زبان فارسی نیز کاملاً مسلط است." },
      { key: "practical", title: "سرفصل‌های شغل‌محور", desc: "یادگیری پروژه‌محور بر پایه مهارت‌هایی که کارفرمایان و مشتریان واقعاً بابت آن هزینه می‌کنند." },
    ],
    coursesLabel: "دوره‌های موجود",
    cta: "مشاهده آکادمی",
    href: "/academy",
  },

  contact: {
    heading: "در قلب استانبول منتظر شما هستیم",
    subheading:
      "دفتر ما در الیو پلازا، ماسلاک — در قلب منطقه تجاری استانبول — قرار دارد. حضوری بیایید، تماس بگیرید یا در واتس‌اپ و تلگرام پیام دهید.",
    addressLabel: "دفتر",
    address: "ماسلاک، الیو پلازا، ساری‌یر، استانبول، ترکیه",
    phoneLabel: "تلفن / واتس‌اپ / تلگرام",
    whatsapp: "واتس‌اپ",
    telegram: "تلگرام",
    emailLabel: "ایمیل",
    email: "info@turkeybridge.com",
    instagramLabel: "اینستاگرام",
    instagramMain: "اینستاگرام (اصلی)",
    instagramBusiness: "اینستاگرام (بیزینس)",
    hoursLabel: "ساعات کاری",
    hours: "دوشنبه تا شنبه، ۹:۰۰ تا ۱۹:۰۰ (Elite: ۲۴/۷)",
    mapLabel: "نقشه تعاملی — ماسلاک، استانبول",
    mapHint: "جایگاه نقشه گوگل",
    cta: "رزرو وقت ملاقات",
    href: "/contact",
  },

  footer: {
    about:
      "TurkeyBridge یک شرکت مشاوره و آموزش با خدمات کامل در الیو پلازا، ماسلاک استانبول است — پلی میان اشخاص، دانشجویان و سازمان‌ها با فرصت‌های ترکیه و فراتر از آن.",
    newsletterTitle: "یک قدم جلوتر از بازار باشید",
    newsletterDesc: "تحلیل ماهانه درباره اقامت، کسب‌وکار و سرمایه‌گذاری در ترکیه — بدون هرزنامه.",
    emailPlaceholder: "آدرس ایمیل شما",
    subscribe: "عضویت",
    servicesTitle: "خدمات",
    academyTitle: "آکادمی",
    companyTitle: "شرکت",
    companyLinks: [
      { key: "about", title: "درباره ما", href: "/about" },
      { key: "contact", title: "تماس با ما", href: "/contact" },
    ],
    rights: "کلیه حقوق محفوظ است.",
    privacy: "حریم خصوصی",
    terms: "شرایط استفاده",
  },

  misc: {
    underConstructionTitle: "این صفحه به‌زودی آماده می‌شود",
    underConstructionDesc:
      "در حال آماده‌سازی محتوای کامل این بخش هستیم. در این فاصله، مشاوران ما تنها یک کلیک با شما فاصله دارند.",
    backHome: "بازگشت به خانه",
  },

  aboutPage: {
    badge: "درباره TurkeyBridge",
    heading: "پلی مستحکم میان شما و موفقیت در ترکیه",
    subheading:
      "TurkeyBridge با همکاری برترین متخصصان بومی ترکیه، پلی مستحکم میان شما و موفقیت در ترکیه می‌سازد. ارزش بنیادین ما بر پایه ۵ سال خدمت‌رسانی صادقانه و موفقیت اثبات‌شده در ترکیه بنا شده است.",
    stats: [
      { value: "+۵", label: "سال خدمت صادقانه" },
      { value: "۷", label: "کشور تجربه کسب‌وکار" },
      { value: "۳", label: "زبان، یک تیم" },
      { value: "۲۴/۷", label: "پشتیبانی مشتریان" },
    ],
    visionTitle: "چشم‌انداز ما",
    visionText:
      "موفقیت در یک کشور جدید هرگز اتفاقی نیست — مهندسی می‌شود. ما برترین متخصصان بومی ترکیه را در کنار مشاورانی قرار می‌دهیم که به زبان شما صحبت می‌کنند و دنیای شما را می‌فهمند؛ تا هر اقامت، شرکت، سرمایه‌گذاری و مسیر شغلی که به ما سپرده می‌شود، بر تخصص محلی راستی‌آزمایی‌شده و پنج سال نتایج صادقانه و مستند تکیه کند.",
    leadershipTitle: "رهبری و مدیریت",
    leadershipSubtitle: "دو بنیان‌گذار، یک استاندارد: هر پرونده مشتری در سطح مدیران ارشد رسیدگی می‌شود.",
    leaders: [
      {
        key: "ali",
        name: "علی عمر تورتوک",
        initials: "AT",
        role: "هم‌بنیان‌گذار و مدیر",
        points: [
          "متخصص علوم سیاسی و مطالعات خاورمیانه با تمرکز بر ایران‌شناسی",
          "متخصص زبان ترکی استانبولی و ادبیات فارسی",
          "مسلط به هر دو دنیا — پیوند میان نهادهای ترکیه و مشتریان فارسی‌زبان",
        ],
      },
      {
        key: "mohsen",
        name: "محسن کبیری",
        initials: "MK",
        role: "هم‌بنیان‌گذار و مدیر",
        points: [
          "دانش‌آموخته مدیریت کسب‌وکار و اقتصاد بین‌الملل",
          "متخصص فناوری اطلاعات، هوش مصنوعی (AI) و دیجیتال مارکتینگ",
          "۸ سال سابقه راه‌اندازی استارتاپ و مدیریت کسب‌وکار در ۷ کشور جهان",
        ],
      },
    ],
    teamsTitle: "تیم‌های تخصصی ما",
    teamsSubtitle:
      "TurkeyBridge چندین تیم کاملاً تخصصی را رهبری و مدیریت می‌کند تا هر پرونده — از اقامت شخصی تا عملیات سازمانی و مشتریان VIP — دقیقاً روی میز متخصصی بنشیند که به آن نیاز دارد.",
    teams: [
      { key: "legal", title: "وکلای طراز اول شرکتی", desc: "وکلای ارشد ترک که قراردادها، ادغام و تملیک، املاک و امور نظارتی عملیات‌های سازمانی را به‌صورت فعال مدیریت می‌کنند." },
      { key: "finance", title: "مشاوران مالی رسمی قسم‌خورده (Mali Müşavir)", desc: "مشاوران دارای مجوز رسمی که مالیات، حسابداری و انطباق در سطح حسابرسی را برای شرکت‌ها و مشتریان خاص مدیریت می‌کنند." },
      { key: "consulting", title: "مشاوران کسب‌وکار نخبه", desc: "مشاوران ارشدی که پروژه‌های سازمانی و پرونده‌های مشتریان VIP را از استراتژی تا اجرا به‌طور کامل پیش می‌برند." },
    ],
    ctaTitle: "بیایید پل شما را بسازیم",
    ctaDesc:
      "بگویید می‌خواهید در ترکیه به کجا برسید — ما متخصصان، برنامه و مشاوره صادقانه رسیدن به آن را فراهم می‌کنیم.",
    reachUs: "ارتباط فوری با ما",
  },

  contactPage: {
    badge: "تماس با ما",
    heading: "درباره مسیر شما گفت‌وگو کنیم",
    subheading:
      "تماس بگیرید، پیام دهید یا حضوری بیایید — مشاوران ما ظرف یک ساعت کاری به فارسی، ترکی یا انگلیسی پاسخ می‌دهند.",
    channelsTitle: "کانال‌های ارتباط مستقیم",
    callAction: "تماس",
    formTitle: "درخواست مشاوره رایگان",
    formSubtitle: "نیاز خود را بگویید — ظرف ۲۴ ساعت با یک قدم بعدی مشخص پاسخ می‌دهیم.",
    nameLabel: "نام و نام خانوادگی",
    namePlaceholder: "مثلاً سارا احمدی",
    emailLabel: "ایمیل",
    emailPlaceholder: "you@example.com",
    phoneLabel: "تلفن / واتس‌اپ",
    phonePlaceholder: "+90 5xx xxx xx xx",
    serviceLabel: "خدمت مورد نظر",
    servicePlaceholder: "یک خدمت را انتخاب کنید…",
    academyOption: "آکادمی TurkeyBridge (دوره‌ها)",
    otherOption: "سایر / سؤال عمومی",
    messageLabel: "پیام شما",
    messagePlaceholder: "شرایط و اهداف خود را به‌طور خلاصه بنویسید…",
    submit: "ارسال درخواست",
    privacyNote: "اطلاعات شما محرمانه می‌ماند — داده‌های مشتریان را هرگز به اشتراک نمی‌گذاریم.",
    successTitle: "درخواست شما دریافت شد!",
    successDesc: "سپاسگزاریم — یکی از مشاوران ما ظرف ۲۴ ساعت با شما تماس می‌گیرد.",
    mapTitle: "الیو پلازا، ماسلاک، ساری‌یر",
    mapSubtitle: "جایگاه نقشه تعاملی — نقشه گوگل اینجا قرار می‌گیرد.",
  },

  tradePage: {
    badge: "بازرگانی TurkeyBridge",
    heading: "خدمات بازرگانی",
    tagline: "تجارت فرامرزی، مهندسی‌شده از ابتدا تا انتها.",
    intro:
      "از درِ کارخانه در استانبول تا انبار در تهران یا بندری در آن سوی دنیا — ما کل عملیات تجاری را اجرا می‌کنیم: تأمین کالا، قراردادها، گمرک، حمل‌ونقل و تسویه. یک میز پاسخگو، سه کریدور، بدون حدس و گمان.",
    ctaQuote: "درخواست استعلام قیمت",
    corridorsTitle: "سه کریدور، یک میز عملیات",
    corridorsSubtitle:
      "در هر کریدوری که خدمات می‌دهیم، شبکه فعال حمل‌کننده‌ها، شرکای گمرکی و کانال‌های بانکی داریم — تا محموله شما طبق برنامه حرکت کند و اسنادتان بار اول تأیید شود.",
    corridors: [
      {
        key: "tr-ir",
        title: "ترکیه ↔ ایران",
        desc: "کریدوری که آن را کوچه به کوچه می‌شناسیم. حمل زمینی، ریلی و ترکیبی با اسناد کامل به ترکی و فارسی در هر دو سوی مرز.",
        points: ["حمل زمینی و ریلی از مرزهای بازرگان و رازی", "اسناد گمرکی دوزبانه در هر دو طرف", "انطباق آگاه به تحریم‌ها و ساختاردهی پرداخت"],
      },
      {
        key: "tr-world",
        title: "ترکیه ↔ جهان",
        desc: "کالای ترکیه را به بازارهای جهانی صادر کنید یا تأمین جهانی را به ترکیه بیاورید — حمل دریایی، هوایی و جاده‌ای با مدیریت درب تا درب.",
        points: ["حمل دریایی FCL/LCL از بنادر ترکیه", "بار هوایی از هاب جهانی استانبول", "مشوق‌های صادراتی و بهینه‌سازی عوارض"],
      },
      {
        key: "ir-world",
        title: "ایران ↔ جهان",
        desc: "تسهیل تجارت میان خریداران و فروشندگان ایرانی و بازارهای جهانی از طریق ساختارهای منطبقِ ترانزیت، صادرات مجدد و واسطه از مسیر ترکیه.",
        points: ["ساختارهای ترانزیت و صادرات مجدد از مسیر ترکیه", "قرارداد شخص ثالث و سازوکارهای امانی (اسکرو)", "اسناد و بازرسی از ابتدا تا انتها"],
      },
    ],
    deliverablesTitle: "خدمات کلیدی",
    deliverablesSubtitle: "هر پروژه حول سه ستون عملیاتی تعریف می‌شود — جداگانه یا به‌صورت یک خط لوله مدیریت‌شده واحد.",
    deliverables: [
      { key: "freight", title: "حمل‌ونقل بین‌المللی و لجستیک", desc: "برنامه‌ریزی حمل چندوجهی — جاده‌ای، ریلی، دریایی و هوایی — با انتخاب حمل‌کننده، بیمه بار، رهگیری لحظه‌ای و تضمین زمان تحویلِ درج‌شده در قرارداد." },
      { key: "customs", title: "ترخیص گمرکی و عملیات واردات/صادرات", desc: "شرکای گمرکی دارای مجوز، تعرفه‌گذاری (HS)، اظهارنامه‌ها، بازرسی‌ها و پرداخت عوارض را انجام می‌دهند و میز ما مجوزها، گواهی مبدأ و انطباق با استانداردها را از ابتدا تا انتها مدیریت می‌کند." },
      { key: "sourcing", title: "تأمین استراتژیک کالا و محصول", desc: "تولیدکنندگان و تأمین‌کنندگان را پیدا، ارزیابی و با آن‌ها مذاکره می‌کنیم — از مواد خام تا کالای نهایی — با ممیزی کارخانه، کنترل نمونه و مقایسه قیمت پیش از تعهد شما." },
    ],
    b2bBadge: "میز تجارت B2B",
    b2bTitle: "ساخته‌شده برای تجارت بنگاه به بنگاه",
    b2bDesc:
      "تخصص ما بسته‌های پستی نیست — قراردادهاست. ما نماینده سازمان‌ها در هر دو سوی میز هستیم و قراردادهای تجاری عمده‌ای تنظیم می‌کنیم که در برابر حسابرسی، عبور از مرز و نوسان ارز دوام می‌آورند.",
    b2bPoints: [
      { key: "consulting", title: "مشاوره مدیریتی سازمانی", desc: "مشاوران ارشد استراتژی تجاری شما را ساختار می‌دهند: انتخاب بازار، قیمت‌گذاری، اینکوترمز و تخصیص ریسک." },
      { key: "contracts", title: "تسهیل قراردادهای تجاری عمده", desc: "تنظیم و مذاکره قراردادهای تأمین سازمانی با طرف‌های ارزیابی‌شده و شروط قابل اجرا." },
      { key: "compliance", title: "انطباق و مدیریت ریسک", desc: "غربالگری تحریم، اعتبار اسنادی، رژیم‌های بازرسی و بیمه — پیش از حرکت کالا مهندسی می‌شود." },
      { key: "network", title: "شبکه سازمانی ارزیابی‌شده", desc: "دسترسی مستقیم به تولیدکنندگان، عمده‌فروشان و اپراتورهای لجستیک در هر سه کریدور." },
    ],
    flowTitle: "یک محموله با ما چگونه پیش می‌رود؟",
    flowSubtitle: "خط لوله مدیریت‌شده پنج‌مرحله‌ای — وضعیت هر مرحله را به زبان خودتان می‌بینید.",
    flow: [
      { title: "استعلام و امکان‌سنجی", desc: "محصول، کریدور، حجم و تصویر مقرراتی را بررسی می‌کنیم و نتیجه مکتوبِ «ادامه یا توقف» را همراه برآورد هزینه تمام‌شده ارائه می‌دهیم." },
      { title: "تأمین و قرارداد", desc: "ارزیابی تأمین‌کننده، نمونه‌ها، مذاکره قیمت و قرارداد دوزبانه با اینکوترمز و جرایم تعریف‌شده." },
      { title: "گمرک و اسناد", desc: "مجوزها، گواهی مبدأ، کدهای HS و اظهارنامه‌ها پیش از حرکت بار آماده و پیش‌تأیید می‌شوند." },
      { title: "حمل و بیمه", desc: "رزرو حمل‌کننده، بیمه بار، نظارت بر بارگیری و رهگیری زنده در طول کریدور." },
      { title: "تحویل و تسویه", desc: "تحویل نهایی، تأیید بازرسی، تسویه پرداخت و تحویل آرشیو کامل اسناد." },
    ],
    form: {
      title: "درخواست استعلام قیمت",
      subtitle: "کالا و کریدور را بگویید — میز بازرگانی ما ظرف یک روز کاری با مسیر پیشنهادی و هزینه تقریبی پاسخ می‌دهد.",
      companyLabel: "شرکت",
      companyPlaceholder: "نام شرکت شما",
      corridorLabel: "کریدور تجاری",
      corridorPlaceholder: "یک کریدور را انتخاب کنید…",
      cargoLabel: "بار / کالا",
      cargoPlaceholder: "مثلاً ماشین‌آلات صنعتی، مواد غذایی، منسوجات…",
      submit: "ارسال استعلام",
    },
  },

  consultationPage: {
    badge: "مشاوره رایگان",
    heading: "شروع مسیر موفقیت در ترکیه",
    subheading:
      "۳۰ دقیقه با یک مشاور ارشد TurkeyBridge — پاسخ‌های صادقانه، قدم بعدی روشن و بدون هیچ تعهدی. به زبان‌های فارسی، ترکی و انگلیسی.",
    formTitle: "از هدف‌تان برایمان بگویید",
    formSubtitle: "فرم را پر کنید تا میز مشاوره ما ظرف یک روز کاری جلسه شما را تأیید کند.",
    phoneHint: "کد کشور را وارد کنید — مثلاً +90 5xx xxx xx xx",
    serviceOptions: [
      { key: "company", label: "ثبت شرکت و امور تجاری" },
      { key: "business", label: "مشاوره کسب‌وکار و مدیریت" },
      { key: "residency", label: "اقامت و مهاجرت" },
      { key: "investment", label: "سرمایه‌گذاری و برنامه‌ریزی مالی" },
      { key: "trade", label: "خدمات بازرگانی (واردات/صادرات)" },
      { key: "academy", label: "آکادمی TurkeyBridge (دوره‌ها)" },
      { key: "other", label: "سایر / هنوز مطمئن نیستم" },
    ],
    submit: "درخواست مشاوره",
    successTitle: "سپاسگزاریم! درخواست شما ثبت شد.",
    successDesc: "مشاوران ما به‌زودی از طریق واتس‌اپ یا ایمیل برای تأیید زمان مشاوره با شما تماس می‌گیرند.",
    benefitsTitle: "چه چیزی در انتظار شماست؟",
    benefits: [
      "ارزیابی اولیه رایگان — مشاوره صادقانه، بدون تعهد",
      "مشاوران ارشد به فارسی، ترکی و انگلیسی",
      "خلاصه مکتوب قدم‌های بعدی پس از جلسه",
    ],
    altTitle: "ارتباط فوری را ترجیح می‌دهید؟",
    altDesc: "مستقیم پیام دهید — هر روز در واتس‌اپ و اینستاگرام پاسخگو هستیم.",
  },

  servicePage: {
    breadcrumb: "خدمات",
    indexTitle: "خدمات مشاوره، از ابتدا تا انتها",
    indexSubtitle:
      "پنج حوزه تخصصی، یک تیم پاسخگو. هر پروژه به‌صورت مکتوب تعریف می‌شود، شفاف قیمت‌گذاری می‌شود و توسط مشاوران ارشد اجرا می‌شود — نه کارآموزانی که روی پرونده شما تمرین می‌کنند.",
    glanceDuration: "بازه زمانی معمول",
    glanceBudget: "شروع هزینه از",
    glanceLanguages: "زبان‌های ارائه خدمات",
    stepsTitle: "روند همکاری چگونه است؟",
    stepsSubtitle: "فرایندی شفاف و مرحله‌محور — همیشه می‌دانید قدم بعدی چیست.",
    documentsTitle: "مدارک مورد نیاز",
    documentsSubtitle: "مدارک را همراه شما تهیه، ترجمه و محضری می‌کنیم.",
    legalTitle: "چارچوب حقوقی و مقرراتی",
    legalSubtitle: "قوانین ترکیه که بر این خدمت حاکم است.",
    ctaTitle: "برای قدم اول آماده‌اید؟",
    ctaDesc: "وقت مشاوره رزرو کنید و ظرف ۴۸ ساعت نقشه راه اختصاصی خود را دریافت کنید.",
    ctaButton: "دریافت مشاوره",
    otherServices: "سایر خدمات را ببینید",
  },

  wizard: {
    stepWord: "گام",
    ofWord: "از",
    durationLabel: "مدت تقریبی",
    docsLabel: "مدارک این مرحله",
    costLabel: "هزینه‌های رسمی (تقریبی)",
    prev: "قبلی",
    next: "گام بعدی",
    estimatorTitle: "برآورد فوری هزینه",
    estimatorSubtitle: "ارقام به دلار آمریکا و تقریبی است. مبلغ دقیق در جلسه مشاوره رایگان نهایی می‌شود.",
    entityLabel: "نوع شرکت",
    llc: "مسئولیت محدود (LTD)",
    jsc: "سهامی خاص (A.Ş.)",
    llcNote: "حداقل سرمایه ۵۰٬۰۰۰ لیر",
    jscNote: "حداقل سرمایه ۲۵۰٬۰۰۰ لیر",
    shareholdersLabel: "تعداد شرکا",
    addonsLabel: "خدمات تکمیلی اختیاری",
    addonPermit: "درخواست اجازه کار",
    addonAccounting: "حسابداری سال اول (SMMM)",
    addonOffice: "آدرس دفتر مجازی (یک سال)",
    serviceFee: "حق‌الزحمه TurkeyBridge",
    officialFees: "هزینه‌های رسمی و محضری",
    totalLabel: "جمع برآوردی",
    totalNote: "حداقل سرمایه ثبتی — که دارایی خود شرکت شما باقی می‌ماند — در این مبلغ لحاظ نشده است.",
    checklistTitle: "چک‌لیست کامل مدارک",
    checklistSubtitle: "هر مدرکی را که آماده کردید علامت بزنید — بقیه را با هم انجام می‌دهیم.",
    readyLabel: "آماده",
    cta: "شروع ثبت شرکت من",
  },

  coursePage: {
    breadcrumb: "آکادمی",
    tabOverview: "معرفی و مخاطبان",
    tabCurriculum: "سرفصل‌های دوره",
    tabCertification: "گواهینامه و اعتبار",
    audienceTitle: "این دوره برای چه کسانی است؟",
    outcomesTitle: "در پایان دوره چه به دست می‌آورید؟",
    moduleWord: "ماژول",
    glanceDuration: "مدت دوره",
    glanceLevel: "سطح",
    glanceFormat: "شیوه برگزاری",
    glanceLanguage: "زبان‌ها",
    enroll: "ثبت‌نام در دوره",
    ask: "درباره این دوره بپرسید",
    certTitle: "گواهینامه‌ای در سطح بازار کار، با قابلیت استعلام بین‌المللی",
    certPoints: [
      { title: "گواهی پایان دوره تأییدشده", desc: "با شناسه یکتا و کد QR صادر می‌شود — توسط هر کارفرما یا مؤسسه‌ای در سراسر جهان به‌صورت آنلاین قابل استعلام است." },
      { title: "اعتبار بین‌المللی", desc: "گواهینامه‌ها دوزبانه (انگلیسی و ترکی) و منطبق با استانداردهای پیوست مدرک اروپایی صادر می‌شوند." },
      { title: "نمونه‌کار مهم‌تر از کاغذ", desc: "با پروژه‌های واقعی و اجراشده فارغ‌التحصیل می‌شوید. گواهی در را باز می‌کند؛ نمونه‌کار شما قرارداد را می‌بندد." },
      { title: "اعتبارسنجی مادام‌العمر", desc: "استعلام گواهی برای همیشه در پرتال اعتبارسنجی ما فعال می‌ماند — بدون تمدید و بدون تاریخ انقضا." },
    ],
    credentialLabel: "عنوان اعطایی",
    relatedTitle: "دوره‌های بیشتر را ببینید",
  },

  academyLanding: {
    gridTitle: "همه دوره‌ها",
    gridSubtitle: "کلاس‌های زنده به فارسی، ترکی و انگلیسی — آنلاین یا در پردیس ماسلاک.",
    ctaTitle: "مطمئن نیستید کدام دوره مناسب شماست؟",
    ctaDesc: "با مشاور آکادمی صحبت کنید — در یک تماس رایگان ۱۵ دقیقه‌ای، مسیر درست را بر اساس سابقه شما مشخص می‌کنیم.",
    ctaButton: "گفت‌وگو با مشاور",
  },
};

/* ------------------------------- accessor ------------------------------- */

const dictionaries: Record<Locale, Dictionary> = { en, tr, fa };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
