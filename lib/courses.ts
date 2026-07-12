import type { Locale } from "./i18n";

/* =========================================================================
   TurkeyBridge Academy — course detail content (EN/TR/FA)
   ========================================================================= */

export interface CourseContent {
  slug: string;
  key: string; // icon key (components/icons.ts)
  title: string;
  tagline: string;
  intro: string;
  glance: { duration: string; level: string; format: string; language: string };
  audience: string[];
  outcomes: string[];
  modules: { title: string; topics: string[] }[];
  credential: string;
}

export const courseSlugs = [
  "artificial-intelligence",
  "software-development",
  "website-creation",
  "digital-marketing",
  "videography",
  "video-editing",
  "social-media",
  "turkish-language",
] as const;
export type CourseSlug = (typeof courseSlugs)[number];

/* ============================== ENGLISH ============================== */

const coursesEn: Record<CourseSlug, CourseContent> = {
  "artificial-intelligence": {
    slug: "artificial-intelligence",
    key: "ai",
    title: "Artificial Intelligence: Automation, Engineering & SEO",
    tagline: "Build with AI, automate with AI, and rank with AI — one practical program.",
    intro:
      "AI is the highest-leverage skill of the decade, and most people are still only prompting chatbots. This program takes you from user to builder: automating real business processes, engineering AI features on your own data, and running content operations that dominate search.",
    glance: { duration: "10 weeks", level: "Beginner → Advanced", format: "Live online + Maslak campus", language: "FA · TR · EN" },
    audience: [
      "Professionals who want to automate their daily workflows and multiply their output",
      "Developers and marketers adding AI capabilities to their existing stack",
      "Founders validating and shipping AI product ideas",
    ],
    outcomes: [
      "Ship a working AI automation serving a real business process",
      "Build and deploy a retrieval-augmented (RAG) assistant on your own data",
      "Run an AI-driven SEO content engine end to end",
    ],
    modules: [
      { title: "Foundations of Modern AI", topics: ["How LLMs actually work — tokens, context windows, and cost", "Prompt engineering that survives production", "The AI tooling landscape: APIs, wrappers, and agents"] },
      { title: "AI Automation", topics: ["No-code pipelines with n8n and Make", "Multi-step agents for sales, support, and operations", "Connecting AI to email, spreadsheets, CRMs, and WhatsApp"] },
      { title: "AI Engineering", topics: ["Python for AI: calling and chaining model APIs", "RAG: embeddings, vector stores, and retrieval quality", "Evaluation, guardrails, and cost control"] },
      { title: "AI-Powered SEO", topics: ["Programmatic content at scale — without penalties", "Search-intent modeling and topical authority", "Automated internal linking and content refreshes"] },
      { title: "Capstone: Ship an AI Product", topics: ["Scope, build, and demo a real AI tool", "Deployment, pricing, and positioning", "Portfolio presentation and expert review"] },
    ],
    credential: "TurkeyBridge Certified AI Practitioner",
  },

  "software-development": {
    slug: "software-development",
    key: "software",
    title: "Software Development & Coding",
    tagline: "From your first line of code to a deployed product — job-ready in one program.",
    intro:
      "This is not a tutorial marathon; it's an apprenticeship. You'll write code from day one, build real applications with professional workflows, and graduate with a deployed portfolio that hiring managers can click, not just read about.",
    glance: { duration: "14 weeks", level: "Beginner-friendly", format: "Live online + Maslak campus", language: "FA · TR · EN" },
    audience: [
      "Career changers who want a structured, mentored path into tech",
      "Students supplementing university theory with employable practice",
      "Entrepreneurs who want to build their own product without outsourcing",
    ],
    outcomes: [
      "Build and deploy full-stack web applications",
      "Collaborate with Git, code review, and professional team workflows",
      "Graduate with a portfolio of production-deployed projects",
    ],
    modules: [
      { title: "Programming Foundations", topics: ["Logic, data structures, and problem decomposition", "JavaScript and Python fundamentals", "Debugging like a professional"] },
      { title: "Backend Engineering", topics: ["REST APIs with Node.js", "Databases: SQL and data modeling", "Authentication and security essentials"] },
      { title: "Frontend with React", topics: ["Components, state, and hooks", "Tailwind CSS and responsive interfaces", "Consuming APIs and handling real data"] },
      { title: "Professional Workflow", topics: ["Git, GitHub, and code review culture", "Testing fundamentals", "CI/CD and cloud deployment"] },
      { title: "Capstone Team Project", topics: ["An agile sprint on a real client brief", "Code review and refactoring cycles", "Demo day and portfolio packaging"] },
    ],
    credential: "TurkeyBridge Certified Full-Stack Developer",
  },

  "website-creation": {
    slug: "website-creation",
    key: "web",
    title: "Website Creation & Architecture",
    tagline: "Design, build, and launch fast, beautiful, search-ready websites for real clients.",
    intro:
      "Every business on earth needs a website that loads fast, looks premium, and converts. This course teaches the complete craft — from information architecture and design systems to modern frameworks, performance, and the client skills to get paid for all of it.",
    glance: { duration: "8 weeks", level: "Beginner → Intermediate", format: "Live online + Maslak campus", language: "FA · TR · EN" },
    audience: [
      "Freelancers building a web-design service business",
      "Marketers and founders who want full control of their web presence",
      "Designers adding development skills to their toolkit",
    ],
    outcomes: [
      "Launch complete, responsive, multi-page websites from scratch",
      "Score 90+ on Core Web Vitals with clean, semantic builds",
      "Package, price, and deliver website projects for paying clients",
    ],
    modules: [
      { title: "UX & Information Architecture", topics: ["User journeys and conversion-first page structure", "Wireframing from brief to blueprint", "Accessibility as a design foundation"] },
      { title: "Design to Code", topics: ["Design systems: color, type, spacing", "Figma to Tailwind CSS workflows", "Responsive and RTL-aware layouts"] },
      { title: "Building with Modern Frameworks", topics: ["Next.js pages, routing, and components", "Content management and dynamic data", "Forms, integrations, and analytics"] },
      { title: "Performance, SEO & Launch", topics: ["Core Web Vitals and image optimization", "Technical SEO and structured data", "Domains, hosting, and go-live checklists"] },
      { title: "Client Work & Portfolio", topics: ["Scoping, quoting, and contracts", "Client revision workflows", "Portfolio site and first-client strategy"] },
    ],
    credential: "TurkeyBridge Certified Web Architect",
  },

  "digital-marketing": {
    slug: "digital-marketing",
    key: "marketing",
    title: "Digital Marketing & Growth Hacking",
    tagline: "Full-funnel growth: traffic, conversion, retention — measured in revenue, not likes.",
    intro:
      "Marketing budgets are wasted by people who confuse activity with results. This program builds operators: you'll run real campaigns, read real dashboards, and learn the experiment-driven growth process used by the fastest-growing companies.",
    glance: { duration: "8 weeks", level: "Beginner → Intermediate", format: "Live online + Maslak campus", language: "FA · TR · EN" },
    audience: [
      "Business owners who want customer acquisition they control",
      "Marketing employees moving from execution to strategy",
      "Freelancers building a performance-marketing service",
    ],
    outcomes: [
      "Plan and launch paid campaigns on Meta and Google with confident budgets",
      "Build a content and SEO engine that compounds monthly",
      "Run growth experiments and report results in revenue terms",
    ],
    modules: [
      { title: "Growth Strategy & Funnels", topics: ["Positioning and offer design", "Funnel mapping: awareness to retention", "Unit economics: CAC, LTV, and payback"] },
      { title: "Performance Advertising", topics: ["Meta Ads: creative testing and scaling", "Google Ads: search intent capture", "Landing pages that convert"] },
      { title: "Content & SEO Engines", topics: ["Keyword research and topical maps", "Content production systems", "Link building and digital PR"] },
      { title: "Analytics & Attribution", topics: ["GA4 setup and event tracking", "Dashboards that drive decisions", "Attribution models and their limits"] },
      { title: "Growth Experiment Sprints", topics: ["Hypothesis design and prioritization", "A/B testing in practice", "Final campaign: live results review"] },
    ],
    credential: "TurkeyBridge Certified Growth Marketer",
  },

  videography: {
    slug: "videography",
    key: "videography",
    title: "Professional Videography & Photography",
    tagline: "Master the camera, the light, and the story — commercial-grade production skills.",
    intro:
      "Brands pay premium rates for imagery that sells, and the gap between amateur and professional is technique, not equipment. This hands-on program covers camera craft, lighting, sound, and directing — with real shoots every single week.",
    glance: { duration: "8 weeks", level: "Beginner → Intermediate", format: "Maslak campus (studio) + field shoots", language: "FA · TR · EN" },
    audience: [
      "Aspiring videographers and photographers building a paid craft",
      "Content creators upgrading from phone footage to professional production",
      "Business owners producing their own commercial media",
    ],
    outcomes: [
      "Operate cameras confidently in manual mode in any lighting condition",
      "Light and direct interview, product, and event shoots",
      "Deliver a commercial-grade portfolio shot during the course",
    ],
    modules: [
      { title: "Camera Craft", topics: ["Exposure triangle mastered: ISO, aperture, shutter", "Lenses, focal lengths, and depth of field", "Picture profiles and shooting for the edit"] },
      { title: "Lighting & Composition", topics: ["Three-point and natural-light setups", "Composition rules — and when to break them", "Color temperature and mood"] },
      { title: "Location Sound", topics: ["Microphone types and placement", "Recording clean dialogue on location", "Sync and backup workflows"] },
      { title: "Directing Real Shoots", topics: ["Pre-production: shot lists and storyboards", "Directing talent and clients", "Commercial, interview, and event scenarios"] },
      { title: "Portfolio Production Week", topics: ["A full production from brief to delivery", "Working in crew roles", "Portfolio review with working professionals"] },
    ],
    credential: "TurkeyBridge Certified Visual Production Professional",
  },

  "video-editing": {
    slug: "video-editing",
    key: "editing",
    title: "Video Editing & Post-Production",
    tagline: "Cut, grade, and finish work that clients pay premium rates for.",
    intro:
      "Editing is where footage becomes story — and where most video careers are actually made. From timeline fundamentals to color grading, motion graphics, and sound design, you'll finish real projects to broadcast standards.",
    glance: { duration: "8 weeks", level: "Beginner → Intermediate", format: "Live online + Maslak campus", language: "FA · TR · EN" },
    audience: [
      "Editors building freelance or agency careers",
      "Videographers adding post-production to their service",
      "Social media creators who need faster, sharper output",
    ],
    outcomes: [
      "Edit confidently in Premiere Pro and DaVinci Resolve",
      "Grade footage to a consistent, cinematic standard",
      "Deliver client-ready masters for every platform and format",
    ],
    modules: [
      { title: "Editing Foundations", topics: ["Premiere Pro and DaVinci Resolve workflows", "Project organization and proxy editing", "Cuts, transitions, and timing fundamentals"] },
      { title: "Storytelling & Rhythm", topics: ["Structure: hook, tension, payoff", "Pacing for ads, films, and social", "Editing to music and dialogue"] },
      { title: "Color Grading", topics: ["Color correction vs. creative grading", "Scopes, LUTs, and skin tones", "Matching multi-camera footage"] },
      { title: "Motion Graphics & Sound Design", topics: ["Titles, lower thirds, and animated logos", "Keyframing and easing", "Sound layering, mixing, and mastering"] },
      { title: "Client Delivery & Career", topics: ["Export settings for every platform", "Revision workflows and feedback rounds", "Pricing, portfolio, and finding clients"] },
    ],
    credential: "TurkeyBridge Certified Post-Production Editor",
  },

  "social-media": {
    slug: "social-media",
    key: "social",
    title: "Social Media Strategy & Management",
    tagline: "Turn scrolling audiences into communities — and communities into customers.",
    intro:
      "Anyone can post; very few can grow. This course builds professional social media managers: platform strategy, content systems that never run dry, community craft, paid amplification, and the reporting skills that keep clients paying.",
    glance: { duration: "6 weeks", level: "All levels", format: "Live online + Maslak campus", language: "FA · TR · EN" },
    audience: [
      "Aspiring social media managers building a client-ready skill set",
      "Business owners running their own brand channels",
      "Marketers adding organic social to their strategy toolkit",
    ],
    outcomes: [
      "Design a full-funnel social strategy for any brand",
      "Run a 30-day content system with batching and scheduling",
      "Present monthly performance reports that clients understand and value",
    ],
    modules: [
      { title: "Platform Strategy", topics: ["Instagram, TikTok, LinkedIn, YouTube: who wins where", "Algorithm mechanics and signal optimization", "Competitive audits and positioning"] },
      { title: "Content Systems", topics: ["Content pillars and the 30-day calendar", "Batch production workflows", "Hooks, captions, and creative formats"] },
      { title: "Community & Brand Voice", topics: ["Voice guides and response playbooks", "DM funnels and community rituals", "Crisis and reputation management"] },
      { title: "Paid Amplification", topics: ["Boosting vs. ads manager", "Retargeting warm audiences", "Influencer and creator collaborations"] },
      { title: "Analytics & Reporting", topics: ["Metrics that matter vs. vanity metrics", "Monthly client report templates", "Turning insights into next month's plan"] },
    ],
    credential: "TurkeyBridge Certified Social Media Strategist",
  },

  "turkish-language": {
    slug: "turkish-language",
    key: "turkish",
    title: "Turkish Language — İstanbul Türkçesi",
    tagline: "Business and daily-life Turkish, taught by a native İstanbul instructor fluent in Persian.",
    intro:
      "Life in Turkey opens up the moment you speak Turkish — at the bank, in the market, and across the negotiating table. Our program is led by a native İstanbul-Turkish instructor who is fully fluent in Persian, so grammar is explained in your language while your accent is shaped by the real İstanbul standard.",
    glance: { duration: "12 weeks per level", level: "A1 → B2", format: "Maslak campus + live online", language: "FA · TR" },
    audience: [
      "Newcomers to Turkey who want independence in daily life",
      "Professionals working with Turkish colleagues, clients, or authorities",
      "Students preparing for TÖMER and university study in Turkish",
    ],
    outcomes: [
      "Handle daily life confidently: bureaucracy, shopping, healthcare, and social settings",
      "Conduct business meetings, calls, and written correspondence in Turkish",
      "Sit TÖMER-aligned certification exams with a documented level",
    ],
    modules: [
      { title: "Foundations (A1)", topics: ["İstanbul pronunciation and vowel harmony", "Survival Turkish: transport, shopping, greetings", "Numbers, time, and daily routines"] },
      { title: "Everyday Life (A2)", topics: ["Bureaucracy Turkish: bank, hospital, Göç İdaresi", "Renting, bills, and neighborhood life", "Small talk and Turkish social culture"] },
      { title: "Business Turkish (B1)", topics: ["Meetings, negotiations, and phone etiquette", "Professional email and correspondence", "Sector vocabulary tailored to your work"] },
      { title: "Culture & Fluency (B2)", topics: ["İstanbul idioms and humor", "Media immersion: news, series, podcasts", "Presentation and debate practice"] },
      { title: "TÖMER & Certification Prep", topics: ["Exam format and strategy", "Full mock exams with instructor feedback", "Final level assessment and certification"] },
    ],
    credential: "İstanbul Türkçesi Proficiency Certificate (TÖMER-aligned)",
  },
};

/* ============================== TURKISH ============================== */

const coursesTr: Record<CourseSlug, CourseContent> = {
  "artificial-intelligence": {
    slug: "artificial-intelligence",
    key: "ai",
    title: "Yapay Zeka: Otomasyon, Mühendislik ve SEO",
    tagline: "Yapay zekayla üretin, otomatikleştirin ve aramada yükselin — tek pratik program.",
    intro:
      "Yapay zeka bu on yılın en yüksek kaldıraçlı becerisi; oysa çoğu insan hâlâ sadece sohbet botlarına soru soruyor. Bu program sizi kullanıcıdan üreticiye dönüştürür: gerçek iş süreçlerini otomatikleştirecek, kendi verinizle yapay zeka özellikleri geliştirecek ve aramaya hükmeden içerik operasyonları yöneteceksiniz.",
    glance: { duration: "10 hafta", level: "Başlangıç → İleri", format: "Canlı online + Maslak kampüs", language: "FA · TR · EN" },
    audience: [
      "Günlük iş akışlarını otomatikleştirip üretkenliğini katlamak isteyen profesyoneller",
      "Mevcut araç setine yapay zeka yetenekleri ekleyen geliştiriciler ve pazarlamacılar",
      "Yapay zeka ürün fikirlerini doğrulayıp hayata geçiren girişimciler",
    ],
    outcomes: [
      "Gerçek bir iş sürecine hizmet eden, çalışan bir yapay zeka otomasyonu teslim edin",
      "Kendi veriniz üzerinde RAG tabanlı bir asistan geliştirip yayınlayın",
      "Uçtan uca yapay zeka destekli bir SEO içerik motoru yönetin",
    ],
    modules: [
      { title: "Modern Yapay Zekanın Temelleri", topics: ["LLM'ler gerçekte nasıl çalışır — token, bağlam penceresi ve maliyet", "Üretim ortamında ayakta kalan prompt mühendisliği", "Yapay zeka araç ekosistemi: API'ler, sarmalayıcılar, ajanlar"] },
      { title: "Yapay Zeka Otomasyonu", topics: ["n8n ve Make ile kodsuz otomasyon hatları", "Satış, destek ve operasyon için çok adımlı ajanlar", "Yapay zekayı e-posta, tablolar, CRM ve WhatsApp'a bağlama"] },
      { title: "Yapay Zeka Mühendisliği", topics: ["Yapay zeka için Python: model API'lerini çağırma ve zincirleme", "RAG: gömme vektörleri, vektör veritabanları, getirme kalitesi", "Değerlendirme, güvenlik bariyerleri ve maliyet kontrolü"] },
      { title: "Yapay Zeka Destekli SEO", topics: ["Ceza yemeden ölçekli programatik içerik", "Arama niyeti modelleme ve konu otoritesi", "Otomatik iç bağlantı ve içerik yenileme"] },
      { title: "Bitirme Projesi: Bir Yapay Zeka Ürünü Yayınlayın", topics: ["Gerçek bir yapay zeka aracını kapsamlayın, geliştirin, sunun", "Yayınlama, fiyatlandırma ve konumlandırma", "Portfolyo sunumu ve uzman değerlendirmesi"] },
    ],
    credential: "TurkeyBridge Sertifikalı Yapay Zeka Uygulayıcısı",
  },

  "software-development": {
    slug: "software-development",
    key: "software",
    title: "Yazılım Geliştirme ve Kodlama",
    tagline: "İlk kod satırınızdan yayındaki ürüne — tek programda işe hazır.",
    intro:
      "Bu bir eğitim videosu maratonu değil, bir çıraklık programıdır. İlk günden kod yazacak, profesyonel iş akışlarıyla gerçek uygulamalar geliştirecek ve işe alım yöneticilerinin sadece okumakla kalmayıp tıklayabileceği, yayında bir portfolyoyla mezun olacaksınız.",
    glance: { duration: "14 hafta", level: "Başlangıç dostu", format: "Canlı online + Maslak kampüs", language: "FA · TR · EN" },
    audience: [
      "Teknolojiye yapılandırılmış ve mentorlu bir yoldan geçmek isteyen kariyer değiştirenler",
      "Üniversite teorisini istihdam edilebilir pratikle tamamlayan öğrenciler",
      "Ürününü dışarıya yaptırmadan kendisi geliştirmek isteyen girişimciler",
    ],
    outcomes: [
      "Full-stack web uygulamaları geliştirin ve yayınlayın",
      "Git, kod incelemesi ve profesyonel ekip akışlarıyla çalışın",
      "Üretim ortamında yayınlanmış projelerden oluşan bir portfolyoyla mezun olun",
    ],
    modules: [
      { title: "Programlama Temelleri", topics: ["Mantık, veri yapıları ve problem ayrıştırma", "JavaScript ve Python temelleri", "Profesyonel gibi hata ayıklama"] },
      { title: "Backend Mühendisliği", topics: ["Node.js ile REST API'ler", "Veritabanları: SQL ve veri modelleme", "Kimlik doğrulama ve güvenlik esasları"] },
      { title: "React ile Frontend", topics: ["Bileşenler, state ve hook'lar", "Tailwind CSS ve duyarlı arayüzler", "API tüketimi ve gerçek veriyle çalışma"] },
      { title: "Profesyonel İş Akışı", topics: ["Git, GitHub ve kod inceleme kültürü", "Test temelleri", "CI/CD ve bulut dağıtımı"] },
      { title: "Bitirme Takım Projesi", topics: ["Gerçek bir müşteri brifiyle çevik sprint", "Kod incelemesi ve yeniden düzenleme döngüleri", "Demo günü ve portfolyo paketleme"] },
    ],
    credential: "TurkeyBridge Sertifikalı Full-Stack Geliştirici",
  },

  "website-creation": {
    slug: "website-creation",
    key: "web",
    title: "Web Sitesi Tasarımı ve Mimarisi",
    tagline: "Gerçek müşteriler için hızlı, şık ve aramaya hazır web siteleri tasarlayın, geliştirin, yayınlayın.",
    intro:
      "Dünyadaki her işletmenin hızlı yüklenen, premium görünen ve dönüşüm sağlayan bir web sitesine ihtiyacı var. Bu kurs zanaatın tamamını öğretir — bilgi mimarisi ve tasarım sistemlerinden modern çatılara, performansa ve tüm bunların karşılığını almanızı sağlayacak müşteri becerilerine kadar.",
    glance: { duration: "8 hafta", level: "Başlangıç → Orta", format: "Canlı online + Maslak kampüs", language: "FA · TR · EN" },
    audience: [
      "Web tasarım hizmeti işi kuran serbest çalışanlar",
      "Web varlığının tam kontrolünü isteyen pazarlamacılar ve kurucular",
      "Araç setine geliştirme becerisi ekleyen tasarımcılar",
    ],
    outcomes: [
      "Sıfırdan eksiksiz, duyarlı, çok sayfalı web siteleri yayınlayın",
      "Temiz ve semantik yapılarla Core Web Vitals'ta 90+ puan alın",
      "Ücretli müşteriler için web projelerini paketleyin, fiyatlandırın ve teslim edin",
    ],
    modules: [
      { title: "UX ve Bilgi Mimarisi", topics: ["Kullanıcı yolculukları ve dönüşüm odaklı sayfa yapısı", "Briften taslağa wireframe süreci", "Tasarım temeli olarak erişilebilirlik"] },
      { title: "Tasarımdan Koda", topics: ["Tasarım sistemleri: renk, tipografi, boşluk", "Figma'dan Tailwind CSS'e iş akışları", "Duyarlı ve RTL uyumlu yerleşimler"] },
      { title: "Modern Çatılarla Geliştirme", topics: ["Next.js sayfaları, yönlendirme ve bileşenler", "İçerik yönetimi ve dinamik veri", "Formlar, entegrasyonlar ve analitik"] },
      { title: "Performans, SEO ve Yayın", topics: ["Core Web Vitals ve görsel optimizasyonu", "Teknik SEO ve yapılandırılmış veri", "Alan adı, barındırma ve yayın kontrol listeleri"] },
      { title: "Müşteri İşleri ve Portfolyo", topics: ["Kapsamlama, teklif ve sözleşmeler", "Müşteri revizyon akışları", "Portfolyo sitesi ve ilk müşteri stratejisi"] },
    ],
    credential: "TurkeyBridge Sertifikalı Web Mimarı",
  },

  "digital-marketing": {
    slug: "digital-marketing",
    key: "marketing",
    title: "Dijital Pazarlama ve Growth Hacking",
    tagline: "Tam huni büyüme: trafik, dönüşüm, sadakat — beğeniyle değil, ciroyla ölçülür.",
    intro:
      "Pazarlama bütçeleri, faaliyeti sonuçla karıştıranlar tarafından israf edilir. Bu program operatör yetiştirir: gerçek kampanyalar yönetecek, gerçek panoları okuyacak ve en hızlı büyüyen şirketlerin kullandığı deney odaklı büyüme sürecini öğreneceksiniz.",
    glance: { duration: "8 hafta", level: "Başlangıç → Orta", format: "Canlı online + Maslak kampüs", language: "FA · TR · EN" },
    audience: [
      "Kontrolü kendinde olan bir müşteri kazanımı isteyen işletme sahipleri",
      "Uygulamadan stratejiye geçen pazarlama çalışanları",
      "Performans pazarlaması hizmeti kuran serbest çalışanlar",
    ],
    outcomes: [
      "Meta ve Google'da güvenle bütçelenmiş ücretli kampanyalar planlayıp başlatın",
      "Her ay bileşik büyüyen bir içerik ve SEO motoru kurun",
      "Büyüme deneyleri yürütün ve sonuçları ciro diliyle raporlayın",
    ],
    modules: [
      { title: "Büyüme Stratejisi ve Huniler", topics: ["Konumlandırma ve teklif tasarımı", "Huni haritalama: farkındalıktan sadakate", "Birim ekonomisi: CAC, LTV ve geri ödeme süresi"] },
      { title: "Performans Reklamcılığı", topics: ["Meta Ads: kreatif testi ve ölçekleme", "Google Ads: arama niyetini yakalama", "Dönüşüm sağlayan açılış sayfaları"] },
      { title: "İçerik ve SEO Motorları", topics: ["Anahtar kelime araştırması ve konu haritaları", "İçerik üretim sistemleri", "Bağlantı inşası ve dijital PR"] },
      { title: "Analitik ve Atıf", topics: ["GA4 kurulumu ve olay takibi", "Karar aldıran panolar", "Atıf modelleri ve sınırları"] },
      { title: "Büyüme Deney Sprintleri", topics: ["Hipotez tasarımı ve önceliklendirme", "Pratikte A/B testi", "Final kampanyası: canlı sonuç incelemesi"] },
    ],
    credential: "TurkeyBridge Sertifikalı Büyüme Pazarlamacısı",
  },

  videography: {
    slug: "videography",
    key: "videography",
    title: "Profesyonel Videografi ve Fotoğrafçılık",
    tagline: "Kameraya, ışığa ve hikayeye hükmedin — ticari düzeyde prodüksiyon becerileri.",
    intro:
      "Markalar satan görseller için premium ücretler öder; amatörle profesyonel arasındaki fark ekipman değil tekniktir. Bu uygulamalı program kamera zanaatını, ışığı, sesi ve yönetmenliği kapsar — her hafta gerçek çekimlerle.",
    glance: { duration: "8 hafta", level: "Başlangıç → Orta", format: "Maslak kampüs (stüdyo) + saha çekimleri", language: "FA · TR · EN" },
    audience: [
      "Ücretli bir zanaat inşa eden videografi ve fotoğraf meraklıları",
      "Telefon görüntüsünden profesyonel prodüksiyona geçen içerik üreticileri",
      "Kendi ticari medyasını üreten işletme sahipleri",
    ],
    outcomes: [
      "Her ışık koşulunda manuel modda güvenle çekim yapın",
      "Röportaj, ürün ve etkinlik çekimlerini ışıklandırın ve yönetin",
      "Kurs sırasında çekilmiş ticari düzeyde bir portfolyo teslim edin",
    ],
    modules: [
      { title: "Kamera Zanaatı", topics: ["Pozlama üçgeni: ISO, diyafram, enstantane", "Lensler, odak uzaklıkları ve alan derinliği", "Renk profilleri ve kurguya göre çekim"] },
      { title: "Işık ve Kompozisyon", topics: ["Üç nokta ve doğal ışık kurulumları", "Kompozisyon kuralları — ve ne zaman çiğneneceği", "Renk sıcaklığı ve atmosfer"] },
      { title: "Mekanda Ses", topics: ["Mikrofon türleri ve yerleşimi", "Mekanda temiz diyalog kaydı", "Senkron ve yedekleme akışları"] },
      { title: "Gerçek Çekim Yönetimi", topics: ["Ön prodüksiyon: çekim listeleri ve storyboard", "Oyuncu ve müşteri yönetimi", "Reklam, röportaj ve etkinlik senaryoları"] },
      { title: "Portfolyo Prodüksiyon Haftası", topics: ["Briften teslimata tam bir prodüksiyon", "Ekip rollerinde çalışma", "Sektör profesyonelleriyle portfolyo incelemesi"] },
    ],
    credential: "TurkeyBridge Sertifikalı Görsel Prodüksiyon Uzmanı",
  },

  "video-editing": {
    slug: "video-editing",
    key: "editing",
    title: "Video Kurgu ve Post-Prodüksiyon",
    tagline: "Müşterilerin premium ücret ödediği işleri kesin, renklendirin ve tamamlayın.",
    intro:
      "Kurgu, görüntünün hikayeye dönüştüğü yerdir — ve çoğu video kariyeri aslında burada kurulur. Zaman çizelgesi temellerinden renk düzenlemeye, hareketli grafiklere ve ses tasarımına kadar gerçek projeleri yayın standartlarında tamamlayacaksınız.",
    glance: { duration: "8 hafta", level: "Başlangıç → Orta", format: "Canlı online + Maslak kampüs", language: "FA · TR · EN" },
    audience: [
      "Serbest veya ajans kariyeri inşa eden kurgucular",
      "Hizmetine post-prodüksiyon ekleyen videograflar",
      "Daha hızlı ve keskin çıktıya ihtiyaç duyan sosyal medya üreticileri",
    ],
    outcomes: [
      "Premiere Pro ve DaVinci Resolve'de güvenle kurgu yapın",
      "Görüntüyü tutarlı, sinematik bir standarda renklendirin",
      "Her platform ve format için müşteriye hazır master teslim edin",
    ],
    modules: [
      { title: "Kurgu Temelleri", topics: ["Premiere Pro ve DaVinci Resolve iş akışları", "Proje organizasyonu ve proxy kurgu", "Kesme, geçiş ve zamanlama temelleri"] },
      { title: "Hikaye ve Ritim", topics: ["Yapı: kanca, gerilim, ödül", "Reklam, film ve sosyal için tempo", "Müziğe ve diyaloğa göre kurgu"] },
      { title: "Renk Düzenleme", topics: ["Renk düzeltme ile yaratıcı renklendirme farkı", "Skoplar, LUT'lar ve ten renkleri", "Çok kameralı görüntü eşleme"] },
      { title: "Hareketli Grafik ve Ses Tasarımı", topics: ["Jenerikler, alt yazı bantları ve animasyonlu logolar", "Keyframe ve yumuşatma", "Ses katmanlama, miksaj ve mastering"] },
      { title: "Müşteri Teslimi ve Kariyer", topics: ["Her platform için dışa aktarma ayarları", "Revizyon akışları ve geri bildirim turları", "Fiyatlandırma, portfolyo ve müşteri bulma"] },
    ],
    credential: "TurkeyBridge Sertifikalı Post-Prodüksiyon Kurgucusu",
  },

  "social-media": {
    slug: "social-media",
    key: "social",
    title: "Sosyal Medya Stratejisi ve Yönetimi",
    tagline: "Kaydıran kitleleri topluluklara — toplulukları müşterilere dönüştürün.",
    intro:
      "Herkes paylaşım yapabilir; çok azı büyütebilir. Bu kurs profesyonel sosyal medya yöneticileri yetiştirir: platform stratejisi, asla tükenmeyen içerik sistemleri, topluluk zanaatı, ücretli güçlendirme ve müşterileri elde tutan raporlama becerileri.",
    glance: { duration: "6 hafta", level: "Tüm seviyeler", format: "Canlı online + Maslak kampüs", language: "FA · TR · EN" },
    audience: [
      "Müşteriye hazır beceri seti kuran sosyal medya yöneticisi adayları",
      "Kendi marka kanallarını yöneten işletme sahipleri",
      "Strateji setine organik sosyal medyayı ekleyen pazarlamacılar",
    ],
    outcomes: [
      "Herhangi bir marka için tam huni sosyal medya stratejisi tasarlayın",
      "Toplu üretim ve planlamayla 30 günlük içerik sistemi yürütün",
      "Müşterilerin anladığı ve değer verdiği aylık performans raporları sunun",
    ],
    modules: [
      { title: "Platform Stratejisi", topics: ["Instagram, TikTok, LinkedIn, YouTube: kim nerede kazanır", "Algoritma mekaniği ve sinyal optimizasyonu", "Rakip denetimleri ve konumlandırma"] },
      { title: "İçerik Sistemleri", topics: ["İçerik sütunları ve 30 günlük takvim", "Toplu üretim iş akışları", "Kancalar, açıklamalar ve kreatif formatlar"] },
      { title: "Topluluk ve Marka Sesi", topics: ["Ses rehberleri ve yanıt playbook'ları", "DM hunileri ve topluluk ritüelleri", "Kriz ve itibar yönetimi"] },
      { title: "Ücretli Güçlendirme", topics: ["Boost ile reklam yöneticisi farkı", "Sıcak kitlelere yeniden hedefleme", "Influencer ve üretici iş birlikleri"] },
      { title: "Analitik ve Raporlama", topics: ["Önemli metrikler ile gösteriş metrikleri", "Aylık müşteri rapor şablonları", "İçgörüleri gelecek ayın planına dönüştürme"] },
    ],
    credential: "TurkeyBridge Sertifikalı Sosyal Medya Stratejisti",
  },

  "turkish-language": {
    slug: "turkish-language",
    key: "turkish",
    title: "Türkçe — İstanbul Türkçesi",
    tagline: "İş ve günlük yaşam Türkçesi — Farsçayı akıcı konuşan İstanbullu ana dil eğitmeniyle.",
    intro:
      "Türkiye'de hayat, Türkçe konuştuğunuz anda açılır — bankada, pazarda ve müzakere masasında. Programımız, Farsçaya tam hakim, İstanbul Türkçesini ana dili olarak konuşan bir eğitmen tarafından yürütülür: dil bilgisi sizin dilinizde anlatılır, aksanınız gerçek İstanbul standardıyla şekillenir.",
    glance: { duration: "Seviye başına 12 hafta", level: "A1 → B2", format: "Maslak kampüs + canlı online", language: "FA · TR" },
    audience: [
      "Günlük yaşamda bağımsızlık isteyen Türkiye'ye yeni gelenler",
      "Türk meslektaşlar, müşteriler veya resmi kurumlarla çalışan profesyoneller",
      "TÖMER'e ve Türkçe üniversite eğitimine hazırlanan öğrenciler",
    ],
    outcomes: [
      "Günlük yaşamı güvenle yönetin: bürokrasi, alışveriş, sağlık ve sosyal ortamlar",
      "Türkçe iş toplantıları, aramalar ve yazışmalar yürütün",
      "Belgelenmiş bir seviyeyle TÖMER uyumlu sertifika sınavlarına girin",
    ],
    modules: [
      { title: "Temeller (A1)", topics: ["İstanbul telaffuzu ve ünlü uyumu", "Hayatta kalma Türkçesi: ulaşım, alışveriş, selamlaşma", "Sayılar, saat ve günlük rutinler"] },
      { title: "Günlük Yaşam (A2)", topics: ["Bürokrasi Türkçesi: banka, hastane, Göç İdaresi", "Kiralama, faturalar ve mahalle yaşamı", "Sohbet ve Türk sosyal kültürü"] },
      { title: "İş Türkçesi (B1)", topics: ["Toplantılar, müzakereler ve telefon adabı", "Profesyonel e-posta ve yazışma", "İşinize özel sektör terminolojisi"] },
      { title: "Kültür ve Akıcılık (B2)", topics: ["İstanbul deyimleri ve mizahı", "Medya: haberler, diziler, podcast'ler", "Sunum ve münazara pratiği"] },
      { title: "TÖMER ve Sertifika Hazırlığı", topics: ["Sınav formatı ve stratejisi", "Eğitmen geri bildirimli tam deneme sınavları", "Final seviye değerlendirmesi ve sertifikasyon"] },
    ],
    credential: "İstanbul Türkçesi Yeterlilik Sertifikası (TÖMER uyumlu)",
  },
};

/* ============================== PERSIAN ============================== */

const coursesFa: Record<CourseSlug, CourseContent> = {
  "artificial-intelligence": {
    slug: "artificial-intelligence",
    key: "ai",
    title: "هوش مصنوعی: اتوماسیون، مهندسی و سئو",
    tagline: "با هوش مصنوعی بسازید، خودکار کنید و در نتایج جست‌وجو بدرخشید — در یک برنامه کاملاً عملی.",
    intro:
      "هوش مصنوعی پُراهرم‌ترین مهارت این دهه است و بیشتر مردم هنوز فقط از چت‌بات‌ها سؤال می‌پرسند. این برنامه شما را از کاربر به سازنده تبدیل می‌کند: خودکارسازی فرایندهای واقعی کسب‌وکار، مهندسی قابلیت‌های هوش مصنوعی روی داده‌های خودتان و مدیریت عملیات محتوایی که بر جست‌وجو مسلط می‌شود.",
    glance: { duration: "۱۰ هفته", level: "مبتدی ← پیشرفته", format: "آنلاین زنده + پردیس ماسلاک", language: "FA · TR · EN" },
    audience: [
      "متخصصانی که می‌خواهند کارهای روزانه را خودکار و خروجی خود را چند برابر کنند",
      "برنامه‌نویسان و بازاریابانی که هوش مصنوعی را به ابزارهای فعلی خود اضافه می‌کنند",
      "بنیان‌گذارانی که ایده‌های محصول هوش مصنوعی را اعتبارسنجی و اجرا می‌کنند",
    ],
    outcomes: [
      "یک اتوماسیون هوش مصنوعی واقعی برای یک فرایند کسب‌وکار تحویل دهید",
      "یک دستیار مبتنی بر RAG روی داده‌های خودتان بسازید و مستقر کنید",
      "یک موتور تولید محتوای سئو مبتنی بر هوش مصنوعی را از ابتدا تا انتها اداره کنید",
    ],
    modules: [
      { title: "مبانی هوش مصنوعی مدرن", topics: ["مدل‌های زبانی واقعاً چگونه کار می‌کنند — توکن، پنجره متن و هزینه", "مهندسی پرامپت که در محیط واقعی دوام می‌آورد", "اکوسیستم ابزارهای هوش مصنوعی: APIها، ابزارهای واسط و ایجنت‌ها"] },
      { title: "اتوماسیون با هوش مصنوعی", topics: ["خطوط اتوماسیون بدون کدنویسی با n8n و Make", "ایجنت‌های چندمرحله‌ای برای فروش، پشتیبانی و عملیات", "اتصال هوش مصنوعی به ایمیل، اسپردشیت، CRM و واتس‌اپ"] },
      { title: "مهندسی هوش مصنوعی", topics: ["پایتون برای هوش مصنوعی: فراخوانی و زنجیره‌کردن APIها", "RAG: امبدینگ‌ها، پایگاه‌های برداری و کیفیت بازیابی", "ارزیابی، گاردریل‌ها و کنترل هزینه"] },
      { title: "سئو با هوش مصنوعی", topics: ["تولید محتوای برنامه‌ریزی‌شده در مقیاس — بدون جریمه گوگل", "مدل‌سازی نیت جست‌وجو و اعتبار موضوعی", "لینک‌سازی داخلی خودکار و به‌روزرسانی محتوا"] },
      { title: "پروژه پایانی: عرضه یک محصول هوش مصنوعی", topics: ["تعریف، ساخت و ارائه یک ابزار واقعی هوش مصنوعی", "استقرار، قیمت‌گذاری و جایگاه‌سازی", "ارائه نمونه‌کار و بازخورد متخصصان"] },
    ],
    credential: "متخصص هوش مصنوعی دارای گواهی TurkeyBridge",
  },

  "software-development": {
    slug: "software-development",
    key: "software",
    title: "برنامه‌نویسی و توسعه نرم‌افزار",
    tagline: "از نخستین خط کد تا محصول مستقرشده — در یک برنامه، آماده بازار کار.",
    intro:
      "این یک ماراتن ویدیوهای آموزشی نیست؛ یک دوره استاد-شاگردی است. از روز اول کد می‌نویسید، با گردش‌کار حرفه‌ای اپلیکیشن‌های واقعی می‌سازید و با نمونه‌کاری مستقرشده فارغ‌التحصیل می‌شوید که مدیران استخدام می‌توانند رویش کلیک کنند، نه فقط درباره‌اش بخوانند.",
    glance: { duration: "۱۴ هفته", level: "مناسب مبتدیان", format: "آنلاین زنده + پردیس ماسلاک", language: "FA · TR · EN" },
    audience: [
      "کسانی که می‌خواهند با مسیری ساختاریافته و همراه با منتور وارد دنیای فناوری شوند",
      "دانشجویانی که تئوری دانشگاه را با مهارت عملی قابل استخدام تکمیل می‌کنند",
      "کارآفرینانی که می‌خواهند محصول خود را بدون برون‌سپاری بسازند",
    ],
    outcomes: [
      "اپلیکیشن‌های وب فول‌استک بسازید و مستقر کنید",
      "با گیت، کدریویو و گردش‌کار حرفه‌ای تیمی همکاری کنید",
      "با نمونه‌کاری از پروژه‌های مستقر در محیط واقعی فارغ‌التحصیل شوید",
    ],
    modules: [
      { title: "مبانی برنامه‌نویسی", topics: ["منطق، ساختمان داده و تجزیه مسئله", "مبانی جاوااسکریپت و پایتون", "دیباگ‌کردن مانند حرفه‌ای‌ها"] },
      { title: "مهندسی بک‌اند", topics: ["ساخت REST API با Node.js", "پایگاه داده: SQL و مدل‌سازی داده", "احراز هویت و اصول امنیت"] },
      { title: "فرانت‌اند با ری‌اکت", topics: ["کامپوننت‌ها، استیت و هوک‌ها", "Tailwind CSS و رابط‌های واکنش‌گرا", "مصرف API و کار با داده واقعی"] },
      { title: "گردش‌کار حرفه‌ای", topics: ["گیت، گیت‌هاب و فرهنگ کدریویو", "مبانی تست‌نویسی", "CI/CD و استقرار ابری"] },
      { title: "پروژه تیمی پایانی", topics: ["اسپرینت چابک روی یک بریف واقعی", "چرخه‌های کدریویو و بازآرایی", "روز دمو و بسته‌بندی نمونه‌کار"] },
    ],
    credential: "توسعه‌دهنده فول‌استک دارای گواهی TurkeyBridge",
  },

  "website-creation": {
    slug: "website-creation",
    key: "web",
    title: "طراحی و معماری وب‌سایت",
    tagline: "وب‌سایت‌هایی سریع، زیبا و آماده سئو برای مشتریان واقعی طراحی، ساخته و راه‌اندازی کنید.",
    intro:
      "هر کسب‌وکاری در دنیا به وب‌سایتی نیاز دارد که سریع بارگذاری شود، حرفه‌ای دیده شود و بازدیدکننده را به مشتری تبدیل کند. این دوره کلِ این حرفه را آموزش می‌دهد — از معماری اطلاعات و سیستم‌های طراحی تا فریم‌ورک‌های مدرن، کارایی و مهارت‌های کار با مشتری برای درآمدزایی از همه این‌ها.",
    glance: { duration: "۸ هفته", level: "مبتدی ← متوسط", format: "آنلاین زنده + پردیس ماسلاک", language: "FA · TR · EN" },
    audience: [
      "فریلنسرهایی که کسب‌وکار خدمات طراحی وب راه می‌اندازند",
      "بازاریابان و بنیان‌گذارانی که کنترل کامل حضور آنلاین خود را می‌خواهند",
      "طراحانی که مهارت توسعه را به جعبه‌ابزار خود اضافه می‌کنند",
    ],
    outcomes: [
      "وب‌سایت‌های کامل، واکنش‌گرا و چندصفحه‌ای را از صفر راه‌اندازی کنید",
      "با ساختارهای تمیز و سمنتیک، نمره +۹۰ در Core Web Vitals بگیرید",
      "پروژه‌های وب‌سایت را برای مشتریان پولی بسته‌بندی، قیمت‌گذاری و تحویل دهید",
    ],
    modules: [
      { title: "تجربه کاربری و معماری اطلاعات", topics: ["سفر کاربر و ساختار صفحات تبدیل‌محور", "وایرفریم از بریف تا نقشه نهایی", "دسترس‌پذیری به‌عنوان پایه طراحی"] },
      { title: "از طراحی تا کد", topics: ["سیستم‌های طراحی: رنگ، تایپوگرافی، فاصله‌گذاری", "گردش‌کار از فیگما به Tailwind CSS", "چیدمان‌های واکنش‌گرا و سازگار با RTL"] },
      { title: "ساخت با فریم‌ورک‌های مدرن", topics: ["صفحات، مسیریابی و کامپوننت‌ها در Next.js", "مدیریت محتوا و داده پویا", "فرم‌ها، اینتگریشن‌ها و آنالیتیکس"] },
      { title: "کارایی، سئو و انتشار", topics: ["Core Web Vitals و بهینه‌سازی تصاویر", "سئوی فنی و داده ساختاریافته", "دامنه، هاست و چک‌لیست انتشار"] },
      { title: "کار با مشتری و نمونه‌کار", topics: ["تعیین محدوده، قیمت‌دهی و قرارداد", "گردش‌کار بازبینی مشتری", "سایت نمونه‌کار و استراتژی جذب اولین مشتری"] },
    ],
    credential: "معمار وب دارای گواهی TurkeyBridge",
  },

  "digital-marketing": {
    slug: "digital-marketing",
    key: "marketing",
    title: "دیجیتال مارکتینگ و هک رشد",
    tagline: "رشد در کل قیف: ترافیک، تبدیل، نگهداشت — با معیار درآمد، نه لایک.",
    intro:
      "بودجه‌های بازاریابی را کسانی هدر می‌دهند که فعالیت را با نتیجه اشتباه می‌گیرند. این برنامه «اپراتور» تربیت می‌کند: کمپین‌های واقعی اجرا می‌کنید، داشبوردهای واقعی می‌خوانید و فرایند رشد آزمایش‌محوری را می‌آموزید که سریع‌ترین شرکت‌های دنیا استفاده می‌کنند.",
    glance: { duration: "۸ هفته", level: "مبتدی ← متوسط", format: "آنلاین زنده + پردیس ماسلاک", language: "FA · TR · EN" },
    audience: [
      "صاحبان کسب‌وکاری که جذب مشتری را می‌خواهند در کنترل خودشان باشد",
      "کارشناسان بازاریابی در حال گذار از اجرا به استراتژی",
      "فریلنسرهایی که خدمات پرفورمنس مارکتینگ راه می‌اندازند",
    ],
    outcomes: [
      "کمپین‌های پولی متا و گوگل را با بودجه‌بندی مطمئن برنامه‌ریزی و اجرا کنید",
      "موتور محتوا و سئویی بسازید که ماه‌به‌ماه رشد مرکب کند",
      "آزمایش‌های رشد اجرا کنید و نتایج را به زبان درآمد گزارش دهید",
    ],
    modules: [
      { title: "استراتژی رشد و قیف‌ها", topics: ["جایگاه‌سازی و طراحی پیشنهاد", "نقشه قیف: از آگاهی تا نگهداشت", "اقتصاد واحد: CAC، LTV و دوره بازگشت"] },
      { title: "تبلیغات پرفورمنس", topics: ["تبلیغات متا: تست خلاقیت و مقیاس‌دهی", "تبلیغات گوگل: شکار نیت جست‌وجو", "لندینگ‌پیج‌هایی که تبدیل می‌کنند"] },
      { title: "موتورهای محتوا و سئو", topics: ["تحقیق کلمات کلیدی و نقشه‌های موضوعی", "سیستم‌های تولید محتوا", "لینک‌سازی و روابط عمومی دیجیتال"] },
      { title: "آنالیتیکس و اتریبیوشن", topics: ["راه‌اندازی GA4 و ردیابی رویدادها", "داشبوردهایی که تصمیم می‌سازند", "مدل‌های اتریبیوشن و محدودیت‌هایشان"] },
      { title: "اسپرینت‌های آزمایش رشد", topics: ["طراحی فرضیه و اولویت‌بندی", "تست A/B در عمل", "کمپین پایانی: بررسی نتایج واقعی"] },
    ],
    credential: "بازاریاب رشد دارای گواهی TurkeyBridge",
  },

  videography: {
    slug: "videography",
    key: "videography",
    title: "فیلم‌برداری و عکاسی حرفه‌ای",
    tagline: "بر دوربین، نور و داستان مسلط شوید — مهارت تولید در سطح تجاری.",
    intro:
      "برندها برای تصویری که می‌فروشد، هزینه‌های بالا می‌پردازند؛ و فاصله آماتور تا حرفه‌ای در تکنیک است، نه تجهیزات. این برنامه عملی فن دوربین، نورپردازی، صدا و کارگردانی را پوشش می‌دهد — با فیلم‌برداری واقعی در هر هفته.",
    glance: { duration: "۸ هفته", level: "مبتدی ← متوسط", format: "پردیس ماسلاک (استودیو) + لوکیشن", language: "FA · TR · EN" },
    audience: [
      "علاقه‌مندان فیلم‌برداری و عکاسی که می‌خواهند این حرفه را به درآمد برسانند",
      "تولیدکنندگان محتوایی که از تصویر موبایلی به تولید حرفه‌ای ارتقا می‌یابند",
      "صاحبان کسب‌وکاری که رسانه تجاری خود را شخصاً تولید می‌کنند",
    ],
    outcomes: [
      "در هر شرایط نوری، با اطمینان در حالت دستی (Manual) تصویربرداری کنید",
      "چیدمان نور و کارگردانی مصاحبه، محصول و رویداد را اجرا کنید",
      "با نمونه‌کاری در سطح تجاری که در طول دوره ساخته‌اید فارغ‌التحصیل شوید",
    ],
    modules: [
      { title: "فن دوربین", topics: ["تسلط بر مثلث نوردهی: ایزو، دیافراگم، شاتر", "لنزها، فاصله کانونی و عمق میدان", "پروفایل‌های رنگی و فیلم‌برداری برای تدوین"] },
      { title: "نور و ترکیب‌بندی", topics: ["چیدمان سه‌نقطه‌ای و نور طبیعی", "قواعد کادر — و زمان شکستن آن‌ها", "دمای رنگ و حس تصویر"] },
      { title: "صدابرداری در لوکیشن", topics: ["انواع میکروفون و جای‌گذاری", "ضبط دیالوگ تمیز در لوکیشن", "سینک و گردش‌کار پشتیبان‌گیری"] },
      { title: "کارگردانی پروژه‌های واقعی", topics: ["پیش‌تولید: شات‌لیست و استوری‌بورد", "هدایت سوژه و مشتری", "سناریوهای تبلیغاتی، مصاحبه و رویداد"] },
      { title: "هفته تولید نمونه‌کار", topics: ["یک تولید کامل از بریف تا تحویل", "کار در نقش‌های مختلف گروه", "بازبینی نمونه‌کار با حرفه‌ای‌های بازار"] },
    ],
    credential: "متخصص تولید تصویری دارای گواهی TurkeyBridge",
  },

  "video-editing": {
    slug: "video-editing",
    key: "editing",
    title: "تدوین ویدیو و پس‌تولید",
    tagline: "کارهایی را برش بزنید، رنگ کنید و نهایی کنید که مشتری بابتشان نرخ ویژه می‌پردازد.",
    intro:
      "تدوین جایی است که تصویر به داستان تبدیل می‌شود — و بیشتر مسیرهای شغلی حوزه ویدیو در واقع همین‌جا ساخته می‌شوند. از مبانی تایم‌لاین تا اصلاح رنگ، موشن گرافیک و طراحی صدا، پروژه‌های واقعی را با استاندارد پخش حرفه‌ای به پایان می‌رسانید.",
    glance: { duration: "۸ هفته", level: "مبتدی ← متوسط", format: "آنلاین زنده + پردیس ماسلاک", language: "FA · TR · EN" },
    audience: [
      "تدوینگرانی که مسیر فریلنسری یا آژانسی می‌سازند",
      "فیلم‌بردارانی که پس‌تولید را به خدمات خود اضافه می‌کنند",
      "تولیدکنندگان شبکه‌های اجتماعی که به خروجی سریع‌تر و تمیزتر نیاز دارند",
    ],
    outcomes: [
      "با اطمینان در Premiere Pro و DaVinci Resolve تدوین کنید",
      "تصاویر را با استانداردی یکدست و سینمایی رنگ‌آمیزی کنید",
      "خروجی نهایی آماده تحویل برای هر پلتفرم و فرمت ارائه دهید",
    ],
    modules: [
      { title: "مبانی تدوین", topics: ["گردش‌کار Premiere Pro و DaVinci Resolve", "سازمان‌دهی پروژه و تدوین با پراکسی", "برش، ترنزیشن و اصول زمان‌بندی"] },
      { title: "داستان‌گویی و ریتم", topics: ["ساختار: قلاب، تعلیق، پاداش", "ضرب‌آهنگ برای تبلیغ، فیلم و شبکه اجتماعی", "تدوین بر اساس موسیقی و دیالوگ"] },
      { title: "اصلاح رنگ", topics: ["تفاوت تصحیح رنگ و رنگ‌آمیزی خلاقانه", "اسکوپ‌ها، LUTها و رنگ پوست", "همسان‌سازی تصاویر چنددوربینه"] },
      { title: "موشن گرافیک و طراحی صدا", topics: ["تیتراژ، زیرنویس معرفی و لوگوی متحرک", "کی‌فریم و نرم‌سازی حرکت", "لایه‌بندی، میکس و مسترینگ صدا"] },
      { title: "تحویل به مشتری و مسیر شغلی", topics: ["تنظیمات خروجی برای هر پلتفرم", "گردش‌کار بازبینی و دورهای بازخورد", "قیمت‌گذاری، نمونه‌کار و یافتن مشتری"] },
    ],
    credential: "تدوینگر پس‌تولید دارای گواهی TurkeyBridge",
  },

  "social-media": {
    slug: "social-media",
    key: "social",
    title: "استراتژی و مدیریت شبکه‌های اجتماعی",
    tagline: "مخاطبانِ در حال اسکرول را به جامعه تبدیل کنید — و جامعه را به مشتری.",
    intro:
      "همه می‌توانند پست بگذارند؛ عده کمی می‌توانند رشد بدهند. این دوره مدیر شبکه‌های اجتماعی حرفه‌ای تربیت می‌کند: استراتژی پلتفرم، سیستم‌های محتوایی که هرگز ته نمی‌کشند، هنر جامعه‌سازی، تقویت پولی و مهارت گزارش‌دهی که مشتری را نگه می‌دارد.",
    glance: { duration: "۶ هفته", level: "همه سطوح", format: "آنلاین زنده + پردیس ماسلاک", language: "FA · TR · EN" },
    audience: [
      "علاقه‌مندان مدیریت شبکه‌های اجتماعی که مهارتی آماده بازار می‌خواهند",
      "صاحبان کسب‌وکاری که کانال‌های برند خود را شخصاً اداره می‌کنند",
      "بازاریابانی که رسانه ارگانیک را به جعبه‌ابزار استراتژی خود اضافه می‌کنند",
    ],
    outcomes: [
      "برای هر برندی یک استراتژی شبکه اجتماعی تمام‌قیف طراحی کنید",
      "یک سیستم محتوایی ۳۰ روزه با تولید انبوه و زمان‌بندی اجرا کنید",
      "گزارش‌های ماهانه‌ای ارائه دهید که مشتری آن‌ها را می‌فهمد و ارزشمند می‌داند",
    ],
    modules: [
      { title: "استراتژی پلتفرم", topics: ["اینستاگرام، تیک‌تاک، لینکدین، یوتیوب: هر کدام برای چه کسی", "مکانیک الگوریتم و بهینه‌سازی سیگنال", "تحلیل رقبا و جایگاه‌سازی"] },
      { title: "سیستم‌های محتوا", topics: ["ستون‌های محتوایی و تقویم ۳۰ روزه", "گردش‌کار تولید انبوه", "قلاب‌ها، کپشن‌ها و فرمت‌های خلاقانه"] },
      { title: "جامعه و صدای برند", topics: ["راهنمای لحن و سناریوهای پاسخ‌گویی", "قیف‌های دایرکت و آیین‌های جامعه", "مدیریت بحران و اعتبار"] },
      { title: "تقویت پولی", topics: ["تفاوت Boost و Ads Manager", "ری‌تارگتینگ مخاطبان گرم", "همکاری با اینفلوئنسرها و کریتورها"] },
      { title: "آنالیتیکس و گزارش‌دهی", topics: ["معیارهای واقعی در برابر معیارهای نمایشی", "قالب‌های گزارش ماهانه مشتری", "تبدیل بینش‌ها به برنامه ماه بعد"] },
    ],
    credential: "استراتژیست شبکه‌های اجتماعی دارای گواهی TurkeyBridge",
  },

  "turkish-language": {
    slug: "turkish-language",
    key: "turkish",
    title: "زبان ترکی — ترکی استانبولی",
    tagline: "ترکی برای کار و زندگی روزمره — با مدرس بومی استانبولی که فارسی را روان صحبت می‌کند.",
    intro:
      "زندگی در ترکیه از لحظه‌ای که ترکی صحبت کنید باز می‌شود — در بانک، در بازار و پشت میز مذاکره. این برنامه توسط مدرسی برگزار می‌شود که ترکی استانبولی زبان مادری اوست و به فارسی نیز کاملاً مسلط است: دستور زبان به زبان شما توضیح داده می‌شود و لهجه‌تان با استاندارد واقعی استانبول شکل می‌گیرد.",
    glance: { duration: "۱۲ هفته برای هر سطح", level: "A1 تا B2", format: "پردیس ماسلاک + آنلاین زنده", language: "FA · TR" },
    audience: [
      "تازه‌واردانی که استقلال در زندگی روزمره ترکیه را می‌خواهند",
      "شاغلانی که با همکاران، مشتریان یا ادارات ترک سروکار دارند",
      "دانشجویانی که برای TÖMER و تحصیل به زبان ترکی آماده می‌شوند",
    ],
    outcomes: [
      "زندگی روزمره را با اطمینان اداره کنید: ادارات، خرید، درمان و روابط اجتماعی",
      "جلسات کاری، تماس‌ها و مکاتبات را به زبان ترکی انجام دهید",
      "با سطحی مستند، در آزمون‌های گواهی منطبق با TÖMER شرکت کنید",
    ],
    modules: [
      { title: "پایه‌ها (A1)", topics: ["تلفظ استانبولی و هماهنگی مصوت‌ها", "ترکیِ ضروری: حمل‌ونقل، خرید، احوال‌پرسی", "اعداد، ساعت و برنامه‌های روزانه"] },
      { title: "زندگی روزمره (A2)", topics: ["ترکی اداری: بانک، بیمارستان، اداره مهاجرت", "اجاره خانه، قبض‌ها و زندگی در محله", "گفت‌وگوهای کوتاه و فرهنگ اجتماعی ترکیه"] },
      { title: "ترکی تجاری (B1)", topics: ["جلسات، مذاکره و آداب تلفنی", "ایمیل و مکاتبات حرفه‌ای", "واژگان تخصصی متناسب با کار شما"] },
      { title: "فرهنگ و سلاست (B2)", topics: ["اصطلاحات و طنز استانبولی", "غوطه‌وری در رسانه: اخبار، سریال، پادکست", "تمرین ارائه و مناظره"] },
      { title: "آمادگی TÖMER و گواهینامه", topics: ["ساختار آزمون و استراتژی", "آزمون‌های آزمایشی کامل با بازخورد مدرس", "ارزیابی نهایی سطح و صدور گواهی"] },
    ],
    credential: "گواهی تسلط بر ترکی استانبولی (منطبق با TÖMER)",
  },
};

/* ------------------------------- accessors ------------------------------- */

const coursesByLocale: Record<Locale, Record<CourseSlug, CourseContent>> = {
  en: coursesEn,
  tr: coursesTr,
  fa: coursesFa,
};

export function getCourse(locale: Locale, slug: string): CourseContent | undefined {
  return coursesByLocale[locale]?.[slug as CourseSlug];
}

export function getAllCourses(locale: Locale): CourseContent[] {
  return courseSlugs.map((slug) => coursesByLocale[locale][slug]);
}
